import React, { useState, useEffect} from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
// import ImageZoom from 'react-medium-image-zoom'
import female from './female.png'

const ImageZoom = ({image}) => <Image source={{uri: image.src}} style={image.style} />

const MapView = ({ onBack }) => {
  const photo1 = 'https://placedog.net/750/1334?id=1'
  const photo2 = 'https://placedog.net/750/1334?id=2'
  const photo3 = 'https://placedog.net/750/1334?id=3'
  const photo4 = 'https://placedog.net/750/1334?id=4'
  const photo5 = 'https://placedog.net/750/1334?id=5'
  const photo6 = 'https://placedog.net/750/1334?id=6'

  const randomDogPhotots = [photo1, photo2, photo3, photo4, photo5, photo6]

  const dog = {
    name: 'Tiger',
    age: '2 Months',
    likes: 3,
    breed: 'Border Collie',
    description: 'The American Staffordshire Terrier is a muscular breed that is known for being strong for its size, yet loving and affectionate with their human family. American Staffordshire.',
    photos: ['https://placedog.net/750/1334?id=1', 'https://placedog.net/750/1334?id=2', 'https://placedog.net/750/1334?id=3', 'https://placedog.net/750/1334?id=4', 'https://placedog.net/750/1334?id=5', 'https://placedog.net/750/1334?id=6' ],
    dates: [],
    profilePic: 'https://httpstatusdogs.com/img/100.jpg',
    gender: 'female',
  }

  const dogPhotos = dog.photos
  const gender = (dog.gender === 'female') ? female : null
  
  const [names, setNames] = useState({})


    async function fetchData(){
      const res = await fetch('http://localhost:5000/api/names',
      {mode: 'cors'})
      console.log('RES', res)
      res.json()
        .then(res => setNames(res))
        .cach(err => console.log(err))
    }
  
    
  useEffect(() => {
    fetchData()
  }, [])

  console.log('NAMES HERE', names)
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={onBack}>
          <Image style={styles.back} source={require("./back.png")}>

          </Image>
        </TouchableOpacity>
      </View>
      <View style={styles.top}>
      <ImageZoom
              image={{
                src: 'https://httpstatusdogs.com/img/100.jpg',
                style: {width: 100, 
                  height: 100, 
                  borderRadius: 100/ 2,},
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
            <Image style={styles.gender} source={gender}></Image>
            <Text style={{fontWeight: 'bold', fontSize: 25}}> {dog.age}</Text>
          </View>
          <View style={styles.middleHeaderBottom}>
            <Text style={{fontSize: 18}}>{dog.breed}</Text>
          </View>
        </View>
        <View style={styles.middleDescription}>
          <Text style={{fontSize: 15, lineHeight: 20}}>{dog.description}</Text> 
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

  },
  topRightUpper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  topRightLower:{

  },
/////


  middle:{
    padding: 8,
    margin: 12,
  },
  middleHeader: {
    marginBottom: 30,
  },
  middleHeaderTop:{
    flexDirection: 'row',
    fontWeight: 'bold',
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

export default MapView