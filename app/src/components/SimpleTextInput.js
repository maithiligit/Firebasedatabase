import React from 'react';
import {TextInput, View, Image, StyleSheet} from 'react-native';
//local import
import R from '../R';
import horizontalScale from '../../res/Scale';

export const SimpleTextInput = (props) => {
  return (
    <React.Fragment>
      <View style={[styles.viewStyle, props.customViewStyle]}>
        <View style={styles.textInputView}>
          <Image
            source={props.img}
            tintColor={props.tintColor}
            style={props.imgStyle}
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            keyboardType={props.keyboardType}
            secureTextEntry={props.secureTextEntry}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            style={[styles.textInputStyle, props.textInputStyle]}
          />
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    marginLeft: horizontalScale(15),
    fontSize: horizontalScale(16),
    color: R.colors.maroon,
  },
  viewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,221,250,0.79)',
    height: horizontalScale(50),
    borderRadius: horizontalScale(22),
    width: horizontalScale(250),
  },
  textInputView: {
    marginLeft: horizontalScale(15),
  },
  textInputContainer: {
    marginLeft: horizontalScale(0),
  },
});
