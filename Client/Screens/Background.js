import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const logoImg = require("../assets/chat-bot.png");
const i = require("../assets/neural.png");
const n = require("../assets/robot.png");
const Background = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Image
        source={logoImg}
        style={{ width: 100, height: 100, marginTop: 90, marginLeft: 150 }}
      ></Image>

      <Pressable onPress={() => navigation.navigate("Home")}>
        <Text style={{ marginLeft: 170, color: "green", fontWeight: "900" }}>
          Robot
        </Text>
      </Pressable>
      <Image
        source={i}
        style={{ width: 250, height: 250, marginTop: 100, marginLeft: 120 }}
      ></Image>
      <Pressable
      onPress={()=>navigation.navigate("Scroll")}
      >
   
        <Text style={{ marginLeft: 170, color: "green", fontWeight: "900" }}>
          Nueral network
        </Text>
      </Pressable>

      <Image
        source={n}
        style={{ width: 150, height: 150, marginTop: 20, marginLeft: 50 }}
      ></Image>
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({});
