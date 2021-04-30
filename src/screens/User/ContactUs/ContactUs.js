import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Header} from '../../../components/Header';
import InputField from '../../../components/InputField';
import {btnStyle, btnTxtStyle} from '../../../utils/CommonStyles';
import theme from '../../../theme';
import styles from './styles';
import ShowSnackBar from '../../../components/ShowSnackBar';
import {contactUs} from './../../../redux/actions/home';
import {useDispatch, useSelector} from 'react-redux';
// Email Validation......
const validateEmail = (email) => {
  let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(String(email).toLowerCase());
};

const ContactUs = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const handleSend = () => {
    const validation = validateData();
    if (validation) {
      const params = {
        name: name,
        email: email,
        phone_number: phoneNo,
        message: description,
      };
      dispatch(contactUs(params, onSuccess, onError));
    }
  };

  const onSuccess = (res) => {
    console.log(res.data);
    console.log(res);
    setData(res.data);
    console.log(data);
  };
  const onError = (res) => {
    return console.log(res), console.log('errroorroorro');
  };
  const validateData = () => {
    if (name === '' || email === '' || phoneNo === '' || description === '') {
      ShowSnackBar('Kindly fill all the fields.');
      return false;
    } else {
      if (validateEmail(email) === true) {
        return true;
      } else {
        ShowSnackBar('Kindly enter valid email');
        return false;
      }
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={theme.colors.blackColor}
        hidden={false}
      />
      <Header
        type={'SimpleLineIcons'}
        name={'menu'}
        leftPress={() => navigation.toggleDrawer()}
        title={'Contact Us'}
      />
      <View style={{flex: 1, backgroundColor: theme.colors.g1}}>
        <ScrollView style={{flexGrow: 1}}>
          <View style={styles.topContainer}>
            <Text style={[styles.inspectsText, {right: 5}]}>Contact</Text>
            <View style={styles.shapeView} />
            <View style={styles.detailContainer}>
              <Text style={[styles.inspectsText, {color: 'white'}]}>
                With Us
              </Text>
            </View>
          </View>
          <View style={styles.contentBox}>
            <View style={styles.inputContainer}>
              <InputField
                placeholder={'Enter Name'}
                inputType="email-address"
                capitalize={'none'}
                height={40}
                onChangeText={(text) => {
                  setName(text);
                }}
              />
            </View>
            <View style={styles.inputContainer}>
              <InputField
                placeholder={'Enter Email'}
                inputType="email-address"
                capitalize={'none'}
                height={40}
                onChangeText={(text) => {
                  setEmail(text);
                }}
              />
            </View>
            <View style={styles.inputContainer}>
              <InputField
                placeholder={'Enter Phone'}
                inputType="email-address"
                capitalize={'none'}
                height={40}
                onChangeText={(text) => {
                  setPhoneNo(text);
                }}
              />
            </View>
            <View style={styles.commentContainer}>
              <TextInput
                placeholder={'Type Here'}
                placeholderTextColor={theme.colors.grayColor}
                inputType="default"
                multiline
                capitalize={'none'}
                onChangeText={(text) => {
                  setDescription(text);
                }}
                style={styles.inputText}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                btnStyle('35%', 9, 10, 20).btnStyle,
                {backgroundColor: theme.colors.blackColor},
              ]}
              onPress={() => handleSend()}>
              <Text
                style={[
                  btnTxtStyle().btnTxtStyle,
                  {color: theme.colors.whiteColor, fontSize: 13},
                ]}>
                Send
              </Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <Icon
                type={'fontawesome'}
                name={'phone'}
                size={16}
                iconStyle={{color: theme.colors.blackColor}}
              />
              <Text style={styles.valueText}>214 315 9727</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Icon
                type={'fontawesome'}
                name={'email'}
                size={16}
                iconStyle={{color: theme.colors.blackColor}}
              />
              <Text style={styles.valueText}>contact@riainspections.com</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Icon
                type={'entypo'}
                name={'globe'}
                size={15}
                iconStyle={{color: theme.colors.blackColor}}
                onPress={() => setType(!type)}
              />
              <Text style={styles.valueText}>
                3116 Emory Dr. Flower Mound Texas
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ContactUs;
