import React from 'react';
import { Icons } from '../theme';
import { AppRoute } from './AppRoute';
import { TodoNavigator } from './TodoNavigator';
import { ProfileNavigator } from './ProfileNavigator';
import { AboutScreen, HomeDrawer, HomeTabBar } from '../module';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/core';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerNavigationProp } from '@react-navigation/drawer';
import { BottomTabBarProps, BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

type HomeDrawerNavigatorParams = {
  [AppRoute.HOME_REDUX]: undefined;
  [AppRoute.HOME_REDUX_SAUCE]: undefined;
  [AppRoute.ABOUT]: undefined;
}

type HomeBottomTabsNavigatorParams = {
  [AppRoute.TODO]: undefined;
  [AppRoute.PROFILE]: undefined;
}

export type TodoTabNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeBottomTabsNavigatorParams, AppRoute.TODO>,
  DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.HOME_REDUX>
>;

export type ProfileTabNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeBottomTabsNavigatorParams, AppRoute.PROFILE>,
  DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.HOME_REDUX>
>;

export interface AboutScreenProps {
  navigation: DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.ABOUT>;
  route: RouteProp<HomeDrawerNavigatorParams, AppRoute.ABOUT>;
}

export type BottomHomeScreenProps = BottomTabBarProps & {
  navigation: TodoTabNavigationProp;
};

export type DrawerHomeScreenProps = DrawerContentComponentProps & {
  navigation: DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.HOME_REDUX>;
};

const Drawer = createDrawerNavigator<HomeDrawerNavigatorParams>();
const BottomTab = createBottomTabNavigator<HomeBottomTabsNavigatorParams>();

const HomeBottomNavigator = (): React.ReactElement => (
  // @ts-ignore: `tabBar` also contains a DrawerNavigationProp
  <BottomTab.Navigator tabBar={HomeTabBar}>
    <BottomTab.Screen
      name={AppRoute.TODO}
      component={TodoNavigator}
      options={{ title: 'TODO', tabBarIcon: Icons.layoutIcon }}
    />
    <BottomTab.Screen
      name={AppRoute.PROFILE}
      component={ProfileNavigator}
      options={{ title: 'PROFILE', tabBarIcon: Icons.personIcon }}
    />
  </BottomTab.Navigator>
);

export const HomeNavigator = (): React.ReactElement => (
  // @ts-ignore: `drawerContent` also contains a DrawerNavigationProp
  <Drawer.Navigator drawerContent={HomeDrawer}>
    <Drawer.Screen
      name={AppRoute.HOME_REDUX}
      component={HomeBottomNavigator}
      options={{ title: 'Redux', drawerIcon: Icons.homeIcon }}
    />
    <Drawer.Screen
      name={AppRoute.HOME_REDUX_SAUCE}
      component={HomeBottomNavigator}
      options={{ title: 'Redux Sauce', drawerIcon: Icons.homeIcon }}
    />
    <Drawer.Screen
      name={AppRoute.ABOUT}
      component={AboutScreen}
      options={{ title: 'About', drawerIcon: Icons.infoIcon }}
    />
  </Drawer.Navigator>
);

