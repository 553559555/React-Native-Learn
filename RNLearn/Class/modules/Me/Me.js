/**
 *
 * App的我的页面
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
    Image
} from 'react-native';

var iconImage = require('../../../src/icon.jpg');

export default class Me extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.iconHeaderView}>
                    <Image style={styles.iconImage} source={iconImage}/>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>海峰眷恋的沙</Text>
                        <Text style={{color:'#9400D3',marginLeft:5,fontSize:12}}>Vip 6</Text>
                    </View>
                </View>
                <View style={styles.itemView}>
                    <Text style={styles.itemViewText}>个人中心</Text>
                </View>
                <View style={styles.itemView}>
                    <Text style={styles.itemViewText}>设置</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#eeeeee'
    },
    iconHeaderView: {
        width:ScreenWidth,
        height:200,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#F0FFF0'
    },
    iconImage:{
        width:80,
        height:80,
        borderRadius:20,
    },
    nameContainer: {
        marginTop:20,
        width:ScreenWidth,
        flexDirection:'row',
        justifyContent:'center'
    },
    name:{
        fontSize:17,
        color:'#EE9572',
    },
    itemView:{
        marginTop:40,
        width:ScreenWidth,
        height:60,
        justifyContent:'center',
        borderColor:'#e0e0e0',
        borderWidth:0.2,
        backgroundColor:'white'
    },
    itemViewText:{
        marginLeft:20,
        fontSize:18,
        color:'black'
    }

});