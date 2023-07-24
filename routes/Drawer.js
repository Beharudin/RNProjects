import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import About from "../screens/About";
import { MaterialIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#fff", // Set the background color of the drawer
            width: 230,
          },
          drawerActiveTintColor: "#007BFF", // Set the active label text color
          drawerInactiveTintColor: "#000", // Set the inactive label text color
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          initialParams={{ username: "Baharudin" }}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Review Details"
          component={ReviewDetails}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <MaterialIcons name="info" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <MaterialIcons name="info" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
