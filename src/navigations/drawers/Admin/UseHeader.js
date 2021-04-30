import * as React from 'react';
import {View, Text, Image, Platform, TouchableOpacity} from 'react-native';
import {Divider, Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {dividerStyle} from '../../../utils/CommonStyles';
import {appIcons, appLogos} from '../../../assets';
import theme from '../../../theme';
import styles from './styles';

// redux stuff
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../../redux/actions/auth';
import {moderateScale} from '../../../constants/ScalingUnit';

const UserHeader = (props) => {
  const [showUser, setShowUser] = React.useState(false);
  const [showUser1, setShowUser1] = React.useState(false);
  const [showAdmin, setShowAdmin] = React.useState(false);
  const [showInspector, setShowInspector] = React.useState(false);
  const [icon, setIcon] = React.useState('down');
  const [icon1, setIcon1] = React.useState('down');
  const [icon2, setIcon2] = React.useState('down');
  const [icon3, setIcon3] = React.useState('down');

  //   redux stuff
  const dispatch = useDispatch();
  const {token, userData} = useSelector((state) => state.auth);

  const Section = ({title, screen, path, button}) => {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={styles.itemContainer}
          focusable={true}
          onPress={() => {
            props.navigation.navigate(screen, {
              tab: button,
            });
          }}>
          <Image resizeMode="contain" source={path} style={styles.icon} />
          <Text style={{color: 'white'}}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const Section2 = ({title, path, user, user1, inspector, admin, up}) => {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={[styles.itemContainer, {justifyContent: 'space-between'}]}
          focusable={true}
          onPress={() => {
            setShowUser(user);
            setShowUser1(user1);
            setShowInspector(inspector);
            setShowAdmin(admin);
            if (user === true) {
              setIcon('up');
              setIcon1('down');
              setIcon2('down');
              setIcon3('down');
            } else if (user1 === true) {
              setIcon2('up');
              setIcon1('down');
              setIcon('down');
              setIcon3('down');
            } else if (inspector === true) {
              setIcon('down');
              setIcon2('down');
              setIcon3('up');
              setIcon1('down');
            } else if (admin === true) {
              setIcon('down');
              setIcon1('up');
              setIcon2('down');
              setIcon3('down');
            } else {
              setIcon('down');
              setIcon1('down');
              setIcon3('down');
              setIcon2('down');
            }
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image resizeMode="contain" source={path} style={styles.icon} />
            <Text style={{color: 'white'}}>{title}</Text>
          </View>
          <Icon
            style={{marginRight: moderateScale(5)}}
            name={up}
            type="ant-design"
            color="white"
            size={15}
          />
        </TouchableOpacity>
      </View>
    );
  };
  const SubSection = ({title1, title2, screen, tab, tab1}) => {
    return (
      <View style={{paddingTop: moderateScale(10)}}>
        <TouchableOpacity
          style={styles.iconImageContainer}
          onPress={() => {
            props.navigation.navigate(screen, {
              tab: tab,
            });
          }}>
          <Icon name="dot-single" type="entypo" color="white" />
          <Text style={{color: 'white'}}>{title1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconImageContainer}
          onPress={() => {
            props.navigation.navigate(screen, {
              tab: tab1,
              count: true,
            });
          }}>
          <Icon name="dot-single" type="entypo" color="white" />
          <Text style={{color: 'white'}}>{title2}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const handleLogout = async () => {
    await AsyncStorage.setItem('adminLogin', 'false');
    props.navigation.replace('Auth', {screen: 'Login'});
    return;
    dispatch(logout(token, onSuccess, onError));
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
        <Section
          screen="Home"
          path={appIcons.dashboardBright}
          title="Dashborad"
        />
        <Section
          screen="AddNewInspector"
          path={appIcons.createInspector}
          title="Add New Inspector"
          button="Add Inspector"
        />
        <Section
          screen="InspectorList"
          path={appIcons.InspectorList}
          title="Inspector List"
        />

        <Section2
          user={!showUser}
          user1={false}
          inspector={false}
          admin={false}
          path={appIcons.user}
          title="Users"
          up={icon}
        />
        {showUser === true ? (
          <SubSection
            title1="User List"
            title2="Pending Users"
            screen="UserList"
            tab="list"
            tab1="pending"
          />
        ) : null}
        <Section2
          admin={!showAdmin}
          inspector={false}
          user1={false}
          user={false}
          path={appIcons.adminReports}
          title="Reports By Admin"
          up={icon1}
        />
        {showAdmin === true ? (
          <SubSection
            title1="Add New Reports"
            title2="Admin Reports"
            screen="AdminReports"
            tab1="reports"
            tab="new"
          />
        ) : null}
        <Section2
          admin={false}
          inspector={false}
          user1={!showUser1}
          user={false}
          path={appIcons.user}
          title="Reports By User"
          up={icon2}
        />
        {showUser1 === true ? (
          <SubSection
            title1="Pending User Reports"
            title2="Approved User Reports"
            screen="UserReports"
            tab="pending"
            tab1="approved"
          />
        ) : null}
        <Section2
          admin={false}
          inspector={!showInspector}
          user1={false}
          user={false}
          path={appIcons.InspectorList}
          title="Reports By Inspector"
          up={icon3}
        />
        {showInspector === true ? (
          <SubSection
            title1="Pending Inspector Reports"
            title2="Approved Inspector Reports"
            screen="InspectorReports"
            tab="pending"
            tab1="approved"
          />
        ) : null}
        <Section
          screen="ApproveDeleted"
          path={appIcons.hidden}
          title="Approve Hidden Reports"
        />
        <Section
          screen="ApproveDeleted"
          path={appIcons.hidden}
          title="Approve Deleted Reports"
        />
        <Section
          screen="Profile"
          path={appIcons.profile}
          title="Profile Setting"
        />
      </DrawerContentScrollView>

      <View style={styles.bottomDrawerSection}>
        <MaterialIcons
          name="logout"
          color={theme.colors.whiteColor}
          size={20}
          onPress={() => handleLogout()}
        />
        <TouchableOpacity activeOpacity={0.7} onPress={() => handleLogout()}>
          <Text style={styles.logoutTextStyle}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserHeader;
