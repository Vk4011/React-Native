import { StyleSheet, Text, View ,Pressable,Image,Button} from 'react-native'
import React from 'react'
const ai = require("../assets/chip.png")

const Pressables = () => {
  return (
    <View 
    style={{flex: 1, backgroundColor: "plum",padding:60}}
    >
     <Button
     title="ai"
     onPress={()=>{console.log("\n sun is pressed..!")}}
     />
     <Pressable onPress={()=> console.log("\n\t image pressed")}>
     <Image
     source={ai} style={{width: 300,height: 300,marginTop:40}}
     />    
     </Pressable>  
    </View>
  )
}

export default Pressables

const styles = StyleSheet.create({})