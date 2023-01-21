import * as React from "react";
import { Pressable, Text, StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border,
} from "../GlobalStyles";

const CreateAccount = () => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.createAccount}>
      <View
        style={[styles.createAccountParent, styles.createAccountParentPosition]}
      >
        <Text style={[styles.createAccount1, styles.textFlexBox]}>
          Create account
        </Text>
        <Text
          style={[
            styles.getTheBest,
            styles.mt5,
            styles.firstNameClr,
            styles.johnTypo,
          ]}
        >
          Get the best out of derleng by creating an account
        </Text>
      </View>
      <View
        style={[styles.profileRegisterFile, styles.createAccountParentPosition]}
      >
        <View style={styles.nameParent}>
          <View style={styles.name}>
            <Text style={[styles.firstNameTypo, styles.firstNameClr]}>
              First name
            </Text>
            <View
              style={[
                styles.johnWrapper,
                styles.mt2,
                styles.wrapperFlexBox,
                styles.wrapperBorder,
              ]}
            >
              <Text style={[styles.johnTypo, styles.johnClr]}>John</Text>
            </View>
          </View>
          <View style={[styles.name, styles.mt12]}>
            <Text style={styles.firstNameClr}>Last name</Text>
            <View
              style={[
                styles.johnWrapper,
                styles.mt2,
                styles.wrapperFlexBox,
                styles.wrapperBorder,
              ]}
            >
              <Text style={styles.johnClr}>Doe</Text>
            </View>
          </View>
          <View style={[styles.name, styles.mt12]}>
            <Text style={styles.firstNameClr}>Phone</Text>
            <View style={[styles.frameParent, styles.mt2]}>
              <View
                style={[
                  styles.parent,
                  styles.parentBorder,
                  styles.parentSpaceBlock,
                ]}
              >
                <Text style={[styles.textTypo, styles.textFlexBox]}>+855</Text>
                <Image
                  style={[styles.caretDownIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/caretdown.png")}
                />
              </View>
              <View
                style={[
                  styles.wrapper,
                  styles.ml5,
                  styles.wrapperFlexBox,
                  styles.wrapperBorder,
                ]}
              >
                <Text style={styles.johnClr}>123 456 789</Text>
              </View>
            </View>
          </View>
          <View style={[styles.name, styles.mt12]}>
            <Text style={styles.firstNameClr}>Age</Text>
            <View
              style={[
                styles.container,
                styles.mt2,
                styles.parentSpaceBlock,
                styles.wrapperFlexBox,
              ]}
            >
              <Text style={styles.johnClr}>30</Text>
            </View>
          </View>
          <View style={[styles.name, styles.mt12]}>
            <Text style={styles.firstNameClr}>Email</Text>
            <View
              style={[
                styles.johnWrapper,
                styles.mt2,
                styles.wrapperFlexBox,
                styles.wrapperBorder,
              ]}
            >
              <Text style={styles.johnClr}>jonhn.ux@gmail.com</Text>
            </View>
          </View>
          <View style={[styles.name, styles.mt12]}>
            <Text style={styles.firstNameClr}>Password</Text>
            <View style={[styles.frameGroup, styles.mt2, styles.parentBorder]}>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.frameChild}
                  resizeMode="cover"
                  source={require("../assets/ellipse-22.png")}
                />
                <Image
                  style={[styles.frameChild, styles.ml5]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-22.png")}
                />
                <Image
                  style={[styles.frameChild, styles.ml5]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-22.png")}
                />
                <Image
                  style={[styles.frameChild, styles.ml5]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-22.png")}
                />
                <Image
                  style={[styles.frameChild, styles.ml5]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-22.png")}
                />
                <Image
                  style={[styles.frameChild, styles.ml5]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-22.png")}
                />
                <Image
                  style={[styles.frameChild, styles.ml5]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-22.png")}
                />
                <Image
                  style={[styles.frameChild, styles.ml5]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-22.png")}
                />
              </View>
              <Image
                style={[styles.eyeIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/eye.png")}
              />
            </View>
          </View>
          <View
            style={[styles.checkBoxParent, styles.mt12, styles.wrapperFlexBox]}
          >
            <View style={styles.checkBox}>
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={require("../assets/vector96.png")}
              />
            </View>
            <Text style={[styles.iAcceptTerm, styles.ml10, styles.textFlexBox]}>
              I accept term and condition
            </Text>
          </View>
        </View>
        <View style={[styles.button, styles.mt15, styles.wrapperFlexBox]}>
          <Text style={[styles.next, styles.nextFlexBox, styles.textTypo]}>
            Create Account
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.alreadyHaveAnContainer, styles.firstNameTypo]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.alreadyHaveAn}>{`Already have an account? `}</Text>
        <Text style={[styles.goBack, styles.johnClr]}>Go back</Text>
      </Pressable>
      <Image
        style={styles.angleLeftIcon}
        resizeMode="cover"
        source={require("../assets/angleleft.png")}
      />
      <View style={styles.statusBar}>
        <View style={[styles.action, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout, styles.nextFlexBox]}>
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
  mt5: {
    marginTop: Margin.m_5xs,
  },
  mt2: {
    marginTop: Margin.m_8xs,
  },
  ml5: {
    marginLeft: Margin.m_5xs,
  },
  ml10: {
    marginLeft: Margin.m_2xs,
  },
  mt12: {
    marginTop: Margin.m_xs,
  },
  mt15: {
    marginTop: Margin.m_lg,
  },
  createAccountParentPosition: {
    left: 26,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  firstNameClr: {
    color: Color.gray_400,
    fontFamily: FontFamily.poppins,
  },
  johnTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  wrapperBorder: {
    paddingBottom: Padding.p_6xs,
    paddingTop: Padding.p_6xs,
    paddingLeft: Padding.p_2xs,
    alignItems: "center",
    height: 52,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderStyle: "solid",
    borderRadius: Border.br_sm,
  },
  johnClr: {
    color: Color.black,
    fontFamily: FontFamily.poppins,
  },
  parentBorder: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: 52,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderStyle: "solid",
    borderRadius: Border.br_sm,
  },
  parentSpaceBlock: {
    paddingRight: Padding.p_6xs,
    paddingBottom: Padding.p_6xs,
    paddingTop: Padding.p_6xs,
    paddingLeft: Padding.p_2xs,
  },
  iconLayout: {
    width: 19,
    overflow: "hidden",
  },
  nextFlexBox: {
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 0,
  },
  textTypo: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppins,
  },
  firstNameTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  createAccount1: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    letterSpacing: 0,
  },
  getTheBest: {
    alignSelf: "stretch",
    letterSpacing: 0,
  },
  createAccountParent: {
    top: 110,
    width: 323,
  },
  johnWrapper: {
    alignSelf: "stretch",
  },
  name: {
    alignSelf: "stretch",
  },
  caretDownIcon: {
    height: 18,
  },
  parent: {
    width: 85,
  },
  wrapper: {
    flex: 1,
  },
  frameParent: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  container: {
    height: 52,
    borderColor: "rgba(0, 0, 0, 0.1)",
    paddingRight: Padding.p_6xs,
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_sm,
    alignSelf: "stretch",
  },
  frameChild: {
    width: 7,
    height: 7,
  },
  ellipseParent: {
    flexDirection: "row",
  },
  eyeIcon: {
    height: 19,
  },
  frameGroup: {
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_6xs,
    alignSelf: "stretch",
  },
  vectorIcon: {
    width: 11,
    height: 8,
  },
  checkBox: {
    borderRadius: Border.br_4xs,
    borderColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 4,
    paddingVertical: 6,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.primaryPureWhite,
  },
  iAcceptTerm: {
    fontSize: 11,
    textDecoration: "underline",
    fontFamily: FontFamily.poppins,
  },
  checkBoxParent: {
    width: 323,
  },
  nameParent: {
    width: 323,
  },
  next: {
    fontWeight: "500",
    color: Color.primaryPureWhite,
    flex: 1,
  },
  button: {
    backgroundColor: Color.green,
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    borderRadius: Border.br_sm,
    alignItems: "center",
    alignSelf: "stretch",
  },
  profileRegisterFile: {
    top: 173,
  },
  alreadyHaveAn: {
    color: Color.gray_600,
    fontFamily: FontFamily.poppins,
  },
  goBack: {
    fontWeight: "600",
  },
  alreadyHaveAnContainer: {
    top: 764,
    left: 99,
    position: "absolute",
  },
  angleLeftIcon: {
    top: 53,
    left: 24,
    width: 25,
    height: 46,
    position: "absolute",
    overflow: "hidden",
  },
  time: {
    left: 0,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.dMSans,
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
    marginLeft: -187.5,
    left: "50%",
    width: 375,
    height: 44,
    top: 0,
    position: "absolute",
    backgroundColor: Color.primaryPureWhite,
  },
  createAccount: {
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.primaryPureWhite,
  },
});

export default CreateAccount;
