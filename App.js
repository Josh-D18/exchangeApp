import axios from "axios";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [currency, setCurrency] = useState([]);
  const [text, setText] = useState("");

  const apiCall = async () => {
    await axios
      .get(
        "https://v6.exchangerate-api.com/v6/fa3aa2e8d16ca8b28ef9783f/latest/USD"
      )
      .then((res) => {
        console.log(res.data);
        setCurrency({ ...res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <Text>{currency}</Text>
      <TextInput
        placeholder="Enter Code"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <Button title="Click" onPress={() => apiCall()} />
    </View>
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
