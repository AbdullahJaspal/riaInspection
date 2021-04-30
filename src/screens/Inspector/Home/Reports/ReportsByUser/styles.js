import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import theme from '../../../../../theme';
import {moderateScale} from '../../../../../constants/ScalingUnit';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.blackColor,
  },
  pickerRow: {
    zIndex: 9999,
    marginTop: moderateScale(20),
    marginVertical: moderateScale(5),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  pickerRow1: {
    zIndex: 999,
    marginBottom: moderateScale(5),
    marginVertical: moderateScale(5),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  pickerRow2: {
    zIndex: 99,
    marginVertical: moderateScale(5),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  pickerRow3: {
    zIndex: 99,
    marginVertical: moderateScale(5),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  tabStyle: {
    flex: 0.5,
    height: 45,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTxtStyle: {
    fontSize: moderateScale(14),
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.whiteColor,
  },
  tabTxtStyle1: {
    fontSize: moderateScale(14),
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.blackColor,
  },
  itemContainer: {
    width: '90%',
    borderRadius: moderateScale(5),
    paddingVertical: moderateScale(15),
    marginVertical: moderateScale(15),
    alignSelf: 'center',
    backgroundColor: theme.colors.whiteColor,
    elevation:moderateScale(5)
  },
  headingContainer: {
    height: width / 8.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.blackColor,
  },
  headingText: {
    fontSize: 15,
    alignSelf: 'center',
    textAlign: 'center',
    color: theme.colors.whiteColor,
    fontFamily: theme.fontFamily.medium,
  },
  txtRow: {
    flexDirection: 'row',
    paddingLeft: 0,
    paddingRight: moderateScale(25),
    paddingVertical: moderateScale(10),
    backgroundColor: theme.colors.whiteColor,
  },
  txtRowIcons: {
    flexDirection: 'row',
    paddingLeft: 0,
    paddingRight: moderateScale(25),
    paddingVertical: moderateScale(10),
    backgroundColor: theme.colors.g2,
  },
  iconsRow: {
    flex: 0.95,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconStyle: {
    fontSize: moderateScale(20),
    alignSelf: 'center',
    color: theme.colors.blackColor,
  },
  showButton: {
    backgroundColor: '#1775E1',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: moderateScale(15),
    height: width / 15,
    borderRadius: moderateScale(5),
    alignSelf: 'flex-end',
  },
});

export default styles;
