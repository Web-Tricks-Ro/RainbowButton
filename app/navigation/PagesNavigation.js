import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PagesScreen from "../screens/PagesScreen";

const Stack = createStackNavigator();

const PagesNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="PagesPort"
      component={PagesScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default PagesNavigation;
