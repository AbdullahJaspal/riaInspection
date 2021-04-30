import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Icon} from 'react-native-elements';
import theme from '../../../theme';

// import stacks
import HomeStack from '../../stacks/HomeStack';
import ReportStack from '../../stacks/ReportStack';

// screens
import AboutUs from '../../../screens/User/AboutUs';
import BuyerInfo from '../../../screens/User/Home/BuyerInfo';
import Services from '../../../screens/User/Home/Services';
import SignUp from '../../../screens/Auth/SignUp';
import ContactUs from '../../../screens/User/ContactUs';

// drawer header
import UserHeader from '../User/GuestHeader';

const Drawer = createDrawerNavigator();

function GuestUserDrawer() {
  return (
    <Drawer.Navigator
      drawerStyle={{width: '77%'}}
      drawerContentOptions={{
        activeTintColor: theme.colors.whiteColor,
        inactiveTintColor: theme.colors.grayColor,
        activeBackgroundColor: theme.colors.blackColor,
        inactiveBackgroundColor: theme.colors.blackColor,
        itemStyle: {marginTop: -10},
        labelStyle: {fontSize: 15, marginLeft: -5},
      }}
      drawerType="front"
      drawerContent={(props) => <UserHeader {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          drawerIcon: ({focused}) => (
            <Icon
              type="MaterialIcons"
              name="home"
              color={focused ? theme.colors.whiteColor : theme.colors.grayColor}
              iconStyle={{fontSize: 20}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          drawerLabel: 'About Us',
          drawerIcon: ({focused}) => (
            <Icon
              type="MaterialIcons"
              name="people"
              color={focused ? theme.colors.whiteColor : theme.colors.grayColor}
              iconStyle={{fontSize: 20}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Buyer Information"
        component={BuyerInfo}
        options={{
          drawerIcon: ({focused}) => (
            <Icon
              type="entypo"
              name="info"
              color={focused ? theme.colors.whiteColor : theme.colors.grayColor}
              iconStyle={{fontSize: 18, left: 2, marginRight: 1}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Services"
        component={Services}
        options={{
          drawerIcon: ({focused}) => (
            <Icon
              type="MaterialIcons"
              name="miscellaneous-services"
              color={focused ? theme.colors.whiteColor : theme.colors.grayColor}
              iconStyle={{fontSize: 18, left: 2, marginRight: 1}}
            />
            // <Image
            //   source={appIcons.serviceIcon}
            //   resizeMode="contain"
            //   style={{
            //     width: 15,
            //     height: 15,
            //     color: focused
            //       ? theme.colors.primaryColor
            //       : theme.colors.grayColor,
            //   }}
            // />
          ),
        }}
      />
      <Drawer.Screen
        name="Registration"
        component={SignUp}
        options={{
          drawerIcon: ({focused}) => (
            <Icon
              type="antdesign"
              name="filetext1"
              color={focused ? theme.colors.whiteColor : theme.colors.grayColor}
              iconStyle={{fontSize: 18, marginLeft: 2}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Contact Us"
        component={ContactUs}
        options={{
          drawerLabel: 'Contact Us',
          drawerIcon: ({focused}) => (
            <Icon
              type="font-awesome"
              name="phone"
              color={focused ? theme.colors.whiteColor : theme.colors.grayColor}
              iconStyle={{fontSize: 18, marginLeft: 2, marginRight: 2.5}}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default GuestUserDrawer;
