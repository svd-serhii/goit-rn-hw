import { View, StyleSheet, Image, Text } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

export const PostsList = ({ img, text, msgs, location }) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.postImgContainer}>
        <Image source={img} style={styles.postImg}></Image>
      </View>
      <Text style={styles.postTitle}>{text}</Text>
      <View style={styles.postInfoContainer}>
        <View style={styles.postInfo}>
          <Feather name="message-circle" size={18} color="gray" />
          <Text>{msgs}</Text>
        </View>
        <View style={styles.postLocationWrap}>
          <EvilIcons name="location" size={24} color="gray" />
          <Text style={styles.postInfoLink}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    width: 400,
    height: 400,
    justifyContent: "flex-start",
    padding: 10,
  },
  postImgContainer: {
    flex: 4,
    width: "100%",
    height: "100%",
    borderRadius: 15,
    overflow: "hidden",
  },
  postTitle: {
    textAlign: "left",
    marginTop: 8,
    fontWeight: "500",
    fontSize: 16,
  },
  postInfoContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  postLocationWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    padding: 10,
  },
  postInfoLink: {
    textDecorationLine: "underline",
  },
});
