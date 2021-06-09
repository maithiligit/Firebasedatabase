import React, {useEffect} from 'react';
import {Text, Image, StyleSheet} from 'react-native';
//local imports
import R from '../R';
import Scale from '../../res/Scale';
import {RootView} from '../components/index';

export const SplashScreen = (props) => {
  useEffect(() => {
    const timeoutHandle = setTimeout(() => {
      props.navigation.navigate('Login');
    }, 1000);
    return () => {
      clearTimeout(timeoutHandle);
    };
  }, [props.navigation]);

  return (
    <RootView customStyle={{backgroundColor: '#800000'}}>
      <Image
        source={R.images.splash_logo}
        resizeMode={'contain'}
        style={styles.splashImage}
      />
      <Text style={styles.splashText}>Mumbaicha Dabewala</Text>
      <Text style={styles.dot}>. . .</Text>
    </RootView>
  );
};

const styles = StyleSheet.create({
  splashImage: {
    width: '70%',
    height: '70%',
    alignSelf: 'center',
  },
  splashText: {
    fontSize: Scale(25),
    marginTop: Scale(10),
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  dot: {
    fontSize: Scale(40),
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});
