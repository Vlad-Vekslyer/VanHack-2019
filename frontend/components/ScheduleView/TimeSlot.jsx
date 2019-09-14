import React from "react"
import { StyleSheet, Text, View} from "react-native"

class TimeSlot extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View>
        {this.props.time.getDay()}
      </View>
    )
  }
}

export default TimeSlot;
