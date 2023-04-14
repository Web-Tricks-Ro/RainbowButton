import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";

function RainbowIcon({
  name,
  backgroundColor = "#000",
  iconColor = "#fff",
  size,
  text,
  gradientz,
}) {
  return (
    <View style={{ paddingVertical: 20 }}>
      <View
        style={{
          backgroundColor: colors.black,
          shadowColor: colors.danger,
          shadowOffset: { width: 2, height: 2 },
          shadowOpacity: 1,
          shadowRadius: 10,
          borderRadius: 30,
        }}
      >
        <LinearGradient
          colors={colors.gradientPinky}
          {...deg(60)}
          style={{
            padding: 15,
            borderRadius: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <MaterialCommunityIcons name={name} color={iconColor} size={size} />
            <Text
              style={{
                fontSize: 22,
                color: colors.white,
                marginLeft: 10,
              }}
            >
              {text}
            </Text>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}

export default RainbowIcon;
