import React from 'react';
import { AppRoute } from './AppRoute';
import { ProfileScreen } from '../module';
import { ProfileTabNavigationProp } from './HomeNavigator';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

type ProfileNavigatorParams = {
  [AppRoute.PROFILE]: undefined;
}

export interface ProfileScreenProps {
  navigation: CompositeNavigationProp<
    ProfileTabNavigationProp,
    StackNavigationProp<ProfileNavigatorParams, AppRoute.PROFILE>
  >;
  route: RouteProp<ProfileNavigatorParams, AppRoute.PROFILE>;
}

const Stack = createStackNavigator<ProfileNavigatorParams>();

export const ProfileNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppRoute.PROFILE} component={ProfileScreen}/>
  </Stack.Navigator>
);
