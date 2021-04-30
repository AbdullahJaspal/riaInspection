import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import theme from '../theme';

const DropDown = ({label, zIndex, data, width = '96%'}) => {
  const [value, setValue] = useState('');

  return (
    <DropDownPicker
      zIndex={zIndex}
      placeholder={label}
      items={data}
      defaultValue={value}
      containerStyle={[styles.containerStyle, {width}]}
      style={styles.dropdown}
      itemStyle={styles.itemStyle}
      dropDownStyle={styles.dropDownStyle}
      onChangeItem={(item) => setValue(item.value)}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: 38,
    marginHorizontal: 5,
  },
  itemStyle: {
    justifyContent: 'flex-start',
  },
  dropdown: {
    zIndex: 10,
    width: '100%',
    height: 38,
    position: 'absolute', // It was absolute
    backgroundColor: theme.colors.g2,
  },
  dropDownStyle: {
    position: 'absolute', // It was absolute
    backgroundColor: theme.colors.whiteColor,
  },
});

export {DropDown};
