import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import theme from '../../../../../theme';
import {moderateScale} from './../../../../../constants/ScalingUnit';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.blackColor,
  },
  itemContainer: {
    width: '90%',
    borderRadius: moderateScale(5),
    paddingBottom: moderateScale(15),
    marginVertical: moderateScale(15),
    alignSelf: 'center',
    backgroundColor: theme.colors.whiteColor,
    elevation: moderateScale(5),
  },
  headingContainer: {
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.blackColor,
  },
  headingText: {
    fontSize: moderateScale(15),
    alignSelf: 'center',
    textAlign: 'center',
    color: theme.colors.whiteColor,
    fontFamily: theme.fontFamily.medium,
  },
  headingItem: {
    flex: 0.5,
    borderEndWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    borderColor: theme.colors.lightGrayColor,
  },
  imgsRow: {
    marginTop: moderateScale(20),
    flexDirection: 'row',
  },
  titleTxt: {
    marginTop: moderateScale(15),
    fontSize: moderateScale(15),
    marginLeft: moderateScale(15),
    marginBottom: moderateScale(15),
    fontFamily: theme.fontFamily.medium,
  },
  pickerRow: {
    marginTop: moderateScale(10),
    alignSelf: 'center',
    flexDirection: 'row',
  },

  pickerRow1: {
    zIndex: 100,
    marginTop: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '93%',
    alignSelf: 'center',
  },
  inputContainer: {
    width: '90%',
    marginVertical: moderateScale(20),
    borderWidth: 1,
    borderRadius: 3,
    alignSelf: 'center',
    flexDirection: 'row',
    borderColor: theme.colors.lightGrayColor,
  },
  inputText: {
    width: '85%',
    height: height / 5,
    padding: moderateScale(10),
    paddingTop: moderateScale(7),
    textAlignVertical: 'top',
    fontSize: moderateScale(12),
    color: theme.colors.blackColor,
  },
  txtStyle: {
    marginTop: moderateScale(15),
    fontSize: moderateScale(12),
    textAlign: 'center',
    fontFamily: theme.fontFamily.medium,
  },
  txtBoldStyle: {
    fontSize: moderateScale(13),
    textAlign: 'center',
    fontFamily: theme.fontFamily.bold,
  },
  tableBox: {
    width: '94%',
    margin: moderateScale(10),
    borderWidth: 1,
    alignSelf: 'center',
    borderColor: theme.colors.blackColor,
  },
  headingRow: {
    flexDirection: 'row',
    backgroundColor: 'black',
    borderColor: theme.colors.lightGrayColor,
  },
  headingTxt: {
    width: '100%',
    padding: moderateScale(10),
    fontSize: moderateScale(12),
    textAlign: 'center',
    color: theme.colors.whiteColor,
    fontFamily: theme.fontFamily.bold,
  },
  tableRow: {
    flexDirection: 'row',
    borderColor: theme.colors.whiteColor,
  },
  firstItem: {
    flex: 0.5,
    flexDirection: 'row',
    borderEndWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.whiteColor,
    borderColor: theme.colors.lightGrayColor,
  },
  secondItem: {
    flex: 0.5,
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.whiteColor,
    borderColor: theme.colors.lightGrayColor,
  },
  secondItem1: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    borderEndWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: moderateScale(5),
    backgroundColor: theme.colors.whiteColor,
    borderColor: theme.colors.lightGrayColor,
  },
  smallIcon: {
    fontSize: moderateScale(14),
    paddingLeft: moderateScale(10),
    alignSelf: 'center',
    color: theme.colors.grayColor,
  },
  rowTxt: {
    padding: moderateScale(5),
    fontSize: moderateScale(11),
    fontFamily: theme.fontFamily.semi_bold,
  },
  dividerStyle: {
    width: '75%',
    height: 2,
    alignSelf: 'center',
    backgroundColor: theme.colors.grayColor,
  },
  steper: {
    flex: 0.12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flex: 1,
    zIndex: 1,
    width: '80%',
    alignSelf: 'center',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonViewStyle: {
    height: 40,
    width: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    fontSize: 18,
    top: Platform.OS === 'android' ? -2 : 0,
    color: theme.colors.whiteColor,
    fontFamily: theme.fontFamily.bold,
  },
  displayContainer: {
    width: '45%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  displayText: {
    fontSize: 11,
    marginLeft: 7,
    color: theme.colors.grayColor,
    fontFamily: theme.fontFamily.regular,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '94%',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
});

export default styles;