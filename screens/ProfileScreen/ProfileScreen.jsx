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
import { PostsList } from "../../components/PostList/PostsList";
import data from "../../assets/data/posts";

const BottomTabsProf = createBottomTabNavigator();

export const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.wrap}>
          <ImageBackground source={require("../../assets/images/bg_mount.jpg")} style={styles.backgroundImg}>
            <View>
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
                    <Image
                      source={require("../../assets/images/removeUserImg.png")}
                      style={styles.addUserPhotoBtnImg}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.logoutButton}
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate("Home", { screen: "PostsScreen" })}
                >
                  <Feather name="log-out" size={24} color="gray" />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: "center", marginTop: 70 }}>
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
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    // justifyContent: "flex-end",
    // alignItems: "center",
    // width: "100%",
    // backgroundColor: "#FFFFFF",
  },
  logoutButton: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  container: {
    position: "relative",
    backgroundColor: "#FFFFFF",
    // alignItems: "center",
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
    borderColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 35,
    // marginTop: 15,
    lineHeight: 35,
  },
  // inputLogin: {
  //   backgroundColor: "#F6F6F6",
  //   width: 343,
  //   height: 50,
  //   borderRadius: 8,
  //   marginTop: 33,
  //   padding: 16,
  //   fontStyle: "normal",
  //   fontWeight: "400",
  //   fontSize: 16,
  //   lineHeight: 19,
  // },
  // inputMailPassw: {
  //   backgroundColor: "#F6F6F6",
  //   width: 343,
  //   height: 50,
  //   borderRadius: 8,
  //   padding: 16,
  //   marginTop: 16,
  //   fontStyle: "normal",
  //   fontWeight: "400",
  //   fontSize: 16,
  //   position: "relative",
  // },
  // passwShowText: {
  //   fontStyle: "normal",
  //   fontWeight: "400",
  //   fontSize: 16,
  //   lineHeight: 19,
  // },
  // passwShow: {
  //   top: -34,
  //   left: 130,
  // },
  // registerButton: {
  //   backgroundColor: "#FF6C00",
  //   height: 50,
  //   width: 343,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderRadius: 100,
  //   marginTop: 44,
  // },
  // registerButtonText: {
  //   color: "#fff",
  //   fontWeight: "400",
  // },
  // loginLink: {
  //   marginTop: 16,
  //   marginBottom: 66,
  // },
  // loginLinkText: {
  //   fontStyle: "normal",
  //   fontWeight: "400",
  //   fontSize: 16,
  //   lineHeight: 19,
  // },
});
