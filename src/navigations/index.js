import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import {GlobalContext} from '../context/Provider';
import SplashScreen from 'react-native-splash-screen';
// import {navigationRef} from './SideMenu/RootNavigator';

const AppNavContainer = () => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);
  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);
  const [authLoaded, setAuthLoaded] = useState(false);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setAuthLoaded(true);

        setIsAuthenticated(true);
      } else {
        setAuthLoaded(true);

        setIsAuthenticated(false);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getUser();
  }, [isLoggedIn]);

  useEffect(() => {
    // SplashScreen.hide();
  }, []);

  return (
    <>
      {/* {authLoaded ? ( */}
        {/* <NavigationContainer ref={navigationRef}> */}
        <NavigationContainer >
          {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      {/* ) : (
        <ActivityIndicator />
      )} */}
    </>
  );
};

export default AppNavContainer;
