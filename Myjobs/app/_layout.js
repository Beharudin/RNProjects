import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    DMBBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMBMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMBRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded) return null;

  return <Stack onLayout={onLayoutRootView} />;
}
