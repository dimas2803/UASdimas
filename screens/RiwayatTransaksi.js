import * as React from "react";
import { Pressable, Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
} from "../GlobalStyles";

const RiwayatTransaksi = () => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.riwayatTransaksi}>
      <View style={styles.tourListCardParent}>
        <View style={styles.tourListCard}>
          <View style={styles.unsplashjqfyghucdsgParent}>
            <Image
              style={styles.unsplashjqfyghucdsgIcon}
              resizeMode="cover"
              source={require("../assets/unsplashjqfyghucdsg.png")}
            />
            <View style={[styles.dayBangkokThailandParent, styles.ml15]}>
              <Text
                style={[
                  styles.dayBangkokThailand,
                  styles.reviewsClr,
                  styles.dayBangkokThailandTypo,
                ]}
              >
                Camping 1 night at chongkranroy
              </Text>
              <View style={[styles.starAndReviewCount, styles.mt4]}>
                <View style={styles.starReview}>
                  <Image
                    style={styles.vectorIcon}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                  <Image
                    style={[styles.vectorIcon, styles.ml4]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                  <Image
                    style={[styles.vectorIcon, styles.ml4]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                  <Image
                    style={[styles.vectorIcon, styles.ml4]}
                    resizeMode="cover"
                    source={require("../assets/vector3.png")}
                  />
                  <Image
                    style={[styles.vectorIcon, styles.ml4]}
                    resizeMode="cover"
                    source={require("../assets/vector3.png")}
                  />
                </View>
                <Text
                  style={[
                    styles.reviews,
                    styles.ml10,
                    styles.homeTypo,
                    styles.reviewsClr,
                  ]}
                >
                  100 reviews
                </Text>
              </View>
              <Text
                style={[
                  styles.krongSiemReap,
                  styles.mt4,
                  styles.personTypo,
                  styles.reviewsClr,
                ]}
              >
                Krong Siem Reap
              </Text>
              <Text
                style={[styles.from25person, styles.mt4, styles.reviewsClr]}
              >
                <Text style={[styles.from25, styles.homeTypo]}>from $25</Text>
                <Text style={styles.personTypo}>/person</Text>
              </Text>
              <View style={[styles.day1NightWrapper, styles.mt4]}>
                <Text style={[styles.day1Night, styles.personTypo]}>
                  2 day 1 night
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.tourListCardChild, styles.mt15]} />
        </View>
        <View style={[styles.tourListCard, styles.mt15]}>
          <View style={styles.unsplashjqfyghucdsgParent}>
            <Image
              style={styles.unsplashjqfyghucdsgIcon}
              resizeMode="cover"
              source={require("../assets/unsplashnchryc8fr0u.png")}
            />
            <View style={[styles.dayBangkokThailandParent, styles.ml15]}>
              <Text
                style={[
                  styles.dayBangkokThailand,
                  styles.reviewsClr,
                  styles.dayBangkokThailandTypo,
                ]}
              >
                2 day 1 nigh Siem Reap
              </Text>
              <View style={[styles.starAndReviewCount, styles.mt4]}>
                <View style={styles.starReview}>
                  <Image
                    style={styles.vectorIcon}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                  <Image
                    style={[styles.vectorIcon, styles.ml4]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                  <Image
                    style={[styles.vectorIcon, styles.ml4]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                  <Image
                    style={[styles.vectorIcon, styles.ml4]}
                    resizeMode="cover"
                    source={require("../assets/vector3.png")}
                  />
                  <Image
                    style={[styles.vectorIcon, styles.ml4]}
                    resizeMode="cover"
                    source={require("../assets/vector3.png")}
                  />
                </View>
                <Text
                  style={[
                    styles.reviews,
                    styles.ml10,
                    styles.homeTypo,
                    styles.reviewsClr,
                  ]}
                >
                  100 reviews
                </Text>
              </View>
              <Text
                style={[
                  styles.krongSiemReap,
                  styles.mt4,
                  styles.personTypo,
                  styles.reviewsClr,
                ]}
              >
                Krong Siem Reap
              </Text>
              <Text
                style={[styles.from25person, styles.mt4, styles.reviewsClr]}
              >
                <Text style={[styles.from25, styles.homeTypo]}>from $25</Text>
                <Text style={styles.personTypo}>/person</Text>
              </Text>
              <View style={[styles.day1NightWrapper, styles.mt4]}>
                <Text style={[styles.day1Night, styles.personTypo]}>
                  2 day 1 night
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.tourListCardChild, styles.mt15]} />
        </View>
        <View style={[styles.tourListCard, styles.mt15]}>
          <View style={styles.unsplashjqfyghucdsgParent}>
            <Image
              style={styles.unsplashjqfyghucdsgIcon}
              resizeMode="cover"
              source={require("../assets/unsplashrfumqn7zi0.png")}
            />
            <View style={[styles.dayBangkokThailandParent, styles.ml15]}>
              <Text
                style={[
                  styles.dayBangkokThailand,
                  styles.reviewsClr,
                  styles.dayBangkokThailandTypo,
                ]}
              >
                2 day Bangkok, Thailand
              </Text>
              <View style={[styles.starAndReviewCount, styles.mt4]}>
                <View style={styles.starReview}>
                  <Image
                    style={styles.vectorIcon}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                  <Image
                    style={[styles.vectorIcon, styles.ml4]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                  <Image
                    style={[styles.vectorIcon, styles.ml4]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                  <Image
                    style={[styles.vectorIcon, styles.ml4]}
                    resizeMode="cover"
                    source={require("../assets/vector3.png")}
                  />
                  <Image
                    style={[styles.vectorIcon, styles.ml4]}
                    resizeMode="cover"
                    source={require("../assets/vector3.png")}
                  />
                </View>
                <Text
                  style={[
                    styles.reviews,
                    styles.ml10,
                    styles.homeTypo,
                    styles.reviewsClr,
                  ]}
                >
                  100 reviews
                </Text>
              </View>
              <Text
                style={[
                  styles.krongSiemReap,
                  styles.mt4,
                  styles.personTypo,
                  styles.reviewsClr,
                ]}
              >
                Krong Siem Reap
              </Text>
              <Text
                style={[styles.from25person, styles.mt4, styles.reviewsClr]}
              >
                <Text style={[styles.from25, styles.homeTypo]}>from $25</Text>
                <Text style={styles.personTypo}>/person</Text>
              </Text>
              <View style={[styles.day1NightWrapper, styles.mt4]}>
                <Text style={[styles.day1Night, styles.personTypo]}>
                  2 day 1 night
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.tourListCardChild, styles.mt15]} />
        </View>
      </View>
      <View
        style={[
          styles.sectionTitleDetailWrapper,
          styles.bottomNavigationPosition,
        ]}
      >
        <View style={styles.sectionTitleDetail}>
          <Text
            style={[
              styles.sectionTitleDetail1,
              styles.reviewsClr,
              styles.dayBangkokThailandTypo,
            ]}
          >
            Riwayat Transaksi
          </Text>
          <Text
            style={[styles.sectionSubtitleDetail, styles.mt2, styles.homeTypo]}
          >
            Section-subtitle-detail
          </Text>
        </View>
      </View>
      <View style={[styles.bottomNavigation, styles.bottomNavigationPosition]}>
        <View style={styles.tabBars}>
          <Pressable
            style={styles.icontTab}
            onPress={() => navigation.navigate("Home")}
          >
            <View style={styles.iconLabel}>
              <Image
                style={styles.homeIcon}
                resizeMode="cover"
                source={require("../assets/home.png")}
              />
              <Text style={[styles.home, styles.homeFlexBox, styles.homeTypo]}>
                Home
              </Text>
            </View>
            <View style={[styles.holder, styles.holderLayout]} />
          </Pressable>
          <View style={[styles.icontTab, styles.ml21]}>
            <View style={styles.iconLabel1}>
              <Image
                style={styles.homeIcon}
                resizeMode="cover"
                source={require("../assets/heart.png")}
              />
              <Text
                style={[styles.wishlist, styles.homeFlexBox, styles.homeTypo]}
              >
                Riwayat
              </Text>
            </View>
            <View style={[styles.holder1, styles.holderLayout]} />
          </View>
          <View style={[styles.icontTab, styles.ml21]}>
            <View style={styles.iconLabel1}>
              <Image
                style={styles.bellIcon}
                resizeMode="cover"
                source={require("../assets/bell.png")}
              />
              <Text
                style={[
                  styles.notification,
                  styles.homeFlexBox,
                  styles.homeTypo,
                ]}
              >
                Notification
              </Text>
            </View>
            <View style={[styles.holder, styles.holderLayout]} />
          </View>
          <View style={[styles.icontTab, styles.ml21]}>
            <View style={styles.iconLabel1}>
              <Image
                style={styles.homeIcon}
                resizeMode="cover"
                source={require("../assets/usercircle.png")}
              />
              <Text
                style={[
                  styles.notification,
                  styles.homeFlexBox,
                  styles.homeTypo,
                ]}
              >
                Profile
              </Text>
            </View>
            <View style={[styles.holder, styles.holderLayout]} />
          </View>
        </View>
      </View>
      <View style={styles.statusBar}>
        <View style={[styles.action, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout, styles.homeFlexBox]}>
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
  ml4: {
    marginLeft: Margin.m_6xs,
  },
  ml10: {
    marginLeft: Margin.m_2xs,
  },
  mt4: {
    marginTop: Margin.m_6xs,
  },
  ml15: {
    marginLeft: Margin.m_lg,
  },
  mt15: {
    marginTop: Margin.m_lg,
  },
  mt2: {
    marginTop: Margin.m_8xs,
  },
  ml21: {
    marginLeft: Margin.m_4xl,
  },
  reviewsClr: {
    color: Color.black,
    textAlign: "left",
  },
  dayBangkokThailandTypo: {
    fontFamily: FontFamily.poppins,
    color: Color.black,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  homeTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppins,
  },
  personTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppins,
  },
  bottomNavigationPosition: {
    paddingVertical: 0,
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.primaryPureWhite,
  },
  homeFlexBox: {
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 0,
  },
  holderLayout: {
    height: 4,
    borderRadius: Border.br_lg,
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  unsplashjqfyghucdsgIcon: {
    borderRadius: Border.br_sm,
    width: 122,
    height: 122,
  },
  dayBangkokThailand: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  vectorIcon: {
    width: 13,
    height: 12,
  },
  starReview: {
    flexDirection: "row",
  },
  reviews: {
    textAlign: "left",
  },
  starAndReviewCount: {
    flexDirection: "row",
    alignItems: "center",
  },
  krongSiemReap: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  from25: {
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  from25person: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  day1Night: {
    color: Color.primaryNavyblack,
    textAlign: "left",
  },
  day1NightWrapper: {
    borderRadius: Border.br_4xs,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: Padding.p_8xs,
    flexDirection: "row",
  },
  dayBangkokThailandParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  unsplashjqfyghucdsgParent: {
    width: 335,
    flexDirection: "row",
  },
  tourListCardChild: {
    backgroundColor: Color.gray_500,
    height: 1,
    alignSelf: "stretch",
  },
  tourListCard: {
    alignItems: "center",
  },
  tourListCardParent: {
    top: 161,
    alignItems: "center",
    left: 20,
    position: "absolute",
  },
  sectionTitleDetail1: {
    fontSize: 25,
    textAlign: "left",
  },
  sectionSubtitleDetail: {
    color: Color.gray_600,
    display: "none",
    textAlign: "left",
  },
  sectionTitleDetail: {
    alignSelf: "stretch",
  },
  sectionTitleDetailWrapper: {
    top: 44,
    height: 84,
    paddingHorizontal: Padding.p_4xl,
    justifyContent: "flex-end",
  },
  homeIcon: {
    width: 23,
    height: 23,
    overflow: "hidden",
  },
  home: {
    fontWeight: "500",
    color: "#ccc",
  },
  iconLabel: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  holder: {
    width: 50,
  },
  icontTab: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  wishlist: {
    color: Color.primaryBlueSky,
  },
  iconLabel1: {
    height: 42,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  holder1: {
    backgroundColor: Color.primaryBlueSky,
    alignSelf: "stretch",
  },
  bellIcon: {
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  notification: {
    color: Color.gray_700,
  },
  tabBars: {
    paddingTop: Padding.p_xs,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  bottomNavigation: {
    bottom: 0,
    shadowColor: "rgba(175, 175, 175, 0.1)",
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    height: 67,
    paddingHorizontal: Padding.p_3xl,
  },
  time: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.dMSans,
    color: Color.primaryNavyBlack,
    top: 0,
    left: 0,
    width: 54,
    lineHeight: 18,
    letterSpacing: 0,
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
    marginLeft: -187.5,
    left: "50%",
    height: 44,
    top: 0,
    width: 375,
    position: "absolute",
    backgroundColor: Color.primaryPureWhite,
  },
  riwayatTransaksi: {
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.primaryPureWhite,
  },
});

export default RiwayatTransaksi;
