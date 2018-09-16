import React, { Component } from 'react';
import { AppRegistry,Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}


export default class JustifyContentBasics extends Component {
  render() {
    return (

      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{alignItems: 'center'}}>
			<Greeting name='Rexxar' />
			<Greeting name='Jaina' />
			<Greeting name='Valeera' />
		</View>
		<View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};