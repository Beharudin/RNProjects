import React, {useContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import {GlobalContext} from '../context/provider';

const AppNavContainer = () => {
  const {
    AuthState: {isLoggedIn},
  } = useContext(GlobalContext);

  console.log('isLoggedIn: ', isLoggedIn);
  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
