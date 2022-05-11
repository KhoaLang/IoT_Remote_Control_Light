import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import MyTimerCard from "../layouts/timerCard/MyTimerCard";

const Timer = () => {
  const functions = ["Đèn LED", "Quạt"];

  return (
    <SafeAreaView style={styles.main}>
      {functions.map((item, idx) => (
        <MyTimerCard key={idx} name={item} />
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
    width: "100%",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default Timer;
