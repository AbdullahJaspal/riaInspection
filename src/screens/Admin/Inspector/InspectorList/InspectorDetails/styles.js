import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../../../../constants/ScalingUnit';
import theme from './../../../../../theme';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.blackColor,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: theme.colors.g1,
    justifyContent: 'flex-start',
  },
  firstCard: {
    width: width / 1.1,
    height: height / 1.9,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  headingContainer: {
    height: height / 18,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.blackColor,
    flexDirection: 'row',
    paddingHorizontal: moderateScale(10),
  },
  headingText: {
    fontSize: moderateScale(15),
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.colors.whiteColor,
    fontFamily: theme.fontFamily.medium,
  },
  scndCard: {
    width: width / 1.1,
    height: height / 5,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  scondHeadingContainer: {
    height: height / 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.blackColor,
    flexDirection: 'row',
    paddingHorizontal: moderateScale(10),
  },
  button: {
    backgroundColor: 'white',
    padding: moderateScale(6),
    borderRadius: moderateScale(5),
  },
  itemContainer: {
    width: '100%',
    borderRadius: moderateScale(5),
    paddingVertical: moderateScale(10),
    marginVertical: moderateScale(10),
    alignSelf: 'center',
    backgroundColor: theme.colors.whiteColor,
  },
  txtRow: {
    flexDirection: 'row',
    paddingLeft: moderateScale(5),
    paddingRight: moderateScale(15),
    paddingVertical: moderateScale(5),
    backgroundColor: theme.colors.whiteColor,
  },
  maincontentContainer: {
    height: height / 9,
    justifyContent: 'space-around',
    marginTop: moderateScale(10),
  },
  scondCardTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    paddingLeft: moderateScale(5),
  },

  scondCardText: {
    fontSize: moderateScale(12),
    textAlign: 'left',
    width: '45%',
  },
});
export default styles;
