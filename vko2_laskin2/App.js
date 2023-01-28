import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  const [numbers, setNumbers] = useState({
    A: 0,
    B: 0,
    result: 0,
  });
  const [inputs, setInputs] = useState([]);

  const countNumbers = (operation) => {
    if (operation === "+") {
      setNumbers({ ...numbers, result: numbers.A + numbers.B });
      setInputs([
        ...inputs,
        `${numbers.A} ${operation} ${numbers.B} = ${numbers.A + numbers.B}`,
      ]);
    } else {
      setNumbers({ ...numbers, result: numbers.A - numbers.B });
      setInputs([
        ...inputs,
        `${numbers.A} ${operation} ${numbers.B} = ${numbers.A - numbers.B}`,
      ]);
    }
  };

  const listSeparator = () => {
    return <View style={{ height: 1, backgroundColor: "blue" }} />;
  };

  return (
    <View style={styles.container}>
      <View>
        <Text> {numbers.result ? "Results: " + numbers.result : ""}</Text>
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
      </View>
      <View style={styles.button}>
        <Button onPress={() => countNumbers("+")} title="+" />
        <Button onPress={() => countNumbers("-")} title="-" />
      </View>
      <View>
        <Text> {inputs ? "History:" : ""}</Text>
        <FlatList
          data={inputs}
          renderItem={({ item }) => (
            <Text style={{ fontSize: 18 }}>{item}</Text>
          )}
          ItemSeparatorComponent={listSeparator} 
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
