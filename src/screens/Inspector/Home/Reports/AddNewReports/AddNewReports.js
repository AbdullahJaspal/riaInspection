import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Header} from '../../../../../components/Header';
import {Icon} from 'react-native-elements';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker/src';
import {DropDown} from '../../../../../components/DropDown';
import {
  imgStyle,
  btnStyle,
  btnTxtStyle,
} from '../../../../../utils/CommonStyles';
import {appImages} from '../../../../../assets';
import styles from './styles';
import theme from '../../../../../theme';

import {instanceOf} from 'prop-types';

const data = [
  {
    label: 'Punjab',
    value: 'pak',
  },
  {
    label: 'Sindh',
    value: 'pak',
  },
  {
    label: 'Balochistan',
    value: 'pak',
  },
  {
    label: 'Khyber Pakhtunkhwa',
    value: 'pak',
  },
];

const AddReport = ({navigation,}) => {
  const [step, setStep] = useState(1);
  const [type, setType] = useState(true);
  const [screenType, setScreenType] = useState(true);
  const [response, setResponse] = useState(null);


  const RenderFirst = () => {
    return (
      <View style={[styles.itemContainer, {zIndex: 4000}]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Add New Reports</Text>
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
        <View style={[styles.pickerRow, {zIndex: 100}]}>
          <DropDown label={'City'} zIndex={100} data={[]} width={'44%'} />
          <DropDown label={'State'} zIndex={100} data={[]} width={'44%'} />
        </View>
        <View style={[styles.pickerRow, {zIndex: 99}]}>
          <DropDown label={'Delear'} zIndex={99} data={[]} width={'44%'} />
          <DropDown label={'VIN'} zIndex={99} data={[]} width={'44%'} />
        </View>
        <View style={[styles.pickerRow, {zIndex: 98}]}>
          <DropDown
            label={'Select Modal'}
            zIndex={98}
            data={[]}
            width={'44%'}
          />
          <DropDown label={'Edit Modal'} zIndex={98} data={[]} width={'44%'} />
        </View>
        <View style={[styles.pickerRow, {zIndex: 97}]}>
          <DropDown label={'Year'} zIndex={97} data={[]} width={'44%'} />
          <DropDown label={'Make'} zIndex={97} data={[]} width={'44%'} />
        </View>
        <View style={[styles.pickerRow, {zIndex: 96}]}>
          <DropDown
            label={'Publish Date'}
            zIndex={96}
            data={[]}
            width={'44%'}
          />
          <DropDown label={'Mileage'} zIndex={96} data={[]} width={'44%'} />
        </View>
        <View style={[styles.pickerRow, {zIndex: 95}]}>
          <DropDown label={'Color'} zIndex={96} data={[]} width={'44%'} />
          <DropDown
            label={'Vehicle Type'}
            zIndex={95}
            data={[]}
            width={'44%'}
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
          <DropDown label={label} zIndex={50} data={leftdata} width={'90%'} />
        </View>
        <View
          style={[styles.secondItem, {borderBottomWidth: bottomWidth ? 1 : 0}]}>
          <DropDown label={label} zIndex={50} data={rightdata} width={'90%'} />
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
            data={[]}
            width={'44%'}
          />
          <DropDown label={'Rear Bumper'} zIndex={90} data={[]} width={'44%'} />
        </View>
        <View style={[styles.pickerRow, {zIndex: 89}]}>
          <DropDown label={'Roof'} zIndex={89} data={[]} width={'44%'} />
          <DropDown label={'Hood'} zIndex={89} data={[]} width={'44%'} />
        </View>
        <View style={[styles.pickerRow, {zIndex: 88}]}>
          <DropDown
            label={'Cladding Mirror housing'}
            zIndex={88}
            data={[]}
            width={'44%'}
          />
          <DropDown
            label={'Deck/Liftgate/Tailgate'}
            zIndex={88}
            data={[]}
            width={'44%'}
          />
        </View>
        <View style={[styles.pickerRow1, {zIndex: 87}]}>
          <DropDown label={'Full Car'} zIndex={87} data={[]} width={'47%'} />
        </View>
        <View style={[styles.tableBox, {marginTop: 20, zIndex: 86}]}>
          <HeadingRow txt="Part" txt1="Left" txt2="Right" />
          <ThreeItemRow
            txt="Fender"
            label={'original'}
            zIndex={85}
            leftdata={[]}
            rightdata={[]}
          />
          <ThreeItemRow
            txt="Front Door"
            label={'original'}
            zIndex={84}
            leftdata={[]}
            rightdata={[]}
          />
          <ThreeItemRow
            txt="Rear door"
            label={'replaced'}
            zIndex={83}
            leftdata={[]}
            rightdata={[]}
          />
          <ThreeItemRow
            txt="Cosmetic Rocker"
            label={'original'}
            zIndex={82}
            leftdata={[]}
            rightdata={[]}
          />
          <ThreeItemRow
            txt="Cab Corner"
            label={'original'}
            zIndex={81}
            leftdata={[]}
            rightdata={[]}
          />
          <ThreeItemRow
            txt="Quarter Panel"
            label={'original'}
            zIndex={80}
            leftdata={[]}
            rightdata={[]}
          />
          <ThreeItemRow
            txt="Beside"
            label={'original'}
            zIndex={79}
            leftdata={[]}
            rightdata={[]}
          />
          <ThreeItemRow
            txt="Roof Rail"
            bottomWidth={false}
            zIndex={78}
            label={'original'}
            leftdata={[]}
            rightdata={[]}
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
            leftdata={[]}
            rightdata={[]}
          />
          <ThreeItemRow
            txt="B"
            label={'original'}
            zIndex={75}
            leftdata={[]}
            rightdata={[]}
          />
          <ThreeItemRow
            txt="C"
            label={'replaced'}
            zIndex={74}
            leftdata={[]}
            rightdata={[]}
          />
          <ThreeItemRow
            txt="D"
            label={'original'}
            zIndex={73}
            leftdata={[]}
            rightdata={[]}
          />
        </View>

        <View style={[styles.tableBox, {marginTop: 20, zIndex: 72}]}>
          <HeadingRow txt="Part" txt1="Left" txt2="Right" />
          <ThreeItemRow
            txt="Rocker Panel"
            label={'original'}
            zIndex={71}
            leftdata={[]}
            rightdata={[]}
          />
          <ThreeItemRow
            txt="Rear Strut Tower/
            Wheel Housing"
            label={'original'}
            zIndex={70}
            leftdata={[]}
            rightdata={[]}
          />
        </View>

        <View style={[styles.pickerRow, {zIndex: 69}]}>
          <DropDown
            label={'Rear Body Panel'}
            zIndex={68}
            data={[]}
            width={'94%'}
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
            zIndex={50}
            data={[]}
            width={'94%'}
          />
        </View>

        <View style={[styles.tableBox, {marginTop: 20, zIndex: 48}]}>
          <HeadingRow txt="Part" txt1="Left" txt2="Right" />
          <ThreeItemRow
            txt="Strut Tower/Apron"
            label={'original'}
            zIndex={47}
            leftdata={[]}
            rightdata={[]}
          />
          <ThreeItemRow
            txt="Frame Rail"
            label={'original'}
            zIndex={46}
            leftdata={[]}
            rightdata={[]}
          />
        </View>
        <View style={[styles.tableBox, {marginTop: 20, zIndex: 45}]}>
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>Extra Details</Text>
          </View>
          <Text style={styles.titleTxt}>Scrapes and Scratches</Text>
          <View style={[styles.pickerRow, {zIndex: 44}]}>
            <DropDown label={'Interior'} zIndex={44} data={[]} width={'44%'} />
            <DropDown label={'Exterior'} zIndex={44} data={[]} width={'44%'} />
          </View>
          <Text style={styles.titleTxt}>Discoloration and stains</Text>
          <View style={[styles.pickerRow, {zIndex: 43}]}>
            <DropDown label={'Interior'} zIndex={43} data={[]} width={'44%'} />
            <DropDown label={'Exterior'} zIndex={43} data={[]} width={'44%'} />
          </View>
          <View style={[styles.pickerRow, {zIndex: 42}]}>
            <DropDown label={'Smell'} zIndex={42} data={[]} width={'44%'} />
            <DropDown
              label={'Hail damage'}
              zIndex={42}
              data={[]}
              width={'44%'}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder={'Type Here'}
              placeholderTextColor={theme.colors.grayColor}
              inputType="default"
              multiline
              capitalize={'none'}
              onChangeText={(text) => {
                console.log(text);
              }}
              style={styles.inputText}
            />
          </View>
          <View
            style={[
              styles.pickerRow,
              {marginTop: 0, marginBottom: 20, zIndex: 41},
            ]}>
            <DropDown
              label={'Rear Body Panel'}
              zIndex={41}
              data={[]}
              width={'44%'}
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
      </View>
    );
  };
  const RenderFive = () => {
    return (
      <View style={[styles.itemContainer, {zIndex: 60}]}>
        <View style={[styles.headingContainer, {zIndex: 60}]}>
          <Text style={[styles.headingText, {zIndex: 60}]}>
            Engine Bay Underhood (Structural)
          </Text>
        </View>

        <View style={[styles.tableBox, {marginTop: 20, zIndex: 45}]}>
          <TextInput
            placeholder={'Type Here'}
            placeholderTextColor={theme.colors.grayColor}
            inputType="default"
            multiline
            capitalize={'none'}
            onChangeText={(text) => {
              console.log(text);
            }}
            style={styles.inputText}
          />
        </View>
        <View style={styles.buttonContainer}>
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
              Draft
            </Text>
          </TouchableOpacity>
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
              Publish
            </Text>
          </TouchableOpacity>
        </View>
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
          <RenderFive />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AddReport;
