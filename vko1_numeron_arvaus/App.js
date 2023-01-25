import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

export default function App() {
  const [guess, setGuess] = useState(0);
  const [rnum, setRnum] = useState(0);
  const [guessNum, setGuessNum] = useState(1);
  const [msg, setMsg] = useState("Guess a number between 1-100");

  useEffect(() => {
    setRnum(Math.floor(Math.random() * 100) + 1);
  }, []);

  const makeGuess = () => {
    setGuessNum(guessNum + 1);

    if (guess == rnum) {
      setMsg("");
      Alert.alert(`You guessed the number in ${guessNum} times`);
    } else if (guess > rnum) {
      return setMsg(`Your guess ${guess} is too high`);
    } else {
      return setMsg(`Your guess ${guess} was too low`);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{msg}</Text>
      <TextInput
        style={{ width: 100, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setGuess(parseInt(text))}
        value={guess}
        keyboardType="numeric"
      />
      <Button onPress={makeGuess} title="Make Guess" />
      <StatusBar style="auto" />
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
