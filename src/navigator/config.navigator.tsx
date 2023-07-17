import HomePage from '@/pages/home';
import SplashPage from '@/pages/splash';
import TabNavigator from './tab.navigator';
import HomeModule from '@/modules/home';

export enum StackPage {
  Splash = 'Splash',
  HomeModule = 'HomeModule',
  Main = 'Main',
}
export const StackDefault = StackPage.Main;

export const StackPageNavigation = [
  {
    name: StackPage.Splash,
    component: SplashPage,
    options: {},
  },
  {
    name: StackPage.HomeModule,
    component: HomeModule,
    options: {},
  },
  {
    name: StackPage.Main,
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