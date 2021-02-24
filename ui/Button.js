import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';

const Button = ({children, onPress, color, icon, pv, ph}) => {
  return (
    <View
      elevation={12}
      style={{
        backgroundColor: color,
        alignSelf: 'flex-start',

        borderRadius: 15,
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1,
        },
      }}>
      <TouchableOpacity
        onPress={onPress}
        style={[GlobalStyle.row, {paddingHorizontal: ph, paddingVertical: pv}]}>
        {icon}
        <Text style={styles.buttonText}>{children}</Text>
      </TouchableOpacity>
    </View>
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
