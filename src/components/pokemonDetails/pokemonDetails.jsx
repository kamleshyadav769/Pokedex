import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import './pokemonDetails.css';
import usePokemonDetails from "../../hooks/usePokemonDetails";
function PokemonDetails() {//{ pokemonName }
    const {value} = useParams();

    

    const [pokemon, isLoading] = usePokemonDetails(value, value);
    //const [pokemon,isLoading] = usePokemonDetails(id, name);//detail fetch krte time loading message show ho uske liye step5(we replace [pokemon]by [pokemon,isLoading])
    
    if (!value) {
        return <div className="loading-message">Loading...</div>;
    }
    
    return ( //detail fetch krte time loading message show ho uske liye step6  
        /*1 < > adding a parent
             2 {(isLoading)? if isloading is true show loading message otherwise show fetched details
            3  <div className="pokemon-details-wrappers">{'loading....'}</div>  :   
            <div className="pokemon-details-wrapper">....</div>}
            4 go to pokemonDetails.css file see proprty loading
       */
        <>
              {(isLoading)?
              <div className="loading-message">{'loading....'}</div>  :       
            <div className="pokemon-details-wrapper">
             <Link to="/" className='backToHome'><span>&larr;</span>back to home</Link>
            <img className="pokemon-details-image" src={pokemon.image} />
            <div className="pokemon-details-name"><span>{pokemon.name}</span></div>
            <div className="pokemon-details-name">Height: {pokemon.height}</div>
            <div className="pokemon-details-name">Weight: {pokemon.weight}</div>
            <div className="pokemon-details-types">
                {pokemon.types && pokemon.types.map((t) => <div key={t}> {t} </div>)}
            </div>

            {
                pokemon.types && pokemon.similarPokemons && 
                <div >
                    <h1>
                    more {pokemon.types[0]} type pokemons
                </h1>
                                <ul className='similar-pokemons'>
                        {pokemon.similarPokemons.map((p) => <li key={p.pokemon.url}>{p.pokemon.name}</li>)}

                    </ul>
                </div>
            }
            </div>
        }
        </>
        
    );
}

export default PokemonDetails;