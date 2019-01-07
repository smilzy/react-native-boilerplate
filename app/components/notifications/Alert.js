import React, { Component } from 'react';
import {
  Animated,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../assets/styles.js';

// below fnc used as prop allows updating Parent Component state
export function updateDisplayAlert(boolean) { this.setState({ displayAlert: boolean }) }

// using ```this.renderAlert = renderAlert.bind(this)``` in Parent Component allows
// rendering alerts by running it as function: this.renderAlert()
export function renderAlert() {
  if (this.state.displayAlert == true) {
    return(
      <Alert type={this.state.alert.type} message={this.state.alert.message} updateDisplayAlert={updateDisplayAlert.bind(this)} />
    )
  }
}

export default class Alert extends Component {
  constructor(props) {
    super(props);

    this.animatedValue = new Animated.Value(0)
    this.bgcolor  = props.type == 'success' ? COLORS.GREEN.LIGHT : COLORS.RED.LIGHT;
    this.color    = props.type == 'success' ? COLORS.GREEN.DARK : COLORS.WHITE.WHITE;
    this.icon     = props.type == 'success' ? 'check-circle' : 'error'
  }

  componentDidMount() {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 50,
        duration: 1000,
      }
    ).start(() => {
      Animated.timing(
        this.animatedValue,
        {
          toValue: 0,
          delay: 3000,
          duration: 1000,
        }
      ).start(() => {
        this.props.updateDisplayAlert(false)
      })
    })
  }

  render() {
    return(
      <Animated.View style={{
        backgroundColor: this.bgcolor,
        width: '100%',
        height: this.animatedValue,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text style={{color: this.color, fontSize: 15}}>
          <Icon name={this.icon} color={this.color} size={13} /> {this.props.message}
        </Text>
      </Animated.View>
    )
  }
}
