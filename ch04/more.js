import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	Text,
	WebView
} from 'react-native';

export default class more extends Component{
	render() {
		return (
			<View style={styles.container}>
				<WebView
					source={{
						uri: 'https://sina.cn'
					}}
					style={styles.web}>
				</WebView>
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
	web: {
		width: 200,
		height: 200
	}
});
