import React from "react"
import { storiesOf } from "@storybook/react-native"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import DogView from "./"

storiesOf("DogView", module).add("default", () => (
  <DogView>
    <Text>Hello Button</Text>
  </DogView>
))
