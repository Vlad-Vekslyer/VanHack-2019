import React from "react"
import { storiesOf } from "@storybook/react-native"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import DogView from "./"

storiesOf("DogView", module).add("default", () => {
  return (
    <DogView
      onSelect={action("onSelect")}
      onProfile={action("onProfile")}
      onCancel={action("onCancel")}
    />
  )
})
