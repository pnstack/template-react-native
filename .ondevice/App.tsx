import DevMenu from 'react-native-dev-menu';

import StorybookUIRoot from './Storybook';
import {NavigationContainer} from '@react-navigation/native';
import {I18nextProvider} from 'react-i18next';
import i18n from '@/locales/i18n';
import AppNavigator from '@/navigator/app.navigator';
import React, {useState} from 'react';

const AppDev = () => {
  const [isStorybook, setIsStorybook] = useState(false);

  if (__DEV__) {
    DevMenu.addItem('Toggle storybook', () => setIsStorybook(prev => !prev));
  }
  return (
    <I18nextProvider i18n={i18n}>
      {isStorybook ? (
        <NavigationContainer>
          <StorybookUIRoot />
        </NavigationContainer>
      ) : (
        <AppNavigator />
      )}
    </I18nextProvider>
  );
};

export default AppDev;
