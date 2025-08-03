import { Pokedex } from "@/types/pokemon";
import { POKE_API_BASE_URI } from "@/utils/pokemons";

export default async function getPokemonByRegion(
  regionId: number
): Promise<{ name: string; id: number }[]> {
  try {
    const pokedexResponse = await fetch(
      `${POKE_API_BASE_URI}/pokedex/${regionId}/`,
      {
        next: {
          revalidate: 3600 * 24 * 7,
        },
      }
    );

    if (!pokedexResponse.ok) {
      throw new Error(`Error al obtener la Pokédex: ${pokedexResponse.status}`);
    }

    const pokedexData: Pokedex = await pokedexResponse.json();

    // Paso 2: Mapear los resultados a un formato simplificado
    return pokedexData.pokemon_entries.map((entry) => ({
      name: entry.pokemon_species.name,
      id: parseInt(entry.pokemon_species.url.split("/").slice(-2, -1)[0]),
    }));
  } catch (error) {
    console.error("Error en getPokemonByRegion:", error);
    throw error;
  }
}
