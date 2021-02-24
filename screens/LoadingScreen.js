import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Logo from '../assets/logo.svg';
import GlobalStyle from '../utils/GlobalStyle';
import {windowWidth} from '../utils/Dim';
import {SkypeIndicator} from 'react-native-indicators';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';

const LoadingScreen = ({navigation}) => {
  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(async (user) => {
      await GoogleSignin.configure({
        webClientId:
          '246075299329-lb4501931f8b6uvlo4unan902dm01ugv.apps.googleusercontent.com',
      });
      if (user) {
        setTimeout(() => {
          navigation.replace('DrawerNavigation');
        }, 2500);
      } else {
        setTimeout(() => {
          navigation.replace('LoginScreen');
        }, 2500);
      }
    });

    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <View style={[GlobalStyle.container, {justifyContent: 'space-between'}]}>
      <View style={{marginTop: 15}}>
        <Logo
          width={windowWidth * 0.6}
          height={windowWidth * 0.6}
          style={GlobalStyle.selfCenter}
        />
        <Text
          style={[
            GlobalStyle.titleBig,
            {textAlign: 'center', marginBottom: 20},
          ]}>
          Printiny Services
        </Text>
        <Text
          style={[
            GlobalStyle.subTitle,
            {textAlign: 'center', marginHorizontal: 20},
          ]}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
          libero qui corporis expedita maiores veniam eius maxime cum, dolorem
          explicabo quas repudiandae eum exercitationem repellat nesciunt
          assumenda iste commodi adipisci.
        </Text>
      </View>
      <View style={{alignSelf: 'center'}}>
        <SkypeIndicator
          color="#000"
          size={50}
          style={{position: 'absolute', alignSelf: 'center', bottom: 60}}
        />
        <Text
          style={[
            GlobalStyle.textRegular,
            {textAlign: 'center', marginVertical: 15},
          ]}>
          Veuillez Patienter ...
        </Text>
      </View>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({});
