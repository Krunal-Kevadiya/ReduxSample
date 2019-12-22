import React from 'react';
import { Icons } from '../theme';
import { FormikContext, useFormikContext } from 'formik';
import { Input, InputElement, InputProps } from 'react-native-ui-kitten';

interface FormInputProps extends InputProps {
  id: string;
}

export const FormInput = ({ id, ...inputProps }: FormInputProps): InputElement => {

  const formContext: FormikContext<{}> = useFormikContext();

  // @ts-ignore
  const { [id]: error } = formContext.errors;

  const fieldProps: Partial<InputProps> = {
    status: error && 'danger',
    captionIcon: error && Icons.alertTriangleIcon,
  };

  return (
    <Input
      {...inputProps}
      {...fieldProps}
      caption={error}
      size='small'
      onChangeText={formContext.handleChange(id)}
    />
  );
};