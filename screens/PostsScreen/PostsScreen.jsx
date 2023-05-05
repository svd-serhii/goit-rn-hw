import { SafeAreaView, ScrollView } from "react-native";
import React from "react";
import UserProfile from "../../components/UserProfile/UserProfile";
import { PostsList } from "../../components/PostList/PostsList";
import data from "../../assets/data/posts";

export const PostsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ justifyContent: "flex-start", alignItems: "center", overflow: "visible" }}>
      <ScrollView>
        <UserProfile
          avatar={require("../../assets/images/Rectangle22.png")}
          name="Natali Romanova"
          email="email@example.com"
        />
        {data.map((item) => (
          <PostsList
            key={item.id}
            img={require("../../assets/data/postsImages/Rectangle23.png")}
            text={item.name}
            msgs={0}
            location={item.location}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
