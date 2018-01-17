import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    WebView
} from 'react-native';

export default class RNWebView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //获取传递参数
            content:this.props.navigation.state.params.content,
        };
    }

    componentDidMount() {
    }

    render() {
        //HTML样式
        var html='<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="format-detection" content="telephone=no"><meta content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" /><title></title></head><body>'+this.state.content+'</body></html>';
        return(
            <View style={styles.container}>
                <WebView style={styles.container} source={{html:html,baseUrl:''}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'white'
    }

});