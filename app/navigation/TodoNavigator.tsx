import React from 'react';
import { Icons } from '../theme';
import { TodoTabNavigationProp } from './HomeNavigator';
import { AppRoute } from './AppRoute';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { TodoDetailsRouteParams, TodoDetailsScreen, TodoDoneScreen, 
  TodoInProgressScreen, TodoTabBar, AddTodoScreen, AddTodoRouteParams 
} from '../module';
import { createMaterialTopTabNavigator, MaterialTopTabBarProps, MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';

type TodoNavigatorParams = {
  [AppRoute.TODO]: undefined;
  [AppRoute.TODO_ADD]: AddTodoRouteParams;
  [AppRoute.TODO_DETAILS]: TodoDetailsRouteParams
}

type TodoTabsNavigatorParams = {
  [AppRoute.TODO_IN_PROGRESS]: undefined;
  [AppRoute.TODO_DONE]: undefined
}

export type TodoScreenProps = MaterialTopTabBarProps & {
  navigation: TodoTabNavigationProp;
}

export interface TodoInProgressScreenProps {
  navigation: CompositeNavigationProp<TodoTabNavigationProp,
    MaterialTopTabNavigationProp<TodoTabsNavigatorParams, AppRoute.TODO_IN_PROGRESS>>;
  route: RouteProp<TodoTabsNavigatorParams, AppRoute.TODO_IN_PROGRESS>;
  isReduxSauce: boolean;
}

export interface AddTodoScreenProps {
  navigation: StackNavigationProp<TodoNavigatorParams, AppRoute.TODO_ADD>;
  route: RouteProp<TodoNavigatorParams, AppRoute.TODO_ADD>;
}

export interface TodoDoneScreenProps {
  navigation: CompositeNavigationProp<TodoTabNavigationProp,
    MaterialTopTabNavigationProp<TodoTabsNavigatorParams, AppRoute.TODO_DONE>>;
  route: RouteProp<TodoTabsNavigatorParams, AppRoute.TODO_DONE>;
}

export interface TodoDetailsScreenProps {
  navigation: StackNavigationProp<TodoNavigatorParams, AppRoute.TODO_DETAILS>;
  route: RouteProp<TodoNavigatorParams, AppRoute.TODO_DETAILS>;
}

const Stack = createStackNavigator<TodoNavigatorParams>();
const TopTab = createMaterialTopTabNavigator<TodoTabsNavigatorParams>();

// FIXME: Is it possible to track swipe progress?
// In this case, it's needed to synchronize tab-bar indicator in TodoScreen
//
// Currently I have set `swipeEnabled` to `false` just for saving navigation consistence
//
// Btw, it's not possible to use `@react-navigation/material-top-tabs
// without `react-native-tab-view` even if you use custom `tabBarComponent`
//
// Anyway, it's possible to create top tab navigation with gesture support with UI Kitten `TabView`

const TodoTabsNavigator = (): React.ReactElement => (
  // @ts-ignore: `tabBar` also contains a DrawerNavigationProp & BottomTabNavigationProp
  <TopTab.Navigator tabBar={props => <TodoTabBar {...props} />}>
    <TopTab.Screen
      name={AppRoute.TODO_IN_PROGRESS}
      component={TodoInProgressScreen}
      options={{ title: 'IN PROGRESS', tabBarIcon: Icons.gridIcon }}
    />
    <TopTab.Screen
      name={AppRoute.TODO_DONE}
      component={TodoDoneScreen}
      options={{ title: 'DONE', tabBarIcon: Icons.doneAllIcon }}
    />
  </TopTab.Navigator>
);

export const TodoNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppRoute.TODO} component={TodoTabsNavigator}/>
    <Stack.Screen name={AppRoute.TODO_DETAILS} component={TodoDetailsScreen}/>
    <Stack.Screen name={AppRoute.TODO_ADD} component={AddTodoScreen}/>  
  </Stack.Navigator>
);
