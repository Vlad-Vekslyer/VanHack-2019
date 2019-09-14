import React from "react"
import { storiesOf } from "@storybook/react-native"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import MapView from "./"

storiesOf("MapView", module).add("default", () => (
  <MapView>
    <Text>Hello Button</Text>
  </MapView>
))
