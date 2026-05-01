import { getSectorDNA, styleLibrary } from "./semanticCore";

export function generateBusinessPrompts(projectDNA) {
  const {
    visualType,
    productType,
    category,
    sector,
    style,
    font,
    palette,
    dimension,
    promo
  } = projectDNA;

  const finalVisual = productType || visualType;
  if (!finalVisual || !category || !sector || !style || !font || !palette) {
    return null;
  }

  const formatLine = dimension ? `optimized for ${dimension} professional format, ` : "";
  const sectorDNA = getSectorDNA(category, sector);
  const stylePack = styleLibrary[style];
  const optionalPromo = promo ? `include ${promo}, ` : "";
  

  const quickPrompt = `Create a premium ${finalVisual} for ${sectorDNA.label}, ${formatLine}${optionalPromo}use ${font} typography, ${palette} palette, ${stylePack}.`;

  const adPrompt = `Create a high-converting ${finalVisual} advertising design, ${formatLine}${sectorDNA.scene}, ${sectorDNA.marketing}, use ${font} typography, ${palette} color palette, ${stylePack}.`;
  const cinematicPrompt = `Create an ultra cinematic elite ${finalVisual}, ${formatLine}${sectorDNA.scene}, ${sectorDNA.cinematic}, use ${font} typography, ${palette} palette, ${stylePack}.`;
  return {
    quickPrompt,
    adPrompt,
    cinematicPrompt
  };
}

export function enrichGeneratedPrompts(projectDNA) {
  const { selectedAssets, prompts } = projectDNA;

  if (!selectedAssets.length) return prompts;

  const inject = selectedAssets.join(", ");

  return {
    quick: `${prompts.quick} Include ${inject}.`,
    ad: `${prompts.ad} Include ${inject}.`,
    cinematic: `${prompts.cinematic} Include ${inject}.`
  };
}