import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Logo from '../assets/logo.svg';
import GlobalStyle from '../utils/GlobalStyle';
import * as Animatable from 'react-native-animatable';
import {windowWidth} from '../utils/Dim';

const zoomOut = {
  0: {
    opacity: 0,
    scale: 0,
  },
  0.5: {
    opacity: 0.5,
    scale: 0.5,
  },
  1: {
    opacity: 1,
    scale: 1,
  },
};

const LoginScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={GlobalStyle.container}>
      <Animatable.View
        useNativeDriver={true}
        animation={zoomOut}
        duration={2500}
        delay={0}>
        <Logo
          width={windowWidth * 0.6}
          height={windowWidth * 0.6}
          style={GlobalStyle.selfCenter}
        />
        <Text
          style={[GlobalStyle.title, {textAlign: 'center', marginTop: -10}]}>
          Bienvenue chez Printiny Services
        </Text>
      </Animatable.View>
      <Text>Se connecter ou créer un compte via email & password</Text>
      <Text>
        deux buttons pour se connecter avec facebook ou un compte gmail
      </Text>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
