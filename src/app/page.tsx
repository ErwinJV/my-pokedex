import Box from "@mui/material/Box";

import fetchNationalPokedex from "@/helpers/fetch-national-pokedex";
import PokemonList from "@/components/PokemonList";

export default async function Home() {
  const pokemons = await fetchNationalPokedex();
  return (
    <Box
      component="main"
      className="w-full h-full flex flex-col justify-center items-center "
    >
      <PokemonList pokemons={pokemons} />
    </Box>
  );
}
