import { createStackNavigator} from "@react-navigation/stack"
import Home from "../screens/Home"
import React from "react"
import ReviewDetails from "../screens/ReviewDetails"
import { Animated } from 'react-native'
import DrawerIcon from "../shared/DrawerIcon";
import HomeHeaderTitle from "../components/HomeHeaderTitle";

const Stack = createStackNavigator()

const forFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};

function HomeStack({ navigation }) {

  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
        headerTitleStyle: {
          color: 'white',
          fontSize: 24,
          fontWeight: '500'
        }
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <HomeHeaderTitle/>,
          headerLeft: () => <DrawerIcon/>
        }}
      />
      <Stack.Screen
        name="ReviewDetail"
        component={ReviewDetails}
        options={{
          headerStyleInterpolator: forFade,
          title: 'Detail',
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack
