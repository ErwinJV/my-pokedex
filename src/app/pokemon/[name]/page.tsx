import PokemonCard from "@/components/PokemonCard";
import PokemonGenerationSprites from "@/components/PokemonGenerationSprites";
import SpriteViewer from "@/components/SpriteViewer";
import capitalizeText from "@/helpers/capitalize-text";
import formatPokemonData from "@/helpers/format-pokemon-data";
import { getPokemonByName } from "@/helpers/get-pokemon-by-name";
import { FIRST_151_POKEMONS } from "@/utils/pokemons";
import { Metadata } from "next";

export async function generateStaticParams() {
  return FIRST_151_POKEMONS.map((name) => ({
    name: name.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { name } = await params;
    const { id, ...pokemon } = await getPokemonByName(name);

    return {
      title: `#${id} - ${capitalizeText(pokemon.name)}`,
      description: `Pokemon ${name} page`,
    };
  } catch (error) {
    return {
      title: "Page of pokemon",
      description: JSON.stringify(error),
    };
  }
}

interface Props {
  params: Promise<{ name: string }>;
  // searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function PokemonPage({ params }: Props) {
  const { name } = await params;
  const pokemonResponse = await getPokemonByName(name);
  const pokemon = await formatPokemonData(pokemonResponse);
  return (
    <main className="flex flex-col items-center lg:flex-row lg:items-start justify-center  p-4 ">
      <PokemonCard pokemon={pokemon} />
      <div className="flex flex-col">
        <SpriteViewer pokemonId={pokemon.id} />
      </div>
    </main>
  );
}
