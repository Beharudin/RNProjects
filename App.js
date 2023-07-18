import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Bahar", age: 25 },
    { name: "Abdi", age: 23 },
    { name: "Caalaa", age: 15 },
    { name: "Umar", age: 27 },
    { name: "Bini", age: 45 },
    { name: "Temu", age: 34 },
    { name: "Usmaan", age: 22 },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((person) => (
          <View style={styles.item} key={person.age}>
            <Text>
              {person.name} {person.age}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 5,
    marginTop: 25,
  },
  item: {
    fontSize: 25,
    marginTop: 25,
    backgroundColor: "pink",
    margin: 30,
    padding: 50,
  },
});
