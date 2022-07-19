import { View, Text,Image ,TextInput} from 'react-native'
import React from 'react'
import assets from '../constants/assets'

const HomeSearch = ({ onSearch }) => {
  return (
    <View style={{padding:10}}>
      
      <View style={{ marginTop:20}}>
        <View
          style={{
            width: "100%",
            borderRadius: 14,
            backgroundColor: "#74858C",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 15,
            paddingVertical: 14,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: 8 }}
          />
          <TextInput
            placeholder="Search Pokemons"
            style={{ flex: 1 }}
            onChangeText={onSearch}
           
          />
        </View>
      </View>
    </View>
  )
}

export default HomeSearch