import { getSectorDNA } from "./semanticCore";
import { typoDNA } from "../data/typoDNA";
import { paletteDNA } from "../data/paletteDNA";

export function runAutoSmart(projectDNA) {
  const sectorDNA = getSectorDNA(projectDNA.category, projectDNA.sector);

  if (!sectorDNA) return null;

  const autoStyle = sectorDNA.styles[0];

  const typoPack = typoDNA[sectorDNA.typoFamily];
  const autoFont = typoPack ? typoPack.title[0] : "";

  const palettePack = paletteDNA[sectorDNA.paletteFamily];
  const autoPalette = palettePack ? palettePack[0].name : "";

  return {
    autoStyle,
    autoFont,
    autoPalette
  };
}