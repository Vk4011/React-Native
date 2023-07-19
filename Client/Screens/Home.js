import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation();
  return (
    <>
    <View style={{ flex: 1, backgroundColor: "plum" }}>
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
          <Pressable
          onPress={()=>navigation.navigate("Background")}
          >
            <Text style={{ textAlign: "center", marginTop: 40 ,fontWeight:"900",fontSize:18}}>Start</Text>
          </Pressable>
        </View>
      </View>
    </View>
  </>
  )
}

export default Home

const styles = StyleSheet.create({})