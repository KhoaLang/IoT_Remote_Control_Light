import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import TimePicker from "react-native-wheel-time-picker";
import { setTimeoutValue } from "../../../config";

const MILLISECONDS_PER_MINUTE = 60 * 1000;
const MILLISECONDS_PER_HOUR = 60 * 60 * 1000;
const MILLISECONDS_PER_DAY = 24 * MILLISECONDS_PER_HOUR;

const MyTimerCard = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [timeValue, setTimeValue] = useState(Date.now() % MILLISECONDS_PER_DAY);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const { name } = props;

  const getTime = () => {
    setModalVisible(false);
    let temp = timeValue / 1000;
    let hour = Math.floor(temp / 3600);
    let min = Math.floor((temp - hour * 3600) / 60);

    let device = name.includes("Đèn LED") ? "LED" : "Fan";
    setTimeoutValue(device, temp);

    setHour(hour);
    setMin(min);
    setSec(Math.floor(temp - hour * 3600 - min * 60));
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      let device = name.includes("Đèn LED") ? "LED" : "Fan";
      setTimeoutValue(device, 0);
    }, timeValue);

    return () => {
      clearTimeout(timer);
    };
  }, [timeValue]);

  return (
    <View style={[styles.main, styles.shadowProps]}>
      <View style={styles.title}>
        <Text style={{ color: "#FF7AA2" }}>{name}</Text>
      </View>
      <View style={styles.timer}>
        <View style={styles.clock}>
          <Text style={styles.clockText}>{hour}</Text>
          <Text style={styles.clockText}> : </Text>
          <Text style={styles.clockText}>{min}</Text>
          <Text style={styles.clockText}> : </Text>
          <Text style={styles.clockText}>{sec}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.setTimeButton}
          >
            <Text style={{ textAlign: "center", color: "#FF7AA2" }}>
              Set time
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            width: "100%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(140, 140, 140, 0.8)",
          }}
        >
          <View
            style={{
              width: "60%",
              height: "30%",
              justifyContent: "space-evenly",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 20,
            }}
          >
            <TimePicker
              value={timeValue}
              wheelProps={{
                wheelHeight: 80,
                itemHeight: 20,
                displayCount: 3,
              }}
              timeFormat={["hours24", "|", "min", "|", "sec"]}
              onChange={(newValue) => {
                setTimeValue(newValue);
              }}
            />
            <View
              style={{
                width: "86%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#FF7AA2",
                  borderRadius: 20,
                  width: 100,
                  padding: 10,
                }}
                onPress={getTime}
              >
                <Text style={{ color: "#fff", textAlign: "center" }}>Done</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#FF7AA2",
                  borderRadius: 20,
                  width: 100,
                  padding: 10,
                }}
                onPress={() => setModalVisible(false)}
              >
                <Text style={{ color: "#fff", textAlign: "center" }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    width: "50%",
    height: "30%",
    backgroundColor: "#fff",
    borderRadius: 10,
    // padding: 10,
  },
  title: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  timer: {
    height: "70%",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 20,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#FF7AA2",
  },
  clock: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  clockText: {
    color: "#fff",
  },
  setTimeButton: {
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  shadowProps: {
    shadowColor: "#FF7AA2",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },
});

export default MyTimerCard;
