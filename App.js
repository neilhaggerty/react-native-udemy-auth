import React, { Component } from 'react';
import {
  View
} from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm'


export default class App extends Component {
  componentWillMount(){
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyAGQ12ra2fRDXzfNbFPAGQ0vAfr-M2e9MA',
      authDomain: 'authentication-19479.firebaseapp.com',
      databaseURL: 'https://authentication-19479.firebaseio.com',
      projectId: 'authentication-19479',
      storageBucket: 'authentication-19479.appspot.com',
      messagingSenderId: '760348568889'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}
