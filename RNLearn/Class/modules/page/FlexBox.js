/**
 *
 * App的FlexBox布局
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

export default class FlexBox extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container1}>
                    <View style={styles.container2}>
                        <View style={styles.container3}>
                            <View style={styles.container4}>
                                <View style={styles.container5} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'blue'
    },
    container1:{
        flex:1,
        margin:30,
        backgroundColor:'yellow',
    },
    container2:{
        flex:1,
        margin:30,
        backgroundColor:'red',
    },
    container3:{
        flex:1,
        margin:30,
        backgroundColor:'orange',
    },
    container4:{
        flex:1,
        margin:30,
        backgroundColor:'purple',
    },
    container5:{
        flex:1,
        margin:30,
        backgroundColor:'white',
    },
});