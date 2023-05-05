import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsList from "../../components/PostList/PostsList";
import data from "../../assets/data/posts";

const BottomTabsProf = createBottomTabNavigator();

export const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground source={require("../../assets/images/bg_mount.jpg")} style={styles.backgroundImg}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
              <Text style={styles.title}>Natali Romanova</Text>
              {data.map((item) => (
                <PostsList
                  key={item.id}
                  img={require("../../assets/data/postsImages/Rectangle23.png")}
                  text={item.name}
                  msgs={0}
                  location={item.location}
                />
              ))}
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  logoutButton: {
    marginLeft: 350,
    marginTop: -40,
  },
  container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    width: "100%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginTop: 200,
  },
  //   containerKeyB: {
  //     justifyContent: "flex-end",
  //   },
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
    borderColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
  },
  //   pfotoContainer: {
  //     marginTop: -60,
  //     height: 120,
  //     width: 120,
  //     backgroundColor: "#F6F6F6",
  //     borderRadius: 16,
  //     overflow: "visible",
  //   },

  //   addbutton: {
  //     marginTop: -40,
  //     left: "90%",
  //     height: 25,
  //     width: 25,
  //     pointerEvents: "auto",
  //   },
  //   addButton: {
  //     backgroundColor: "#FF6C00",
  //     height: 40,
  //     width: 70,
  //     justifyContent: "center",
  //     alignItems: "center",
  //     borderRadius: 20,
  //   },
  title: {
    fontWeight: "500",
    fontSize: 30,
    marginTop: 32,
    lineHeight: 35,
  },
  inputLogin: {
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 50,
    borderRadius: 8,
    marginTop: 33,
    padding: 16,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  inputMailPassw: {
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 50,
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    position: "relative",
  },
  passwShowText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  passwShow: {
    top: -34,
    left: 130,
  },
  registerButton: {
    backgroundColor: "#FF6C00",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 44,
  },
  registerButtonText: {
    color: "#fff",
    fontWeight: "400",
  },
  loginLink: {
    marginTop: 16,
    marginBottom: 66,
  },
  loginLinkText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
});
