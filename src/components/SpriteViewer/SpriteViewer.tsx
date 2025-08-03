"use client";
import { getPokemonSprites } from "@/helpers/get-pokemon-sprites";
import { PokemonMainSprites } from "@/types/pokemon";
import Typography from "@mui/material/Typography";

import { useEffect, useState } from "react";
import SpriteCard from "../SpriteCard";
import PokemonGenerationSprites from "../PokemonGenerationSprites";

export default function SpriteViewer({
  pokemonId,
}: {
  pokemonId: number | string;
}) {
  const [sprites, setSprites] = useState<PokemonMainSprites | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSprites = async () => {
      try {
        setLoading(true);
        const spriteData = await getPokemonSprites(pokemonId);
        setSprites(spriteData);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Error al cargar sprites"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSprites();
  }, [pokemonId]);

  if (loading) return <div>Cargando sprites...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!sprites) return <div>No se encontraron sprites</div>;

  return (
    <section className="mt-5 lg:mt-0">
      <Typography className="text-center  mb-2" component="h3" variant="h5">
        Default Sprites
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 p-4">
        <SpriteCard
          name="Default"
          url={sprites.default}
          fallback={sprites.officialArtwork.default}
        />
        <SpriteCard
          name="Shiny"
          url={sprites.shiny}
          fallback={sprites.officialArtwork.shiny}
        />
        <SpriteCard name="Official Art" url={sprites.officialArtwork.default} />
        <SpriteCard name="Shiny Art" url={sprites.officialArtwork.shiny} />
        <SpriteCard name="Dream World" url={sprites.dreamWorld} />
        <SpriteCard name="Animado" url={sprites.animated} />
        {sprites.female && <SpriteCard name="Femenino" url={sprites.female} />}
        {sprites.shinyFemale && (
          <SpriteCard name="Shiny Femenino" url={sprites.shinyFemale} />
        )}
      </div>
      <PokemonGenerationSprites sprites={sprites.generations} />
    </section>
  );
}
