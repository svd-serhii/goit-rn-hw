import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import React from "react";
import { useState, useEffect } from "react";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { Camera, CameraType } from "expo-camera";
import * as Location from "expo-location";

export const CreatePostScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);
  const [inputRegion, setInputRegion] = useState("");
  const [title, setTitle] = useState("");

  const isFocused = useIsFocused();
  // LOCATION
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);

  // CAMERA
  useEffect(() => {
    const getPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getPermission();
  }, []);

  function toggleCameraType() {
    setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  function clearState() {
    setPhoto(null);
    setInputRegion("");
    setTitle("");
  }

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
  };

  const onSubmit = () => {
    navigation.navigate("DefaultPostScreen", { photo, location, inputRegion, title });
    clearState();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ScrollView style={{ flexGrow: 1 }}>
          <View style={styles.postContainer}>
            <View style={styles.cameraContainer}>
              <View style={styles.cameraWrap}>
                {photo && (
                  <View style={styles.photoWrap}>
                    <Image source={{ uri: photo }} style={styles.photo} />
                  </View>
                )}
                {isFocused && (
                  <Camera type={type} ref={setCamera} style={styles.camera}>
                    <TouchableOpacity onPress={takePhoto} style={styles.takePhotoBtn}>
                      <FontAwesome name="camera" size={24} color="#ffffff" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleCameraType} style={styles.toggleCameraBtn}>
                      <MaterialIcons name="flip-camera-android" size={24} color="#ffffff" />
                    </TouchableOpacity>
                  </Camera>
                )}
              </View>
            </View>

            <Text style={styles.addPostText}>Add photo</Text>
            <View style={styles.postFormContainer}>
              <View style={styles.inputWrap}>
                <TextInput
                  style={styles.postInput}
                  placeholder="Title..."
                  inputMode="text"
                  value={title}
                  onChange={({ nativeEvent: { text } }) =>
                    setTitle((prevState) => ({
                      ...prevState,
                      title: text,
                    }))
                  }
                />
              </View>
              <View style={styles.inputWrap}>
                <TextInput
                  style={styles.postInput}
                  placeholder="Location"
                  inputMode="navigation"
                  value={location}
                  onChange={({ nativeEvent: { text } }) =>
                    setLocation((prevState) => ({
                      ...prevState,
                      location: text,
                    }))
                  }
                />
              </View>

              <TouchableOpacity style={styles.postButton} activeOpacity={0.5} onPress={onSubmit}>
                <Text style={styles.postButtonText}>Publicate</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 32,
    backgroundColor: "#ffffff",
  },
  cameraContainer: {
    height: 240,
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
  },
  cameraWrap: {
    height: 240,
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
  },
  photoWrap: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    borderWidth: 1,
    zIndex: 1,
    width: "100%",
  },
  photo: {
    height: 240,
    width: "100%",
  },
  camera: {
    position: "relative",
    height: 240,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  takePhotoBtn: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  toggleCameraBtn: {
    position: "absolute",
    top: 15,
    right: 15,
  },

  postContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  addPostImg: {
    width: 40,
    height: 40,
    borderRadius: 100,
    color: "#FFFFFF",
  },
  addPostText: {
    alignItems: "flex-start",
  },
  postFormContainer: {
    flex: 3,
  },
  postButton: {
    backgroundColor: "#E8E8E8",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 44,
  },
  postButtonText: {
    color: "#fff",
    fontWeight: "400",
  },
  postInput: {
    width: 343,
    height: 50,
    borderRadius: 8,
    marginTop: 33,
    padding: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 2,
  },
});
