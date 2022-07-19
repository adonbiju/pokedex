import { useState ,useEffect} from "react";
import { View,SafeAreaView,StyleSheet,Text} from "react-native";
import PokemonList from "../components/PokemonList"; 
 import { getPokemonDetailsByUrlApi,getPokemonsApi } from "../API/API";
import HomeSearch from "../components/HomeSearch";
import FocusedStatusBar from "../components/FocusedStatusBar";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RectButton } from "../components/Button";
import { useNavigation } from "@react-navigation/native";


const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [nextUrl, setnextUrl] = useState(null)
    const [bookmarked,setbookmarked]=useState([])
    const navigation = useNavigation();

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
          //console.log("filterdata====?")
          setPokemons(pokemons);
        } else {
          setPokemons(filteredData);
        }
      }
//--------------------------------------------      
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key')
    //console.log(value)
    if(value !== null) {
      // value previously stored
      //console.log(value)
      //console.log("----------------------")
      setbookmarked(JSON.parse(value) )
      
    }
  } catch(e) {
    // error reading value
  }
}
getData()
//-----------------------------
  return (
    <SafeAreaView  >
      <FocusedStatusBar backgroundColor={"#001F2D"} />
      <View  style={{
        width: "40%",
        position: "absolute",
        bottom: 100,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'flex-end',
        zIndex: 1,
        
      }}>
        <RectButton  handlePress={() => navigation.navigate("Bookmarks", { bookmarked})} />
        
      </View>

 

      <View>
          <HomeSearch onSearch={handleSearch} />
          {/* <RectButton  handlePress={() => navigation.navigate("Bookmarks", { bookmarked})} /> */}
          <PokemonList  pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl}/>
      </View> 
    </SafeAreaView>
  )
}

export default Home
