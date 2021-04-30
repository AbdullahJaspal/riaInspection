import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {Header} from '../../../../components/Header';
import {appImages} from '../../../../assets';
import {btnStyle, btnTxtStyle} from '../../../../utils/CommonStyles';
import styles from './styles';

const {width} = Dimensions.get('window');

const enteries = [
  {
    title: 'We are Expert',
    subtitle:
      'We do one thing and we do it well... vehicle inspections. We offer a variety of inspections and each inspection type requires the inspector to pass a rigours training course.',
    illustration: appImages.slider1,
  },
  {
    title: 'Unbiased Report',
    subtitle:
      'How we are perceived by car dealers and buyers is crucial for our business model, meaning our opinion is not partial to any party involved',
    illustration: appImages.slider2,
  },
  {
    title: 'We are Expert',
    subtitle:
      'We do one thing and we do it well... vehicle inspections. We offer a variety of inspections and each inspection type requires the inspector to pass a rigours training course.',
    illustration: appImages.slider3,
  },
];

const data = [
  {
    title: '1 Stop Shop For Vehicle Inspections',
    subtitle: `Our specialty is everything vehicle inspections. Meet with one of our representatives and determine exactly what type of inspection is right for your business.`,
    img: appImages.service1,
  },
  {
    title: 'Cosmetic (Interior and Exterior)',
    subtitle: `Provides condition of a vehicle's interior and exterior workings. Our expert inspection team will check for everything, from paintwork, to smoke odor and coffee stains.`,
    img: appImages.service2,
  },
  {
    title: 'Electronics',
    subtitle: `Using our innovative technology and experienced inspection experts, we check all of your electrical workings. We make sure every light flickers, and every speaker booms.`,
    img: appImages.service3,
  },
  {
    title: 'Mechanical',
    subtitle: `Our team can detect any abnormal codes or audible signs of malfunction through a thorough diagnosis that checks for a wide range of faults. Based on the manufacturer recall notices, Ria Inspectors will review each vehicle to validate that all recalls have been executed.`,
    img: appImages.service4,
  },
  {
    title: 'Frame',
    subtitle: `A car's frame is one of the most crucial parts of a cars build. Frame damage can eliminate the value and safety of the vehicle. Ria inspections uses the latest tech and expertise to evaluate the condition of every vehicles frame.`,
    img: appImages.service5,
  },
];

const Services = ({navigation}) => {
  const carouselRef = useRef(null);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={item?.illustration}
          containerStyle={styles.imageContainer}
          style={{resizeMode: 'contain'}}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <View style={styles.txtContainer}>
          <Text numberOfLines={3} style={styles.title}>
            {item?.title}
          </Text>
          <Text style={styles.subTitle}>{item?.subtitle}</Text>
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
        title={'Services'}
        navigation={navigation}
      />
      <View style={{flex: 1, backgroundColor: theme.colors.g1}}>
        <View>
          <Carousel
            ref={carouselRef}
            sliderWidth={width}
            sliderHeight={width}
            itemWidth={width - 60}
            data={enteries}
            renderItem={renderItem}
            hasParallaxImages={true}
          />
        </View>
        <ScrollView
          style={styles.scrollStyles}
          showsVerticalScrollIndicator={false}>
          {data.map((item) => {
            return (
              <View style={styles.listItem}>
                <View style={styles.txtView}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={[styles.subTitle, {marginVertical: 5}]}>
                    {item.subtitle}
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    style={[
                      btnStyle('50%', 7, 15, 0).btnStyle,
                      styles.btnStyle2,
                    ]}
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
                <View style={styles.imgView}>
                  <Image
                    source={item?.img}
                    resizeMode="contain"
                    style={styles.flImgStyle}
                  />
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Services;
