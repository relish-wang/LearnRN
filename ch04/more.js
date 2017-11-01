import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	Text,
	Switch
} from 'react-native';

export default class more extends Component{
	constructor(props){
		super(props);
		this.state = {
			isOn: false
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Switch
					onTintColor='blue'
					thumbTintColor='green'
					tintColor='black'
					onValueChange={() => {this.setState({isOn: !this.state.isOn})}}
					value={this.state.isOn === true}
				/>
				<Text>Switch值: {this.state.isOn}</Text>
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
