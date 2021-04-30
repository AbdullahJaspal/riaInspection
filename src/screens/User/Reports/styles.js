import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import theme from '../../../theme';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.blackColor,
  },
  pickerRow: {
    zIndex: 999,
    marginTop: 20,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  pickerRow1: {
    zIndex: 99,
    marginVertical: 20,
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
    fontSize: 17,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.whiteColor,
  },
  tabTxtStyle1: {
    fontSize: 15,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.blackColor,
  },
  itemContainer: {
    width: '90%',
    borderRadius: 5,
    paddingVertical: 15,
    marginVertical: 15,
    alignSelf: 'center',
    backgroundColor: theme.colors.whiteColor,
  },
  txtRow: {
    flexDirection: 'row',
    paddingLeft: 0,
    paddingRight: 25,
    paddingVertical: 10,
    backgroundColor: theme.colors.g2,
  },
  iconsRow: {
    flex: 0.38,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: theme.colors.blackColor,
  },
});

export default styles;
