import { View, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          bottom: 0,
          overflow: "hidden",
          borderWidth: 0.3,
          borderTopColor: colors.primary,
        }}
      >
        <BlurView
          intensity={80}
          tint="dark"
          style={{
            flex: 1,
            flexDirection: "row",
            height: 80,
            paddingBottom: 20,
          }}
        >
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];

            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate({ name: route.name, merge: true });
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: "tabLongPress",
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                key={label}
                onLongPress={onLongPress}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  marginVertical: 8,
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                  }}
                >
                  {label === "Home" ? (
                    <MaterialCommunityIcons
                      name={"home-outline"}
                      color={isFocused ? colors.magenta : colors.white}
                      size={32}
                    />
                  ) : (
                    <></>
                  )}
                  {label === "Components" ? (
                    <MaterialCommunityIcons
                      name={"code-braces-box"}
                      color={isFocused ? colors.magenta : colors.white}
                      size={32}
                    />
                  ) : (
                    <></>
                  )}
                  {label === "Pages" ? (
                    <MaterialCommunityIcons
                      name={"page-layout-body"}
                      color={isFocused ? colors.magenta : colors.white}
                      size={32}
                    />
                  ) : (
                    <></>
                  )}
                  <Text
                    style={{
                      color: isFocused ? colors.magenta : colors.white,
                      fontSize: 12,
                    }}
                  >
                    {label}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </BlurView>
      </View>
    </View>
  );
}

export default MyTabBar;
