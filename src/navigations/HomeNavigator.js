import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';

const Contacts = () => {
  return (
    <View>
      <Text>Contacts Page</Text>
    </View>
  );
};
const ContactDetails = () => {
  return (
    <View>
      <Text>ContactDetails Page</Text>
    </View>
  );
};
const CreateContact = () => {
  return (
    <View>
      <Text>CreateContact Page</Text>
    </View>
  );
};
const Settings = () => {
  return (
    <View>
      <Text>Settings Page</Text>
    </View>
  );
};

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName='Contacts'
    screenOptions={{
      drawerLabel: () => null, // Hide the title for the Drawer Navigator item
    }}>
      <HomeStack.Screen name="Contacts" 
      component={Contacts}/>
      <HomeStack.Screen name="Contact Details" component={ContactDetails}/>
      <HomeStack.Screen name="Create Contact" component={CreateContact}/>
      <HomeStack.Screen name="Settings" component={Settings}/>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
