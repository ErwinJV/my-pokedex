import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

import { PokemonResponseFormatted } from "@/types/pokemon";

import { POKEMON_SPRITE_OFFICIAL_ARTWORK_BASE_URI } from "@/utils/media";

// import { styled } from "@mui/material/styles";

// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
// import IconButton, { IconButtonProps } from "@mui/material/IconButton";

// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

import { POKEMON_TYPE_COLORS } from "@/utils/pokemons";

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme }) => ({
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
//   variants: [
//     {
//       props: ({ expand }) => !expand,
//       style: {
//         transform: "rotate(0deg)",
//       },
//     },
//     {
//       props: ({ expand }) => !!expand,
//       style: {
//         transform: "rotate(180deg)",
//       },
//     },
//   ],
// }));

interface PokemonCardProps {
  pokemon: PokemonResponseFormatted;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const imageUrl = `${
    POKEMON_SPRITE_OFFICIAL_ARTWORK_BASE_URI + pokemon.id
  }.png`;

  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <Card className="w-[290px] sm:w-[320px]" component={Paper} elevation={9}>
      <CardHeader
        className="capitalize text-center"
        title={pokemon.name}
        subheader=""
      />
      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt={pokemon.image || ""}
      />
      <CardContent className="flex flex-col items-center">
        <Typography
          variant="body1"
          sx={{ color: "text.secondary" }}
          className="italic"
          component="p"
        >
          &quot;{pokemon.description}&quot;
        </Typography>
        <div className="flex w-[60%]  my-2 justify-around">
          {pokemon.types.map((type) => (
            <Chip
              component={Paper}
              elevation={8}
              key={type}
              label={type.toUpperCase()}
              sx={{
                backgroundColor: `${POKEMON_TYPE_COLORS[type]}`,
                color: "white",
                fontWeight: 700,
              }}
            />
          ))}
        </div>
        <div className="flex flex-col w-[95%] p-4">
          {/* <span className="font-bold my-1">
            Name: <span className="font-normal capitalize">{pokemon.name}</span>
          </span> */}
          <span className="font-bold my-1">
            Number:{" "}
            <span className="font-normal capitalize">#{pokemon.id}</span>
          </span>

          <span className="font-bold my-1 ">
            Height:{" "}
            <span className="font-normal capitalize">{pokemon.height}m</span>
          </span>
          <span className="font-bold my-1 ">
            Weight:{" "}
            <span className="font-normal capitalize">
              {pokemon.weight}
              <span className="lowercase">kg</span>
            </span>
          </span>

          <span className="font-bold my-1 ">
            Abilities:{" "}
            <ul className="font-normal indent-1.5 list-disc list-inside">
              {pokemon.abilities.map((ability) => (
                <li className="capitalize" key={ability.name}>
                  {ability.name}{" "}
                  {ability.is_hidden && (
                    <span className="lowercase">(hidden)</span>
                  )}
                </li>
              ))}
            </ul>
          </span>
          <span className="font-bold my-1 ">
            Stats:
            <ul className="list-disc list-inside font-normal">
              {pokemon.stats.map((stat) => (
                <li key={stat.name}>
                  <span className="font-bold"> {stat.name}</span>:{" "}
                  {stat.base_stat}
                </li>
              ))}
            </ul>
          </span>
        </div>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions> */}
    </Card>
  );
}
