import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const FunctionCard = (props) => {
  const navigation = useNavigation();
  const { name, url } = props;
  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(name)}
      >
        <Text style={{ color: "#fff" }}>{name}</Text>
        <Image source={url} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "85%",
    backgroundColor: "#FF7AA2",
    marginTop: 20,
    borderRadius: 20,
  },
  button: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export default FunctionCard;
