import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default function MapView() {
  return (
    <View style={styles.container}>
      <Text>This is a ConfirmView</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
