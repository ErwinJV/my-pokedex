import { POKEMON_GENERATIONS } from "@/utils/pokemons";

import Box from "@mui/material/Box";
import Link from "next/link";
import { Chip } from "@mui/material";

import { headers } from "next/headers";

export default async function Links() {
  const regions = Object.keys(POKEMON_GENERATIONS);

  const headersList = await headers();
  const regionPath = headersList.get("x-invoke-path") || "/";
  console.log({ regionPath });
  return (
    <Box className="p-3 flex justify-evenly w-[80%] flex-wrap ">
      <Link className="my-2" href="/">
        <Chip
          className={`capitalize font-bold ${
            regionPath === "" ? "bg-black text-white" : ""
          }`}
          label="Pokedex National"
        />
      </Link>
      {regions.map((region) => (
        <Link className="my-2" href={`/region/${region}`} key={region}>
          <Chip
            className={`capitalize font-bold ${
              regionPath === region ? "bg-black text-white" : ""
            }`}
            label={region}
          />
        </Link>
      ))}
    </Box>
  );
}
