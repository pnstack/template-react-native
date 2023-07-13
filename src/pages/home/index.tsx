import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {useTranslation} from 'react-i18next';
import {HomeIcon} from '@/assets/icons';

const HomePage = () => {
  const {t} = useTranslation();

  return (
    <View>
      <HomeIcon color={"black"} width={50} height={50} />
      <Text>HomePage {t('home')}</Text>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
