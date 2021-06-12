import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import horizontalScale from '../../res/Scale';
import {RootView, SimpleButton, CircleImage} from '../components/index';
import R from '../R';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import auth from '@react-native-firebase/auth';

const Otp = function ({
  route: {
    params: {phoneNumber},
  },
  navigation,
}) {
  const [flag, setFlag] = useState(false);

  const [otp, setOtp] = useState('');

  const [confirm, setConfirm] = useState(null);

  useEffect(() => {
    console.log(phoneNumber, 'phoneNumber');
    signInWithPhoneNumber();
  }, []);

  async function signInWithPhoneNumber() {
    try {
      const confirmation = await auth().signInWithPhoneNumber(
        '+91' + phoneNumber,
      );
      setConfirm(confirmation);
    } catch (e) {
      alert(JSON.stringify(e));
    }
  }

  async function confirmCode() {
    console.log(otp, 'code');
    try {
      const response = await confirm.confirm(otp);
      if (response) {
        alert('Login successfully');
        navigation.navigate('UserType');
      }
    } catch (e) {}
  }

  return (
    <RootView customStyle={styles.View}>
      <CircleImage
        source={R.images.man}
        style={{marginTop: horizontalScale(50)}}
      />
      <Text style={styles.text}>You Will Get OTP Via SMS</Text>

      <OTPInputView
        style={{width: '90%', height: 150, alignSelf: 'center'}}
        pinCount={6}
        //autoFocusOnLoad
        codeInputFieldStyle={styles.textInputStyle}
        codeInputHighlightStyle={styles.containerStyle}
        onCodeFilled={(code) => {
          setOtp(code);
        }}
      />
      {flag ? <Text style={styles.otpText}>Pleasr Enter Otp</Text> : null}
      <SimpleButton
        title="Proceed To Login"
        customTxtStyle={styles.customTxtStyle}
        customStyle={styles.customStyle}
        onPress={() => confirmCode()}
      />
    </RootView>
  );
};

const styles = StyleSheet.create({
  View: {
    alignItems: 'center',
    backgroundColor: R.colors.maroon,
  },
  otpText: {
    fontSize: horizontalScale(12),
    color: '#FF1493',
    marginTop: horizontalScale(10),
  },
  containerStyle: {
    backgroundColor: R.colors.maroon,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: horizontalScale(40),
  },
  textInputStyle: {
    borderRadius: 5,
    backgroundColor: R.colors.white,
    color: 'green',
    height: horizontalScale(45),
    width: horizontalScale(40),
  },
  text: {
    fontSize: horizontalScale(18),
    color: R.colors.white,
    fontWeight: 'bold',
    marginTop: horizontalScale(40),
  },
  customStyle: {
    backgroundColor: R.colors.lightPink,
    marginTop: horizontalScale(50),
  },
  customTxtStyle: {
    color: R.colors.maroon,
    fontSize: horizontalScale(18),
  },
});

export default Otp;
