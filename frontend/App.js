import React, { useState } from "react"
import { StatusBar } from "react-native"

import MapView from "./components/MapView"
import DogView from "./components/DogView"
import ScheduleView from "./components/ScheduleView"
import SignUpView from "./components/SignUpView"

StatusBar.setHidden(true)

export default () => {
  // const [route, setRoute] = useState("signup")
  const [route, setRoute] = useState("dog")

  switch (route) {
    case "signup":
      return <SignUpView onSignIn={() => setRoute("map")} />
    case "map":
      return <MapView onChooseLocation={() => setRoute("dog")} />
    case "dog":
      return (
        <DogView
          onSelect={() => setRoute("schedule")}
          onBack={() => setRoute("map")}
        />
      )
    case "schedule":
      return <ScheduleView onBack={() => setRoute("dog")} />
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
