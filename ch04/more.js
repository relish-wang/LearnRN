import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class more extends React.Component{
	render(){
		return (
			<View style={styles.container}>
				<Text style={styles.text}>
					更多页面
				</Text>
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
