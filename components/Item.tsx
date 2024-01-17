import React from "react";
import { Item } from "./types";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

const ViewItem = (props: Item) => {
  return (
    <View style={styles.widget}>
      <View style={styles.imageContainer}>
        <Image source={props.image} style={styles.itemImage} />
        <View style={styles.labelContainer}>
          <LabelNew isNew={props.isNew}></LabelNew>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.title}</Text>
          <Image source={require("../assets/heart.png")} style={styles.like} />
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.newPrice}>{props.newPrice}</Text>
          <Text style={styles.oldPrice}>{props.oldPrice}</Text>
        </View>
        <View style={styles.descContainer}>
          <View style={styles.description}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.descriptionText}
            >
              {props.description}
            </Text>
          </View>
          <View style={styles.buttonView}>
            <TouchableHighlight onPress={() => {}} style={styles.button}>
              <View style={styles.buttonLabel}>
                <Text style={styles.buttonText}>Buy</Text>
                <Image
                  source={require("../assets/backet.png")}
                  style={styles.buttonImage}
                />
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
};

const LabelNew = ({ isNew }) => {
  /*
  const LabelNew = (isNew) =>
  console.log(isNew) 
  Видає объект {"isNew": true}
  а
  const LabelNew = ({isNew}) =>
  console.log(isNew) 
  видеє бул true
  навіщо фігурні дужки, чи можно зробити це красивіше?
  */
  console.log(isNew);
  return (
    isNew && (
      <View style={styles.ovalContainer}>
        <Text>NEW</Text>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  widget: {
    padding: 10,
    width: "96%",
    flex: 0.15,
    flexDirection: "row",
    borderWidth: 2,
    backgroundColor: "palegreen",
    borderRadius: 10,
  },
  imageContainer: {
    flex: 0.37,
    paddingTop: 15,
    paddingLeft: 5,
  },
  bodyContainer: {
    flex: 0.7,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  labelContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "flex-end",
    padding: 0,
  },
  titleContainer: {
    flex: 0.3,
    flexDirection: "row",
  },
  priceContainer: {
    flex: 0.3,
    flexDirection: "row",
  },
  descContainer: {
    flex: 0.3,
    flexDirection: "row",
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    overflow: "hidden",
  },
  like: {
    width: 30,
    height: 30,
    margin: 3,
  },
  title: {
    fontSize: 28,
    flex: 1,
  },
  newPrice: { flex: 0.5, fontWeight: "bold" },
  oldPrice: { flex: 0.5, textDecorationLine: "line-through" },
  description: {
    flex: 0.65,
    flexDirection: "row",
  },
  descriptionText: {
    fontSize: 14,
    color: "black",
  },
  ovalContainer: {
    width: 50,
    height: 35,
    backgroundColor: "yellow",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
  },
  buttonView: {
    flex: 0.35,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "dodgerblue",
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonLabel: {
    flex: 1,
    flexDirection: "row",
  },
  buttonText: {
    flex: 0.6,
    textAlign: "center",
    textAlignVertical: "bottom",
    fontSize: 20,
    color: "black",
    paddingTop: 5,
  },
  buttonImage: {
    flex: 0.4,
    width: 30,
    height: 30,
    margin: 3,
  },
});

export default ViewItem;
