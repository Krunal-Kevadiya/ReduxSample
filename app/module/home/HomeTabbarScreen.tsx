import React from 'react';
import { BottomHomeScreenProps } from '../../navigation';
import { SafeAreaLayout, SafeAreaLayoutElement, SaveAreaInset } from '../../component';
import { BottomNavigation, BottomNavigationTab, BottomNavigationTabElement, Divider } from 'react-native-ui-kitten';

export const HomeTabBar = (props: BottomHomeScreenProps): SafeAreaLayoutElement => {

  const onSelect = (index: number): void => {
    const selectedTabRoute: string = props.state.routeNames[index];
    props.navigation.navigate(selectedTabRoute);
  };

  const createNavigationTabForRoute = (route): BottomNavigationTabElement => {
    const { options } = props.descriptors[route.key];
    return (
      <BottomNavigationTab
        key={route.key}
        title={options.title}
        icon={options.tabBarIcon}
      />
    );
  };

  return (
    <SafeAreaLayout insets={SaveAreaInset.BOTTOM}>
      <Divider/>
      <BottomNavigation
        appearance='noIndicator'
        selectedIndex={props.state.index}
        onSelect={onSelect}>
        {props.state.routes.map(createNavigationTabForRoute)}
      </BottomNavigation>
    </SafeAreaLayout>
  );
};