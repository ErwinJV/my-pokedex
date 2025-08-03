import { GenerationResponse, NamedAPIResource, Pokemon } from "@/types/pokemon";
import { POKE_API_BASE_URI } from "@/utils/pokemons";

export default async function getPokemonByGeneration(
  generationId: number
): Promise<NamedAPIResource[]> {
  try {
    // 1. Obtener datos de la generación
    const genResponse = await fetch(
      `${POKE_API_BASE_URI}/generation/${generationId}/`,
      {
        next: {
          revalidate: 3600 * 24 * 7,
        },
      }
    );
    if (!genResponse.ok) {
      throw new Error(`Error ${genResponse.status}: Generación no encontrada`);
    }

    const genData: GenerationResponse = await genResponse.json();

    //   return await Promise.all(
    //      genData.pokemon_species.map(async (pokemon) => {
    //         const detailsResponse = await fetch(pokemon.url);
    //         const details: Pokemon = await detailsResponse.json();

    //         return {
    //           name: details.name, // Nombre exacto para consultas API
    //           url: pokemon.url,
    //         };
    //       })
    //     );

    return Promise.all(
      genData.pokemon_species.map(async (species) => {
        return {
          name: species.name,
          url: species.url,
        };
      })
    );
  } catch (error) {
    console.error(`Error obteniendo generación ${generationId}:`, error);
    throw error;
  }
}
