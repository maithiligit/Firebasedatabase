import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

import auth from '@react-native-firebase/auth';

const OTPScreen = function ({
  route: {
    params: {phoneNumber},
  },
  navigation,
}) {
  const [code, setCode] = useState('');

  const [confirm, setConfirm] = useState(null);

  useEffect(() => {
    signInWithPhoneNumber();
  }, []);

  async function signInWithPhoneNumber() {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (e) {
      alert(JSON.stringify(e));
    }
  }

  async function confirmCode() {
    try {
      const response = await confirm.confirm(code);
      if (response) {
        navigation.navigate('SuccessScreen');
      }
    } catch (e) {}
  }

  return (
    // <ErrorBoundary screenName={'OTPScreen'}>
    <View style={styles.container}>
      <Text>Enter OTP sent to your{' ' + phoneNumber}</Text>
      <View>
        <TextInput
          keyboardType={'numeric'}
          placeholder="123456"
          value={code}
          onChangeText={text => setCode(text)}
        />
      </View>

      <Button
        title={'Submit'}
        textStyle={styles.submitButtonText}
        onPress={() => confirmCode()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    alignItems: 'center',
    paddingTop: 130,
  },
  submitButtonText: {
    color: 'white',
  },
  // otpText: {
  //   color: colors.BLUE,
  //   fontSize: 18,
  //   width: '100%',
  // },
});

export default OTPScreen;
