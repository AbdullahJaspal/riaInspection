import React from 'react';
import {View, Text, Platform, StyleSheet, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import theme from '../theme';
const {width, height} = Dimensions.get('window');

const Header = ({type = 'antdesign', name = 'arrowleft', leftPress, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon
          type={type}
          name={name}
          color={theme.colors.whiteColor}
          size={26}
          style={{left: 5}}
          onPress={() => leftPress()}
        />
      </View>
      <Text style={styles.headerText} numberOfLines={2}>
        {title}
      </Text>
      <Text />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: width / 7,
    backgroundColor: theme.colors.blackColor,
    ...Platform.select({
      ios: {
        shadowColor: theme.colors.blackColor,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0,
      },
      android: {
        elevation: 0,
      },
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.whiteColor,
    textAlign: 'center',
  },
});

export {Header};
