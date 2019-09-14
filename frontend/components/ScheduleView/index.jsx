import React from "react"
import { StyleSheet, View, ImageBackground, Image, Text } from "react-native"

let joshPeck = {
  name: "Josh Peck",
  profilePic: "https://pbs.twimg.com/profile_images/2916334218/89b387d7e7302fe1b88affd8992e9994_400x400.jpeg"
}

let drakeBell = {
  name: "Drake Bell",
  profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Drake_Bell_2007_cropped_retouched.jpg/220px-Drake_Bell_2007_cropped_retouched.jpg"
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  backButton: {
    backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/09/05/10/50/app-1646213_960_720.png")',
    width: 30,
    height: 30,
    alignSelf: "flex-start"
  },
  header : {
    width: "80%",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row"
  },
  profilePic : {
    borderRadius: 42,
    width: 80,
    height: 80
  },
  dogHeaders : {
    display: "flex",
    flexWrap: "wrap",
    width: "60%"
  },
  dogName : {
    width: "100%" ,
    fontSize: 30,
    margin: 0
  },
  location: {
    fontSize: "0.8em"
  }
})

class MapView extends React.Component{

  state = {
      dog: {
        name: "Rocky",
        profilePic: "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg",
        availableTimes: [new Date('September 20, 2019 14:00:00'), new Date('September 20, 2019 16:00:00')]
      },
      locationName: "East Richmond Animal Shelter",
      walks: [{time: new Date('September 20, 2019 14:00:00'), walkers: [joshPeck, drakeBell]}]
    }


  render(){
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backButton} source="https://cdn.pixabay.com/photo/2016/09/05/10/50/app-1646213_960_720.png">
        </ImageBackground>
        <View style={styles.header}>
          <Image source={this.state.dog.profilePic} style={styles.profilePic}></Image>
          <View style={styles.dogHeaders}>
            <Text style={styles.dogName}>{this.state.dog.name}</Text>
            <Text style={styles.locationName}>{this.state.locationName}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default MapView;
