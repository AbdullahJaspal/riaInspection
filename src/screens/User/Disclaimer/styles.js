import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import theme from '../../../theme';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.blackColor,
  },

  scrollStyles: {
    flexGrow: 0.98,
    top: 20,
    paddingHorizontal: 20,
  },
  listItem: {
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: theme.colors.whiteColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default styles;
