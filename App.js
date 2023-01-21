const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Onboarding3 from "./screens/Onboarding3";
import RiwayatTransaksi from "./screens/RiwayatTransaksi";
import Payment from "./screens/Payment";
import PaymentMethod from "./screens/PaymentMethod";
import TourDetail from "./screens/TourDetail";
import Home from "./screens/Home";
import CreateAccount from "./screens/CreateAccount";
import Login from "./screens/Login";
import Onboarding2 from "./screens/Onboarding2";
import Onboarding1Icon from "./screens/Onboarding1Icon";
import SplashScreen from "./screens/SplashScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins.ttf"),
    "SF Pro Text": require("./assets/fonts/SF_Pro_Text.ttf"),
    "DM Sans": require("./assets/fonts/DM_Sans.ttf"),
    Roboto: require("./assets/fonts/Roboto.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Onboarding1"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Onboarding3"
              component={Onboarding3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RiwayatTransaksi"
              component={RiwayatTransaksi}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Payment"
              component={Payment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentMethod"
              component={PaymentMethod}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TourDetail"
              component={TourDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateAccount"
              component={CreateAccount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding2"
              component={Onboarding2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding1"
              component={Onboarding1Icon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
