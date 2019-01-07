import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
  View,
  AsyncStorage,
  KeyboardAvoidingView,
} from 'react-native';
import {
  COLORS,
  signInStyles as styles
} from '../../assets/styles.js';
// import Alert, { renderAlert } from '../../../notifications/Alert.js';
// import { storeInAsync, getFromAsync, removeFromAsync } from '../../../asyncStorage/asyncStorageMethods.js';
// import { authenticateUser, logoutUser, storeUserData, getUserData } from '../../../asyncStorage/userAuthenticator.js';


export default class SignInScreen extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      accountType: "",
      authToken: "",
      email: "",
      name: "",
      emailField: "",
      passwordField: "",
      error: "",
      displayAlert: false,
      alert: '',
    }

    // this.renderAlert = renderAlert.bind(this)
  }

  async componentDidMount() {
    // Gets data from AsyncStorage and updates variable
    // redirect if logged in
    // const data = await getUserData()
    // this.setState({
    //   name: data.fullName,
    //   authToken: data.token,
    // })
    // this.state.name != null ? this.props.navigation.navigate('Drawer', {username: this.state.name}) : null
  }

  // async / await function for fetching data from IP
  async signIn(){
    // clear error message
    alert('Signing in')
    // this.setState({error: ''})
    // try {
    //   let response = await fetch(`${API_URL}/courier_panel/sessions`, {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       courier: {
    //         email: this.state.emailField,
    //         password: this.state.passwordField,
    //       }
    //     }),
    //   })
    //   let res = await response.json();
    //   if (response.ok) {
    //     console.log(res)
    //     this.setState({
    //       authToken: res.item.auth_token,
    //       name: res.item.full_name,
    //       email: res.item.email,
    //       accountType: res.item.account_type,
    //     });
    //     console.log(this.state.authToken)
    //     // storeUserData({
    //     //   token: this.state.authToken,
    //     //   email: this.state.email,
    //     //   type: this.state.accountType,
    //     //   name: this.state.name,
    //     // })
    //     // this.props.navigation.navigate('Drawer', {username: this.state.name})
    //   } else {
    //     let error = res.error.message;
    //     throw error;
    //   }
    // } catch(error) {
    //   let spop = {
    //     message: error,
    //     type: 'error',
    //   }
    //   this.setState({
    //     error: error,
    //     displayAlert: true,
    //     alert: spop,
    //   })
    // }
  }

  updateDisplayAlert2 = (boolean) => { this.setState({displayAlert: boolean }) }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/Logo.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}> Zaloguj do aplikacji </Text>
          <KeyboardAvoidingView
            style={{width: '100%',
              alignItems: 'center',
            }}>
            <Text style={styles.inputLabel}>Adres e-mail</Text>
            <TextInput
              onChangeText={ (input) => this.setState({emailField: input}) }
              // placeholder="Adres e-mail"
              keyboardType='email-address'
              onSubmitEditing={() => this.refs.passwordInput.focus()} // focus password field on finish
              style={styles.input}
              autoCapitalize='none'>
            </TextInput>
            <Text style={styles.inputLabel}>Hasło</Text>
            <TextInput
              onChangeText={ (input) => this.setState({passwordField: input}) }
              // placeholder="Hasło"
              secureTextEntry={true}
              ref={"passwordInput"} // similar to #id stored in this.refs
              // onSubmitEditing={() => this.signIn.bind(this)}
              style={styles.input}
              autoCapitalize='none'>
            </TextInput>

            <TouchableHighlight
              style={ styles.highlightButton }
              underlayColor={ COLORS.BLUE.LIGHT }
              onPress={this.signIn.bind(this)}>
              <Text style={styles.btnText}> ZALOGUJ SIĘ </Text>
            </TouchableHighlight>
          </KeyboardAvoidingView>
          <Text style={{color: 'red'}}>{this.state.error}</Text>
          <Text style={{color: 'red'}}>{this.state.displayAlert}</Text>
        </View>
        {/*this.renderAlert()*/}
      </View>
    );
  }
}

AppRegistry.registerComponent('SignInScreen', () => SignInScreen);
