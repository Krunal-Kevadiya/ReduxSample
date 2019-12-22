import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../../theme';

const styles = StyleSheet.create({
  appBar: {
    height: verticalScale(250)
  },
  formContainer: {
    flex: 1,
    paddingVertical: verticalScale(16),
    paddingHorizontal: horizontalScale(16),
  },
  resetPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formControl: {
    marginVertical: verticalScale(4),
  },
  submitButton: {
    marginVertical: verticalScale(24),
  },
  noAccountButton: {
    alignSelf: 'center',
  }
});

export default styles;