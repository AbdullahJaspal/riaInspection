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
    subtitle: `Providing Car Buyers with Confidence During Car Purchase. Ria Inspections is a vehicle inspection company that seeks to build trust between dealers and car buyers. We offer car dealerships, and their customers, thorough and comprehensive vehicle diagnoses to boost confidence during a car sale.

Living in a world of uncertainty, transparency goes a long way to building trust. We understand the above and seek to help build this bond between both parties with impartial, expert inspections.
    
Buying a car is a substantial and crucial investment, and many car buyers lack much knowledge on the topic. Due to the above, many customers are distrusting and hesitant, as they are risking their livelihood when purchasing a vehicle.
    
With our vehicle Inspection service, car buyers of all different levels of experience will be more equipped with relevant information to make the big decision with confidence.`,
    img: appImages.about3,
  },
];

const AboutUs = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        type={'SimpleLineIcons'}
        name={'menu'}
        leftPress={() => navigation.toggleDrawer()}
        title={'About Us'}
        navigation={navigation}
      />
      <View style={{flex: 1, backgroundColor: theme.colors.g1}}>
        <ScrollView
          style={styles.scrollStyles}
          showsVerticalScrollIndicator={false}>
          <View style={styles.listItem}>
            <Text style={styles.title}>How It Works</Text>
            <Text style={styles.subTitle}>
              Living in a world of uncertainty, transparency goes a long way to
              building trust. Without trust, and individual cannot respond
              confidently to the claims of others. This confidence is a must
              when buying a car which is a large and crucial investment. Ria
              inspections provides that confidence for car dealerships and
              buyers with trusted expert quality inspections.
            </Text>
            <Image
              source={appImages.about1}
              resizeMode="contain"
              style={styles.imgStyle}
            />
          </View>
          {data.map((item) => {
            return (
              <View style={styles.listItem}>
                <Image
                  source={item?.img}
                  resizeMode="contain"
                  style={styles.flImgStyle}
                />
                <View style={{backgroundColor: theme.colors.g2}}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subTitle}>{item.subtitle}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AboutUs;
