import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
//local imports
import R from '../R';
import horizontalScale from '../../res/Scale';
export const CircleImage = (props) => {
  return (
    <View style={[styles.View, props.style]}>
      <Image source={props.source} style={[styles.image, props.img]} />
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    backgroundColor: '#fff',
    borderRadius: horizontalScale(458),
    //marginTop: horizontalScale(50),
    height: horizontalScale(180),
    justifyContent: 'center',
    width: horizontalScale(180),
  },
  image: {
    height: horizontalScale(120),
    width: horizontalScale(135),
    alignSelf: 'center',
  },
});
