import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StackDefault, StackPageNavigation } from './config.navigator';

export type StackParamList = {
  [key: string]: any;
};

const {Navigator, Screen} = createNativeStackNavigator<StackParamList>();

const StackNavigator = () => {
  return (
    <Navigator
      initialRouteName={StackDefault}
      screenOptions={{headerShown: false}}>
      {StackPageNavigation.map((item): any => (
        <Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={item.options}
        />
      ))}
    </Navigator>
  );
};

export default StackNavigator;
