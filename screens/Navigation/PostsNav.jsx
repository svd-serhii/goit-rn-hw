import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { CreatePostScreen } from "../CreatePostsScreen/CreatePostsScreen";

const BottomTabs = createBottomTabNavigator();

export const PostsNav = ({ navigation }) => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { height: 80, borderBottomColor: "#E8E8E8", borderBottomWidth: 2 },
      }}
    >
      <BottomTabs.Screen
        options={{
          tabBarIcon: () => {
            return (
              <TouchableOpacity
                style={styles.deleteButton}
                activeOpacity={0.5}
                onPress={() => navigation.navigate("Home", { screen: "PostsScreen" })}
              >
                <EvilIcons name="trash" size={24} color="black" />
              </TouchableOpacity>
            );
          },
          headerLeft: () => (
            <TouchableOpacity
              style={styles.logoutButton}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Home", { screen: "PostsScreen" })}
            >
              <Ionicons name="arrow-back-sharp" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: { paddingLeft: 10 },
          headerTitleAlign: "center",
          headerTitleStyle: { paddingBottom: 5 },
        }}
        name="Create post"
        component={CreatePostScreen}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  deleteButton: {
    backgroundColor: "#F6F6F6",
    height: 40,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
