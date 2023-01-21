import * as React from "react";
import { Pressable, StyleSheet, View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border,
} from "../GlobalStyles";

const PaymentMethod = () => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.paymentMethod}>
      <View style={styles.content}>
        <View style={styles.dividerParent}>
          <View style={[styles.divider, styles.dividerLayout]} />
          <View style={[styles.frameParent, styles.mt18]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/frame-696.png")}
            />
            <View style={[styles.dividerParent, styles.ml10]}>
              <Text
                style={[
                  styles.pantaiKutaBali,
                  styles.moreTypo,
                  styles.pantaiKutaBaliLayout,
                ]}
              >
                Pantai Kuta Bali
              </Text>
              <Text
                style={[
                  styles.orderNumber837nx38,
                  styles.mt5,
                  styles.rp10000002personLayout,
                ]}
              >
                Order number #837nx38
              </Text>
            </View>
          </View>
          <View style={[styles.dividerLayout, styles.mt18]} />
          <View style={[styles.price, styles.mt18]}>
            <View style={styles.totalPriceInclVatParent}>
              <Text
                style={[
                  styles.totalPriceInclContainer,
                  styles.rp10000002personLayout,
                ]}
              >
                <Text style={styles.totalPrice}>
                  <Text style={styles.totalPrice1}>Total price</Text>
                  <Text>{` `}</Text>
                </Text>
                <Text style={styles.inclVat}>
                  <Text style={styles.inclVat1}>(incl VAT)</Text>
                </Text>
              </Text>
              <Text
                style={[styles.rp10000002person, styles.rp10000002personLayout]}
              >
                <Text style={styles.totalPrice}>Rp 1.000.000</Text>
                <Text style={styles.inclVat1}>/2Person</Text>
              </Text>
            </View>
          </View>
          <View style={[styles.dividerLayout, styles.mt18]} />
        </View>
        <View style={[styles.price, styles.mt15]}>
          <View>
            <View style={[styles.frameWrapper, styles.frameSpaceBlock]}>
              <View style={styles.frameContainer}>
                <View style={styles.rectangleParent}>
                  <Image
                    style={[styles.frameItem, styles.frameLayout1]}
                    resizeMode="cover"
                    source={require("../assets/rectangle-1.png")}
                  />
                  <Image
                    style={[styles.frameLayout, styles.ml5]}
                    resizeMode="cover"
                    source={require("../assets/rectangle-2.png")}
                  />
                  <Image
                    style={[styles.frameItem, styles.ml5, styles.frameLayout1]}
                    resizeMode="cover"
                    source={require("../assets/rectangle-3.png")}
                  />
                </View>
                <View style={[styles.creditCarddebitParent, styles.ml20]}>
                  <Text
                    style={[
                      styles.creditCarddebit,
                      styles.moreTypo,
                      styles.pantaiKutaBaliLayout,
                    ]}
                  >
                    Credit card/debit
                  </Text>
                  <View
                    style={[
                      styles.ellipseWrapper,
                      styles.ml14,
                      styles.frameViewBorder,
                    ]}
                  >
                    <Image
                      style={styles.ellipseIcon}
                      resizeMode="cover"
                      source={require("../assets/ellipse-2.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.frameView,
                styles.mt20,
                styles.frameViewBorder,
                styles.frameSpaceBlock,
              ]}
            >
              <View style={styles.frameContainer}>
                <View style={styles.rectangleParent}>
                  <Image
                    style={styles.frameLayout1}
                    resizeMode="cover"
                    source={require("../assets/rectangle-1.png")}
                  />
                  <Image
                    style={[styles.frameChild2, styles.ml5, styles.frameLayout]}
                    resizeMode="cover"
                    source={require("../assets/rectangle-2.png")}
                  />
                  <Image
                    style={[styles.frameItem, styles.ml5, styles.frameLayout1]}
                    resizeMode="cover"
                    source={require("../assets/rectangle-3.png")}
                  />
                </View>
                <View style={[styles.creditCarddebitParent, styles.ml20]}>
                  <Text
                    style={[
                      styles.creditCarddebit,
                      styles.moreTypo,
                      styles.pantaiKutaBaliLayout,
                    ]}
                  >
                    Credit card/debit
                  </Text>
                  <View
                    style={[
                      styles.ellipseWrapper,
                      styles.ml14,
                      styles.frameViewBorder,
                    ]}
                  >
                    <Image
                      style={styles.ellipseIcon}
                      resizeMode="cover"
                      source={require("../assets/ellipse-21.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={[
          styles.buttonWrapper,
          styles.buttonWrapperFlexBox,
          styles.headerPosition,
        ]}
        onPress={() => navigation.navigate("Payment")}
      >
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Text style={[styles.next, styles.nextFlexBox]}>Process Payment</Text>
        </View>
      </Pressable>
      <View style={[styles.statusBar, styles.headerPosition]}>
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
      <Pressable
        style={[styles.header, styles.buttonFlexBox, styles.headerPosition]}
        onPress={() => navigation.navigate("TourDetail")}
      >
        <View style={[styles.chevronLeftParent, styles.buttonWrapperFlexBox]}>
          <Image
            style={styles.chevronLeftIcon}
            resizeMode="cover"
            source={require("../assets/chevron-left.png")}
          />
          <Text style={[styles.more, styles.ml20, styles.moreTypo]}>
            Confirm and payment
          </Text>
        </View>
        <Image
          style={[styles.regularshoppingCartIcon, styles.ml10]}
          resizeMode="cover"
          source={require("../assets/regularshoppingcart.png")}
        />
        <Image
          style={[styles.filterListIcon, styles.ml10]}
          resizeMode="cover"
          source={require("../assets/filter-list.png")}
        />
        <Image
          style={[styles.trashAltIcon, styles.ml10]}
          resizeMode="cover"
          source={require("../assets/trashalt.png")}
        />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mt5: {
    marginTop: Margin.m_5xs,
  },
  ml10: {
    marginLeft: Margin.m_2xs,
  },
  mt18: {
    marginTop: Margin.m_xl,
  },
  ml5: {
    marginLeft: Margin.m_5xs,
  },
  ml14: {
    marginLeft: Margin.m_md,
  },
  ml20: {
    marginLeft: Margin.m_3xl,
  },
  mt20: {
    marginTop: Margin.m_3xl,
  },
  mt15: {
    marginTop: Margin.m_lg,
  },
  dividerLayout: {
    height: 1,
    backgroundColor: Color.gray_500,
    alignSelf: "stretch",
  },
  moreTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_lg,
  },
  pantaiKutaBaliLayout: {
    lineHeight: 20,
    textAlign: "left",
    color: Color.black,
  },
  rp10000002personLayout: {
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "left",
  },
  frameSpaceBlock: {
    paddingBottom: Padding.p_7xl,
    paddingRight: Padding.p_2xs,
    paddingTop: Padding.p_7xl,
    paddingLeft: Padding.p_lg,
    borderRadius: Border.br_sm,
    width: 335,
  },
  frameLayout1: {
    height: 27,
    width: 52,
    borderRadius: Border.br_4xs,
  },
  frameViewBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  frameLayout: {
    width: 51,
    height: 27,
    borderRadius: Border.br_4xs,
  },
  buttonWrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  headerPosition: {
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
    backgroundColor: Color.primaryPureWhite,
  },
  buttonFlexBox: {
    paddingHorizontal: Padding.p_lg,
    alignItems: "center",
    flexDirection: "row",
  },
  nextFlexBox: {
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 0,
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  divider: {
    display: "none",
  },
  frameChild: {
    width: 50,
    height: 50,
    borderRadius: Border.br_3xs,
  },
  pantaiKutaBali: {
    color: Color.black,
    fontWeight: "600",
  },
  orderNumber837nx38: {
    fontSize: FontSize.size_base,
    color: Color.gray_600,
    fontFamily: FontFamily.poppins,
  },
  dividerParent: {
    alignSelf: "stretch",
  },
  frameParent: {
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    alignSelf: "stretch",
  },
  totalPrice1: {
    fontSize: FontSize.size_lg,
  },
  totalPrice: {
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
  },
  inclVat1: {
    fontFamily: FontFamily.poppins,
  },
  inclVat: {
    fontSize: FontSize.size_sm,
  },
  totalPriceInclContainer: {
    color: Color.black,
  },
  rp10000002person: {
    fontSize: FontSize.size_2xl,
    color: Color.black,
  },
  totalPriceInclVatParent: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  price: {
    width: 335,
  },
  frameItem: {
    display: "none",
  },
  rectangleParent: {
    flexDirection: "row",
  },
  creditCarddebit: {
    color: Color.black,
    flex: 1,
  },
  ellipseIcon: {
    width: 10,
    height: 10,
  },
  ellipseWrapper: {
    padding: Padding.p_8xs,
    borderRadius: Border.br_xl,
    borderColor: "#000",
    flexDirection: "row",
  },
  creditCarddebitParent: {
    flexDirection: "row",
    flex: 1,
  },
  frameContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameWrapper: {
    borderWidth: 1.5,
    borderColor: "#000",
    borderStyle: "solid",
    paddingRight: Padding.p_2xs,
    paddingTop: Padding.p_7xl,
    paddingLeft: Padding.p_lg,
  },
  frameChild2: {
    display: "none",
  },
  frameView: {
    borderColor: "rgba(0, 0, 0, 0.15)",
  },
  content: {
    top: 117,
    left: 20,
    position: "absolute",
  },
  next: {
    fontWeight: "500",
    color: Color.primaryPureWhite,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_lg,
    flex: 1,
  },
  button: {
    backgroundColor: Color.green,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    borderRadius: Border.br_sm,
    paddingHorizontal: Padding.p_lg,
    flex: 1,
  },
  buttonWrapper: {
    bottom: 0,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowRadius: 23,
    elevation: 23,
    shadowOpacity: 1,
    height: 74,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
  },
  time: {
    left: 0,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.sFProText,
    color: Color.primaryNavyBlack,
    top: 0,
    fontWeight: "600",
  },
  action: {
    top: 14,
    height: 18,
    left: 20,
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
    top: 0,
  },
  chevronLeftIcon: {
    width: 30,
    height: 30,
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  more: {
    color: Color.primaryNavyblack,
    fontWeight: "600",
    flex: 1,
  },
  chevronLeftParent: {
    flex: 1,
  },
  regularshoppingCartIcon: {
    width: 20,
    height: 20,
    display: "none",
    overflow: "hidden",
  },
  filterListIcon: {
    width: 28,
    height: 28,
    display: "none",
    overflow: "hidden",
  },
  trashAltIcon: {
    width: 16,
    height: 16,
    display: "none",
    overflow: "hidden",
  },
  header: {
    top: 44,
    height: 55,
    paddingVertical: Padding.p_2xs,
  },
  paymentMethod: {
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.primaryPureWhite,
  },
});

export default PaymentMethod;
