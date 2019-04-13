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

export default class App extends Component {
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
