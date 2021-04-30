import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../../screens/Inspector/Home';
import UserList from '../../screens/Inspector/Home/Users';
import MyReportList from '../../screens/Inspector/Home/Reports/MyReportList';
import ReportsByuser from '../../screens/Inspector/Home/Reports/ReportsByUser';
import EditReports from './../../screens/Inspector/Home/Reports/EditReports';
import AddReport from './../../screens/Inspector/Home/Reports/AddNewReports';
import InspectionDetail from './../../screens/Inspector/Home/Reports/InspectionDetail';
import Profile from './../../screens/Inspector/Home/Profile/Profile';

const Stack = createStackNavigator();

function HomeStack(props) {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddReport" component={AddReport} />
      <Stack.Screen name="MyReportList" component={MyReportList} />
      <Stack.Screen name="UserList" component={UserList} />
      <Stack.Screen name="ReportsByuser" component={ReportsByuser} />
      <Stack.Screen name="EditReports" component={EditReports} />
      <Stack.Screen name="InspectionDetail" component={InspectionDetail} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default HomeStack;
