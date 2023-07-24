import React from "react";
import { View } from "react-native";
import { globalStyles } from "../styles/Global";

export const Card = ({ children }) => {
  return (
    <View style={globalStyles.card}>
      <View style={globalStyles.cardContent}>{children}</View>
    </View>
  );
};


export default Card;
