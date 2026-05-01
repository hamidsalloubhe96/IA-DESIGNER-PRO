import { sectorMasterDNA } from "../data/sectorMasterDNA";

export function autoCreativePreset(sectorKey, suggestedStyle = "") {
  const sector = sectorMasterDNA[sectorKey];

  if (!sector) {
    return {
      style: "",
      font: "",
      palette: ""
    };
  }

  let finalStyle = sector.styles[0] || "";

  if (suggestedStyle) {
    const found = sector.styles.find((s) =>
      s.toLowerCase().includes(suggestedStyle.toLowerCase())
    );

    if (found) finalStyle = found;
  }

  return {
    style: finalStyle,
    font: sector.typos[0] || "",
    palette: sector.palettes[0]?.name || ""
  };
}