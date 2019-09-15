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

const MatchView = ({ dog }) => <View>
  <Text>{dog.name} also wants to go with you!</Text>
</View>

export default DogView
