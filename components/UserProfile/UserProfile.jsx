import { View, StyleSheet, ImageBackground, Text } from "react-native";
import React from "react";

export const UserProfile = ({ avatar, name, email }) => {
  return (
    <View style={styles.userContainer}>
      <ImageBackground source={avatar} style={styles.userImg}></ImageBackground>
      <View style={styles.userInfoContainer}>
        <Text style={styles.userName}>{name}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignSelf: "flex-start",
    marginTop: 32,
    marginBottom: 20,
    marginLeft: 20,
  },
  userImg: {
    borderRadius: 15,
    width: 60,
    height: 60,
  },
  userInfoContainer: {
    justifyContent: "center",
    marginLeft: 20,
  },
  userName: {
    fontWeight: "700",
  },
});
