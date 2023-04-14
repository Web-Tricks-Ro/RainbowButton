import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ComponentScreen from "../screens/ComponentsScreen";

const Stack = createStackNavigator();

const ComponentsNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ComponentsPort"
      component={ComponentScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default ComponentsNavigation;
