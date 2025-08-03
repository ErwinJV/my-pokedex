import { PokemonMainSprites, PokemonResponse } from "@/types/pokemon";
import formatPokemonSprites from "./format-pokemon-sprites";
import { POKE_API_BASE_URI } from "@/utils/pokemons";

export async function getPokemonSprites(
  identifier: string | number
): Promise<PokemonMainSprites> {
  try {
    const response = await fetch(
      `${POKE_API_BASE_URI}/pokemon/${identifier.toString().toLowerCase()}`
    );

    if (!response.ok) {
      throw new Error(
        `Error obteniendo Pokémon: ${response.status} ${response.statusText}`
      );
    }

    const data: PokemonResponse = await response.json();
    return formatPokemonSprites(data.sprites);
  } catch (error) {
    throw new Error(
      `Error en getPokemonSprites: ${
        error instanceof Error ? error.message : "Error desconocido"
      }`
    );
  }
}
