import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import axios from "axios";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [image, setImage] = useState("");
  const handleRegister = async () => {
    const user = {
      name: name,
      email: email,
      password: password,
      image: image,
    };
    console.log("at line 28");
    await axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        // Handle the successful response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
    
    console.log("line 30");
    // fetch('http://localhost:6000/register',{
    //   method:"POST",

    // }).then(res=>res.json())
    // .then(data=>console.log(err))
    // .catch(err=>console.log(err));

    //  try{
    //     const response = await axios.post("http://localhost:6000/register", user)
    //     console.log(response);
    //     Alert.alert(
    //       "Registeration sucessful",
    //       "You have been registered Sucessfully"
    //     );
    //     setName("");
    //     setEmail("");
    //     setPassword("");
    //     setImage("");
    //     }
    //     catch{
    //         ((error) => {
    //             Alert.alert(
    //               "\n\tRegisteration Error",
    //               " An error ocurend in registeration"
    //             );
    //             console.log("\n\t Registeration failed", error);
    //           });
    //     }
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
          <Text style={{ color: "#4a55a2", fontSize: 17, fontWeight: "900" }}>
            Register
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "600",
              marginTop: 15,
            }}
          >
            Register to your Account
          </Text>
          <View
            style={{
              marginTop: 50,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600", color: "black" }}>
              Name
            </Text>
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
              placeholder="enter your name"
              placeholderTextColor={"black"}
            ></TextInput>
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
            <Text style={{ fontSize: 18, fontWeight: "600", color: "black" }}>
              Image
            </Text>
            <TextInput
              value={image}
              onChangeText={(text) => setImage(text)}
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
              placeholder="image"
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
            <Pressable onPress={handleRegister}>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Register
              </Text>
            </Pressable>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("Home")}
            style={{
              marginTop: 15,
            }}
          >
            <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
              Already have an account?{" "}
              <Text style={{ color: "blue" }}> Sign In</Text>
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RegisterScreen;
