import HomeModule from '@/modules/home';
import HomePage from '@/pages/home';
import {ParamListBase, RouteConfig} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import { moduleName } from '../configs';

export type StackParamList = {
  [key: string]: any;
};

const {Navigator, Screen} = createNativeStackNavigator<StackParamList>();

type ScreenProps = RouteConfig<ParamListBase, string, any, any, any> & {
  children?: React.ReactNode;
};

export enum StackPage {
  Home = 'Home',
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
      {StackPageNavigation.map((item): any => (
        <Screen
          key={item.name}
          name={`${moduleName}${item.name}`}
          component={item.component}
          options={item.options}
        />
      ))}
    </Navigator>
  );
};

export default StackNavigator;
