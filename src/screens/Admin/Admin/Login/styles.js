import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../../../constants/ScalingUnit';
import theme from '../../../../theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  bgImgContainer: {
    flex: 1,
    width: width,
    backgroundColor: theme.colors.blackColor,
  },
  logoContainer: {
    flex: 0.15,
    justifyContent: 'flex-end',
  },
  centerContainer: {
    flex: 0.65,
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotTextStyle: {
    fontSize: moderateScale(12),
    alignSelf: 'flex-end',
    marginRight: moderateScale(30),
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.whiteColor,
  },
  headerImgStyle: {
    width: width,
    height: moderateScale(200),
    marginTop: moderateScale(-3),
  },
  buttonStyle: {
    width: width / 1.25,
    alignSelf: 'center',
    marginTop: moderateScale(15),
    marginBottom: moderateScale(20),
    backgroundColor: theme.colors.whiteColor,
  },
  buttonText: {
    fontSize: 18,
    margin: moderateScale(13),
    textAlign: 'center',
    color: theme.colors.textColor,
    backgroundColor: 'transparent',
    fontFamily: theme.fontFamily.medium,
  },
  bottomTextStyle: {
    fontSize: moderateScale(13),
    alignSelf: 'center',
    alignSelf: 'center',
    top: 10,
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.whiteColor,
    
  },
});

export default styles;
