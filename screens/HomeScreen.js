import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MenuIcon from '../assets/menu-icon.svg';
import A from '../assets/user.svg';
import GlobalStyle from '../utils/GlobalStyle';
import Button from '../ui/Button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';

const HomeScreen = ({navigation}) => {
  const user = auth().currentUser.displayName;
  const logout = () =>
    auth()
      .signOut()
      .then(() => navigation.replace('LoginScreen'));
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={[
          GlobalStyle.row,
          {
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginTop: 15,
          },
        ]}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MenuIcon width={30} height={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <A width={60} height={60} fill="#101010" />
        </TouchableOpacity>
      </View>
      <Text style={GlobalStyle.titleBig}>Grand Title</Text>
      <Text style={GlobalStyle.title}>Title</Text>
      <Text style={GlobalStyle.subTitle}>Subtitle</Text>
      <Text style={GlobalStyle.textItalic}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
        libero qui corporis expedita maiores veniam eius maxime cum, dolorem
        explicabo quas repudiandae eum exercitationem repellat nesciunt
        assumenda iste commodi adipisci.
      </Text>
      <Text style={GlobalStyle.textSmall}>{user}</Text>
      <View style={GlobalStyle.row}>
        <Button
          pv={5}
          ph={20}
          color="#000"
          onPress={logout}
          icon={<AntDesign name="home" size={20} color="#fff" />}>
          Acheter
        </Button>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
