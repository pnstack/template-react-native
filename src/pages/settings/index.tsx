import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {AppContext} from '@/contexts/AppContext';
import {Table} from '@/components/Table';

const SettingsPage = () => {
  const {isDark, toggleTheme} = useContext(AppContext);

  return (
    <View>
      <Text>SettingsPage {isDark ? 'Dark' : 'light'}</Text>
      <Button
        onPress={() => {
          toggleTheme(!isDark);
        }}
        title="toggleTheme"
      />

     
    </View>
  );
};

export default SettingsPage;

const styles = StyleSheet.create({});
