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
import styles from './styles';
import theme from '../../../../theme';
import {Image} from 'react-native';
import {appImages} from '../../../../assets';

const InspectionDetail = ({navigation}) => {
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
  const TwoItemsRow = ({txt, value, bottomWidth = true}) => {
    return (
      <View style={styles.tableRow}>
        <View
          style={[styles.firstItems, {borderBottomWidth: bottomWidth ? 1 : 0}]}>
          <Text style={styles.rowTxt}>{txt}</Text>
        </View>
        <View
          style={[
            styles.secondItems,
            {borderBottomWidth: bottomWidth ? 1 : 0},
          ]}>
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
                <Text style={styles.textStyle}>
                  Publish Date: 24 March 2021
                </Text>
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
                      backgroundColor: '#8E2C1D',
                      color: '#8E2C1D',
                    }}>
                    . . . . . . . . .
                  </Text>
                </Text>
                <Text style={styles.textStyle}>
                  History: 03-11-2020 to 09-01-2022
                </Text>
              </View>
              <View
                style={{flex: 0.4, backgroundColor: theme.colors.blackColor}}>
                <View style={styles.dateContainer}>
                  <Text style={styles.dateText}>Inspection Completed</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Image source={appImages.pngCar} />
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
              <TwoItemRow txt="Cladding Mirror housing" value="Original" />
              <TwoItemRow txt="Deck/Liftgate/Tailgate" value="Original" />
              <TwoItemRow txt="Full Car" value="none" bottomWidth={false} />
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

            <View style={[styles.tableBox, {borderBottomWidth: 0}]}>
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
            <View style={[styles.tableBox, {borderBottomWidth: 0}]}>
              <TwoItemRow txt="Core Support" value="Original" />
            </View>
            <View style={styles.tableBox}>
              <TitleRow txt="Engine Bay" value="Left" value2="Right" />
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
              <TwoItemsRow txt="Interior Scrap and Scratches" value="none" />
              <TwoItemsRow txt="Exterior Scrap and Scratches" value="none" />
              <TwoItemsRow
                txt="Interior Discoloration and stains"
                value="none"
              />
              <TwoItemsRow
                txt="Exterior Discoloration and stains	"
                value="none"
              />
              <TwoItemsRow txt="Smell" value="none" />
              <TwoItemsRow txt="Hail damage	" value="none" bottomWidth={false} />
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
          <Card containerStyle={styles.tableCard}>
            <View style={styles.headingContainer}>
              <Text style={styles.headingText}>
              Hidden Notes (Not Visible to Users)
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
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default InspectionDetail;
