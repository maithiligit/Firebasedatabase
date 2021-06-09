import React, {useState} from 'react';
import {StyleSheet, Text, Image} from 'react-native';
//local import
import horizontalScale from '../../res/Scale';
import {RootView} from '../components/index';
import R from '../R';

export const OrderDone = (props) => {
  return (
    <RootView customStyle={styles.root}>
      <Image source={R.images.checked} style={styles.image} />
      <Text style={styles.text}>Order Successfully </Text>
    </RootView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    marginTop: horizontalScale(50),
  },
  image: {
    height: horizontalScale(120),
    width: horizontalScale(120),
    alignSelf: 'center',
  },
  text: {
    color: 'green',
    fontSize: horizontalScale(20),
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: horizontalScale(30),
  },
});
