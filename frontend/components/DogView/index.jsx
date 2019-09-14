import React from "react"
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableHighlight
} from "react-native"

import { Video } from "expo-av"
import { LinearGradient } from "expo-linear-gradient"

import { dogs } from "./stub"

import LikeImage from "./assets/like@2x.png"
import MailImage from "./assets/mail@2x.png"
import FemailImage from "./assets/femail@2x.png"
import ShareImage from "./assets/share@2x.png"

const Tabs = ({ active = 0 }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: 24
    }}
  >
    <Text
      style={{
        fontSize: 18,
        fontFamily: "Avenir",
        fontWeight: "900",
        color: "#fff"
      }}
    >
      For You
    </Text>
    <View
      style={{
        borderLeftWidth: 1,
        height: 10,
        borderColor: "#fff",
        marginLeft: 10,
        marginRight: 10
      }}
    />
    <Text
      style={{
        fontSize: 18,
        fontFamily: "Avenir",
        color: "#fff"
      }}
    >
      My Dog
    </Text>
  </View>
)

const SexImage = ({ sex, style = {} }) => (
  <View style={{ ...style, width: 22, height: 22 }}>
    {sex === 1 ? (
      <Image style={{ flex: 1, resizeMode: "contain" }} source={MailImage} />
    ) : (
      <Image style={{ flex: 1, resizeMode: "contain" }} source={FemailImage} />
    )}
  </View>
)

const DogProfile = ({ dog }) => {
  const { width, height } = Dimensions.get("window")

  const onPress = () => {
    console.log("presed!")
  }

  return (
    <View style={{ width, height, backgroundColor: "red" }}>
      <Image
        style={{ flex: 1, resizeMode: "cover" }}
        source={{ uri: dog.profilePic }}
      />
      <LinearGradient
        colors={[
          "rgba(0, 0, 0, 0.4)",
          "#rgba(0, 0, 0, 0)",
          "rgba(0, 0, 0, .8)"
        ]}
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          top: 0,
          right: 16,
          alignContent: "center",
          justifyContent: "center"
        }}
      >
        <TouchableHighlight onPress={onPress} style={{ marginTop: 16 }}>
          <Image
            style={{
              width: 44,
              height: 44,
              borderRadius: 100,
              borderColor: "#fff",
              borderWidth: 0.5
            }}
            source={{ uri: dog.profilePic }}
          />
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress} style={{ marginTop: 37.5 }}>
          <Image style={{ width: 44, height: 44 }} source={ShareImage} />
        </TouchableHighlight>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0, // TODO: 12.5 maybe?
          width: "100%",
          paddingLeft: 10
        }}
      >
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 25,
                fontFamily: "Avenir",
                color: "#fff",
                fontWeight: "900"
              }}
            >
              {dog.name}
            </Text>
            <SexImage sex={dog.sex} style={{ marginLeft: 4 }} />
            <Text
              style={{
                fontSize: 25,
                fontFamily: "Avenir",
                color: "#fff",
                fontWeight: "900"
              }}
            >
              , {dog.age}
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Avenir",
            color: "#fff",
            fontWeight: "500",
            marginTop: 4
          }}
        >
          {dog.breed}
        </Text>
        <View style={{ alignItems: "center" }}>
          <TouchableHighlight
            onPress={onPress}
            style={{ width: 110, height: 110 }}
          >
            <Image
              style={{ flex: 1, resizeMode: "cover" }}
              source={LikeImage}
            />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  )
  {
    /* <Video
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode={Video.RESIZE_MODE_COVER}
        shouldPlay
        isLooping
        style={{ top: 0, left: 0, right: 0, bottom: 0 }}
      /> */
  }
}

const DogView = () => {
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <ScrollView
        // style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }}
        contentContainerStyle={{
          backgroundColor: "#fff",
          alignItems: "center"
        }}
        showsVerticalScrollIndicator={false}
        pagingEnabled
        snapToStart
      >
        {dogs.map(dog => (
          <DogProfile key={dog.id} dog={dog} />
        ))}
      </ScrollView>
      <View style={{ position: "absolute", top: 0, width: "100%" }}>
        <Tabs />
      </View>
    </View>
  )
}

export default DogView
