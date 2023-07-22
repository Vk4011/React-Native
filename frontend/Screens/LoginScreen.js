import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  Alert
} from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        if (token) {
          navigation.navigate("Home");
        } else {
        }
      } catch (error) {
        console.log("\n\t Error", error);
      }
    };

    checkLoginStatus();
  },[]);
  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };
    axios
      .post("https://chat-app-g1yw.onrender.com/login", user)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        AsyncStorage.setItem("authToken", token);

        navigation.replace("Home");
      })
      .catch((error) => {
        Alert.alert("\n\t Login Error", "Invalid Email or password");
        console.log("\n\t Login Error ", error);
      });
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgb(110, 178, 239)",
        padding: 10,
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            marginTop: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#4a55a2", fontSize: 17, fontWeight: "600" }}>
            Sign In
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "600",
              marginTop: 15,
            }}
          >
            Sign In to Your Account
          </Text>
          <View
            style={{
              marginTop: 50,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600", color: "black" }}>
              Email
            </Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
              placeholder="enter your Email"
              placeholderTextColor={"black"}
            ></TextInput>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "black" }}>
              password
            </Text>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
              placeholder="password"
              placeholderTextColor={"black"}
            ></TextInput>
          </View>
          <Pressable
            style={{
              width: 200,
              backgroundColor: "#4a55a2",
              padding: 15,
              marginTop: 50,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 6,
            }}
          >
            <Pressable onPress={handleLogin}>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Login
              </Text>
            </Pressable>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("Register")}
            style={{
              marginTop: 15,
            }}
          >
            <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
              Already have an account?{" "}
              <Text style={{ color: "blue" }}> Sign Up</Text>
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
