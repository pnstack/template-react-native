import HomePage from '@/pages/home';
import {ParamListBase} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const {Navigator, Screen} = createNativeStackNavigator();

export enum StackPage {
  Home = 'home',
}
export const StackDefault = StackPage.Home;

export const StackPageNavigation = [
  {
    name: StackPage.Home,
    component: HomePage,
    options: {},
  },
];

const StackNavigator = () => {
  return (
    <Navigator
      initialRouteName={StackDefault}
      screenOptions={{headerShown: false}}>
      {StackPageNavigation.map(item => (
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
