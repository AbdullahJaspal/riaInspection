import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Header} from '../../../../components/Header';
import {DropDown} from '../../../../components/DropDown';
import FloatingButton from '../../../../components/FloatingButton';
import styles from './styles';
import theme from '../../../../theme';
import {btnStyle, btnTxtStyle} from '../../../../utils/CommonStyles';
import {ScrollView} from 'react-native-gesture-handler';

const hidden = [
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
const deleted = [
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
  const [type, setType] = useState('hidden');

  const RenderRow = ({label, value, bg}) => {
    return (
      <View style={[styles.txtRow, {backgroundColor: bg}]}>
        <Text style={{flex: 0.5, left: 15}}>{label}</Text>
        <Text style={{flex: 0.5}}>{value}</Text>
      </View>
    );
  };

  const showAlert = () => {
    Alert.alert('Are you sure?', 'You want to Delete Report?', [
      {
        text: 'Cancel',
      },
      {text: 'Confirm', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const renderApproved = ({item, index}) => {
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
        <RenderRow
          label="Status"
          value={item.status}
          bg={theme.colors.whiteColor}
        />
        <RenderRow
          label="Hidden By"
          value={item.hiddenBy}
          bg={theme.colors.g2}
        />

        <View style={styles.txtRowAction}>
          <Text style={{flex: 0.5, left: 15}}>Actions :</Text>
        </View>
        <View style={styles.txtRow}>
          <View style={styles.iconsRow}>
            {type === 'hidden' ? (
              <Text
                style={[styles.showButton, {backgroundColor: '#1775E1'}]}
                onPress={() => showAlert()}>
                Approve Hidden Report
              </Text>
            ) : (
              <Text
                style={[styles.showButton, {backgroundColor: '#D14141'}]}
                onPress={() => showAlert()}>
                Approve Deleted Report
              </Text>
            )}
            {type === 'hidden' ? (
              <Text
                style={[styles.showButton, {backgroundColor: '#1775E1'}]}
                onPress={() => showAlert()}>
                Approve Hidden Report
              </Text>
            ) : (
              <Text
                style={[styles.showButton, {backgroundColor: '#D14141'}]}
                onPress={() => showAlert()}>
                Approve Deleted Report
              </Text>
            )}
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
        title={'Inspection Report List'}
        navigation={navigation}
      />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[
            styles.tabStyle,
            {backgroundColor: type === 'hidden' ? 'black' : 'white'},
          ]}
          onPress={() => setType('hidden')}>
          <Text
            style={
              type === 'hidden' ? styles.tabTxtStyle : styles.tabTxtStyle1
            }>
            Approve Hidden
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[
            styles.tabStyle,
            {backgroundColor: type === 'deleted' ? 'black' : 'white'},
          ]}
          onPress={() => setType('deleted')}>
          <Text
            style={
              type === 'deleted' ? styles.tabTxtStyle : styles.tabTxtStyle1
            }>
            Approve Deleted
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{flex: 1, backgroundColor: theme.colors.g1}}>
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
          data={type === 'hidden' ? hidden : deleted}
          extraData={type === 'hidden' ? hidden : deleted}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderApproved}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
      <FloatingButton
        navigation={navigation}
        screen={'AddReport'}
        type={'font-awesome'}
        name={'plus'}
        size={28}
      />
    </SafeAreaView>
  );
};

export default Reports;
