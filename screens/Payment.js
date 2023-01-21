import * as React from "react";
import { Pressable, Text, StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  FontSize,
  Color,
  FontFamily,
  Padding,
  Border,
} from "../GlobalStyles";

const Payment = () => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.payment}>
      <View style={[styles.frameParent, styles.actionPosition]}>
        <View>
          <LinearGradient
            style={styles.frameContainer}
            locations={[0, 0.97]}
            colors={["#1f4352", "#227092"]}
          >
            <View style={styles.frameGroup}>
              <View style={styles.dimasGaluhPratamaParent}>
                <Text style={[styles.dimasGaluhPratama, styles.rp12000000Typo]}>
                  Dimas Galuh Pratama
                </Text>
                <View style={styles.mt10}>
                  <View>
                    <Text style={[styles.accountBalance, styles.personTypo]}>
                      Account Balance
                    </Text>
                    <Text style={[styles.rp12000000, styles.rp12000000Typo]}>
                      Rp 12.000.000
                    </Text>
                  </View>
                  <View style={styles.mt6}>
                    <Text style={[styles.accountBalance, styles.personTypo]}>
                      Master Card
                    </Text>
                    <Text style={styles.text}>744 *** *** 937</Text>
                  </View>
                </View>
              </View>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/group-259.png")}
              />
            </View>
          </LinearGradient>
        </View>
        <View style={styles.mt40}>
          <View style={styles.name}>
            <Text style={styles.cardNumber}>Card Number</Text>
            <View style={[styles.wrapper, styles.mt2, styles.wrapperFlexBox]}>
              <Text style={styles.text1Typo}>828 174 545</Text>
            </View>
          </View>
          <View style={[styles.name, styles.mt20]}>
            <Text style={styles.cardNumber}>CVV</Text>
            <View style={[styles.wrapper, styles.mt2, styles.wrapperFlexBox]}>
              <Text style={styles.text1Typo}>744 222 564 937</Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={[
          styles.buttonParent,
          styles.buttonParentPosition,
          styles.wrapperFlexBox,
        ]}
        onPress={() => navigation.navigate("Onboarding3")}
      >
        <View style={styles.button}>
          <Text style={styles.next}>
            <Text style={styles.text3}>{`1.000.000 `}</Text>
            <Text style={styles.personTypo}>/2Person</Text>
          </Text>
        </View>
        <View style={styles.button1}>
          <Text style={[styles.next1, styles.timeFlexBox]}>Confirm</Text>
        </View>
      </Pressable>
      <View style={[styles.screenNameAndStauts, styles.buttonParentPosition]}>
        <View style={styles.screenNameAndStautsChild} />
        <Pressable
          style={styles.statusBarParent}
          onPress={() => navigation.navigate("PaymentMethod")}
        >
          <View style={styles.statusBar}>
            <View style={[styles.action, styles.actionPosition]}>
              <Text
                style={[styles.time, styles.timePosition, styles.timeFlexBox]}
              >
                9:41
              </Text>
            </View>
            <Image
              style={styles.containerIcon}
              resizeMode="cover"
              source={require("../assets/container1.png")}
            />
          </View>
          <View
            style={[styles.detailHeader, styles.mt10, styles.wrapperFlexBox]}
          >
            <View style={[styles.backAndScreenName, styles.wrapperFlexBox]}>
              <View style={styles.arrowBackLayout}>
                <Image
                  style={styles.vectorIcon}
                  resizeMode="cover"
                  source={require("../assets/vector15.png")}
                />
                <Image
                  style={[styles.vectorIcon1, styles.ml10]}
                  resizeMode="cover"
                  source={require("../assets/vector16.png")}
                />
              </View>
              <Text style={[styles.screenTitle, styles.ml19, styles.text1Typo]}>
                Payment
              </Text>
            </View>
            <View
              style={[styles.otherAction, styles.ml19, styles.arrowBackLayout]}
            >
              <Image
                style={styles.layerGroupIcon}
                resizeMode="cover"
                source={require("../assets/layergroup.png")}
              />
            </View>
            <View
              style={[styles.otherAction, styles.ml19, styles.arrowBackLayout]}
            >
              <Image
                style={styles.penSquareIcon}
                resizeMode="cover"
                source={require("../assets/pensquare.png")}
              />
            </View>
            <View
              style={[styles.otherAction, styles.ml19, styles.arrowBackLayout]}
            >
              <Image
                style={styles.penSquareIcon}
                resizeMode="cover"
                source={require("../assets/search.png")}
              />
            </View>
            <View
              style={[styles.otherAction, styles.ml19, styles.arrowBackLayout]}
            >
              <Image
                style={styles.plusIcon}
                resizeMode="cover"
                source={require("../assets/plus.png")}
              />
            </View>
            <View style={[styles.history, styles.ml19]}>
              <Image
                style={[styles.historyIcon, styles.timePosition]}
                resizeMode="cover"
                source={require("../assets/history.png")}
              />
              <View style={styles.frame}>
                <Text style={styles.text4}>1</Text>
              </View>
            </View>
          </View>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mt6: {
    marginTop: Margin.m_4xs,
  },
  mt10: {
    marginTop: Margin.m_2xs,
  },
  mt2: {
    marginTop: Margin.m_8xs,
  },
  mt20: {
    marginTop: Margin.m_3xl,
  },
  mt40: {
    marginTop: Margin.m_6xl,
  },
  ml10: {
    marginLeft: Margin.m_2xs,
  },
  ml19: {
    marginLeft: Margin.m_2xl,
  },
  actionPosition: {
    left: 20,
    position: "absolute",
  },
  rp12000000Typo: {
    fontSize: FontSize.size_4xl,
    textAlign: "left",
    color: Color.primaryPureWhite,
    fontFamily: FontFamily.poppins,
  },
  personTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppins,
  },
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  buttonParentPosition: {
    left: "50%",
    marginLeft: -187.5,
    width: 375,
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 0,
  },
  timePosition: {
    left: 0,
    position: "absolute",
  },
  text1Typo: {
    color: Color.black,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
  },
  arrowBackLayout: {
    padding: Padding.p_5xs,
    height: 36,
    width: 36,
    borderRadius: Border.br_xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.primaryPureWhite,
  },
  dimasGaluhPratama: {
    textAlign: "left",
    color: Color.primaryPureWhite,
    fontFamily: FontFamily.poppins,
    fontWeight: "700",
  },
  accountBalance: {
    textAlign: "left",
    color: Color.primaryPureWhite,
  },
  rp12000000: {
    fontWeight: "600",
    textAlign: "left",
    color: Color.primaryPureWhite,
    fontFamily: FontFamily.poppins,
  },
  text: {
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    color: Color.primaryPureWhite,
    fontFamily: FontFamily.poppins,
    fontWeight: "700",
  },
  dimasGaluhPratamaParent: {
    alignSelf: "stretch",
  },
  frameChild: {
    width: 50,
    height: 30,
  },
  frameGroup: {
    width: 283,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  frameContainer: {
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowRadius: 15,
    elevation: 15,
    paddingVertical: Padding.p_2xl,
    backgroundColor: "transparent",
    paddingHorizontal: Padding.p_lg,
    width: 335,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  cardNumber: {
    fontSize: FontSize.size_sm,
    color: Color.gray_400,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
  },
  wrapper: {
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    height: 52,
    paddingLeft: Padding.p_2xs,
    paddingTop: Padding.p_6xs,
    paddingBottom: Padding.p_6xs,
    borderRadius: Border.br_sm,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  name: {
    width: 335,
  },
  frameParent: {
    top: 125,
  },
  text3: {
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppins,
  },
  next: {
    color: Color.teal_200,
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "left",
    flex: 1,
  },
  button: {
    paddingVertical: Padding.p_sm,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_sm,
    paddingHorizontal: Padding.p_lg,
    flex: 1,
  },
  next1: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    color: Color.primaryPureWhite,
    fontFamily: FontFamily.poppins,
    flex: 1,
  },
  button1: {
    backgroundColor: Color.green,
    justifyContent: "center",
    paddingVertical: Padding.p_sm,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_sm,
    paddingHorizontal: Padding.p_lg,
    flex: 1,
  },
  buttonParent: {
    bottom: 0,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 23,
    elevation: 23,
    height: 74,
    paddingLeft: Padding.p_8xs,
    paddingRight: Padding.p_xl,
    width: 375,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: "50%",
    marginLeft: -187.5,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.primaryPureWhite,
  },
  screenNameAndStautsChild: {
    height: "69.31%",
    top: "30.69%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.primaryPureWhite,
  },
  time: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.dMSans,
    color: Color.primaryNavyBlack,
    width: 54,
    top: 0,
    fontWeight: "700",
  },
  action: {
    top: 14,
    height: 18,
    width: 54,
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
    height: 44,
    width: 375,
    backgroundColor: Color.primaryPureWhite,
  },
  vectorIcon: {
    width: 14,
    height: 14,
  },
  vectorIcon1: {
    width: 16,
    height: 16,
    display: "none",
  },
  screenTitle: {
    fontWeight: "600",
  },
  backAndScreenName: {
    flex: 1,
  },
  layerGroupIcon: {
    width: 17,
    height: 17,
    overflow: "hidden",
  },
  otherAction: {
    display: "none",
  },
  penSquareIcon: {
    height: 22,
    width: 22,
    overflow: "hidden",
  },
  plusIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  historyIcon: {
    top: 3,
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  text4: {
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    color: Color.primaryPureWhite,
    fontFamily: FontFamily.poppins,
  },
  frame: {
    height: "47.62%",
    width: "45.45%",
    bottom: "52.38%",
    left: "54.55%",
    backgroundColor: "#f83232",
    padding: Padding.p_6xs,
    borderRadius: Border.br_xl,
    top: "0%",
    right: "0%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  history: {
    height: 21,
    width: 22,
    display: "none",
  },
  detailHeader: {
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  statusBarParent: {
    height: "89.11%",
    bottom: "10.89%",
    top: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  screenNameAndStauts: {
    height: 101,
    top: 0,
    width: 375,
  },
  payment: {
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.primaryPureWhite,
  },
});

export default Payment;
