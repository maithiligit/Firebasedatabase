import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
//local imports
import {MyOrder} from '../MyOrder';
import {Home} from '../Home';
import {Logout} from '../Logout';
import {Owner} from '../user/Uhome';
import {UmyOrder} from '../user/UmyOrder';
import {AboutUs} from '../AboutUS';
import R from '../../R';

import {BackButton} from '../../components/index';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = (props) => {
  console.log(props.route.params.isOwner);
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        // activeTintColor: '#000',
        labelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          color: '#800000',
        },
      }}>
      {props.route.params.isOwner ? (
        <Drawer.Screen name="Home" component={HomeNavigator} />
      ) : (
        <Drawer.Screen name="Owner" component={UhomeNavigator} />
      )}
      {props.route.params.isOwner ? (
        <Drawer.Screen name="MyOrder" component={MyOrderNavigator} />
      ) : (
        <Drawer.Screen name="UmyOrder" component={UmyOrderNavigator} />
      )}
      <Drawer.Screen name="AboutUs" component={AboutUsNavigator} />
      <Drawer.Screen name="LogOut" component={LogoutNavigator} />
    </Drawer.Navigator>
  );
};

const AboutUsNavigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          headerTitle: 'AboutUs',
          headerStyle: {
            backgroundColor: '#800000',
          },
          headerTintColor: '#fff',
          headerLeft: () => (
            <BackButton
              source={R.images.menu}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const LogoutNavigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Logout"
        component={Logout}
        options={{
          headerTitle: 'Logout',
          headerStyle: {
            backgroundColor: '#800000',
          },
          headerTintColor: '#fff',
          headerLeft: () => (
            <BackButton
              source={R.images.menu}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const HomeNavigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Home',
          headerStyle: {
            backgroundColor: '#800000',
          },
          headerTintColor: '#fff',
          headerLeft: () => (
            <BackButton
              source={R.images.menu}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const UhomeNavigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Owner"
        component={Owner}
        options={{
          headerTitle: 'Home',
          headerStyle: {
            backgroundColor: '#800000',
          },
          headerTintColor: '#fff',
          headerLeft: () => (
            <BackButton
              source={R.images.menu}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
const MyOrderNavigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyOrder"
        component={MyOrder}
        options={{
          headerTitle: 'MyOrder',
          headerStyle: {
            backgroundColor: '#800000',
          },
          headerTintColor: '#fff',
          headerLeft: () => (
            <BackButton
              source={R.images.menu}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const UmyOrderNavigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UmyOrder"
        component={UmyOrder}
        options={{
          headerTitle: 'UmyOrder',
          headerStyle: {
            backgroundColor: '#800000',
          },
          headerTintColor: '#fff',
          headerLeft: () => (
            <BackButton
              source={R.images.menu}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
