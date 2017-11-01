import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	Picker,
	Text,
  Dimensions
} from 'react-native';
import MapView from 'react-native-maps';

export default class more extends Component{
	constructor(props){
		super(props);
		this.state = {
			language: 'java'
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Picker
					style={styles.picker}
					selectedValue={this.state.language}
					onValueChange={(lang) => this.setState({language: lang})}>
						<Picker.Item label="Java" value="java" />
						<Picker.Item label="JavaScript" value="javascript" />
				</Picker>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 20
	},
	picker: {
		width: 200,
		height: 200
	}
});
