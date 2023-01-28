import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Button, FlatList, Text} from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  const listSeparator = () => {
    return(
      <View style={{ height: 1, backgroundColor: 'blue'}} />
    );
  }

  return (
    <View style={styles.container}>
      <TextInput 
      style={{ width: 200, borderColor: 'gray', borderWidth: 1}}
      value={item}
      onChangeText={text => setItem(text)}
      />
      <View style={styles.button}>
      <Button 
      title='Add'
      onPress={() => setItems([...items, item])}
      />
      <Button 
      title='Clear'
      onPress={() => setItems([])}
      />
      </View>
      <View>
      <Text>Shopping list</Text>
      <FlatList 
      data={items}
      renderItem={({item}) => <Text style={{ fontSize: 18}}>{item}</Text>}
      ItemSeparatorComponent={listSeparator} //tulloo kivat viivat 
      />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  }
});
