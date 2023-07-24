import { useState } from "react";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import DrawerNavigator from "./routes/Drawer";


const getFonts = async () => {
  await Font.loadAsync({
    'nunito-regular': require('./assets/Fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/Fonts/Nunito-Bold.ttf'),
  });
};


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} onError={console.warn} />
    );
  } else return <DrawerNavigator />;
}
