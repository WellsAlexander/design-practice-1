import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#8e8e93", // Light gray color
        tabBarInactiveTintColor: "#8e8e93", // Dark gray color
        tabBarStyle: {
          backgroundColor: "#1F1F25",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          overflow: "visible",
          position: "absolute",
          borderTopWidth: 0,
          height: 100, // Increased to fit larger icons
          paddingHorizontal: 15,
        },
        tabBarIconStyle: {
          width: 80,
          marginTop: 15,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="meal"
        options={{
          title: "Meal",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="cutlery" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="new_workout"
        options={{
          title: "",
          tabBarIcon: () => (
            <FontAwesome
              name="plus-circle"
              size={70}
              color={"#d5ff5f"}
              style={{
                position: "absolute",
                top: -32,
              }}
            />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="statistics"
        options={{
          title: "Statistics",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="line-chart" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="rewards"
        options={{
          title: "Rewards",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="trophy" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
