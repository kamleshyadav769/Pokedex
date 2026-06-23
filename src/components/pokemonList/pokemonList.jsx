import './pokemonList.css'
import Pokemon from "../pokemon/pokemon";
import usePokemonList from "../../hooks/usePokemonList";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function PokemonList() {
    const [ pokemonListState, setPokemonListState] = usePokemonList();

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const error = searchParams.get("error");
    const name = searchParams.get("name");

    // 👇 CLEAN URL LOGIC HERE
    useEffect((error) => {
        if (error) {
            const timer = setTimeout(() => {
                navigate("/", { replace: true });
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [error,navigate]);

 
    return (<> {error === "notfound" && (<div className='error-container'>
          
                <p className="error-message">
            Pokémon "{name}" not found. Check spelling.
                </p>

        <Link to="/" className='backToHome'><span>&larr;</span>back to home</Link>   
    </div>
            )}
       {!error&& (<div className="pokemon-list-wrapper">
            <div className="pokemon-wrapper">
                {(pokemonListState.isLoading) ? 'Loading....' : 
                    pokemonListState.pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />)
                }
            </div>
            <div className="controls" style={{ "--theme-color": "#ffcb05" }}>
                <button className="prev-button"  disabled={pokemonListState.prevUrl == null} onClick={() => {
                    const urlToSet = pokemonListState.prevUrl;
                    setPokemonListState({ ...pokemonListState, pokedexUrl: urlToSet})
                }}><h3>&lt; Prev</h3></button>
                <button className="next-button" disabled={pokemonListState.nextUrl == null} onClick={() => {
                    console.log(pokemonListState)
                    const urlToSet = pokemonListState.nextUrl;
                    setPokemonListState({ ...pokemonListState, pokedexUrl: urlToSet})
                }}><h3>Next &gt;</h3></button>
            </div>
        </div>)
}
    </>
    )
}

export default PokemonList;