import { PokemonResponse } from "@/types/pokemon";
import { POKE_API_BASE_URI } from "@/utils/pokemons";

export async function getPokemonByName(name: string): Promise<PokemonResponse> {
  try {
    const normalizedName = name.toLowerCase();

    const response = await fetch(
      `${POKE_API_BASE_URI}/pokemon/${normalizedName}`,
      {
        next: {
          revalidate: 3600 * 24 * 7,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Pokémon no encontrado (${response.status})`);
    }

    const data: PokemonResponse = await response.json();
    return data;
  } catch (error) {
    throw new Error(
      `Error obteniendo Pokémon: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}
