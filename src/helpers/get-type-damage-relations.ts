import { TypeDamageRelations } from "@/types/pokemon";

export default async function getTypeDamageRelations(
  typeUrl: string
): Promise<TypeDamageRelations> {
  const response = await fetch(typeUrl, {
    next: { revalidate: 3600 * 24 * 30 },
  });

  if (!response.ok) {
    throw new Error(`Error obteniendo tipo (${response.status})`);
  }

  const typeData = await response.json();
  return typeData.damage_relations;
}
