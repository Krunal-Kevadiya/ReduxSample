import React from 'react';
import { Icons } from '../../theme';
import styles from './ProfileStyles';
import { ProfileScreenProps } from '../../navigation';
import { Divider, Layout, Text } from 'react-native-ui-kitten';
import { Toolbar, SafeAreaLayout, SafeAreaLayoutElement, SaveAreaInset } from '../../component';

export const ProfileScreen = (props: ProfileScreenProps): SafeAreaLayoutElement => (
  <SafeAreaLayout
    style={styles.safeArea}
    insets={SaveAreaInset.TOP}>
    <Toolbar
      title='React Navigation Ex 🐱'
      backIcon={Icons.menuIcon}
      onBackPress={props.navigation.toggleDrawer}
    />
    <Divider/>
    <Layout style={styles.container}>
      <Text category='h1'>
        PROFILE
      </Text>
    </Layout>
  </SafeAreaLayout>
);