import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cho1 from '../screens/catologue';

import Dash from '../screens/dashboard';
import BookDetail from '../screens/BookDetail';
import Cart from '../screens/cart';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Dash" options={{
      headerShown: false,
    }} >
         <Stack.Screen
        name="Dash"
        component={Dash}
        options={{
          headerShown: false,
        }}
      />
      
      <Stack.Screen
        name="Cat"
        component={Cho1}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen name="BookDetail" component={BookDetail} options={{
      headerShown: false,
    }} />
    <Stack.Screen name="Cart" component={Cart} options={{
      headerShown: false,
    }} />
       
               
     

    </Stack.Navigator>
  );
};

export default StackNavigator;
