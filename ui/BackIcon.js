import {Pressable} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BackIcon = ({navigation}) => {
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back-circle" color="#000" size={50} />
    </Pressable>
  );
};

export default BackIcon;
