export default function getPokemonIdByUrl(url: string) {
  return url.split("/").filter(Boolean).pop() || "0";
}
