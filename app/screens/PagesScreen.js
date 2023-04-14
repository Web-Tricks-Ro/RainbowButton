import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

function PagesScreen(navigation) {
  return (
    <View style={styles.container}>
      <Text>Pages!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PagesScreen;
