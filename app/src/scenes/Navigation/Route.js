import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import {DrawerNavigator} from './DrawerNavigator';
import R from '../../R';

export const Route = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={DrawerNavigator} />
        <Stack.Screen name="MyOrder" component={MyOrderNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
