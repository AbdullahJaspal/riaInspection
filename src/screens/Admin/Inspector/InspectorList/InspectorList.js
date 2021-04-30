import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  TextInput,
  FlatList,
  Dimensions,
} from 'react-native';
import {Header} from '../../../../components/Header';
import {Icon} from 'react-native-elements';
import styles from './styles';
import theme from '../../../../theme';

const {width, height} = Dimensions.get('window');

const InpectorDtails = [
  {
    id: '1.',
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    date: '25 March 2021',
    selected: false,
  },
  {
    id: '2.',
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    date: '25 March 2021',
    selected: false,
  },
  {
    id: '3.',
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    date: '25 March 2021',
    selected: false,
  },
  {
    id: '4.',
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    date: '25 March 2021',
    selected: false,
  },
  {
    id: '5.',
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    date: '25 March 2021',
    selected: false,
  },
  {
    id: '6.',
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    date: '25 March 2021',
    selected: false,
  },
  {
    id: '7.',
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    date: '25 March 2021',
    selected: false,
  },
  {
    id: '8.',
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    date: '25 March 2021',
    selected: false,
  },
  {
    id: '9.',
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    date: '25 March 2021',
    selected: false,
  },
];

const InspectorList = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [inspectorList, setInspectorList] = useState(InpectorDtails);

  const renderUserList = ({item, index}) => {
    return (
      <TouchableOpacity
        style={[
          styles.renderView,
          {
            height: item.selected ? width / 4.5 : width / 6.5,
            alignItems: item.selected ? 'center' : 'center',
          },
        ]}
        onPress={() => {
          expand(item);
          console.log(item);
          console.log(item.id);
        }}>
        <View
          style={[
            styles.numberContainer,
            {
              height: item.selected ? width / 4.5 : width / 6.5,
            },
          ]}>
          <Text style={styles.renderNumber}>{item.id}</Text>
        </View>
        <View
          style={[
            styles.iconContainer,
            {justifyContent: item.selected ? 'space-between' : 'center'},
          ]}>
          <View style={styles.renderDetails}>
            <Text style={styles.renderName}>{item.name}</Text>
            <Text style={styles.renderEmail}>{item.email}</Text>
            <Text style={styles.renderDate}>{item.date}</Text>
          </View>
          {item.selected ? (
            <View style={styles.extraDetail}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.city}>City:</Text>
                <Text styles={{fontWeight: 'normal'}}>Texas</Text>
              </View>

              <View style={styles.iconsRow}>
                <Icon
                  type="entypo"
                  name="eye"
                  iconStyle={styles.iconStyle}
                  onPress={() => navigation.navigate('InspectorDetails')}
                />
                <Icon
                  type="MaterialIcons"
                  name="edit"
                  iconStyle={styles.iconStyle}
                  onPress={() =>
                    navigation.navigate('AddNewInspector', {
                      tab: 'Add Inspector',
                    })
                  }
                />
                <Icon
                  type="MaterialIcons"
                  name="delete"
                  iconStyle={styles.iconStyle}
                  onPress={() => delAlert()}
                />
              </View>
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  };

  const expand = ({id}) => {
    console.log(id);
    return setInspectorList(
      inspectorList.map((item) => {
        if (item.id === id) {
          if (item.selected === true) {
            return {
              ...item,
              selected: false,
            };
          } else {
            return {
              ...item,
              selected: true,
            };
          }
        }

        return item;
      }),
    );
  };

  const delAlert = () => {
    Alert.alert('Are you sure?', 'You want to delete Report?', [
      {
        text: 'Cancel',
      },
      {text: 'Confirm', onPress: () => console.log('OK Pressed')},
    ]);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        leftPress={() => navigation.goBack()}
        title={'Inspector List'}
        navigation={navigation}
      />
      <View style={{flex: 1, backgroundColor: theme.colors.g1}}>
        <View style={styles.searchBarContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder={'Search by City'}
              placeholderTextColor={theme.colors.grayColor}
              inputType="default"
              capitalize={'none'}
              onChangeText={(text) => {
                setSearch(text);
              }}
              style={styles.inputStyle}
            />
            <Icon type="Ionicons" name="search" iconStyle={styles.iconStyle} />
          </View>
        </View>
        <FlatList
          style={{zIndex: 1, marginBottom: 0}}
          contentContainerStyle={{flexGrow: 1}}
          data={inspectorList}
          extraData={inspectorList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderUserList}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default InspectorList;
