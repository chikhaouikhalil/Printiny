import React from 'react';
import {ScrollView, Text, TouchableOpacity, View, Keyboard} from 'react-native';
import Logo from '../assets/logo.svg';
import GlobalStyle from '../utils/GlobalStyle';
import * as Animatable from 'react-native-animatable';
import {windowWidth} from '../utils/Dim';
import {Input} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';
import Button from '../ui/Button';
import {SkypeIndicator} from 'react-native-indicators';
import {GoogleSignin} from '@react-native-community/google-signin';

// logo animation
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

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [socialLoading, setSocialLoading] = React.useState(false);
  const [show, setShow] = React.useState(true);

  const hideLogo = () => {
    setShow(false);
  };

  const loginWithEmailandPassword = () => {
    Keyboard.dismiss();
    setLoading(true);
    setError(null);
    if (email.length < 3) {
      setLoading(false);
      setError('Veuillez indiquer une adresse valide');
      return;
    }
    if (password.length < 6) {
      setLoading(false);
      setError('Veuillez indiquer une mot de passe valide');
      return;
    }
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.replace('DrawerNavigation');
      })
      .catch((error) => {
        setLoading(false);
        switch (error.code) {
          case 'auth/invalid-email':
            return setError('Adresse mail invalide');
          case 'auth/user-not-found':
            return setError('Aucun utilisateur trouvé');
          case 'auth/wrong-password':
            return setError('Mot de passe incorrecte');
          default:
            return setError('Vérifier votre connexion');
        }
      });
  };

  const onGoogleButtonPress = async () => {
    try {
      setSocialLoading(true);
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
      setSocialLoading(false);
    }
  };

  const googleSignIn = () => {
    onGoogleButtonPress().then(() => navigation.replace('DrawerNavigation'));
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      style={GlobalStyle.container}>
      <Animatable.View
        useNativeDriver={true}
        animation={zoomOut}
        duration={2500}
        delay={0}>
        {show && (
          <Logo
            width={windowWidth * 0.6}
            height={windowWidth * 0.6}
            style={GlobalStyle.selfCenter}
          />
        )}
        <Text
          style={[
            GlobalStyle.title,
            {textAlign: 'center', marginTop: show ? -10 : 20},
          ]}>
          Bienvenue chez Printiny Services
        </Text>
      </Animatable.View>
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
          {marginVertical: 10, marginHorizontal: 20},
        ]}>
        Connexion à votre compte
      </Text>
      <Input
        onFocus={hideLogo}
        placeholder="adresse mail"
        placeholderTextColor="#999"
        leftIcon={<Entypo name="mail" size={25} color="#000" />}
        inputContainerStyle={GlobalStyle.inputContainer}
        inputStyle={GlobalStyle.input}
        value={email}
        onChangeText={(val) => setEmail(val.trim())}
      />
      <Input
        onFocus={hideLogo}
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
            onPress={loginWithEmailandPassword}
            pv={6}
            icon={<Entypo name="login" size={20} color="#fff" />}
            ph={35}>
            Se connecter
          </Button>
        </View>
      )}
      {loading === false && (
        <>
          <TouchableOpacity
            style={{alignSelf: 'center'}}
            onPress={() => navigation.navigate('RegisterScreen')}>
            <Text
              style={[
                GlobalStyle.textItalic,
                {textAlign: 'center', marginTop: 10},
              ]}>
              Nouveau client ?{' '}
              <Text
                style={{color: '#4287f5', fontWeight: 'bold', fontSize: 12}}>
                Créer un compte ici
              </Text>
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              GlobalStyle.textItalic,
              {textAlign: 'center', marginVertical: 15},
            ]}>
            Ou bien
          </Text>
          {socialLoading ? (
            <SkypeIndicator color="#000" size={40} />
          ) : (
            <>
              <Button
                color="#000"
                pv={5}
                onPress={() => alert('Facebook login')}
                ph={20}
                icon={
                  <AntDesign name="facebook-square" size={20} color="#fff" />
                }>
                Se connecter via Facebook
              </Button>
              <View style={{marginVertical: 10}} />
              <Button
                color="#000"
                pv={5}
                onPress={googleSignIn}
                ph={20}
                icon={<AntDesign name="google" size={20} color="#fff" />}>
                Se connecter via Gmail
              </Button>
            </>
          )}
          {!show && (
            <Logo
              width={windowWidth * 0.6}
              height={windowWidth * 0.6}
              style={GlobalStyle.selfCenter}
            />
          )}
        </>
      )}
    </ScrollView>
  );
};

export default LoginScreen;
