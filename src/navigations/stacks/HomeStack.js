import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../../screens/User/Home';
import BuyerInfo from '../../screens/User/Home/BuyerInfo';
import Vehicles from '../../screens/User/Home/Vehicles';
import Services from '../../screens/User/Home/Services';
import ReportStack from '../stacks/ReportStack';
import InspectsDetail from '../../screens/User/Home/InspectsDetail';
import Disclaimer from './../../screens/User/Disclaimer';
import AboutUs from '../../screens/User/AboutUs';
import ContactUs from '../../screens/User/ContactUs';
import Profile from '../../screens/User/Profile';
import AuthStack from '../../navigations/stacks/AuthStack';
import SignUp from '../../screens/Auth/SignUp';


const Stack = createStackNavigator();

function HomeStack(props) {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="userHome" component={Home} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="BuyerInfo" component={BuyerInfo} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen name="Vehicles" component={Vehicles} />
      <Stack.Screen name="Services" component={Services} />
      <Stack.Screen name="Reports" component={ReportStack} />
      <Stack.Screen name="InspectsDetail" component={InspectsDetail} />
      <Stack.Screen name="Disclaimer" component={Disclaimer} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Auth" component={AuthStack} />
    </Stack.Navigator>
  );
}

export default HomeStack;
