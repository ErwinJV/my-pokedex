import { PokemonResponse, PokemonResponseFormatted } from "@/types/pokemon";
import calculateTypeEffects from "./calculate-type-effects";
import getEnglishDescription from "./get-english-description";

export default async function formatPokemonData(
  pokemon: PokemonResponse
): Promise<PokemonResponseFormatted> {
  const [typeEffects, description] = await Promise.all([
    calculateTypeEffects(pokemon.types),
    getEnglishDescription(pokemon.species.url),
  ]);

  return {
    id: pokemon.id,
    name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
    image:
      pokemon.sprites.other["official-artwork"].front_default ||
      pokemon.sprites.front_default,
    types: pokemon.types.map((t) => t.type.name),
    height: pokemon.height / 10,
    weight: pokemon.weight / 10,
    experience: pokemon.base_experience,
    abilities: pokemon.abilities.map((a) => ({
      name: a.ability.name.replace(/-/g, " "),
      is_hidden: a.is_hidden,
    })),
    stats: pokemon.stats.map((s) => ({
      name: s.stat.name
        .replace("special-", "sp. ")
        .replace(/-/g, " ")
        .toUpperCase(),
      base_stat: s.base_stat,
    })),
    weaknesses: typeEffects.weaknesses,
    resistances: typeEffects.resistances,
    description,
  };
}
