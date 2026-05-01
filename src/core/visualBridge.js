import { dimensionDNA } from "../data/dimensionDNA";

export const syncVisualDNA = (visual) => {
  const dim = dimensionDNA[visual];

  return {
    productType: visual,
    visualType: visual,
    dimension: dim ? dim.size : ""
  };
};