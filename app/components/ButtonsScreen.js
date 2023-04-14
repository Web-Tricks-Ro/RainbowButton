import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View, StatusBar } from "react-native";

import colors from "../config/colors";
import Screen from "../components/Screen";

import RainbowIcon from "./RainbowIcon";

function ButtonsScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Components by WebTricks</Text>

        <View style={{ padding: 30 }}>
          <Text style={styles.subTitle}>Rainbow Button</Text>
          <RainbowIcon
            name={"home-outline"}
            size={30}
            iconColor={colors.white}
            text={"Get PRO Access"}
            gradientz={colors.gradientPinky}
          ></RainbowIcon>
          <Text style={styles.subTitle}>Text Only</Text>
          <RainbowIcon
            name={""}
            size={30}
            iconColor={colors.white}
            text={"Winn a E-Bike"}
            gradientz={colors.gradientPinky}
          ></RainbowIcon>
          <Text style={styles.subTitle}>Icon Only</Text>
          <RainbowIcon
            name={"cloud-upload-outline"}
            size={50}
            iconColor={colors.white}
            text={""}
            gradientz={colors.gradientPinky}
          ></RainbowIcon>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  iconContainer: {
    padding: 20,
    backgroundColor: colors.bgsite,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 0.3,
    borderColor: colors.white,
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  title: {
    padding: 5,
    fontSize: 28,
    fontWeight: "bold",
    color: colors.white,
    marginBottom: 20,
  },
  subTitle: {
    paddingVertical: 20,
    fontSize: 20,
    fontWeight: "200",
    color: colors.white,
    textAlign: "center",
  },
  shadow: {
    shadowColor: colors.black,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 7,
    padding: 20,
    alignItems: "center",
  },
});

export default ButtonsScreen;
