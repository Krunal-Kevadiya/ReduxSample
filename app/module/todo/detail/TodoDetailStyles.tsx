import { StyleSheet } from 'react-native';
import { verticalScale, horizontalScale } from '../../../theme';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingVertical: verticalScale(4),
    paddingHorizontal: horizontalScale(16)
  },
  detailsContainer: {
    flex: 1
  },
  appBar: {
    height: verticalScale(192)
  },
  title: {
    marginVertical: verticalScale(4)
  },
  progressBar: {
    width: '50%',
    marginVertical: verticalScale(16)
  },
  submitButton: {
    marginVertical: verticalScale(5),
  }
});

export default styles;

