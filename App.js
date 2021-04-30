import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import MainNavigation from './src/navigations';
// redux stuff
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persister, store} from './src/redux/store';
import {HOME_PENDING} from './src/redux/actions/home';
import Profile from './src/screens/Admin/Admin/Profile/Profile';
import AddNewInspector from './src/screens/Admin/Inspector/AddnewInspector';

// ignore warnings
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persister}>
          <MainNavigation />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
