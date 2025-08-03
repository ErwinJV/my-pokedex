import { GenerationSprites } from "@/types/pokemon";
import SpriteCard from "../SpriteCard";
import { Typography } from "@mui/material";

export default function PokemonGenerationSprites({
  sprites,
}: {
  sprites: GenerationSprites;
}) {
  return (
    <>
      <Typography className="text-center my-2" component="h3" variant="h5">
        Game Sprites
      </Typography>
      <div className="grid grid-cols-1   md:grid-cols-3  gap-4 p-4">
        {/* Generación I */}
        {sprites.genI.redBlue && (
          <SpriteCard name="Red/Blue" url={sprites.genI.redBlue} />
        )}
        {sprites.genI.yellow && (
          <SpriteCard name="Yellow" url={sprites.genI.yellow} />
        )}

        {/* Generación II */}
        {sprites.genII.crystal && (
          <SpriteCard name="Crystal" url={sprites.genII.crystal} />
        )}
        {sprites.genII.gold && (
          <SpriteCard name="Gold" url={sprites.genII.gold} />
        )}
        {sprites.genII.silver && (
          <SpriteCard name="Silver" url={sprites.genII.silver} />
        )}

        {/* Generación III */}
        {sprites.genIII.emerald && (
          <SpriteCard name="Emerald" url={sprites.genIII.emerald} />
        )}
        {sprites.genIII.rubySapphire && (
          <SpriteCard name="Ruby/Sapphire" url={sprites.genIII.rubySapphire} />
        )}
        {sprites.genIII.fireRedLeafGreen && (
          <SpriteCard
            name="FireRed/LeafGreen"
            url={sprites.genIII.fireRedLeafGreen}
          />
        )}

        {/* Generación IV */}

        {sprites.genIV.diamondPearl && (
          <SpriteCard name="Diamond/Pearl" url={sprites.genIV.diamondPearl} />
        )}

        {sprites.genIV.heartGoldSoulSilver && (
          <SpriteCard
            name="HeartGold/SoulSilver"
            url={sprites.genIV.heartGoldSoulSilver}
          />
        )}
        {sprites.genIV.platinum && (
          <SpriteCard name="Platinum" url={sprites.genIV.platinum} />
        )}

        {/* Generación V */}
        {sprites.genV.blackWhite && (
          <SpriteCard name="Black/White" url={sprites.genV.blackWhite} />
        )}

        {/* Generación VI */}
        {sprites.genVI.xY && <SpriteCard name="X/Y" url={sprites.genVI.xY} />}
        {sprites.genVI.omegaRubyAlphaSapphire && (
          <SpriteCard
            name="OmegaRuby/AlphaSapphire"
            url={sprites.genVI.omegaRubyAlphaSapphire}
          />
        )}
        {/* Generación VII*/}
        {sprites.genVII.sunMoon && (
          <SpriteCard name="Sun/Moon" url={sprites.genVII.sunMoon} />
        )}
      </div>
    </>
  );
}
