import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {useTranslation} from 'react-i18next';
import {HomeIcon} from '@/assets/icons';
import TabNavigator from '@/navigator/tab.navigator';

const HomePage = () => {
  const {t} = useTranslation();

  return (
    <>
      {/* <HomeIcon color={"black"} width={50} height={50} />
      // <Text>HomePage {t('home')}</Text> */}
      {/* <TabNavigator /> */}
      <View>
        <Text>Hello</Text>
      </View>
    </>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
