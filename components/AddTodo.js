import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const AddTodo = ({ addHandler }) => {
  const [todo, setTodo] = useState("");
  return (
    <View style={{ flexDirection: "row" }}>
      <TextInput
        placeholder="Add todo..."
        style={styles.input}
        onChangeText={(val) => setTodo(val)}
      />
      <Button
        title="Add"
        style={styles.addBtn}
        color="coral"
        onPress={() => addHandler(todo)}
      >Text</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    borderColor: "#bbb",
    flex: 2,
    marginRight: 5,
  },
  addBtn: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    padding: 15
  },
});
export default AddTodo;
