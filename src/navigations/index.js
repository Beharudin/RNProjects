import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';

const AppNavContainer = () => {
  return (
    <NavigationContainer>
      {/* <HomeNavigator /> */}
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default AppNavContainer;
