import { Dimensions, NativeModules, Platform } from 'react-native';
const { StatusBarManager } = NativeModules;

const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth: number = 375;
const guidelineBaseHeight: number = 812;

const horizontalScale = (size: number) => width / guidelineBaseWidth * size;
const verticalScale = (size: number) => height / guidelineBaseHeight * size;
const moderateScale = (size: number, factor: number = 0.5) => size + ( horizontalScale(size) - size ) * factor;

const StatusBarHeight: number = Platform.OS === 'ios' ? 0 : StatusBarManager.HEIGHT;

export { width, height, horizontalScale, verticalScale, moderateScale, StatusBarHeight };