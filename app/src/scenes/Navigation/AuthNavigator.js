import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

//local imports
import {SplashScreen} from '../SplashScreen';
import Login from '../Login';
import {DrawerNavigator} from './DrawerNavigator';
import {TotalPrice} from '../TotalPrice';
import {BackButton} from '../../components/index';
import {OrderDone} from '../OrderDone';
import Otp from '../Otp';
import {UserType} from '../UserType';
import R from '../../R';

const AuthStack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator screenOptions={{headerShown: false}}>
        <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="UserType" component={UserType} />
        <AuthStack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        <AuthStack.Screen name="TotalPrice" component={TotalPrice} />
        <AuthStack.Screen name="OrderDone" component={OrderDoneNavigator} />
        <AuthStack.Screen name="Otp" component={Otp} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

const TotalPriceNavigator = ({navigation}) => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="TotalPrice"
        component={TotalPrice}
        options={{
          headerTitle: 'TotalPrice',
          headerStyle: {
            backgroundColor: '#800000',
          },
          headerTintColor: '#fff',
          headerLeft: () => (
            <BackButton
              source={R.images.arrow}
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
    </AuthStack.Navigator>
  );
};
const OrderDoneNavigator = ({navigation}) => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="OrderDone"
        component={OrderDone}
        options={{
          headerTitle: 'OrderDone',
          headerStyle: {
            backgroundColor: '#800000',
          },
          headerTintColor: '#fff',
          headerLeft: () => (
            <BackButton
              source={R.images.arrow}
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
    </AuthStack.Navigator>
  );
};
