import React from "react"

import { View, Image } from "react-native"

import MailImage from "./assets/mail.png"
import FemailImage from "./assets/femail.png"

const GenderIcon = ({ sex, style = {} }) => (
  <View style={{ width: 22, height: 22, ...style }}>
    {sex === 1 ? (
      <Image style={{ flex: 1, resizeMode: "contain" }} source={MailImage} />
    ) : (
      <Image style={{ flex: 1, resizeMode: "contain" }} source={FemailImage} />
    )}
  </View>
)

export default GenderIcon