import { View ,Platform ,StyleSheet,Text,TouchableWithoutFeedback,Image ,SafeAreaView} from "react-native";
import React from 'react'
import getColorByPokemonType from "../constants/constants";
import { BookmarkBackButton } from "../components/Button";
import assets from '../constants/assets'

const Bookmarks = (props) => {
  const { navigation, route: { params } } = props;
 // console.log(params.bookmarked[0].name)
  const pokemon=params.bookmarked
  //console.log(pokemon)
  const pokemonColor = getColorByPokemonType(pokemon.type);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };
  return (
    <SafeAreaView  >
    <View style={{marginTop:20}}>
    <View style={{paddingBottom:15,paddingTop:10}}>
    <BookmarkBackButton 
       style={{alignSelf: 'flex-start',}}
        imgUrl={assets.leftarrow}
        handlePress={() => navigation.goBack()}        
      />
    <Text  style={styles.title}>My Bookmarks</Text>
    </View>
    <View style={styles.card}>
      <View style={styles.spacing}>
        <View style={bgStyles}>
          <Text style={styles.number}>
            #{`${pokemon.order}`.padStart(3, 0)}
          </Text>
          <Text style={styles.name}>{pokemon.name}</Text>

          <View style={styles.shadow} />
          <Image source={{ uri: pokemon.image }} style={styles.image} />
        </View>
      </View>
    </View>
  </View>
  </SafeAreaView  >
  )
}

export default Bookmarks




const styles = StyleSheet.create({

title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginRight:0,
    color: '#000000',
    alignSelf: 'flex-end'
},
  card: {
    width: "100%",
    height: 100,
    
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },

  shadow: {
    height: 120,
    width: 120,
    backgroundColor: "#fff",
    opacity: 0.2,
    position: "absolute",
    borderRadius: 60,
    bottom: -25,
    right: -25,
  },
});