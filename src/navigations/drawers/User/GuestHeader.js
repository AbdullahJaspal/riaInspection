import * as React from 'react';
import {View, Text, Image, Platform, TouchableOpacity} from 'react-native';
import {Divider, Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {dividerStyle} from '../../../utils/CommonStyles';
import {appIcons, appLogos} from '../../../assets';
import styles from '../Admin/styles';

// redux stuff
import {useDispatch, useSelector} from 'react-redux';

const GuestHeader = (props) => {
  //   redux stuff
  const dispatch = useDispatch();
  const {token, userData} = useSelector((state) => state.auth);

  const Section = ({title, screen, path, tab}) => {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.itemContainer}
          focusable={true}
          onPress={() => {
            props.navigation.navigate(screen);
          }}>
          <Image resizeMode="contain" source={path} style={styles.icon} />
          <Text style={{color: 'white'}}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const handleLogout = async () => {
    await AsyncStorage.setItem('login', 'false');
    props.navigation.replace('Auth', {screen: 'Login'});
    return;
  };

  const onSuccess = async (res) => {
    replaceScreen();
  };

  const onError = (err) => {
    replaceScreen();
  };

  const replaceScreen = async () => {
    await AsyncStorage.setItem('login', 'false');
    props.navigation.replace('Splash');
  };

  return (
    <View
      style={styles.mainContainer}
      forceInset={{top: 'always', horizontal: 'never'}}>
      <View style={styles.viewContainer}>
        <Image source={appLogos.logo} style={styles.appLogo} />
        <Divider style={dividerStyle('90%', 2, 1).dividerStyle} />
      </View>
      {Platform.OS === 'android' ? <View style={{flex: 0.1}} /> : null}
      <DrawerContentScrollView {...props}>
        {/* <Section screen="Home" path={appIcons.home} title="Home" /> */}
        <Section screen="userHome" path={appIcons.home} title="Home" />
        <Section screen="AboutUs" path={appIcons.aboutUs} title="About Us" />
        <Section
          screen="BuyerInfo"
          path={appIcons.buyerInfo}
          title="Buyer Information"
        />
        <Section
          screen="Services"
          path={appIcons.serviceIcon}
          title="Services"
        />
        <Section screen="SignUp" path={appIcons.myList} title="Registration" />
        <Section
          screen="ContactUs"
          path={appIcons.contactUs}
          title="Contact Us"
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default GuestHeader;
