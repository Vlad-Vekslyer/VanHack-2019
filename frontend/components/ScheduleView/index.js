import React, { useCallback } from "react"
import {View, Alert, Image, Text, TouchableOpacity } from "react-native"
import TimeSlot from "./TimeSlot"
import styles from "./styles"
import arrowImage from "./assets/arrow-2.png"
import pinImage from "./assets/pin.png"

let joshPeck = {
  name: "Josh Peck",
  profilePic: "https://pbs.twimg.com/profile_images/2916334218/89b387d7e7302fe1b88affd8992e9994_400x400.jpeg"
}

let drakeBell = {
  name: "Drake Bell",
  profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Drake_Bell_2007_cropped_retouched.jpg/220px-Drake_Bell_2007_cropped_retouched.jpg"
}

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

class ScheduleView extends React.Component{

  state = {
      // dog: {
      //   name: "Rocky",
      //   age: "1 month",
      //   profilePic: "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg",
      //   availableTimes: [new Date('September 20, 2019 14:00:00'), new Date('September 20, 2019 16:00:00')]
      // },
      locationName: "East Richmond Animal Shelter",
      // walks: [
      //   {time: new Date('September 20, 2019 14:00:00'), walkers: [joshPeck, drakeBell]},
      //   {time: new Date('September 20, 2019 16:00:00'), walkers: [joshPeck, drakeBell]}
      // ]
    }

  async componentDidMount() {
    const { dogId } = this.props
    const data = await fetch(`https://vanhack-2019-backend.herokuapp.com/api/dogs/${dogId}/schedule`).then(r => r.json())
    console.log(data.walks.map(w => ({...w, time: new Date(w.time)})))
    this.setState({
      loaded: true,
      dog: {
        ...data.dog,
        availableTimes: data.dog.availableTimes.map(str => new Date(str))
      },
      walks: data.walks.map(w => ({...w, time: new Date(w.time)}))
    })
  }

  render(){
    const { onBack, onSelectTime } = this.props
    const { loaded } = this.state
    if (!loaded) {
      return null
    }

    const handleSelect = time => {
      const date = formatDate(time)
      Alert.alert(
        date,
        "Are you going to meet?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "Confirm", onPress: () => onBack() }
        ],
        { cancelable: false }
      )
    }

    let timeSlots = this.state.dog.availableTimes.map(timeSlot => {
      let walkers = this.state.walks.filter(walk => walk.time.getTime() === timeSlot.getTime());
      if(walkers.length > 0){
        const  w = walkers[0].walkers;
        return <TimeSlot key={timeSlot.getTime()} time={timeSlot} walkers={w} onSelect={() => handleSelect(timeSlot)} />
      } else {
        return <TimeSlot key={timeSlot.getTime()} time={timeSlot} walkers={[]} onSelect={() => handleSelect(timeSlot)} />
      }
    })

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerSection}>
            <TouchableOpacity onPress={onBack}>
              <Image style={styles.backButton} source={arrowImage}></Image>
            </TouchableOpacity>
            <Image source={{uri: this.state.dog.profileVidThumbnail, cache: 'force-cache'}} style={styles.profilePic}></Image>
            <View style={styles.dogHeaders}>
              <Text style={styles.dogName}>{this.state.dog.name}, {this.state.dog.age}</Text>
              <Text style={styles.locationName}>
                <Image style={styles.pinImage} source={pinImage}></Image>
                {this.state.locationName}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.slotsSection}>
          {timeSlots}
        </View>
      </View>
    )
  }
}

export default ScheduleView;
