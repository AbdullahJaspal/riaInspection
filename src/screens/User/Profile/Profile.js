import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Header} from '../../../components/Header';
import InputField from '../../../components/InputField';
import SignatureScreen from 'react-native-signature-canvas';
import {btnStyle, btnTxtStyle} from '../../../utils/CommonStyles';
import {appImages, appLogos} from '../../../assets';
import theme from '../../../theme';
import styles from './styles';

const style = `.m-signature-pad--footer
.button {
  background-color: red;
  color: #FFF;
}`;

const Profile = ({navigation}) => {
  const [signature, setSign] = useState(null);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const ref = useRef();

  const handleSignature = (signature) => {
    console.log(signature);
    setSign(signature);
  };

  const handleEmpty = () => {
    console.log('Empty');
  };

  const handleClear = () => {
    console.log('clear success!');
  };

  const handleEnd = () => {
    ref.current.readSignature();
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={theme.colors.blackColor}
        hidden={false}
      />
      <Header
        type={'SimpleLineIcons'}
        name={'menu'}
        leftPress={() => navigation.toggleDrawer()}
        title={'Profile'}
      />

      <View style={{flex: 1, backgroundColor: theme.colors.g1}}>
        <ScrollView
          style={{flexGrow: 1}}
          scrollEnabled={scrollEnabled}
          showsVerticalScrollIndicator={false}>
          <View style={styles.contentBox}>
            <Text style={{marginBottom: 25}}>Update Profile</Text>
            <View style={styles.inputContainer}>
              <InputField
                placeholder={'Enter Name'}
                inputType="email-address"
                capitalize={'none'}
                height={40}
                onChangeText={(text) => {
                  console.log('typing...');
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
                  console.log('typing...');
                }}
              />
            </View>
            <Text>Update Signature</Text>

            <View style={styles.commentContainer}>
              <SignatureScreen
                ref={ref}
                onEnd={handleEnd}
                onOK={handleSignature}
                onEmpty={handleEmpty}
                onClear={handleClear}
                autoClear={true}
                descriptionText={''}
                onBegin={() => setScrollEnabled(false)}
                onEnd={() => setScrollEnabled(true)}
              />
            </View>
            <Image
              resizeMode={'contain'}
              style={styles.signatureImage}
              source={
                signature === null ? appImages.placeholder : {uri: signature}
              }
            />

            <Text style={{marginBottom: 10}}>Update Password</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.inputContainer1}>
                <InputField
                  placeholder={'New Password'}
                  inputType="default"
                  capitalize={'none'}
                  height={40}
                  onChangeText={(text) => {
                    console.log('typing...');
                  }}
                />
              </View>
              <View style={styles.inputContainer1}>
                <InputField
                  placeholder={'Old Password'}
                  inputType="default"
                  capitalize={'none'}
                  height={40}
                  onChangeText={(text) => {
                    console.log('typing...');
                  }}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <InputField
                placeholder={'Confirm Password'}
                inputType="default"
                capitalize={'none'}
                height={40}
                onChangeText={(text) => {
                  console.log('typing...');
                }}
              />
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
                Send
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
