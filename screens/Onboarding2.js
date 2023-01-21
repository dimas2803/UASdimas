import * as React from "react";
import { Pressable, Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Padding,
  Border,
  FontFamily,
  Color,
  FontSize,
} from "../GlobalStyles";

const Onboarding2 = () => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.onboarding2}>
      <Image
        style={[styles.image2Icon, styles.cardPosition]}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      <View style={[styles.card, styles.cardPosition]}>
        <View style={[styles.onboardingCard, styles.buttonSpaceBlock]}>
          <Pressable
            style={[styles.textButton, styles.buttonFlexBox]}
            onPress={() => navigation.navigate("Login")}
          >
            <View style={styles.titleSubtitle}>
              <Text
                style={[
                  styles.visitTouristAttractions,
                  styles.findThousansOfFlexBox,
                ]}
              >
                Kunjungi tempat wisata
              </Text>
              <Text
                style={[
                  styles.findThousansOf,
                  styles.mt10,
                  styles.findThousansOfFlexBox,
                ]}
              >
                Temukan ribuan destinasi wisata yang siap untuk Anda kunjungi
              </Text>
            </View>
            <View
              style={[
                styles.button,
                styles.buttonFlexBox,
                styles.buttonSpaceBlock,
              ]}
            >
              <Text style={[styles.next, styles.nextFlexBox]}>Next</Text>
            </View>
          </Pressable>
        </View>
        <View style={[styles.rectangleParent, styles.mt15]}>
          <View style={[styles.frameChild, styles.frameLayout]} />
          <View style={[styles.frameItem, styles.ml5, styles.frameLayout]} />
          <View style={[styles.frameChild, styles.ml5, styles.frameLayout]} />
        </View>
      </View>
      <View style={[styles.statusBar, styles.cardPosition]}>
        <View style={[styles.action, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout, styles.nextFlexBox]}>
            9:41
          </Text>
        </View>
        <Image
          style={styles.containerIcon}
          resizeMode="cover"
          source={require("../assets/container.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mt10: {
    marginTop: Margin.m_2xs,
  },
  ml5: {
    marginLeft: Margin.m_5xs,
  },
  mt15: {
    marginTop: Margin.m_lg,
  },
  cardPosition: {
    left: "50%",
    position: "absolute",
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
  findThousansOfFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
    fontFamily: FontFamily.poppins,
    alignSelf: "stretch",
  },
  nextFlexBox: {
    textAlign: "center",
    color: Color.primaryPureWhite,
    lineHeight: 18,
    letterSpacing: 0,
  },
  frameLayout: {
    height: 6,
    borderRadius: Border.br_3xl,
    flex: 1,
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  image2Icon: {
    marginLeft: -170.5,
    bottom: 385,
    width: 111,
    height: 108,
  },
  visitTouristAttractions: {
    fontSize: 33,
    lineHeight: 40,
    color: Color.black,
    fontWeight: "600",
  },
  findThousansOf: {
    color: Color.gray_400,
    fontSize: FontSize.size_xl,
  },
  titleSubtitle: {
    width: 295,
  },
  next: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
    textAlign: "center",
    color: Color.primaryPureWhite,
    lineHeight: 18,
    flex: 1,
  },
  button: {
    backgroundColor: Color.green,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
  },
  textButton: {
    justifyContent: "space-between",
  },
  onboardingCard: {
    height: 316,
    paddingVertical: Padding.p_6xl,
    backgroundColor: Color.primaryPureWhite,
  },
  frameChild: {
    backgroundColor: Color.gray_300,
  },
  frameItem: {
    backgroundColor: Color.primaryPureWhite,
  },
  rectangleParent: {
    paddingHorizontal: Padding.p_8xl,
    paddingVertical: 0,
    borderRadius: Border.br_3xl,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  card: {
    marginLeft: -167.5,
    bottom: 35,
  },
  time: {
    left: 0,
    fontFamily: FontFamily.sFProText,
    top: 0,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
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
    width: 375,
    height: 44,
    top: 0,
  },
  onboarding2: {
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
  },
});

export default Onboarding2;
