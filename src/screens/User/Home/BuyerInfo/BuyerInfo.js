import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {Header} from '../../../../components/Header';
import {appImages} from '../../../../assets';
import styles from './styles';

const {width} = Dimensions.get('window');

const enteries = [
  {
    title: 'We Are Experts',
    subtitle:
      'We do one thing and we do it well... vehicle inspections. We offer a variety of inspections and each inspection type requires the inspector to pass a rigours training course.',
    illustration: appImages.slider3,
  },
  {
    title: 'Unbiased Report',
    subtitle:
      'How we are perceived by car dealers and buyers is crucial for our business model, meaning our opinion is not partial to any party involved',
    illustration: appImages.slider2,
  },
  {
    title: 'Transparency',
    subtitle:
      'Know your car inside and out before you buy.',
    illustration: appImages.slider1,
  },
];

const data = [
  {
    title: 'Your Input Matters',
    subtitle: `Firstly, know that we value you with the same regard as the dealerships that employ us. Your input matters and our reputation with car buyers is crucial for our success; therefore, if there are any issues with a Ria Inspection, please let us know.`,
    img: appImages.buyer1,
  },
  {
    title: 'Every Detail Counts',
    subtitle: `If you're a car buyer viewing our buyer page, then you were most likely shopping with a top tier dealership that provides a Ria Inspection with used cars, but what does this mean? When buying a used car, every detail counts. With this in mind, many top tier used car dealerships contract us to provide transparent reports that display the current status of their vehicle inventory.`,
    img: appImages.buyer2,
  },
  {
    title: 'CAUTION',
    subtitle: `Always purchase vehicles from dealerships that offer 3rd party inspections. Many dealerships increase their profit margins by knowingly purchasing cars with unreported wrecks and repairs at discounted rates, then sell them for full market value based on their known history.

Not all vehicle history is recorded, but most can be detected with a physical inspection.
    
Purchase your vehicle from trustworthy and transparent dealerships that want you to know what you're about to purchase.`,
    img: appImages.buyer3,
  },
];

const BuyerInfo = ({navigation}) => {
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
        title={'Buyer Information'}
        navigation={navigation}
      />
      <View style={{flex: 1, backgroundColor: theme.colors.g1}}>
        <View style={styles.topContainer}>
          <Text style={[styles.inspectsText, {right: 5}]}>Why 3rd Party</Text>
          <View style={styles.shapeView} />
          <View style={styles.detailContainer}>
            <Text style={[styles.inspectsText, {color: 'white'}]}>Inspection</Text>
          </View>
        </View>
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
                <Image
                  source={item?.img}
                  resizeMode="contain"
                  style={styles.flImgStyle}
                />
                <View style={[styles.txtContainer, {top: 5}]}>
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

export default BuyerInfo;
