import { BASE_API_URL } from "../constants/constants"


export async function getPokemonsApi(endpointUrl) {
    try {
      const url = `${BASE_API_URL}/pokemon?limit=20&offset=0`;
      const response = await fetch(endpointUrl || url);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
}

export async function getPokemonDetailsByUrlApi(url) {
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }
  