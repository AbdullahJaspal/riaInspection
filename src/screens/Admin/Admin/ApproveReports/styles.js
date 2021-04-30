import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../../../constants/ScalingUnit';
import theme from '../../../../theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.blackColor,
  },
  tabStyle: {
    flex: 0.5,
    height: width / 10,
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
    elevation: moderateScale(5),
  },
  headingContainer: {
    height: width / 8.5,
    borderRadius: moderateScale(5),
    borderBottomLeftRadius: moderateScale(0),
    borderBottomRightRadius: moderateScale(0),
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
  pickerRow: {
    zIndex: 9999,
    marginTop: moderateScale(20),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  pickerRow1: {
    zIndex: 999,
    marginTop: moderateScale(8),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  pickerRow2: {
    zIndex: 99,
    marginTop: moderateScale(8),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  pickerRow3: {
    zIndex: 9,
    marginTop: moderateScale(8),
    alignSelf: 'center',
    flexDirection: 'row',
  },

  txtRowAction: {
    flexDirection: 'row',
    paddingLeft: 0,
    paddingVertical: moderateScale(10),
    backgroundColor: theme.colors.whiteColor,
  },
  txtRow: {
    flexDirection: 'row',
    paddingVertical: moderateScale(10),
    backgroundColor: theme.colors.g2,
    alignItems: 'center',
  },
  iconsRow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showButton: {
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: moderateScale(5),
    marginVertical: moderateScale(3),
    width: width / 2.16,
    padding: moderateScale(5),
  },
  iconStyle: {
    fontSize: 25,
    color: theme.colors.blackColor,
  },
});

export default styles;
