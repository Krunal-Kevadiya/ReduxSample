import React from 'react';
import { Icons } from '../theme';
import { ImageProps } from 'react-native';
import { OverflowMenu, OverflowMenuItemType, StyleType, TopNavigation, TopNavigationAction, TopNavigationActionElement, TopNavigationProps } from 'react-native-ui-kitten';

export type ToolbarMenu = OverflowMenuItemType[];

export interface ToolbarProps extends TopNavigationProps {
  menu?: ToolbarMenu;
  backIcon?: (style: StyleType) => React.ReactElement<ImageProps>;
  menuIcon?: (style: StyleType) => React.ReactElement<ImageProps>;
  onMenuItemSelect?: (index: number) => void;
  onBackPress?: () => void;
}

export const Toolbar = (props: ToolbarProps): TopNavigationActionElement => {

  const { menu, backIcon, menuIcon, onMenuItemSelect, onBackPress, ...topNavigationProps } = props;
  const [menuVisible, setMenuVisible] = React.useState(false);

  const onMenuSelect = (index: number) => {
    setMenuVisible(false);
    onMenuItemSelect && onMenuItemSelect(index);
  };

  const onMenuActionPress = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = (menu: OverflowMenuItemType[]): TopNavigationActionElement => (
    <OverflowMenu
      visible={menuVisible}
      data={menu}
      placement='bottom end'
      onSelect={onMenuSelect}
      onBackdropPress={onMenuActionPress}>
      <TopNavigationAction
        icon={props.menuIcon || Icons.moreVerticalIcon}
        onPress={onMenuActionPress}
      />
    </OverflowMenu>
  );

  const renderBackAction = (): TopNavigationActionElement => (
    <TopNavigationAction
      icon={props.backIcon || Icons.backIcon}
      onPress={onBackPress}
    />
  );

  return (
    <React.Fragment>
      <TopNavigation
        {...topNavigationProps}
        alignment='center'
        leftControl={onBackPress && renderBackAction()}
        rightControls={menu && renderMenuAction(menu)}
      />
    </React.Fragment>
  );
};
