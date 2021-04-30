import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import {Header} from '../../../../components/Header';
import {btnStyle, btnTxtStyle} from '../../../../utils/CommonStyles';
import styles from './styles';
import theme from '../../../../theme';
import {Image} from 'react-native';
import {appImages} from '../../../../assets';

const InspectsDetail = ({navigation}) => {
  const TwoItemRow = ({txt, value, bottomWidth = true}) => {
    return (
      <View style={styles.tableRow}>
        <View
          style={[styles.firstItem, {borderBottomWidth: bottomWidth ? 1 : 0}]}>
          <Text style={styles.rowTxt}>{txt}</Text>
        </View>
        <View
          style={[styles.secondItem, {borderBottomWidth: bottomWidth ? 1 : 0}]}>
          <Icon
            type="antdesign"
            name="checksquare"
            iconStyle={styles.smallIcon}
          />
          <Text style={styles.rowTxt}> {value}</Text>
        </View>
      </View>
    );
  };

  const ThreeItemRow = ({txt, value, value2, bottomWidth = true}) => {
    return (
      <View style={styles.tableRow}>
        <View
          style={[styles.firstItem, {borderBottomWidth: bottomWidth ? 1 : 0}]}>
          <Text style={styles.rowTxt}>{txt}</Text>
        </View>
        <View
          style={[
            styles.secondItem1,
            {borderBottomWidth: bottomWidth ? 1 : 0},
          ]}>
          <Icon
            type="antdesign"
            name="checksquare"
            iconStyle={styles.smallIcon}
          />
          <Text style={styles.rowTxt}> {value}</Text>
        </View>
        <View
          style={[styles.secondItem, {borderBottomWidth: bottomWidth ? 1 : 0}]}>
          <Icon
            type="antdesign"
            name="checksquare"
            iconStyle={styles.smallIcon}
          />
          <Text style={styles.rowTxt}> {value2}</Text>
        </View>
      </View>
    );
  };

  const TitleRow = ({txt, value, value2}) => {
    return (
      <View style={styles.tableRow}>
        <View style={styles.firstItem}>
          <Text style={styles.titleTxt}>{txt}</Text>
        </View>
        <View style={styles.secondItem1}>
          <Text style={styles.titleTxt}> {value}</Text>
        </View>
        <View style={styles.secondItem}>
          <Text style={styles.titleTxt}> {value2}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        leftPress={() => navigation.goBack()}
        title={'Inspection Detail'}
      />
      <View style={{flex: 1, backgroundColor: theme.colors.g1}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.topContainer}>
            <Text style={[styles.inspectsText, {right: 5}]}>Inspection</Text>
            <View style={styles.shapeView} />
            <View style={styles.detailContainer}>
              <Text style={[styles.inspectsText, {color: 'white'}]}>
                Details
              </Text>
            </View>
          </View>
          <Card containerStyle={styles.cardContainer}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.textContainer}>
                <Text style={styles.nameStyle}>Vehicle Details</Text>
                <Text style={styles.textStyle}>Location: Lahore</Text>
                <Text style={styles.textStyle}>Dealer: Arslan</Text>
                <Text style={styles.textStyle}>Year: 2020</Text>
                <Text style={styles.textStyle}>Vin: 1C4RJEBG0LC123070</Text>
                <Text style={styles.textStyle}>Make: JEEP</Text>
                <Text style={styles.textStyle}>Mileage: 38759</Text>
                <Text style={styles.textStyle}>Model: 3SUV 3.6L V6</Text>
                <Text style={styles.textStyle}>
                  Submission Date: 27 Feb 2020
                </Text>
                <Text style={styles.textStyle}>Vehicle Type: Texi</Text>
                <Text style={styles.textStyle}>
                  Color:
                  <Text
                    style={{
                      backgroundColor: 'blue',
                      color: 'blue',
                      width: '50%',
                    }}>
                    blue
                  </Text>
                </Text>
                <Text style={styles.textStyle}>
                  History: 03-11-2020 {'\n'}
                  {'\t'} {'\t'} {'\t'} {'\t'} 09-01-2022
                </Text>
              </View>
              <View
                style={{flex: 0.4, backgroundColor: theme.colors.blackColor}}>
                <View style={styles.dateContainer}>
                  <Text style={styles.dateText}>Inspection Completed</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Icon
                    type="MaterialIcons"
                    name="check"
                    iconStyle={styles.whiteIcon}
                  />
                </View>
              </View>
            </View>
          </Card>
          <Card containerStyle={styles.tableCard}>
            <View style={styles.headingContainer}>
              <Text style={styles.headingText}>
                Exterior Body Notes (Cosmetic)
              </Text>
            </View>
            <View style={styles.tableBox}>
              <TwoItemRow txt="Front Bumper" value="Original" />
              <TwoItemRow txt="Hood" value="Original" />
              <TwoItemRow txt="Roof" value="Original" />
              <TwoItemRow txt="Rear Bumper" value="Original" />
              <TwoItemRow txt="Cross Member" value="Original" />
              <TwoItemRow txt="Deck/Liftgate/Tailgate" value="Original" />
              <TwoItemRow txt="Full Car" value="Full Repaint" />
            </View>
            <View style={styles.tableBox}>
              <TitleRow txt="Exterior Body" value="Left" value2="Right" />
              <ThreeItemRow txt="Fender" value="Original" value2="Original" />
              <ThreeItemRow
                txt="Front Door"
                value="Original"
                value2="Original"
              />
              <ThreeItemRow
                txt="Rear Door"
                value="Original"
                value2="Original"
              />
              <ThreeItemRow
                txt="Cosmetic Rocker"
                value="Original"
                value2="Original"
              />
              <ThreeItemRow
                txt="Cab Corner"
                value="Original"
                value2="Original"
              />
              <ThreeItemRow
                txt="Quarter Panel"
                value="Original"
                value2="Original"
              />
              <ThreeItemRow txt="Besides" value="Original" value2="Original" />
              <ThreeItemRow
                txt="Roof Rail"
                value="Original"
                value2="Original"
                bottomWidth={false}
              />
            </View>
          </Card>
          <Card containerStyle={styles.tableCard}>
            <View style={styles.headingContainer}>
              <Text style={styles.headingText}>
                Inner Body Inspection (Structural)
              </Text>
            </View>
            <View style={styles.tableBox}>
              <TwoItemRow txt="Rear Body pannel" value="Original" />
            </View>
            <View style={styles.tableBox}>
              <TitleRow txt="Inner Body" value="Left" value2="Right" />
              <ThreeItemRow
                txt="A (Pillar)"
                value="Original"
                value2="Original"
              />
              <ThreeItemRow
                txt="B (Pillar)"
                value="Original"
                value2="Original"
              />
              <ThreeItemRow
                txt="C (Pillar)"
                value="Original"
                value2="Original"
              />
              <ThreeItemRow
                txt="D (Pillar)"
                value="Original"
                value2="Original"
              />
              <ThreeItemRow
                txt="Rocker Panel (Part)"
                value="Original"
                value2="Original"
              />
              <ThreeItemRow
                txt="Rear Strut Tower"
                value="Original"
                value2="Original"
                bottomWidth={false}
              />
            </View>
          </Card>
          <Card containerStyle={styles.tableCard}>
            <View style={styles.headingContainer}>
              <Text style={styles.headingText}>
                Engine Bay Underhood (Structural)
              </Text>
            </View>
            <View style={styles.tableBox}>
              <TwoItemRow txt="Core Support" value="Welded" />
            </View>
            <View style={styles.tableBox}>
              <ThreeItemRow
                txt="Strut Tower/Apron"
                value="Original"
                value2="Original"
              />
              <ThreeItemRow
                txt="Frame Rail (Part)"
                value="Original"
                value2="Original"
                bottomWidth={false}
              />
            </View>
          </Card>
          <Card containerStyle={styles.tableCard}>
            <View style={styles.headingContainer}>
              <Text style={styles.headingText}>Extra Details</Text>
            </View>

            <View style={styles.showupCheck}>
              <Icon
                type="antdesign"
                name="checksquare"
                iconStyle={styles.smallIcon}
              />
              <Text style={styles.rowTxt}> Show Up</Text>
            </View>
            <View style={styles.tableBox}>
              <TwoItemRow txt="Interior Scrap and Scratches" value="none" />
              <TwoItemRow txt="Exterior Scrap and Scratches" value="none" />
              <TwoItemRow
                txt="Interior Discoloration and stains"
                value="none"
              />
              <TwoItemRow
                txt="Exterior Discoloration and stains	"
                value="none"
              />
              <TwoItemRow txt="Smell" value="none" />
              <TwoItemRow txt="Hail damage	" value="none" bottomWidth={false} />
            </View>
            <Card containerStyle={styles.tableCard}>
              <View style={styles.headingContainer}>
                <Text style={styles.headingText}>
                  Additional Notes from Inspector
                </Text>
              </View>

              <TextInput
                placeholder={'Not Available!'}
                placeholderTextColor={theme.colors.grayColor}
                inputType="default"
                multiline
                capitalize={'none'}
                onChangeText={(text) => {
                  console.log(text);
                }}
                editable={false}
                style={styles.inputText}
              />
            </Card>
          </Card>

          <Image
            source={appImages.inspectsCertificate}
            resizeMode="contain"
            style={styles.imgStyle}
          />
          <View style={styles.btnsContainer}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                btnStyle('40%', 8, 20, 20).btnStyle,
                {
                  backgroundColor: theme.colors.blackColor,
                },
              ]}
              onPress={() => console.log('pressed')}>
              <Text style={[btnTxtStyle().btnTxtStyle, styles.txt2ndStyle]}>
                Download Certificate
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                btnStyle('40%', 8, 20, 20).btnStyle,
                {
                  backgroundColor: theme.colors.blackColor,
                },
              ]}
              onPress={() => console.log('pressed')}>
              <Text style={[btnTxtStyle().btnTxtStyle, styles.txt2ndStyle]}>
                Download Report
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.descStyle}>
            This report and all information contained herein is subject to Ria
            Inspection, LLC’s standard terms and conditions and disclaimer which
            can be found on its website at:{' '}
            <Text
              // onPress={() => navigation.navigate('BuyerInfo')}
              style={styles.descStyle1}>
              Disclaimer{'\n'}
            </Text>
            {'\n'}To learn more about our inspections, please view the{' '}
            <Text
              onPress={() => navigation.navigate('BuyerInfo')}
              style={styles.descStyle1}>
              buyer information.
            </Text>
          </Text>
          <View style={styles.listItem}>
            <Image
              source={appImages.details}
              resizeMode="contain"
              style={styles.flImgStyle}
            />
            <View style={[styles.txtContainer, {top: 5}]}>
              <Text style={styles.title}>Inspection Together ($40)</Text>
              <Text style={styles.subTitle}>
                Not satisfied with just seeing the results of the inspection on
                paper? Hesitant to trust what you can't see for yourself? With
                Inspection together, a certified Ria Inspections inspector will
                inspect the car with you. We will go over the vehicle of your
                interest, and teach you exactly how we came to the conclusion we
                did. You will be able to see the hard evidence first hand; the
                paint meter readings, and the paint lines (or lack of them).
                Want to be 100% sure the car you're about to purchase hasn't
                been wrecked and has no unreported frame damage? Then use the
                hard evidence and expert opinion we provide to come to your own,
                fact-based, conclusion.
              </Text>
              <TouchableOpacity
                activeOpacity={0.9}
                style={[btnStyle('35%', 9, 15, 0).btnStyle, styles.btnStyleTwo]}
                onPress={() => navigation.navigate('ContactUs')}>
                <Text
                  style={[
                    btnTxtStyle().btnTxtStyle,
                    {color: theme.colors.whiteColor, fontSize: 13},
                  ]}>
                  Contact Us
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default InspectsDetail;
