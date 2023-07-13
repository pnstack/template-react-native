import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './stack.navigator';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
export default AppNavigator;
