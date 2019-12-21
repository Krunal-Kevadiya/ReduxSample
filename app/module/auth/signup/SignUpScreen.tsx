import React from 'react';
import styles from './SignUpStyles';
import { Images } from '../../../theme';
import { Formik, FormikProps } from 'formik';
import { ImageBackground } from 'react-native';
import { Toolbar, FormInput } from '../../../component';
import { SignUpData, SignUpDataSchema } from '../../../data';
import { SignUpScreenProps, AppRoute } from '../../../navigation';
import { Button, Layout, LayoutElement } from 'react-native-ui-kitten';
import { EdgeInsets, useSafeArea } from 'react-native-safe-area-context';

export const SignUpScreen = (props: SignUpScreenProps): LayoutElement => {

  const insets: EdgeInsets = useSafeArea();

  const onFormSubmit = (values: SignUpData): void => {
    navigateHome();
  };

  const navigateHome = (): void => {
    props.navigation.navigate(AppRoute.HOME);
  };

  const navigateSignIn = (): void => {
    props.navigation.navigate(AppRoute.SIGN_IN);
  };

  const renderForm = (props: FormikProps<SignUpData>): React.ReactFragment => (
    <React.Fragment>
      <FormInput
        id='email'
        style={styles.formControl}
        placeholder='Email'
        keyboardType='email-address'
      />
      <FormInput
        id='password'
        style={styles.formControl}
        placeholder='Password'
      />
      <FormInput
        id='username'
        style={styles.formControl}
        placeholder='Username'
      />
      <Button
        style={styles.submitButton}
        onPress={props.handleSubmit}>
        SIGN UP
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
          initialValues={SignUpData.empty()}
          validationSchema={SignUpDataSchema}
          onSubmit={onFormSubmit}>
          {renderForm}
        </Formik>
        <Button
          style={styles.haveAccountButton}
          appearance='ghost'
          status='basic'
          onPress={navigateSignIn}>
          Already have an account?
        </Button>
      </Layout>
    </React.Fragment>
  );
};