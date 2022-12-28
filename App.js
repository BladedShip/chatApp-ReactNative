import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Chat from "./screens/Chat";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

ChatStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

RootNavigator = () => {
  return (
    <NavigationContainer>
      <ChatStack />
    </NavigationContainer>
  );
}

const home = () => {
  return <RootNavigator />
}

export default home;