import React, { Component } from 'react';
import { 
	View,
	Text,
	Button,
    
} from 'react-native';





class HomeScreen extends Component { 
  render() {
     const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>This is the home screen of the app</Text>
        <Button
          onPress={() => navigate('Login')}
          title="Go to Login Screen"
        />
      </View>
    );
  }
}
	
export default HomeScreen;
	  
