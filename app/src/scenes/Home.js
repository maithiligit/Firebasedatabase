import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import * as firebase from 'firebase';

//local import
import horizontalScale from '../../res/Scale';
import {
  RootView,
  Menu,
  SimpleButton,
  CircleImage,
  SimpleTextInput,
} from '../components/index';
import R from '../R';
// import {firebaseConfig} from '../config';

// firebase.initializeApp(firebaseConfig);
import database from '@react-native-firebase/database';

export const Home = (props) => {
  const [veg, setVeg] = useState(0);
  const [chapati, setChapati] = useState(0);
  const [dal, setDal] = useState(0);
  const [rice, setRice] = useState(0);
  const [price, setPrice] = useState(0);
  const [username, addUsername] = useState('');
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    // const myData = database()
    //   .ref('Users')
    //   .on('value', (snapshot) => {
    //     console.log('User data: ', snapshot.val());
    //   });
  }, []);

  const calculate = () => {
    var total = 0;
    total = 15 * veg + 5 * chapati + 15 * dal + 15 * rice;
    props.navigation.navigate('TotalPrice', {
      total: total,
      veg: veg,
      chapati: chapati,
      dal: dal,
      rice: rice,
      username: username,
    });
  };
  return (
    <RootView customStyle={styles.root}>
      <ScrollView style={{}}>
        <CircleImage
          source={R.images.tiffinBox}
          style={{
            alignSelf: 'center',
            height: horizontalScale(160),
            width: horizontalScale(160),
          }}
        />
        <SimpleTextInput
          placeholder="Enter User Name"
          placeholderTextColor={R.colors.maroon}
          onChangeText={(text) => addUsername(text)}
          customViewStyle={styles.customViewStyle}
          value={username}
        />
        {flag ? (
          <Text style={styles.errorText}>Pleasr Enter Mobile No</Text>
        ) : null}
        <Menu
          name={'Veg'}
          price={'Rs.15'}
          onChangeText={(veg) => setVeg(veg)}
        />
        <Menu
          name={'Chapati'}
          price={'Rs.5'}
          onChangeText={(chapati) => setChapati(chapati)}
        />
        <Menu
          name={'Dal'}
          price={'Rs.15'}
          onChangeText={(dal) => setDal(dal)}
        />
        <Menu
          name={'Rice'}
          price={'Rs.15'}
          onChangeText={(rice) => setRice(rice)}
        />

        <SimpleButton
          title="Calculate"
          customTxtStyle={styles.customTxtStyle}
          customStyle={styles.customStyle}
          onPress={calculate}
        />
      </ScrollView>
    </RootView>
  );
};
const styles = StyleSheet.create({
  root: {
    backgroundColor: R.colors.white,
  },
  customTxtStyle: {
    color: '#fff',
    fontSize: horizontalScale(18),
  },
  customViewStyle: {
    marginTop: horizontalScale(30),
    backgroundColor: 'rgba(255,221,250,0.79)',
    alignSelf: 'center',
    borderRadius: horizontalScale(0),
    width: horizontalScale(300),
    borderColor: '#800000',
    borderWidth: 1,
  },
  customStyle: {
    backgroundColor: '#800000',
    alignSelf: 'center',
    marginTop: horizontalScale(50),
    marginBottom: horizontalScale(20),
  },
});
