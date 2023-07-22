import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createContext, useState } from "react";
const UserType = createContext();


const UserContext = ({ childern }) => {
  const [userId, setUserId] = useState("");
  return (
    <>
      <UserType.Provider value={{ userId, setUserId }}>
        {childern}
      </UserType.Provider>
    </>
  );
};

export {UserType, UserContext};


