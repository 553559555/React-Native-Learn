
import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    FlatList,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Log from 'react-native-log';

export default class FlatListView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource:null,
            bannerData:null,
        };
    }

    componentDidMount() {
        this.getListData();
        this.getBannerData();
    }

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

    itemonPress(data) {
        this.props.navigation.navigate('RNWebView',{content:data});
    };

    _renderItem = ({item}) => {
          return (
              <TouchableOpacity activeOpacity={1} onPress={() => {this.itemonPress(item.introduction)}}>
                  <View style={styles.itemContainer}>
                      <Image style={styles.itemImage} source={{uri:item.image}} resizeMode="cover"/>
                      <Text style={{fontSize:12,marginTop:10,color:'white'}} numberOfLines={1}>{item.name}</Text>
                  </View>
              </TouchableOpacity>
          )
    };

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
                {this.state.dataSource == null
                    ? <Text>网络错误</Text>
                    : <FlatList style={styles.container}
                                data={this.state.dataSource}
                                renderItem={this._renderItem}
                                keyExtractor={(item,index) => item.id}
                                numColumns={2}
                                ListHeaderComponent={this._renderHeader}
                      />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white'
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
