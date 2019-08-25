import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Header extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})