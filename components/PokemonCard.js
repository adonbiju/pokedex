import { View ,Text, StyleSheet ,Image , TouchableWithoutFeedback } from "react-native"
import { useNavigation } from "@react-navigation/native";
import getColorByPokemonType from "../constants/constants";
const PokemonCard = (props) => {
  
  const { pokemon } = props;
  //console.log(pokemon.type)
  const navigation = useNavigation();
  const pokemonColor = getColorByPokemonType(pokemon.type);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };
  
  const goToPokemonDetails=()=>{
    //console.log(`Details---->${pokemon.name}`)
    navigation.navigate("Details",{id: pokemon.id })
  }

  return (
    <TouchableWithoutFeedback onPress={goToPokemonDetails}>
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
  </TouchableWithoutFeedback>
  )
}


const styles = StyleSheet.create({
    card: {
      flex: 1,
      height: 130,
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
export default PokemonCard