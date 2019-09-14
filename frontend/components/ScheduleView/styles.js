import {StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  backButton: {
    width: 15,
    height: 15,
    resizeMode: "contain"
  },
  header : {
    width: "80%",
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row"
  },
  profilePic : {
    borderRadius: 42,
    width: 45,
    height: 45,
    marginLeft: 10,
    marginRight: 10,
    boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.2)"
  },
  dogHeaders : {
    display: "flex",
    flexWrap: "wrap",
    width: "100%"
  },
  dogName : {
    width: "100%" ,
    fontSize: 20,
    margin: 0
  },
  locationName: {
    color: "#aaaaaa"
  },
  slotsSection: {
    width: "80%",
    flexDirection: "column"
  },
  pinImage : {
    width: 10,
    height: 10,
    marginRight: 3,
    resizeMode: "contain"
  }
});

export default styles;
