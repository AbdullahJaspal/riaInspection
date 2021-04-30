import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Header} from '../../../../../components/Header';
import styles from './styles';
import theme from '../../../../../theme';

const InspectionReportList = [
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
  const [type, setType] = useState('list');

  const RenderRow = ({label, value, bg}) => {
    return (
      <View style={[styles.txtRow, {backgroundColor: bg}]}>
        <Text style={{flex: 0.5, left: 15}}>{label}</Text>
        <Text style={{flex: 0.5}}>{value}</Text>
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
  const showAlert = () => {
    Alert.alert('Are you sure?', 'You want to Show Report?', [
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
              onPress={() => replaceScreen('EditReports',{
                screenName:'Edit Report'
              })}
            />
            <Icon
              type="MaterialIcons"
              name="delete"
              iconStyle={styles.iconStyle}
              onPress={() => delAlert()}
            />
            <Text style={styles.showButton} onPress={() => showAlert()}>
              Show
            </Text>
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
        {/* <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              styles.tabStyle,
              {backgroundColor: type === 'list' ? 'black' : 'white'},
            ]}
            onPress={() => setType('list')}>
            <Text
              style={
                type === 'list' ? styles.tabTxtStyle : styles.tabTxtStyle1
              }>
              Inspection Report List
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              styles.tabStyle,
              {backgroundColor: type === 'new' ? 'black' : 'white'},
            ]}
            onPress={() => setType('new')}>
            <Text
              style={type === 'new' ? styles.tabTxtStyle : styles.tabTxtStyle1}>
              Add New Report
            </Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.searchBarContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder={'Search by City'}
              placeholderTextColor={theme.colors.grayColor}
              inputType="default"
              capitalize={'none'}
              onChangeText={(text) => {
                setSearch(text);
              }}
              style={styles.inputStyle}
            />
            <Icon type="Ionicons" name="search" iconStyle={styles.iconStyle} />
          </View>
        </View>

        <FlatList
          style={{zIndex: 1}}
          contentContainerStyle={{flexGrow: 1}}
          data={InspectionReportList}
          extraData={InspectionReportList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Reports;
