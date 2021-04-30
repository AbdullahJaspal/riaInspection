import React, {useEffect} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {appImages, appLogos} from '../../assets';
import {imgStyle} from '../../utils/CommonStyles';
import theme from '../../theme';
import {adminLogin} from '../../redux/actions/auth';
import {useDispatch} from 'react-redux';
import {homeLoading} from '../../redux/actions/home';
import {authLoading} from '../../redux/actions/auth';

const Splash = ({navigation}) => {


  useEffect(() => {
    (async () => {
      const isLogin = await AsyncStorage.getItem('login');
      const adminLogin = await AsyncStorage.getItem('adminLogin');
      setTimeout(() => {
        dispatch(homeLoading(false));
        dispatch(authLoading(false));
        if (isLogin === 'true') {
          navigation.replace('LoginUser');
        } else if (adminLogin === 'true') {
          navigation.navigate('Admin');
        } else {
          navigation.replace('GuestUser');
        }
      }, 3000);
    })();
  }, []);
  const dispatch = useDispatch();

  return (
    <>
      <StatusBar hidden />
      <ImageBackground
        source={appImages.bg}
        resizeMode="cover"
        style={styles.bgImgStyle}>
        <Animatable.View animation="bounceInUp" duration={3000}>
          <Image source={appLogos.logo} style={imgStyle(220, 100).imgStyle} />
        </Animatable.View>
      </ImageBackground>
    </>
  );
};

export default Splash;

const styles = StyleSheet.create({
  bgImgStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    backgroundColor: theme.colors.blackColor,
  },
});
