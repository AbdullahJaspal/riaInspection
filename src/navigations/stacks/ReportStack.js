import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Reports from '../../screens/User/Reports';
import AddReport from '../../screens/User/Reports/AddReport';
import EditReport from '../../screens/User/Reports/EditReport';

const Stack = createStackNavigator();

function ReportStack(props) {
  return (
    <Stack.Navigator initialRouteName="Reports" headerMode="none">
      <Stack.Screen name="Reports" component={Reports} />
      <Stack.Screen name="AddReport" component={AddReport} />
      <Stack.Screen name="EditReport" component={EditReport} />
    </Stack.Navigator>
  );
}

export default ReportStack;
