import React from 'react';
import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import {Header} from '../../../components/Header';
import {appImages} from '../../../assets';
import styles from './styles';

const data = [
  {
    title: 'Our Story',
    subtitle: `Whether buying or selling a previously used car, the importance of trust and confidence cannot be overemphasized. With this in mind, having an impartial vehicle inspection will go a long way to building confidence and trust between vehicle buyers and sellers.

To help solve this problem, Ria Inspections was born.`,
    img: appImages.about2,
  },
  {
    title: 'Who We Are',
    subtitle: `Ria Inspections, LLC conducts visual and equipment-assisted inspections
     of used vehicles in order to generate reports containing information gathered by Ria Inspections,
      LLC’s technicians and employees on certain conditions in certain inspected areas of the vehicles 
      based on thorough, but not unlimited, inspections. These reports are provided to you as a convenience
      to supplement the information available regarding a vehicle, but cannot and do not constitute a completely comprehensive report on 
      (1) all possible conditions or problems currently existing in an inspected vehicle; 
      (2) any inspected vehicle’s complete past or history; or 
      (3) any inspected vehicle’s reliability or serviceability in the future. These reports do not constitute
       recommendations regarding the advisability of purchasing or selling any particular vehicle. 
      RIA INSPECTIONS, LLC, TOGETHER WITH ITS MEMBERS, MANAGERS, EMPLOYEES, AGENTS, AFFILIATES, PROVIDERS,
       SUCCESSORS, AND ASSIGNS (COLLECTIVELY HEREIN “RIA”) EXPRESSLY DISCLAIMS, TO THE GREATEST EXTENT ALLOWABLE BY LAW, ANY 
       AND ALL GUARANTEES OR WARRANTIES POTENTIALLY ARISING OUT OF THESE REPORTS, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT
        NOT LIMITED TO ANY WARRANTY OF MERCHANTABILITY OR WARRANTY THAT THE GOODS ARE FIT FOR A PARTICULAR PURPOSE. RIA FURTHER
         DISCLAIMS ANY LIABILITY FOR LOSS OR DAMAGE ARISING IN CONNECTION WITH PURCHASE OR USE OF AN INSPECTED VEHICLE. EFFORTS 
         BY RIA TO MODIFY A REPORT SHALL NOT BE DEEMED A WAIVER OF THESE DISCLAIMERS OR ADMISSION OF FAULT. RIA SHALL NOT BE LIABLE TO ANY PARTY FOR ANY LOSS OF PROFITS, LOSS OF USE, INTERRUPTION OF BUSINESS, OR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES OF ANY KIND WHATSOEVER. IN JURISDICTIONS THAT PROHIBIT OR LIMIT THE EXCLUSION OR LIMITATION OF LIABILITY, LIABILITY HEREUNDER IS LIMITED TO THE GREATEST EXTENT ALLOWABLE BY LAW`,
    img: appImages.about3,
  },
];

const Disclaimer = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        type={'SimpleLineIcons'}
        name={'menu'}
        leftPress={() => navigation.toggleDrawer()}
        title={'Disclaimer'}
        navigation={navigation}
      />
      <View style={{flex: 1, backgroundColor: theme.colors.g1}}>
        <ScrollView
          style={styles.scrollStyles}
          showsVerticalScrollIndicator={false}>
          <View style={styles.listItem}>
            <Text style={styles.subTitle}>
              Ria Inspections, LLC conducts visual and equipment-assisted
              inspections of used vehicles in order to generate reports
              containing information gathered by Ria Inspections, LLC’s
              technicians and employees on certain conditions in certain
              inspected areas of the vehicles based on thorough, but not
              unlimited, inspections. {'\n'}These reports are provided to you as
              a convenience to supplement the information available regarding a
              vehicle, but cannot and do not constitute a completely
              comprehensive report on : {'\n'}
              <Text style={{fontWeight: 'bold'}}>(1)</Text> all possible
              conditions or problems currently existing in an inspected vehicle;{' '}
              {'\n'}<Text style={{fontWeight: 'bold'}}>(2)</Text> any inspected
              vehicle’s complete past or history; or{'\n'}{' '}
              <Text style={{fontWeight: 'bold'}}>(3)</Text> any inspected
              vehicle’s reliability or serviceability in the future. These
              reports do not constitute recommendations regarding the
              advisability of purchasing or selling any particular vehicle.{' '}
              {'\n'}
              {'\n'}RIA INSPECTIONS, LLC, TOGETHER WITH ITS MEMBERS, MANAGERS,
              EMPLOYEES, AGENTS, AFFILIATES, PROVIDERS, SUCCESSORS, AND ASSIGNS
              (COLLECTIVELY HEREIN “RIA”) EXPRESSLY DISCLAIMS, TO THE GREATEST
              EXTENT ALLOWABLE BY LAW, ANY AND ALL GUARANTEES OR WARRANTIES
              POTENTIALLY ARISING OUT OF THESE REPORTS, WHETHER EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTY OF
              MERCHANTABILITY OR WARRANTY THAT THE GOODS ARE FIT FOR A
              PARTICULAR PURPOSE. RIA FURTHER DISCLAIMS ANY LIABILITY FOR LOSS
              OR DAMAGE ARISING IN CONNECTION WITH PURCHASE OR USE OF AN
              INSPECTED VEHICLE. EFFORTS BY RIA TO MODIFY A REPORT SHALL NOT BE
              DEEMED A WAIVER OF THESE DISCLAIMERS OR ADMISSION OF FAULT. RIA
              SHALL NOT BE LIABLE TO ANY PARTY FOR ANY LOSS OF PROFITS, LOSS OF
              USE, INTERRUPTION OF BUSINESS, OR ANY DIRECT, INDIRECT,
              INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES OF ANY KIND
              WHATSOEVER. IN JURISDICTIONS THAT PROHIBIT OR LIMIT THE EXCLUSION
              OR LIMITATION OF LIABILITY, LIABILITY HEREUNDER IS LIMITED TO THE
              GREATEST EXTENT ALLOWABLE BY LAW
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Disclaimer;
