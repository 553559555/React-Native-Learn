/**
 *
 * FlatList的页面
 * 创建人：arther
 * QQ：553559555
 * Email：artheremail@163.com
 * 时间：2018/02/02
 *
 */

import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    FlatList,
    StyleSheet,
    TouchableOpacity
} from 'react-native';


export default class FlatListView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource:null,
            bannerData:null,
        };
    }

    //页面初始化完毕后开始网络请求
    componentDidMount() {
        this.getListData();
        this.getBannerData();
    }

    //获取列表数据
    async getListData() {
        fetch('http://cjc.neoby.com:8085//app/product/list.jhtml')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                   dataSource:data.data,
                });
            })
            .catch((error) => {
                alert(error + '网络错误');
            })
    }

    //获取banner数据
    async getBannerData() {
        fetch('http://cjc.neoby.com:8085/app/ad_position/carousel.jhtml')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    bannerData:data.data,
                });
            })
            .catch((error) => {
                alert(error + '网络错误');
            })
    }

    //item点击事件
    itemonPress(data) {
        //跳转附带参数
        this.props.navigation.navigate('RNWebView',{content:data});
    };

    //item样式
    _renderItem = ({item}) => {
          return (
              //点击事件
              <TouchableOpacity activeOpacity={1} onPress={() => {this.itemonPress(item.introduction)}}>
                  <View style={styles.itemContainer}>
                      <Image style={styles.itemImage} source={{uri:item.image}} resizeMode="cover"/>
                      <Text style={{fontSize:12,marginTop:10,color:'white'}} numberOfLines={1}>{item.name}</Text>
                  </View>
              </TouchableOpacity>
          )
    };

    //头部样式
    _renderHeader = () => {
        return (
            <View style={{width:ScreenWidth,height:150,backgroundColor:'#008B00'}}>
                { this.state.bannerData == null
                    ? null
                    : <Image style={{flex:1}} source={{uri:this.state.bannerData[0].image}} resizeMode="contain"/>}
            </View>

        )
    };

    render() {
        return (
            <View style={styles.container}>
                {this.state.dataSource == null                              //判断数据是否为空
                    ? <Text style={{fontSize:20}}>数据加载中...</Text>
                    : <FlatList style={{flex:1, backgroundColor:'white'}}
                                data={this.state.dataSource}
                                renderItem={this._renderItem}
                                keyExtractor={(item,index) => item.id}
                                numColumns={2}                              //每行展示几个item
                                ListHeaderComponent={this._renderHeader}    //返回头部视图
                      />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    itemContainer:{
        width: ScreenWidth/ 2,
        height: ScreenWidth / 2 + 20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#008B00'
    },
    itemImage:{
        width: ScreenWidth / 2 - 20,
        height: ScreenWidth / 2 - 20,
    }
});
