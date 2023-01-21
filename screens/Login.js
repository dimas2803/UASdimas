import * as React from "react";
import { Pressable, Text, StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  FontSize,
  Color,
  FontFamily,
  Padding,
  Border,
} from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.login}>
      <Pressable
        style={styles.doesntHaveAccountOnDicoveWrapper}
        onPress={() => navigation.navigate("CreateAccount")}
      >
        <Text
          style={[styles.doesntHaveAccountContainer, styles.enterYourEmailTypo]}
        >
          <Text
            style={styles.doesntHaveAccount}
          >{`Doesn’t have account on dicover? `}</Text>
          <Text style={[styles.createAccount, styles.createAccountTypo]}>
            Create Account
          </Text>
        </Text>
      </Pressable>
      <Pressable
        style={styles.frameParent}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={styles.frameWrapper}>
          <View style={styles.welcomeToDiscoverParent}>
            <Text style={[styles.welcomeToDiscover, styles.createAccountTypo]}>
              Welcome to Discover
            </Text>
            <Text style={[styles.pleaseChooseYour, styles.withTypo]}>
              Please choose your login option below
            </Text>
          </View>
        </View>
        <View style={[styles.frameGroup, styles.mt30]}>
          <View>
            <View>
              <View>
                <Text style={[styles.email1, styles.withTypo]}>Email</Text>
                <View
                  style={[
                    styles.enterYourEmailAddressWrapper,
                    styles.mt2,
                    styles.loginMethodBorder,
                    styles.emailLayout,
                  ]}
                >
                  <Text
                    style={[styles.enterYourEmail, styles.enterYourEmailTypo]}
                  >
                    Enter your email address
                  </Text>
                </View>
              </View>
              <View style={styles.mt14}>
                <Text style={[styles.email1, styles.withTypo]}>Password</Text>
                <View
                  style={[
                    styles.emailInner,
                    styles.mt2,
                    styles.emailLayout,
                    styles.emailInnerBorder,
                  ]}
                >
                  <View style={styles.enterYourpasswordParent}>
                    <Text
                      style={[styles.enterYourEmail, styles.enterYourEmailTypo]}
                    >
                      Enter yourរpassword
                    </Text>
                    <Image
                      style={styles.eyeIcon}
                      resizeMode="cover"
                      source={require("../assets/eye.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <Text style={[styles.forgotPassword, styles.mt10, styles.withTypo]}>
              Forgot password?
            </Text>
            <View style={[styles.button, styles.mt10]}>
              <Text style={[styles.next, styles.nextLayout]}>Login</Text>
            </View>
          </View>
          <View style={[styles.rectangleParent, styles.mt20]}>
            <View style={styles.frameChild} />
            <Text style={[styles.orLoginWith, styles.withTypo]}>
              Or login with
            </Text>
            <View style={styles.frameChild} />
          </View>
          <View style={[styles.frameView, styles.mt20]}>
            <View style={[styles.loginMethodParent, styles.emailLayout]}>
              <View style={[styles.loginMethod, styles.loginMethodBorder]}>
                <View style={styles.emailGroup}>
                  <Image
                    style={styles.emailIcon}
                    resizeMode="cover"
                    source={require("../assets/email.png")}
                  />
                  <Image
                    style={[styles.emailIcon, styles.ml5]}
                    resizeMode="cover"
                    source={require("../assets/prointix.png")}
                  />
                  <Image
                    style={[styles.iconLayout, styles.ml5]}
                    resizeMode="cover"
                    source={require("../assets/facebook.png")}
                  />
                  <Image
                    style={[styles.emailIcon, styles.ml5]}
                    resizeMode="cover"
                    source={require("../assets/phone.png")}
                  />
                  <Image
                    style={[
                      styles.googleIcon,
                      styles.ml5,
                      styles.googleIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/google.png")}
                  />
                  <Image
                    style={[styles.appleIcon, styles.ml5, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/apple.png")}
                  />
                  <Text
                    style={[
                      styles.continueWithDerleng,
                      styles.ml5,
                      styles.withTypo,
                    ]}
                  >
                    Facebook
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.loginMethod1,
                  styles.ml8,
                  styles.emailInnerBorder,
                ]}
              >
                <View style={styles.emailGroup}>
                  <Image
                    style={styles.emailIcon}
                    resizeMode="cover"
                    source={require("../assets/email1.png")}
                  />
                  <Image
                    style={[styles.emailIcon, styles.ml10]}
                    resizeMode="cover"
                    source={require("../assets/prointix1.png")}
                  />
                  <Image
                    style={[styles.appleIcon, styles.ml10, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/facebook1.png")}
                  />
                  <Image
                    style={[styles.emailIcon, styles.ml10]}
                    resizeMode="cover"
                    source={require("../assets/phone1.png")}
                  />
                  <Image
                    style={[
                      styles.googleIcon1,
                      styles.ml10,
                      styles.googleIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/google1.png")}
                  />
                  <Image
                    style={[styles.appleIcon, styles.ml10, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/apple1.png")}
                  />
                  <Text
                    style={[
                      styles.continueWithDerleng,
                      styles.ml10,
                      styles.withTypo,
                    ]}
                  >
                    Gmail
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.loginMethod1,
                  styles.ml8,
                  styles.emailInnerBorder,
                ]}
              >
                <View style={styles.emailGroup}>
                  <Image
                    style={styles.emailIcon}
                    resizeMode="cover"
                    source={require("../assets/email2.png")}
                  />
                  <Image
                    style={[styles.emailIcon, styles.ml10]}
                    resizeMode="cover"
                    source={require("../assets/prointix2.png")}
                  />
                  <Image
                    style={[styles.appleIcon, styles.ml10, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/facebook2.png")}
                  />
                  <Image
                    style={[styles.emailIcon, styles.ml10]}
                    resizeMode="cover"
                    source={require("../assets/phone2.png")}
                  />
                  <Image
                    style={[
                      styles.googleIcon,
                      styles.ml10,
                      styles.googleIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/google2.png")}
                  />
                  <Image
                    style={[styles.iconLayout, styles.ml10]}
                    resizeMode="cover"
                    source={require("../assets/apple2.png")}
                  />
                  <Text
                    style={[
                      styles.continueWithDerleng,
                      styles.ml10,
                      styles.withTypo,
                    ]}
                  >
                    Apple
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
      <View style={styles.statusBar}>
        <View style={[styles.action, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout, styles.nextLayout]}>
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
  mt2: {
    marginTop: Margin.m_8xs,
  },
  mt14: {
    marginTop: Margin.m_md,
  },
  mt10: {
    marginTop: Margin.m_2xs,
  },
  ml5: {
    marginLeft: Margin.m_5xs,
  },
  ml10: {
    marginLeft: Margin.m_2xs,
  },
  ml8: {
    marginLeft: Margin.m_3xs,
  },
  mt20: {
    marginTop: Margin.m_3xl,
  },
  mt30: {
    marginTop: 30,
  },
  enterYourEmailTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  createAccountTypo: {
    fontWeight: "600",
    color: Color.black,
    fontFamily: FontFamily.poppins,
  },
  withTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppins,
  },
  loginMethodBorder: {
    paddingLeft: Padding.p_2xs,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderStyle: "solid",
    borderRadius: Border.br_sm,
    alignItems: "center",
  },
  emailLayout: {
    height: 52,
    flexDirection: "row",
  },
  emailInnerBorder: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderStyle: "solid",
    borderRadius: Border.br_sm,
  },
  nextLayout: {
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "center",
  },
  googleIconLayout: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  iconLayout: {
    height: 22,
    width: 22,
    overflow: "hidden",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  doesntHaveAccount: {
    color: Color.gray_600,
    fontFamily: FontFamily.poppins,
  },
  createAccount: {
    color: Color.black,
  },
  doesntHaveAccountContainer: {
    textAlign: "left",
  },
  doesntHaveAccountOnDicoveWrapper: {
    top: 724,
    left: 51,
    padding: Padding.p_6xs,
    flexDirection: "row",
    position: "absolute",
  },
  welcomeToDiscover: {
    fontSize: 22,
    textAlign: "center",
    color: Color.black,
  },
  pleaseChooseYour: {
    color: Color.gray_400,
    textAlign: "center",
  },
  welcomeToDiscoverParent: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameWrapper: {
    alignItems: "center",
  },
  email1: {
    color: Color.gray_600,
    textAlign: "left",
  },
  enterYourEmail: {
    color: Color.gray_600,
    fontFamily: FontFamily.poppins,
    textAlign: "left",
  },
  enterYourEmailAddressWrapper: {
    paddingTop: Padding.p_6xs,
    paddingBottom: Padding.p_6xs,
    width: 323,
  },
  eyeIcon: {
    width: 19,
    height: 19,
    overflow: "hidden",
  },
  enterYourpasswordParent: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  emailInner: {
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_6xs,
    width: 323,
    alignItems: "center",
  },
  forgotPassword: {
    textDecoration: "underline",
    color: "#0061d2",
    textAlign: "right",
    alignSelf: "stretch",
  },
  next: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    color: Color.primaryPureWhite,
    fontFamily: FontFamily.poppins,
    flex: 1,
  },
  button: {
    backgroundColor: Color.green,
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_sm,
    alignSelf: "stretch",
    borderRadius: Border.br_sm,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild: {
    backgroundColor: Color.gray_500,
    height: 1,
    flex: 1,
  },
  orLoginWith: {
    width: 103,
    textAlign: "center",
    color: Color.gray_600,
  },
  rectangleParent: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  emailIcon: {
    width: 20,
    height: 20,
    display: "none",
    overflow: "hidden",
  },
  googleIcon: {
    height: 18,
    display: "none",
  },
  appleIcon: {
    display: "none",
  },
  continueWithDerleng: {
    textAlign: "center",
    color: Color.black,
  },
  emailGroup: {
    alignItems: "center",
    flexDirection: "row",
  },
  loginMethod: {
    paddingTop: Padding.p_2xs,
    paddingRight: Padding.p_lg,
    paddingBottom: Padding.p_2xs,
    alignSelf: "stretch",
    justifyContent: "center",
    flex: 1,
    backgroundColor: Color.primaryPureWhite,
  },
  googleIcon1: {
    height: 18,
  },
  loginMethod1: {
    padding: Padding.p_2xs,
    alignSelf: "stretch",
    justifyContent: "center",
    flex: 1,
    backgroundColor: Color.primaryPureWhite,
  },
  loginMethodParent: {
    alignSelf: "stretch",
  },
  frameView: {
    alignSelf: "stretch",
  },
  frameGroup: {
    width: 323,
  },
  frameParent: {
    top: 114,
    left: 26,
    alignItems: "center",
    position: "absolute",
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
  login: {
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.primaryPureWhite,
  },
});

export default Login;
