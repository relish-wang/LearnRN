import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Button,
  ScrollView,
  Dimensions,
  Timer,
  Platform,
  ListView,
  View
} from 'react-native';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

export default class app extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      dataSource: ds.cloneWithRows([
        '商品1',
        '商品2',
        '商品3',
        '商品4',
        '商品5',
        '商品6',
        '商品7',
        '商品8',
        '商品9',
        '商品10'
      ])
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchbar}>
          <TextInput style={styles.input} placeHolder='搜索商品'>
            搜索框
          </TextInput>
          <Button style={styles.button} title='搜索'></Button>
        </View>
        <View style={styles.advertisement}>
          <ScrollView
            ref="scrollView"
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}>
            <Text style={{
              width: Dimensions.get('window').width,
              height: 180,
              backgroundColor: 'gray'
            }}>广告1</Text>
            <Text style={{
              width: Dimensions.get('window').width,
              height: 180,
              backgroundColor: 'orange'
            }}>广告2</Text>
            <Text style={{
              width: Dimensions.get('window').width,
              height: 180,
              backgroundColor: 'yellow'
            }}>广告3</Text>
          </ScrollView>
        </View>
        <View style={styles.products}>
          <ListView dataSource = {this.state.dataSource} renderRow = {this._renderRow} />
        </View>
      </View>
    );
  }

  _renderRow = (rowData, sectionID, rowID) => {
    return (
      <View style={styles.row}>
        <Text>{rowData}</Text>
      </View>
    );
  }

  componentDidMount() {
    this._startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  _startTimer() {
    this.interval = setInterval(() => {
      nextPage = this.state.currentPage + 1;
      if(nextPage >= 3) {
        nextPage = 0;
      }
      this.setState({currentPage: nextPage});
      const offSetX = nextPage * Dimensions.get('window').width;
      this.refs.scrollView.scrollResponderScrollTo({x: offSetX, y: 0, animated: true});
    }, 2000);
  }
}

const styles = StyleSheet.create({  // 创建样式
  container: {
    flex: 1
  },
  searchbar: {
    marginTop: Platform.OS === 'ios'
        ? 20
        : 0,
    height: 40,
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 2
  },
  button: {
    flex: 1
  },
  advertisement: {                   // "说明"文本的样式
    height: 180
  },
  products: {
    flex: 1
  },
  row: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
