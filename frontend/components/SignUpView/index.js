import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, Alert } from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
// import Home from './Home';

export default class Auth extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./assets/combined-shape.png')}
          style={{width: 375, height: 250, top: 0, position: 'absolute'}}
        />
        <ImageBackground
          source={require('./assets/logo.png')}
          style={{width: 165, height: 129.14, top: 50, left: 118, position: 'absolute'}}
        />
        <View style={{marginTop: 150}}>
          <Input
            placeholder='User Name'
            leftIcon={<Icon name='user' size={20} color='black' style={{marginRight: 10}}/>}
            inputStyle={{backgroundColor: '#fff', fontFamily: 'Avenir-Medium'}}
            containerStyle={styles.input}
            inputContainerStyle={{borderBottomWidth: 0}}
          />
          <Input
            placeholder='Password'
            leftIcon={<Icon name='lock' size={20} color='black' style={{marginRight: 10}}/>}
            inputStyle={{backgroundColor: '#fff', fontFamily: 'Avenir-Medium'}}
            containerStyle={styles.input}
            inputContainerStyle={{borderBottomWidth: 0}}
            secureTextEntry={true}
          />
          <Button
            title="LOGIN"
            buttonStyle={styles.button}
            onPress={() => Alert.alert('Simple Button pressed')}
          />
          <View style={{fontFamily: 'Avenir-Medium', fontSize: 22, marginTop: 40, flexDirection:'row'}}>
            <Text style={{marginRight: 25, fontWeight: '600'}}>{"Don't you have an account?"}</Text>
            <Text style={{color:'#00cc00', fontWeight: '600'}}>Sign up now</Text>
          </View>
          <View style={styles.divider}></View>
          <Text style={styles.footer}>OR</Text>
          <View style={{flexDirection: 'row', marginTop: 30}}>
            <Image source={require('./assets/google.png')} style={{width: 40, height: 40, alignSelf: 'stretch', marginRight: 72.5}}/>
            <Image source={require('./assets/facebook.png')} style={{width: 40, height: 40, alignSelf: 'center', marginRight: 82.5}}/>
            <Image source={require('./assets/instagram.png')} style={{width: 40, height: 40, alignSelf: 'stretch'}}/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 8,
    alignItems: 'center',
    fontFamily: 'Avenir-Medium',
  },
  input: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    borderRadius: 50,
    padding: 3.5,
    marginTop: 30,
    width: 280
  },
  button: {
    backgroundColor: '#00cc00',
    borderRadius: 50,
    fontFamily: 'Avenir-Medium',
    padding: 10.5,
    marginTop: 30,
    width: 280
  },
  divider: {
    fontFamily: 'Avenir-Medium',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: 270,
    marginTop: 40
  },
  footer: {
    paddingHorizontal: 30,
    position: 'absolute',
    bottom: 60,
    left: 90,
    backgroundColor: '#fff',
    fontFamily: 'Avenir-Medium',
    color: '#bbb'
  }
});
