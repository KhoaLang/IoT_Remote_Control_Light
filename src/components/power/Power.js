import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import MySwitch from "../layouts/switch/MySwitch";

const Power = () => {
  const devices = ["Đèn LED", "Quạt"];
  return (
    <SafeAreaView style={styles.main}>
      {devices.map((item, idx) => (
        <MySwitch key={idx} name={item} />
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
export default Power;
