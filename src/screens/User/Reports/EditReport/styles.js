import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import theme from '../../../../theme';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.blackColor,
  },
  itemContainer: {
    width: '90%',
    borderRadius: 5,
    paddingBottom: 15,
    marginVertical: 15,
    alignSelf: 'center',
    backgroundColor: theme.colors.whiteColor,
  },
  headingContainer: {
    height: 42,
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
  headingItem: {
    flex: 0.5,
    borderEndWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    borderColor: theme.colors.lightGrayColor,
  },
  imgsRow: {
    marginTop: 20,
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-around',
  },
  titleTxt: {
    marginTop: 15,
    fontSize: 13,
    marginLeft: 15,
    marginBottom: -15,
    fontFamily: theme.fontFamily.medium,
  },
  pickerRow: {
    marginTop: 20,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  pickerRow1: {
    zIndex: 100,
    marginTop: 20,
    paddingLeft: 10.5,
  },
  inputContainer: {
    width: '90%',
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 3,
    alignSelf: 'center',
    flexDirection: 'row',
    borderColor: theme.colors.lightGrayColor,
  },
  inputText: {
    width: '85%',
    height: height / 5,
    padding: 10,
    paddingTop: 7,
    textAlignVertical: 'top',
    fontSize: 12,
    color: theme.colors.blackColor,
  },
  txtStyle: {
    marginTop: 15,
    fontSize: 13,
    textAlign: 'center',
    fontFamily: theme.fontFamily.medium,
  },
  txtBoldStyle: {
    fontSize: 13,
    textAlign: 'center',
    fontFamily: theme.fontFamily.bold,
  },
  tableBox: {
    width: '94%',
    margin: 10,
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
    padding: 10,
    fontSize: 12,
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
    paddingVertical: 5,
    backgroundColor: theme.colors.whiteColor,
    borderColor: theme.colors.lightGrayColor,
  },
  smallIcon: {
    fontSize: 14,
    paddingLeft: 10,
    alignSelf: 'center',
    color: theme.colors.grayColor,
  },
  rowTxt: {
    padding: 5,
    fontSize: 11,
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
});

export default styles;