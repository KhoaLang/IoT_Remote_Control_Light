import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const SplashScreen = (props) => {
  const [splashScreen, setSplashScreen] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => {
      setSplashScreen(false);
    }, 4000);
  }, []);

  useEffect(() => {
    if (!splashScreen) {
      props.navigation.replace("Home");
    }
  }, [splashScreen]);

  return (
    <SafeAreaView style={styles.splashScreen}>
      <Text style={styles.mainText}>Retrol App</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  splashScreen: {
    flex: 1,
    width: "100%",
    backgroundColor: "#DE709E",
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    color: "#fff",
    fontSize: 60,
  },
});

export default SplashScreen;
