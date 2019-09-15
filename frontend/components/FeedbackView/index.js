import React, { useState, useEffect} from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
// import ImageZoom from 'react-medium-image-zoom'

const ImageZoom = ({image}) => <Image source={{uri: image.src, cache: 'force-cache'}} style={image.style} />

import GenderIcon from '../GenderIcon'

const FeedbackView = ({ onBack, dog }) => {
  const dogPhotos = dog.album

    return (
    <View style={styles.container}>
      <View style={{top: 12.5}}>
        <TouchableOpacity onPress={() => onBack()}>
          <Image style={styles.back} source={require("./back.png")}>

          </Image>
        </TouchableOpacity>
      </View>
      <View style={styles.top}>
      <ImageZoom
              image={{
                src: dog.profilePic,
                style: {width: 72,
                  height: 72, 
                  borderRadius: 72/ 2,},
              }}
              
              />
        <View style={styles.topRight}>
        <View style={styles.topRightUpper}>
          <Image style={styles.heart} source={require("./heart.png")}></Image>
          <Text style={{fontSize: 18}}>{dog.likes}</Text>
        </View>
        <View style={styles.topRightLower}>
          <Text style={{fontSize: 12, color: '#AAAAAA'}}>Last walk with you was Dec 17th</Text>
        </View>
      </View>
      </View>
      <View style={styles.middle}>
        <View style={styles.middleHeader}>
          <View style={styles.middleHeaderTop}>
            <Text style={{fontWeight: 'bold', fontSize: 25}}>{dog.name}</Text>
            <GenderIcon style={styles.gender} sex={dog.sex} />
            <Text style={{fontWeight: 'bold', fontSize: 25}}> {dog.age}</Text>
          </View>
          <View style={styles.middleHeaderBottom}>
            <Text style={{fontSize: 18}}>{dog.breed}</Text>
          </View>
        </View>
        <View style={styles.middleDescription}>
          <Text style={{fontSize: 15, lineHeight: 20}}>{dog.profileDesc}</Text> 
        </View>
      </View>
      <View style={styles.bottom}>
        {dogPhotos.map((photo, idx) => {
          return (
            <ImageZoom
              key={idx}
              image={{
                src: photo,
                style: {height: 113, width: 113, margin: 3},
              }}
              
              />
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 8,

  },
  
/////
  top:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    paddingTop: 30,
    margin: 12,
  },
  back:{
    width: 30,
    height: 10,
    marginLeft: 10,
    marginTop: 10,
    resizeMode: 'contain',
  },
  topImage: {
    width: 100, 
    height: 100, 
    borderRadius: 100/ 2,
  }, 
  heart: {
    height: 50,
    width: 50,
  },

  topRight:{
    paddingTop: 3,
  },
  topRightUpper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  topRightLower:{
    marginTop: -10
  },
/////


  middle:{
    padding: 8,
    margin: 12,
    marginTop: 0,
    paddingTop: 0
  },
  middleHeader: {
    marginBottom: 30,
  },
  middleHeaderTop:{
    flexDirection: 'row',
    // fontWeight: 'bold',
    marginBottom: 10,
  }, 
  middleDescription: {
    marginBottom: 13,
  },
  gender:{
    height: '100%',
    width: 20,
  },


  //////
  bottom:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  
  
  },

  dogPics:{
    height: 150,
    width: 150,
  },
  // dogPicsBig:{
  //   height: 800,
  //   width: 800,
  // }
})

export default FeedbackView