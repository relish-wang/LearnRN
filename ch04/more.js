import React, {Component} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';

export default class more extends React.Component{
	render(){
		return (
			<View style={styles.container}>
				<ActivityIndicator color="purple" size="large" />
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
	}
})
