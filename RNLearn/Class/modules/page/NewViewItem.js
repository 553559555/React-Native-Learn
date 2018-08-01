/**
 *
 * 新闻页面Item
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
    Text,
    FlatList,
    Image,
} from 'react-native';


export default class NewViewItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:this.props.data,
        }
    }

    componentDidMount() {

    }

    _renderItem = ({item}) => {
        return (
            <View style={{width:ScreenWidth, height:100,borderWidth:1,borderColor:'cyan',flexDirection:'row'}}>
                <View style={{width:100,height:100, justifyContent:'center', alignItems:'center'}}>
                    <Image style={{width: 80,height: 80}} source={{uri:item.images[0]}}></Image>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text style={{fontSize:16}}>{item.title}</Text>
                </View>
            </View>
        )
    };

    render(){
        return (
            <View style={styles.container}>
                <FlatList style={styles.container}
                          data={this.state.data}
                          renderItem={this._renderItem}
                          keyExtractor={(item,index) => "index"+index+item}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
});