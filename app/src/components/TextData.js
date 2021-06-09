import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//local imports

export const TextData = (props) => {
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
  rootView: {
    flex: 1,
  },
});
