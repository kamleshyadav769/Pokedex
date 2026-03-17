

import { Routes, Route } from "react-router-dom";
import Pokedex from "../components/pokedex/pokedex";
import PokemonDetails from "../components/pokemonDetails/pokemonDetails";

function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Pokedex />} />
            {/*<Route path="/pokemon/:id" element={<PokemonDetails />} />
            <Route path="/pokemon/:name" element={<PokemonDetails />} />
            THIS IS NOT WORK BECAUSE WE ARE USING SAME ROUTE FOR FETCHING POKEMONDETAILS FOR FETCHING DATA FROM CARD AS WELL WELL AS FROM SEARCH
            */}
            {/* <Route path="/pokemon/id/:id" element={<PokemonDetails />} />
            <Route path="/pokemon/name/:name" element={<PokemonDetails />} /> */}
            <Route path="/pokemon/:value" element={<PokemonDetails />} />

        </Routes>
    );
}

export default CustomRoutes;
