import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  Pressable,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Padding,
  Border,
  Color,
  FontFamily,
  FontSize,
} from "../GlobalStyles";

const TourDetail = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={[styles.tourDetail, styles.iconLayout2, styles.tourDetailLayout]}
      contentContainerStyle={styles.tourDetailScrollViewContent}
    >
      <View style={styles.detailBackground}>
        <Image
          style={[
            styles.unsplashrfumqn7zi0Icon,
            styles.loremIpsumDolorPosition,
            styles.iconLayout2,
          ]}
          resizeMode="cover"
          source={require("../assets/unsplashrfumqn7zi01.png")}
        />
        <View style={styles.detailHeaderParent}>
          <Pressable
            style={styles.detailHeader}
            onPress={() => navigation.navigate("Home")}
          >
            <View
              style={[
                styles.arrowBack,
                styles.parentFlexBox,
                styles.chatLayout,
              ]}
            >
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={require("../assets/vector15.png")}
              />
            </View>
            <View style={[styles.right, styles.parentFlexBox]}>
              <View
                style={[styles.chat, styles.parentFlexBox, styles.chatLayout]}
              >
                <Image
                  style={styles.vectorIcon1}
                  resizeMode="cover"
                  source={require("../assets/vector18.png")}
                />
              </View>
              <View
                style={[
                  styles.arrowBack,
                  styles.ml10,
                  styles.parentFlexBox,
                  styles.chatLayout,
                ]}
              >
                <Image
                  style={styles.vectorIcon2}
                  resizeMode="cover"
                  source={require("../assets/vector19.png")}
                />
              </View>
              <View
                style={[
                  styles.arrowBack,
                  styles.ml10,
                  styles.parentFlexBox,
                  styles.chatLayout,
                ]}
              >
                <Image
                  style={styles.vectorIcon3}
                  resizeMode="cover"
                  source={require("../assets/vector20.png")}
                />
              </View>
            </View>
          </Pressable>
          <View style={[styles.viewAllPhotosButton, styles.mt314]}>
            <Text style={styles.photos}>+100 Photos</Text>
          </View>
        </View>
      </View>
      <View style={styles.mt13}>
        <Text
          style={[styles.angkorMalisHotel, styles.aboutTypo, styles.aboutTypo1]}
        >
          Koh Rong Samloem
        </Text>
        <View style={[styles.parentFlexBox, styles.mt2]}>
          <View style={styles.starReview}>
            <Image
              style={styles.vectorIcon4}
              resizeMode="cover"
              source={require("../assets/vector21.png")}
            />
            <Image
              style={[styles.vectorIcon4, styles.ml4]}
              resizeMode="cover"
              source={require("../assets/vector21.png")}
            />
            <Image
              style={[styles.vectorIcon4, styles.ml4]}
              resizeMode="cover"
              source={require("../assets/vector21.png")}
            />
            <Image
              style={[styles.vectorIcon4, styles.ml4]}
              resizeMode="cover"
              source={require("../assets/vector21.png")}
            />
            <Image
              style={[styles.vectorIcon4, styles.ml4]}
              resizeMode="cover"
              source={require("../assets/vector21.png")}
            />
          </View>
          <Text style={[styles.reviews, styles.ml10]}>. 100 reviews</Text>
        </View>
        <Text style={[styles.reviews1, styles.mt2]}>100 reviews</Text>
        <Text style={[styles.supplierAngkorMalis, styles.mt2]}>
          Supplier: Angkor Malis Hotel
        </Text>
      </View>
      <View style={[styles.bodyDetail, styles.mt13]}>
        <View>
          <View>
            <Text style={[styles.about, styles.aboutTypo, styles.aboutTypo1]}>
              About
            </Text>
            <View style={[styles.aboutDetail, styles.mt10]}>
              <Text
                style={[styles.loremIpsumDolor, styles.loremIpsumDolorPosition]}
              >
                Pantai Kuta memang terkenal memiliki ombak yang bagus tetapi
                cukup aman. Tidak mengherankan jika pantai ini menjadi salah
                satu tempat yang direkomendasikan bagi para peselancar pemula.
              </Text>
              <Text style={[styles.readAll, styles.readTypo]}>Read all</Text>
            </View>
          </View>
        </View>
        <View style={[styles.divider, styles.mt40, styles.dividerLayout]} />
        <View style={[styles.sectionTitleDetailParent, styles.mt40]}>
          <View>
            <Text style={[styles.sectionTitleDetail1, styles.aboutTypo]}>
              What is included
            </Text>
            <Text style={[styles.sectionSubtitleDetail, styles.mt2]}>
              Section-subtitle-detail
            </Text>
          </View>
          <View style={[styles.sectionTitleDetailParent, styles.mt20]}>
            <View style={styles.whatIncludedParent}>
              <View style={[styles.whatIncluded, styles.whatBorder]}>
                <Image
                  style={[styles.icon, styles.iconCommon]}
                  resizeMode="cover"
                  source={require("../assets/icon.png")}
                />
                <Image
                  style={[
                    styles.vectorIcon9,
                    styles.ml20,
                    styles.vectorIconLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/vector26.png")}
                />
                <Image
                  style={[styles.qrcodeIcon, styles.ml20, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/qrcode.png")}
                />
                <Image
                  style={[styles.qrcodeIcon, styles.ml20, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/flag.png")}
                />
                <Image
                  style={[styles.iconLayout1, styles.ml20]}
                  resizeMode="cover"
                  source={require("../assets/busalt.png")}
                />
                <Image
                  style={[styles.phoneAltIcon, styles.ml20, styles.iconCommon]}
                  resizeMode="cover"
                  source={require("../assets/phonealt.png")}
                />
                <Image
                  style={[styles.globeIcon, styles.ml20, styles.iconCommon]}
                  resizeMode="cover"
                  source={require("../assets/globe.png")}
                />
                <Image
                  style={[styles.qrcodeIcon, styles.ml20, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/phonealt1.png")}
                />
                <Image
                  style={[styles.icon, styles.ml20, styles.iconCommon]}
                  resizeMode="cover"
                  source={require("../assets/dollarsign.png")}
                />
                <View style={styles.ml20}>
                  <Text style={styles.inludedTitle}>Bus</Text>
                  <Text style={styles.subtitle}>Transportaion</Text>
                </View>
              </View>
              <View
                style={[styles.whatIncluded, styles.ml10, styles.whatBorder]}
              >
                <Image
                  style={[styles.icon, styles.iconCommon]}
                  resizeMode="cover"
                  source={require("../assets/icon1.png")}
                />
                <Image
                  style={[styles.vectorIconLayout, styles.ml20]}
                  resizeMode="cover"
                  source={require("../assets/vector27.png")}
                />
                <Image
                  style={[styles.qrcodeIcon, styles.ml20, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/qrcode1.png")}
                />
                <Image
                  style={[styles.qrcodeIcon, styles.ml20, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/flag1.png")}
                />
                <Image
                  style={[styles.qrcodeIcon, styles.ml20, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/busalt1.png")}
                />
                <Image
                  style={[styles.phoneAltIcon, styles.ml20, styles.iconCommon]}
                  resizeMode="cover"
                  source={require("../assets/phonealt2.png")}
                />
                <Image
                  style={[styles.globeIcon, styles.ml20, styles.iconCommon]}
                  resizeMode="cover"
                  source={require("../assets/globe1.png")}
                />
                <Image
                  style={[styles.qrcodeIcon, styles.ml20, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/phonealt3.png")}
                />
                <Image
                  style={[styles.icon, styles.ml20, styles.iconCommon]}
                  resizeMode="cover"
                  source={require("../assets/dollarsign1.png")}
                />
                <View style={styles.ml20}>
                  <Text style={styles.inludedTitle}>2 day 1 night</Text>
                  <Text style={styles.subtitle}>Duration</Text>
                </View>
              </View>
            </View>
            <View style={[styles.whatBorder, styles.mt11]}>
              <Image
                style={[styles.icon, styles.iconCommon]}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
              <Image
                style={[
                  styles.vectorIcon9,
                  styles.ml20,
                  styles.vectorIconLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/vector26.png")}
              />
              <Image
                style={[styles.iconLayout1, styles.ml20]}
                resizeMode="cover"
                source={require("../assets/qrcode.png")}
              />
              <Image
                style={[styles.qrcodeIcon, styles.ml20, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/flag.png")}
              />
              <Image
                style={[styles.qrcodeIcon, styles.ml20, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/busalt.png")}
              />
              <Image
                style={[styles.phoneAltIcon, styles.ml20, styles.iconCommon]}
                resizeMode="cover"
                source={require("../assets/phonealt.png")}
              />
              <Image
                style={[styles.globeIcon, styles.ml20, styles.iconCommon]}
                resizeMode="cover"
                source={require("../assets/globe.png")}
              />
              <Image
                style={[styles.qrcodeIcon, styles.ml20, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/phonealt1.png")}
              />
              <Image
                style={[styles.icon, styles.ml20, styles.iconCommon]}
                resizeMode="cover"
                source={require("../assets/dollarsign.png")}
              />
              <View style={styles.ml20}>
                <Text style={styles.inludedTitle}>TAC200812695</Text>
                <Text style={styles.subtitle}>Product code</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.divider, styles.mt40, styles.dividerLayout]} />
        <View style={[styles.locationAddressDetail, styles.mt40]}>
          <View>
            <Text style={[styles.sectionTitleDetail1, styles.aboutTypo]}>
              Where will you stay
            </Text>
            <Text style={[styles.subtitle, styles.mt2]}>
              View the location on map
            </Text>
          </View>
          <Image
            style={[
              styles.maskGroupIcon,
              styles.mt20,
              styles.iconLayout2,
              styles.tourDetailLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/mask-group.png")}
          />
          <View style={styles.mt20}>
            <Text style={styles.angkorMailsHotel}>Angkor Mails Hotel</Text>
            <Text style={[styles.angkorMailsHotel, styles.mt4]}>
              NR6, Krong Siem Reap Cambodia
            </Text>
          </View>
          <View style={[styles.divider2, styles.mt20, styles.dividerLayout]} />
        </View>
        <View style={[styles.sectionTitleDetailParent, styles.mt40]}>
          <View style={styles.whatIncludedParent}>
            <View>
              <Image
                style={[styles.unsplashnchryc8fr0uIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/unsplashnchryc8fr0u1.png")}
              />
              <Image
                style={[
                  styles.unsplasharb16klpoboIcon,
                  styles.mt3,
                  styles.iconLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/unsplasharb16klpobo.png")}
              />
            </View>
            <Image
              style={[
                styles.unsplashopcfmhueFaIcon,
                styles.ml3,
                styles.iconLayout2,
              ]}
              resizeMode="cover"
              source={require("../assets/unsplashopcfmhue-fa.png")}
            />
          </View>
          <View
            style={[
              styles.buttonDetailSeeMore,
              styles.mt20,
              styles.buttonBorder,
            ]}
          >
            <View style={styles.parentFlexBox}>
              <Image
                style={[styles.phoneAltIcon, styles.iconCommon]}
                resizeMode="cover"
                source={require("../assets/search1.png")}
              />
              <Text style={[styles.seeAll6, styles.ml10, styles.aboutTypo]}>
                See all +20 photos
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.sectionTitleDetailParent, styles.mt40]}>
          <View>
            <Text style={[styles.sectionTitleDetail1, styles.aboutTypo]}>
              Reviews
            </Text>
            <Text style={[styles.subtitle, styles.mt2]}>4.5(100revies)</Text>
          </View>
          <View style={[styles.sectionTitleDetailParent, styles.mt20]}>
            <View style={styles.reviewCardDetail}>
              <View style={styles.content}>
                <View>
                  <View style={styles.parentFlexBox}>
                    <Image
                      style={styles.unsplashpgWchwsdt8Icon}
                      resizeMode="cover"
                      source={require("../assets/unsplashpg-wchwsdt8.png")}
                    />
                    <View style={[styles.reviewerName, styles.ml12]}>
                      <Text
                        style={[
                          styles.icaaaaa,
                          styles.icaaaaaPosition,
                          styles.icaaaaaPosition1,
                        ]}
                      >
                        ICAAAAA
                      </Text>
                      <View
                        style={[
                          styles.createdDateReview,
                          styles.icaaaaaPosition,
                          styles.parentFlexBox,
                        ]}
                      >
                        <View style={styles.starReview}>
                          <Image
                            style={styles.vectorIcon12}
                            resizeMode="cover"
                            source={require("../assets/vector29.png")}
                          />
                          <Image
                            style={[styles.vectorIcon12, styles.ml2]}
                            resizeMode="cover"
                            source={require("../assets/vector29.png")}
                          />
                          <Image
                            style={[styles.vectorIcon14, styles.ml2]}
                            resizeMode="cover"
                            source={require("../assets/vector31.png")}
                          />
                          <Image
                            style={[styles.vectorIcon12, styles.ml2]}
                            resizeMode="cover"
                            source={require("../assets/vector29.png")}
                          />
                          <Image
                            style={[styles.vectorIcon12, styles.ml2]}
                            resizeMode="cover"
                            source={require("../assets/vector29.png")}
                          />
                        </View>
                        <Text
                          style={[
                            styles.dec2021,
                            styles.ml4,
                            styles.dec2021Typo,
                          ]}
                        >
                          . 16 Dec 2021
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.mt18}>
                    <Text style={[styles.goodPlace, styles.aboutTypo]}>
                      Good Place
                    </Text>
                    <Text style={[styles.pantaiYangSangat, styles.mt4]}>
                      Pantai Yang Sangat Bagus
                    </Text>
                    <View style={[styles.readMoreTextreadAll, styles.mt4]}>
                      <Text
                        style={styles.loremIpsumDolor1}
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus in pretium dignissim `}</Text>
                      <Text
                        style={[
                          styles.readAll1,
                          styles.dec2021Typo,
                          styles.readTypo,
                        ]}
                      >
                        Read all
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.reviewBodyParent, styles.parentFlexBox]}>
                  <View style={styles.reviewBody1}>
                    <Text style={[styles.visitedDate, styles.dec2021Typo]}>
                      Visited date
                    </Text>
                    <Text style={[styles.visitedDate, styles.dec2021Typo]}>
                      Dec 2021
                    </Text>
                  </View>
                  <Image
                    style={styles.voteUpIcon}
                    resizeMode="cover"
                    source={require("../assets/voteup.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.reviewCardDetail, styles.mt20]}>
              <View style={styles.content}>
                <View style={styles.sectionTitleDetailParent}>
                  <View style={styles.parentFlexBox}>
                    <Image
                      style={styles.unsplashpgWchwsdt8Icon}
                      resizeMode="cover"
                      source={require("../assets/unsplashmez3pofgs-k.png")}
                    />
                    <View style={[styles.reviewerName, styles.ml8]}>
                      <Text
                        style={[
                          styles.izzaAfkarinaM,
                          styles.icaaaaaPosition,
                          styles.icaaaaaPosition1,
                        ]}
                      >
                        IZZA AFKARINA M
                      </Text>
                      <View
                        style={[
                          styles.createdDateReview,
                          styles.icaaaaaPosition,
                          styles.parentFlexBox,
                        ]}
                      >
                        <View style={styles.starReview}>
                          <Image
                            style={styles.vectorIcon12}
                            resizeMode="cover"
                            source={require("../assets/vector29.png")}
                          />
                          <Image
                            style={[styles.vectorIcon12, styles.ml2]}
                            resizeMode="cover"
                            source={require("../assets/vector29.png")}
                          />
                          <Image
                            style={[styles.vectorIcon14, styles.ml2]}
                            resizeMode="cover"
                            source={require("../assets/vector31.png")}
                          />
                          <Image
                            style={[styles.vectorIcon12, styles.ml2]}
                            resizeMode="cover"
                            source={require("../assets/vector29.png")}
                          />
                          <Image
                            style={[styles.vectorIcon12, styles.ml2]}
                            resizeMode="cover"
                            source={require("../assets/vector29.png")}
                          />
                        </View>
                        <Text
                          style={[
                            styles.dec2021,
                            styles.ml4,
                            styles.dec2021Typo,
                          ]}
                        >
                          . 16 Dec 2021
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.sectionTitleDetailParent, styles.mt18]}>
                    <Text style={[styles.seeAll6, styles.aboutTypo]}>
                      Good Place
                    </Text>
                    <Text style={[styles.supplierAngkorMalis, styles.mt4]}>
                      Something to review here
                    </Text>
                    <View style={[styles.sectionTitleDetailParent, styles.mt4]}>
                      <Text style={styles.loremIpsumDolor1}>
                        pantai yang penuh kenangan hahah awkowkokw
                      </Text>
                      <Text
                        style={[
                          styles.readAll1,
                          styles.dec2021Typo,
                          styles.readTypo,
                        ]}
                      >
                        Read all
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.reviewBodyParent, styles.parentFlexBox]}>
                  <View style={styles.reviewBody1}>
                    <Text style={[styles.visitedDate, styles.dec2021Typo]}>
                      Visited date
                    </Text>
                    <Text style={[styles.visitedDate, styles.dec2021Typo]}>
                      Dec 2021
                    </Text>
                  </View>
                  <Image
                    style={styles.voteUpIcon}
                    resizeMode="cover"
                    source={require("../assets/voteup.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.buttonBorder, styles.mt20]}>
            <View style={styles.parentFlexBox}>
              <Image
                style={[styles.phoneAltIcon, styles.iconCommon]}
                resizeMode="cover"
                source={require("../assets/search2.png")}
              />
              <Text style={[styles.seeAll6, styles.ml10, styles.aboutTypo]}>
                See all +97 reviews
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.sectionTitleDetailParent, styles.mt40]}>
          <View>
            <Text style={[styles.sectionTitleDetail1, styles.aboutTypo]}>
              People frequently ask
            </Text>
            <Text style={[styles.sectionSubtitleDetail, styles.mt2]}>
              View the location on map
            </Text>
          </View>
          <View style={[styles.sectionTitleDetailParent, styles.mt20]}>
            <View style={styles.sectionTitleDetailParent}>
              <View style={[styles.aboutThisPlaceParent, styles.parentFlexBox]}>
                <Text style={[styles.aboutThisPlace, styles.next1Typo]}>
                  About this place
                </Text>
                <Image
                  style={[styles.vectorIcon22, styles.ml32]}
                  resizeMode="cover"
                  source={require("../assets/vector39.png")}
                />
              </View>
              <Text style={[styles.loremIpsumDolor3, styles.mt2]}>Bali</Text>
            </View>
            <View style={[styles.sectionTitleDetailParent, styles.mt20]}>
              <View style={[styles.aboutThisPlaceParent, styles.parentFlexBox]}>
                <Text style={[styles.aboutThisPlace, styles.next1Typo]}>
                  Term and condition
                </Text>
                <Image
                  style={[styles.vectorIcon22, styles.ml32]}
                  resizeMode="cover"
                  source={require("../assets/vector39.png")}
                />
              </View>
              <Text style={[styles.loremIpsumDolor3, styles.mt2]}>
                xnxdsedededed
              </Text>
            </View>
            <View style={[styles.sectionTitleDetailParent, styles.mt20]}>
              <View style={[styles.aboutThisPlaceParent, styles.parentFlexBox]}>
                <Text style={[styles.aboutThisPlace, styles.next1Typo]}>
                  Cancellation Policy
                </Text>
                <Image
                  style={[styles.vectorIcon22, styles.ml32]}
                  resizeMode="cover"
                  source={require("../assets/vector39.png")}
                />
              </View>
              <Text style={[styles.loremIpsumDolor3, styles.mt2]}>
                ededfefedwded
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.buttonParent, styles.mt13, styles.parentFlexBox]}
        onPress={() => navigation.navigate("PaymentMethod")}
      >
        <View style={styles.buttonFlexBox}>
          <Text style={[styles.next, styles.nextLayout]}>
            <Text style={[styles.rp500000, styles.aboutTypo]}>Rp 500.000</Text>
            <Text style={styles.person}>/Person</Text>
          </Text>
        </View>
        <View style={[styles.button1, styles.buttonFlexBox]}>
          <Text style={[styles.next1, styles.nextLayout, styles.next1Typo]}>
            Book Now
          </Text>
        </View>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ml10: {
    marginLeft: Margin.m_2xs,
  },
  mt314: {
    marginTop: 314,
  },
  ml4: {
    marginLeft: Margin.m_6xs,
  },
  mt2: {
    marginTop: Margin.m_8xs,
  },
  mt10: {
    marginTop: Margin.m_2xs,
  },
  ml20: {
    marginLeft: Margin.m_3xl,
  },
  mt11: {
    marginTop: 11,
  },
  mt20: {
    marginTop: Margin.m_3xl,
  },
  mt4: {
    marginTop: Margin.m_6xs,
  },
  mt3: {
    marginTop: Margin.m_7xs,
  },
  ml3: {
    marginLeft: Margin.m_7xs,
  },
  ml2: {
    marginLeft: Margin.m_8xs,
  },
  ml12: {
    marginLeft: Margin.m_xs,
  },
  mt18: {
    marginTop: Margin.m_xl,
  },
  ml8: {
    marginLeft: Margin.m_3xs,
  },
  ml32: {
    marginLeft: Margin.m_5xl,
  },
  mt40: {
    marginTop: Margin.m_6xl,
  },
  mt13: {
    marginTop: Margin.m_sm,
  },
  tourDetailScrollViewContent: {
    flexDirection: "column",
  },
  iconLayout2: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  tourDetailLayout: {
    width: "100%",
    maxWidth: "100%",
  },
  loremIpsumDolorPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  chatLayout: {
    padding: Padding.p_5xs,
    width: 36,
    justifyContent: "center",
    alignItems: "center",
    height: 36,
    borderRadius: Border.br_xl,
    backgroundColor: Color.primaryPureWhite,
  },
  aboutTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.poppins,
  },
  aboutTypo1: {
    fontSize: FontSize.size_4xl,
    fontWeight: "600",
    textAlign: "left",
  },
  readTypo: {
    textDecoration: "underline",
    color: Color.black,
    fontWeight: "600",
  },
  dividerLayout: {
    height: 1,
    backgroundColor: Color.gray_500,
  },
  whatBorder: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_2xs,
    borderColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: Border.br_sm,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
  },
  iconCommon: {
    overflow: "hidden",
    display: "none",
  },
  vectorIconLayout: {
    height: 21,
    width: 20,
  },
  iconLayout1: {
    width: 21,
    height: 21,
    overflow: "hidden",
  },
  iconLayout: {
    height: 143,
    width: 156,
  },
  buttonBorder: {
    paddingHorizontal: Padding.p_5xl,
    borderColor: "#000",
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: Padding.p_4xs,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.primaryPureWhite,
  },
  icaaaaaPosition: {
    left: 0,
    position: "absolute",
  },
  icaaaaaPosition1: {
    top: 0,
    left: 0,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
  },
  dec2021Typo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
  },
  next1Typo: {
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppins,
  },
  nextLayout: {
    lineHeight: 18,
    letterSpacing: 0,
    flex: 1,
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_lg,
    borderRadius: Border.br_sm,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  unsplashrfumqn7zi0Icon: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    maxHeight: "100%",
  },
  vectorIcon: {
    width: 14,
    height: 14,
  },
  arrowBack: {
    justifyContent: "center",
  },
  vectorIcon1: {
    width: 15,
    height: 14,
  },
  chat: {
    display: "none",
    justifyContent: "center",
  },
  vectorIcon2: {
    height: 15,
    width: 13,
  },
  vectorIcon3: {
    width: 17,
    height: 15,
  },
  right: {
    justifyContent: "flex-end",
    height: 36,
    alignItems: "center",
  },
  detailHeader: {
    width: 327,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  photos: {
    textAlign: "left",
    color: Color.primaryPureWhite,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_base,
  },
  viewAllPhotosButton: {
    backgroundColor: "rgba(82, 82, 82, 0.8)",
    width: 103,
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_4xs,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  detailHeaderParent: {
    height: "91.59%",
    width: "87.2%",
    top: "5.61%",
    right: "6.4%",
    bottom: "2.8%",
    left: "6.4%",
    alignItems: "flex-end",
    position: "absolute",
  },
  detailBackground: {
    height: 428,
    width: 375,
  },
  angkorMalisHotel: {
    color: Color.primaryPureWhite,
  },
  vectorIcon4: {
    height: 12,
    width: 13,
  },
  starReview: {
    flexDirection: "row",
  },
  reviews: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.primaryPureWhite,
    fontFamily: FontFamily.poppins,
  },
  reviews1: {
    color: Color.black,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    display: "none",
  },
  supplierAngkorMalis: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_base,
    display: "none",
  },
  about: {
    color: Color.black,
  },
  loremIpsumDolor: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_base,
  },
  readAll: {
    top: "84.26%",
    left: "43.65%",
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  aboutDetail: {
    height: 108,
    width: 323,
  },
  divider: {
    width: 323,
  },
  sectionTitleDetail1: {
    fontSize: FontSize.size_2xl,
    color: Color.black,
    textAlign: "left",
  },
  sectionSubtitleDetail: {
    color: Color.gray_600,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_base,
    display: "none",
  },
  icon: {
    width: 22,
    height: 22,
    display: "none",
  },
  vectorIcon9: {
    display: "none",
  },
  qrcodeIcon: {
    display: "none",
  },
  phoneAltIcon: {
    width: 18,
    height: 18,
    display: "none",
  },
  globeIcon: {
    width: 19,
    height: 19,
    display: "none",
  },
  inludedTitle: {
    color: Color.black,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
  },
  subtitle: {
    color: Color.gray_600,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_base,
  },
  whatIncluded: {
    flex: 1,
  },
  whatIncludedParent: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  sectionTitleDetailParent: {
    alignSelf: "stretch",
  },
  maskGroupIcon: {
    height: 198,
    alignSelf: "stretch",
  },
  angkorMailsHotel: {
    fontFamily: FontFamily.roboto,
    color: Color.gray_600,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  divider2: {
    width: 315,
  },
  locationAddressDetail: {
    width: 323,
  },
  unsplashnchryc8fr0uIcon: {
    borderTopLeftRadius: Border.br_3xs,
  },
  unsplasharb16klpoboIcon: {
    borderBottomLeftRadius: Border.br_3xs,
  },
  unsplashopcfmhueFaIcon: {
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    height: 289,
    flex: 1,
  },
  seeAll6: {
    color: Color.black,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  buttonDetailSeeMore: {
    width: 156,
    paddingHorizontal: Padding.p_5xl,
    borderColor: "#000",
  },
  unsplashpgWchwsdt8Icon: {
    borderRadius: Border.br_2xl,
    width: 35,
    height: 35,
  },
  icaaaaa: {
    fontSize: FontSize.size_lg,
  },
  vectorIcon12: {
    width: 8,
    height: 7,
  },
  vectorIcon14: {
    width: 7,
    height: 7,
  },
  dec2021: {
    color: Color.black,
  },
  createdDateReview: {
    top: 18,
  },
  reviewerName: {
    width: 111,
    height: 33,
  },
  goodPlace: {
    color: Color.black,
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  pantaiYangSangat: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_base,
  },
  loremIpsumDolor1: {
    alignSelf: "stretch",
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_base,
  },
  readAll1: {
    alignSelf: "stretch",
  },
  readMoreTextreadAll: {
    width: 180,
    display: "none",
  },
  visitedDate: {
    color: Color.gray_600,
  },
  reviewBody1: {
    height: 26,
  },
  voteUpIcon: {
    width: 23,
    height: 23,
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  reviewBodyParent: {
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  content: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    flex: 1,
  },
  reviewCardDetail: {
    borderColor: "rgba(0, 0, 0, 0.1)",
    height: 199,
    padding: Padding.p_xs,
    borderWidth: 1,
    borderStyle: "solid",
    alignSelf: "stretch",
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    backgroundColor: Color.primaryPureWhite,
  },
  izzaAfkarinaM: {
    fontSize: FontSize.size_base,
  },
  aboutThisPlace: {
    color: Color.black,
    textAlign: "left",
  },
  vectorIcon22: {
    width: 7,
    height: 12,
  },
  aboutThisPlaceParent: {
    justifyContent: "center",
  },
  loremIpsumDolor3: {
    color: Color.gray_600,
    alignSelf: "stretch",
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_base,
  },
  bodyDetail: {
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: 0,
    width: 375,
  },
  rp500000: {
    fontSize: FontSize.size_3xl,
  },
  person: {
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_base,
  },
  next: {
    color: Color.teal_200,
    textAlign: "left",
  },
  next1: {
    textAlign: "center",
    color: Color.primaryPureWhite,
  },
  button1: {
    backgroundColor: Color.green,
    justifyContent: "center",
  },
  buttonParent: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowRadius: 23,
    elevation: 23,
    shadowOpacity: 1,
    height: 74,
    paddingLeft: Padding.p_8xs,
    paddingRight: Padding.p_xl,
    width: 375,
    backgroundColor: Color.primaryPureWhite,
  },
  tourDetail: {
    flex: 1,
    backgroundColor: Color.primaryPureWhite,
  },
});

export default TourDetail;
