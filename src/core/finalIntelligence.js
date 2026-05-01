export function generatePromptVariations(basePrompt) {
  if (!basePrompt) return [];

  return [
    `${basePrompt} Add stronger luxury lighting and premium contrast.`,
    `${basePrompt} Add high-end cinematic depth and elite composition.`,
    `${basePrompt} Add stronger commercial CTA focus and product dominance.`
  ];
}

export function improvePrompt(basePrompt) {
  if (!basePrompt) return "";

  return `${basePrompt} Ultra detailed premium composition, hyper realistic rendering, luxury advertising quality, strong focal hierarchy, commercial high conversion mood.`;
}

export function generateCreativeAngles(projectDNA) {
  const sector = projectDNA.sector || "business";

  return [
    `Hero centered ${sector} product composition`,
    `Luxury close-up detail focus`,
    `Commercial split layout with CTA dominance`,
    `Premium background depth with glow overlays`
  ];
}