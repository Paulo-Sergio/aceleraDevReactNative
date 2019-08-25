import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

import Header from './src/components/Header'

export default class App extends Component {

  render() {
    return (
      <View>
        <Header title="Header" />
        <View style={styles.container}>
          <Image source={require('./src/assets/images/android-icon.png')} style={styles.image} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center'
  },
  image: {
    resizeMode: "center",
    width: 150,
    height: 150
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15
  }
})