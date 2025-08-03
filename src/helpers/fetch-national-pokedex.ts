import { NamedAPIResource, PokemonListResponse } from "@/types/pokemon";
import { POKE_API_BASE_URI } from "@/utils/pokemons";

export default async function fetchNationalPokedex(): Promise<
  NamedAPIResource[]
> {
  try {
    const countResponse = await fetch(`${POKE_API_BASE_URI}/pokemon`, {
      next: {
        revalidate: 3600 * 24 * 7,
      },
    });
    const countData: PokemonListResponse = await countResponse.json();
    const totalPokemon = countData.count;

    const allPokemonResponse = await fetch(
      `${POKE_API_BASE_URI}/pokemon-species?limit=${totalPokemon}`,
      {
        next: {
          revalidate: 3600 * 24 * 7,
        },
      }
    );
    const allPokemonData: PokemonListResponse = await allPokemonResponse.json();
    // return await Promise.all(
    //   allPokemonData.results.map(async (pokemon) => {
    //     const detailsResponse = await fetch(pokemon.url);
    //     const details: Pokemon = await detailsResponse.json();

    //     return {
    //       name: details.name, // Nombre exacto para consultas API
    //       url: pokemon.url,
    //     };
    //   })
    // );

    return allPokemonData.results;
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
    throw new Error("Failed to retrieve Pokémon data");
  }
}
