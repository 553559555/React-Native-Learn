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

export default class ShopView extends Component {

    constructor(props) {
        super(props);
        var array = [
            {data:[[{title:'中长款羽绒服', id:0, image:'https://img.alicdn.com/imgextra/i1/3075307584/TB2eg00mRDH8KJjy1zeXXXjepXa_!!3075307584-0-daren.jpg_300x300.jpg'},{title:'高跟鞋',id:1,image:'https://img.alicdn.com/imgextra/i4/261832618/TB2flJlmSYH8KJjSspdXXcRgVXa_!!261832618-0-beehive-scenes.jpg_300x300.jpg'},{title:'英伦切尔西靴',id:2, image:'https://img.alicdn.com/imgextra/i2/2564660119/TB22vm4bPb.heNjSZFAXXchKXXa_!!2564660119-0-beehive-scenes.jpg_300x300.jpg'},{title:'艺术茶盘',id:3, image:'https://img.alicdn.com/imgextra/i2/2544775745/TB22MpBmJzJ8KJjSspkXXbF7VXa_!!2544775745-2-beehive-scenes.png_300x300.jpg'}]], id:0, title:'热门推荐'},
            {data:[[{title:'中长款羽绒服', id:0, image:'https://img.alicdn.com/imgextra/i1/3075307584/TB2eg00mRDH8KJjy1zeXXXjepXa_!!3075307584-0-daren.jpg_300x300.jpg'},{title:'高跟鞋',id:1,image:'https://img.alicdn.com/imgextra/i4/261832618/TB2flJlmSYH8KJjSspdXXcRgVXa_!!261832618-0-beehive-scenes.jpg_300x300.jpg'},{title:'英伦切尔西靴',id:2, image:'https://img.alicdn.com/imgextra/i2/2564660119/TB22vm4bPb.heNjSZFAXXchKXXa_!!2564660119-0-beehive-scenes.jpg_300x300.jpg'},{title:'艺术茶盘',id:3, image:'https://img.alicdn.com/imgextra/i2/2544775745/TB22MpBmJzJ8KJjSspkXXbF7VXa_!!2544775745-2-beehive-scenes.png_300x300.jpg'}]], id:1, title:'每日精选'},
            {data:[[{title:'中长款羽绒服', id:0, image:'https://img.alicdn.com/imgextra/i1/3075307584/TB2eg00mRDH8KJjy1zeXXXjepXa_!!3075307584-0-daren.jpg_300x300.jpg'},{title:'高跟鞋',id:1,image:'https://img.alicdn.com/imgextra/i4/261832618/TB2flJlmSYH8KJjSspdXXcRgVXa_!!261832618-0-beehive-scenes.jpg_300x300.jpg'},{title:'英伦切尔西靴',id:2, image:'https://img.alicdn.com/imgextra/i2/2564660119/TB22vm4bPb.heNjSZFAXXchKXXa_!!2564660119-0-beehive-scenes.jpg_300x300.jpg'},{title:'艺术茶盘',id:3, image:'https://img.alicdn.com/imgextra/i2/2544775745/TB22MpBmJzJ8KJjSspkXXbF7VXa_!!2544775745-2-beehive-scenes.png_300x300.jpg'}]], id:2, title:'热卖单品'},
        ];
        this.state = {
            dataSource:array,
        };
    }

    _renderItem = ({ item}) => (
        <View style={styles.list}>
            {
                item.map((item,i) => this.renderExpenseItem(item,i))
            }
        </View>
    );


    renderExpenseItem(item,i) {
        return (
            <TouchableOpacity onPress={() => this._onPress(item)} key={i}>
                <View style={styles.itemContainer}>
                    <Image style={styles.itemImage} source={{uri:item.image}} resizeMode="cover"/>
                    <Text style={{fontSize:12,marginTop:10,color:'black'}} numberOfLines={1}>{item.title}</Text>
                </View>
            </TouchableOpacity>

        );
    }

    _onPress(item) {
        alert(item.id);
    }

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
                             sections={this.state.dataSource}
                             renderItem={this._renderItem.bind(this)}
                             renderSectionHeader={this._renderSectionHeaderItem}
                             keyExtractor={(item,index) => item.id}
                             //contentContainerStyle={styles.list}
                             //pageSize={4}
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
        backgroundColor:'cyan'
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#FFFFFF',
    },

});
