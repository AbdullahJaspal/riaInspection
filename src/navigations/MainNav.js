import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from '../screens/Splash';
import AuthStack from './stacks/AuthStack';
import GuestUserDrawer from './drawers/User/GuestUserDrawer';
import LoginUserDrawer from './drawers/User/LoginUserDrawer';
import InspectorDrawer from './drawers/Inspector/InspectorDrawer';
import AdminDrawer from './drawers/Admin/AdminDrawer';

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="GuestUser" component={GuestUserDrawer} />
        <Stack.Screen name="LoginUser" component={LoginUserDrawer} />
        <Stack.Screen name="Inspector" component={InspectorDrawer} />
        <Stack.Screen name="Admin" component={AdminDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
