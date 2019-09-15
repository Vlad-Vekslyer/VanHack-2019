import React, { useState, useCallback, useEffect } from "react"

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native"

import { Video } from "expo-av"
import { LinearGradient } from "expo-linear-gradient"

import Match from "./match"
import FeedbackView from '../FeedbackView'
import GenderIcon from '../GenderIcon'

import * as stub from "./stub"

import LikeImage from "./assets/like.png"
import ShareImage from "./assets/share.png"
import CancelImage from "./assets/cancel.png"
import ArrowImage from "./assets/arrow.png"

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
]

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]

const formatDate = d => {
  // 12:00 • SUN, 31, Dec.
  const hour = d.getHours()
  const min = d.getMinutes()
  const month = MONTHS[d.getMonth()]
  const date = d.getDate()
  const day = DAYS[d.getDay()]

  return `${hour}:${min} · ${day}, ${date} ${month}.`
}

const loadDogs = async () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stub.dogs)
    }, 300)
  })

const loadHistory = async () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stub.history)
    }, 300)
  })

const ProfileView = ({dog, onBack}) => (
  <View style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}>
    <FeedbackView dog={dog} onBack={onBack} />
  </View>
)

const Tabs = ({ active = 0, onSelectTab = index => {} }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: 24
    }}
  >
    <TouchableOpacity
      activeOpacity={active === 0 ? 1 : 0.8}
      onPress={() => onSelectTab(0)}
    >
      <Text
        style={{
          fontSize: 18,
          fontFamily: "Avenir-Medium",
          fontWeight: active === 0 ? "900" : "normal",
          color: "#fff"
        }}
      >
        For You
      </Text>
    </TouchableOpacity>
    <View
      style={{
        borderLeftWidth: 1,
        height: 10,
        borderColor: "#fff",
        marginLeft: 10,
        marginRight: 10
      }}
    />
    <TouchableOpacity
      activeOpacity={active === 1 ? 1 : 0.8}
      onPress={() => onSelectTab(1)}
    >
      <Text
        style={{
          fontSize: 18,
          fontFamily: "Avenir-Medium",
          fontWeight: active === 1 ? "900" : "normal",
          color: "#fff"
        }}
      >
        My Dogs
      </Text>
    </TouchableOpacity>
  </View>
)

const DogProfile = ({ dog, onLike, onCancel, onProfile }) => {
  const { width, height } = Dimensions.get("window")

  return (
    <View style={{ width, height }}>
      <Image
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        source={{ uri: dog.thumbnail }}
      />
      <Video
        source={{ uri: dog.video }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode={Video.RESIZE_MODE_COVER}
        shouldPlay
        isLooping
        style={{ flex: 1 }}
        // style={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <LinearGradient
        colors={[
          "rgba(0, 0, 0, 0.4)",
          "#rgba(0, 0, 0, 0)",
          "rgba(0, 0, 0, .8)"
        ]}
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          top: 0,
          right: 16,
          alignContent: "center",
          justifyContent: "center"
        }}
      >
        <TouchableOpacity onPress={() => onProfile(dog)} style={{ marginTop: 16 }} activeOpacity={.8}>
          <Image
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              borderColor: "#fff",
              borderWidth: 0.5
            }}
            source={{ uri: dog.profilePic }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            /* do nothing */
          }}
          style={{ marginTop: 37.5 }}
        >
          <Image style={{ width: 44, height: 44 }} source={ShareImage} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0, // TODO: 12.5 maybe?
          width: "100%",
          paddingLeft: 10
        }}
      >
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 25,
                fontFamily: "Avenir-Medium",
                color: "#fff",
                fontWeight: "900"
              }}
            >
              {dog.name}
            </Text>
            <GenderIcon sex={dog.sex} style={{ marginLeft: 4 }} />
            <Text
              style={{
                fontSize: 25,
                fontFamily: "Avenir-Medium",
                color: "#fff",
                fontWeight: "900"
              }}
            >
              , {dog.age}
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Avenir-Medium",
            color: "#fff",
            fontWeight: "500",
            marginTop: 4
          }}
        >
          {dog.breed}
        </Text>
        {dog.date ? (
          <>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => onCancel(dog)}
                style={{ width: 120, height: 40 }}
              >
                <Image
                  style={{ flex: 1, resizeMode: "contain" }}
                  source={CancelImage}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "column",
                marginTop: 10,
                paddingBottom: 20
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Avenir-Medium",
                  color: "#fff",
                  fontWeight: "300",
                  marginTop: 4
                }}
              >
                <Text>Your Date:</Text>
                <Text style={{ fontWeight: "900" }}>
                  {formatDate(dog.date)}
                </Text>
              </Text>
            </View>
          </>
        ) : (
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => onLike(dog)}
              style={{ width: 110, height: 110 }}
            >
              <Image
                style={{ flex: 1, resizeMode: "contain" }}
                source={LikeImage}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  )
}

const DogList = ({
  dogs,
  onLike = dog => {},
  onCancel = dog => {},
  onProfile = dog => {}
}) => (
  <ScrollView
    // style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }}
    contentContainerStyle={{
      backgroundColor: "#fff",
      alignItems: "center"
    }}
    showsVerticalScrollIndicator={false}
    pagingEnabled
    snapToStart
  >
    {dogs.map(dog => (
      <DogProfile
        key={dog.id}
        dog={dog}
        onLike={onLike}
        onCancel={onCancel}
        onProfile={onProfile}
      />
    ))}
  </ScrollView>
)

const DogView = ({
  onSelect = dog => {},
  onBack = () => {}
}) => {
  const [tab, setTab] = useState(0)
  const [dogs, setDogs] = useState([])
  const [history, setHistory] = useState([])
  const [loveDog, setDog] = useState(null)
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    ;(async () => {
      const [dogs, history] = await Promise.all([
        await loadDogs(),
        await loadHistory()
      ])

      setDogs(dogs)
      setHistory(history)
    })()
  }, [])

  const handleSelect = useCallback(index => {
    setTab(index)
  }, [])

  const handleLike = useCallback(dog => {
    setDog(dog)
  }, [])

  const handleCancel = useCallback(dog => {
    // show confirm dialogue if I can
    setTab(0)
  }, [])

  const handleProfle = useCallback(dog => {
    setProfile(dog || null)
  }, [])

  return (
    <View style={{ height: "100%", width: "100%" }}>
      {tab === 0 ? (
        <DogList
          key="foryou"
          dogs={dogs}
          onLike={handleLike}
          onProfile={handleProfle}
        />
      ) : (
        <DogList
          key="history"
          dogs={history}
          onCancel={handleCancel}
          onProfile={handleProfle}
        />
      )}

      <View style={{ position: "absolute", top: 0, width: "100%" }}>
        <TouchableOpacity onPress={onBack} style={{ marginTop: 16 }} activeOpacity={0.8}>
          <Image source={ArrowImage} style={{position: 'absolute', left: 10, top: 15, width: 15, height: 10}} />
        </TouchableOpacity>
        <Tabs active={tab} onSelectTab={handleSelect} />
      </View>

      {loveDog && <Match dog={loveDog} onConfirm={dog => onSelect(dog)} />}
      {profile && <ProfileView dog={profile} onBack={handleProfle} />}
    </View>
  )
}

export default DogView
