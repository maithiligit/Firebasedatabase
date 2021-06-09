import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import {Home} from './Home';
import {MyOrder} from './MyOrder';

export const Route = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MyOrder" component={MyOrder} />
    </Stack.Navigator>
  );
};
