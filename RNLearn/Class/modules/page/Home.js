/**
 *
 * App的首页
 * 创建人：arther
 * QQ：553559555
 * Email：artheremail@163.com
 * 时间：2018/01/16
 *
 */

import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    Dimensions,
    TouchableOpacity
} from 'react-native';

let {width,height} = Dimensions.get('window');

export default class Home extends Component {

    constructor(props) {
        super(props);
        let dataArray = [{id:0,title:'FlexBox布局'},{id:1,title:'展示页面布局'},{id:2,title:'商城页面布局'},{id:3,title:'新闻页面布局'}];
        //创建数据源
        this.state = {
            dataSource:dataArray,
        };
    }

    //每行item的样式
    _renderItem = ({item}) => {
        return (
            //添加点击事件
            <TouchableOpacity onPress={() => {this._onPress(item)}}>
                <View style={styles.itemView}>
                    <Text style={styles.itemText} numberOfLines={1}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    //item点击事件
    _onPress(item) {
        switch (item.id) {
            case 0:
                this.props.navigation.navigate('FlexBox');
                break;
            case 1:
                this.props.navigation.navigate('FlatListView');
                break;
            case 2:
                this.props.navigation.navigate('ShopView');
                break;
            case 3:
                this.props.navigation.navigate('NewView');
                break;
            default:
        }
    }

    //视图
    render() {
        return (
            <View style={styles.container}>
                <FlatList style={styles.container}                  //样式
                          data={this.state.dataSource}              //数据源设置
                          renderItem={this._renderItem}             //每个item返回的样式
                          keyExtractor={(item,index) => item.id}    //设置标识
                />
            </View>
        )
    }
}

//样式
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white'
    },
    itemView:{
        width:ScreenWidth,
        height:50,
        justifyContent:'center',
        borderColor:'#f0f0f0',
        borderWidth:0.5
    },
    itemText:{
        marginLeft:10,
        fontSize:15,
    }
});
