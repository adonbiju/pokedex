import { useState ,useEffect} from "react";
import { View,SafeAreaView, FlatList ,Text } from "react-native";
import PokemonList from "../components/PokemonList"; 
 import { getPokemonDetailsByUrlApi,getPokemonsApi } from "../API/API";
import HomeSearch from "../components/HomeSearch";
import FocusedStatusBar from "../components/FocusedStatusBar";

const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [nextUrl, setnextUrl] = useState(null)
    
    
    useEffect(() => {
        (async () => {
          await loadPokemons();
        })();
      }, []);
    
    const loadPokemons = async () => {
        try {
          const response = await getPokemonsApi(nextUrl);
          setnextUrl(response.next)
          const pokemonsArray = [];
          
          for await (const pokemon of response.results) {
            const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image: pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }
      
          setPokemons([...pokemons, ...pokemonsArray]);
        } catch (error) {
          console.error(error);
        }
      };
      const handleSearch = (value) => {
        if (value.length === 0) {
          setPokemons(pokemons);
        }
    
        const filteredData = pokemons.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        );
    
        if (filteredData.length === 0) {
          console.log("filterdata====?")
          setPokemons(pokemons);
        } else {
          setPokemons(filteredData);
        }
      }
  return (
    <SafeAreaView >
      <FocusedStatusBar backgroundColor={"#001F2D"} />
      <View  >
      <HomeSearch onSearch={handleSearch} />
       <PokemonList  pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl}/>
      </View>
    </SafeAreaView>
  )
}

export default Home