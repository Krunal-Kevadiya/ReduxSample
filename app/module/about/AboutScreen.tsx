import React from 'react';
import styles from './AboutStyles';
import { AboutScreenProps } from '../../navigation';
import { Divider, Layout, Text } from 'react-native-ui-kitten';
import { Toolbar, SafeAreaLayout, SafeAreaLayoutElement, SaveAreaInset } from '../../component';

export const AboutScreen = (props: AboutScreenProps): SafeAreaLayoutElement => (
  <SafeAreaLayout
    style={styles.safeArea}
    insets={SaveAreaInset.TOP}>
    <Toolbar
      title='Todo Sample 🐱'
      onBackPress={props.navigation.goBack}
    />
    <Divider/>
    <Layout style={styles.container}>
      <Text category='h1'>
        ABOUT
      </Text>
    </Layout>
  </SafeAreaLayout>
);