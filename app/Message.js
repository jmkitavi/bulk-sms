import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native'
import axios from 'axios'


const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Accept': 'application/json; charset=utf-8',
    'apiKey': '7053f05983fef37d2c0fa62a5bd4205586404084b55694d52a4004f750600b1e',
  }
}

export default class App extends Component {
  sendMessage = () => {
    let numbers = ['254705542919', '254705542919']
    // const numbers = this.state.numbers.map((num) => num)

    const params = {
      username: 'katana',
      to: numbers,
      message: 'This is a test message.',
    }

    const postParams = Object.keys(params).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&')

    axios.post(
      'https://api.africastalking.com/version1/messaging',
      postParams,
      config,
    )
      .then((response) => console.log('axios response', response))
      .catch((error) => console.log('axios error', error))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Send Message!</Text>
        <TextInput
          style={{
            height: 100,
            width: '100%',
            borderColor: 'gray',
            borderWidth: 1,
            paddingHorizontal: 10,
            margin: 10,
          }}
          multiline
          numberOfLines={5}
          onChangeText={() => {}}
          placeholder={'Enter Message'}
        />
        <TouchableOpacity
           style={{
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
            width: '50%'
          }}
          onPress={() => {
            this.sendMessage()
            ToastAndroid.show('Message sent Successfully', ToastAndroid.SHORT)
          }}
        >
          <Text>Send Message</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 15,
  },
})
