import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import theme from '../../../theme';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.blackColor,
  },
  topContainer: {
    paddingTop: 25,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inspectsText: {
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
    color: theme.colors.blackColor,
    fontFamily: theme.fontFamily.bold,
  },
  shapeView: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 25,
    borderRightWidth: 0,
    borderBottomWidth: 30,
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  detailContainer: {
    width: width / 4,
    height: 30,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  contentBox: {
    flex: Platform.OS === 'android' ? 2 : 0.95,
    width: '90%',
    marginTop: 20,
    padding: 15,
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: theme.colors.whiteColor,
  },
  inputContainer: {
    borderRadius: 7,
    marginBottom: 20,
    backgroundColor: '#DCDCDC',
  },
  commentContainer: {
    width: '98%',
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 3,
    alignSelf: 'center',
    flexDirection: 'row',
    borderColor: theme.colors.grayColor,
  },
  inputText: {
    width: '85%',
    height: height / 5,
    padding: 10,
    paddingTop: 7,
    textAlignVertical: 'top',
    fontSize: 12,
    color: theme.colors.grayColor,
  },
  valueText: {
    marginLeft: 15,
    fontSize: 12,
    color: theme.colors.textColor,
  },
});

export default styles;
