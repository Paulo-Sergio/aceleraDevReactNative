import React from 'react'
import { View, StatusBar } from 'react-native'

import Header from '../../components/Header'

const Main = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="blue" />
      <Header />
    </View>
  )
}

export default Main