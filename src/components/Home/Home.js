import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Modal,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FunctionCard from "../layouts/functionCard/FunctionCard";
import { takeFanLEDValue } from "../../config";

const Home = (props) => {
  const { setMenu, menu } = props;
  const functions = [
    {
      name: "Power ON/OFF",
      url: require("../../assets/power-off-regular-24.png"),
    },
    {
      name: "Timer",
      url: require("../../assets/time-five-regular-24.png"),
    },
  ];
  // useEffect(() => {
  //   takeFanLEDValue();
  // }, []);

  return (
    <SafeAreaView style={styles.main}>
      <Modal animationType="fade" transparent={true} visible={menu}>
        <View style={styles.menuOutsideOverlay}>
          <View style={styles.menuInnerOverlay}>
            <View
              style={{
                // backgroundColor: "#000",
                marginTop: 20,
                alignSelf: "flex-start",
              }}
            >
              <TouchableOpacity onPress={() => setMenu(false)}>
                <Image
                  source={require("../../assets/left-arrow-alt-regular-24.png")}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Image
                source={require("../../assets/left-arrow-alt-regular-24.png")}
              />
              <Text style={{ color: "#FF7AA2" }}>Log Out</Text>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.main}>
        {functions.map((item, idx) => (
          <FunctionCard name={item.name} key={idx} url={item.url} />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    // justifyContent: "center",
  },
  menuOutsideOverlay: {
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    flex: 1,
  },
  menuInnerOverlay: {
    width: "30%",
    backgroundColor: "#fff",
    padding: 10,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Home;
