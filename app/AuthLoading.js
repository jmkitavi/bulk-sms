import React from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'


class AuthLoading extends React.Component {
  componentDidMount() {
    this.checkLoginStatus()
  }
  
  checkLoginStatus = () => {
    // ADD login check for this
    const loggedIn = false
    if (loggedIn) {
      return this.props.navigation.navigate('Message')
    }
    return this.props.navigation.navigate('Auth')
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default AuthLoading