import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

const AppNavContainer = () => {
  return (
    <NavigationContainer>
      {/* <HomeNavigator /> */}
      {/* <AuthNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNavContainer;
