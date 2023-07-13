import React from 'react';
import LocalesProvider from './locales';
import {I18nextProvider} from 'react-i18next';
import i18n from './locales/i18n';
import AppNavigator from './navigator/app.navigator';
import {Text} from 'react-native';

function App(): JSX.Element {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <AppNavigator />
        {/* <Text>Hello</Text> */}
      </I18nextProvider>
    </>
  );
}

export default App;
