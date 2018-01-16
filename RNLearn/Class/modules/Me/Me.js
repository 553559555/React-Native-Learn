/**
 *
 * App的我的页面
 * 创建人：arther
 * QQ：553559555
 * Email：artheremail@163.com
 * 时间：2018/01/16
 *
 */

import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

export default class Me extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>我的</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white'
    }
});