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
          <Text style={{ marginLeft: 8, fontFamily: "Roboto-Regular", fontSize: 16 }}>{msgs}</Text>
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
    marginBottom: 34,
  },
  postImgContainer: {
    width: "100%",
    height: 240,
  },
  postImg: {
    width: "100%",
    flex: 1,
    resizeMode: "cover",
    borderRadius: 16,
  },
  postTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
    textAlign: "left",
    marginTop: 8,
  },
  postInfoContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  postInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  postLocationWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  postInfoLink: {
    marginLeft: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
