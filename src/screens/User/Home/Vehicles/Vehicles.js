import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import Slider from 'rn-range-slider';
import {Card, Icon} from 'react-native-elements';
import {Header} from '../../../../components/Header';
import {DropDown} from '../../../../components/DropDown';
import {appIcons} from '../../../../assets';
import {btnStyle, btnTxtStyle} from '../../../../utils/CommonStyles';
import styles from './styles';
import theme from '../../../../theme';

// Slider components

import Thumb from '../../../../components/Slider/Thumb';
import Rail from '../../../../components/Slider/Rail';
import RailSelected from '../../../../components/Slider/RailSelected';
import Notch from '../../../../components/Slider/Notch';
import Label from '../../../../components/Slider/Label';
import {useDispatch, useSelector} from 'react-redux';
import {getIsDrawerOpenFromState} from '@react-navigation/drawer';
import {getVehicals, homeLoading} from '../../../../redux/actions/home';
import {Loading} from '../../../../components/Loading';

// const data = [
//   {
//     name: 'Lewisville Autoplex',
//     maker: 'JEEP',
//     mileage: 'Facilis consectetur miles',
//     city: 'Lewisville',
//     state: 'Texas',
//     vin: '1C4RJEBG0LC123070',
//     history: '03-11-2020 to 09-01-2022',
//     date: '03-02-2021',
//     condition: 'Perfect',
//   },
//   {
//     name: 'Lewisville Autoplex',
//     maker: 'FORD',
//     mileage: '204',
//     city: 'Lewisville',
//     state: 'Texas',
//     vin: '1C4RJEBG0LC123070',
//     history: 'History not found',
//     date: '04-07-2021',
//     condition: `No\nDamage\nDone`,
//   },
//   {
//     name: 'Zeeshan Ahmad',
//     maker: 'HONDA',
//     mileage: '393784',
//     city: 'Lewisville',
//     state: 'Texas',
//     vin: '1C4RJEBG0LC123070',
//     history: '03-11-2020 to 09-01-2022',
//     date: '02-15-2021',
//     condition: 'Perfect',
//   },
//   {
//     name: 'Lewisville Autoplex',
//     maker: 'JEEP',
//     mileage: 'Facilis consectetur miles',
//     city: 'Lewisville',
//     state: 'Texas',
//     vin: '1C4RJEBG0LC123070',
//     history: '03-11-2020 to 09-01-2022',
//     date: '03-02-2021',
//     condition: 'Perfect',
//   },
//   {
//     name: 'Lewisville Autoplex',
//     maker: 'FORD',
//     mileage: '204',
//     city: 'Lewisville',
//     state: 'Texas',
//     vin: '1C4RJEBG0LC123070',
//     history: 'History not found',
//     date: '04-07-2021',
//     condition: `No\nDamage\nDone`,
//   },
//   {
//     name: 'Zeeshan Ahmad',
//     maker: 'HONDA',
//     mileage: '393784',
//     city: 'Lewisville',
//     state: 'Texas',
//     vin: '1C4RJEBG0LC123070',
//     history: '03-11-2020 to 09-01-2022',
//     date: '02-15-2021',
//     condition: 'Perfect',
//   },
// ];

