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
import {forgetPassword, adminForgetPassword} from '../../../redux/actions/auth';

// Validate Email...
const validateEmail = (email) => {
  let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(String(email).toLowerCase());
};

const {width} = Dimensions.get('window');

const ForgotPass = ({navigation}) => {
  const [email, setEmail] = useState('');

  //   redux stuff
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state) => state.auth);

  const handleSendEmail = async () => {
    // navigation.navigate('ResetPass');
    // return;
    const validation = validateData();
    if (validation) {
      const params = {
        email: email,
      };
      dispatch(forgetPassword(params, onSuccess, onError));
      dispatch(adminForgetPassword(params, onSuccess, onError));
    }
  };

  const onSuccess = async (res) => {
    ShowSnackBar(res.data.message);
    // await AsyncStorage.setItem('login', 'true');

    replaceScreen('ResetPass');
  };

  const onError = (err) => {
    console.log(err);
    ShowSnackBar('The given data is invalid.');
  };

  const validateData = () => {
    if (email === '') {
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
              Please enter your registered email ID to receive a verification
              code.
            </Text>
          </View>
          <View style={styles.centerContainer}>
            <View style={[inputTxtStyle('85%').inputTxtStyle, {bottom: 15}]}>
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
            <TouchableOpacity
              activeOpacity={0.9}
              style={[btnStyle('85%').btnStyle, {top: 20}]}
              onPress={() => handleSendEmail()}>
              <Text style={btnTxtStyle().btnTxtStyle}>SEND</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 0.2}} />
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default ForgotPass;
