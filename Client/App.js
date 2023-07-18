import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Background from "./Screens/Background";

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "plum" }}>
      <Background/>
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
          <Text style={{textAlign:"center",marginTop:40}}>Hello</Text>
        </View>
      </View>
    </View>
  );
};

export default App;
