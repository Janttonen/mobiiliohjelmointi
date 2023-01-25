import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
  const [numbers, setNumbers] = useState({
    A: 0,
    B: 0,
  });
  const [result, setResult] = useState("");

  const countNumbers = (operation) => {
    if (operation === "+") {
      setResult(numbers.A + numbers.B);
    } else {
      setResult(numbers.A - numbers.B);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text> {result ? "Results: " + result : ""}</Text>
      </View>
      <View>
        <TextInput
          style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => setNumbers({ ...numbers, A: parseInt(text) })}
          value={numbers.A}
          keyboardType="numeric"
        />
        <TextInput
          style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => setNumbers({ ...numbers, B: parseInt(text) })}
          value={numbers.B}
          keyboardType="numeric"
        />
        <Button onPress={() => countNumbers("+")} title="+" />
        <Button onPress={() => countNumbers("-")} title="-" />
      </View>
      <View></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
