/**
 *
 * 模仿新闻页面
 * 创建人：arther
 * QQ：553559555
 * Email：artheremail@163.com
 * 时间：2018/02/02
 *
 */
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    ScrollView,
    FlatList,
    Text,
    TouchableOpacity
} from 'react-native';

var _flatList;
var _titleFlatList;

import NewViewItem from './NewViewItem';
import Log from 'react-native-log';

var listDataSource = [];

export default class NewView extends Component {

    constructor(props) {
        super(props);
        let titleArray = [
            {id:0,title:'新闻'},
            {id:1,title:'体育'},
            {id:2,title:'娱乐'},
            {id:3,title:'游戏'},
            {id:4,title:'足球'},
            {id:5,title:'汽车'},
            {id:6,title:'媒体'},
            {id:7,title:'腾讯'},
            {id:8,title:'NBA'}];
        this.state = {
            titleDataSource: titleArray,
            listDataSource:null,
            currentPage:0,
        }
    }

    componentWillMount() {
        fetch('https://news-at.zhihu.com/api/3/news/latest')
            .then((response) => response.json())
            .then((data) => data.stories)
            .then((data) => {
                listDataSource.push(data);
                listDataSource.push(data);
                this.setState({newListData:listDataSource});
            })
            .catch((error) => {
                Log.e(error);
            })
    }

    _renderItem = ({item}) => {
        return (
            <TouchableOpacity onPress={() => {this._onPress(item)}}>
                <View style={{width:50, height:30, justifyContent:'center',alignItems:'center'}}>
                    <Text>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    _onPress(item) {
        // 滚动到指定位置
        // _flatList.scrollToOffset({animated: true, offset: item.id * ScreenWidth});
        //viewPosition： 0 最前面,  0.5 中间  1 最后    index: 第几个item
        _flatList.scrollToIndex({viewPosition:0,index:item.id});
        if (item.id > 5) {
            _titleFlatList.scrollToIndex({viewPosition:1,index:8});
        } else {
            _titleFlatList.scrollToIndex({viewPosition:0,index:0});
        }
        this.setState({currentPage:item.id});
    }

    _renderListItem = ({item}) => {
        return(
            <NewViewItem data={item} style={{width:ScreenWidth,height:ScreenHeight - 30 - 88}}>
                {/*<Text>{item.id}</Text>*/}
            </NewViewItem>
        )
    };

    _scroll(e) {
        // var currentIndex = Math.round(e.nativeEvent.contentOffset.x / ScreenWidth);
        Log.e('123123/'+Math.round(e.nativeEvent.contentOffset.x / ScreenWidth));
        // this.setState({currentPage:});
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleFlatList}>
                    <FlatList style={{flex:1}}
                              ref={(flatList) => {_titleFlatList = flatList}}
                              data={this.state.titleDataSource}
                              renderItem={this._renderItem}
                              keyExtractor={(item,index) => item.id}
                              horizontal={true}
                              showsHorizontalScrollIndicator={false}
                              showsVerticalScrollIndicator={false}
                    />
                </View>
                {
                    this.state.newListData == null
                        ? null
                        : <View style={{flex:1,backgroundColor:'orange'}}>
                            <FlatList style={{flex:1}}
                                      ref={(flatList) => { _flatList = flatList; }}
                                      data={this.state.newListData}
                                      renderItem={this._renderListItem}
                                      keyExtractor={(item,index) => "index"+index+item}
                                      horizontal={true}
                                      showsHorizontalScrollIndicator={false}
                                      showsVerticalScrollIndicator={false}
                                      pagingEnabled={true}
                                      onScroll={this._scroll}
                            />
                        </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor: 'white'
    },
    titleFlatList:{
        width:ScreenWidth,
        height:30,
    },
});