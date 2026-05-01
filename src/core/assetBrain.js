import { getSectorDNA } from "./semanticCore";
import { assetsDNA } from "../data/assetsDNA";

export function getRecommendedAssets(category, sector) {
  const sectorDNA = getSectorDNA(category, sector);

  if (!sectorDNA) return [];

  const families = sectorDNA.assetFamilies || [];
  let finalAssets = [];

  families.forEach((family) => {
    if (assetsDNA[family]) {
      finalAssets = [...finalAssets, ...assetsDNA[family]];
    }
  });

  return finalAssets;
}