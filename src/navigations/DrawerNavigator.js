import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';

const Drawer = createDrawerNavigator();

function DrawerNavigtor() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeNavigator} />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
}

export default DrawerNavigtor;