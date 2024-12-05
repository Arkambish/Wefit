import { Tabs } from "expo-router";
import React from "react";
import { View, Text, Image } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import icons from "@/constants/icons";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center mt-3">
      {focused ? (
        <View className="bg-[#BBF246] rounded-full px-4 py-2 flex-row items-center w-28">
          <Image
            source={icon}
            resizeMode="contain"
            className="w-6 h-6 mr-2"
            tintColor="#192126" // Icon color inside the pill
          />
          <Text className="font-psemibold w-full text-xs text-[#192126]">
            {name}
          </Text>
        </View>
      ) : (
        <View className="items-center justify-center gap-1">
          <Image
            source={icon}
            resizeMode="contain"
            className="w-6 h-6"
            tintColor={color} // Inactive icon color
          />
        </View>
      )}
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#BBF246",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "#192126",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              focused={focused}
              name="Home"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              focused={focused}
              name="Profile"
            />
          ),
        }}
      />
    </Tabs>
  );
}
