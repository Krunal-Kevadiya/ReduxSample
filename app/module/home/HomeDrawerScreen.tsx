
import React from 'react';
import { Images } from '../../theme';
import styles from './HomeDrawerStyles';
import { DrawerHomeScreenProps } from '../../navigation';
import { ImageBackground, ImageBackgroundProps } from 'react-native';
import { Drawer, DrawerElement, MenuItemType } from 'react-native-ui-kitten';

const DrawerHeader = (): React.ReactElement<ImageBackgroundProps> => (
  <ImageBackground
    style={styles.header}
    source={Images.imageBackground}
  />
);

export const HomeDrawer = (props: DrawerHomeScreenProps): DrawerElement => {

  const onMenuItemSelect = (index: number): void => {
    const selectedTabRoute: string = props.state.routeNames[index];
    props.navigation.navigate(selectedTabRoute, { 'ScreenType': selectedTabRoute });
    props.navigation.closeDrawer();
  };

  const createNavigationItemForRoute = (route): MenuItemType => {
    const { options } = props.descriptors[route.key];
    return {
      routeName: route.name,
      title: options.title,
      icon: options.drawerIcon,
    };
  };

  return (
    <Drawer
      header={DrawerHeader}
      data={props.state.routes.map(createNavigationItemForRoute)}
      onSelect={onMenuItemSelect}
    />
  );
};