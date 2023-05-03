import {
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export const RegistrationScreen = ({ changeScreen }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [image, setImage] = useState(null);

  const handleLogin = (value) => {
    setLogin(value);
  };
  const handleEmail = (value) => {
    setEmail(value);
  };
  const handlePassword = (value) => {
    setPassword(value);
  };

  const addUserImage = async () => {
    let userImg = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!userImg.canceled) {
      setImage((prevState) => {
        return {
          ...prevState,
          image: userImg.assets[0].uri,
        };
      });
    } else {
      alert("You did not select any image.");
    }
  };

  const removeUserImage = () => {
    setImage((prevState) => ({ ...prevState, image: null }));
  };

  const onSubmit = () => {
    if (login === "" || email === "" || password === "") {
      return alert("Fill in all the fields please!");
    }
    console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);

    setEmail("");
    setLogin("");
    setPassword("");
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
      <View style={{ ...styles.container, height: 549 }}>
        <View style={styles.form}>
          <View style={styles.photoContainer}>
            <Image source={{ uri: image }} style={styles.userPhoto} />
            {image ? (
              <TouchableOpacity
                style={{
                  ...styles.addButton,
                  borderColor: "#E8E8E8",
                }}
                activeOpacity={0.7}
                onPress={removeUserImage}
              >
                <Image source={require("../../assets/images/removeUserImg.png")} style={styles.addUserPhotoBtnImg} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.addButton} activeOpacity={0.7} onPress={addUserImage}>
                <Image source={require("../../assets/images/addUserImg.png")} style={styles.addUserPhotoBtnImg} />
              </TouchableOpacity>
            )}
          </View>

          <Text style={styles.title}>Registration</Text>
          <View style={{ marginTop: 30 }}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Login"
                inputMode="text"
                value={login}
                onChangeText={handleLogin}
              />
            </View>
            <View style={{ marginTop: 16 }}>
              <TextInput
                style={styles.input}
                placeholder="Email address"
                inputMode="email"
                value={email}
                onChangeText={handleEmail}
              />
            </View>

            <View style={{ marginTop: 16, position: "relative" }}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={isPasswordShown ? false : true}
                value={password}
                onChangeText={handlePassword}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.showPassBtn}
            activeOpacity={0.5}
            onPress={() => setIsPasswordShown((prevState) => !prevState)}
          >
            <Text style={styles.showPassBtnText}>{isPasswordShown ? "Hide" : "Show"}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnForm} activeOpacity={0.5} onPress={onSubmit}>
            <Text style={styles.btnFormText}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginLink} activeOpacity={0.5} onPress={() => changeScreen(true)}>
            <Text style={styles.loginLinkText}>Already have an account? Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    width: "100%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },

  form: {
    position: "relative",
    paddingTop: 92,
    marginHorizontal: 16,
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
    fontSize: 30,
    textAlign: "center",
  },
  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 50,
    borderRadius: 8,
    color: "#212121",
    paddingLeft: 15,
    paddingRight: 15,
  },
  showPassBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  showPassBtn: {
    position: "absolute",
    justifyContent: "center",
    right: 20,
    top: "50%",
    transform: [{ translateY: 115 }],
  },
  btnForm: {
    backgroundColor: "#FF6C00",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 42,
  },
  btnFormText: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  loginLink: {
    marginTop: 16,
  },
  loginLinkText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textAlign: "center",
  },
});
