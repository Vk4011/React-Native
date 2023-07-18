import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
const logoImg = require("../assets/chat-bot.png")

const Background = () => {
  return (
    <View style={{flex: 1, backgroundColor: "transparent"}}>
        <Image source={logoImg} style={{width:100,height:100,marginTop:90}}>

        </Image>
      <Text>Background</Text>
    </View>
  )
}

export default Background

const styles = StyleSheet.create({})