import { StyleSheet } from 'react-native';
import { verticalScale } from '../../theme';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addButton: {
    marginVertical: verticalScale(8)
  }
});

export default styles;

