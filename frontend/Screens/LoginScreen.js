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
        backgroundColor: "white",
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
          }}
        >
          <text
            style={{ color: "#4a55a2", fontSize: "1rem", fontWeight: "900" }}
          >
            Sign In
          </text>

          <text style={{ fontSize: 17, fontWeight: "900" }}>
            Sign In to your Account
          </text>
        </view>
        <view style={{ marginTop: 50 }}>
          <view>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "blue" }}>
              Email
            </Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomcolor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
              placeholderTextcolor={"black"}
              placeholder="Enter your Email"
            />
          </view>
          <view style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "blue" }}>
              Password
            </Text>
            <TextInput
              value={password}
              onChangeText={(text) => SetPassword(text)}
              secureTextEntry={true}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomcolor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
              placeholderTextcolor={"black"}
              placeholder="Password"
            />
          </view>
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
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                textAloign: "center",
              }}
            >
              Login
            </Text>
          </Pressable>
          <Pressable
          onPress={()=> navigation.navigate("Register") }
          style={{marginTop:15}}>
            <Text style={{textAlign:"center",color:"Blue",fontSize:16}}>
                Don't have an account? Sign Up 
                </Text> 

          </Pressable>
        </view>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
