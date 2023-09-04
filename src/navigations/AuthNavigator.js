
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';

const Login = () => {
  return (
    <View>
      <Text>Login Page</Text>
    </View>
  );
};
const Signup = () => {
  return (
    <View>
      <Text>Sign Up Page</Text>
    </View>
  );
};

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login}></AuthStack.Screen>
      <AuthStack.Screen name="Register" component={Signup}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
