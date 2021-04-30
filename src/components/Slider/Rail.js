import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import theme from '../../theme';

const Rail = () => {
  return <View style={styles.root} />;
};

export default memo(Rail);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 6,
    borderRadius: 2,
    backgroundColor: theme.colors.g3,
  },
});
