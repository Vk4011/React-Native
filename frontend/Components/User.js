import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const User = ({ item }) => {
  return (
    <Pressable
      style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}
    >
      <View>
        <Image
          styles={{
            width: 50,
            height: 50,
            borderRadius: 25,
            resizeMode: "cover",
          }}
          source={{ uri: item.image }}
        />
      </View>
      <View styles={{ marginLeft: 12, flex: 1 }}>
        <Text>{item?.name}</Text>
        <Text>{item?.email}</Text>
      </View>
      <Pressable
        styles={{
          backgroundColor: "#567189",
          padding: 10,
          borderRadius: 6,
          width: 105,
        }}
      >
        <Text style={{ textAlign: "center", color: "White", fontSize: 13 }}>
          Add Friend
        </Text>
      </Pressable>
    </Pressable>
  );
};

export default User;

const styles = StyleSheet.create({});
