import {StyleSheet} from 'react-native';

export const colors = {
  white: '#fff',
  black: '#000',
};

const GlobalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bodered: {borderColor: colors.black, borderWidth: 1},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
  },
  around: {
    justifyContent: 'space-around',
  },
  evenly: {
    justifyContent: 'space-evenly',
  },
  between: {
    justifyContent: 'space-between',
  },
  titleBig: {
    fontFamily: 'Poppins-ExtraBold',
    color: '#000',
    fontSize: 19,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    color: '#000',
    fontSize: 17,
  },
  subTitle: {
    fontFamily: 'Poppins-Medium',
    color: '#000',
    fontSize: 15,
  },
  textItalic: {
    fontFamily: 'Poppins-Italic',
    color: '#000',
    fontSize: 13,
  },
  textRegular: {
    fontFamily: 'Poppins-Regular',
    color: '#000',
    fontSize: 13,
  },
  textSmall: {
    fontFamily: 'Poppins-Light',
    color: '#000',
    fontSize: 12.5,
  },
  selfCenter: {
    alignSelf: 'center',
  },
});

export default GlobalStyle;
