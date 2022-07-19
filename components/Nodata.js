import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import assets from '../constants/assets'

const Nodata = () => {
  return (
    <View style={styles.notFound}>
    <Image
      style={styles.imgNotFound}
      source={assets.pokeball}
    />
    <Text style={styles.textNotFound}>You Don't have any Bookmarks!!!</Text>
  </View>
  )
}

export default Nodata

const styles = StyleSheet.create({
    notFound: {
      flex: 1,
      alignItems: 'center',
        justifyContent: 'center',
    },
    textNotFound: {
      fontSize: 22,
      color: '#bdbdbd',
      fontWeight: 'bold',
      marginVertical: 20
    },
    imgNotFound: {
      width: 150,
      height: 150,
      opacity: .2
    }
  })