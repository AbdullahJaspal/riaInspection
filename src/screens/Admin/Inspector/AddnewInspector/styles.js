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
  innerCard: {
    width: '95%',
    height: height / 1.16,
    backgroundColor: 'white',
    alignSelf: 'center',
    elevation: moderateScale(4),
    paddingVertical: moderateScale(15),
    marginTop: moderateScale(20),
  },
  inputFields: {
    borderBottomWidth: 0.5,
    width: '95%',
    alignSelf: 'center',
    borderColor: '#ABABAB',
    paddingLeft: moderateScale(10),
  },
  twoRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
  },
  checkboxContainer: {
    backgroundColor: 'white',
    borderWidth: 0,
    width: '45%',
    padding: 0,
  },
  checkboxTitle: {
    fontWeight: 'normal',
    fontSize: 12,
  },
  twoRow: {
    borderBottomWidth: 0.5,
    width: '45%',
    alignSelf: 'center',
    borderColor: '#ABABAB',
    paddingLeft: moderateScale(10),
  },
  inputText: {
    width: '95%',
    height: height / 7.5,
    padding: moderateScale(10),
    paddingTop: moderateScale(7),
    textAlignVertical: 'top',
    fontSize: moderateScale(12),
    color: theme.colors.blackColor,
    alignSelf: 'center',
  },
  tableBox: {
    width: '94%',
    margin: 10,
    borderWidth: 1,
    alignSelf: 'center',
    borderColor: '#ABABAB',
  },
  heading: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    textAlign: 'left',
    width: '90%',
    alignSelf: 'center',
    marginVertical: moderateScale(15),
  },
  secondItem: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: theme.colors.lightGrayColor,
  },
});

export default styles;
