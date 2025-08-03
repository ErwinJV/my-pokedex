export interface PokemonSprites {
  front_default: string | null;
  front_shiny: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  back_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    home: {
      front_default: string | null;
      front_shiny: string | null;
      front_female: string | null;
      front_shiny_female: string | null;
    };
    "official-artwork": {
      front_default: string | null;
      front_shiny: string | null;
    };
  };
  versions: {
    "generation-i": {
      "red-blue": {
        back_default: string | null;
        back_gray: string | null;
        front_default: string | null;
        front_gray: string | null;
      };
      yellow: {
        back_default: string | null;
        back_gray: string | null;
        front_default: string | null;
        front_gray: string | null;
      };
    };
    "generation-ii": {
      crystal: {
        back_default: string | null;
        back_shiny: string | null;
        front_default: string | null;
        front_shiny: string | null;
      };
      gold: {
        back_default: string | null;
        back_shiny: string | null;
        front_default: string | null;
        front_shiny: string | null;
      };
      silver: {
        back_default: string | null;
        back_shiny: string | null;
        front_default: string | null;
        front_shiny: string | null;
      };
    };
    "generation-iii": {
      emerald: {
        front_default: string | null;
        front_shiny: string | null;
      };
      "firered-leafgreen": {
        back_default: string | null;
        back_shiny: string | null;
        front_default: string | null;
        front_shiny: string | null;
      };
      "ruby-sapphire": {
        back_default: string | null;
        back_shiny: string | null;
        front_default: string | null;
        front_shiny: string | null;
      };
    };
    "generation-iv": {
      "diamond-pearl": {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
      "heartgold-soulsilver": {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
      platinum: {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
    };
    "generation-v": {
      "black-white": {
        animated: {
          back_default: string | null;
          back_female: string | null;
          back_shiny: string | null;
          back_shiny_female: string | null;
          front_default: string | null;
          front_female: string | null;
          front_shiny: string | null;
          front_shiny_female: string | null;
        };
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
    };
    "generation-vi": {
      "omegaruby-alphasapphire": {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
      "x-y": {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
    };
    "generation-vii": {
      icons: {
        front_default: string | null;
        front_female: string | null;
      };
      "ultra-sun-ultra-moon": {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
    };
    "generation-viii": {
      icons: {
        front_default: string | null;
        front_female: string | null;
      };
      "generation-ix": {
        icons: {
          front_default: string | null;
          front_female: string | null;
        };
        "scarlet-violet": {
          front_default: string | null;
          front_shiny: string | null;
          front_female: string | null;
          front_shiny_female: string | null;
        };
      };
    };
  };
}

export interface PokemonMainSprites {
  default: string | null;
  shiny: string | null;
  female: string | null;
  shinyFemale: string | null;
  animated: string | null;
  dreamWorld: string | null;
  officialArtwork: {
    default: string | null;
    shiny: string | null;
  };
  generations: GenerationSprites;
}

export interface GenerationSprites {
  genI: {
    redBlue: string | null;
    yellow: string | null;
  };
  genII: {
    crystal: string | null;
    gold: string | null;
    silver: string | null;
  };
  genIII: {
    emerald: string | null;
    rubySapphire: string | null;
    fireRedLeafGreen: string | null;
  };
  genIV: {
    diamondPearl: string | null;
    platinum: string | null;
    heartGoldSoulSilver: string | null;
  };
  genV: {
    blackWhite: string | null;
    animated: string | null;
  };
  genVI: {
    xY: string | null;
    omegaRubyAlphaSapphire: string | null;
  };
  genVII: {
    sunMoon: string | null;
    ultraSunUltraMoon: string | null;
    icons: string | null;
  };
  genVIII: {
    icons: string | null;
  };
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonResponse {
  id: number;
  name: string;
  sprites: PokemonSprites;
  types: PokemonType[];
  height: number;
  weight: number;
  base_experience: number;
  abilities: Ability[];
  stats: Stat[];
  species: {
    name: string;
    url: string;
  };
}

export interface PokemonResponseFormatted {
  id: number;
  name: string;
  image: string | null;
  types: string[];
  height: number;
  weight: number;
  experience: number;
  abilities: {
    name: string;
    is_hidden: boolean;
  }[];
  stats: {
    name: string;
    base_stat: number;
  }[];
  weaknesses: string[];
  resistances: string[];
  description: string;
}

export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface PokemonEntry {
  entry_number: number;
  pokemon_species: NamedAPIResource;
}

export interface Pokedex {
  id: number;
  name: string;
  pokemon_entries: PokemonEntry[];
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: NamedAPIResource[];
}

export interface GenerationResponse {
  id: number;
  name: string;
  pokemon_species: NamedAPIResource[];
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface TypeDamageRelations {
  double_damage_from: TypeInfo[];
  double_damage_to: TypeInfo[];
  half_damage_from: TypeInfo[];
  half_damage_to: TypeInfo[];
  no_damage_from: TypeInfo[];
  no_damage_to: TypeInfo[];
}

export interface TypeInfo {
  name: string;
  url: string;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
  version: {
    name: string;
    url: string;
  };
}

export interface PokemonSpeciesResponse {
  flavor_text_entries: FlavorTextEntry[];
}

export interface PokemonResponseFormatted {
  id: number;
  name: string;
  image: string | null;
  types: string[];
  height: number;
  weight: number;
  experience: number;
  abilities: {
    name: string;
    is_hidden: boolean;
  }[];
  stats: {
    name: string;
    base_stat: number;
  }[];
  weaknesses: string[];
  resistances: string[];
}

export interface Pokemon {
  id: number;
  name: string;
  species: {
    name: string;
    url: string;
  };
  forms: {
    name: string;
    url: string;
  }[];
}
