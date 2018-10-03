	import React, { Component } from 'react';
	import { 
		View,
		Text,
		Button,
		AppRegistry,
		StyleSheet,
		TouchableOpacity

	} from 'react-native';





	class LoginScreen extends Component { 

	  render() {
		  const { navigate } = this.props.navigation;
		  return (

			<View style={styles.container}>
				<View style={styles.contentContainer}> {/* <- Add this */}	
				<Text>LoginScreen</Text>
				<Button title="Go to Home Screen"
				onPress={() => navigate('Home')} />
			</View>



	  <View style={styles.footer}>
			<View style={styles.container}>
					<View style={styles.row}>

				</View>

				<View style={styles.row}>
					<TouchableOpacity onPress={() => navigate('Home')} style={[styles.box, styles.two]}></TouchableOpacity>
					<TouchableOpacity onPress={() => navigate('Home')} style={[styles.box, styles.box2]}></TouchableOpacity>
					<TouchableOpacity onPress={() => navigate('Home')} style={[styles.box, styles.box3]}></TouchableOpacity>
				</View>


				</View>
			</View>
		</View>
	  );
	 }
	}

	const styles = StyleSheet.create({
		row: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'space-between',

		},
		box: {
			flex: 1,
			height: 100,
			backgroundColor: '#333',
		},
		box2: {
			backgroundColor: 'green'
		},
		box3: {
			backgroundColor: 'orange'
		},
		two: {
			flex: 1
		},

		contentContainer: {
			flex: 1 // pushes the footer to the end of the screen
		},

		container: {
			flex: 1,
			backgroundColor: '#F5FCFF',
		},

		footer: {
			height: 200
		}
	});
	export default LoginScreen;

