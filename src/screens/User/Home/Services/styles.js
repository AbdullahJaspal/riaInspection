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
    width: width - 60,
    height: width - 180,
    borderRadius: 5,
    paddingTop: 5,
    backgroundColor: theme.colors.whiteColor,
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
    paddingBottom: 5,
    paddingHorizontal: 5,
    fontFamily: theme.fontFamily.medium,
  },
  imgView: {
    flex: 0.45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flImgStyle: {
    alignSelf: 'center',
    width: width / 3,
    height: height / 8,
  },
  scrollStyles: {
    flex: 1,
    top: 20,
    paddingHorizontal: 20,
  },
  listItem: {
    marginBottom: 20,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: theme.colors.whiteColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  txtView: {
    flex: 0.55,
    backgroundColor: theme.colors.g2,
  },
  btnStyle2: {
    left: 5,
    marginBottom: 5,
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.blackColor,
  },
});

export default styles;
