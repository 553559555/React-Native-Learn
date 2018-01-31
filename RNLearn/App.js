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
import Global from './Class/modules/Global/global';

//注册页面
import Home from './Class/modules/page/Home';
import Me from './Class/modules/Me/Me';
import FlexBox from './Class/modules/page/FlexBox';
import FlatListView from './Class/modules/page/FlatListView';
import RNWebView from './Class/modules/page/RNWebView';
import ShopView from './Class/modules/page/ShopView';
import NewView from './Class/modules/page/NewView';

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
      title:'个人中心',
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
    activeTintColor: '#FF34B3',
    //设置文字默认颜色
    inactiveTintColor:'#EE9A00',
    //设置文字大小
    labelStyle:{
      fontSize:12,
    },
    //设置TabBar背景颜色
    style:{
      backgroundColor:'#AEEEEE'
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
  },
  FlatListView:{
    screen:FlatListView,
    navigationOptions:{
      title:'FlatList',
    }
  },
  RNWebView:{
    screen:RNWebView,
    navigationOptions:{
      title:'WebView',
    }
  },
  ShopView:{
    screen:ShopView,
    navigationOptions:{
      title:'商城',
    }
  },
  NewView:{
    screen:NewView,
    navigationOptions:{
      title:'新闻',
    }
  }
},{
  navigationOptions:{
    //头部样式
    headerStyle:{
      //设置NavigationBar颜色
      backgroundColor:'#AEEEEE'
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