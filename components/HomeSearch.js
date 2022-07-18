import { View, Text,Image ,TextInput} from 'react-native'
import React from 'react'

const HomeSearch = ({ onSearch }) => {
  return (
    <View>
      
      <View style={{ marginTop:10 }}>
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