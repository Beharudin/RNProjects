import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    titleText: {
        fontFamily: "nunito-bold",
        fontSize: 18,
        color: "#333"
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    error: {
      color: 'red',
    },
    formikStyle: {
      marginTop: 20,
    },
    formikText: {
      margin: 10,
      backgroundColor: "#ebe4e4"
    },
    card: {
      borderRadius: 6,
      elevation: 3,
      backgroundColor: "#fff",
      shadowOffset: { width: 1, height: 1 },
      shadowColor: "#333",
      shadowOpacity: 0.3,
      shadowRadius: 2,
      marginVertical: 6,
      marginHorizontal: 4,
    },
    cardContent: {
      marginHorizontal: 18,
      marginVertical: 10,
    },
  });