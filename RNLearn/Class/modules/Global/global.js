
import { Dimensions } from 'react-native';

let {width,height} = Dimensions.get('window');
global.ScreenWidth = width;
global.ScreenHeight = height;
global.NotNavigationAndTabBarScreenHeight = height == 812 ? height - 88 - 34 - 49 : height - 64 - 49;
