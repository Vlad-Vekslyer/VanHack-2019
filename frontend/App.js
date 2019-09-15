import React, { useState, useEffect } from "react"
import { StatusBar, View } from "react-native"

import MapView from "./components/MapView"
import DogView from "./components/DogView"
import FeedbackView from "./components/FeedbackView"
import ScheduleView from "./components/ScheduleView"

const LoginView = () => <View>login</View>

StatusBar.setHidden(true)

export default () => {
  const [route, setRoute] = useState("map")

  switch (route) {
    // case "login":
    //   return <MapView />
    case "map":
      return <MapView />
    case "dog":
      return <DogView />
    case "profile":
      return <FeedbackView />
    case "schedule":
      return <ScheduleView />
  }
}

// import storybook from './storybook'
// export default storybook

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     width: "100%",
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// })
