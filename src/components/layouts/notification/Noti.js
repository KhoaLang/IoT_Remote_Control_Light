import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

const Noti = () => {
  return (
    <View>
      <TouchableOpacity style={styles.main}>
        <Image
          style={{ width: 26, height: 26 }}
          source={require("../../../assets/bell-regular-24.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    borderRadius: 99,
    padding: 4,
    alignItems: "center",
  },
});

export default Noti;
