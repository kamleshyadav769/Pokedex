
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import './pokemonDetails.css';
import usePokemonDetails from "../../hooks/usePokemonDetails";
function PokemonDetails() {//{ pokemonName }
    const { value } = useParams();



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
            {(isLoading) ?
                <div className="loading-message">{'loading....'}</div> :
                <div className="pokemon-details-wrapper">

                    <div className="pokemon-card">
                        <img className="pokemon-details-image" src={pokemon.image} />
                        <div className="pokemon-details-name"><span>{pokemon.name}</span></div>
                        <div className="stats-container">
                            <h3>Height: <strong>{pokemon.height}</strong></h3>
                            <h3>Weight: <strong>{pokemon.weight}</strong></h3>
                        </div>
                        <div className="pokemon-details-types">
                            {pokemon.types && pokemon.types.map((t) => <div key={t} className={`type-badge type-${t.toLowerCase()}`}> {t} </div>)}
                        </div>

                        {
                            pokemon.types && pokemon.similarPokemons &&
                            <div className="similar-section" >

                                <h1> {/* More {pokemon.types[0]} Type Pokémon */} More {pokemon.name} Related Pokémons </h1>

                                {/* <ul className='similar-pokemons'>
                        {pokemon.similarPokemons.map((p) => <li key={p.pokemon.url}>{p.pokemon.name}</li>)}

                    </ul> */}

                                <div className="similar-grid">
                                    {/* Interactive: Clicking these now reloads the page with the new Pokemon */}
                                    {pokemon.similarPokemons.map((p) => (
                                        <Link
                                            key={p.pokemon.url}
                                            to={`/pokemon/${p.pokemon.name}`}
                                            className="similar-item-link"
                                        >
                                            {p.pokemon.name}
                                        </Link>
                                    ))}
                                </div>


                            </div>
                        }
                    </div>
                    <Link to="/" className='backToHome'><span>&larr;</span>back to home</Link>
                </div>
            }
        </>

    );
}

export default PokemonDetails;
