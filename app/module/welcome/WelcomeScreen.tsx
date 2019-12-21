import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';
import styles from './WelcomeStyles';

export const WelcomeScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={styles.text}>
          Welcome to React Navigation 5 Guide
        </Text>
      </SafeAreaView>
    </>
  );
};
