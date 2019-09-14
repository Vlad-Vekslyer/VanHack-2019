import React from "react"
import { storiesOf } from "@storybook/react-native"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import ConfirmView from "./"

storiesOf("ConfirmView", module).add("default", () => (
  <ConfirmView>
    <Text>Hello Button</Text>
  </ConfirmView>
))
