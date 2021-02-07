import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Image, StatusBar, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import MoreScreen from "./screens/MoreScreen";
import NewsScreen from "./screens/NewsScreen";
import SearchScreen from "./screens/SearchScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* Move to NavBar/Header component */}
      <StatusBar style="light" />
      <View
        style={{
          // backgroundColor: "black",
          alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <Image source={require("./img/logo.png")} />
      </View>

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // Customise navigation icons
            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "ios-search" : "ios-search-outline";
            } else if (route.name === "News") {
              iconName = focused ? "ios-newspaper" : "ios-newspaper-outline";
            } else if (route.name === "More") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        // Customise colours
        tabBarOptions={{
          activeTintColor: "white",
          inactiveTintColor: "grey",
          style: {
            backgroundColor: "black",
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
