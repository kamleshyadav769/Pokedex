


import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonList() {
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isLoading: true,
        pokedexUrl: 'https://pokeapi.co/api/v2/pokemon',
        nextUrl: '',
        prevUrl: '',
    });
/*{WHY WE COMMENT THIS FUNCTION?
BECAUSE TO REMOVE THE ESLINT WARNING}*/
/*{FORMATE TO USE EFFECT HOOK SUCH THAT ESLINT WARNING IS NOT COME
        USEEFFECT(()={
        DEFINIG FUNCTION LOGIC THAT WE WANT TO EXECUTE AND
        AFTER DEFINING THE FUNCTION CALL IT INSIDE THE CURRENT USEEFFECT HOOK
        },[DEPENDENCIES] )} If any value inside the dependency array changes, React runs the effect again.   */

   /* async function downloadPokemons() {

            setPokemonListState((state) => ({ ...state, isLoading: true}));
            const response = await axios.get(pokemonListState.pokedexUrl); // this downloads list of 20 pokemons

            const pokemonResults = response.data.results;  // we get the array of pokemons from result

            setPokemonListState((state) => ({
                ...state, 
                nextUrl: response.data.next, 
                prevUrl: response.data.previous
            }));
            const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));

            // passing that promise array to axios.all
            const pokemonData = await axios.all(pokemonResultPromise); // array of 20 pokemon detailed data

            // now iterate on the data of each pokemon, and extract id, name, image, types

            const pokeListResult = pokemonData.map((pokeData) => {
                const pokemon = pokeData.data;
                return {
                    id: pokemon.id,
                    name: pokemon.name, 
                    image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny, 
                    types: pokemon.types
                }
            });
            setPokemonListState((state) => ({
                ...state,
                pokemonList: pokeListResult, 
                isLoading: false
            }));
    }
            */
   
    useEffect(() => {
      //  async function downloadPokemons() {
        const downloadPokemons = async () => {
            setPokemonListState((state) => ({ ...state, isLoading: true }));
            const response = await axios.get(pokemonListState.pokedexUrl); // this downloads list of 20 pokemons

            const pokemonResults = response.data.results;  // we get the array of pokemons from result

            setPokemonListState((state) => ({
                ...state,
                nextUrl: response.data.next,
                prevUrl: response.data.previous
            }));
            const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));

            // passing that promise array to axios.all
            const pokemonData = await axios.all(pokemonResultPromise); // array of 20 pokemon detailed data

            // now iterate on the data of each pokemon, and extract id, name, image, types

            const pokeListResult = pokemonData.map((pokeData) => {
                const pokemon = pokeData.data;
                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
                    types: pokemon.types
                }
            });
            setPokemonListState((state) => ({
                ...state,
                pokemonList: pokeListResult,
                isLoading: false
            }));
        }
        downloadPokemons();
    }, [pokemonListState.pokedexUrl]);// NOTE: If any value inside the dependency array changes, React runs the effect again.

    return [pokemonListState, setPokemonListState];
}

export default usePokemonList;