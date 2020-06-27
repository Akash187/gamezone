import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeStack from "./HomeStack"
import AboutStack from "./AboutStack"
import React from "react"

const Drawer = createDrawerNavigator()

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="About" component={AboutStack} />
    </Drawer.Navigator>
  );
}
