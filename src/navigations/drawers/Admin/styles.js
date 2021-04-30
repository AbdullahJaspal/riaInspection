import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../../constants/ScalingUnit';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
    backgroundColor: theme.colors.blackColor,
  },
  itemContainer: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: moderateScale(7),
    padding: moderateScale(4),
  },

  iconImageContainer: {
    flexDirection: 'row',
    width: '85%',
    alignSelf: 'flex-end',
    marginVertical: moderateScale(2),
  },
  viewContainer: {
    width: '100%',
    paddingTop: Platform.OS === 'android' ? 10 : 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: width / 25,
    height: width / 25,
    marginRight: moderateScale(20),
  },
  textStyle: {
    fontSize: 16,
    marginTop: 5,
    color: theme.colors.whiteColor,
    fontFamily: theme.fontFamily.medium,
  },
  logoutTextStyle: {
    fontSize: 16,
    marginLeft: 15,
    color: theme.colors.whiteColor,
    fontFamily: theme.fontFamily.medium,
  },
  appLogo: {
    width: 130,
    height: 70,
  },
  logOutStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    flexDirection: 'row',
    margin: 15,
    paddingTop: 10,
    paddingLeft: 10,
    borderTopWidth: 1,
    borderTopColor: theme.colors.lightGrayColor,
    alignItems: 'center',
  },
});

export default styles;
