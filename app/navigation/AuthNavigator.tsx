import React from 'react';
import { AppRoute } from './AppRoute';
import { RouteProp } from '@react-navigation/core';
import { AppNavigatorParams } from './AppNavigator';
import { SignInScreen, SignUpScreen, ResetPasswordScreen, WelcomeScreen } from '../module';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

type AuthNavigatorParams = AppNavigatorParams & {
  [AppRoute.WEL_COME]: undefined;
  [AppRoute.SIGN_IN]: undefined;
  [AppRoute.SIGN_UP]: undefined;
  [AppRoute.RESET_PASSWORD]: undefined;
}

export interface WelComeScreenProps {
  navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.WEL_COME>;
  route: RouteProp<AuthNavigatorParams, AppRoute.WEL_COME>;
}

export interface SignInScreenProps {
  navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.SIGN_IN>;
  route: RouteProp<AuthNavigatorParams, AppRoute.SIGN_IN>;
}

export interface SignUpScreenProps {
  navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.SIGN_UP>;
  route: RouteProp<AuthNavigatorParams, AppRoute.SIGN_UP>;
}

export interface ResetPasswordScreenProps {
  navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.RESET_PASSWORD>;
  route: RouteProp<AuthNavigatorParams, AppRoute.RESET_PASSWORD>;
}

const Stack = createStackNavigator<AuthNavigatorParams>();

export const AuthNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppRoute.WEL_COME} component={WelcomeScreen}/>
    <Stack.Screen name={AppRoute.SIGN_IN} component={SignInScreen}/>
    <Stack.Screen name={AppRoute.SIGN_UP} component={SignUpScreen}/>
    <Stack.Screen name={AppRoute.RESET_PASSWORD} component={ResetPasswordScreen}/>
  </Stack.Navigator>
);
