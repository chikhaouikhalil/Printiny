import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';
import MenuIcon from '../assets/menu-icon.svg';
import UserIcon from '../assets/user.svg';
import {Overlay} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import {windowWidth} from '../utils/Dim';
import Button from './Button';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DrawerHeader = ({navigation}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const {displayName, email} = auth().currentUser;
  const toggleOverlay = () => {
    setIsVisible(!isVisible);
  };
  const logout = () =>
    auth()
      .signOut()
      .then(() => navigation.replace('LoginScreen'));

  return (
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
      <TouchableOpacity onPress={toggleOverlay}>
        <UserIcon width={60} height={60} fill="#101010" />
      </TouchableOpacity>
      <Overlay
        isVisible={isVisible}
        onBackdropPress={toggleOverlay}
        overlayStyle={{
          width: windowWidth * 0.9,

          alignSelf: 'center',
          borderRadius: 20,
          paddingVertical: 30,
        }}
        backdropStyle={{backgroundColor: 'rgba(0,0,0,0.9)'}}>
        <View>
          <View style={GlobalStyle.row}>
            <UserIcon width={30} height={30} fill="#000" />
            <Text style={[GlobalStyle.title, {paddingLeft: 5}]}>Bienvenue</Text>
            <Text style={[GlobalStyle.subTitle, {textTransform: 'capitalize'}]}>
              {' ' + displayName}
            </Text>
          </View>
          <Text
            style={[
              GlobalStyle.textItalic,
              {
                textAlign: 'right',
                marginTop: -7,
                marginRight: 10,
                color: '#888',
              },
            ]}>
            {email}
          </Text>
          <Text style={[GlobalStyle.textSmall, {marginVertical: 30}]}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            libero qui corporis expedita maiores veniam eius maxime cum, dolorem
            explicabo quas repudiandae eum exercitationem repellat nesciunt
            assumenda iste commodi adipisci.
          </Text>
          <Button
            pv={5}
            ph={20}
            color="#000"
            onPress={logout}
            icon={<AntDesign name="logout" size={20} color="#fff" />}>
            Déconnexion
          </Button>
        </View>
      </Overlay>
    </View>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({});
