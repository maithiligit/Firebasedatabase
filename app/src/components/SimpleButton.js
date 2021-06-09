import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Scale from '../../res/Scale';

export const SimpleButton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.btnStyle, props.customStyle]}
      onPress={props.onPress}>
      <Text style={[styles.textStyle, props.customTxtStyle]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: Scale(200),
    height: Scale(45),
    borderRadius: Scale(22),
  },
  textStyle: {
    fontSize: Scale(15),
    fontWeight: 'bold',
    color: '#fff',
  },
});
