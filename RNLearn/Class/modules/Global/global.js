/**
 *
 * 全局访问常量
 * 创建人：arther
 * QQ：553559555
 * Email：artheremail@163.com
 * 时间：2018/02/02
 *
 */
import { Dimensions } from 'react-native';

let {width,height} = Dimensions.get('window');
global.ScreenWidth = width;
global.ScreenHeight = height;
global.NotNavigationAndTabBarScreenHeight = height == 812 ? height - 88 - 34 - 49 : height - 64 - 49;
