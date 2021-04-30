import React, {useEffect, useState} from 'react';
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
import Modal from 'react-native-modal';
import styles from './styles';
import theme from '../../../../theme';
import {btnStyle, btnTxtStyle} from '../../../../utils/CommonStyles';

const {width, height} = Dimensions.get('window');

const UserDetail = [
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
const pendingUsers = [
  {
    id: '1.',
    name: 'Lorum Ipsum',
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

const UserList = ({route, navigation}) => {
  const [screenType, setScreenType] = useState('list');
  const [search, setSearch] = useState('true');
  const [userList, setUserlist] = useState(UserDetail);
  const [showModal, setShowModal] = useState(false);
  const [viewDetail, setViewDetail] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(null);
  let {tab} = route.params;
  useEffect(() => {
    screenChange();
  });

  const screenChange = async () => {
    if (currentScreen !== tab) {
      return (
        // setScreenType(tab), (a = false), console.log(a);
        setScreenType(tab), setCurrentScreen(tab)
      );
    }
  };
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
            <View style={styles.iconsRow}>
              <Icon
                type="entypo"
                name="eye"
                iconStyle={styles.iconStyle}
                onPress={() => setViewDetail(true)}
              />
              <Icon
                type="MaterialIcons"
                name="edit"
                iconStyle={styles.iconStyle}
                onPress={() => setShowModal(true)}
              />
              <Icon
                type="MaterialIcons"
                name="delete"
                iconStyle={styles.iconStyle}
                onPress={() => delAlert()}
              />
              <Text style={styles.showButton} onPress={() => blockAlert()}>
                Block
              </Text>
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  };
  const renderPendingUser = ({item, index}) => {
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
            <View style={styles.iconsRow}>
              <Icon
                type="entypo"
                name="eye"
                iconStyle={styles.iconStyle}
                onPress={() => setViewDetail(true)}
              />
              <Icon
                type="MaterialIcons"
                name="edit"
                iconStyle={styles.iconStyle}
                onPress={() => setShowModal(true)}
              />
              <Icon
                type="MaterialIcons"
                name="delete"
                iconStyle={styles.iconStyle}
                onPress={() => delAlert()}
              />
              <Text
                style={[styles.showButton, {backgroundColor: '#D82A2A'}]}
                onPress={() => ApproveAlert()}>
                Approve
              </Text>
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  };
  const expand = ({id}) => {
    console.log(id);
    return setUserlist(
      userList.map((item) => {
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
  const changeScreen = () => {
    return setScreenType('pending'), setUserlist(pendingUsers);
  };
  const changeScreen1 = () => {
    return setScreenType('list'), setUserlist(UserDetail);
  };
  const delAlert = () => {
    Alert.alert('Are you sure?', 'You want to delete Report?', [
      {
        text: 'Cancel',
      },
      {text: 'Confirm', onPress: () => console.log('OK Pressed')},
    ]);
  };
  const blockAlert = () => {
    Alert.alert('Are you sure?', 'You want to Block this User?', [
      {
        text: 'Cancel',
      },
      {text: 'Confirm', onPress: () => console.log('OK Pressed')},
    ]);
  };
  const ApproveAlert = () => {
    Alert.alert('Are you sure?', 'You want to Approve this Account?', [
      {
        text: 'Cancel',
      },
      {text: 'Confirm', onPress: () => console.log('OK Pressed')},
    ]);
  };
  const UpdateModal = () => (
    <Modal isVisible={showModal}>
      <View style={styles.editModal}>
        <View style={styles.modalInnerContainer}>
          <Text style={styles.modalHeading}>Update User</Text>
          <View>
            <TextInput style={{borderBottomWidth: 1}} placeholder="Name" />
            <TextInput style={{borderBottomWidth: 1}} placeholder="Email" />
            <View style={styles.passwordContainer}>
              <TextInput
                style={{borderBottomWidth: 1, width: '45%'}}
                placeholder="Password"
              />
              <TextInput
                style={{borderBottomWidth: 1, width: '45%'}}
                placeholder="Confirm Password"
              />
            </View>
          </View>
          <View style={styles.editButtonContainer}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                btnStyle('40%', 9, 15, 0).btnStyle,
                {backgroundColor: theme.colors.blackColor},
              ]}
              onPress={() => alert('todo!')}>
              <Text
                style={[
                  btnTxtStyle().btnTxtStyle,
                  {color: theme.colors.whiteColor, fontSize: 13},
                ]}>
                Update
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                btnStyle('40%', 9, 15, 0).btnStyle,
                {backgroundColor: theme.colors.blackColor},
              ]}
              onPress={() => setShowModal(false)}>
              <Text
                style={[
                  btnTxtStyle().btnTxtStyle,
                  {color: theme.colors.whiteColor, fontSize: 13},
                ]}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
  const viewDetailModal = () => (
    <Modal isVisible={true}>
      <View style={styles.viewModal}>
        <View style={styles.viewModalInnerContainer}>
          <Text style={styles.modalHeading}>User Detail</Text>
          <View style={styles.contentContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {`Publish Date:`}
              </Text>
              <Text style={{fontSize: 14, fontWeight: 'normal', width: '50%'}}>
                3 March 2021
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>{`Name:`}</Text>
              <Text style={{fontSize: 14, fontWeight: 'normal', width: '50%'}}>
                Ali
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>{`Email:`}</Text>
              <Text style={{fontSize: 14, fontWeight: 'normal', width: '50%'}}>
                Johndoe@gmail.com
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                btnStyle('40%', 9, 15, 0).btnStyle,
                {backgroundColor: theme.colors.blackColor},
              ]}
              onPress={() => setViewDetail(false)}>
              <Text
                style={[
                  btnTxtStyle().btnTxtStyle,
                  {color: theme.colors.whiteColor, fontSize: 13},
                ]}>
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        leftPress={() => navigation.goBack()}
        title={'Users'}
        navigation={navigation}
      />
      <View style={{flex: 1, backgroundColor: theme.colors.g1}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              styles.tabStyle,
              {backgroundColor: screenType === 'list' ? 'black' : 'white'},
            ]}
            onPress={() => {
              changeScreen1();
            }}>
            <Text
              style={
                screenType === 'list' ? styles.tabTxtStyle : styles.tabTxtStyle1
              }>
              Users List
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              styles.tabStyle,
              {backgroundColor: screenType === 'pending' ? 'black' : 'white'},
            ]}
            onPress={() => {
              changeScreen();
            }}>
            <Text
              style={
                screenType === 'pending'
                  ? styles.tabTxtStyle
                  : styles.tabTxtStyle1
              }>
              Pending Users
            </Text>
          </TouchableOpacity>
        </View>
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
          data={userList}
          extraData={userList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={
            screenType === 'list' ? renderUserList : renderPendingUser
          }
          showsVerticalScrollIndicator={false}
        />

        {showModal && UpdateModal()}
        {viewDetail && viewDetailModal()}
      </View>
    </SafeAreaView>
  );
};

export default UserList;
