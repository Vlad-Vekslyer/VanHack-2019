import React from "react"

import { storiesOf } from "@storybook/react-native"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import Welcome from "./Welcome"

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
))

import "../../components/ConfirmView/stories"
import "../../components/DogView/stories"
import "../../components/FeedbackView/stories"
// import "../../components/MapView/stories"
import "../../components/ScheduleView/stories"
import "../../components/SignUpView/stories"
