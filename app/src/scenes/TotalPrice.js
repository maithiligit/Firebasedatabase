import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import database from '@react-native-firebase/database';

//local import
import horizontalScale from '../../res/Scale';
import {RootView, Card, SimpleButton} from '../components/index';
import R from '../R';

export const TotalPrice = (props) => {
  const [location, setlocation] = useState('');
  const [flag, setFlag] = useState(false);

  const getLocation = () => {
    const key = '03d87b93bc3308';

    Geolocation.getCurrentPosition((info) => {
      console.log(info);
      const api = `https://us1.locationiq.com/v1/reverse.php?key=${key}&lat=${info.coords.latitude}&lon=${info.coords.longitude}&format=json`;

      fetch(api)
        .then((res) => res.json())
        .then((locationData) => {
          console.log('***', JSON.stringify(locationData.display_name));
          setlocation(locationData.display_name);
          setFlag(true);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const placeOrder = () => {
    const update = database().ref('Data');
    update
      .set({
        username: props.route.params.username,
        veg: props.route.params.veg,
        chapati: props.route.params.chapati,
        dal: props.route.params.dal,
        rice: props.route.params.rice,
        location: location,
      })
      .then(() => console.log('Data set.'));
    props.navigation.navigate('OrderDone');
  };

  return (
    <RootView customStyle={{}}>
      <Image
        source={R.images.box}
        style={{width: '100%', height: flag ? '35%' : '40%'}}
      />

      {flag ? (
        <View>
          <Text style={styles.text}>Recipe</Text>
          <Card img={R.images.pin} title={'Location'} value={location} />
          <Card
            img={R.images.pin}
            title={'Total Price'}
            value={props.route.params.total}
          />

          <Card
            img={R.images.clock}
            title={'Delivery Time'}
            value={'With in 30 Minutes'}
          />
        </View>
      ) : (
        <SimpleButton
          title="Get Location"
          customTxtStyle={styles.customTxtStyle}
          customStyle={styles.customStyle}
          onPress={getLocation}
        />
      )}
      <View style={styles.view}>
        <SimpleButton
          title="Back"
          customTxtStyle={styles.customTxt}
          customStyle={{
            backgroundColor: '#808080',
            width: '45%',
          }}
          onPress={() => props.navigation.navigate('Home')}
        />
        <SimpleButton
          title="Next"
          customTxtStyle={styles.customTxt}
          customStyle={{
            backgroundColor: 'green',
            width: '45%',
          }}
          onPress={placeOrder}
          // onPress={() =>
          // props.navigation.navigate('OrderDone')}
        />
      </View>
    </RootView>
  );
};
const styles = StyleSheet.create({
  customTxt: {
    color: '#fff',
    fontSize: horizontalScale(18),
  },
  text: {
    color: R.colors.maroon,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 25,
    marginTop: 20,
  },
  customTxtStyle: {
    color: '#fff',
    fontSize: horizontalScale(18),
  },
  customStyle: {
    backgroundColor: '#800000',
    alignSelf: 'center',
    marginTop: horizontalScale(75),
  },
  view: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
});
