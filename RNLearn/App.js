/**
 *
 * App的导航
 * 创建人：arther
 * QQ：553559555
 * Email：artheremail@163.com
 * 时间：2018/01/16
 *
 */

import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

//注册页面
import Home from './Class/modules/page/Home';
import Me from './Class/modules/Me/Me';
import FlexBox from './Class/modules/page/FlexBox';

//图片路径
var HomeNorImage = require('./src/tab_icon_news_nor.png');
var HomeSelImage = require('./src/tab_icon_news_sel.png');

var MeNorImage = require('./src/tab_icon_my_nor.png');
var MeSelImage = require('./src/tab_icon_my_sel.png');

const MainTabbar = TabNavigator({
  Home:{
    screen:Home,
    navigationOptions:{
      title:'首页',
      tabBarIcon:({focused}) => {
        if (focused) {
          return (
              <Image style={styles.tabBarIcon} source={HomeSelImage}/>
          )
        } else {
          return (
              <Image style={styles.tabBarIcon} source={HomeNorImage}/>
          )
        }
      }
    }
  },
  Me:{
    screen:Me,
    navigationOptions:{
      title:'我的',
      tabBarIcon:({focused}) => {
        if (focused) {
          return (
              <Image style={styles.tabBarIcon} source={MeSelImage}/>
          )
        } else {
          return (
              <Image style={styles.tabBarIcon} source={MeNorImage}/>
          )
        }
      },
    }
  }
}, {
  //设置TabBar属性
  tabBarOptions: {
    //设置文字选中颜色
    activeTintColor: 'black',
    //设置文字默认颜色
    inactiveTintColor:'#a0a0a0',
    //设置文字大小
    labelStyle:{
      fontSize:12,
    },
    //设置TabBar背景颜色
    style:{
      backgroundColor:'#e0e0e0'
    }
  },
});

const RNLearnApp = StackNavigator({
  Main:{
    screen:MainTabbar,
  },
  FlexBox:{
    screen:FlexBox,
    navigationOptions:{
      title:'我是FlexBox',
    }
  }
});

const styles = StyleSheet.create({
  tabBarIcon:{
    width:24,
    height:24
  },
});

export default RNLearnApp;