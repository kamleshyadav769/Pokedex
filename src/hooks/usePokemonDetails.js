import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonDetails(id, name) {
    const [pokemon, setPokemon] = useState({});
     const [isLoading,setIsLoading]= useState(true);//detail fetch krte time loading message show ho uske liye step1
    const navigate = useNavigate();
  
   
    useEffect(() => {
        if (name === "undefined" || name === "undefined") return;
        async function downloadPokemon() {
            
            try {
                let response;
                setIsLoading(true);//detail fetch krte time loading message show ho uske liye step2
                if (name) {
                    response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                } else {
                    response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                }
                const pokemonOfSameTypes = await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name : ''}`);
                setPokemon({
                    name: response.data.name,
                    image: response.data.sprites.other.dream_world.front_default,
                    weight: response.data.weight,
                    height: response.data.height,
                    types: response.data.types.map((t) => t.type.name),
                    similarPokemons: pokemonOfSameTypes.data.pokemon
                });
                setIsLoading(false);//detail fetch krte time loading message show ho uske liye step3

            } catch (error) {
                navigate(`/?error=notfound&name=${name}`);
                console.log('something went', error)
            }

        } 
        downloadPokemon();
    },[id,name ,navigate]);

    return [pokemon,isLoading];//detail fetch krte time loading message show ho uske liye step4 (iske pehle tha return[pokemon];)
}

export default usePokemonDetails;