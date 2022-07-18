import { useEffect, useState } from 'react'
import { SafeAreaView ,FlatList} from 'react-native-safe-area-context'
import DetailHeader from '../components/DetailHeader'
import {getPokemonDetailsApi}  from '../API/API'
import { TabNavigator } from '../navigation/TabNavigator'
import { View, StyleSheet,Text,ScrollView} from "react-native";

const Details = (props) => {
  const {
    navigation,
    route: { params },
  } = props;
 const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  },[params]);
  
  if (!pokemon) return null;

  return (
    <>
     <DetailHeader name={pokemon.name}
       order={pokemon.order}
       image={pokemon.sprites.other["official-artwork"].front_default}
       type={pokemon.types[0].type.name} />
     <View style={styles.tabsContainer}>
      <TabNavigator pokemon={pokemon}/>
     </View>
      
     </>
  )
}
export default Details


const styles = StyleSheet.create({
  tabsContainer: {
      width: '100%',
      flex: 1,
      paddingHorizontal: 0,
      paddingTop: 280
  }
})