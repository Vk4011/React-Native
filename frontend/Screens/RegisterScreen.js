import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, StyleSheet,Text,TextInput,Pressable,KeyboardAvoidingView} from 'react-native';

const RegisterScreen = () => {
    const [email,setEmail]= useState("");
    const[name,setName] = useState("");
    const [password, SetPassword] = useState("");
    const navigation = useNavigation();
    return (
        <View style={{
            flex:1,
            backgroundColor: "rgb(110, 178, 239)",
            padding: 10,
            alignItems: "center"
        }}>
           <KeyboardAvoidingView>
            <View 
            style={{
                marginTop: 100,
                justifyContent: "center",
                alignItems:"center"
            }}
            >
                <Text style={{color:"#4a55a2",fontSize:17,fontWeight:"600"
            }}>RegisterScreen</Text>
            <Text style={{
                fontSize:17,fontWeight:"600",marginTop:15
            }}>
                    Sign In to Your Account 
            </Text>
            <View style={{
                marginTop: 50
            }}>
                <Text style={{fontSize:18,fontWeight:"600",color:"black"}}>
                    Email
                </Text>
                <TextInput 
                value={email}
                onChangeText={(text)=>setEmail(text)}
                style={{borderBottomColor:"black",borderBottomWidth:1,marginVertical:10,width:300}}
                placeholder='enter your Email'
                placeholderTextColor={"black"}
                >

                </TextInput>
                <Text style={{fontSize:18,fontWeight:"600",color:"black"}}>
                    password
                </Text>
                <TextInput 
                  value={password}
                  onChangeText={(text)=>setPassword(text)}
                style={{borderBottomColor:"black",borderBottomWidth:1,marginVertical:10,width:300}}
                placeholder='password'
                placeholderTextColor={"black"}
                >

                </TextInput>
            </View>
            <Pressable 
            style={{
                width:200,
                backgroundColor: "#4a55a2",
                padding:15,
                marginTop: 50,
                marginLeft:"auto",
                marginRight:"auto",
                borderRadius:6
            }}>
                <Text style={{
                    color:"white",
                    fontSize:16,
                    fontWeight:"bold",
                    textAlign:"center"
                }}>
                    Login
                </Text>
            </Pressable>

            <Pressable 
            onPress={()=>navigation.navigate("Home")}
            style={{
                marginTop:15
            }}>
                <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
              Already have an account? <Text style={{color:"blue"}}> Sign In</Text>
            </Text>
            
            </Pressable>

            </View>
           </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default RegisterScreen;
