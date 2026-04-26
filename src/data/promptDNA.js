export const sectorHierarchy = {
  luxe: {
    label: "Beauté & Luxe",
    items: {
      parfum: {
        label: "Parfum",
        styles: ["luxe", "dark", "feminin"],
        scene: "luxury perfume bottle hero shot, black and gold palette, premium marble pedestal, golden flowers, reflective glass enhancement, prestige french branding",
        marketing: "premium fragrance promotion, elegant discount badge, refined CTA perfume campaign",
        cinematic: "moody luxury atmosphere, dramatic backlight, sensual reflections, elite prestige emotion"
      },
      cosmetique: {
        label: "Cosmétique",
        styles: ["luxe", "feminin", "dark"],
        scene: "premium skincare jars and serum bottles, glossy feminine arrangement, beauty studio lighting, luxury cosmetic texture",
        marketing: "beauty offer badge, feminine CTA, skincare campaign hierarchy",
        cinematic: "soft glamorous glow, delicate highlights, luxury feminine mood"
      },
      bijoux: {
        label: "Bijoux",
        styles: ["luxe", "dark"],
        scene: "luxury jewelry close-up, sparkling diamonds, black velvet pedestal, prestige gold reflections",
        marketing: "exclusive jewelry sale badge, refined shopping CTA",
        cinematic: "royal glamorous sparkle, elite boutique atmosphere"
      },
      modefemme: {
        label: "Mode Femme",
        styles: ["luxe", "feminin", "agressif"],
        scene: "elegant female fashion campaign, luxury clothing presentation, premium accessories and editorial composition",
        marketing: "fashion sale typography, feminine CTA shopping hierarchy",
        cinematic: "magazine beauty lighting, glamorous feminine prestige mood"
      },
      modehomme: {
        label: "Mode Homme",
        styles: ["luxe", "dark", "agressif"],
        scene: "premium menswear showcase, masculine luxury styling, watches, shoes, suits or casual elite wear",
        marketing: "menswear discount block, bold luxury CTA",
        cinematic: "strong masculine magazine atmosphere, elite lifestyle energy"
      }
    }
  },

  corporate: {
    label: "Entreprise",
    items: {
      immobilier: {
        label: "Immobilier",
        styles: ["corporate", "luxe"],
        scene: "modern luxury building exterior, architectural perspective, premium skyline reflections",
        marketing: "property sale badge, agency CTA, structured real estate information blocks",
        cinematic: "sunset skyline glow, aspirational wealth mood, cinematic corporate realism"
      },
      finance: {
        label: "Finance",
        styles: ["corporate", "dark"],
        scene: "premium banking environment, growth charts, trust business graphics, elegant corporate desk",
        marketing: "investment offer CTA, finance service blocks",
        cinematic: "blue authority glow, business prestige realism"
      },
      assurance: {
        label: "Assurance",
        styles: ["corporate"],
        scene: "secure family or company protection concept, trust branding, professional service layout",
        marketing: "insurance package badge, consultation CTA",
        cinematic: "clean reassuring corporate atmosphere"
      },
      medical: {
        label: "Cabinet Médical",
        styles: ["corporate", "feminin"],
        scene: "premium clinic interior, professional healthcare branding, clean medical composition",
        marketing: "appointment CTA, healthcare service promo",
        cinematic: "bright trustworthy healthcare lighting"
      },
      education: {
        label: "Éducation",
        styles: ["corporate", "agressif"],
        scene: "modern academic desk, laptop, books, successful students, educational institution branding",
        marketing: "admission badge, registration CTA",
        cinematic: "inspirational student future atmosphere"
      }
    }
  },

  food: {
    label: "Restauration",
    items: {
      restaurant: {
        label: "Restaurant",
        styles: ["agressif", "dark", "luxe"],
        scene: "gourmet food hero composition, delicious close-up textures, premium plate arrangement",
        marketing: "special menu badge, reservation CTA, culinary offer hierarchy",
        cinematic: "warm appetizing glow, cinematic steam, emotional craving atmosphere"
      },
      fastfood: {
        label: "Fast Food",
        styles: ["agressif"],
        scene: "juicy burger or pizza hero shot, vibrant food composition, colorful commercial appetite styling",
        marketing: "combo promo badge, delivery CTA",
        cinematic: "high contrast delicious lighting, hunger trigger atmosphere"
      },
      patisserie: {
        label: "Pâtisserie",
        styles: ["feminin", "luxe"],
        scene: "luxury cakes and desserts close-up, creamy textures, elegant pastry arrangement",
        marketing: "sweet offer badge, order CTA",
        cinematic: "soft delicious premium dessert glow"
      },
      cafe: {
        label: "Café Lounge",
        styles: ["dark", "luxe"],
        scene: "premium coffee cup composition, cozy lounge atmosphere, elegant smoke and warm table styling",
        marketing: "coffee promo CTA, visit us campaign",
        cinematic: "warm relaxing lounge mood"
      }
    }
  },
    digital: {
    label: "Technologie",
    items: {
      telecom: {
        label: "Télécom",
        styles: ["neon", "corporate"],
        scene: "smartphone product hero presentation, futuristic network waves, mobile device realism, digital connectivity mood",
        marketing: "data package promo badge, subscription CTA, telecom service blocks",
        cinematic: "blue neon glow, cyber reflections, dynamic tech energy"
      },
      gadgets: {
        label: "Gadgets Tech",
        styles: ["neon", "dark"],
        scene: "modern gadgets showcase, headphones, smartwatch, accessories, premium black futuristic display",
        marketing: "limited tech deal badge, product CTA",
        cinematic: "futuristic product glow, cyber realism"
      },
      saas: {
        label: "Logiciel / SaaS",
        styles: ["corporate", "neon"],
        scene: "software dashboard mockup, laptop screen, clean digital UI, modern startup branding",
        marketing: "free trial CTA, service feature hierarchy",
        cinematic: "clean neon business tech atmosphere"
      },
      gaming: {
        label: "Gaming",
        styles: ["neon", "dark"],
        scene: "RGB gaming setup, headset, keyboard, competitive futuristic action mood",
        marketing: "gaming promo badge, buy now CTA",
        cinematic: "intense purple blue cyber energy"
      }
    }
  },

  sportauto: {
    label: "Sport & Auto",
    items: {
      automobile: {
        label: "Automobile",
        styles: ["dark", "agressif", "luxe"],
        scene: "luxury car hero shot, metallic reflections, speed road atmosphere, premium masculine branding",
        marketing: "car offer badge, showroom CTA",
        cinematic: "dramatic speed lighting, prestige automotive power"
      },
      gym: {
        label: "Salle de Sport",
        styles: ["agressif", "dark"],
        scene: "muscular athlete gym workout, strong machines, fitness power environment",
        marketing: "membership CTA, transformation offer badge",
        cinematic: "aggressive power lighting, energetic fitness mood"
      },
      nutrition: {
        label: "Nutrition Sportive",
        styles: ["agressif", "dark"],
        scene: "protein jars, shaker bottles, muscular sports branding, supplement commercial arrangement",
        marketing: "performance sale badge, order CTA",
        cinematic: "high energy masculine spotlight"
      }
    }
  },

  travel: {
    label: "Voyage & Event",
    items: {
      tourisme: {
        label: "Tourisme",
        styles: ["luxe", "feminin"],
        scene: "dream destination visual, beach, plane, premium travel experience branding",
        marketing: "book now CTA, travel package offer",
        cinematic: "aspirational vacation paradise mood"
      },
      agence: {
        label: "Agence de Voyage",
        styles: ["corporate", "luxe"],
        scene: "travel booking desk, destination posters, flight luxury concept",
        marketing: "reservation CTA, promo package hierarchy",
        cinematic: "global travel inspiration atmosphere"
      },
      mariage: {
        label: "Mariage",
        styles: ["feminin", "luxe"],
        scene: "luxury wedding floral decor, elegant bride and ceremony prestige styling",
        marketing: "booking CTA, wedding planner promo",
        cinematic: "romantic gold white dreamy atmosphere"
      },
      vip: {
        label: "Événementiel VIP",
        styles: ["luxe", "dark"],
        scene: "premium gala event, golden lights, celebrity luxury atmosphere",
        marketing: "ticket CTA, reservation badge",
        cinematic: "exclusive red carpet prestige mood"
      }
    }
  },

  religion: {
    label: "Religion",
    items: {
      islam: {
        label: "Islam",
        styles: ["spirituel", "oriental", "noble"],
        scene: "elegant islamic architecture, crescent moon, golden arabesque ornaments, spiritual premium composition",
        marketing: "islamic announcement typography, noble CTA",
        cinematic: "sacred glowing atmosphere, peaceful divine light"
      },
      ramadan: {
        label: "Ramadan",
        styles: ["spirituel", "oriental", "luxe"],
        scene: "ramadan lanterns, crescent moon, warm gold spiritual background, elegant islamic decor",
        marketing: "ramadan kareem offer, islamic promotional hierarchy",
        cinematic: "warm sacred night mood"
      },
      omra: {
        label: "Omra / Hajj",
        styles: ["spirituel", "noble"],
        scene: "kaaba spiritual visual, pilgrimage travel composition, elegant islamic typography",
        marketing: "registration CTA, sacred travel hierarchy",
        cinematic: "divine white gold light atmosphere"
      },
      ecoleislamique: {
        label: "École Islamique",
        styles: ["noble", "corporate"],
        scene: "quran school branding, children learning, elegant islamic educational composition",
        marketing: "admission CTA, islamic school hierarchy",
        cinematic: "peaceful educational spiritual light"
      }
    }
  }
};

export const styleDNA = {
  luxe: "ultra premium gold detailing, elegant serif typography, prestige spacing, luxury composition",
  dark: "deep black shadows, dramatic contrast, moody premium atmosphere",
  corporate: "clean business hierarchy, disciplined layout, structured typography",
  neon: "futuristic vibrant glows, electric highlights, energetic visual pulses",
  feminin: "soft beauty highlights, elegant gentle composition, delicate branding mood",
  agressif: "strong marketing hierarchy, oversized promo badge, bold CTA, high conversion visual pressure",
  spirituel: "soft sacred glow, spiritual elegance, peaceful noble composition",
  oriental: "gold arabesque ornaments, islamic geometric elegance, eastern prestige mood",
  noble: "refined sober composition, calm authority, premium dignified hierarchy"
};