import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default Header = () => {

  return (
    <View style={styles.header}>
      <Text style={styles.title}> My Todos </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "coral",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    color: '#fff',
    fontSize: 20
  },
});