import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput
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
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
            padding: "30px",
            borderRadius: "16px",
            border: "1px solid black",
            boxShadow:
              "0 0 10px ,0 0 25px ",
            backgroundColor: "#f1f7fe",
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
              color: "Black",
              marginTop: "20px",
            }}
          >
            Sign In to your Account
          </text>
          <text
            style={{
              color: "black",
              fontSize: "2rem",
              fontWeight: "900",
              marginTop: "20px",
              marginRight: "190px",
            }}
          >
            Email
          </text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={{
              borderBottomColor: "green",
              borderBottomWidth: 1,
              marginVertical: 10,
              width: 280,
              border: "2px solid rgb(41, 89, 249)",
              marginTop: 20,
              padding: "15px",
              borderRadius:"8px",
              cursor: "pointer",
              
            
            }}
            placeholderTextColor={"gray"}
            placeholder="enter your Email"
          />
          <text
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "black",
              marginTop: "10px",
              marginRight: "140px",
            }}
          >
            Password
          </text>
        
          <TextInput
            value={password}
            onChangeText={(text) => SetPassword(text)}
            secureTextEntry={true}
            style={{
              fontSize: email ? 18 : 18,
              borderBottomcolor: "gray",
              borderBottomWidth: 1,
              marginVertical: 10,
              width: 280,
              marginTop: 20,
              border: "2px solid rgb(41, 89, 249)",
              padding: "15px",
              borderRadius:"8px",
              color:"gray",
              cursor: "pointer",
            }}
            placeholderTextcolor={"white"}
            placeholder="Password"
          />
          <Pressable
            style={{
              width: 200,
              // backgroundColor: "black",
              padding: 15,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 6,
            }}
          >
            <text
              style={{
                color: "black",
                fontSize: "1.5rem",
                fontWeight: "bold",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                // border: "1px solid blue",
                padding: "15px",
                paddingLeft: "25px",
                paddingRight: "25px",
                borderRadius: "8px",
                backgroundColor:"royalblue",
                boxShadow: "0 0 5px ,0 0 10px ",
                marginTop: 10,
                
              }}
            >
              Login
            </text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Register")}
            style={{ marginTop: 15 }}
          >
            <text style={{ textAlign: "center", color: "black", fontSize: 16 }}>
              Don't have an account? <i style={{color:"blue"}}> Sign Up</i>
            </text>
          </Pressable>
        </view>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
