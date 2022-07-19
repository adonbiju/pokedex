import React from 'react'
import { TouchableOpacity, Text, Image } from "react-native";
export const CircleButton= ({ imgUrl, handlePress,handleBookMarkPress, ...props }) => {
    return (
      <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor:"#FFF",
        position: "absolute",
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
        ...props,
      }}
      onPress={handlePress}
      onPressOut={handleBookMarkPress}
      >
      <Image
          source={imgUrl}
          resizeMode="contain"
          style={{ width: 24, height: 24 }}
        />
  
    </TouchableOpacity>
    )
  }

  
  export const RectButton = ({handlePress, ...props }) => {
    return (
        <TouchableOpacity
      style={{
        backgroundColor: '#98D8D8',
        padding:20,
        borderRadius: 10
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          color:'#FFF',
          textAlign: "center",
        }}
      >
        Bookmarks
      </Text>
    </TouchableOpacity>
    )
  }
