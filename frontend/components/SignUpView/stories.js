import React from "react"
import { storiesOf } from "@storybook/react-native"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import SignUpView from "./"

storiesOf("SignUpView", module).add("default", () => (
  <SignUpView>
    <Text>Hello Button</Text>
  </SignUpView>
))
