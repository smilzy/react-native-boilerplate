import React, { Component } from 'react';
import {
  Platform,
  Dimensions,
} from 'react-native';
import RootStack from './app/components/navigation/rootNavigator.js';

export default class App extends Component<Props> {
  constructor() {
    super();
    // global.ACCESS_TOKEN = 'access_token'
    global.EMAIL = 'email'
    global.FULL_NAME = 'full_name'
    const { width, height} = Dimensions.get('window');
    global.ASPECT_RATIO = width / height
    // global.GOOGLE_MAPS_APIKEY = ''
    // global.API_URL = 'https://xxxxxxxx/api/v1'
  }

  render() {
    return (
      <RootStack />
    );
  }
}
