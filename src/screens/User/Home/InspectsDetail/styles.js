import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../../../constants/ScalingUnit';
import theme from '../../../../theme';

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
  btnsContainer: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  txt2ndStyle: {
    fontSize: 12,
    color: theme.colors.whiteColor,
  },
  cardContainer: {
    width: '90%',
    elevation: 5,
    shadowOpacity: 5,
    margin: 15,
    marginTop: 5,
    padding: 0,
    paddingLeft: 10,
    alignSelf: 'center',
    borderRadius: 5,
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
    marginVertical: 2,
    color: theme.colors.blackColor,
    fontFamily: theme.fontFamily.medium,
  },
  dateContainer: {
    width: '100%',
    paddingVertical: 10,
    alignSelf: 'center',
    backgroundColor: theme.colors.blackColor,
  },
  dateText: {
    fontSize: 10,
    paddingVertical: 2,
    alignSelf: 'center',
    color: theme.colors.whiteColor,
    fontFamily: theme.fontFamily.semi_bold,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#416100',
  },
  whiteIcon: {
    fontSize: 50,
    alignSelf: 'center',
    color: theme.colors.whiteColor,
    marginBottom: 20,
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
  inputText: {
    width: '85%',
    height: height / 6.5,
    padding: 10,
    paddingTop: 7,
    textAlignVertical: 'top',
    fontSize: 12,
    color: theme.colors.blackColor,
    marginBottom: 10,
  },
  showupCheck: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: moderateScale(5),
  },
  tableCard: {
    width: '90%',
    elevation: 5,
    shadowOpacity: 5,
    margin: 15,
    marginTop: 15,
    padding: 0,
    paddingLeft: 0,
    alignSelf: 'center',
    borderRadius: 5,
  },
  tableBox: {
    width: '94%',
    margin: 10,
    borderWidth: 0.5,
    alignSelf: 'center',
    borderColor: theme.colors.lightGrayColor,
  },
  tableRow: {
    flexDirection: 'row',
    borderColor: theme.colors.lightGrayColor,
  },
  firstItem: {
    flex: 0.5,
    flexDirection: 'row',
    borderEndWidth: 1,
    borderBottomWidth: 1,
    borderColor: theme.colors.lightGrayColor,
  },
  secondItem: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: theme.colors.lightGrayColor,
  },
  secondItem1: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    borderEndWidth: 1,
    borderBottomWidth: 1,
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
    fontSize: moderateScale(10),
    fontFamily: theme.fontFamily.semi_bold,
  },
  titleTxt: {
    padding: 5,
    fontSize: 12,
    fontFamily: theme.fontFamily.bold,
  },
  imgStyle: {
    width: width / 1.12,
    height: height / 3.5,
    margin: 20,
    marginBottom: 5,
  },
  descStyle: {
    padding: 5,
    fontSize: 10,
    marginHorizontal: 20,
    fontFamily: theme.fontFamily.regular,
  },
  descStyle1: {
    padding: 5,
    fontSize: 10,
    marginHorizontal: 20,
    textDecorationLine: 'underline',
    fontFamily: theme.fontFamily.bold,
  },
  listItem: {
    margin: 20,
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
  flImgStyle: {
    alignSelf: 'center',
    width: width / 1.2,
    height: height / 5.5,
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
    top: 10,
    fontSize: 11,
    paddingBottom: 15,
    paddingHorizontal: 5,
    fontFamily: theme.fontFamily.medium,
  },
  btnStyleTwo: {
    marginLeft: 5,
    marginBottom: 20,
    backgroundColor: theme.colors.blackColor,
    alignSelf: 'flex-start',
  },
});

export default styles;
