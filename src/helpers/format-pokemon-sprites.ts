import { PokemonSprites, PokemonMainSprites } from "@/types/pokemon";

export default function formatPokemonSprites(
  sprites: PokemonSprites
): PokemonMainSprites {
  return {
    default: sprites.front_default,
    shiny: sprites.front_shiny,
    female: sprites.front_female,
    shinyFemale: sprites.front_shiny_female,
    generations: {
      genI: {
        redBlue:
          sprites.versions?.["generation-i"]?.["red-blue"]?.front_default ||
          null,
        yellow:
          sprites.versions?.["generation-i"]?.yellow?.front_default || null,
      },
      genII: {
        crystal:
          sprites.versions?.["generation-ii"]?.crystal?.front_default || null,
        gold: sprites.versions?.["generation-ii"]?.gold?.front_default || null,
        silver:
          sprites.versions?.["generation-ii"]?.silver?.front_default || null,
      },
      genIII: {
        emerald:
          sprites.versions?.["generation-iii"]?.emerald?.front_default || null,
        rubySapphire:
          sprites.versions?.["generation-iii"]?.["ruby-sapphire"]
            ?.front_default || null,
        fireRedLeafGreen:
          sprites.versions?.["generation-iii"]?.["firered-leafgreen"]
            ?.front_default || null,
      },
      genIV: {
        diamondPearl:
          sprites.versions?.["generation-iv"]?.["diamond-pearl"]
            ?.front_default || null,
        platinum:
          sprites.versions?.["generation-iv"]?.platinum?.front_default || null,
        heartGoldSoulSilver:
          sprites.versions?.["generation-iv"]?.["heartgold-soulsilver"]
            ?.front_default || null,
      },
      genV: {
        blackWhite:
          sprites.versions?.["generation-v"]?.["black-white"]?.front_default ||
          null,
        animated:
          sprites.versions?.["generation-v"]?.["black-white"]?.animated
            ?.front_default || null,
      },
      genVI: {
        xY: sprites.versions?.["generation-vi"]?.["x-y"]?.front_default || null,
        omegaRubyAlphaSapphire:
          sprites.versions?.["generation-vi"]?.["omegaruby-alphasapphire"]
            ?.front_default || null,
      },
      genVII: {
        sunMoon:
          sprites.versions?.["generation-vii"]?.["ultra-sun-ultra-moon"]
            ?.front_default || null,
        ultraSunUltraMoon:
          sprites.versions?.["generation-vii"]?.["ultra-sun-ultra-moon"]
            ?.front_default || null,
        icons:
          sprites.versions?.["generation-vii"]?.icons?.front_default || null,
      },
      genVIII: {
        icons:
          sprites.versions?.["generation-viii"]?.icons?.front_default || null,
      },
    },
    animated:
      sprites.versions?.["generation-v"]?.["black-white"]?.animated
        ?.front_default || null,
    dreamWorld: sprites.other?.dream_world?.front_default || null,
    officialArtwork: {
      default: sprites.other?.["official-artwork"]?.front_default || null,
      shiny: sprites.other?.["official-artwork"]?.front_shiny || null,
    },
  };
}
