import { StyleSheet, Text, View, Pressable, Button,StatusBar } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={{ flex: 1, backgroundColor: "plum" }}>
        <StatusBar backgroundColor="lightgreen" barStyle="dark-content" />
        <View
          style={{
            width: 200,
            height: 200,
            backgroundColor: "lightblue",
            flex: 2,
          }}
        >
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: " greenyellow",
              marginLeft: 150,
              marginTop: 300,
              borderRadius: 30,
            }}
          >
            <Pressable onPress={() => navigation.navigate("Background")}>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: 40,
                  fontWeight: "900",
                  fontSize: 18,
                }}
              >
                Start
              </Text>
            </Pressable>
            <View style={{ marginTop: 50,padding:2 }}>
              <Button
                title="Press"
                onPress={() => console.log("\n\t Button pressed")}
              ></Button>
            </View>
            <View
            style={{marginTop:40}}
            >
            <Button
                title="Hello"
                onPress={() =>{ console.log("\n\t Mark 42")
              navigation.navigate("Pressable")
              }}
                color="midnightblue"
                
              ></Button>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
