import React, { Component } from 'react';
import { AppRegistry,Text, View, StyleSheet } from 'react-native';

import { createStackNavigator} from 'react-navigation';

import LoginScreen from './screens/LoginScreen';

import HomeScreen from './screens/HomeScreen';


export default class App extends React.Component { 
  render() {
	return (
	<AppStackNavigator/>
  );
 }
}
	
const AppStackNavigator = createStackNavigator({
	Home: HomeScreen,
	Login: LoginScreen
})
	  

	   