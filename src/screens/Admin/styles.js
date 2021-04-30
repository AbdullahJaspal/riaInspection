import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import {moderateScale} from '../../constants/ScalingUnit';
import theme from './../../theme';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.blackColor,
  },
  infoContainer: {
    flexDirection: 'row',
    height: Platform.OS === 'android' ? width / 3 : width / 3.8,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  userInfo: {
    width: width / 2.4,
    height: Platform.OS === 'android' ? width / 6 : width / 6.8,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 5.5,
  },
  iconContainer: {
    width: width / 6.5,
    height: width / 6.5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    padding: 12,
    borderRadius: 3,
    position: 'absolute',
    zIndex: 1,
    left: 15,
    top: -15,
  },
  textContainer: {
    padding: 10,
    alignItems: 'flex-end',
    height: Platform.OS === 'android' ? width / 6 : width / 6.8,
    justifyContent: 'center',
  },
  infoText: {
    fontSize: moderateScale(10),
    color: '#8E7373',
    fontWeight: 'bold',
  },
  logoImage: {
    tintColor: 'black',
    width: width / 1,
    height: width / 2.3,
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
