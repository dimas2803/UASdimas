import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.splashScreen}
      onPress={() => navigation.navigate("Onboarding1")}
    >
      <Text style={[styles.travelingAnjayy, styles.timeTypo]}>
        <Text style={styles.traveling}>TRAVELING</Text>
        <Text style={styles.traveling}> </Text>
        <Text style={styles.anjayy}>ANJAYY</Text>
      </Text>
      <View style={styles.statusBar}>
        <View style={[styles.action, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout, styles.timeTypo]}>
            9:41
          </Text>
        </View>
        <Image
          style={styles.containerIcon}
          resizeMode="cover"
          source={require("../assets/container1.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  timeTypo: {
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 18,
    letterSpacing: 0,
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  traveling: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  anjayy: {
    margin: 0,
  },
  travelingAnjayy: {
    top: 181,
    left: 75,
    fontSize: 40,
    fontFamily: FontFamily.poppins,
    color: Color.black,
    position: "absolute",
  },
  time: {
    left: 0,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.sFProText,
    color: Color.primaryNavyBlack,
    top: 0,
  },
  action: {
    top: 14,
    left: 20,
    height: 18,
  },
  containerIcon: {
    marginTop: -5.84,
    top: "50%",
    right: 15,
    width: 67,
    height: 12,
    position: "absolute",
  },
  statusBar: {
    marginLeft: -186.5,
    left: "50%",
    width: 375,
    height: 44,
    top: 0,
    position: "absolute",
    backgroundColor: Color.primaryPureWhite,
  },
  splashScreen: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.primaryPureWhite,
  },
});

export default SplashScreen;
