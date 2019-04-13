import React, { Component } from 'react'
import { StatusBar, View, KeyboardAvoidingView } from 'react-native'
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from 'react-navigation'

import AuthLoading from './AuthLoading'
import Auth from './Auth'
import Message from './Message'



const switchNavigator = createSwitchNavigator({
    AuthLoading,
    Auth,
    Message,
  })

const AppNavigator = createAppContainer(switchNavigator)

class App extends Component {
  render() {
    return (
      <KeyboardAvoidingView enabled style={{ flex: 1 }}>
        {/* <StatusBar
          backgroundColor='black'
          barStyle='light-content'
        />
         */}
        <AppNavigator />
      </KeyboardAvoidingView>
    )
  }
}

export default App