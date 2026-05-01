import { semanticCore } from "../core/semanticCore";
import { typoDNA } from "./typoDNA";
import { paletteDNA } from "./paletteDNA";

const premiumStyleNames = {
  luxe: "Luxe Prestige",
  dark: "Dark Premium",
  corporate: "Corporate Clean",
  neon: "Tech Neon",
  feminin: "Féminin Glamour",
  agressif: "Impact Marketing",
  spirituel: "Spirituel Noble",
  oriental: "Oriental Prestige",
  noble: "Noble Élégance",
  minimaliste: "Minimaliste Premium",
  gourmand: "Gourmand Appétissant",
  premiumsoft: "Premium Soft",
  urbain: "Urban Trend",
  sportif: "Sport Power",
  medicalclean: "Medical Clean",
  festive: "Festive Premium",
  editorial: "Editorial Luxe",
  instagrammable: "Instagram Viral"
};

const buildSectorMaster = () => {
  const master = {};

  Object.keys(semanticCore).forEach((categoryKey) => {
    const category = semanticCore[categoryKey];

    Object.keys(category.sectors).forEach((sectorKey) => {
      const sector = category.sectors[sectorKey];

      master[sectorKey] = {
        key: sectorKey,
        label: sector.label,
        parent: categoryKey,

        styles: sector.styles.map((st) => premiumStyleNames[st] || st),
        styleKeys: sector.styles,

        typos: typoDNA[sector.typoFamily]
          ? [...(typoDNA[sector.typoFamily].title || []), ...(typoDNA[sector.typoFamily].cta || [])]
          : [],

        palettes: paletteDNA[sector.paletteFamily] || [],

        mood: sector.mood,
        scene: sector.scene,
        marketing: sector.marketing,
        cinematic: sector.cinematic
      };
    });
  });

  return master;
};

export const sectorMasterDNA = buildSectorMaster();