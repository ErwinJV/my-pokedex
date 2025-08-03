import { PokemonType } from "@/types/pokemon";
import getTypeDamageRelations from "./get-type-damage-relations";

export default async function calculateTypeEffects(
  types: PokemonType[]
): Promise<{ weaknesses: string[]; resistances: string[] }> {
  const damageRelations = await Promise.all(
    types.map((t) => getTypeDamageRelations(t.type.url))
  );

  const damageMultipliers: Record<string, number> = {};

  // Procesar todas las relaciones de daño
  damageRelations.forEach((relations) => {
    relations.double_damage_from.forEach(({ name }) => {
      damageMultipliers[name] = (damageMultipliers[name] || 1) * 2;
    });
    relations.half_damage_from.forEach(({ name }) => {
      damageMultipliers[name] = (damageMultipliers[name] || 1) * 0.5;
    });
    relations.no_damage_from.forEach(({ name }) => {
      damageMultipliers[name] = 0;
    });
  });

  // Filtrar y clasificar
  const weaknesses: string[] = [];
  const resistances: string[] = [];

  Object.entries(damageMultipliers).forEach(([type, multiplier]) => {
    if (multiplier > 1) weaknesses.push(type);
    if (multiplier < 1 && multiplier > 0) resistances.push(type);
    if (multiplier === 0) resistances.push(type);
  });

  // Eliminar duplicados y ordenar
  return {
    weaknesses: [...new Set(weaknesses)].sort(),
    resistances: [...new Set(resistances)].sort(),
  };
}
