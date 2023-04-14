import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import RainbowIcon from "../components/RainbowIcon";
import colors from "../config/colors";
import Screen from "../components/Screen";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ComponentsScreen(navigation) {
  const [colorLeft, setColorLeft] = useState(colors.black);
  const [colorMid, setColorMid] = useState(colors.black);
  const [colorRight, setColorRight] = useState(colors.black);

  const [isVissibleLeft, setisVissibleLeft] = useState(false);
  const [isVissibleMid, setisVissibleMid] = useState(false);
  const [isVissibleRight, setisVissibleRight] = useState(false);
  return (
    <Screen>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: colors.white, padding: 10, fontSize: 25 }}>
              Dynamic Gradient Button
            </Text>
            <Text
              style={{ color: colors.white, paddingBottom: 5, fontSize: 18 }}
            >
              by WebTricks
            </Text>
            <Text
              style={{ color: colors.white, paddingBottom: 30, fontSize: 18 }}
            >
              React Native Components
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              opacity: isVissibleLeft ? 1 : 0,
              display: isVissibleLeft ? "flex" : "none",
            }}
          >
            <TouchableWithoutFeedback
              onPress={() => setColorLeft(colors.color1)}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                  backgroundColor: colors.color1,
                  alignContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  justifyContent: "center",
                  margin: 10,
                  borderWidth: 3,
                  borderColor:
                    colorLeft == colors.color1 ? colors.white : colors.black,
                }}
              ></View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => setColorLeft(colors.color2)}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                  backgroundColor: colors.color2,
                  alignContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  justifyContent: "center",
                  margin: 10,
                  borderWidth: 3,
                  borderColor:
                    colorLeft == colors.color2 ? colors.white : colors.black,
                }}
              ></View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => setColorLeft(colors.color3)}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                  backgroundColor: colors.color3,
                  alignContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  justifyContent: "center",
                  margin: 10,
                  borderWidth: 3,
                  borderColor:
                    colorLeft == colors.color3 ? colors.white : colors.black,
                }}
              ></View>
            </TouchableWithoutFeedback>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              opacity: isVissibleMid ? 1 : 0,
              display: isVissibleMid ? "flex" : "none",
            }}
          >
            <TouchableWithoutFeedback
              onPress={() => setColorMid(colors.color1)}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                  backgroundColor: colors.color1,
                  alignContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  justifyContent: "center",
                  margin: 10,
                  borderWidth: 3,
                  borderColor:
                    colorMid == colors.color1 ? colors.white : colors.black,
                }}
              ></View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => setColorMid(colors.color2)}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                  backgroundColor: colors.color2,
                  alignContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  justifyContent: "center",
                  margin: 10,
                  borderWidth: 3,
                  borderColor:
                    colorMid == colors.color2 ? colors.white : colors.black,
                }}
              ></View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => setColorMid(colors.color3)}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                  backgroundColor: colors.color3,
                  alignContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  justifyContent: "center",
                  margin: 10,
                  borderWidth: 3,
                  borderColor:
                    colorMid == colors.color3 ? colors.white : colors.black,
                }}
              ></View>
            </TouchableWithoutFeedback>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              opacity: isVissibleRight ? 1 : 0,
              display: isVissibleRight ? "flex" : "none",
            }}
          >
            <TouchableWithoutFeedback
              onPress={() => setColorRight(colors.color1)}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                  backgroundColor: colors.color1,
                  alignContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  justifyContent: "center",
                  margin: 10,
                  borderWidth: 3,
                  borderColor:
                    colorRight == colors.color1 ? colors.white : colors.black,
                }}
              ></View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => setColorRight(colors.color2)}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                  backgroundColor: colors.color2,
                  alignContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  justifyContent: "center",
                  margin: 10,
                  borderWidth: 3,
                  borderColor:
                    colorRight == colors.color2 ? colors.white : colors.black,
                }}
              ></View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => setColorRight(colors.color3)}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                  backgroundColor: colors.color3,
                  alignContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  justifyContent: "center",
                  margin: 10,
                  borderWidth: 3,
                  borderColor:
                    colorRight == colors.color3 ? colors.white : colors.black,
                }}
              ></View>
            </TouchableWithoutFeedback>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              color: colors.white,
              padding: 30,
            }}
          >
            <TouchableWithoutFeedback
              onPress={() => {
                setisVissibleLeft(true),
                  setisVissibleMid(false),
                  setisVissibleRight(false);
              }}
            >
              <Text
                style={{
                  color: isVissibleLeft ? colors.color2 : colors.white,
                  padding: 10,
                  fontSize: 22,
                  borderWidth: 1,
                  borderColor: colors.white,
                  borderRadius: 20,
                  margin: 5,
                }}
              >
                Set Left
              </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => {
                setisVissibleLeft(false),
                  setisVissibleMid(true),
                  setisVissibleRight(false);
              }}
            >
              <Text
                style={{
                  color: isVissibleMid ? colors.color2 : colors.white,
                  padding: 10,
                  fontSize: 22,
                  borderWidth: 1,
                  borderColor: colors.white,
                  borderRadius: 20,
                  margin: 5,
                }}
              >
                Set Mid
              </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => {
                setisVissibleLeft(false),
                  setisVissibleMid(false),
                  setisVissibleRight(true);
              }}
            >
              <Text
                style={{
                  color: isVissibleRight ? colors.color2 : colors.white,
                  padding: 10,
                  fontSize: 22,
                  borderWidth: 1,
                  borderColor: colors.white,
                  borderRadius: 20,
                  margin: 5,
                }}
              >
                Set Right
              </Text>
            </TouchableWithoutFeedback>
          </View>
          <View
            style={{
              backgroundColor: colors.black,
              shadowColor: colors.color2,
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 1,
              shadowRadius: 15,
              borderRadius: 40,
            }}
          >
            <LinearGradient
              colors={[colorLeft, colorMid, colorRight]}
              {...deg(40)}
              style={{
                padding: 15,
                borderRadius: 40,
                borderWidth: 0.3,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  paddingHorizontal: 10,
                }}
              >
                <MaterialCommunityIcons
                  name={"home"}
                  color={colors.white}
                  size={27}
                />
                <Text
                  style={{
                    fontSize: 22,
                    color: colors.white,
                    margin: 10,
                  }}
                >
                  My Button
                </Text>
              </View>
            </LinearGradient>
          </View>
          <View style={{ flexDirection: "row", marginTop: 50 }}>
            <View
              style={{
                backgroundColor: colors.black,
                shadowColor: colors.color2,
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 10,
                borderRadius: 20,
                margin: 20,
              }}
            >
              <LinearGradient
                colors={[colorLeft, colorMid]}
                {...deg(40)}
                style={{
                  padding: 15,
                  borderRadius: 20,
                  borderWidth: 0.3,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    paddingHorizontal: 10,
                  }}
                >
                  <MaterialCommunityIcons
                    name={"apple"}
                    color={colors.white}
                    size={27}
                  />
                </View>
              </LinearGradient>
            </View>
            <View
              style={{
                backgroundColor: colors.black,
                shadowColor: colors.color2,
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 10,
                borderRadius: 20,
                margin: 20,
              }}
            >
              <LinearGradient
                colors={[colorLeft, colorMid]}
                {...deg(40)}
                style={{
                  padding: 15,
                  borderRadius: 20,
                  borderWidth: 0.3,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    paddingHorizontal: 10,
                  }}
                >
                  <MaterialCommunityIcons
                    name={"android"}
                    color={colors.white}
                    size={27}
                  />
                </View>
              </LinearGradient>
            </View>
            <View
              style={{
                backgroundColor: colors.black,
                shadowColor: colors.color2,
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 10,
                borderRadius: 20,
                margin: 20,
              }}
            >
              <LinearGradient
                colors={[colorLeft, colorMid]}
                {...deg(40)}
                style={{
                  padding: 15,
                  borderRadius: 20,
                  borderWidth: 0.3,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    paddingHorizontal: 10,
                  }}
                >
                  <MaterialCommunityIcons
                    name={"microsoft-windows"}
                    color={colors.white}
                    size={27}
                  />
                </View>
              </LinearGradient>
            </View>
          </View>
          <Text
            style={{
              color: colors.white,
              paddingBottom: 5,
              paddingTop: 30,
              fontSize: 22,
            }}
          >
            FREE DOWNLOAD
          </Text>
          <Text style={{ color: colors.white, fontSize: 18 }}>
            http://webtricks.ro
          </Text>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    minHeight: Dimensions.get("window").height / 2,
  },
});

export default ComponentsScreen;
