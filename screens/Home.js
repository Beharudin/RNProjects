import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/Global";
import { useRoute } from "@react-navigation/native";
import Card from "../Global/Card";

const Home = () => {
  const route = useRoute();

  const username = route.params?.username || "Guest";

  return (
    <View style={globalStyles.container}>
      <Text>Home page</Text>
      <Card>
        <Text>Hello {username}</Text>
      </Card>
    </View>
  );
};

export default Home;
