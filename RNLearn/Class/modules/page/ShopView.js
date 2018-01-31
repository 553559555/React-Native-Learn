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
            {data:[[{title:'我是第一个', id:0},{title:'我是第二个',id:1},{title:'我是第三个',id:2},{title:'我是第四个',id:3}]], id:0, title:'我是第一组'},
            {data:[[{title:'我是第一个', id:0},{title:'我是第二个',id:1},{title:'我是第三个',id:2},{title:'我是第四个',id:3}]], id:1, title:'我是第二组'},
            {data:[[{title:'我是第一个', id:0},{title:'我是第二个',id:1},{title:'我是第三个',id:2},{title:'我是第四个',id:3}]], id:2, title:'我是第三组'},
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
            <TouchableOpacity onPress={() => this._onPress(item)}>
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
        color:'blue'
    },
    itemContainer:{
        width: ScreenWidth / 2,
        height: ScreenWidth / 2 + 20,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1
    },
    itemImage:{
        width: ScreenWidth / 2 - 20,
        height: ScreenWidth / 2 - 20,
        backgroundColor:'red'
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
    },

});
