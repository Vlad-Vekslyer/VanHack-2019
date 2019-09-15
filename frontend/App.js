import React, { useState, useEffect } from "react"
import { StatusBar, View } from "react-native"

import MapView from "./components/MapView"
import DogView from "./components/DogView"
import FeedbackView from "./components/FeedbackView"
import ScheduleView from "./components/ScheduleView"
import SignUpView from "./components/SignUpView"

const LoginView = () => <View>login</View>

StatusBar.setHidden(true)

export default () => {
  const [route, setRoute] = useState("signup")

  switch (route) {
    case "signup":
      return <SignUpView onSignIn={() => setRoute("map")} />
    case "map":
      return <MapView onChooseLocation={() => setRoute("dog")} />
    case "dog":
      return (
        <DogView
          onProfile={() => setRoute("profile")}
          onSelect={() => setRoute("schedule")}
          onBack={() => setRoute('map')}
        />
      )
    case "profile":
      return <FeedbackView onBack={() => setRoute('dog')} />
    case "schedule":
      return <ScheduleView onBack={() => setRoute('dog')} />
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
