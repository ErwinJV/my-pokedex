import { PokemonSpeciesResponse } from "@/types/pokemon";

export default async function getEnglishDescription(
  speciesUrl: string
): Promise<string> {
  try {
    const response = await fetch(speciesUrl, {
      next: { revalidate: 3600 * 24 * 30 },
    });

    if (!response.ok) return "Description not available";

    const speciesData: PokemonSpeciesResponse = await response.json();

    const englishEntries = speciesData.flavor_text_entries
      .filter((entry) => entry.language.name === "en")
      .sort((a, b) => b.version.name.localeCompare(a.version.name));

    if (englishEntries.length === 0) return "No English description available";

    const latestDescription = englishEntries[0].flavor_text;

    return latestDescription.replace(/\n|\f/g, " ").replace(/\s+/g, " ").trim();
  } catch (error) {
    console.error("Error fetching species data:", error);
    return "Error loading description";
  }
}
