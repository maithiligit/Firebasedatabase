import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
//local import
import horizontalScale from '../../res/Scale';
import {RootView, SimpleTextInput, SimpleButton} from '../components/index';
import R from '../R';

export const AboutUs = (props) => {
  const [password, setpassword] = useState('');
  const [flag, setFlag] = useState(true);
  return (
    <RootView
      customStyle={{
        alignItems: 'center',
        //  justifyContent: 'center',
      }}>
      <View
        style={{
          marginTop: horizontalScale(30),
          height: horizontalScale(400),
          width: horizontalScale(330),
          borderColor: '#800000',
          borderWidth: 1,
        }}>
        <Text
          style={{
            color: '#800000',
            fontSize: horizontalScale(30),
            fontWeight: 'bold',
            alignSelf: 'center',
            marginTop: horizontalScale(30),
          }}>
          Project Created By
        </Text>

        <Text
          style={{
            color: 'green',
            fontSize: horizontalScale(20),
            fontWeight: 'bold',
            marginLeft: horizontalScale(30),
            // alignSelf: 'center',
            marginTop: horizontalScale(30),
          }}>
          1.Name:- Soniya kolge
        </Text>
        <Text
          style={{
            color: 'green',
            fontSize: horizontalScale(20),
            fontWeight: 'bold',
            marginLeft: horizontalScale(45),
            marginTop: horizontalScale(5),
          }}>
          Roll No:- 17
        </Text>

        <Text
          style={{
            color: 'green',
            fontSize: horizontalScale(20),
            fontWeight: 'bold',
            marginLeft: horizontalScale(30),
            // alignSelf: 'center',
            marginTop: horizontalScale(30),
          }}>
          2.Name:- Maithili Pagare
        </Text>
        <Text
          style={{
            color: 'green',
            fontSize: horizontalScale(20),
            fontWeight: 'bold',
            marginLeft: horizontalScale(45),
            marginTop: horizontalScale(5),
          }}>
          Roll No:- 18
        </Text>

        <Text
          style={{
            color: 'green',
            fontSize: horizontalScale(20),
            fontWeight: 'bold',
            marginLeft: horizontalScale(30),
            // alignSelf: 'center',
            marginTop: horizontalScale(30),
          }}>
          3.Name:- Anushka wable
        </Text>
        <Text
          style={{
            color: 'green',
            fontSize: horizontalScale(20),
            fontWeight: 'bold',
            marginLeft: horizontalScale(45),
            marginTop: horizontalScale(5),
          }}>
          Roll No:- 24
        </Text>
      </View>
    </RootView>
  );
};
