import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PostsList } from "../../components/PostList/PostsList";
import data from "../../assets/data/posts";

const BottomTabsProf = createBottomTabNavigator();

export const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.wrap}>
      <ImageBackground source={require("../../assets/images/bg_mount.jpg")} style={styles.backgroundImg}>
        <View style={styles.container}>
          <View style={styles.photoContainer}>
            <Image source={require("../../assets/images/Rectangle22.png")} style={styles.userPhoto} />
            <TouchableOpacity
              style={{
                ...styles.addButton,
                borderColor: "#E8E8E8",
              }}
              activeOpacity={0.7}
            >
              <Image source={require("../../assets/images/removeUserImg.png")} style={styles.addUserPhotoBtnImg} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.logoutButton}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Home", { screen: "PostsScreen" })}
          >
            <Feather name="log-out" size={24} color="gray" />
          </TouchableOpacity>

          <View style={{ alignItems: "center", marginTop: 70 }}>
            <Text style={styles.loginTitle}>Natali Romanova</Text>
          </View>
          <ScrollView>
            <View style={{ flex: 1, marginTop: 33 }}>
              <SafeAreaView>
                <FlatList
                  data={data}
                  renderItem={({ item }) => (
                    <PostsList
                      key={item.id}
                      img={require("../../assets/data/postsImages/Rectangle24.png")}
                      text={item.name}
                      msgs={0}
                      location={item.location}
                    />
                  )}
                  keyExtractor={(item) => item.id}
                />
              </SafeAreaView>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  container: {
    position: "relative",
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-end",
    width: "100%",
    paddingRight: 16,
    paddingLeft: 16,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginTop: 200,
  },

  photoContainer: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -60 }],
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },

  userPhoto: {
    width: "100%",
    flex: 1,
    resizeMode: "cover",
    borderRadius: 16,
  },

  addButton: {
    position: "absolute",
    bottom: 14,
    right: -12.5,
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 12.5,
    justifyContent: "center",
    alignItems: "center",
  },

  loginTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 35,
    color: "#212121",
  },
});
