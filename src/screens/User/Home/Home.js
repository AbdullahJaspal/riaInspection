import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Header} from '../../../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {appIcons, appImages, appLogos} from '../../../assets';
import {imgStyle, btnStyle, btnTxtStyle} from '../../../utils/CommonStyles';
import styles from './styles';
import theme from '../../../theme';

const Home = ({navigation}) => {
  const [login, setLogin] = useState('');

  useEffect(() => {
    (async () => {
      const isLogin = await AsyncStorage.getItem('login');
      if (isLogin === 'true') {
        setLogin(true);
      } else {
        setLogin(false);
      }
    })();
  }, []);

  const RenderBox = ({icon, txt, margin, screen, changeRoot = ''}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          changeRoot === ''
            ? navigation.navigate(screen)
            : changeRoot === 'Auth'
            ? navigation.replace(changeRoot, {screen: screen})
            : navigation.navigate(changeRoot, {screen: screen});
        }}
        style={[styles.boxStyle, margin]}>
        <Image
          source={icon}
          resizeMode="contain"
          style={imgStyle(80, 50).imgStyle}
        />
        <Text style={styles.titleText}>{txt}</Text>
      </TouchableOpacity>
    );
  };

  const GuestUserBoxes = () => {
    return (
      <View>
        <View style={styles.boxRow}>
          <RenderBox
            icon={appIcons.info}
            txt="Buyer Information"
            margin={{marginRight: 10}}
            screen="BuyerInfo"
          />
          <RenderBox
            icon={appIcons.vehicle}
            txt="Vehicles"
            margin={{marginLeft: 10}}
            screen="Login"
            changeRoot={'Auth'}
          />
        </View>
        <View style={styles.boxRow}>
          <RenderBox
            icon={appIcons.service}
            txt="Services"
            margin={{marginRight: 10}}
            screen="Services"
          />
          <RenderBox
            icon={appIcons.login}
            txt="Log In"
            margin={{marginLeft: 10}}
            screen="Auth"
            changeRoot={'Auth'}
          />
        </View>
      </View>
    );
  };

  const LoginUserBoxes = () => {
    return (
      <View>
        <View style={styles.boxRow}>
          <RenderBox
            icon={appIcons.vehicle}
            txt="Vehicles"
            margin={{marginRight: 10}}
            screen="Vehicles"
          />
          <RenderBox
            icon={appIcons.approved}
            txt="Approved Reports"
            margin={{marginLeft: 10}}
            screen="Reports"
          />
        </View>
        <View style={styles.boxRow}>
          <RenderBox
            icon={appIcons.pending}
            txt="Pending Reports"
            margin={{marginRight: 10}}
            screen="Reports"
          />
          <RenderBox
            icon={appIcons.addReport}
            txt="Add New Reports"
            margin={{marginLeft: 10}}
            screen="AddReport"
            changeRoot={'Reports'}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        type={'SimpleLineIcons'}
        name={'menu'}
        leftPress={() => navigation.toggleDrawer()}
        title={'HOME'}
        navigation={navigation}
      />
      <ImageBackground
        source={appImages.homeBg}
        resizeMode={'cover'}
        style={{flex: 1, width: '100%'}}>
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.topRow}>
            <Image
              source={appImages.certificate}
              resizeMode="contain"
              style={imgStyle(100, 40).imgStyle}
            />
            <View>
              <Text style={styles.dayText}>
                Monday - Friday:{' '}
                <Text style={styles.timeText}>8:00 am - 8:00 pm</Text>
              </Text>
              <Text style={styles.dayText}>
                Saturday: <Text style={styles.timeText}>9:00 am - 2:00 pm</Text>
              </Text>
            </View>
          </View>
          <Image
            source={appLogos.logo}
            resizeMode="contain"
            style={[imgStyle(200, 110).imgStyle, {tintColor: 'black'}]}
          />
          <View style={styles.txtBtnContainer}>
            <Text style={styles.descText}>
              THOROUGH & COMPREHENSIVE{'\n'}INSPECTION SERVICE
            </Text>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                btnStyle('35%', 9, 15, 0).btnStyle,
                {backgroundColor: theme.colors.blackColor},
              ]}
              onPress={() => navigation.navigate('AboutUs')}>
              <Text
                style={[
                  btnTxtStyle().btnTxtStyle,
                  {color: theme.colors.whiteColor, fontSize: 13},
                ]}>
                ABOUT US
              </Text>
            </TouchableOpacity>
          </View>

          {login ? <LoginUserBoxes /> : <GuestUserBoxes />}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
