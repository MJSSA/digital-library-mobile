import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});

function HomeScreen() {
  return (
    <View
      style={styles.container}
      // options={{
      //   title: "My home",
      //   headerStyle: {
      //     backgroundColor: "#f4511e",
      //   },
      // }}
    >
      <StatusBar style="light" />
      <Text style={{ color: "white" }}>Home UI</Text>
    </View>
  );
}

export default HomeScreen;
