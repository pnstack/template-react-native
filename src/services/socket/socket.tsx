import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {io, Socket} from 'socket.io-client';
import {APP_SOCKET_URL} from '../configs';
import {getAsyncStorage} from '@/utils/storage';
import {StorageKey} from '@/common/enums';
function getAccessToken() {
  return getAsyncStorage(StorageKey.ACCESS_TOKEN);
}
// Context
interface IAppContextDefault {
  socket: Socket;
  isConnected: boolean;
}

const DefautSocketState: IAppContextDefault = {
  socket: io(`${APP_SOCKET_URL}`, {
    reconnectionDelayMax: 10000,
    transports: ['websocket'],
    extraHeaders: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  }),
  isConnected: false,
};

export const SocketCtx = createContext<IAppContextDefault>(DefautSocketState);

interface Props {
  children: ReactNode;
}

const SocketProvider = ({children}: Props) => {
  const socket = useMemo(() => {
    return io(`${APP_SOCKET_URL}`, {
      reconnectionDelayMax: 10000,
      transports: ['websocket'],
      extraHeaders: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }, []);
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.disconnect();
    };
  }, [socket]);
  return (
    <SocketCtx.Provider
      value={{
        socket: socket,
        isConnected: isConnected,
      }}>
      {children}
    </SocketCtx.Provider>
  );
};

export function useSocket() {
  const {socket, isConnected} = useContext(SocketCtx);
  return {socket, isConnected};
}

export default SocketProvider;
