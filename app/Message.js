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
    'apiKey': 'API KEY GOES HERE',
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numbers: [],
      message: '',
    }
  }

  componentDidMount = async () => {
    let numbers = ['254705542919', '254705542919']
    const spreadsheet = 'SPREAD SHEET URL GOES HERE'

    axios.get(spreadsheet, { headers: { 'Cache-Control': 'no-cache' } })
    .then((response) => {
      let numbers = []

      response.data.split('\n').map((num) => numbers.push(Number(num)))

      this.setState({
        numbers: numbers
      })
    })
    .catch((error) => console.log('error', error))
  }

  sendMessage = () => {
    let numbers = [254705542919, 254705542919]
    let message = this.state.message ? this.state.message : 'This is a test message.'

    const params = {
      username: 'katana',
      to: this.state.numbers,
      message,
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
          onChangeText={(text) => this.setState({ message: text })}
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
