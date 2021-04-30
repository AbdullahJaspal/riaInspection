import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Header} from '../../../../components/Header';
import styles from './styles';
import theme from './../../../../theme';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {CheckBox} from 'react-native-elements';
import {imgStyle, btnStyle, btnTxtStyle} from '../../../../utils/CommonStyles';

//Dimentions
const {width, height} = Dimensions.get('window');
const AddNewInspector = ({route, navigation}) => {
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [address, setAddress] = useState(false);
  const [city, setCity] = useState(false);
  const [country, setCountry] = useState(false);
  const [phone, setPhone] = useState(false);
  const [description, setDescription] = useState(false);
  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [checkbox1, setCheckBox1] = useState(false);
  const [checkbox2, setCheckBox2] = useState(false);
  const [checkbox3, setCheckBox3] = useState(false);
  const [checkbox4, setCheckBox4] = useState(false);
  const [button, setButton] = useState('Add Inspector');
  const {tab} = route.params;
  useEffect(() => {
    setButton(tab);
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        leftPress={() => navigation.goBack()}
        title={'Add New Inspector'}
        navigation={navigation}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.g1,
          justifyContent: 'center',
        }}>
        <View style={styles.innerCard}>
          <ScrollView
            style={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}>
            <TextInput
              placeholder="Name"
              style={styles.inputFields}
              onChangeText={(val) => {
                setName(val);
              }}
            />
            <TextInput placeholder="Email" style={styles.inputFields} />
            <TextInput placeholder="Address" style={styles.inputFields} />
            <View style={[styles.twoRowContainer, {marginVertical: 5}]}>
              <TextInput placeholder="City" style={styles.twoRow} />
              <TextInput placeholder="Country" style={styles.twoRow} />
            </View>
            <TextInput placeholder="Phone No." style={styles.inputFields} />
            <View style={[styles.tableBox, {marginTop: 15, zIndex: 45}]}>
              <TextInput
                placeholder={'Discription'}
                placeholderTextColor={theme.colors.grayColor}
                inputType="default"
                multiline={true}
                numberOfLines={6}
                capitalize={'none'}
                onChangeText={(text) => {
                  console.log(text);
                }}
                style={styles.inputText}
              />
            </View>
            <View style={styles.twoRowContainer}>
              <TextInput placeholder="Password" style={styles.twoRow} />
              <TextInput placeholder="Confirm Password" style={styles.twoRow} />
            </View>
            <View
              style={{
                height: height / 3.8,
                justifyContent: 'space-around',
              }}>
              <Text style={styles.heading}>Inspector Privileges</Text>
              <View>
                <View style={styles.twoRowContainer}>
                  <CheckBox
                    size={18}
                    containerStyle={styles.checkboxContainer}
                    title="View Users List"
                    textStyle={styles.checkboxTitle}
                    checked={checkbox1}
                    onIconPress={() => {
                      setCheckBox1(!checkbox1);
                    }}
                  />
                  <CheckBox
                    size={20}
                    containerStyle={styles.checkboxContainer}
                    title="Allow To Add Reports"
                    textStyle={styles.checkboxTitle}
                    checked={checkbox2}
                    onIconPress={() => {
                      setCheckBox2(!checkbox2);
                    }}
                  />
                </View>
                <View style={styles.twoRowContainer}>
                  <CheckBox
                    size={20}
                    containerStyle={styles.checkboxContainer}
                    title="Allow To Approve User Reports"
                    textStyle={styles.checkboxTitle}
                    checked={checkbox3}
                    onIconPress={() => {
                      setCheckBox3(!checkbox3);
                    }}
                  />
                  <CheckBox
                    size={20}
                    containerStyle={styles.checkboxContainer}
                    title="Allow To Hide/Delete Reports"
                    textStyle={styles.checkboxTitle}
                    checked={checkbox4}
                    onIconPress={() => {
                      setCheckBox4(!checkbox4);
                    }}
                  />
                </View>
              </View>
              <TouchableOpacity
                activeOpacity={0.9}
                style={[
                  btnStyle('35%', 9, 15, 0).btnStyle,
                  {backgroundColor: theme.colors.blackColor},
                ]}
                onPress={() => alert('todo!')}>
                <Text
                  style={[
                    btnTxtStyle().btnTxtStyle,
                    {color: theme.colors.whiteColor, fontSize: 13},
                  ]}>
                  {button}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddNewInspector;
