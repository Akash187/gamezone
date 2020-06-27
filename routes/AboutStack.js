import { createStackNavigator} from "@react-navigation/stack"
import React from "react"
import About from "../screens/About";
import DrawerIcon from "../shared/DrawerIcon";

const Stack = createStackNavigator()

function AboutStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' }
      }}
    >
      <Stack.Screen
        name="Home"
        component={About}
        options={{
          title: 'GameZone',
          headerLeft: () => <DrawerIcon/>
        }}
      />
    </Stack.Navigator>
  );
}

export default AboutStack
