import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import PokemonList from "@/components/PokemonList";
import getPokemonByGeneration from "@/helpers/get-pokemon-by-generation";
import { POKEMON_GENERATIONS } from "@/utils/pokemons";

interface Props {
  params: Promise<{ region: string }>;
  // searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  return Object.keys(POKEMON_GENERATIONS).map((region) => ({
    region,
  }));
}

export default async function RegionPage({ params }: Props) {
  const { region } = await params;
  const pokemons = await getPokemonByGeneration(POKEMON_GENERATIONS[region]);

  return (
    <Box
      component="main"
      className="w-full h-full flex flex-col justify-center items-center "
    >
      <Typography variant="h2">Region: {region}</Typography>
      <PokemonList pokemons={pokemons} />
    </Box>
  );
}
