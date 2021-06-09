import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
//local imports
import R from '../R';
import horizontalScale from '../../res/Scale';
export const Card = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: horizontalScale(20),
        borderWidth: 0.5,
        alignSelf: 'center',
        width: '95%',
        height: '15%',
      }}>
      <Image
        source={props.img}
        style={{height: 25, width: 25, alignSelf: 'center', marginLeft: 20}}
      />

      <View style={{marginLeft: 15, alignSelf: 'center', width: '80%'}}>
        <Text
          style={{
            fontSize: horizontalScale(16),
            color: R.colors.black,
            fontWeight: 'bold',
          }}>
          {props.title}
        </Text>
        <Text
          style={{
            fontSize: horizontalScale(12),
            color: R.colors.gray,
            fontWeight: 'bold',
          }}>
          {props.value}
        </Text>
      </View>
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
