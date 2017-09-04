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
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  view1: {
    height: 250,
    width: 250,
    backgroundColor: 'red'
  },
  view2: {
    height:250,
    width: 250,
    backgroundColor: 'green'
  }
});

AppRegistry.registerComponent('ch02', () => ch02);
