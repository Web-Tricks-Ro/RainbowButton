import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyTabBar from "./MyTabBar";
import HomeNavigation from "./HomeNavigation";
import ComponentsNavigation from "./ComponentsNavigation";
import PagesNavigation from "./PagesNavigation";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    initialRouteName={"Home"}
    tabBar={(props) => <MyTabBar {...props} />}
  >
    <Tab.Screen
      name="Home"
      component={HomeNavigation}
      size={33}
      options={{
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Components"
      component={ComponentsNavigation}
      options={{
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Pages"
      component={PagesNavigation}
      options={{
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