const Vehicles = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [sortModal, setSortModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [data, setData] = useState(null);
  const [getDat, setGetDat] = useState(null);

  // range slider
  const [rangeDisabled, setRangeDisabled] = useState(false);
  const [low, setLow] = useState(100);
  const [high, setHigh] = useState(3500);
  const [min, setMin] = useState(100);
  const [max, setMax] = useState(3500);
  const [floatingLabel, setFloatingLabel] = useState(false);

  const dispatch = useDispatch();
  const stateVal = useSelector((state) => state.home);

  const {token} = useSelector((state) => state.auth);
  useEffect(() => {
    if (getDat === null) {
      setData(null);
      getData();
      setGetDat('ok');
    }
  });

  const getData = () => {
    dispatch(homeLoading(true));
    return dispatch(getVehicals(token, onSuccess, onError));
  };

  const onSuccess = (res) => {
    dispatch(homeLoading(false));
    setData(res.cars);
  };
  const onError = (err) => {
    return console.log(err);
  };
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);
  // end

  const renderSort = () => {
    return (
      <Modal
        isVisible={sortModal}
        coverScreen={true}
        hasBackdrop={true}
        animationIn="slideInUp">
        <Icon
          type="entypo"
          name="circle-with-cross"
          size={30}
          color={theme.colors.lightGrayColor}
          iconStyle={{alignSelf: 'flex-end', marginBottom: 10}}
          onPress={() => setSortModal(!sortModal)}
        />
        <View style={styles.modalViewContainer}>
          <Text style={styles.titleText}>City</Text>
          <DropDown label={'Select'} zIndex={400} data={sortData} />
          <Text style={styles.titleText}>State</Text>
          <DropDown label={'Select'} zIndex={300} data={sortData} />
          <Text style={styles.titleText}>Date of Report</Text>
          <View style={{zIndex: 200, flexDirection: 'row'}}>
            <DropDown
              label={'Start Date'}
              zIndex={200}
              data={sortData}
              width={'46%'}
            />
            <DropDown
              label={'End Date'}
              zIndex={200}
              data={sortData}
              width={'46%'}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              btnStyle('30%', 7, 20, 20).btnStyle,
              {
                backgroundColor: theme.colors.blackColor,
              },
            ]}
            onPress={() => setSortModal(!sortModal)}>
            <Text style={[btnTxtStyle().btnTxtStyle, styles.txt2ndStyle]}>
              Sort
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  const renderFilter = () => {
    return (
      <Modal
        isVisible={filterModal}
        coverScreen={true}
        hasBackdrop={true}
        animationIn="slideInUp">
        <Icon
          type="entypo"
          name="circle-with-cross"
          size={30}
          color={theme.colors.lightGrayColor}
          iconStyle={{alignSelf: 'flex-end', marginBottom: 10}}
          onPress={() => setFilterModal(!filterModal)}
        />
        <View style={styles.filterModalView}>
          <Text style={styles.titleText}>
            Mileage ({low} - {high})
          </Text>
          <Slider
            style={styles.slider}
            min={min}
            max={max}
            step={1}
            disableRange={rangeDisabled}
            floatingLabel={floatingLabel}
            renderThumb={renderThumb}
            renderRail={renderRail}
            renderRailSelected={renderRailSelected}
            onValueChanged={handleValueChange}
          />
          <Text style={styles.titleText}>Dealership</Text>
          <DropDown label={'Select'} zIndex={400} data={data.dealers} />
          <Text style={styles.titleText}>Vin</Text>
          <DropDown label={'Select'} zIndex={300} data={data.vins} />
          <Text style={styles.titleText}>Make</Text>
          <DropDown label={'Select'} zIndex={200} data={data.makers} />
          <Text style={styles.titleText}>Modal</Text>
          <DropDown label={'Select'} zIndex={100} data={data.models} />
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              btnStyle('30%', 7, 20, 20).btnStyle,
              {
                backgroundColor: theme.colors.blackColor,
              },
            ]}
            onPress={() => setFilterModal(!filterModal)}>
            <Text style={[btnTxtStyle().btnTxtStyle, styles.txt2ndStyle]}>
              Filter
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <Card containerStyle={styles.cardContainer}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.textContainer}>
            <Text style={styles.nameStyle}>{item.dealer}</Text>
            <Text style={styles.textStyle}>Make: {item.make}</Text>
            <Text style={styles.textStyle}>Mileage: {item.mileage}</Text>
            <Text style={styles.textStyle}>City: {item.location}</Text>
            <Text style={styles.textStyle}>State: {item.state}</Text>
            <Text style={styles.textStyle}>Vin: {item.vin}</Text>
            <Text style={styles.textStyle}>History: {item.history}</Text>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                btnStyle('60%', 7, 15, 10).btnStyle,
                {
                  alignSelf: 'flex-start',
                  backgroundColor: theme.colors.blackColor,
                },
              ]}
              onPress={() =>
                navigation.navigate('InspectsDetail', {
                  data: item,
                })
              }>
              <Text style={[btnTxtStyle().btnTxtStyle, styles.txt2ndStyle]}>
                Get More Info
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 0.4, backgroundColor: theme.colors.blackColor}}>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>
                Date of report: {item.publish_date}
              </Text>
            </View>
            <View style={styles.conditionContainer}>
              <Text style={styles.conditionText}>{item.inspection_status}</Text>
            </View>
          </View>
        </View>
      </Card>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        type={'SimpleLineIcons'}
        name={'menu'}
        leftPress={() => navigation.toggleDrawer()}
        title={'Vehicles'}
        navigation={navigation}
      />

      <View style={{flex: 1, backgroundColor: theme.colors.g1}}>
        <Loading visible={stateVal.isLoading} />

        <View style={styles.searchContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder={'Search by Vin'}
              placeholderTextColor={theme.colors.grayColor}
              inputType="default"
              capitalize={'none'}
              onChangeText={(text) => {
                setSearch(text);
              }}
              style={styles.inputStyle}
            />
            <Icon type="Ionicons" name="search" />
          </View>
          {/* <DropDown
            label={'Sort by'}
            zIndex={99}
            data={sortData}
            width={'78%'}
          /> */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setFilterModal(!filterModal);
            }}>
            <Image
              source={appIcons.filter}
              resizeMode="contain"
              style={{width: 20, height: 15.5}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setSortModal(!sortModal);
            }}>
            <Image
              source={appIcons.sort}
              resizeMode="contain"
              style={{width: 20, height: 15}}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          contentContainerStyle={{zIndex: 1}}
          style={{zIndex: 1}}
          data={data && data}
          extraData={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
        {sortModal && renderSort()}
        {filterModal && renderFilter()}
      </View>
    </SafeAreaView>
  );
};

export default Vehicles;
