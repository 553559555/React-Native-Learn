import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    SectionList,
    Text,
    TouchableOpacity
} from 'react-native';

import Log from 'react-native-log'
var defaultImage = require('../../../src/default.png');

export default class ShopView extends Component {

    constructor(props) {
        super(props);
        //数据源
        var array = [
            {data:[[{title:'中长款羽绒服', id:0, image:'https://img.alicdn.com/imgextra/i1/3075307584/TB2eg00mRDH8KJjy1zeXXXjepXa_!!3075307584-0-daren.jpg_300x300.jpg'},{title:'高跟鞋',id:1,image:'https://img.alicdn.com/imgextra/i4/261832618/TB2flJlmSYH8KJjSspdXXcRgVXa_!!261832618-0-beehive-scenes.jpg_300x300.jpg'},{title:'英伦切尔西靴',id:2, image:'https://img.alicdn.com/imgextra/i2/2564660119/TB22vm4bPb.heNjSZFAXXchKXXa_!!2564660119-0-beehive-scenes.jpg_300x300.jpg'},{title:'艺术茶盘',id:3, image:'https://img.alicdn.com/imgextra/i2/2544775745/TB22MpBmJzJ8KJjSspkXXbF7VXa_!!2544775745-2-beehive-scenes.png_300x300.jpg'}]], id:0, title:'热门推荐'},
            {data:[[{title:'鸭舌太阳帽', id:0, image:'https://img.alicdn.com/bao/uploaded/i4/550754161/TB1vXwdcwLD8KJjSszeXXaGRpXa_!!0-item_pic.jpg_430x430q90.jpg'},{title:'韩版太阳帽',id:1,image:'https://img.alicdn.com/imgextra/i1/2972205798/TB2F47Dk3JkpuFjSszcXXXfsFXa_!!2972205798.jpg_430x430q90.jpg'},{title:'棒球服',id:2, image:'https://gd1.alicdn.com/imgextra/i1/1775513185/TB2vnqdfl0kpuFjSsppXXcGTXXa_!!1775513185.jpg_400x400.jpg'},{title:'粗毛线外穿',id:3, image:'https://gd2.alicdn.com/imgextra/i2/0/TB1P7eBbdPJ3eJjSZFLXXab3FXa_!!0-item_pic.jpg_400x400.jpg'}]], id:1, title:'每日精选'},
            {data:[[{title:'飞人乔丹帽',id:4, image:'https://gw.alicdn.com/bao/uploaded/i1/890482188/TB20eUpdkfb_uJkSmRyXXbWxVXa_!!890482188.jpg_460x460xz.jpg'}]], id:2, title:'热卖单品'},
        ];
        this.state = {
            dataSource:array,
        };
    }

    //返回一组item的样式
    _renderItem = ({ item}) => (
        <View style={styles.list}>
            {
                //遍历数据
                item.map((item,i) => this.renderExpenseItem(item,i))
            }
        </View>
    );

    //每个item的样式
    renderExpenseItem(item,i) {
        return (
            //设置每个item的key 否则会报错
            <TouchableOpacity onPress={() => this._onPress(item)} key={i}>
                <View style={styles.itemContainer}>
                    <Image style={styles.itemImage} source={item.image == null ? defaultImage : {uri:item.image}} resizeMode="cover"/>
                    <Text style={{fontSize:12,marginTop:10,color:'black'}} numberOfLines={1}>{item.title}</Text>
                </View>
            </TouchableOpacity>

        );
    }

    //点击事件
    _onPress(item) {
        alert(item.title);
    }

    //每组item的头部样式
    _renderSectionHeaderItem = ({section}) => {
        return (
            <View style={styles.sectionHeaderView}>
                <Text style={styles.sectionHeaderText}>{section.title}</Text>
            </View>
        )
    };

    render() {
        return (
            <View style={styles.container}>
                <SectionList style={styles.container}
                             sections={this.state.dataSource}                       //每组显示的数据
                             renderItem={this._renderItem}                          //当前一组item的样式
                             renderSectionHeader={this._renderSectionHeaderItem}    //头部样式
                             keyExtractor={(item,index) => item.id}                 //标识
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor: 'white'
    },
    sectionHeaderView:{
        width:ScreenWidth,
        height:40,
        justifyContent:'center',
        backgroundColor:'white'
    },
    sectionHeaderText:{
        marginLeft:10,
        fontSize:20,
        color:'black'
    },
    itemContainer:{
        width: ScreenWidth / 2,
        height: ScreenWidth / 2 + 20,
        justifyContent:'center',
        alignItems:'center',
    },
    itemImage:{
        width: ScreenWidth / 2 - 20,
        height: ScreenWidth / 2 - 20,
        // backgroundColor:'cyan'
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#FFFFFF',
    },

});
