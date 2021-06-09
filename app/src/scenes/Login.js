import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
// import smurfImg from 'assets/smurf.png';
import {
  RootView,
  SimpleTextInput,
  SimpleButton,
  CircleImage,
} from '../components/index';
import R from '../R';
import horizontalScale from '../../res/Scale';

export default Login = ({navigation}) => {
  const [phoneNumber, addPhoneNumber] = useState('+91');
  const [flag, setFlag] = useState(false);

  const GetOTP = () => {
    if (phoneNumber && phoneNumber.length > 9) {
      navigation.navigate('Otp', {phoneNumber});
    } else {
      setFlag(true);
    }
  };

  return (
    // <View style={styles.container}>
    //   {/* <Image style={styles.imageStyle} source={smurfImg} /> */}
    //   <TextInput
    //     value={phoneNumber}
    //     style={{
    //       height: 50,
    //       width: 300,
    //       paddingLeft: 20,
    //       backgroundColor: 'azure',
    //       fontSize: 20,
    //     }}
    //     placeholder="+91 1234567890"
    //     onChangeText={text => addPhoneNumber(text)}
    //   />
    //   <Pressable
    //     onPress={GetOTP}
    //     style={({pressed}) => ({
    //       ...styles.btnContainer,
    //       backgroundColor: pressed ? 'white' : 'blue',
    //     })}>
    //     <Text style={styles.btnText}>Get OTP!</Text>
    //   </Pressable>
    // </View>

    <RootView customStyle={styles.View}>
      <CircleImage
        source={R.images.man}
        style={{marginTop: horizontalScale(50)}}
      />
      <SimpleTextInput
        placeholder="Enter Mobile Number"
        keyboardType="numeric"
        placeholderTextColor={R.colors.maroon}
        onChangeText={(text) => addPhoneNumber(text)}
        customViewStyle={styles.customViewStyle}
        value={phoneNumber}
      />
      {flag ? (
        <Text style={styles.errorText}>Pleasr Enter Mobile No</Text>
      ) : null}
      <SimpleButton
        title="Get OTP"
        customTxtStyle={styles.customTxtStyle}
        customStyle={styles.customStyle}
        onPress={GetOTP}
        //onPress={() => props.navigation.navigate('OTPScreen')}
      />
    </RootView>
  );
};
const styles = StyleSheet.create({
  View: {
    alignItems: 'center',
    backgroundColor: R.colors.maroon,
  },
  customStyle: {
    backgroundColor: R.colors.lightPink,
    marginTop: horizontalScale(30),
  },
  customViewStyle: {
    marginTop: horizontalScale(50),
    backgroundColor: R.colors.white,
  },
  customTxtStyle: {
    color: R.colors.maroon,
    fontSize: horizontalScale(18),
  },
  errorText: {
    fontSize: horizontalScale(12),
    color: '#FF1493',
  },
});
