import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {Card} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Header} from '../../../../../components/Header';
import {moderateScale} from '../../../../../constants/ScalingUnit';
import styles from './styles';

const InspectorDetails = ({navigation}) => {
  const RenderRow = ({label, value, bg}) => {
    return (
      <View style={[styles.txtRow, {backgroundColor: bg}]}>
        <Text style={{flex: 0.5, left: 15}}>{label}</Text>
        <Text style={{flex: 0.5}}>{value}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.innerContainer}>
      <Header
        leftPress={() => navigation.goBack()}
        title={'Inspector Details'}
        navigation={navigation}
      />
      <View style={styles.innerContainer}>
        <View style={styles.firstCard}>
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>Admin Details</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('AddNewInspector', {
                  tab: 'Update',
                });
              }}>
              <Text style={{fontSize: moderateScale(10)}}>
                Edit Inspection Details
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.itemContainer}>
            <RenderRow
              label="Joining Date"
              value={'2 April 2021'}
              bg={theme.colors.g2}
            />
            <RenderRow
              label="Name"
              value={'Zeeshan'}
              bg={theme.colors.whiteColor}
            />
            <RenderRow
              label="Email"
              value={'zee765@gmail.com'}
              bg={theme.colors.g2}
            />
            <RenderRow
              label="Address"
              value={'Abc'}
              bg={theme.colors.whiteColor}
            />
            <RenderRow
              label="Phone Number"
              value={'+923066147260'}
              bg={theme.colors.g2}
            />
            <RenderRow
              label="City"
              value={'Lahore'}
              bg={theme.colors.whiteColor}
            />
            <RenderRow
              label="Country"
              value={'Pakistan'}
              bg={theme.colors.g2}
            />
            <RenderRow
              label="Discription"
              value={'Hello! I am a temporary Inspector.'}
              bg={theme.colors.whiteColor}
            />
            <RenderRow label=" " value={' '} bg={theme.colors.g2} />
          </View>
        </View>
        <View style={styles.scndCard}>
          <View style={styles.scondHeadingContainer}>
            <Text style={styles.headingText}>Inspector Privileges</Text>
          </View>
          <View style={styles.maincontentContainer}>
            <View style={styles.scondCardTextContainer}>
              <Text style={styles.scondCardText}>View Users List</Text>
              <Text style={styles.scondCardText}>Allow To Add Reports</Text>
            </View>
            <View style={styles.scondCardTextContainer}>
              <Text style={styles.scondCardText}>
                Allow To Approve User Reports
              </Text>
              <Text style={styles.scondCardText}>
                Allow To Hide/Delete Reports
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default InspectorDetails;
