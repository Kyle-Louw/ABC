import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuProvider } from './context/MenuContext';
import MainNavigator from './navigation/MainNavigator';

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </MenuProvider>
  );
}
