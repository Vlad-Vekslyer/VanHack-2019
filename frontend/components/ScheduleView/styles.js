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
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 10,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 3,
    },
    paddingBottom: 10,
    shadowOpacity: 0.29,
    shadowRadius: 2.55
  },
  profilePic : {
    borderRadius: 42,
    width: 45,
    height: 45,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: {
	     width: 0,
	     height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "#ffffff"
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
    width: "100%",
    flexDirection: "column"
  },
  pinImage : {
    width: 10,
    height: 10,
    marginRight: 3,
    resizeMode: "contain"
  },
  headerSection: {
    width: "80%",
    alignItems: "center",
    flexDirection: "row",
  }
});

export default styles;
