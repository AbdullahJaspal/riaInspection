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
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import {login} from '../../../redux/actions/auth';

// Validate Email...
const validateEmail = (email) => {
  let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(String(email).toLowerCase());
};

const {width} = Dimensions.get('window');

const ResetPass = ({navigation}) => {
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [cnfrmPass, setCnfrmPass] = useState('');

  //   redux stuff
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state) => state.auth);

  const handleLogin = async () => {
    alert('todo!');
    return;
    const validation = validateData();
    if (validation) {
      const params = {
        email: email,
        password: password,
        device_id: notifytoken,
        device_platform: DeviceInfo.getSystemName(),
      };
      dispatch(login(params, onSuccess, onError));
    }
  };

  const onSuccess = async (res) => {
    await AsyncStorage.setItem('login', 'true');
    replaceScreen('BottomTabs');
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
          <Loading visible={isLoading} />
          <View style={styles.logoContainer}>
            <Image
              source={appLogos.logo}
              resizeMode="contain"
              style={imgStyle(250, 100).imgStyle}
            />
            <Text style={styles.forgotDescStyle}>
              Please enter your new password here to reset your old password.
            </Text>
          </View>
          <View style={styles.centerContainer}>
            <View style={inputTxtStyle('85%').inputTxtStyle}>
              <Icon
                type="MaterialIcons"
                name="lock-open"
                color={theme.colors.whiteColor}
                size={18}
                style={{marginLeft: 4, marginRight: 2}}
              />
              <InputField
                placeholder={'Verification Code'}
                inputType="number-pad"
                capitalize={'none'}
                onChangeText={(text) => {
                  setCode(text);
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
                placeholder={'New Password'}
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
                  setCnfrmPass(text);
                }}
              />
            </View>
          </View>
          <View style={{flex: 0.2}}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={btnStyle('85%').btnStyle}
              onPress={() => handleLogin()}>
              <Text style={btnTxtStyle().btnTxtStyle}>UPDATE</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default ResetPass;
