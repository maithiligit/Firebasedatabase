import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
//local import
import horizontalScale from '../../res/Scale';
import {RootView, SimpleButton} from '../components/index';
import R from '../R';

export const UserType = (props) => {
  const [isOwner, setIsOwner] = useState(false);
  return (
    <RootView customStyle={styles.View}>
      <Image source={R.images.user} style={styles.image} />
      <SimpleButton
        title="OWNER"
        customTxtStyle={styles.customTxtStyle}
        customStyle={styles.customStyle}
        //onPress={validation}
        onPress={() =>
          props.navigation.navigate('DrawerNavigator', {isOwner: false})
        }
      />
      <SimpleButton
        title="USER"
        customTxtStyle={styles.customTxtStyle}
        customStyle={styles.customStyle}
        //onPress={validation}
        onPress={() =>
          props.navigation.navigate('DrawerNavigator', {isOwner: true})
        }
      />
    </RootView>
  );
};

const styles = StyleSheet.create({
  View: {
    alignItems: 'center',
    backgroundColor: R.colors.maroon,
  },
  image: {
    marginTop: horizontalScale(50),
    height: horizontalScale(120),
    width: horizontalScale(120),
    alignSelf: 'center',
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
