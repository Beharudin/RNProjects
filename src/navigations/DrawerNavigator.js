import { createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';

const Drawer = createDrawerNavigator();

function DrawerNavigtor() {
  return (
    <Drawer.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Drawer.Screen
        name='Home'
        component={HomeNavigator}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigtor;