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
import {Header} from '../../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {appIcons, appImages, appLogos} from '../../assets';
import {imgStyle} from '../../utils/CommonStyles';
import styles from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ({navigation}) => {
  const [login, setLogin] = useState('');

  useEffect(() => {
    (async () => {
      const isLogin = await AsyncStorage.getItem('adminLogin');
      if (isLogin === 'true') {
        setLogin(true);
      } else {
        setLogin(false);
      }
      {
        
      }
    })();
  }, []);

  const RenderBox = ({icon, txt, margin, screen, tab}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate(screen, {
            tab: tab,
          });
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

  const LoginUserBoxes = () => {
    return (
      <View>
        <View style={styles.boxRow}>
          <RenderBox
            icon={appIcons.approved}
            txt="Reports By Admin"
            margin={{marginRight: 10}}
            screen="AdminReports"
            tab="reports"
          />
          <RenderBox
            icon={appIcons.reportsByInspector}
            txt="Reports By Inspector"
            margin={{marginLeft: 10}}
            screen="InspectorReports"
            tab="approved"
          />
        </View>
        <View style={styles.boxRow}>
          <RenderBox
            icon={appIcons.reportsByUser}
            txt="Reports By User"
            margin={{marginRight: 10}}
            screen="UserReports"
            tab="approved"
          />
          <RenderBox
            icon={appIcons.addInspector}
            txt="Create New Inspector"
            margin={{marginLeft: 10}}
            screen="AddNewInspector"
            tab="Add Inspector"
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
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-around',
          }}>
          <View style={styles.infoContainer}>
            <View style={styles.userInfo}>
              <View
                style={[styles.iconContainer, {backgroundColor: '#009C39'}]}>
                <Icon name="account" size={33} color="white" />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.infoText}>Total Users</Text>
                <Text style={{fontWeight: 'bold'}}> 36</Text>
              </View>
            </View>
            <View style={styles.userInfo}>
              <View
                style={[styles.iconContainer, {backgroundColor: '#007BD9'}]}>
                <Icon name="briefcase" size={30} color="white" />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.infoText}>Total Reports</Text>
                <Text style={{fontWeight: 'bold'}}> 36</Text>
              </View>
            </View>
          </View>
          <Image
            source={appLogos.logo}
            resizeMode="contain"
            style={styles.logoImage}
          />

          <LoginUserBoxes />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
