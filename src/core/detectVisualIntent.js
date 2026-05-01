import { moodKeywordsDNA } from "../data/moodKeywordsDNA";

export function detectVisualIntent(userText = "") {
  const text = userText.toLowerCase();

  let visualType = "Post Réseau Social";
  let productType = "Post Réseau Social";
  let dimension = "1080 x 1080 px";
  let sector = "";
  let suggestedStyle = "";

  // ================= TYPE VISUEL =================

  if (text.includes("menu")) {
    visualType = "Menu Restaurant";
    productType = "Menu Restaurant";
    dimension = "1200 x 1800 px";
  } else if (text.includes("carte de visite")) {
    visualType = "Carte de Visite";
    productType = "Carte de Visite";
    dimension = "1050 x 600 px";
  } else if (text.includes("certificat")) {
    visualType = "Certificat Premium";
    productType = "Certificat Premium";
    dimension = "1200 x 1600 px";
  } else if (text.includes("invitation")) {
    visualType = "Carte Invitation";
    productType = "Carte Invitation";
    dimension = "1200 x 1800 px";
  } else if (text.includes("story")) {
    visualType = "Story Instagram";
    productType = "Story Instagram";
    dimension = "1080 x 1920 px";
  } else if (text.includes("bannière") || text.includes("banner")) {
    visualType = "Bannière Web";
    productType = "Bannière Web";
    dimension = "1920 x 700 px";
  } else if (text.includes("catalogue")) {
    visualType = "Catalogue Produit";
    productType = "Catalogue Produit";
    dimension = "1200 x 1600 px";
  } else if (text.includes("packaging")) {
    visualType = "Packaging Produit";
    productType = "Packaging Produit";
    dimension = "1400 x 1400 px";
  } else if (text.includes("brochure")) {
    visualType = "Brochure Commerciale";
    productType = "Brochure Commerciale";
    dimension = "1200 x 1600 px";
  } else if (text.includes("logo")) {
    visualType = "Logo Icône";
    productType = "Logo Icône";
    dimension = "1200 x 1200 px";
  } else if (text.includes("flyer") || text.includes("affiche")) {
    visualType = "Flyer Publicitaire";
    productType = "Flyer Publicitaire";
    dimension = "1080 x 1350 px";
  }

  // ================= SECTEUR =================

  if (text.includes("parfum")) sector = "parfum";
  else if (text.includes("cosmétique") || text.includes("cosmetique")) sector = "cosmetique";
  else if (text.includes("bijou")) sector = "bijoux";
  else if (text.includes("mode")) sector = "mode";
  else if (text.includes("spa")) sector = "spa";
  else if (text.includes("restaurant")) sector = "restaurant";
  else if (text.includes("fast food") || text.includes("pizza") || text.includes("burger")) sector = "fastfood";
  else if (text.includes("pâtisserie") || text.includes("patisserie")) sector = "patisserie";
  else if (text.includes("finance")) sector = "finance";
  else if (text.includes("cabinet") || text.includes("avocat")) sector = "cabinet";
  else if (text.includes("immobilier")) sector = "immobilier";
  else if (text.includes("formation")) sector = "formation";
  else if (text.includes("recrutement")) sector = "recrutement";
  else if (text.includes("telecom")) sector = "telecom";
  else if (text.includes("gadget") || text.includes("tech")) sector = "gadgets";
  else if (text.includes("saas") || text.includes("logiciel")) sector = "saas";
  else if (text.includes("ecommerce")) sector = "ecommerce";
  else if (text.includes("marketing")) sector = "agence";
  else if (text.includes("automobile") || text.includes("voiture")) sector = "automobile";
  else if (text.includes("fitness") || text.includes("gym")) sector = "gym";
  else if (text.includes("voyage")) sector = "tourisme";
  else if (text.includes("mariage")) sector = "mariage";
  else if (text.includes("anniversaire")) sector = "anniversaire";
  else if (text.includes("conférence islamique")) sector = "conferenceislamique";
  else if (text.includes("conférence")) sector = "conference";
  else if (text.includes("islam")) sector = "islam";
  else if (text.includes("ramadan")) sector = "ramadan";

  // ================= MOOD =================

  Object.keys(moodKeywordsDNA).forEach((mood) => {
    moodKeywordsDNA[mood].forEach((word) => {
      if (text.includes(word)) {
        suggestedStyle = mood;
      }
    });
  });

  return {
    visualType,
    productType,
    dimension,
    sector,
    suggestedStyle
  };
}