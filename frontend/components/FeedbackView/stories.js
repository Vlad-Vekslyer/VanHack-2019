import React from "react"
import { storiesOf } from "@storybook/react-native"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import FeedbackView from "./"

storiesOf("FeedbackView", module).add("default", () => (
  <FeedbackView>
    <Text>Hello Button</Text>
  </FeedbackView>
))
