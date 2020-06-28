import React from 'react'
import {Image, Text, View, StyleSheet} from 'react-native'

const HomeHeaderTitle = () => {
  return (
    <View style={styles.homeHeader}>
      <Image style={styles.homeHeaderImage} source={require('../assets/heart_logo.png')}/>
      <Text style={styles.homeHeaderText}>GameZone</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  homeHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  homeHeaderImage: {
    height: 24,
    width: 24,
    marginRight: 8
  },
  homeHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '500'
  }
})

export default HomeHeaderTitle
