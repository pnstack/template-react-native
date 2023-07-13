import React from 'react';
import RootNavigator from '@/navigator/app.navigator';
import LocalesProvider from './locales';
import {I18nextProvider} from 'react-i18next';
import i18n from './locales/i18n';

function App(): JSX.Element {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <RootNavigator />
      </I18nextProvider>
    </>
  );
}

export default App;
