import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Auth!</Text>
          <TextInput
            style={{
              height: 40,
              width: '100%',
              borderColor: 'gray',
              borderWidth: 1,
              paddingHorizontal: 10,
              margin: 10,
            }}
            onChangeText={() => {}}
            placeholder={'Admin Username'}
          />
          <TextInput
            style={{
              height: 40,
              width: '100%',
              borderColor: 'gray',
              borderWidth: 1,
              paddingHorizontal: 10,
              margin: 10,
            }}
            onChangeText={() => {}}
            placeholder={'Admin Password'}
          />
        <TouchableOpacity
           style={{
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
            width: '50%'
          }}
          onPress={() => this.props.navigation.navigate('Message')}
        >
          <Text>Login</Text>
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
