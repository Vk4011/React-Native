import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgb(164, 199, 239) ",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        border: "1px solid blue",
        padding: 10,
        alignItem: "center",
      }}
    >
      <KeyboardAvoidingView>
        <view
          style={{
            marginTop: 100,
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
            borderRadius: "30px",
            border: "1px solid black",
            boxShadow:
              "0 0 10px rgb(41, 89, 249) ,0 0 25px rgb(41, 89, 249)",
            backgroundColor: "black",
            display: "flex",
            alignItem: "center",
            flexDirection: " column",
          }}
        >
          <text
            style={{ color: "rgb(41, 89, 249)", fontSize: "2rem", fontWeight: "900" }}
          >
            Sign In
          </text>
          <text
            style={{
              fontSize: "1.5rem",
              fontWeight: "900",
              color: "rgb(41, 89, 249)",
              marginTop: "40px",
            }}
          >
            Sign In to your Account
          </text>
          <text
            style={{
              color: "rgb(41, 89, 249)",
              fontSize: "2rem",
              fontWeight: "900",
              marginTop: "40px",
              marginRight: "145px",
            }}
          >
            Email
          </text>
          <textInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={{
              borderBottomColor: "green",
              borderBottomWidth: 1,
              marginVertical: 10,
              width: 230,
              border: "2px solid rgb(41, 89, 249)",
              marginTop: "30px",
              padding: "15px",
              borderRadius:"8px",
              cursor: "pointer",
            }}
            placeholderTextColor={"white"}
            placeholder="enter your Email"
          />
          <text
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "rgb(41, 89, 249)",
              marginTop: "20px",
              marginRight: "120px",
            }}
          >
            Password
          </text>
          <textInput
            value={password}
            onChangeText={(text) => SetPassword(text)}
            secureTextEntry={true}
            style={{
              fontSize: email ? 18 : 18,
              borderBottomcolor: "gray",
              borderBottomWidth: 1,
              marginVertical: 10,
              width: 230,
              marginTop: "20px",
              border: "2px solid rgb(41, 89, 249)",
              padding: "15px",
              borderRadius:"8px",
              color:"white",
              cursor: "pointer",
            }}
            placeholderTextcolor={"white"}
            placeholder="Password"
          />
          <Pressable
            style={{
              width: 200,
              backgroundColor: "black",
              padding: 15,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 6,
            }}
          >
            <text
              style={{
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "bold",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                border: "1px solid blue",
                padding: "15px",
                paddingLeft: "25px",
                paddingRight: "25px",
                borderRadius: "8px",
                boxShadow: "0 0 5px blue,0 0 10px blue",
                marginTop: "40px",
              }}
            >
              Login
            </text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Register")}
            style={{ marginTop: 15 }}
          >
            <text style={{ textAlign: "center", color: "skyBlue", fontSize: 16 }}>
              Don't have an account? Sign Up
            </text>
          </Pressable>
        </view>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
