import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList
} from 'react-native';

export default class NewViewItem extends Component {

    constructor(props) {
        super(props);
        var array = [{id:0},{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9}];
        this.state = {
            listDataSource:array
        }
    }

    _renderItem = ({item}) => {
        return (
            <View style={{width:ScreenWidth, height:200,borderWidth:1,borderColor:'cyan'}}>
            </View>
        )
    };

    render(){
        return (
            <View style={styles.container}>
                <FlatList style={styles.container}
                          data={this.state.listDataSource}
                          renderItem={this._renderItem}
                          keyExtractor={(item,index) => item.id}
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