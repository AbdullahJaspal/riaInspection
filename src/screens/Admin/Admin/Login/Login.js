import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {appImages, appLogos} from '../../../../assets';
import {
  imgStyle,
  inputTxtStyle,
  btnStyle,
  btnTxtStyle,
} from '../../../../utils/CommonStyles';
import InputField from '../../../../components/InputField';
import ShowSnackBar from '../../../../components/ShowSnackBar';
import theme from '../../../../theme';
import styles from './styles';
import {Loading} from '../../../../components/Loading';

// redux stuff
import {useDispatch, useSelector} from 'react-redux';
import {adminLogin, adminLoginSuccess} from '../../../../redux/actions/auth';

// Validate Email...
const validateEmail = (email) => {
  let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(String(email).toLowerCase());
};

const AdminLogin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {});
  //   redux stuff
  const dispatch = useDispatch();
  const stateVal = useSelector((state) => state.auth);
  const handleLogin = async () => {
    const validation = validateData();
    if (validation) {
      const params = {
        email: email,
        password: password,
      };

      dispatch(adminLogin(params, onSuccess, onError));
    }
  };

  const onSuccess = async (res) => {
    if (res.data.response === 'error') {
      ShowSnackBar(res.data.message);
    } else {
      dispatch(adminLoginSuccess(res.data.data));
      replaceScreen('Admin');
      ShowSnackBar('Admin Login');
    }
  };

  const onError = (err) => {
    console.log(err);
    ShowSnackBar('The given data is invalid.');
  };

  const validateData = () => {
    if (email === '' || password === '') {
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

  const replaceScreen = async (screen) => {
    await AsyncStorage.setItem('adminLogin', 'true');
    navigation.navigate(screen);
  };

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={theme.colors.blackColor}
      />
      <ImageBackground
        source={appImages.bg}
        resizeMode={'cover'}
        style={styles.bgImgContainer}>
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <Loading visible={stateVal.isLoading} />
          <View style={styles.logoContainer}>
            <Image
              source={appLogos.logo}
              resizeMode="contain"
              style={imgStyle(250, 100).imgStyle}
            />
          </View>

          <View style={styles.centerContainer}>
            <View style={inputTxtStyle('85%').inputTxtStyle}>
              <Icon
                type="MaterialIcons"
                name="email"
                color={theme.colors.whiteColor}
                size={18}
                style={{marginLeft: 4, marginRight: 2}}
              />
              <InputField
                placeholder={'Enter Email'}
                inputType="email-address"
                capitalize={'none'}
                onChangeText={(text) => {
                  setEmail(text);
                }}
              />
            </View>
            <View style={inputTxtStyle('85%').inputTxtStyle}>
              <Icon
                type="MaterialIcons"
                name="lock"
                color={theme.colors.whiteColor}
                size={19}
                style={{marginLeft: 2, marginRight: 2}}
              />
              <InputField
                placeholder={'Enter Password'}
                inputType="default"
                capitalize={'none'}
                secure
                onChangeText={(text) => {
                  setPassword(text);
                }}
              />
            </View>
            <Text
              style={styles.forgotTextStyle}
              onPress={() => replaceScreen('ForgotPass')}>
              Forgot Password ?
            </Text>
          </View>

          <View style={{flex: 0.2}}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={btnStyle('85%').btnStyle}
              onPress={() => handleLogin()}>
              <Text style={btnTxtStyle().btnTxtStyle}>SIGN IN</Text>
            </TouchableOpacity>

            <Text
              style={[
                styles.bottomTextStyle,
                {
                  fontFamily: theme.fontFamily.bold,
                  textDecorationLine: 'underline',
                  marginBottom: 20,
                },
              ]}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              Login as User
            </Text>
            <Text
              style={[
                styles.bottomTextStyle,
                {
                  fontFamily: theme.fontFamily.bold,
                  textDecorationLine: 'underline',
                  marginBottom: 20,
                },
              ]}
              onPress={() => {
                navigation.navigate('Inspector');
              }}>
              Login as Inspector
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default AdminLogin;
