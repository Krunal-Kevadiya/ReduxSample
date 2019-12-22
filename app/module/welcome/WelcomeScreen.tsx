import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';
import styles from './WelcomeStyles';
import { WelComeScreenProps, AppRoute } from '../../navigation';

export const WelcomeScreen = (props: WelComeScreenProps) => {
  const navigateSingIn = (): void => {
    props.navigation.navigate(AppRoute.SIGN_IN);
  };

  React.useEffect(() => {
    setTimeout(()=>{
      navigateSingIn();
    }, 3000);
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>
          Welcome to React Navigation World
          Todo sample for Redux and Redux auise
        </Text>
      </SafeAreaView>
    </>
  );
};
