import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN, REGISTER} from '../constants/RouteNames';
import Login from '../screens/login/Index';
import Signup from '../screens/register/Index';

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
      <AuthStack.Screen name={REGISTER} component={Signup}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
