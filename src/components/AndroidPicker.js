import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {StyleSheet} from 'react-native';

const DropDown = ({label, zIndex, data, width = '96%', Platform}) => {
  const [value, setValue] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
        itemStyle={{backgroundColor: 'red'}}
        color="red">
        <Picker.Item
          style={{backgroundColor: 'red'}}
          label="Java"
          value="java"
        />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
 
});

export {DropDown};
