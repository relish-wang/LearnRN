import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	Text,
	Slider
} from 'react-native';

export default class more extends Component{
	constructor(props){
		super(props);
		this.state = {
			sliderValue: 5
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Slider minimumValue={0}//最小值
					style={{width: 200}}
					step={1} //步长
					maximumTrackTintColor='red'// 滑块右侧颜色
					minimumTrackTintColor='blue'// 滑块左侧颜色
					maximumValue={10}//最大值
					value={this.state.sliderValue}
					onValueChange={ (value) => {
						this.setState({sliderValue: value})
					}}
				/>
				<Text>Slider值: {this.state.sliderValue}</Text>
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
