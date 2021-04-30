import React from 'react';
import {StyleSheet, Platform, Dimensions} from 'react-native';
import theme from '../../../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.blackColor,
  },
  searchContainer: {
    height: 46,
    zIndex: 99,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.grayColor,
  },
  inputContainer: {
    width: '80%',
    height: 35,
    borderRadius: 3,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  inputStyle: {
    width: '90%',
    fontSize: 13,
    paddingLeft: 10,
    fontFamily: theme.fontFamily.regular,
  },
  whiteIcon: {
    fontSize: 26,
    alignSelf: 'center',
    color: theme.colors.whiteColor,
  },
  cardContainer: {
    flex: 1,
    width: '90%',
    elevation: 5,
    shadowOpacity: 5,
    margin: 15,
    padding: 0,
    paddingLeft: 10,
    alignSelf: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  textContainer: {
    flex: 0.6,
    padding: 3,
  },
  nameStyle: {
    fontSize: 16,
    marginVertical: 2.5,
    color: theme.colors.blackColor,
    fontFamily: theme.fontFamily.bold,
  },
  textStyle: {
    fontSize: 12,
    marginVertical: 1.5,
    color: theme.colors.blackColor,
    fontFamily: theme.fontFamily.medium,
  },
  txt2ndStyle: {
    fontSize: 13,
    color: theme.colors.whiteColor,
  },
  dateContainer: {
    width: '90%',
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  dateText: {
    fontSize: 8.5,
    paddingVertical: 2,
    alignSelf: 'center',
    color: theme.colors.blackColor,
    fontFamily: theme.fontFamily.medium,
  },
  conditionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  conditionText: {
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
    color: theme.colors.whiteColor,
    fontFamily: theme.fontFamily.bold,
  },
  // modal styles
  modalViewContainer: {
    flex: Platform.OS === 'android' ? 0.52 : 0.4,
    width: Dimensions.get('window').width / 1.12,
    borderRadius: 5,
    padding: 10,
    paddingTop: 3,
    backgroundColor: theme.colors.whiteColor,
  },
  filterModalView: {
    flex: Platform.OS === 'android' ? 0.75 : 0.6,
    width: Dimensions.get('window').width / 1.12,
    borderRadius: 5,
    padding: 10,
    paddingTop: 3,
    backgroundColor: theme.colors.whiteColor,
  },
  titleText: {
    left: 7,
    fontSize: 16,
    marginTop: 13,
    marginBottom: 5,
    color: theme.colors.blackColor,
    fontFamily: theme.fontFamily.semi_bold,
  },
  // slider styles...
  root: {
    alignItems: 'stretch',
    padding: 12,
    flex: 1,
    backgroundColor: '#555',
  },
  slider: {marginTop: 7},
  header: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 12,
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  valueText: {
    width: 50,
    color: 'white',
    fontSize: 20,
  },
});

export default styles;
