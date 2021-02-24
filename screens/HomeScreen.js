import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MenuIcon from '../assets/menu-icon.svg';
import GlobalStyle from '../utils/GlobalStyle';
import Button from '../ui/Button';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HomeScreen = ({navigation}) => {
  const go = () => alert('ok');
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <TouchableOpacity
        style={{margin: 20}}
        onPress={() => navigation.openDrawer()}>
        <MenuIcon width={30} height={30} />
      </TouchableOpacity>
      <Text style={GlobalStyle.titleBig}>Grand Title</Text>
      <Text style={GlobalStyle.title}>Title</Text>
      <Text style={GlobalStyle.subTitle}>Subtitle</Text>
      <Text style={GlobalStyle.textItalic}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
        libero qui corporis expedita maiores veniam eius maxime cum, dolorem
        explicabo quas repudiandae eum exercitationem repellat nesciunt
        assumenda iste commodi adipisci.
      </Text>
      <Text style={GlobalStyle.textSmall}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
        libero qui corporis expedita maiores veniam eius maxime cum, dolorem
        explicabo quas repudiandae eum exercitationem repellat nesciunt
        assumenda iste commodi adipisci.
      </Text>
      <View style={GlobalStyle.row}>
        <Button
          pv={5}
          ph={20}
          color="#000"
          onPress={go}
          icon={<AntDesign name="home" size={20} color="#fff" />}>
          Acheter
        </Button>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
