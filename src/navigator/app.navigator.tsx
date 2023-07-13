import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './stack.navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TabNavigator from './tab.navigator';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StackNavigator />
        {/* <TabNavigator /> */}
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
