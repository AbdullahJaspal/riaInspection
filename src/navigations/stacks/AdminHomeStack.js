import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../../screens/Admin';
import AddNewInspector from '../../screens/Admin/Inspector/AddnewInspector';
import InspectorList from '../../screens/Admin/Inspector/InspectorList';
import UserList from '../../screens/Admin/User/UserList';
import AddReport from './../../screens/Admin/Admin/ReportsByAdmin';
import UserReports from './../../screens/Admin/User/ReportsByUser';
import InspectorReports from './../../screens/Admin/Inspector/ReportsByInspector';
import InspectorDetails from './../../screens/Admin/Inspector/InspectorList/InspectorDetails/InspectorDetails';
import ApproveDeleted from './../../screens/Admin/Admin/ApproveReports';
import Profile from './../../screens/Admin/Admin/Profile';
import InspectionDetail from '../../screens/Admin/Admin/InspectionDetail/InspectionDetail';
import EditReports from '../../screens/Admin/Admin/EditReports/EditReports';
const Stack = createStackNavigator();

function HomeStack(props) {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddNewInspector" component={AddNewInspector} />
      <Stack.Screen name="InspectorList" component={InspectorList} />
      <Stack.Screen name="UserList" component={UserList} />
      <Stack.Screen name="AdminReports" component={AddReport} />
      <Stack.Screen name="EditReports" component={EditReports} />
      <Stack.Screen name="UserReports" component={UserReports} />
      <Stack.Screen name="InspectorReports" component={InspectorReports} />
      <Stack.Screen name="ApproveDeleted" component={ApproveDeleted} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="InspectorDetails" component={InspectorDetails} />
      <Stack.Screen name="InspectionDetail" component={InspectionDetail} />
    </Stack.Navigator>
  );
}

export default HomeStack;
