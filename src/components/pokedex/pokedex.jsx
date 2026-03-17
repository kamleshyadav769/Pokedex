import { useState } from "react";
import PokemonList from "../pokemonList/pokemonList";
import Search from "../search/search";

// CSS import
import './pokedex.css';
import PokemonDetails from "../pokemonDetails/pokemonDetails";

function Pokedex() {

    const [searchTerm, setSearchterm] = useState('');
   

    return (
        <div className="pokedex-wrapper">
            {(!searchTerm)&&<Search updateSearchTerm={setSearchterm} />}

{/*{ (!searchTerm) ? <PokemonList /> : <PokemonDetails key={searchTerm} pokemonName={searchTerm} />} */}
            {(!searchTerm) && <PokemonList />}
        </div>
    )
}

export default Pokedex;