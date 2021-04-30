import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Header} from '../../../../components/Header';
import {Picker} from '@react-native-community/picker';
import {Icon} from 'react-native-elements';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker/src';
import {DropDown} from '../../../../components/DropDown';
import {imgStyle, btnStyle, btnTxtStyle} from '../../../../utils/CommonStyles';
import {appImages} from '../../../../assets';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';
import theme from '../../../../theme';
import InputBox from '../../../../components/InputBox';

const vehicalType = [
  {
    label: 'Car 2DR',
    value: 'Car 2DR',
  },
  {
    label: 'Car 4DR',
    value: 'Car 4DR',
  },
  {
    label: 'Suv 2DR',
    value: 'Suv 2DR',
  },
  {
    label: 'Suv 4DR',
    value: 'Suv 4DR',
  },
  {
    label: 'Truck Crew Cab',
    value: 'Truck Crew Cab',
  },
  {
    label: 'Truck Extended Cab',
    value: 'Truck Extended Cab',
  },
  {
    label: 'Truck Regular Cab',
    value: 'Truck Regular Cab',
  },
  {
    label: 'Truck 4DR Utilized Bed',
    value: 'Truck 4DR Utilized Bed',
  },
  {
    label: 'Van',
    value: 'Van',
  },
  {
    label: 'Minivan',
    value: 'Minivan',
  },
];
const frontBumper = [
  {
    label: 'Not Applicable',
    value: 'Not Applicable',
  },
  {
    label: 'Needs Refinishing',
    value: 'needs Refinishing',
  },
  {
    label: 'Orignal',
    value: 'Orignal',
  },
  {
    label: 'Refinished',
    value: 'Refinished',
  },
  {
    label: 'Factory Refinish',
    value: 'Factory Refinish',
  },
  {
    label: 'Previously Replaced',
    value: 'Previously Replaced',
  },
  {
    label: 'Damaged',
    value: 'Damaged',
  },
];
const rocketPanel = [
  {
    label: 'Orignal',
    value: 'Orignal',
  },
  {
    label: 'Previously Replaced',
    value: 'Previously Replaced',
  },
  {
    label: 'Damaged',
    value: 'Damaged',
  },
];
const innerBody = [
  {
    label: 'Not Applicable',
    value: 'Not Applicable',
  },
  {
    label: 'Orignal',
    value: 'Orignal',
  },
  {
    label: 'Refinished',
    value: 'Refinished',
  },
  {
    label: 'Factory Refinish',
    value: 'Factory Refinish',
  },
  {
    label: 'Previously Replaced',
    value: 'Previously Replaced',
  },
  {
    label: 'Damaged',
    value: 'Damaged',
  },
];
const fullCar = [
  {
    label: 'Full Repaint',
    value: 'Full Repaint',
  },
  {
    label: 'Hail Damage',
    value: 'Hail Damage',
  },
  {
    label: 'None',
    value: 'None',
  },
  {
    label: 'Wrap',
    value: 'Wrap',
  },
];
const AddReport = ({navigation}) => {
  const [step, setStep] = useState(1);
  const [type, setType] = useState(true);
  const [response, setResponse] = useState(null);
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [dealer, setDealer] = useState('');
  const [vin, setVin] = useState('');
  const [editModal, setEditModal] = useState('');
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [mileage, setMileage] = useState('');
  const [color, setColor] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState();

  useEffect(() => {
    console.log(Platform.OS);
  });

  const RenderFirst = () => {
    return (
      <View style={[styles.itemContainer, {zIndex: 4000}]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Add New Report</Text>
        </View>
        <View style={styles.imgsRow}>
          <View
            style={{
              width: '50%',
            }}>
            <Image
              source={appImages.placeholder}
              resizeMode="contain"
              style={imgStyle(100, 60).imgStyle}
              onPress={() => {}}
            />
            <Text style={styles.txtStyle}>
              Add Vin Barcode Images{'\n'}or{'\n'}
              <Text style={styles.txtBoldStyle}>Scan Barcode</Text>
            </Text>
          </View>
          <View style={{width: '50%'}}>
            <Image
              source={response ? {uri: response.uri} : appImages.placeholder}
              resizeMode="contain"
              style={imgStyle(100, 60).imgStyle}
            />
            <Text
              style={styles.txtStyle}
              onPress={() => {
                gallery();
              }}>
              Add Car images{'\n'}or{'\n'}
              <Text
                style={styles.txtBoldStyle}
                onPress={() => {
                  camera();
                }}>
                Capture
              </Text>
            </Text>
          </View>
        </View>

        <View style={[styles.textPickerRow, {zIndex: 100}]}>
          <InputBox
            placeholder={'City'}
            onChangeText={(val) => {
              setCity(val);
            }}
          />
          <InputBox
            placeholder={'State'}
            onChangeText={(val) => {
              setState(val);
            }}
          />
        </View>
        <View style={[styles.textPickerRow, {zIndex: 100}]}>
          <InputBox
            placeholder={'Dealer'}
            onChangeText={(val) => {
              setDealer(val);
            }}
          />
          <InputBox
            placeholder={'Vin'}
            onChangeText={(val) => {
              setVin(val);
            }}
          />
        </View>

        <View style={[styles.pickerRow, {zIndex: 9}]}>
          <DropDown
            label={'Select Modal'}
            zIndex={98}
            data={[]}
            width={'47%'}
            Platform={Platform.OS}
          />
          <InputBox
            placeholder={'Edit Modal'}
            onChangeText={(val) => {
              setEditModal(val);
            }}
          />
        </View>
        <View style={[styles.textPickerRow, {zIndex: 0}]}>
          <InputBox
            placeholder={'Year'}
            onChangeText={(val) => {
              setYear(val);
            }}
          />
          <InputBox
            placeholder={'Make'}
            onChangeText={(val) => {
              setMake(val);
            }}
          />
        </View>
        <View style={[styles.textPickerRow, {zIndex: 100}]}>
          <InputBox
            placeholder={'Mileage'}
            onChangeText={(val) => {
              setMileage(val);
            }}
          />
          <InputBox
            placeholder={'Color'}
            onChangeText={(val) => {
              setColor(val);
            }}
          />
        </View>
        <View style={[styles.pickerRow1, {zIndex: 0}]}>
          <DropDown
            label={'Vehicle Type'}
            zIndex={0}
            data={vehicalType}
            Platform={Platform.OS}
            width={'47%'}
            onChangeItem
          />
        </View>
      </View>
    );
  };

  const HeadingRow = ({txt, txt1, txt2}) => {
    return (
      <View style={styles.headingRow}>
        <View style={styles.headingItem}>
          <Text style={styles.headingTxt}>{txt}</Text>
        </View>
        <View style={styles.headingItem}>
          <Text style={styles.headingTxt}>{txt1}</Text>
        </View>
        <View style={styles.headingItem}>
          <Text style={styles.headingTxt}>{txt2}</Text>
        </View>
      </View>
    );
  };

  const ThreeItemRow = ({
    txt,
    label,
    zIndex,
    leftdata,
    rightdata,
    bottomWidth = true,
  }) => {
    return (
      <View style={[styles.tableRow, {zIndex}]}>
        <View
          style={[styles.firstItem, {borderBottomWidth: bottomWidth ? 1 : 0}]}>
          <Text style={styles.rowTxt}>{txt}</Text>
        </View>
        <View
          style={[
            styles.secondItem1,
            {borderBottomWidth: bottomWidth ? 1 : 0},
          ]}>
          <DropDown
            label={label}
            Platform={Platform.OS}
            zIndex={50}
            data={leftdata}
            width={'90%'}
          />
        </View>
        <View
          style={[styles.secondItem, {borderBottomWidth: bottomWidth ? 1 : 0}]}>
          <DropDown
            label={label}
            Platform={Platform.OS}
            zIndex={50}
            data={rightdata}
            width={'90%'}
          />
        </View>
      </View>
    );
  };

  const RenderSecond = () => {
    return (
      <View style={[styles.itemContainer, {zIndex: 3000}]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Exterior Body Notes (Cosmetic)</Text>
        </View>
        <View style={[styles.pickerRow, {zIndex: 90}]}>
          <DropDown
            label={'Front Bumper'}
            zIndex={90}
            Platform={Platform.OS}
            data={frontBumper}
            width={'47%'}
          />
          <DropDown
            label={'Rear Bumper'}
            zIndex={90}
            Platform={Platform.OS}
            data={frontBumper}
            width={'47%'}
          />
        </View>
        <View style={[styles.pickerRow, {zIndex: 89}]}>
          <DropDown
            label={'Roof'}
            zIndex={89}
            data={frontBumper}
            Platform={Platform.OS}
            width={'47%'}
          />
          <DropDown
            label={'Hood'}
            zIndex={89}
            data={frontBumper}
            Platform={Platform.OS}
            width={'47%'}
          />
        </View>
        <View style={[styles.pickerRow, {zIndex: 88}]}>
          <DropDown
            label={'Cladding Mirror housing'}
            zIndex={88}
            data={frontBumper}
            Platform={Platform.OS}
            width={'47%'}
          />
          <DropDown
            label={'Deck/Liftgate/Tailgate'}
            zIndex={88}
            data={frontBumper}
            Platform={Platform.OS}
            width={'47%'}
          />
        </View>
        <View style={[styles.pickerRow1, {zIndex: 87}]}>
          <DropDown
            label={'Full Car'}
            zIndex={87}
            Platform={Platform.OS}
            data={fullCar}
            width={'47%'}
          />
        </View>
        <View style={[styles.tableBox, {marginTop: 20, zIndex: 86}]}>
          <HeadingRow txt="Part" txt1="Left" txt2="Right" />
          <ThreeItemRow
            txt="Fender"
            label={'original'}
            zIndex={85}
            leftdata={frontBumper}
            rightdata={frontBumper}
          />
          <ThreeItemRow
            txt="Front Door"
            label={'original'}
            zIndex={84}
            leftdata={frontBumper}
            rightdata={frontBumper}
          />
          <ThreeItemRow
            txt="Rear door"
            label={'replaced'}
            zIndex={83}
            leftdata={frontBumper}
            rightdata={frontBumper}
          />
          <ThreeItemRow
            txt="Cosmetic Rocker"
            label={'original'}
            zIndex={82}
            leftdata={frontBumper}
            rightdata={frontBumper}
          />
          <ThreeItemRow
            txt="Cab Corner"
            label={'original'}
            zIndex={81}
            leftdata={frontBumper}
            rightdata={frontBumper}
          />
          <ThreeItemRow
            txt="Quarter Panel"
            label={'original'}
            zIndex={80}
            leftdata={frontBumper}
            rightdata={frontBumper}
          />
          <ThreeItemRow
            txt="Beside"
            label={'original'}
            zIndex={79}
            leftdata={frontBumper}
            rightdata={frontBumper}
          />
          <ThreeItemRow
            txt="Roof Rail"
            bottomWidth={false}
            zIndex={78}
            label={'original'}
            leftdata={frontBumper}
            rightdata={frontBumper}
          />
        </View>
      </View>
    );
  };

  const RenderThree = () => {
    return (
      <View style={[styles.itemContainer, {zIndex: 2000}]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>
            Inner Body Inspection (Structural)
          </Text>
        </View>
        <View style={[styles.tableBox, {marginTop: 20, zIndex: 77}]}>
          <HeadingRow txt="Piller" txt1="Left" txt2="Right" />
          <ThreeItemRow
            txt="A"
            label={'original'}
            zIndex={76}
            leftdata={innerBody}
            rightdata={innerBody}
          />
          <ThreeItemRow
            txt="B"
            label={'original'}
            zIndex={75}
            leftdata={innerBody}
            rightdata={innerBody}
          />
          <ThreeItemRow
            txt="C"
            label={'replaced'}
            zIndex={74}
            leftdata={innerBody}
            rightdata={innerBody}
          />
          <ThreeItemRow
            txt="D"
            label={'original'}
            zIndex={73}
            leftdata={innerBody}
            rightdata={innerBody}
          />
        </View>

        <View style={[styles.tableBox, {marginTop: 20, zIndex: 72}]}>
          <HeadingRow txt="Part" txt1="Left" txt2="Right" />
          <ThreeItemRow
            txt="Rocker Panel"
            label={'original'}
            zIndex={71}
            leftdata={rocketPanel}
            rightdata={rocketPanel}
          />
          <ThreeItemRow
            txt="Rear Strut Tower/
            Wheel Housing"
            label={'original'}
            zIndex={70}
            leftdata={rocketPanel}
            rightdata={rocketPanel}
          />
        </View>

        <View style={[styles.pickerRow, {zIndex: 69}]}>
          <DropDown
            label={'Rear Body Panel'}
            zIndex={68}
            data={rocketPanel}
            Platform={Platform.OS}
            width={'47%'}
          />
        </View>
      </View>
    );
  };

  const RenderFour = () => {
    return (
      <View style={[styles.itemContainer, {zIndex: 60}]}>
        <View style={[styles.headingContainer, {zIndex: 60}]}>
          <Text style={[styles.headingText, {zIndex: 60}]}>
            Engine Bay Underhood (Structural)
          </Text>
        </View>
        <View style={[styles.pickerRow, {zIndex: 50}]}>
          <DropDown
            label={'Core Support'}
            Platform={Platform.OS}
            zIndex={50}
            data={[
              {
                label: 'Not Applicable',
                value: 'Not Applicable',
              },
              {
                label: 'Welded',
                value: 'Welded',
              },
              {
                label: 'Bolt on',
                value: 'Bolt on',
              },
            ]}
            width={'47%'}
          />
        </View>

        <View style={[styles.tableBox, {marginTop: 20, zIndex: 48}]}>
          <HeadingRow txt="Part" txt1="Left" txt2="Right" />
          <ThreeItemRow
            txt="Strut Tower/Apron"
            label={'original'}
            zIndex={47}
            leftdata={[
              {
                label: 'Orignal',
                value: 'Orignal',
              },
              {
                label: 'Previously Replaced',
                value: 'Previously Replaced',
              },
              {
                label: 'Damaged',
                value: 'Damaged',
              },
              {
                label: 'Not Applicable',
                value: 'Not Applicable',
              },
            ]}
            rightdata={[
              {
                label: 'Orignal',
                value: 'Orignal',
              },
              {
                label: 'Previously Replaced',
                value: 'Previously Replaced',
              },
              {
                label: 'Damaged',
                value: 'Damaged',
              },
              {
                label: 'Not Applicable',
                value: 'Not Applicable',
              },
            ]}
          />
          <ThreeItemRow
            txt="Frame Rail"
            label={'original'}
            zIndex={46}
            leftdata={[
              {
                label: 'Orignal',
                value: 'Orignal',
              },
              {
                label: 'Previously Replaced',
                value: 'Previously Replaced',
              },
              {
                label: 'Damaged',
                value: 'Damaged',
              },
              {
                label: 'Not Applicable',
                value: 'Not Applicable',
              },
            ]}
            rightdata={[
              {
                label: 'Orignal',
                value: 'Orignal',
              },
              {
                label: 'Previously Replaced',
                value: 'Previously Replaced',
              },
              {
                label: 'Damaged',
                value: 'Damaged',
              },
              {
                label: 'Not Applicable',
                value: 'Not Applicable',
              },
            ]}
          />
        </View>
        <View style={[styles.tableBox, {marginTop: 20, zIndex: 45}]}>
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>Extra Details</Text>
          </View>
          <Text style={styles.titleTxt}>Scrapes and Scratches</Text>
          <View style={[styles.pickerRow, {zIndex: 44}]}>
            <DropDown
              label={'Interior'}
              zIndex={44}
              Platform={Platform.OS}
              data={[
                {label: 'none', value: 'none'},
                {
                  label: '1',
                  value: '1',
                },
                {
                  label: '2',
                  value: '2',
                },
                {
                  label: '3',
                  value: '3',
                },
                {
                  label: '4',
                  value: '4',
                },
                {
                  label: '5',
                  value: '5',
                },
                {
                  label: '6',
                  value: '6',
                },
                {
                  label: '7',
                  value: '7',
                },
                {
                  label: '8',
                  value: '8',
                },
                {
                  label: '9',
                  value: '9',
                },
                {
                  label: '10',
                  value: '10',
                },
              ]}
              width={'47%'}
            />
            <DropDown
              label={'Exterior'}
              zIndex={44}
              Platform={Platform.OS}
              data={[
                {label: 'none', value: 'none'},
                {
                  label: '1',
                  value: '1',
                },
                {
                  label: '2',
                  value: '2',
                },
                {
                  label: '3',
                  value: '3',
                },
                {
                  label: '4',
                  value: '4',
                },
                {
                  label: '5',
                  value: '5',
                },
                {
                  label: '6',
                  value: '6',
                },
                {
                  label: '7',
                  value: '7',
                },
                {
                  label: '8',
                  value: '8',
                },
                {
                  label: '9',
                  value: '9',
                },
                {
                  label: '10',
                  value: '10',
                },
              ]}
              width={'47%'}
            />
          </View>
          <Text style={styles.titleTxt}>Discoloration and stains</Text>
          <View style={[styles.pickerRow, {zIndex: 43}]}>
            <DropDown
              label={'Interior'}
              zIndex={43}
              Platform={Platform.OS}
              data={[
                {label: 'none', value: 'none'},
                {
                  label: '1',
                  value: '1',
                },
                {
                  label: '2',
                  value: '2',
                },
                {
                  label: '3',
                  value: '3',
                },
                {
                  label: '4',
                  value: '4',
                },
                {
                  label: '5',
                  value: '5',
                },
                {
                  label: '6',
                  value: '6',
                },
                {
                  label: '7',
                  value: '7',
                },
                {
                  label: '8',
                  value: '8',
                },
                {
                  label: '9',
                  value: '9',
                },
                {
                  label: '10',
                  value: '10',
                },
              ]}
              width={'47%'}
            />
            <DropDown
              label={'Exterior'}
              zIndex={43}
              Platform={Platform.OS}
              data={[
                {label: 'none', value: 'none'},
                {
                  label: '1',
                  value: '1',
                },
                {
                  label: '2',
                  value: '2',
                },
                {
                  label: '3',
                  value: '3',
                },
                {
                  label: '4',
                  value: '4',
                },
                {
                  label: '5',
                  value: '5',
                },
                {
                  label: '6',
                  value: '6',
                },
                {
                  label: '7',
                  value: '7',
                },
                {
                  label: '8',
                  value: '8',
                },
                {
                  label: '9',
                  value: '9',
                },
                {
                  label: '10',
                  value: '10',
                },
              ]}
              width={'47%'}
            />
          </View>
          <View style={[styles.pickerRow, {zIndex: 42}]}>
            <DropDown
              label={'Smell'}
              Platform={Platform.OS}
              zIndex={42}
              data={[
                {label: 'none', value: 'none'},
                {
                  label: '1',
                  value: '1',
                },
                {
                  label: '2',
                  value: '2',
                },
                {
                  label: '3',
                  value: '3',
                },
                {
                  label: '4',
                  value: '4',
                },
                {
                  label: '5',
                  value: '5',
                },
                {
                  label: '6',
                  value: '6',
                },
                {
                  label: '7',
                  value: '7',
                },
                {
                  label: '8',
                  value: '8',
                },
                {
                  label: '9',
                  value: '9',
                },
                {
                  label: '10',
                  value: '10',
                },
              ]}
              width={'47%'}
            />
            <DropDown
              label={'Hail damage'}
              Platform={Platform.OS}
              zIndex={42}
              data={[
                {label: 'none', value: 'none'},
                {
                  label: '1',
                  value: '1',
                },
                {
                  label: '2',
                  value: '2',
                },
                {
                  label: '3',
                  value: '3',
                },
                {
                  label: '4',
                  value: '4',
                },
                {
                  label: '5',
                  value: '5',
                },
                {
                  label: '6',
                  value: '6',
                },
                {
                  label: '7',
                  value: '7',
                },
                {
                  label: '8',
                  value: '8',
                },
                {
                  label: '9',
                  value: '9',
                },
                {
                  label: '10',
                  value: '10',
                },
              ]}
              width={'47%'}
            />
          </View>
          <View style={styles.inputContainer}></View>
          <View
            style={[
              styles.pickerRow,
              {marginTop: 0, marginBottom: 20, zIndex: 41},
            ]}>
            <DropDown
              label={'Status'}
              zIndex={41}
              Platform={Platform.OS}
              data={[
                {
                  label: 'Automatic',
                  value: 'Automatic',
                },
                {
                  label: 'Inspection Complete',
                  value: 'Inspection Complete',
                },
                {
                  label: 'No damage',
                  value: 'No damage',
                },
                {
                  label: 'Original',
                  value: 'Original',
                },
              ]}
              width={'100%'}
            />
            <View style={styles.displayContainer}>
              <Icon
                type={'antdesign'}
                name={type ? 'checksquare' : 'checksquareo'}
                size={16}
                iconStyle={{color: theme.colors.blackColor}}
                onPress={() => setType(!type)}
              />
              <Text style={styles.displayText}>Display on User Side</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          style={[
            btnStyle('35%', 9, 15, 0).btnStyle,
            {backgroundColor: theme.colors.blackColor},
          ]}
          onPress={() => alert('todo!')}>
          <Text
            style={[
              btnTxtStyle().btnTxtStyle,
              {color: theme.colors.whiteColor, fontSize: 13},
            ]}>
            Add Report
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const camera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      (response) => {
        if (response.didCancel === true) {
          setResponse(null);
        } else {
          setResponse(response);
        }
      },
    );
  };

  const gallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      (response) => {
        setResponse(response);
      },
    );
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        leftPress={() => navigation.goBack()}
        title={'New Report'}
        navigation={navigation}
      />
      <View style={{flex: 1, backgroundColor: theme.colors.g1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <RenderFirst />
          <RenderSecond />
          <RenderThree />
          <RenderFour />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AddReport;
