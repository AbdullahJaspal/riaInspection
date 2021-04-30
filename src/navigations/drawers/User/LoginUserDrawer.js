import React, {useState} from 'react';
import {Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import theme from '../../../theme';
import {appIcons} from '../../../assets';

// import stacks
import HomeStack from '../../stacks/HomeStack';

// drawer header
import UserHeader from './UserHeader';

const Drawer = createDrawerNavigator();

function UserDrawer() {
  return (
    <Drawer.Navigator
      drawerStyle={{width: '77%'}}
      drawerContentOptions={{
        activeTintColor: theme.colors.whiteColor,
        inactiveTintColor: theme.colors.grayColor,
        activeBackgroundColor: theme.colors.blackColor,
        inactiveBackgroundColor: theme.colors.blackColor,
        itemStyle: {marginTop: -10},
        labelStyle: {fontSize: 15},
      }}
      drawerType="front"
      drawerContent={(props) => <UserHeader {...props} />}>
      <Drawer.Screen
        name="Dashborad"
        component={HomeStack}
        options={{
          drawerIcon: ({focused}) => (
            <Image
              style={{marginHorizontal: 5}}
              source={
                focused ? appIcons.dashboardBright : appIcons.dashboardDull
              }
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default UserDrawer;
