import * as React from "react";
import { Pressable, Text, StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Padding,
  Border,
  FontFamily,
  FontSize,
  Color,
} from "../GlobalStyles";

const Onboarding3 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.onboarding3}
      locations={[0.63, 1]}
      colors={["#13e20f", "#49c9ff"]}
    >
      <Pressable style={styles.pressable}>
        <Pressable
          style={styles.onboarding3Inner}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={[styles.frameWrapper, styles.buttonSpaceBlock]}>
            <View style={[styles.buttonWrapper, styles.buttonFlexBox]}>
              <View
                style={[
                  styles.button,
                  styles.buttonFlexBox,
                  styles.buttonSpaceBlock,
                ]}
              >
                <Text style={[styles.next, styles.nextTypo]}>Back to home</Text>
              </View>
            </View>
          </View>
        </Pressable>
        <View style={styles.frameParent}>
          <View>
            <Text style={[styles.booking, styles.bookingTypo]}>Booking</Text>
            <Text style={[styles.berhasil, styles.bookingTypo]}>Berhasil</Text>
          </View>
          <Text
            style={[styles.siapkanSemuanyaSebelum, styles.mt4, styles.nextTypo]}
          >
            Siapkan semuanya sebelum tanggal perjalanan Anda
          </Text>
        </View>
        <View style={styles.statusBar}>
          <View style={[styles.action, styles.timeLayout]}>
            <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
          </View>
          <Image
            style={styles.containerIcon}
            resizeMode="cover"
            source={require("../assets/container.png")}
          />
        </View>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_6xs,
  },
  buttonSpaceBlock: {
    paddingHorizontal: Padding.p_lg,
    flexDirection: "row",
    borderRadius: Border.br_sm,
  },
  buttonFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  nextTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
  },
  bookingTypo: {
    width: 295,
    fontWeight: "700",
    color: Color.primaryPureWhite,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    letterSpacing: 0,
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  next: {
    fontWeight: "500",
    color: Color.black,
    lineHeight: 18,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    flex: 1,
  },
  button: {
    backgroundColor: Color.primaryPureWhite,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
  },
  buttonWrapper: {
    justifyContent: "space-between",
  },
  frameWrapper: {
    height: 372,
    paddingVertical: 0,
  },
  onboarding3Inner: {
    top: 390,
    left: 17,
    position: "absolute",
  },
  booking: {
    fontSize: 36,
    lineHeight: 48,
  },
  berhasil: {
    fontSize: FontSize.size_5xl,
    lineHeight: 40,
  },
  siapkanSemuanyaSebelum: {
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    alignSelf: "stretch",
  },
  frameParent: {
    top: 292,
    left: 37,
    position: "absolute",
  },
  time: {
    left: 0,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    top: 0,
    color: Color.primaryPureWhite,
    width: 54,
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 0,
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
  },
  pressable: {
    height: "100%",
    overflow: "hidden",
    backgroundColor: "transparent",
    flex: 1,
    width: "100%",
  },
  onboarding3: {
    height: 812,
    width: "100%",
  },
});

export default Onboarding3;
