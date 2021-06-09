import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
//local import
import horizontalScale from '../../res/Scale';
import {RootView, SimpleTextInput, SimpleButton} from '../components/index';
import R from '../R';

export const Logout = (props) => {
  const [password, setpassword] = useState('');
  const [flag, setFlag] = useState(true);
  return (
    <RootView
      customStyle={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          height: horizontalScale(250),
          width: horizontalScale(330),
          borderColor: '#800000',
          borderWidth: 1,
        }}>
        <Text
          style={{
            color: '#800000',
            fontSize: horizontalScale(20),
            fontWeight: 'bold',
            alignSelf: 'center',
            marginTop: horizontalScale(30),
          }}>
          Are You Want To Logout ?
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <SimpleButton
            title="Cancel"
            customTxtStyle={{color: '#fff', fontSize: horizontalScale(18)}}
            customStyle={{
              backgroundColor: 'gray',
              alignSelf: 'center',
              marginTop: horizontalScale(50),
              height: horizontalScale(50),
              width: horizontalScale(120),
            }}
            onPress={() => props.navigation.goBack()}
          />
          <SimpleButton
            title="Logout"
            customTxtStyle={{color: '#fff', fontSize: horizontalScale(18)}}
            customStyle={{
              backgroundColor: 'red',
              alignSelf: 'center',
              marginTop: horizontalScale(50),
              height: horizontalScale(50),
              width: horizontalScale(120),
            }}
            onPress={() => props.navigation.navigate('Login')}
          />
        </View>
      </View>
    </RootView>
  );
};
