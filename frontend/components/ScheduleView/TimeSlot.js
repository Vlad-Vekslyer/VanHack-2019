import React from "react"
import { StyleSheet, Text, View, Image} from "react-native"
import checkImage from "./assets/check.png"

const styles = StyleSheet.create({
  timeSlot: {
    paddingTop: 10,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 10
  },
  timeSlotHeader: {
    width: "80%"
  },
  slotHeader: {
    fontWeight: "bold",
    fontSize: 23,
    marginBottom: 14
  },
  footer: {
    marginTop: 8,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  walkerPic: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10
  },
  checkImage : {
    resizeMode: "contain",
    width: 40,
    height: 40,
  },
  walkerPics: {
    flexDirection: "row",
    width: "33%"
  },
  peopleGoing: {
    color: "#aaaaaa",
    letterSpacing: 0.3
  },

  areYouGoing: {
    color: "#00af6c"
  }
})

class TimeSlot extends React.Component {
  constructor(props){
    super(props);
  }

  getTime = () => {
    let time = this.props.time.toString();
    time = time.replace(this.props.time.getFullYear(), '');
    time = time.replace(':00', '');
    let gmtIndex = time.indexOf('GMT');
    let gmtPortion = time.slice(gmtIndex, time.length);
    time = time.replace(gmtPortion, '');
    time = time.replace('  ',' · ');
    let hourIndex = time.indexOf('·') + 2;
    let hour = time.slice(hourIndex, time.length);
    console.log("Hour:" + hour);
    time = hour + '· ' + time.slice(0, hourIndex - 3);
    return time;
  }

  render(){
    let time = this.getTime();
    this.props.walkers.forEach(walker => console.log(walker.profilePic));
    let walkerPics = this.props.walkers.map((walker, i) =>
      <Image key={i} style={styles.walkerPic} source={{uri: walker.profilePic, cache: 'force-cache'}} />
    )

    return(
      <View style={styles.timeSlot}>
        <View style={styles.timeSlotHeader}>
          <Text style={styles.slotHeader} >{time}</Text>
          <Text style={styles.peopleGoing}>{this.props.walkers.length} {this.props.walkers.length === 1 ? "person is " : "people are "}going</Text>
          <View style={styles.footer}>
            <View style={styles.walkerPics}>{walkerPics}</View>
            <Text style={styles.areYouGoing}>Are you going?</Text>
            <Image style={styles.checkImage} source={checkImage}></Image>
          </View>
        </View>
      </View>
    )
  }
}

export default TimeSlot;
