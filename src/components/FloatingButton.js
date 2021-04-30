import React from 'react';
import {StyleSheet, Platform, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {PropTypes} from 'prop-types';
import theme from '../theme';

const FloatingButton = ({navigation, screen, type, name, size}) => {
  return (
    <View style={styles.nextButtonStyle}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.buttonStyle}
        onPress={() => navigation.navigate(screen)
        
        }>
        <Icon
          type={type}
          name={name}
          size={size}
          iconStyle={{color: theme.colors.whiteColor}}
        />
      </TouchableOpacity>
    </View>
  );
};

FloatingButton.propTypes = {
  screen: PropTypes.string,
};

export default FloatingButton;

const styles = StyleSheet.create({
  nextButtonStyle: {
    right: 20,
    bottom: Platform.OS === 'android' ? 20 : 40,
    zIndex: 99,
    position: 'absolute',
    alignItems: 'flex-end',
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 60,
    height: 60,
    backgroundColor: theme.colors.blackColor,
  },
});
