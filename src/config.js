import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAfEF6czGpoa66XjigYdYFZlmLqfBj7GXs",
  authDomain: "arduino-c17e5.firebaseapp.com",
  databaseURL:
    "https://arduino-c17e5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "arduino-c17e5",
  storageBucket: "arduino-c17e5.appspot.com",
  messagingSenderId: "106384515009",
  appId: "1:106384515009:web:0a501381726ff04343d940",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getDatabase();

const takeValue = (device) => {
  // const db = getDatabase();
  // const reference = ref(db, "Fan/setLed");
  const dbRef = ref(getDatabase());
  let data;
  get(child(dbRef, `${device}/turnONOFF`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(snapshot.val());
        data = { state: snapshot.val() };
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  get(child(dbRef, `${device}/setTimeout`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(snapshot.val());
        data = { ...data, timeout: snapshot.val() };
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

const setDeviceToDefault = () => {
  set(ref(db, `device`), 0);
};

const getDevice = (device) => {
  const deviceValue = device === "LED" ? 1 : 2;
  set(ref(db, `device`), deviceValue);
};

const setStateValue = (device, value) => {
  const bitValue = value === true ? 1 : 0;
  set(ref(db, `${device}/turnONOFF`), bitValue);
  if (value === true) {
    getDevice(device);
  } else {
    setDeviceToDefault();
  }
};
const setTimeoutValue = (device, value) => {
  set(ref(db, `${device}/setTimeout`), value);
  getDevice(device);
};

export { takeValue, setStateValue, setTimeoutValue, setDeviceToDefault };
