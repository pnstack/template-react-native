import HomePage from '../pages';
import TabNavigator from './tab.navigator';

export enum StackPage {
  Home = 'HomeTab',
}
export const StackDefault = StackPage.Home;

export const StackPageNavigation = [
  {
    name: StackPage.Home,
    component: TabNavigator,
    options: {},
  },
];

export enum TabPage {
  Home = 'home',
  Settings = 'settings',
}
export const TabDefault = TabPage.Home;

export const TabPageNavigation = [
  {
    name: TabPage.Home,
    component: HomePage,
    options: {},
  },
  {
    name: TabPage.Settings,
    component: HomePage,
    options: {},
  },
];