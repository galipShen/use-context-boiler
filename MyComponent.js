import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const MyComponent = () => {
  const user = useContext(UserContext);

  return (
    <View>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
    </View>
  );
};

export default MyComponent;

const styles = StyleSheet.create({});
