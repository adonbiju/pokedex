import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DetailHeader from '../components/DetailHeader'
import {getPokemonDetailsApi}  from '../API/API'

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
   <SafeAreaView>
      <DetailHeader name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name} />
    </SafeAreaView>
  )
}

export default Details