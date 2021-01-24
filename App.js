import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import {NavLink} from "react-router-dom"
import Navbar from "./layout/Navbar";

export default function App() {
  return (
    <View
      style={styles.container}
      options={{
        title: "My home",
        headerStyle: {
          backgroundColor: "#f4511e",
        },
      }}
    >
      <Navbar />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <BottomMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
