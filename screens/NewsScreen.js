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

function NewsScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>News UI</Text>
    </View>
  );
}

export default NewsScreen;
