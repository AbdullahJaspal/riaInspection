import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import theme from '../../../theme';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.blackColor,
  },
  topRow: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dayText: {
    fontSize: 10,
    fontFamily: theme.fontFamily.bold,
  },
  timeText: {
    fontSize: 10,
    fontFamily: theme.fontFamily.semi_bold,
  },
  txtBtnContainer: {
    margin: 20,
    padding: 15,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descText: {
    fontSize: 17,
    textAlign: 'center',
    fontFamily: theme.fontFamily.bold,
  },
  boxRow: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  boxStyle: {
    width: width / 2.4,
    height: Platform.OS === 'android' ? height / 5 : height / 5.8,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  titleText: {
    fontSize: 15,
    top: 10,
    textAlign: 'center',
    color: theme.colors.whiteColor,
    fontFamily: theme.fontFamily.bold,
  },
});

export default styles;
