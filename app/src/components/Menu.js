import React from 'react';
import {View, Text, TextInput} from 'react-native';
//local imports
import R from '../R';
import horizontalScale from '../../res/Scale';
export const Menu = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        marginTop: horizontalScale(25),
        width: horizontalScale(300),
      }}>
      <View
        style={{
          flexDirection: 'row',
          height: horizontalScale(40),
          width: horizontalScale(180),
          borderColor: '#800000',
          borderWidth: 1,
          backgroundColor: 'rgba(255,221,250,0.79)',
          justifyContent: 'space-around',
        }}>
        <Text
          style={{
            fontSize: horizontalScale(18),
            alignSelf: 'center',
            color: '#800000',
            // fontWeight: 'bold',
          }}>
          {props.name}
        </Text>
        <Text
          style={{
            fontSize: horizontalScale(15),
            alignSelf: 'center',
            fontWeight: 'bold',
            color: '#800000',
          }}>
          {props.price}
        </Text>
      </View>
      <View
        style={{
          width: horizontalScale(40),
          height: horizontalScale(40),
          borderColor: '#800000',
          borderWidth: 1,
          justifyContent: 'center',
          backgroundColor: 'rgba(255,221,250,0.79)',

          // paddingLeft: horizontalScale(15),
          //  / alignItems: 'center',
          // fontSize: horizontalScale(18),
        }}>
        <TextInput
          style={{
            textAlign: 'center',
            fontSize: horizontalScale(18),
            color: '#800000',
            padding: horizontalScale(5),
          }}
          keyboardType="numeric"
          onChangeText={props.onChangeText}
          placeholder={'0'}
        />
      </View>
    </View>
  );
};
