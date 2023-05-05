import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleEmail = (value) => {
    setEmail(value);
  };
  const handlePassword = (value) => {
    setPassword(value);
  };

  const onSubmit = () => {
    if (email === "" || password === "") {
      return alert("Fill in all the fields please!");
    }
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../assets/images/bg_mount.jpg")} style={styles.backgroundImg}>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
          <View style={{ ...styles.loginContainer, height: 489 }}>
            <View style={{ ...styles.form, paddingTop: 32 }}>
              <Text style={styles.title}>Login</Text>

              <View style={{ marginTop: 32 }}>
                <TextInput
                  style={styles.input}
                  placeholder="Email address"
                  inputMode="email"
                  value={email}
                  onChangeText={handleEmail}
                />
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry={isPasswordShown ? false : true}
                  value={password}
                  onChangeText={handlePassword}
                />
              </View>

              <TouchableOpacity
                style={styles.showPassBtn}
                activeOpacity={0.5}
                onPress={() => setIsPasswordShown((prevState) => !prevState)}
              >
                <Text style={styles.showPassBtnText}>{isPasswordShown ? "Hide" : "Show"}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnForm} activeOpacity={0.5} onPress={onSubmit}>
                <Text style={styles.btnFormText}>Login</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.loginLink}
                activeOpacity={0.5}
                onPress={() => navigation.navigate("Registration")}
              >
                <Text style={styles.loginLinkText}>Don't have an account? Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  backgroundImg: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
  loginContainer: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    width: "100%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
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
    transform: [{ translateY: 25 }],
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
