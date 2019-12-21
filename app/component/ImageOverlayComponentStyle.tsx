import { StyleSheet } from 'react-native';
import { Colors } from '../theme';

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: Colors.transparent15Opacity,
    ...StyleSheet.absoluteFillObject
  }
});

export default styles;

