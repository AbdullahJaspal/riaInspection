import React, {useState} from 'react';
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
import {appImages, appLogos} from '../../../assets';
import {
  imgStyle,
  inputTxtStyle,
  btnStyle,
  btnTxtStyle,
} from '../../../utils/CommonStyles';
import InputField from '../../../components/InputField';
import ShowSnackBar from '../../../components/ShowSnackBar';
import theme from '../../../theme';
import styles from './styles';
import {Loading} from '../../../components/Loading';

// redux stuff
import {useDispatch, useSelector} from 'react-redux';
import {register, authLoading} from '../../../redux/actions/auth';

// Validate Email...
const validateEmail = (email) => {
  let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(String(email).toLowerCase());
};

const {width} = Dimensions.get('window');

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  //   redux stuff
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth);

  const handleSignUp = async () => {
    const validation = validateData();
    if (validation) {
      const params = {
        name: name,
        email: email,
        password: password,
        c_password: confirmPass,
      };
      dispatch(authLoading(true));
      dispatch(register(params, onSuccess, onError));
    }
  };

  const onSuccess = async (res) => {
    if (res.data.response === 'success') {
      console.log(res.data.message);
      ShowSnackBar(res.data.message);
      replaceScreen('Login');
    } else {
      console.log(res.data.message.email);
      ShowSnackBar(res.data.message.email);
    }
  };

  const onError = (err) => {
    console.log(err);
    ShowSnackBar('The given data is invalid.');
  };

  const validateData = () => {
    if (name === '' || email === '' || password === '' || confirmPass === '') {
      ShowSnackBar('Kindly fill all the fields.');
      return false;
    } else {
      if (validateEmail(email) === true) {
        if (password === confirmPass) {
          if (password.length >= 8) {
            return true;
          } else {
            ShowSnackBar('The password must be at least 8 characters.');
          }
        } else {
          ShowSnackBar('Passwords are not equal.');
          return false;
        }
      } else {
        ShowSnackBar('Kindly enter valid email.');
        return false;
      }
    }
  };

  const replaceScreen = async (screen) => {
    navigation.navigate('Auth', {screen});
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
          <Loading visible={isLoading} />
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
                type="Ionicons"
                name="person"
                color={theme.colors.whiteColor}
                size={20}
                style={{marginLeft: 4, marginRight: 2}}
              />
              <InputField
                placeholder={'Enter Name'}
                inputType="default"
                capitalize={'words'}
                onChangeText={(text) => {
                  setName(text);
                }}
              />
            </View>
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
            <View style={inputTxtStyle('85%').inputTxtStyle}>
              <Icon
                type="MaterialIcons"
                name="lock"
                color={theme.colors.whiteColor}
                size={19}
                style={{marginLeft: 2, marginRight: 2}}
              />
              <InputField
                placeholder={'Confirm Password'}
                inputType="default"
                capitalize={'none'}
                secure
                onChangeText={(text) => {
                  setConfirmPass(text);
                }}
              />
            </View>
          </View>
          <View style={{flex: 0.2}}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={btnStyle('85%').btnStyle}
              onPress={() => handleSignUp()}>
              <Text style={btnTxtStyle().btnTxtStyle}>SIGN UP</Text>
            </TouchableOpacity>
            <Text
              style={styles.bottomTextStyle}
              onPress={() => replaceScreen('Login')}>
              Already have an account?{'  '}
              <Text
                style={{
                  fontFamily: theme.fontFamily.bold,
                  textDecorationLine: 'underline',
                }}>
                Login
              </Text>
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default SignUp;
