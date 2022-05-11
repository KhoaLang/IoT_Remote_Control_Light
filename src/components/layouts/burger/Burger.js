import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import {} from "react-native-gesture-handler";

const Burger = ({ menu, setMenu }) => {
  return (
    <TouchableOpacity onPress={() => setMenu(!menu)} style={styles.main}>
      <Image source={require("../../../assets/menu-regular-24.png")} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    borderRadius: 99,
    padding: 4,
    alignItems: "center",
  },
});

export default Burger;
