import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  ListView,
  Alert,
  TouchableHighlight,
  Image,
  RefreshControl,
  View
} from 'react-native';
import Detail from './detail';
import Swiper from 'react-native-swiper';
import {Container, Header, Content, Button, InputGroup, Icon, Input, List, ListItem, Thumbnail, Text} from 'native-base';

export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swiperShow: false,
      isRefreshing: false,
      searchText: '',
      currentPage: 0,
      advertisements: [
        {
          image: require('./images/advertisement-image-01.png')
        },
        {
          image: require('./images/advertisement-image-02.jpg')
        },
        {
          image: require('./images/advertisement-image-03.jpeg')
        }
      ],
      products: [
      	{
      		link: 'https://www.tangeche.com/detail.html?modelCode=8200-n&brandCode=brand-108&seriesCode=series-1216',
      		url: 'https://img.souche.com/973052b4f0c2ba37111fee2d418174a5.jpg',
      		image: require('./images/product-image-01.jpg'),
          title: 'MINI',
      		subTitle: '2016款 MINI CLUBMAN 1.5T COOPER 极客版'
      	},
      	{
      		link: 'https://www.tangeche.com/detail.html?modelCode=12553-n&brandCode=brand-53&seriesCode=series-2242',
      		url: 'https://img.souche.com/3828f5e470069a6d7d2065faac8ae01f.jpg',
      		image: require('./images/product-image-02.jpg'),
          title: '福克斯',
      		subTitle: '2017款 福克斯 两厢 1.6L 自动舒适型智行版'
      	},
      	{
      		link: 'https://www.tangeche.com/detail.html?modelCode=52942&brandCode=brand-30&seriesCode=series-609',
      		url: 'https://f.souche.com/110f51a600cad92dd62d7246b44a31b6.jpg',
      		image: require('./images/product-image-03.jpg'),
          title: '君威',
      		subTitle: '2015款 君威 1.6T 领先技术型'
      	},
      	{
      		link: 'https://www.tangeche.com/detail.html?modelCode=14134-n&brandCode=brand-30&seriesCode=series-1899',
      		url: 'https://f.souche.com/566a42eb19b5f304b5aa867c96e8e901.jpg',
      		image: require('./images/product-image-04.jpg'),
          title: '英朗',
      		subTitle: '2017款 英朗 15N 自动精英型'
      	},
      	{
      		link: 'https://www.tangeche.com/detail.html?modelCode=15066-n&brandCode=brand-30&seriesCode=series-2643',
      		url: 'https://f.souche.com/8c395b0a4feb1668ab90e03cf0dc1e75.jpg',
      		image: require('./images/product-image-05.jpg'),
          title: '昂科拉',
      		subTitle: '2017款 昂科拉 18T 自动两驱都市领先型'
      	},
      	{
      		link: 'https://www.tangeche.com/detail.html?modelCode=15077-n&brandCode=brand-121&seriesCode=series-184',
      		url: 'https://f.souche.com/57c99af5d29afba6ef36e61ae261160b.jpg',
      		image: require('./images/product-image-06.jpg'),
          title: '骊威',
      		subTitle: '2015款 骊威 1.6XE CVT舒适版'
      	},
      	{
      		link: 'https://www.tangeche.com/detail.html?modelCode=11953-n&brandCode=brand-53&seriesCode=series-50098',
      		url: 'https://f.souche.com/cded0b1c95962e0293746b7656cdb583.jpg',
      		image: require('./images/product-image-07.jpg'),
          title: '金牛座',
      		subTitle: '2017款 金牛座 EcoBoost 325 V6旗舰型'
      	},
      	{
      		link: 'https://www.tangeche.com/detail.html?modelCode=1547451&brandCode=brand-158&seriesCode=series-2055-n',
      		url: 'https://f.souche.com/6452e27b00c0dca181eaca35353fccd8.jpg',
      		image: require('./images/product-image-08.jpg'),
          title: '英菲尼迪ESQ',
      		subTitle: '2014款 英菲尼迪ESQ 1.6L 率性版'
      	},
      	{
      		link: 'https://www.tangeche.com/detail.html?modelCode=12654-n&brandCode=brand-135&seriesCode=series-2843',
      		url: 'https://f.souche.com/5f6a66bebc70aa2bbf6b6835e4c44302.jpg',
      		image: require('./images/product-image-09.jpg'),
          title: '野帝',
      		subTitle: '2017款 野帝 280TSI DSG前行版'
      	},
      	{
      		link: 'https://www.tangeche.com/detail.html?brandCode=brand-27&seriesCode=series-564&modelCode=12788-n',
      		url: 'https://f.souche.com/5d9e91694f2e6f941f422c351446005b.jpg',
      		image: require('./images/product-image-10.jpg'),
          title: '雅阁',
      		subTitle: '2016款 雅阁 混动 2.0L 锐酷版'
      	},
      	{
      		link: 'https://www.tangeche.com/detail.html?brandCode=brand-135&seriesCode=series-156&modelCode=10988-n',
      		url: 'https://f.souche.com/3391a9a813100ae27ba9ddbdc3202d55.jpg',
      		image: require('./images/product-image-11.jpg'),
          title: '明锐',
      		subTitle: '2017款 明锐 1.6L 自动前行版'
      	},
      	{
      		link: 'https://www.tangeche.com/detail.html?modelCode=6712-n&brandCode=brand-29&seriesCode=series-23231',
      		url: 'https://f.souche.com/37cb9e9e4a042b222be196c4fa2ee1a7.jpg',
      		image: require('./images/product-image-12.jpg'),
          title: '标致308S',
      		subTitle: '2015款 标致308S 1.2T 自动劲驰版'
      	},
      	{
      		link: 'https://www.tangeche.com/detail.html?modelCode=12039-n&brandCode=brand-29&seriesCode=series-1382',
      		url: 'https://f.souche.com/dfb0e0f94fafcf141b9c29d74f551ec3.jpg',
      		image: require('./images/product-image-13.jpg'),
          title: '标致2008',
      		subTitle: '2015款 标致2008 1.6L 自动玩酷版'
      	},
      	{
      		link: 'https://www.tangeche.com/detail.html?modelCode=43248&brandCode=brand-29&seriesCode=series-1900',
      		url: 'https://f.souche.com/10d8ac39d2ecb76446c4799af96f78bb.jpg',
      		image: require('./images/product-image-14.jpg'),
          title: '标致408',
      		subTitle: '2014款 标致408 1.8L 自动豪华版'
      	},
      	{
      		link: 'https://www.tangeche.com/detail.html?modelCode=200371&brandCode=brand-29&seriesCode=series-2232',
      		url: 'https://f.souche.com/e8d49b72d469cc5758b3829ec9d7ca52.jpg',
      		image: require('./images/product-image-15.jpg'),
          title: '标致508',
      		subTitle: '2015款 标致508 1.6THP 自动致逸天窗版'
      	},
      	{
      		link: 'https://www.tangeche.com/detail.html?modelCode=200634&brandCode=brand-121&seriesCode=series-317',
      		url: 'https://f.souche.com/49147e43abd2930a4b833778abd12fcc.jpg',
      		image: require('./images/product-image-16.jpg'),
          title: '天籁',
      		subTitle: '2016款 天籁 2.0L XE时尚真皮版'
      	},
      ]
    };
  }
  render() {
    return (
      <Container>
          <Header searchBar rounded>
            <InputGroup>
              <Icon name='ios-search-outline'/>
              <Input
                placeHolder='搜索商品'
                onChangText={(text)=>{
                  this.setState({searchText: text});
                  console.log('输入内容是'+this.state.searchText);
                }}/>
            </InputGroup>
            <Button
              transparent
              onPress={()=>{
                Alert.alert('搜索内容'+this.state.searchText, null, null);
              }}>
              <Text>搜索</Text>
            </Button>
          </Header>
          <Content>
            <View style={styles.advertisement}>
              {this.renderSwiper()}
            </View>
            <List dataArray={this.state.products}
              renderRow={this._renderRow}>
            </List>
          </Content>
      </Container>
    );
  }

  _renderRow = (product) => {
    return (
      <ListItem
        button
        onPress={()=>{
          Alert.alert(product.title, null, null);
          const {navigator} = this.props;
          if(navigator){
            navigator.push({
              name: 'detail',
              component: Detail,
              params: {
                link: product.link,
                url: product.url,
            		image: product.image,
                productTitle: product.title,
            		productSubTitle: product.subTitle
              }
            });
          }
        }}>
        <Thumbnail
          square size={40}
          source={product.image}/>
          <Text>{product.title}</Text>
          <Text note>{product.subTitle}</Text>
      </ListItem>
    );
  }

  renderSwiper(){
    if(this.state.swiperShow){
       return(
         <Swiper
         looper={true}
         height={190}
         autoplay={true} >
         {this.state.advertisements.map((advertisement, index) => {
           return (
             <TouchableHighlight key={index}
               onPress={() => Alert.alert('你单击了轮播图'+(Number(index)+1), null, null)}>
               <Image
                 style={styles.advertisementContent}
                 source={advertisement.image} />
             </TouchableHighlight>
           );
         })}
       </Swiper>
     );
    }else{
      return(<View style={{height: 190}}></View>);
    }
  }
  componentDidMount() {
    setTimeout(()=>{
      this.setState({swiperShow: true});
    },500)
  }
}

const styles = StyleSheet.create({
  advertisementContent: {
    width: Dimensions.get('window').width,
    height: 180
  }
});
