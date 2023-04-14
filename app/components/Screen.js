import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View, StatusBar } from "react-native";
import colors from "../config/colors";
function Screen({ children, style }) {
  return (
    <SafeAreaView nestedScrollEnabled={true} style={[styles.screen, style]}>
      <StatusBar barStyle="default" />
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.bgsite,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
