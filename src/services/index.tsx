import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
} from '@urql/core';
import {createClient as createWSClient} from 'graphql-ws';
import {Client, Provider as GraphqlProvider, subscriptionExchange} from 'urql';
import {APP_GRAPHQL_ENDPOINT, APP_GRAPHQL_WS} from './configs';

import SocketProvider from './socket/socket';
import { getAsyncStorage } from '@/utils/storage';
import { StorageKey } from '@/common/enums';

function getAccessToken() {
  return getAsyncStorage(StorageKey.ACCESS_TOKEN);
}
const wsClient = createWSClient({
  url: APP_GRAPHQL_WS,
  connectionParams: async () => {
    const token = getAccessToken();
    if (token) {
      return {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    } else
      return {
        headers: {},
      };
  },
});

const graphqlClient = createClient({
  url: APP_GRAPHQL_ENDPOINT,
  exchanges: [
    dedupExchange,
    cacheExchange,
    fetchExchange,
    // @ts-ignore
    subscriptionExchange({
      forwardSubscription: operation => ({
        subscribe: (sink: any) => ({
          // @ts-ignore
          unsubscribe: wsClient?.subscribe(operation, sink),
        }),
      }),
    }),
  ],
  // @ts-ignore
  fetchOptions: async () => {
    const token = getAccessToken();
    if (token) {
      return {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    } else
      return {
        headers: {},
      };
  },
});

export interface ApiProviderProps {
  children: React.ReactNode;
}

const ApiProvider = ({children}: ApiProviderProps) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <GraphqlProvider value={graphqlClient as Client}>
        <SocketProvider>{children}</SocketProvider>
      </GraphqlProvider>
    </QueryClientProvider>
  );
};
export default ApiProvider;
