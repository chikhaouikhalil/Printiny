import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';

const Button = ({children, onPress, color, icon, pv, ph}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        GlobalStyle.row,
        {
          alignSelf: 'center',
          paddingHorizontal: ph,
          paddingVertical: pv,
          backgroundColor: color,
          borderRadius: 8,
        },
      ]}>
      {icon}
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

// Later on in your styles..
const styles = StyleSheet.create({
  buttonText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#fff',
    alignSelf: 'center',
    paddingTop: 3,
    paddingLeft: 5,
  },
});
