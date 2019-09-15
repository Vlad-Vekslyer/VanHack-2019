import React from "react"
import { storiesOf } from "@storybook/react-native"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import ScheduleView from "./"

storiesOf("ScheduleView", module).add("default", () => (
  <ScheduleView />
))
