import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN, REGISTER} from '../constants/RouteNames';
import Login from '../screens/login';
import Signup from '../screens/register';

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
      <AuthStack.Screen name={REGISTER} component={Signup}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
