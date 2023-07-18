import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import Constants from "expo-constants";
import ListTodo from "./components/ListTodo";
import AddTodo from "./components/AddTodo";

const statusBarHeight =
  Constants.statusBarHeight || StatusBar.currentHeight || 0;

export default function App() {
  const [todo, setTodo] = useState([
    { text: "Play football", key: "1" },
    { text: "Read my book", key: "2" },
    { text: "Prepare notes", key: "3" },
    { text: "Study for exam", key: "4" },
    { text: "Finish my homework", key: "5" },
  ]);

  const deletHandler = (key) => {
    setTodo((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const addHandler = (text) => {
    setTodo((prevTodos) => {
      return [
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ]
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <Header />

      {/* content */}

      <View style={styles.content}>
        <AddTodo addHandler={addHandler} />

        <FlatList
          data={todo}
          renderItem={({ item }) => (
            <ListTodo item={item} deletHandler={deletHandler} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: statusBarHeight,
  },
  content: {
    marginTop: 20,
    paddingHorizontal: 30,
  },
});
