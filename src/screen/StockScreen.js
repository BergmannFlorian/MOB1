import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import StockComponent from '../components/StockComponent.js';

const Stack = createStackNavigator();

function StockScreen() {
  return (
    <Stack.Navigator initialRouteName="Stock">
      <Stack.Screen
        name="Stock"
        component={StockComponent}
        options={{
          headerStyle: {
            backgroundColor: '#0f20d9',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
}

export default StockScreen;