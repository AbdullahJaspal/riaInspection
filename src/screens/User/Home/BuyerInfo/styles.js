import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import theme from '../../../../theme';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.blackColor,
  },
  item: {
    marginTop: 5,
    marginBottom: 1,
    width: width - 60,
    height: width - 180,
    borderRadius: 5,
    paddingTop: 5,
    backgroundColor: theme.colors.whiteColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  txtContainer: {
    paddingHorizontal: 5,
    backgroundColor: theme.colors.g2,
  },
  title: {
    top: 7,
    fontSize: 15,
    paddingHorizontal: 5,
    fontFamily: theme.fontFamily.bold,
  },
  subTitle: {
    top: 7,
    fontSize: 11,
    paddingBottom: 15,
    paddingHorizontal: 5,
    fontFamily: theme.fontFamily.medium,
  },
  flImgStyle: {
    alignSelf: 'center',
    width: width,
    height: height / 5,
  },
  scrollStyles: {
    flex: 1,
    top: 20,
    paddingHorizontal: 20,
  },
  listItem: {
    marginBottom: 20,
    borderRadius: 5,
    paddingTop: 7,
    backgroundColor: theme.colors.whiteColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default styles;
