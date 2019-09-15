import * as React from 'react';
import { Text, View } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import MapView, {Marker} from 'react-native-maps';
import styles from './styles';

export default class Map extends React.Component {
  // TODO: Get current location via async call
  state = {
    selectedLocation: null,
    locationResult: null,
    region: {
      latitude: 49.2835,
      longitude: -123.1153,
      // latitudeDelta: 0.0922,
      // longitudeDelta: 0.0421,
      latitudeDelta: 0.2882,
      longitudeDelta: 0.3191,
    },
    markers: [
      {
        id: 0,
        title: 'BC SPCA Vancouver Branch',
        description: 'Vancouver, BC',
        coordinates: {
          latitude: 49.264308,
          longitude: -123.079845,
        },
      },
      {
        id: 1,
        title: 'SPCA Animal Shelter',
        description: 'Surrey, BC',
        coordinates: {
          latitude: 49.326959,
          longitude: -123.144973,
        },
      },
      {
        id: 2,
        title: 'BC SPCA Burnaby Branch',
        description: 'Burnaby, BC',
        coordinates: {
          latitude: 49.254992,
          longitude: -122.974659,
        },
      },
      {
        id: 3,
        title: 'BC SPCA Richmond Education & Adoption Centre',
        description: 'Richmond, BC',
        coordinates: {
          latitude: 49.133125,
          longitude: -123.142771,
        },
      },
    ],
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _handleEvent(markerId) {
    if (this.state.selectedLocation === markerId) {
      const location  = this.state.markers.find(el => el.id == markerId)
      this.props.onChooseLocation(location)
    } else {
      this.setState({ selectedLocation: markerId })
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: this.state.region,
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({
      locationResult: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        // latitudeDelta: 0.0922,
        // longitudeDelta: 0.0421,
        latitudeDelta: 0.2882,
        longitudeDelta: 0.3191,
      },
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}> Select Location </Text>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          initialRegion={this.state.locationResult}
          region={this.state.region}>
          {this.state.markers.map(marker => (
            <Marker
              key={marker.id}
              coordinate={marker.coordinates}
              title={marker.title}
              description={marker.description}
              image={require('../../assets/heart.png')}
              onPress={() => this._handleEvent(marker.id)}
            />
          ))}
        </MapView>
      </View>
    );
  }
}