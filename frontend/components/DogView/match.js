import React, { useState, useCallback, useEffect } from "react"

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native"

import { LinearGradient } from "expo-linear-gradient"

import Button from "./assets/schedule-button.png"
import Walking from "./assets/let-s-go-walking.png"

const MatchView = ({ dog, onConfirm }) => {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "black"
      }}
    >
      <LinearGradient
        colors={["#000000", "#053600"]}
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Image style={{ width: 327, height: 233 }} source={Walking} />
        <Text
          style={{
            marginTop: 16,
            color: "#fff",
            fontSize: 18,
            fontFamily: "Avenir"
          }}
        >
          {dog && dog.name} also wants to go with you!
        </Text>
        {dog && (
          <Image
            style={{
              marginTop: 17,
              width: 100,
              height: 100,
              borderRadius: 50,
              borderColor: "#fff",
              borderWidth: 0.5
            }}
            source={{ uri: dog.profilePic }}
          />
        )}
        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => onConfirm}>
          <Image style={{ width: 312, height: 80 }} source={Button} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MatchView
