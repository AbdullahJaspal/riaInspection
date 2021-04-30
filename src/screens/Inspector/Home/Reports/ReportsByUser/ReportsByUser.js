import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Header} from '../../../../../components/Header';
import {DropDown} from '../../../../../components/DropDown';
import styles from './styles';
import theme from '../../../../../theme';
import {btnStyle, btnTxtStyle} from '../../../../../utils/CommonStyles';
import {ScrollView} from 'react-native-gesture-handler';

const pendingData = [
  {
    id: '597980634398683',
    city: 'Lahore',
    state: 'Punjab',
    dealer: 'Zeeshan Ahmad',
    VIN: '1C4RJEBG0LC123070',
    year: '2021',
    publishDate: '6th April 2021',
    make: 'HONDA',
    model: 'GLI 283',
    mileage: '387676',
    type: 'Car',
  },
  {
    id: '597980634398683',
    city: 'Lahore',
    state: 'Punjab',
    dealer: 'Zeeshan Ahmad',
    VIN: '1C4RJEBG0LC123070',
    year: '2021',
    publishDate: '6th April 2021',
    make: 'HONDA',
    model: 'GLI 283',
    mileage: '387676',
    type: 'Car',
  },
];

const approvedData = [
  {
    id: '597980634398683',
    city: 'Lahore',
    state: 'Punjab',
    dealer: 'Zeeshan Ahmad',
    VIN: '1C4RJEBG0LC123070',
    year: '2021',
    publishDate: '6th April 2021',
    make: 'HONDA',
    model: 'GLI 283',
    mileage: '387676',
    type: 'Car',
  },
  {
    id: '597980634398683',
    city: 'Lahore',
    state: 'Punjab',
    dealer: 'Zeeshan Ahmad',
    VIN: '1C4RJEBG0LC123070',
    year: '2021',
    publishDate: '6th April 2021',
    make: 'HONDA',
    model: 'GLI 283',
    mileage: '387676',
    type: 'Car',
  },
  {
    id: '597980634398683',
    city: 'Lahore',
    state: 'Punjab',
    dealer: 'Zeeshan Ahmad',
    VIN: '1C4RJEBG0LC123070',
    year: '2021',
    publishDate: '6th April 2021',
    make: 'HONDA',
    model: 'GLI 283',
    mileage: '387676',
    type: 'Car',
  },
  {
    id: '597980634398683',
    city: 'Lahore',
    state: 'Punjab',
    dealer: 'Zeeshan Ahmad',
    VIN: '1C4RJEBG0LC123070',
    year: '2021',
    publishDate: '6th April 2021',
    make: 'HONDA',
    model: 'GLI 283',
    mileage: '387676',
    type: 'Car',
  },
];

const Pending = 'Approve';
const Show = 'Show';
const ReportsByUser = ({navigation}) => {
  const [type, setType] = useState('pending');

  const RenderRow = ({label, value, bg}) => {
    return (
      <View style={[styles.txtRow, {backgroundColor: bg}]}>
        <Text style={{flex: 0.5, left: 15}}>{label}</Text>
        <Text style={{flex: 0.5}}>{value}</Text>
      </View>
    );
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
        <RenderRow label="State" value={item.state} bg={theme.colors.g2} />
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
        <RenderRow
          label="Publish Date"
          value={item.publishDate}
          bg={theme.colors.g2}
        />
        <RenderRow
          label="Make"
          value={item.make}
          bg={theme.colors.whiteColor}
        />
        <RenderRow label="Modal" value={item.model} bg={theme.colors.g2} />
        <RenderRow
          label="Mileage"
          value={item.mileage}
          bg={theme.colors.whiteColor}
        />
        <RenderRow
          label="Vehicle Type"
          value={item.type}
          bg={theme.colors.g2}
        />
        <View style={styles.txtRow}>
          <Text style={{flex: 0.5, left: 15}}>Actions:</Text>
        </View>
        <View style={styles.txtRowIcons}>
          <View style={styles.iconsRow}>
            <Icon
              type="entypo"
              name="eye"
              iconStyle={styles.iconStyle}
              onPress={() => replaceScreen('InspectionDetail')}
            />
            <Icon
              type="MaterialIcons"
              name="edit"
              iconStyle={styles.iconStyle}
              onPress={() => replaceScreen('EditReports')}
            />
            <Icon
              type="MaterialIcons"
              name="delete"
              iconStyle={styles.iconStyle}
              onPress={() => delAlert()}
            />
            <Text
              style={[styles.showButton, {backgroundColor: '#1775E1'}]}
              onPress={() => ApproveAlert()}>
              {type === 'pending' ? Show : Pending}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  const delAlert = () => {
    Alert.alert('Are you sure?', 'You want to delete Report?', [
      {
        text: 'Cancel',
      },
      {text: 'Confirm', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const ApproveAlert = () => {
    Alert.alert('Are you sure?', 'You want to Show Approve this Account?', [
      {
        text: 'Cancel',
      },
      {text: 'Confirm', onPress: () => console.log('OK Pressed')},
    ]);
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
              Approved Reports
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
              Pending Reports
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={[styles.itemContainer, {zIndex: 4000, paddingTop: 0}]}>
            <View style={styles.headingContainer}>
              <Text style={styles.headingText}>Search Report</Text>
            </View>

            <View style={styles.pickerRow}>
              <DropDown label={'City'} data={[]} width={'44%'} />
              <DropDown label={'State'} zIndex={9999} data={[]} width={'44%'} />
            </View>
            <View style={styles.pickerRow1}>
              <DropDown label={'Dealer'} data={[]} width={'44%'} />
              <DropDown label={'Make'} zIndex={999} data={[]} width={'44%'} />
            </View>
            <View style={styles.pickerRow2}>
              <DropDown label={'Modal'} data={[]} width={'44%'} />
              <DropDown label={'VIN'} zIndex={999} data={[]} width={'44%'} />
            </View>
            <View style={styles.pickerRow3}>
              <DropDown label={'Status'} data={[]} width={'44%'} />
              <DropDown label={'Date'} zIndex={999} data={[]} width={'44%'} />
            </View>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                btnStyle('40%', 9, 15, 0).btnStyle,
                {backgroundColor: theme.colors.blackColor},
              ]}
              onPress={() => alert('todo!')}>
              <Text
                style={[
                  btnTxtStyle().btnTxtStyle,
                  {color: theme.colors.whiteColor, fontSize: 13},
                ]}>
                Search
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            style={{zIndex: 1}}
            contentContainerStyle={{flexGrow: 1}}
            data={type === 'pending' ? pendingData : approvedData}
            extraData={type === 'pending' ? pendingData : approvedData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ReportsByUser;
