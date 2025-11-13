import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddItemScreen from '../screens/AddItemScreen';
import FilterScreen from '../screens/FilterScreen';

export type RootStackParamList = {
  Home: undefined;
  AddItem: undefined;
  Filter: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Menu' }} />
      <Stack.Screen name="AddItem" component={AddItemScreen} options={{ title: 'Add Menu Item' }} />
      <Stack.Screen name="Filter" component={FilterScreen} options={{ title: 'Filter by Course' }} />
    </Stack.Navigator>
  );
}
