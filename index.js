/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

if (__DEV__) {
  import('./.ondevice/App').then(module => {
    const AppDev = module.default;
    AppRegistry.registerComponent(appName, () => AppDev);
  });
} else {
  AppRegistry.registerComponent(appName, () => App);
}

