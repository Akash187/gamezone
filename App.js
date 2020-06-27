import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./routes/HomeStack";
import Drawer from "./routes/Drawer";

export default function App() {
  const [fontsLoaded] = useFonts({
    'salsamiqsans-regular' : require('./fonts/BalsamiqSans-Regular.ttf'),
    'salsamiqsans-bold': require('./fonts/BalsamiqSans-Bold.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Drawer/>
    </NavigationContainer>
  );
}
