import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import theme from '../../../../theme';
import {moderateScale} from './../../../../constants/ScalingUnit';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.blackColor,
  },

  searchBarContainer: {
    height: width / 5,
    justifyContent: 'center',
  },
  inputContainer: {
    width: width / 1.1,
    height: height / 19,
    borderRadius: 3,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  inputStyle: {
    width: '90%',
    fontSize: 13,
    paddingLeft: 10,
    fontFamily: theme.fontFamily.regular,
  },
  iconStyle: {
    fontSize: moderateScale(18),
    color: theme.colors.blackColor,
  },
  renderView: {
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    borderWidth: 0,
    marginVertical: moderateScale(10),
  },
  numberContainer: {
    backgroundColor: 'black',
    width: '12%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  renderNumber: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(12),
  },
  iconContainer: {
    height: width / 6.5,
    width: '88%',
  },
  renderDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  renderName: {
    color: 'black',
    fontSize: moderateScale(12),
    fontWeight: 'bold',
  },
  renderEmail: {
    color: 'black',
    fontSize: moderateScale(12),
  },
  renderDate: {
    color: '#2680EB',
    fontSize: moderateScale(10),
  },
  extraDetail: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
  },
  city: {
    fontSize: moderateScale(12),
    fontWeight: 'bold',
    marginRight: moderateScale(2),
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: width / 2.3,
  },
});

export default styles;
