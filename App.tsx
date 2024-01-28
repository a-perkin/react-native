/* eslint-disable react/react-in-jsx-scope */
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ViewItem from "./components/Item";
import { Item } from "./components/types";

const item: Item = {
  title: "PETROS",
  isNew: true,
  image: require("./assets/item.jpg"),
  newPrice: "99.99 $",
  oldPrice: "100.00 $",
  description: "161 packages are looking for funding",
};

export default function App() {
  return (
    <View style={styles.container}>
      <ViewItem
        title={item.title}
        isNew={item.isNew}
        image={item.image}
        newPrice={item.newPrice}
        oldPrice={item.oldPrice}
        description={item.description}
      ></ViewItem>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aqua",
    alignItems: "center",
    justifyContent: "center",
  },
});
