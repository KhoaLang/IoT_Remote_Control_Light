import React, { useState, useEffect } from "react";
import SplashScreen from "./src/components/splashScreen/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/components/Home/Home";
import { NativeBaseProvider } from "native-base";
import Burger from "./src/components/layouts/burger/Burger";
import Noti from "./src/components/layouts/notification/Noti";
import Power from "./src/components/power/Power";
import Timer from "./src/components/Timer/Timer";
import { setDeviceToDefault } from "./src/config";

const Stack = createNativeStackNavigator();
export default function App() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    setDeviceToDefault();

    return () => {
      setDeviceToDefault();
    };
  }, []);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Splash screen"
            component={SplashScreen}
          />
          <Stack.Screen
            options={{
              headerTintColor: "#FF7AA2",
              headerLeft: () => <Burger menu={menu} setMenu={setMenu} />,
              headerRight: () => <Noti />,
            }}
            name="Home"
          >
            {(props) => <Home {...props} setMenu={setMenu} menu={menu} />}
          </Stack.Screen>
          <Stack.Screen
            options={{
              headerTintColor: "#FF7AA2",
            }}
            name="Power ON/OFF"
            component={Power}
          />
          <Stack.Screen
            options={{
              headerTintColor: "#FF7AA2",
            }}
            name="Timer"
            component={Timer}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
