import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
//local imports
import R from '../R';
import horizontalScale from '../../res/Scale';
export const BackButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{backgroundColor: R.colors.voilet}}>
      <Image
        source={props.source}
        style={{
          tintColor: '#fff',
          height: horizontalScale(22),
          width: horizontalScale(22),
          marginLeft: horizontalScale(10),
        }}
      />
    </TouchableOpacity>
  );
};
