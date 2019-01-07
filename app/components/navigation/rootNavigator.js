import React, { Component } from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createMaterialTopTabNavigator,
  createDrawerNavigator,
  DrawerItems
} from 'react-navigation';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  COLORS,
  drawerItemsStyles as styles
} from '../../assets/styles.js';
// import { AsyncStorage } from 'react-native';
// import { logoutUser, getUserData } from '../asyncStorage/userAuthenticator.js';

import SignInScreen from '../screens/SignInScreen.js'

const AppStackNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: SignInScreen,
      navigationOptions:  ({navigation}) => ({
        title: 'HomeScreen',
        headerLeft:(
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={{
              padding: 15,
            }}
          >
            <Icon name="ios-menu" size={30} color={COLORS.WHITE.WHITE} />
          </TouchableOpacity>
        ),
      })
    },
  },
  {
    initialRouteName: 'HomeScreen',

    defaultNavigationOptions: ({navigation}) => ({
      // Hide header from stackNavigator on all routes
      // header: null,
      // title: 'Zalogowano',
      headerStyle: {
        backgroundColor: COLORS.BLUE.DARK,
        color: COLORS.WHITE.WHITE,
        borderBottomWidth: 0,
        shadowColor: 'transparent',
        elevation: 0,
        // paddingRight: 10,
        // paddingLeft: 15
      },
      headerTitleStyle: {
        // fontWeight: 'bold',
        color: COLORS.WHITE.WHITE,
      },
      headerTintColor: COLORS.WHITE.WHITE,
    }),
  },
)

const DrawerComponent = (props) => {
  const username = props.navigation.state.params.username
  return(
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/Logo.png')}
            style={styles.image}
            />
        </View>
        <View style={styles.subheader}>
          <Text style={styles.label}>Zalogowany jako</Text>
          <Text style={styles.username}>{username}</Text>
        </View>
        {/*<DrawerItems {...props} />*/}
        <TouchableHighlight
          underlayColor={'#F9F9F9'}
          onPress={ () => {
            // logoutUser()
            props.navigation.navigate('Home')
            // TODO: need to clear navigation history and hide drawer component!
          }
        }
        >
        <View style={styles.drawerElement}>
          <Icon name='md-exit' size={20} style={styles.icon} />
          <Text style={styles.text}>Wyloguj</Text>
        </View>
      </TouchableHighlight>
    </ScrollView>
  </SafeAreaView>
)
}

const DrawerNavigator = createDrawerNavigator(
  {
    Home: AppStackNavigator,
  },
  {
    contentComponent: DrawerComponent,
  }
)

const RootStackNavigator = createStackNavigator(
  {
    RootScreen: SignInScreen,
    Drawer: DrawerNavigator,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  }
)

// const TabNavigator = createMaterialTopTabNavigator(
//   {
//     HomeScreen: {
//       screen: ########,
//       navigationOptions: {
//         tabBarLabel: '########',
//         // tabBarIcon: ({tintColor}) => (
//         //  <Icon name="ios-cube" size={24} color={tintColor} />
//         // ),
//       }
//     },
//   },
//
//   { // router config
//     initialRouteName: 'HomeScreen',
//     tabBarOptions: {
//       activeTintColor: COLORS.WHITE.WHITE,
//       inactiveTintColor: COLORS.GRAY.DARK,
//       activeBackgroundColor: COLORS.BLUE.DARK,
//       inactiveBackgroundColor: COLORS.BLUE.DARK,
//       style: {
//         backgroundColor: COLORS.BLUE.DARK,
//         borderColor: COLORS.BLUE.DARK,
//         borderLeftWidth: 0.5,
//         borderRightWidth: 0.5,
//       },
//       indicatorStyle: {
//         backgroundColor: COLORS.BLUE.LIGHT,
//         height: 3,
//       },
//     },
//     swipeEnabled: true,
//   }
// )

// Wrap TabNavigator in StackNavigator so we can have both functionalities.
// Wrap it all with DrawerNavigator.
// Then wrap it all with root StackNavigator to separate LoginScreen from Orders,
// and also allow passing user details to DrawerNavigator (to display data in side drawer via props!)

export default createAppContainer(RootStackNavigator);
