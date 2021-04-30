import React from 'react';
import {TextInput} from 'react-native';
import {moderateScale} from '../constants/ScalingUnit';

const InputBox = ({
  placeholder,
  inputType,
  capitalize,
  value,
  onChangeText,
  secure = false,
  editable = true,
}) => {
  return (
    <TextInput
      placeholder="City"
      style={{
        marginHorizontal: 5,
        width: '47%',
        borderRadius: 5,
        padding: 0,
        // zIndex: 10,
        height: 38,
        backgroundColor: theme.colors.g2,
        borderColor: '#D2D2D2',
        borderWidth: 0.5,
        paddingLeft: 15,
      }}
      placeholderTextColor="black"
      placeholder={placeholder}
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
export default InputBox;
