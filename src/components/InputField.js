import React from 'react';
import {TextInput} from 'react-native';
import {PropTypes} from 'prop-types';
import theme from '../theme';
import {moderateScale} from '../constants/ScalingUnit';

const InputField = ({
  placeholder,
  inputType,
  capitalize,
  value,
  color = theme.colors.whiteColor,
  height = 45,
  onChangeText,
  secure = false,
  editable = true,
}) => {
  return (
    <TextInput
      autoCorrect={false}
      style={{
        width: '90%',
        height: height,
        color: color,
        fontFamily: theme.fontFamily.medium,
      }}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.whiteColor}
      secureTextEntry={secure}
      keyboardType={inputType}
      fontSize={moderateScale(13)}
      autoCapitalize={capitalize}
      value={value}
      editable={editable}
      onChangeText={onChangeText}
      paddingLeft={15}
    />
  );
};

InputField.propTypes = {
  placeholder: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  capitalize: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default InputField;
