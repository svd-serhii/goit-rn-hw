import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { PostsList } from "../../components/PostList/PostsList";
import { CommentsScreen } from "../nestedScreens/CommentsScreen";
import { MapScreen } from "../nestedScreens/MapScreen";
import { DefaultPostScreen } from "../nestedScreens/DefaultPostScreen";

const PostsNavigation = createStackNavigator();

export const PostsScreen = ({ navigation }) => {
  return (
    <PostsNavigation.Navigator screenOptions={{ headerShown: false }} initialRouteName="DefaultPostScreen">
      <PostsNavigation.Screen name="DefaultPostScreen" component={DefaultPostScreen} />
      <PostsNavigation.Screen name="Comments" component={CommentsScreen} />
      <PostsNavigation.Screen name="Map" component={MapScreen}></PostsNavigation.Screen>
    </PostsNavigation.Navigator>
  );
};
