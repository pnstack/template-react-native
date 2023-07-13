import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeIcon} from '@/assets/icons';
import HomePage from '@/modules/home/pages';


const {Navigator, Screen} = createBottomTabNavigator();
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
const TabNavigator = () => {
  return (
    <Navigator
      initialRouteName={TabDefault}
      screenOptions={{
        headerShown: false,
      }}>
      {TabPageNavigation.map((item): any => (
        <Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            ...item.options,
            tabBarIcon: HomeIcon,
          }}
        />
      ))}
    </Navigator>
  );
};
export default TabNavigator;
