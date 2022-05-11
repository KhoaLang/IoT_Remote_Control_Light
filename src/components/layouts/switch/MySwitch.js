import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { setStateValue } from "../../../config";

const MySwitch = (props) => {
  const { name } = props;
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  useEffect(() => {
    let device = name.includes("Đèn LED") ? "LED" : "Fan";
    setStateValue(device, isEnabled);
    // console.log(isEnabled);
  }, [isEnabled]);

  return (
    <View style={[styles.main, styles.shadowProps]}>
      <LinearGradient
        colors={["#ededed", "#FDFDFD"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.main__inner}
      >
        <Text style={styles.title}>{name}</Text>
        <Switch
          trackColor={{ false: "#fff", true: "#ffffff" }}
          thumbColor={isEnabled ? "#DE709E" : "#f4f3f4"}
          ios_backgroundColor="#fff"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "50%",
    height: "30%",
    borderRadius: 10,
    // backgroundColor: "red",
  },
  main__inner: {
    width: "100%",
    height: "100%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#FF7AA2",
    fontSize: 20,
  },
  shadowProps: {
    shadowColor: "#FF7AA2",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },
});

export default MySwitch;
