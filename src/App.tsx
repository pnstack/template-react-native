import React from 'react';
import {I18nextProvider} from 'react-i18next';
import i18n from './locales/i18n';
import AppNavigator from './navigator/app.navigator';
import ApiProvider from './services';
import {AppContextProvider} from './contexts/AppContext';

function App(): JSX.Element {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <ApiProvider>
          <AppContextProvider>
            <AppNavigator />
          </AppContextProvider>
        </ApiProvider>
      </I18nextProvider>
    </>
  );
}

export default App;
