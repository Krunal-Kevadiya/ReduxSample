import React from 'react';
import { Icons } from '../../theme';
import { TodoScreenProps, AppRoute } from '../../navigation';
import { Divider, Tab, TabBar, TabElement } from 'react-native-ui-kitten';
import { SafeAreaLayout, SafeAreaLayoutElement, SaveAreaInset, Toolbar, ToolbarMenu } from '../../component';

export const TodoTabBar = (props: TodoScreenProps): SafeAreaLayoutElement => {
  const menu: ToolbarMenu = [
    { title: 'Add', icon: Icons.plusIcon },
    { title: 'Log Out', icon: Icons.logoutIcon },
  ];

  const onMenuItemSelect = (index: number): void => {
    const { [index]: selectedItem } = menu;

    switch (selectedItem.title) {
      case 'Log Out':
        props.navigation.navigate(AppRoute.AUTH);
        break;
      case 'Add':
        props.navigation.navigate(AppRoute.TODO_ADD, { isReduxSauce: false, todo: undefined });
        break;  
      default:
        props.navigation.navigate(selectedItem.title);
        break;
    }
  };

  const onTabSelect = (index: number): void => {
    const selectedTabRoute: string = props.state.routeNames[index];
    props.navigation.navigate(selectedTabRoute, { isReduxSauce: false });
  };

  const createNavigationTabForRoute = (route): TabElement => {
    const { options } = props.descriptors[route.key];
    return (
      <Tab
        key={route.key}
        title={options.title}
        icon={options.tabBarIcon}
      />
    );
  };

  return (
    <SafeAreaLayout insets={SaveAreaInset.TOP}>
      <Toolbar
        title='Todo Sample 🐱'
        onMenuItemSelect={onMenuItemSelect}
        menu={menu}
        backIcon={Icons.menuIcon}
        onBackPress={props.navigation.toggleDrawer}
      />
      <TabBar
        selectedIndex={props.state.index}
        onSelect={onTabSelect}>
        {props.state.routes.map(createNavigationTabForRoute)}
      </TabBar>
      <Divider/>
    </SafeAreaLayout>
  );
};
