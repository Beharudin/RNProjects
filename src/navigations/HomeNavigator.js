import {createStackNavigator} from '@react-navigation/stack';
import {
  CONTACT_DETAIL,
  CONTACT_LIST,
  CREATE_CONTACT,
  SETTINGS,
} from '../constants/RouteNames';
import Contacts from '../screens/contacts';
import ContactDetails from '../screens/contactDetails';
import CreateContact from '../screens/createContact';
import Settings from '../screens/settings';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} options={{HeaderLeft: () => (
        <TouchableOpacity>
          <Text>Nav</Text>
        </TouchableOpacity>
      ),}}/>
      <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetails} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
