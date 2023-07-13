import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeIcon} from '@/assets/icons';
import {TabDefault, TabPageNavigation} from './config.navigator';

const {Navigator, Screen} = createBottomTabNavigator();

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
