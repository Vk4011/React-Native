import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Background from "./Screens/Background";
import Scroll from "./Screens/Scroll";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/Home";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Background"
            component={Background}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Scroll"
            component={Scroll}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
