import * as React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Color,
  FontFamily,
  Padding,
  FontSize,
  Border,
} from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.home}
      contentContainerStyle={styles.homeScrollViewContent}
    >
      <View>
        <LinearGradient
          style={styles.wrapper}
          locations={[0, 1]}
          colors={["#0fa3e2", "#5acdff"]}
        >
          <ImageBackground
            style={styles.iconBg}
            resizeMode="cover"
            source={require("../assets/frame661.png")}
          >
            <View style={styles.statusBar}>
              <View style={styles.action}>
                <Text
                  style={[
                    styles.time,
                    styles.timeFlexBox,
                    styles.timeTypo,
                    styles.timePosition,
                  ]}
                >
                  9:41
                </Text>
              </View>
              <Image
                style={styles.containerIcon}
                resizeMode="cover"
                source={require("../assets/container4.png")}
              />
            </View>
            <View style={[styles.sectionTitleDetailParent, styles.mt61]}>
              <View style={styles.sectionTitleDetail}>
                <Text style={[styles.sectionTitleDetail1, styles.timeTypo]}>
                  Jelajahi dunia hari ini
                </Text>
                <Text style={[styles.sectionSubtitleDetail, styles.mt2]}>
                  <Text style={styles.discover}>Discover</Text>
                  <Text style={[styles.takeYourTravel, styles.home1Typo]}>
                    {" "}
                    - take your travel to next level
                  </Text>
                </Text>
              </View>
              <View style={styles.mt6}>
                <View style={styles.frameWrapper}>
                  <View
                    style={[
                      styles.searchDestinationParent,
                      styles.icontTabFlexBox,
                    ]}
                  >
                    <Text style={styles.searchDestination}>
                      Search destination
                    </Text>
                    <Image
                      style={styles.searchIcon}
                      resizeMode="cover"
                      source={require("../assets/search3.png")}
                    />
                  </View>
                </View>
                <View style={[styles.quickSearchParent, styles.mt10]}>
                  <Pressable
                    style={[styles.quickSearch, styles.quickSpaceBlock]}
                    onPress={() => navigation.navigate("RiwayatTransaksi")}
                  >
                    <Image
                      style={styles.icon1}
                      resizeMode="cover"
                      source={require("../assets/icon3.png")}
                    />
                    <Text style={[styles.oversea, styles.ml6]}>Riwayat</Text>
                  </Pressable>
                  <View
                    style={[
                      styles.quickSearch,
                      styles.ml10,
                      styles.quickSpaceBlock,
                    ]}
                  >
                    <Image
                      style={styles.icon1}
                      resizeMode="cover"
                      source={require("../assets/icon4.png")}
                    />
                    <Text style={[styles.oversea, styles.ml6]}>Oversea</Text>
                  </View>
                  <View
                    style={[
                      styles.quickSearch2,
                      styles.ml10,
                      styles.quickSpaceBlock,
                    ]}
                  >
                    <Image
                      style={styles.icon1}
                      resizeMode="cover"
                      source={require("../assets/icon5.png")}
                    />
                    <Text style={[styles.oversea, styles.ml6]}>Massage</Text>
                  </View>
                  <View
                    style={[
                      styles.quickSearch2,
                      styles.ml10,
                      styles.quickSpaceBlock,
                    ]}
                  >
                    <Image
                      style={styles.icon1}
                      resizeMode="cover"
                      source={require("../assets/icon6.png")}
                    />
                    <Text style={[styles.oversea, styles.ml6]}>Ticket</Text>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </LinearGradient>
        <View style={[styles.discoverSectionParent, styles.mt45]}>
          <Pressable
            style={styles.discoverSection}
            onPress={() => navigation.navigate("TourDetail")}
          >
            <View style={styles.sectionTitleDetail2}>
              <Text style={[styles.sectionTitleDetail3, styles.text2Typo]}>
                Popular Package in asia
              </Text>
              <Text
                style={[
                  styles.sectionSubtitleDetail1,
                  styles.mt2,
                  styles.textTypo,
                ]}
              >
                Section-subtitle-detail
              </Text>
            </View>
            <View style={[styles.tourAndActivitiesList, styles.mt20]}>
              <View style={[styles.relatedProductDetail, styles.relatedLayout]}>
                <ImageBackground
                  style={[
                    styles.unsplashdu0objdcynwIcon,
                    styles.tabBarsFlexBox,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/unsplashdu0objdcynw.png")}
                >
                  <View style={styles.savedProduct}>
                    <Image
                      style={styles.vectorIcon}
                      resizeMode="cover"
                      source={require("../assets/vector20.png")}
                    />
                  </View>
                </ImageBackground>
                <View style={[styles.theTwistLifestyleParent, styles.mt5]}>
                  <Text style={[styles.theTwistLifestyle, styles.theTypo]}>
                    PANTAI KUTA BALI
                  </Text>
                  <View style={[styles.starAndReviewCount, styles.mt2]}>
                    <View style={styles.starReview}>
                      <Image
                        style={styles.vectorIcon1}
                        resizeMode="cover"
                        source={require("../assets/vector.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector.png")}
                      />
                    </View>
                    <Text style={[styles.oversea, styles.ml10]}>
                      100 reviews
                    </Text>
                  </View>
                  <Text style={[styles.textTypo, styles.mt2]}>
                    Pantai Kuta Bali Adalah.....
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.relatedProductDetail,
                  styles.ml15,
                  styles.relatedLayout,
                ]}
              >
                <ImageBackground
                  style={[
                    styles.unsplashdu0objdcynwIcon,
                    styles.tabBarsFlexBox,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/unsplashdu0objdcynw1.png")}
                >
                  <View style={styles.savedProduct}>
                    <Image
                      style={styles.vectorIcon}
                      resizeMode="cover"
                      source={require("../assets/vector48.png")}
                    />
                  </View>
                </ImageBackground>
                <View style={[styles.theTwistLifestyleParent, styles.mt5]}>
                  <Text style={[styles.theTwistLifestyle, styles.theTypo]}>
                    Long-Tail Boat Charter
                  </Text>
                  <View style={[styles.starAndReviewCount, styles.mt2]}>
                    <View style={styles.starReview}>
                      <Image
                        style={styles.vectorIcon1}
                        resizeMode="cover"
                        source={require("../assets/vector.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector.png")}
                      />
                    </View>
                    <Text style={[styles.oversea, styles.ml10]}>
                      100 reviews
                    </Text>
                  </View>
                  <Text style={[styles.textTypo, styles.mt2]}>
                    Lorem ipsum dolor sit amet...
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.relatedProductDetail2,
                  styles.ml15,
                  styles.relatedLayout,
                ]}
              >
                <ImageBackground
                  style={[
                    styles.unsplashdu0objdcynwIcon,
                    styles.tabBarsFlexBox,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/unsplashmcefqfoxq40.png")}
                >
                  <View style={styles.savedProduct}>
                    <Image
                      style={styles.vectorIcon}
                      resizeMode="cover"
                      source={require("../assets/vector54.png")}
                    />
                  </View>
                </ImageBackground>
                <View style={[styles.theTwistLifestyleParent, styles.mt5]}>
                  <Text style={[styles.theTwistLifestyle, styles.theTypo]}>
                    Badshahi Mosque
                  </Text>
                  <View style={[styles.starAndReviewCount, styles.mt2]}>
                    <View style={styles.starReview}>
                      <Image
                        style={styles.vectorIcon1}
                        resizeMode="cover"
                        source={require("../assets/vector55.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector55.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector55.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector55.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector55.png")}
                      />
                    </View>
                    <Text style={[styles.oversea, styles.ml10]}>
                      100 reviews
                    </Text>
                  </View>
                  <Text style={[styles.text2, styles.mt2, styles.text2Typo]}>
                    Siem Reap
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
          <View style={[styles.discoverSection, styles.mt50]}>
            <View style={styles.sectionTitleDetail2}>
              <Text style={[styles.sectionTitleDetail3, styles.text2Typo]}>
                Expanding your trip around the world
              </Text>
              <Text
                style={[
                  styles.sectionSubtitleDetail1,
                  styles.mt2,
                  styles.textTypo,
                ]}
              >
                Section-subtitle-detail
              </Text>
            </View>
            <View style={[styles.frameContainer, styles.mt20]}>
              <View style={[styles.provinceCardParent, styles.timePosition]}>
                <View style={styles.provinceCardLayout}>
                  <LinearGradient
                    style={[styles.provinceCardLayout, styles.timePosition]}
                    locations={[0, 0.51, 1]}
                    colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0)", "#000"]}
                  >
                    <ImageBackground
                      style={[
                        styles.icon5,
                        styles.icon5SpaceBlock,
                        styles.iconBg,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/unsplashu69w7ozf1i.png")}
                    >
                      <Text style={[styles.cambodia, styles.text2Typo]}>
                        Cambodia
                      </Text>
                    </ImageBackground>
                  </LinearGradient>
                </View>
                <ImageBackground
                  style={[
                    styles.icon5SpaceBlock,
                    styles.ml15,
                    styles.provinceCardLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/frame339.png")}
                >
                  <Text style={[styles.cambodia, styles.text2Typo]}>
                    Bangladesh
                  </Text>
                </ImageBackground>
                <View style={[styles.provinceCardLayout, styles.ml15]}>
                  <LinearGradient
                    style={styles.timePosition}
                    locations={[0.6, 1]}
                    colors={["rgba(0, 0, 0, 0)", "#000"]}
                  >
                    <ImageBackground
                      style={[
                        styles.icon5,
                        styles.icon5SpaceBlock,
                        styles.iconBg,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/unsplashqxleqmwxkku.png")}
                    >
                      <Text style={[styles.cambodia, styles.text2Typo]}>
                        Myanmar
                      </Text>
                    </ImageBackground>
                  </LinearGradient>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.discoverSection, styles.mt50]}>
            <View style={styles.sectionTitleDetail2}>
              <Text style={[styles.sectionTitleDetail3, styles.text2Typo]}>
                Travel beyound the boundary
              </Text>
              <Text
                style={[
                  styles.sectionSubtitleDetail1,
                  styles.mt2,
                  styles.textTypo,
                ]}
              >
                Section-subtitle-detail
              </Text>
            </View>
            <View style={[styles.tourAndActivitiesList, styles.mt20]}>
              <View style={[styles.relatedProductDetail, styles.relatedLayout]}>
                <ImageBackground
                  style={[
                    styles.unsplashdu0objdcynwIcon,
                    styles.tabBarsFlexBox,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/unsplashdu0objdcynw2.png")}
                >
                  <View style={styles.savedProduct}>
                    <Image
                      style={styles.vectorIcon}
                      resizeMode="cover"
                      source={require("../assets/vector20.png")}
                    />
                  </View>
                </ImageBackground>
                <View style={[styles.theTwistLifestyleParent, styles.mt5]}>
                  <Text style={[styles.theTwistLifestyle, styles.theTypo]}>
                    Tokyo, Japan
                  </Text>
                  <View style={[styles.starAndReviewCount, styles.mt2]}>
                    <View style={styles.starReview}>
                      <Image
                        style={styles.vectorIcon1}
                        resizeMode="cover"
                        source={require("../assets/vector.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector.png")}
                      />
                    </View>
                    <Text style={[styles.oversea, styles.ml10]}>
                      100 reviews
                    </Text>
                  </View>
                  <Text style={[styles.textTypo, styles.mt2]}>
                    Lorem ipsum dolor sit amet...
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.relatedProductDetail2,
                  styles.ml15,
                  styles.relatedLayout,
                ]}
              >
                <ImageBackground
                  style={[
                    styles.unsplashdu0objdcynwIcon,
                    styles.tabBarsFlexBox,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/unsplashgdjzs5jzwza.png")}
                >
                  <View style={styles.savedProduct}>
                    <Image
                      style={styles.vectorIcon}
                      resizeMode="cover"
                      source={require("../assets/vector66.png")}
                    />
                  </View>
                </ImageBackground>
                <View style={[styles.theTwistLifestyleParent, styles.mt5]}>
                  <Text style={[styles.theTwistLifestyle4, styles.theTypo]}>
                    Kuala Lampur, Malaysia
                  </Text>
                  <View style={[styles.starAndReviewCount, styles.mt2]}>
                    <View style={styles.starReview}>
                      <Image
                        style={styles.vectorIcon1}
                        resizeMode="cover"
                        source={require("../assets/vector.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector.png")}
                      />
                    </View>
                    <Text style={[styles.oversea, styles.ml10]}>
                      100 reviews
                    </Text>
                  </View>
                  <Text style={[styles.text2, styles.mt2, styles.text2Typo]}>
                    $00.00
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.relatedProductDetail2,
                  styles.ml15,
                  styles.relatedLayout,
                ]}
              >
                <ImageBackground
                  style={[
                    styles.unsplashdu0objdcynwIcon,
                    styles.tabBarsFlexBox,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/unsplashmcefqfoxq40.png")}
                >
                  <View style={styles.savedProduct}>
                    <Image
                      style={styles.vectorIcon}
                      resizeMode="cover"
                      source={require("../assets/vector54.png")}
                    />
                  </View>
                </ImageBackground>
                <View style={[styles.theTwistLifestyleParent, styles.mt5]}>
                  <Text style={[styles.theTwistLifestyle, styles.theTypo]}>
                    Badshahi Mosque
                  </Text>
                  <View style={[styles.starAndReviewCount, styles.mt2]}>
                    <View style={styles.starReview}>
                      <Image
                        style={styles.vectorIcon1}
                        resizeMode="cover"
                        source={require("../assets/vector55.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector55.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector55.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector55.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector55.png")}
                      />
                    </View>
                    <Text style={[styles.oversea, styles.ml10]}>
                      100 reviews
                    </Text>
                  </View>
                  <Text style={[styles.text2, styles.mt2, styles.text2Typo]}>
                    Siem Reap
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.discoverSection2, styles.mt50]}>
            <View style={styles.sectionTitleDetail8}>
              <Text style={[styles.sectionTitleDetail3, styles.text2Typo]}>
                Check out what nearby you
              </Text>
              <Text
                style={[
                  styles.sectionSubtitleDetail1,
                  styles.mt2,
                  styles.textTypo,
                ]}
              >
                Section-subtitle-detail
              </Text>
            </View>
            <View style={[styles.tourAndActivitiesList2, styles.mt20]}>
              <View
                style={[styles.relatedProductDetail2, styles.relatedLayout]}
              >
                <ImageBackground
                  style={[
                    styles.unsplashdu0objdcynwIcon,
                    styles.tabBarsFlexBox,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/unsplashpphgehz1uk.png")}
                >
                  <View style={styles.savedProduct}>
                    <Image
                      style={styles.vectorIcon}
                      resizeMode="cover"
                      source={require("../assets/vector78.png")}
                    />
                  </View>
                </ImageBackground>
                <View style={[styles.theTwistLifestyleParent, styles.mt5]}>
                  <Text style={[styles.theTwistLifestyle, styles.theTypo]}>
                    Angkor Malis hotel
                  </Text>
                  <View style={[styles.starAndReviewCount, styles.mt2]}>
                    <View style={styles.starReview}>
                      <Image
                        style={styles.vectorIcon1}
                        resizeMode="cover"
                        source={require("../assets/vector79.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector79.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector79.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector79.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector79.png")}
                      />
                    </View>
                    <Text style={[styles.oversea, styles.ml10]}>
                      100 reviews
                    </Text>
                  </View>
                  <Text style={[styles.text2, styles.mt2, styles.text2Typo]}>
                    $00.00
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.relatedProductDetail2,
                  styles.ml15,
                  styles.relatedLayout,
                ]}
              >
                <ImageBackground
                  style={[
                    styles.unsplashdu0objdcynwIcon,
                    styles.tabBarsFlexBox,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/frame337.png")}
                >
                  <View style={styles.savedProduct}>
                    <Image
                      style={styles.vectorIcon}
                      resizeMode="cover"
                      source={require("../assets/vector54.png")}
                    />
                  </View>
                </ImageBackground>
                <View style={[styles.theTwistLifestyleParent, styles.mt5]}>
                  <Text style={[styles.theTwistLifestyle, styles.theTypo]}>
                    Bodai Spa treatment
                  </Text>
                  <View style={[styles.starAndReviewCount, styles.mt2]}>
                    <View style={styles.starReview}>
                      <Image
                        style={styles.vectorIcon1}
                        resizeMode="cover"
                        source={require("../assets/vector79.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector79.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector79.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector79.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector79.png")}
                      />
                    </View>
                    <Text style={[styles.oversea, styles.ml10]}>
                      100 reviews
                    </Text>
                  </View>
                  <Text style={[styles.text2, styles.mt2, styles.text2Typo]}>
                    $00.00
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.relatedProductDetail2,
                  styles.ml15,
                  styles.relatedLayout,
                ]}
              >
                <ImageBackground
                  style={[
                    styles.unsplashdu0objdcynwIcon,
                    styles.tabBarsFlexBox,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/unsplashmcefqfoxq40.png")}
                >
                  <View style={styles.savedProduct}>
                    <Image
                      style={styles.vectorIcon}
                      resizeMode="cover"
                      source={require("../assets/vector54.png")}
                    />
                  </View>
                </ImageBackground>
                <View style={[styles.theTwistLifestyleParent, styles.mt5]}>
                  <Text style={[styles.theTwistLifestyle, styles.theTypo]}>
                    Angkor Eyes Siem Reap
                  </Text>
                  <View style={[styles.starAndReviewCount, styles.mt2]}>
                    <View style={styles.starReview}>
                      <Image
                        style={styles.vectorIcon1}
                        resizeMode="cover"
                        source={require("../assets/vector55.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector55.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector55.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector55.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.ml4]}
                        resizeMode="cover"
                        source={require("../assets/vector55.png")}
                      />
                    </View>
                    <Text style={[styles.oversea, styles.ml10]}>
                      100 reviews
                    </Text>
                  </View>
                  <Text style={[styles.text2, styles.mt2, styles.text2Typo]}>
                    $00.00
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.bottomNavigation, styles.mt41]}>
        <View style={[styles.tabBars, styles.tabBarsFlexBox]}>
          <View style={[styles.icontTab, styles.icontTabFlexBox]}>
            <View style={styles.iconLabel}>
              <Image
                style={styles.homeIcon}
                resizeMode="cover"
                source={require("../assets/home1.png")}
              />
              <Text
                style={[styles.home1, styles.home1Typo, styles.timeFlexBox]}
              >
                Home
              </Text>
            </View>
            <View style={[styles.holder, styles.holderLayout]} />
          </View>
          <Pressable
            style={[styles.icontTab, styles.ml21, styles.icontTabFlexBox]}
            onPress={() => navigation.navigate("RiwayatTransaksi")}
          >
            <View style={styles.iconLabel1}>
              <Image
                style={styles.homeIcon}
                resizeMode="cover"
                source={require("../assets/heart1.png")}
              />
              <Text style={[styles.wishlist, styles.timeFlexBox]}>Riwayat</Text>
            </View>
            <View style={styles.holderLayout} />
          </Pressable>
          <View style={[styles.icontTab, styles.ml21, styles.icontTabFlexBox]}>
            <View style={styles.iconLabel1}>
              <Image
                style={styles.bellIcon}
                resizeMode="cover"
                source={require("../assets/bell.png")}
              />
              <Text style={[styles.wishlist, styles.timeFlexBox]}>
                Notification
              </Text>
            </View>
            <View style={styles.holderLayout} />
          </View>
          <View style={[styles.icontTab, styles.ml21, styles.icontTabFlexBox]}>
            <View style={styles.iconLabel1}>
              <Image
                style={styles.homeIcon}
                resizeMode="cover"
                source={require("../assets/usercircle.png")}
              />
              <Text style={[styles.wishlist, styles.timeFlexBox]}>Profile</Text>
            </View>
            <View style={styles.holderLayout} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mt2: {
    marginTop: Margin.m_8xs,
  },
  ml6: {
    marginLeft: Margin.m_4xs,
  },
  ml10: {
    marginLeft: Margin.m_2xs,
  },
  mt10: {
    marginTop: Margin.m_2xs,
  },
  mt6: {
    marginTop: Margin.m_4xs,
  },
  mt61: {
    marginTop: 61,
  },
  ml4: {
    marginLeft: Margin.m_6xs,
  },
  mt5: {
    marginTop: Margin.m_5xs,
  },
  ml15: {
    marginLeft: Margin.m_lg,
  },
  mt20: {
    marginTop: Margin.m_3xl,
  },
  mt50: {
    marginTop: Margin.m_7xl,
  },
  mt45: {
    marginTop: 45,
  },
  ml21: {
    marginLeft: Margin.m_4xl,
  },
  mt41: {
    marginTop: 41,
  },
  homeScrollViewContent: {
    flexDirection: "column",
  },
  timeFlexBox: {
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 0,
  },
  timeTypo: {
    fontWeight: "700",
    color: Color.primaryPureWhite,
  },
  timePosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  home1Typo: {
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
  },
  icontTabFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  quickSpaceBlock: {
    paddingVertical: Padding.p_4xs,
    width: 131,
    alignItems: "center",
    paddingHorizontal: Padding.p_2xs,
    flexDirection: "row",
    backgroundColor: Color.primaryPureWhite,
  },
  text2Typo: {
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.poppins,
  },
  textTypo: {
    color: Color.gray_600,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
  },
  relatedLayout: {
    height: 320,
    width: 230,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.05)",
    borderStyle: "solid",
  },
  tabBarsFlexBox: {
    paddingTop: Padding.p_xs,
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  theTypo: {
    fontSize: FontSize.size_2xl,
    fontWeight: "600",
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
  },
  icon5SpaceBlock: {
    paddingVertical: Padding.p_md,
    paddingHorizontal: Padding.p_lg,
    justifyContent: "flex-end",
  },
  iconBg: {
    backgroundColor: "transparent",
    width: "100%",
  },
  provinceCardLayout: {
    width: 199,
    height: 209,
  },
  holderLayout: {
    height: 4,
    width: 50,
    borderRadius: Border.br_lg,
  },
  time: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.dMSans,
    color: Color.primaryPureWhite,
    width: 54,
  },
  action: {
    top: 14,
    left: 20,
    height: 18,
    width: 54,
    position: "absolute",
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
    backgroundColor: "rgba(0, 0, 0, 0)",
    height: 44,
    alignSelf: "stretch",
  },
  sectionTitleDetail1: {
    fontSize: FontSize.size_5xl,
    lineHeight: 40,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    color: Color.primaryPureWhite,
    letterSpacing: 0,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  discover: {
    fontWeight: "800",
    fontFamily: FontFamily.poppins,
    color: Color.primaryPureWhite,
  },
  takeYourTravel: {
    color: "rgba(255, 255, 255, 0.9)",
  },
  sectionSubtitleDetail: {
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  sectionTitleDetail: {
    paddingHorizontal: Padding.p_4xl,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  searchDestination: {
    opacity: 0.6,
    color: Color.black,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
  },
  searchIcon: {
    width: 24,
    height: 24,
    opacity: 0.6,
    overflow: "hidden",
  },
  searchDestinationParent: {
    height: 52,
    paddingHorizontal: Padding.p_2xs,
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: Border.br_sm,
    paddingVertical: Padding.p_6xs,
    backgroundColor: Color.primaryPureWhite,
  },
  frameWrapper: {
    paddingHorizontal: 22,
    paddingVertical: Padding.p_6xs,
    width: 375,
  },
  icon1: {
    borderRadius: Border.br_2xs,
    width: 28,
    height: 28,
    overflow: "hidden",
  },
  oversea: {
    color: Color.black,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
  },
  quickSearch: {
    borderRadius: Border.br_xs,
  },
  quickSearch2: {
    borderRadius: Border.br_md,
  },
  quickSearchParent: {
    width: 371,
    paddingLeft: Padding.p_4xl,
    flexDirection: "row",
  },
  sectionTitleDetailParent: {
    paddingBottom: 36,
    alignSelf: "stretch",
  },
  wrapper: {
    width: 375,
  },
  sectionTitleDetail3: {
    fontSize: FontSize.size_3xl,
    color: Color.black,
    alignSelf: "stretch",
  },
  sectionSubtitleDetail1: {
    display: "none",
  },
  sectionTitleDetail2: {
    width: 262,
    paddingLeft: Padding.p_4xl,
  },
  vectorIcon: {
    width: 17,
    height: 15,
  },
  savedProduct: {
    borderRadius: Border.br_xl,
    width: 36,
    height: 36,
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.primaryPureWhite,
  },
  unsplashdu0objdcynwIcon: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    paddingLeft: Padding.p_3xs,
    paddingRight: Padding.p_xs,
    paddingBottom: Padding.p_4xs,
    justifyContent: "flex-end",
  },
  theTwistLifestyle: {
    width: 192,
  },
  vectorIcon1: {
    width: 13,
    height: 12,
  },
  starReview: {
    flexDirection: "row",
  },
  starAndReviewCount: {
    alignItems: "center",
    flexDirection: "row",
  },
  theTwistLifestyleParent: {
    paddingLeft: Padding.p_6xs,
    paddingTop: Padding.p_8xs,
    paddingRight: Padding.p_8xs,
    paddingBottom: Padding.p_6xs,
    alignSelf: "stretch",
  },
  relatedProductDetail: {
    borderRadius: Border.br_sm,
    height: 320,
    width: 230,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.05)",
    borderStyle: "solid",
    overflow: "hidden",
  },
  text2: {
    color: Color.black,
    fontSize: FontSize.size_base,
  },
  relatedProductDetail2: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
  },
  tourAndActivitiesList: {
    paddingLeft: Padding.p_4xl,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  discoverSection: {
    width: 375,
  },
  cambodia: {
    fontSize: FontSize.size_lg,
    color: Color.primaryPureWhite,
  },
  icon5: {
    height: "100%",
  },
  provinceCardParent: {
    paddingLeft: Padding.p_4xl,
    flexDirection: "row",
  },
  frameContainer: {
    height: 209,
    alignSelf: "stretch",
  },
  theTwistLifestyle4: {
    alignSelf: "stretch",
  },
  sectionTitleDetail8: {
    width: 231,
    paddingLeft: Padding.p_4xl,
  },
  tourAndActivitiesList2: {
    width: 370,
    paddingLeft: Padding.p_4xl,
    flexDirection: "row",
  },
  discoverSection2: {
    width: 374,
    display: "none",
  },
  discoverSectionParent: {
    alignItems: "center",
  },
  homeIcon: {
    width: 23,
    height: 23,
    overflow: "hidden",
  },
  home1: {
    color: Color.primaryBlueSky,
    fontSize: FontSize.size_base,
  },
  iconLabel: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  holder: {
    backgroundColor: Color.primaryBlueSky,
  },
  icontTab: {
    justifyContent: "space-between",
    flex: 1,
  },
  wishlist: {
    color: Color.gray_700,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppins,
  },
  iconLabel1: {
    height: 42,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bellIcon: {
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  tabBars: {
    alignItems: "center",
  },
  bottomNavigation: {
    shadowColor: "rgba(175, 175, 175, 0.1)",
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    height: 72,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: 0,
    width: 375,
    overflow: "hidden",
    backgroundColor: Color.primaryPureWhite,
  },
  home: {
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.primaryPureWhite,
  },
});

export default Home;
