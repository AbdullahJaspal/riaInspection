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
  tabStyle: {
    flex: 0.5,
    height: width / 9,
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
    fontSize: moderateScale(20),
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
    justifyContent: 'space-around',
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
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    
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
  editModal: {
    backgroundColor: 'white',
    height: width / 1.4,
    justifyContent: 'space-between',
    paddingVertical: moderateScale(15),
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  editButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
    marginTop: moderateScale(15),
    marginBottom: moderateScale(5),
  },
  modalHeading: {
    fontSize: moderateScale(18),
    fontWeight: '900',
    marginTop: moderateScale(5),
    
  },
  modalInnerContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: moderateScale(12),
    justifyContent: 'space-around',
  },
  viewModal: {
    backgroundColor: 'white',
    height: width / 1.6,
  },
  viewModalInnerContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: moderateScale(12),
    justifyContent: 'space-around',
  },
  contentContainer: {
    height: width / 2,
    justifyContent: 'space-around',
    paddingVertical: moderateScale(20),
  },
});

export default styles;
