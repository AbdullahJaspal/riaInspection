import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Alert,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Header} from '../../../components/Header';
import {DropDown} from '../../../components/DropDown';
import FloatingButton from '../../../components/FloatingButton';
import styles from './styles';
import theme from '../../../theme';
import {useDispatch, useSelector} from 'react-redux';
import {Loading} from '../../../components/Loading';
import {
  getPendingReports,
  getApprovedReports,
  homeLoading,
} from '../../../redux/actions/home';

const ApprovedList = [
  {
    id: '597980634398683',
    city: 'Lahore',
    state: 'Punjab',
    dealer: 'Zeeshan Ahmad',
    VIN: '1C4RJEBG0LC123070',
    year: '2021',
    publishDate: '2 march 2020',
    make: 'HONDA',
    model: 'GLI 283',
    mileage: '387676',
    type: 'Car',
    status: 'Publish',
    hiddenBy: 'Amir',
  },
  {
    id: '597980634398683',
    city: 'Lahore',
    state: 'Punjab',
    dealer: 'Zeeshan Ahmad',
    VIN: '1C4RJEBG0LC123070',
    year: '2021',
    publishDate: '2 march 2020',
    make: 'HONDA',
    model: 'GLI 283',
    mileage: '387676',
    type: 'Car',
    status: 'Publish',
    hiddenBy: 'Amir',
  },
];
const PendingList = [
  {
    id: '597980634398683',
    city: 'Lahore',
    state: 'Punjab',
    dealer: 'Zeeshan Ahmad',
    VIN: '1C4RJEBG0LC123070',
    year: '2021',
    publishDate: '2 march 2020',
    make: 'HONDA',
    model: 'GLI 283',
    mileage: '387676',
    type: 'Car',
    status: 'Publish',
    hiddenBy: 'Amir',
  },
  {
    id: '597980634398683',
    city: 'Lahore',
    state: 'Punjab',
    dealer: 'Zeeshan Ahmad',
    VIN: '1C4RJEBG0LC123070',
    year: '2021',
    publishDate: '2 march 2020',
    make: 'HONDA',
    model: 'GLI 283',
    mileage: '387676',
    type: 'Car',
    status: 'Publish',
    hiddenBy: 'Amir',
  },
];

