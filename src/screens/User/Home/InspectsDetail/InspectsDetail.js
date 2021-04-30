import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import {Header} from '../../../../components/Header';
import {btnStyle, btnTxtStyle} from '../../../../utils/CommonStyles';
import styles from './styles';
import theme from '../../../../theme';
import {Image} from 'react-native';
import {appImages} from '../../../../assets';

const InspectsDetail = ({navigation, route}) => {
  const {data} = route.params;
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
                <Text style={styles.textStyle}>Location: {data.location}</Text>
                <Text style={styles.textStyle}>Dealer:{data.dealer}</Text>
                <Text style={styles.textStyle}>Year: {data.year}</Text>
                <Text style={styles.textStyle}>Vin: {data.vin}</Text>
                <Text style={styles.textStyle}>Make: {data.make}</Text>
                <Text style={styles.textStyle}>Mileage: {data.mileage}</Text>
                <Text style={styles.textStyle}>Model: {data.model}</Text>
                <Text style={styles.textStyle}>
                  Submission Date: {data.publish_date}
                </Text>
                <Text style={styles.textStyle}>
                  Vehicle Type: {data.vehicleType}
                </Text>
                <Text style={styles.textStyle}>
                  Color:
                  <Text
                    style={{
                      backgroundColor: data.color,
                      width: '20%',
                      color: data.color,
                    }}>
                    {data.color}
                  </Text>
                </Text>
                <Text style={styles.textStyle}>{data.history}</Text>
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
              <TwoItemRow
                txt="Front Bumper Cover"
                value={data.front_bumper_cover}
              />
              <TwoItemRow txt="Hood" value={data.hood} />
              <TwoItemRow txt="Roof" value={data.roof} />
              <TwoItemRow txt="Rear Bumper" value={data.rear_bumper} />
              <TwoItemRow
                txt="Cladding Mirror housing"
                value={data.cladding_rear_bumper}
              />
              <TwoItemRow
                txt={'Deck/Liftgate/Tailgate'}
                value={data.deck_lift_taligate}
                bottomWidth={false}
              />
            </View>
            <View style={styles.tableBox}>
              <ThreeItemRow txt="Fender" value="Original" value2="Original" />
              <ThreeItemRow
                txt="Front Door"
                value="Original"
                value2="Original"
              />
              <ThreeItemRow
                txt="Reader Door"
                value="Original"
                value2="Original"
              />
              <ThreeItemRow
                txt="Cosmetic Rocker"
                value="Original"
                value2="Original"
              />
              <ThreeItemRow
                txt="Quarter Panel"
                value="Original"
                value2="Original"
              />
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
              <TwoItemRow
                txt="Bracket/Breaking"
                value="Original"
                bottomWidth={false}
              />
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
              <TwoItemRow txt="Core Support" value={data.core_support} />
              <TwoItemRow txt="Cross Member" value={data.cross_member} />
              <TwoItemRow
                txt="Cowl Panel/Firewall"
                value={data.cowl_pannel_firewall}
                bottomWidth={false}
              />
            </View>
            <View style={styles.tableBox}>
              <TitleRow txt="Engine Bay" value="Left" value2="Right" />
              <ThreeItemRow
                txt="Strut Tower/Apron"
                value={data.strut_tower_apron}
                value2={data.right_strut_tower_apron}
              />
              <ThreeItemRow
                txt="Frame Rail (Part)"
                value={data.frame_rail}
                value2={data.right_frame_rail}
                bottomWidth={false}
              />
            </View>
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
                Download Cirtificate
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
              onPress={() => navigation.navigate('Disclaimer')}
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
