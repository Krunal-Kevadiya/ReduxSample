import React from 'react';
import { Images } from '../../../theme';
import styles from './ResetPasswordStyles';
import { Formik, FormikProps } from 'formik';
import { ImageBackground } from 'react-native';
import { FormInput, Toolbar } from '../../../component';
import { Button, Layout, LayoutElement } from 'react-native-ui-kitten';
import { EdgeInsets, useSafeArea } from 'react-native-safe-area-context';
import { ResetPasswordScreenProps, AppRoute } from '../../../navigation';
import { ResetPasswordData, ResetPasswordDataSchema } from '../../../data';

export const ResetPasswordScreen = (props: ResetPasswordScreenProps): LayoutElement => {

  const insets: EdgeInsets = useSafeArea();

  const onFormSubmit = (values: ResetPasswordData): void => {
    navigateSignIn();
  };

  const navigateSignIn = (): void => {
    props.navigation.navigate(AppRoute.SIGN_IN);
  };

  const renderForm = (props: FormikProps<ResetPasswordData>): React.ReactFragment => (
    <React.Fragment>
      <FormInput
        id='email'
        style={styles.formControl}
        placeholder='Email'
        keyboardType='email-address'
      />
      <Button
        style={styles.button}
        onPress={props.handleSubmit}>
        DONE
      </Button>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ImageBackground
        style={[styles.appBar, { paddingTop: insets.top }]}
        source={Images.imageBackground}>
        <Toolbar
          appearance='control'
          onBackPress={props.navigation.goBack}
        />
      </ImageBackground>
      <Layout style={styles.formContainer}>
        <Formik
          initialValues={ResetPasswordData.empty()}
          validationSchema={ResetPasswordDataSchema}
          onSubmit={onFormSubmit}>
          {renderForm}
        </Formik>
      </Layout>
    </React.Fragment>
  );
};