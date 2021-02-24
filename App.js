import React from 'react';
import {enableScreens} from 'react-native-screens';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {StatusBar} from 'react-native';
import Navigation from './utils/Navigation';

const changeColor = () => {
  changeNavigationBarColor('#000000', false);
};
changeColor();
enableScreens();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#000" />
      <Navigation />
    </>
  );
};

export default App;
