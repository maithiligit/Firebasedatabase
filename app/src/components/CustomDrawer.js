import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

export const CustomDrawer = (props) => {
  // const {state, ...rest} = props;
  // console.log(
  //   '🚀 ~ file: CustomDrawer.js ~ line 10 ~ CustomDrawer ~ state',
  //   state,
  // );
  // const newState = {...state};
  // newState.routes = newState.routes.filter((item) => item.name !== 'Home');
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList state={newState} {...rest} /> */}
      <DrawerItemList {...props} />
      <DrawerItem label="Log Out" />
    </DrawerContentScrollView>
  );
};
