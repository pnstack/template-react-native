import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';

import {useTranslation} from 'react-i18next';
import {HomeIcon} from '@/assets/icons';
import TabNavigator from '@/navigator/tab.navigator';
import {AppContext} from '@/contexts/AppContext';

const HomePage = () => {
  const {t} = useTranslation();
  const {isDark, toggleTheme} = useContext(AppContext);
  return (
    <>
      <View className="flex bg-blue-200 flex-1">
        <Text>Hello {isDark ? 'Dark' : 'Light'}</Text>
        <TouchableOpacity className="w-10 h-10 bg-red-500 md:w-20 md:h-20 hover:bg-yellow-600 focus:bg-yellow-800 visited:bg-yellow-200">
          <Text>World</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
