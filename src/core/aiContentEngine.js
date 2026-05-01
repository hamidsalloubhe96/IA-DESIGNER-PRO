export function generateOfferHooks(projectDNA) {
  const sector = projectDNA.sector || "business";
  const product = projectDNA.productType || "creative visual";

  return [
    `🔥 Exclusive ${sector} premium offer`,
    `⚡ Limited ${product} commercial promotion`,
    `✨ Trusted quality experience for ${sector}`,
    `🎯 Book now / Order now high conversion CTA`
  ];
}

export function generateCampaignSequence(projectDNA) {
  const product = projectDNA.productType || "Main Visual";

  return [
    `1. Sponsored ${product} Main Ad`,
    `2. Story Teaser Awareness`,
    `3. Promotional Discount Push`,
    `4. Customer Trust Social Post`,
    `5. Retargeting Conversion Banner`
  ];
}

export function generateAdvisorInsights(projectDNA, sectorDNA) {
  if (!sectorDNA) return null;

  return {
    mood: sectorDNA.mood,
    styles: sectorDNA.styles.join(", "),
    scene: sectorDNA.scene,
    advice: `Pour ${sectorDNA.label}, privilégiez un visuel immédiatement identifiable, une hiérarchie CTA forte et une ambiance cohérente avec ${sectorDNA.mood}.`
  };
}

export function generateDoctorScore(projectDNA) {
  let score = 65;

  if (projectDNA.productType) score += 8;
  if (projectDNA.category) score += 5;
  if (projectDNA.sector) score += 5;
  if (projectDNA.style) score += 4;
  if (projectDNA.font) score += 4;
  if (projectDNA.palette) score += 4;
  score += projectDNA.selectedAssets.length * 2;

  if (score > 98) score = 98;

  return score;
}