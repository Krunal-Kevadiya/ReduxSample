import React from 'react';
import {
  Icon,
  IconElement,
} from 'react-native-ui-kitten';

const BackIcon = (style): IconElement => (
  <Icon {...style} name='arrow-back'/>
);

const LayoutIcon = (style): IconElement => (
  <Icon {...style} name='layout-outline'/>
);

const PersonIcon = (style): IconElement => (
  <Icon {...style} name='person-outline'/>
);

const MoreVerticalIcon = (style): IconElement => (
  <Icon {...style} name='more-vertical'/>
);

const LogoutIcon = (style): IconElement => (
  <Icon {...style} name='log-out-outline'/>
);

const InfoIcon = (style): IconElement => (
  <Icon {...style} name='info-outline'/>
);

const AlertTriangleIcon = (style): IconElement => (
  <Icon {...style} name='alert-triangle-outline'/>
);

const EyeIcon = (style): IconElement => (
  <Icon {...style} name='eye-outline'/>
);

const EyeOffIcon = (style): IconElement => (
  <Icon {...style} name='eye-off-outline'/>
);

const MenuIcon = (style): IconElement => (
  <Icon {...style} name='menu-outline'/>
);

const HomeIcon = (style): IconElement => (
  <Icon {...style} name='home-outline'/>
);

const DoneIcon = (style): IconElement => (
  <Icon {...style} name='checkmark-outline'/>
);

const DoneAllIcon = (style): IconElement => (
  <Icon {...style} name='done-all-outline'/>
);

const GridIcon = (style): IconElement => (
  <Icon {...style} name='grid-outline'/>
);

const SearchIcon = (style): IconElement => (
  <Icon {...style} name='search-outline'/>
);

const PlusIcon = (style): IconElement => (
  <Icon {...style} name='plus-outline'/>
);

const Icons = {
  backIcon: BackIcon,
  layoutIcon: LayoutIcon,
  personIcon: PersonIcon,
  moreVerticalIcon: MoreVerticalIcon,
  logoutIcon: LogoutIcon,
  infoIcon: InfoIcon, 
  alertTriangleIcon: AlertTriangleIcon,
  eyeIcon: EyeIcon,
  eyeOffIcon: EyeOffIcon, 
  menuIcon: MenuIcon,
  homeIcon: HomeIcon,
  doneIcon: DoneIcon,
  doneAllIcon: DoneAllIcon,
  gridIcon: GridIcon,
  searchIcon: SearchIcon,
  plusIcon: PlusIcon,
  reduxIcon: require('./redux_logo.png')
};

export default Icons;  