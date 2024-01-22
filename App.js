import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { UserContext } from "./UserContext";
import { useState } from "react";
import MyComponent from "./MyComponent";

export default function App() {
  const [user, setUser] = useState({ name: "Galip", email: "test@test.com" });

  return (
    <UserContext.Provider value={user}>
      <StatusBar />
      <MyComponent />
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
