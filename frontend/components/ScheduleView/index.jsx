import React from "react"
import {View, ImageBackground, Image, Text } from "react-native"
import TimeSlot from "./TimeSlot"
import styles from "./styles"
import arrowImage from "./assets/arrow-2@3x.png"
import pinImage from "./assets/pin@3x.png"

let joshPeck = {
  name: "Josh Peck",
  profilePic: "https://pbs.twimg.com/profile_images/2916334218/89b387d7e7302fe1b88affd8992e9994_400x400.jpeg"
}

let drakeBell = {
  name: "Drake Bell",
  profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Drake_Bell_2007_cropped_retouched.jpg/220px-Drake_Bell_2007_cropped_retouched.jpg"
}

class MapView extends React.Component{

  state = {
      dog: {
        name: "Rocky",
        age: "1 month",
        profilePic: "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg",
        availableTimes: [new Date('September 20, 2019 14:00:00'), new Date('September 20, 2019 16:00:00')]
      },
      locationName: "East Richmond Animal Shelter",
      walks: [
        {time: new Date('September 20, 2019 14:00:00'), walkers: [joshPeck, drakeBell]},
        {time: new Date('September 20, 2019 16:00:00'), walkers: [joshPeck, drakeBell]}
      ]
    }

  render(){
    let timeSlots = this.state.dog.availableTimes.map(timeSlot => {
      let walkers = this.state.walks.filter(walk => walk.time.getTime() === timeSlot.getTime());
      if(walkers.length > 0){
        walkers = walkers[0].walkers;
        return <TimeSlot time={timeSlot} walkers={walkers}/>
      } else {
        return null;
      }
    })

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerSection}>
            <Image style={styles.backButton} source={arrowImage}></Image>
            <Image source={this.state.dog.profilePic} style={styles.profilePic}></Image>
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

export default MapView;
