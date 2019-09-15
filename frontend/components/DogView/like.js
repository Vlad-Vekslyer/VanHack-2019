import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import Constants from 'expo-constants';
import LikeImage from './assets/like.png';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handlePressIn = this.handlePressIn.bind(this);
    this.handlePressOut = this.handlePressOut.bind(this);
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(1);
  }
  handlePressIn() {
    Animated.spring(this.animatedValue, {
      toValue: .5,
    }).start();
  }
  handlePressOut() {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 1,
      tension: 100
    }).start()
    setTimeout(this.props.onPress, 200)
  }
  render() {
    const animatedStyle = {
      transform: [{ scale: this.animatedValue }],
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPressIn={this.handlePressIn}
          onPressOut={this.handlePressOut}
        >
          <Animated.Image
            style={({ flex: 1, resizeMode: 'contain' }, animatedStyle)}
            source={LikeImage}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});
