import getPokemonIdByUrl from "@/helpers/get-pokemon-id-by-url";
import { NamedAPIResource } from "@/types/pokemon";
import { POKEMON_SPRITE_OFFICIAL_ARTWORK_BASE_URI } from "@/utils/media";
import { Paper } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

interface PokemonListProps {
  pokemons: NamedAPIResource[];
}

export default function PokemonList({ pokemons }: PokemonListProps) {
  return (
    <List className="w-[80%] h-full overflow-y-auto p-3">
      {pokemons.map((pokemon) => (
        <PokemonListItem pokemon={pokemon} key={pokemon.name} />
      ))}
    </List>
  );
}

interface PokemonListItemProps {
  pokemon: NamedAPIResource;
}

const PokemonListItem = ({ pokemon }: PokemonListItemProps) => {
  const imageUrl = `${
    POKEMON_SPRITE_OFFICIAL_ARTWORK_BASE_URI + getPokemonIdByUrl(pokemon.url)
  }.png`;
  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <ListItem className="flex my-3" component={Paper} elevation={7}>
        <Image
          alt={pokemon.name}
          height={100}
          src={imageUrl}
          width={100}
          loading="lazy"
          className="w-[70px] sm:w-[100px]"
        />
        <Typography className="text-xl sm:text-3xl capitalize" component="span">
          {pokemon.name}
        </Typography>
      </ListItem>
    </Link>
  );
};
