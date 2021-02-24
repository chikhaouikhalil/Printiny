import React from 'react';
import {StyleSheet, Text, ScrollView, View, Keyboard} from 'react-native';
import BackIcon from '../ui/BackIcon';
import GlobalStyle from '../utils/GlobalStyle';
import Logo from '../assets/logo.svg';
import {Input} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Button from '../ui/Button';
import {SkypeIndicator} from 'react-native-indicators';
import auth from '@react-native-firebase/auth';
import * as Animatable from 'react-native-animatable';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const Register = () => {
    Keyboard.dismiss();
    setLoading(true);
    setError(null);
    if (email.length < 3) {
      setLoading(false);
      setError('Veuillez indiquer une adresse valide');
      return;
    }
    if (name.length < 4) {
      setLoading(false);
      setError('Veuillez indiquer votre nom complet');
      return;
    }
    if (password.length < 6) {
      setLoading(false);
      setError('Veuillez indiquer une mot de passe valide');
      return;
    }
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        var user = userCredential.user;
        console.log(user);
        await user.updateProfile({displayName: name});
        navigation.replace('DrawerNavigation');
      })
      .catch((error) => {
        setLoading(false);
        switch (error.code) {
          case 'auth/invalid-email':
            return setError('Adresse mail invalide');
          case 'auth/email-already-in-use':
            return setError('un compte est déja associé a votre mail');
          default:
            console.log(error);
            return setError('Vérifier votre connexion');
        }
      });
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      style={GlobalStyle.container}>
      <View style={[GlobalStyle.row, {marginHorizontal: 7}]}>
        <View>
          <BackIcon navigation={navigation} />
        </View>
        <View style={{marginLeft: 'auto'}}>
          <Logo width={100} height={100} style={GlobalStyle.selfCenter} />
        </View>
      </View>
      <Text style={[GlobalStyle.title, {textAlign: 'center'}]}>
        Bienvenue chez Printiny Services
      </Text>
      {error && (
        <Animatable.Text
          useNativeDriver={true}
          animation="shake"
          duration={2500}
          delay={0}
          iterationCount={1}
          style={[GlobalStyle.errorMessage, {marginTop: 10}]}>
          {error}
        </Animatable.Text>
      )}
      <Text
        style={[
          GlobalStyle.textRegular,
          {marginVertical: 20, marginHorizontal: 20},
        ]}>
        Créer votre compte client
      </Text>
      <Input
        placeholder="Nom complet"
        placeholderTextColor="#999"
        leftIcon={<FontAwesome name="user-circle-o" size={25} color="#000" />}
        inputContainerStyle={GlobalStyle.inputContainer}
        inputStyle={[GlobalStyle.input, {textTransform: 'capitalize'}]}
        value={name}
        onChangeText={(val) => setName(val)}
      />
      <Input
        placeholder="adresse mail"
        placeholderTextColor="#999"
        leftIcon={<Entypo name="mail" size={25} color="#000" />}
        inputContainerStyle={GlobalStyle.inputContainer}
        inputStyle={GlobalStyle.input}
        value={email}
        onChangeText={(val) => setEmail(val.trim())}
      />
      <Input
        placeholder="mot de passe"
        placeholderTextColor="#999"
        leftIcon={<Entypo name="lock" size={25} color="#000" />}
        inputContainerStyle={[GlobalStyle.inputContainer, {marginTop: -10}]}
        inputStyle={GlobalStyle.input}
        secureTextEntry={true}
        value={password}
        onChangeText={(val) => setPassword(val)}
      />
      {loading ? (
        <SkypeIndicator color="#000" size={40} />
      ) : (
        <View style={GlobalStyle.selfCenter}>
          <Button
            color="#000"
            onPress={Register}
            pv={6}
            icon={<Entypo name="login" size={20} color="#fff" />}
            ph={35}>
            Créer votre compte
          </Button>
        </View>
      )}
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