const Reports = ({navigation}) => {
  const [type, setType] = useState('pending');
  const [dat, setDat] = useState(null);
  const [pendingData, setPendingData] = useState(ApprovedList);
  const [approvedData, setApprovedData] = useState(PendingList);

  const dispatch = useDispatch();
  const stateVal = useSelector((state) => state.home);
  const tokenVal = useSelector((state) => state.auth);
  const token = tokenVal.token;
  useEffect(() => {
    // if (dat === null) {
    //   getData();
    //   setDat('ok');
    // }
  });

  const getData = () => {
    dispatch(homeLoading(true));
    return (
      dispatch(getPendingReports(token, onSuccess, onError)),
      dispatch(getApprovedReports(token, onSuccess1, onError1))
    );
  };

  const onSuccess = (res) => {
    setPendingData(res.reports);
    dispatch(homeLoading(false));
    console.log(pendingData);
  };
  const onError = (err) => {
    return console.log(err);
  };
  const onSuccess1 = (res) => {
    console.log(res);
    setApprovedData(res.reports);
    dispatch(homeLoading(false));
    console.log(approvedData);
  };
  const onError1 = (err) => {
    return console.log(err);
  };

  const RenderRow = ({label, value, bg}) => {
    return (
      <View style={[styles.txtRow, {backgroundColor: bg}]}>
        <Text style={{flex: 0.5, left: 15}}>{label}</Text>
        <Text style={{flex: 0.5}}>{value}</Text>
      </View>
    );
  };

  const showAlert = () => {
    Alert.alert('Are you sure?', 'You want to delete Report?', [
      {
        text: 'Cancel',
      },
      {text: 'Confirm', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const replaceScreen = (screen) => {
    navigation.navigate(screen);
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <RenderRow label="ID" value={item.id} bg={theme.colors.g2} />
        <RenderRow
          label="City"
          value={item.city}
          bg={theme.colors.whiteColor}
        />
        <RenderRow label="State" value={item.label} bg={theme.colors.g2} />
        <RenderRow
          label="Dealer"
          value={item.dealer}
          bg={theme.colors.whiteColor}
        />
        <RenderRow label="VIN" value={item.VIN} bg={theme.colors.g2} />
        <RenderRow
          label="Year"
          value={item.year}
          bg={theme.colors.whiteColor}
        />
        <RenderRow label="Make" value={item.make} bg={theme.colors.g2} />
        <RenderRow
          label="Model"
          value={item.model}
          bg={theme.colors.whiteColor}
        />
        <RenderRow label="Mileage" value={item.mileage} bg={theme.colors.g2} />
        <RenderRow
          label="Vehicle Type"
          value={item.type}
          bg={theme.colors.whiteColor}
        />
        <View style={styles.txtRow}>
          <Text style={{flex: 0.5, left: 15}}>Action</Text>
          <View style={styles.iconsRow}>
            <Icon
              type="entypo"
              name="eye"
              iconStyle={styles.iconStyle}
              onPress={() => replaceScreen('InspectsDetail')}
            />
            <Icon
              type="MaterialIcons"
              name="edit"
              iconStyle={styles.iconStyle}
              onPress={() => replaceScreen('EditReport')}
            />
            <Icon
              type="MaterialIcons"
              name="delete"
              iconStyle={styles.iconStyle}
              onPress={() => showAlert()}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        type={'SimpleLineIcons'}
        name={'menu'}
        leftPress={() => navigation.toggleDrawer()}
        title={'Reports'}
        navigation={navigation}
      />
      <View style={{flex: 1, backgroundColor: theme.colors.g1}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              styles.tabStyle,
              {backgroundColor: type === 'pending' ? 'black' : 'white'},
            ]}
            onPress={() => setType('pending')}>
            <Text
              style={
                type === 'pending' ? styles.tabTxtStyle : styles.tabTxtStyle1
              }>
              Approved
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              styles.tabStyle,
              {backgroundColor: type === 'approved' ? 'black' : 'white'},
            ]}
            onPress={() => setType('approved')}>
            <Text
              style={
                type === 'approved' ? styles.tabTxtStyle : styles.tabTxtStyle1
              }>
              Pending
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.pickerRow}>
          <DropDown label={'Date'} zIndex={999} data={[]} width={'44%'} />
          <DropDown label={'Dealership'} zIndex={999} data={[]} width={'44%'} />
        </View>
        <View style={styles.pickerRow1}>
          <DropDown label={'State'} zIndex={99} data={[]} width={'44%'} />
          <DropDown label={'City'} zIndex={99} data={[]} width={'44%'} />
        </View>
        <Loading visible={stateVal.isLoading} />

        <FlatList
          style={{zIndex: 1}}
          contentContainerStyle={{flexGrow: 1}}
          data={type === 'pending' ? approvedData : pendingData}
          extraData={type === 'pending' ? approvedData : pendingData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />

        {pendingData === [] && type === 'pending' ? (
          <Text
            style={{
              top: '50%',
              position: 'absolute',
              left: '30%',
              right: '30%',
              fontWeight: 'bold',
            }}>
            No Reports to Show
          </Text>
        ) : null}
        {approvedData === []
          ? type ===
            'approved'(
              <Text
                style={{
                  top: '50%',
                  position: 'absolute',
                  left: '30%',
                  right: '30%',
                  fontWeight: 'bold',
                }}>
                No Reports to Show
              </Text>,
            )
          : null}

        <FloatingButton
          navigation={navigation}
          screen={'AddReport'}
          type={'font-awesome'}
          name={'plus'}
          size={28}
        />
      </View>
    </SafeAreaView>
  );
};

export default Reports;
