/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ch02 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view1}></View>
        <View style={styles.view2}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,backgroundColor: 'gray',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  view1: {
    flex: 1,
    backgroundColor: 'red',
    height: 100
  },
  view2: {
    flex: 2,
    height: 180,
    backgroundColor: 'green',
    alignSelf: 'stretch'
  }
});

AppRegistry.registerComponent('ch02', () => ch02);
