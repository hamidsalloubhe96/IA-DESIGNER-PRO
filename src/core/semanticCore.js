export const styleLibrary = {
  luxe: "ultra premium gold detailing, elegant serif hierarchy, prestige spacing, glossy luxury composition",
  dark: "deep cinematic shadows, intense black contrast, moody premium atmosphere, dramatic highlights",
  corporate: "clean business hierarchy, disciplined structured composition, trust professional branding",
  neon: "futuristic vibrant glows, electric neon highlights, cyber premium energy",
  feminin: "soft beauty lighting, delicate elegant composition, graceful refined mood",
  agressif: "strong conversion hierarchy, oversized promo dominance, bold CTA pressure marketing",
  spirituel: "soft sacred glow, divine peaceful atmosphere, noble spiritual elegance",
  oriental: "gold arabesque ornaments, islamic geometric prestige, eastern noble refinement",
  noble: "refined calm authority, sober prestige hierarchy, dignified premium composition",
  minimaliste: "clean modern whitespace, restrained elegance, simple premium hierarchy",
  gourmand: "delicious creamy textures, appetite trigger closeups, rich food seduction",
  premiumsoft: "soft polished glow, refined chic highlights, modern premium tenderness",
  urbain: "street bold visual energy, youthful urban impact, trendy campaign force",
  sportif: "athletic motion power, dynamic masculine energy, strong action realism",
  medicalclean: "clean hygienic brightness, trust healthcare atmosphere, sterile premium order",
  festive: "celebratory sparkles, glamorous excitement, vibrant premium event atmosphere",
  editorial: "magazine storytelling sophistication, fashion publication elegance, elite editorial flow",
  instagrammable: "viral trendy photogenic aesthetic, social media premium engagement"
};

export const semanticCore = {
  luxe: {
    label: "Beauté & Luxe",
    sectors: {
      parfum: {
        label: "Parfum",
        styles: ["luxe","dark","feminin","premiumsoft","editorial","instagrammable"],
        typoFamily: "luxe",
        paletteFamily: "luxe",
        assetFamilies: ["badges","glow","backgrounds"],
        mood: "prestige fragrance seduction",
        scene: "luxury perfume bottle hero shot, reflective glass, marble pedestal, golden flowers",
        marketing: "premium fragrance promotion, refined discount badge, elegant CTA perfume campaign",
        cinematic: "dramatic sensual backlight, glossy prestige reflections, elite french luxury mood"
      },
      cosmetique: {
        label: "Cosmétique",
        styles: ["feminin","luxe","premiumsoft","minimaliste","editorial","instagrammable"],
        typoFamily: "beauty",
        paletteFamily: "beauty",
        assetFamilies: ["badges","glow","backgrounds"],
        mood: "beauty skincare elegance",
        scene: "premium skincare jars, serum bottles, glossy feminine arrangement, soft beauty studio",
        marketing: "beauty offer badge, feminine CTA, skincare commercial hierarchy",
        cinematic: "soft glamorous glow, delicate polished highlights, luxury beauty atmosphere"
      },
      bijoux: {
        label: "Bijoux",
        styles: ["luxe","dark","editorial","premiumsoft","minimaliste","instagrammable"],
        typoFamily: "luxe",
        paletteFamily: "jewelry",
        assetFamilies: ["badges","glow"],
        mood: "royal jewelry prestige",
        scene: "luxury jewelry closeup, diamonds sparkle, black velvet pedestal, premium reflections",
        marketing: "exclusive jewelry sale badge, refined shopping CTA",
        cinematic: "royal glamorous sparkle, elite boutique cinematic prestige"
      },
      mode: {
        label: "Mode & Couture",
        styles: ["editorial","luxe","dark","premiumsoft","instagrammable","minimaliste"],
        typoFamily: "luxe",
        paletteFamily: "luxe",
        assetFamilies: ["glow","backgrounds","social"],
        mood: "fashion elite prestige",
        scene: "luxury fashion model, designer clothes, boutique runway atmosphere",
        marketing: "new collection CTA, fashion campaign hierarchy",
        cinematic: "editorial fashion prestige"
      },
      spa: {
        label: "Spa & Bien-être",
        styles: ["feminin","premiumsoft","minimaliste","luxe","editorial","instagrammable"],
        typoFamily: "beauty",
        paletteFamily: "beauty",
        assetFamilies: ["backgrounds","glow","cta"],
        mood: "wellness serenity elegance",
        scene: "spa candles, massage stones, feminine wellness atmosphere",
        marketing: "book session CTA, relaxation hierarchy",
        cinematic: "soft calm premium glow"
      }
    }
  },

  food: {
    label: "Restauration",
    sectors: {
      restaurant: {
        label: "Restaurant",
        styles: ["gourmand","dark","luxe","agressif","premiumsoft","instagrammable"],
        typoFamily: "restaurant",
        paletteFamily: "restaurant",
        assetFamilies: ["badges","cta","png"],
        mood: "gourmet appetite luxury",
        scene: "gourmet food hero composition, delicious closeup textures, premium plate arrangement",
        marketing: "special menu badge, reservation CTA, culinary offer hierarchy",
        cinematic: "warm appetizing glow, cinematic steam, emotional craving atmosphere"
      },
      fastfood: {
        label: "Fast Food",
        styles: ["agressif","urbain","gourmand","instagrammable","dark","neon"],
        typoFamily: "fastfood",
        paletteFamily: "fastfood",
        assetFamilies: ["badges","cta","png"],
        mood: "street hunger conversion",
        scene: "juicy burger pizza fried chicken hero shot, colorful hunger trigger arrangement",
        marketing: "combo promo badge, delivery CTA, high conversion flash sale composition",
        cinematic: "high contrast delicious lighting, urban food craving energy"
      },
      patisserie: {
        label: "Pâtisserie",
        styles: ["feminin","gourmand","luxe","premiumsoft","instagrammable","editorial"],
        typoFamily: "patisserie",
        paletteFamily: "patisserie",
        assetFamilies: ["badges","backgrounds","cta"],
        mood: "sweet premium delicacy",
        scene: "luxury cakes and desserts closeup, creamy textures, elegant pastry arrangement",
        marketing: "sweet offer badge, order CTA, refined bakery campaign hierarchy",
        cinematic: "soft delicious premium dessert glow, instagram worthy bakery atmosphere"
      }
    }
  },

  corporate: {
    label: "Entreprise & Services",
    sectors: {
      finance: {
        label: "Finance",
        styles: ["corporate","dark","minimaliste","luxe","premiumsoft","editorial"],
        typoFamily: "finance",
        paletteFamily: "finance",
        assetFamilies: ["cta","backgrounds","social"],
        mood: "trust business authority",
        scene: "premium banking environment, growth charts, structured business desk, professional financial realism",
        marketing: "investment service CTA, trust blocks, premium finance conversion hierarchy",
        cinematic: "blue authority glow, disciplined business prestige, executive realism"
      },
      assurance: {
        label: "Assurance",
        styles: ["corporate","minimaliste","premiumsoft","noble","medicalclean","editorial"],
        typoFamily: "assurance",
        paletteFamily: "assurance",
        assetFamilies: ["cta","backgrounds"],
        mood: "security trust professionalism",
        scene: "secure family company protection concept, clean trust branding, premium service arrangement",
        marketing: "insurance package CTA, consultation conversion hierarchy",
        cinematic: "clean reassuring premium corporate atmosphere"
      },
      cabinet: {
        label: "Cabinet Conseil",
        styles: ["corporate","dark","minimaliste","noble","premiumsoft","editorial"],
        typoFamily: "finance",
        paletteFamily: "finance",
        assetFamilies: ["cta","backgrounds","social"],
        mood: "executive advisory authority",
        scene: "executive consulting office, modern laptop desk, business confidence setup",
        marketing: "professional consultation CTA, service authority hierarchy",
        cinematic: "disciplined dark business prestige"
      },
      immobilier: {
        label: "Immobilier",
        styles: ["corporate","luxe","premiumsoft","editorial","minimaliste","dark"],
        typoFamily: "finance",
        paletteFamily: "finance",
        assetFamilies: ["backgrounds","cta","social"],
        mood: "property investment trust",
        scene: "modern luxury building, keys, family home investment atmosphere",
        marketing: "buy now CTA, agency hierarchy",
        cinematic: "clean architectural prestige"
      },
      formation: {
        label: "Formation",
        styles: ["corporate","premiumsoft","minimaliste","noble","editorial","festive"],
        typoFamily: "finance",
        paletteFamily: "assurance",
        assetFamilies: ["social","cta","backgrounds"],
        mood: "educational authority",
        scene: "professional classroom, certification, students success atmosphere",
        marketing: "register now CTA, training hierarchy",
        cinematic: "bright motivational education mood"
      },
      recrutement: {
        label: "Recrutement",
        styles: ["corporate","minimaliste","premiumsoft","editorial","noble","dark"],
        typoFamily: "finance",
        paletteFamily: "finance",
        assetFamilies: ["cta","social"],
        mood: "career opportunity professionalism",
        scene: "business handshake, office team, recruitment desk",
        marketing: "apply now CTA, hiring hierarchy",
        cinematic: "executive HR confidence"
      }
    }
  },

  digital: {
    label: "Technologie & Digital",
    sectors: {
      telecom: {
        label: "Télécom",
        styles: ["neon","corporate","dark","premiumsoft","minimaliste","instagrammable"],
        typoFamily: "telecom",
        paletteFamily: "telecom",
        assetFamilies: ["glow","social","cta"],
        mood: "futuristic connectivity power",
        scene: "smartphone hero presentation, digital network waves, mobile futuristic realism",
        marketing: "data package promo badge, subscription CTA, telecom conversion hierarchy",
        cinematic: "electric blue cyber glow, digital connection energy"
      },
      gadgets: {
        label: "Gadgets Tech",
        styles: ["neon","dark","premiumsoft","agressif","minimaliste","instagrammable"],
        typoFamily: "gadgets",
        paletteFamily: "gadgets",
        assetFamilies: ["glow","png","social"],
        mood: "futuristic product desire",
        scene: "airpods smartwatch accessories futuristic showcase, glossy black tech reflections",
        marketing: "limited tech deal badge, ecommerce CTA",
        cinematic: "cyber premium product glow"
      },
      saas: {
        label: "Logiciel SaaS",
        styles: ["corporate","neon","minimaliste","premiumsoft","dark","editorial"],
        typoFamily: "saas",
        paletteFamily: "saas",
        assetFamilies: ["social","backgrounds","cta"],
        mood: "startup software innovation",
        scene: "software dashboard mockup, laptop screen, clean startup digital branding",
        marketing: "free trial CTA, feature hierarchy, startup growth blocks",
        cinematic: "clean neon business tech atmosphere"
      },
      ecommerce: {
        label: "Ecommerce",
        styles: ["neon","agressif","premiumsoft","minimaliste","instagrammable","dark"],
        typoFamily: "gadgets",
        paletteFamily: "gadgets",
        assetFamilies: ["badges","cta","social"],
        mood: "online shopping conversion",
        scene: "shopping cart, smartphone ecommerce screen, product checkout glow",
        marketing: "shop now CTA, promo ecommerce hierarchy",
        cinematic: "digital consumer desire"
      },
      agence: {
        label: "Agence Marketing",
        styles: ["corporate","neon","dark","editorial","premiumsoft","minimaliste"],
        typoFamily: "saas",
        paletteFamily: "saas",
        assetFamilies: ["social","backgrounds","cta"],
        mood: "creative business growth",
        scene: "marketing dashboard, social campaign analytics, agency workspace",
        marketing: "boost business CTA, campaign hierarchy",
        cinematic: "modern startup agency glow"
      }
    }
  },
    sportauto: {
    label: "Sport & Automobile",
    sectors: {
      automobile: {
        label: "Automobile",
        styles: ["dark","luxe","agressif","editorial","premiumsoft","instagrammable"],
        typoFamily: "automobile",
        paletteFamily: "automobile",
        assetFamilies: ["png","cta","glow"],
        mood: "speed prestige power",
        scene: "luxury car hero shot, metallic reflections, speed road atmosphere, masculine branding",
        marketing: "car offer badge, showroom CTA, performance hierarchy",
        cinematic: "dramatic speed lighting, automotive prestige power"
      },
      gym: {
        label: "Salle de Sport",
        styles: ["sportif","agressif","dark","urbain","neon","instagrammable"],
        typoFamily: "gym",
        paletteFamily: "gym",
        assetFamilies: ["png","cta","badges"],
        mood: "fitness transformation energy",
        scene: "muscular athlete workout, powerful gym machines, transformation realism",
        marketing: "membership CTA, body transformation promo hierarchy",
        cinematic: "aggressive spotlight, high energy athletic mood"
      }
    }
  },

  travel: {
    label: "Voyage & Event",
    sectors: {
      tourisme: {
        label: "Tourisme",
        styles: ["luxe","premiumsoft","instagrammable","editorial","festive","feminin"],
        typoFamily: "tourisme",
        paletteFamily: "tourisme",
        assetFamilies: ["backgrounds","social","cta"],
        mood: "aspirational paradise escape",
        scene: "dream beach destination, airplane, tropical luxury travel branding",
        marketing: "book now CTA, travel package hierarchy",
        cinematic: "sunset paradise vacation mood"
      },
      mariage: {
        label: "Mariage",
        styles: ["feminin","luxe","premiumsoft","editorial","festive","instagrammable"],
        typoFamily: "mariage",
        paletteFamily: "mariage",
        assetFamilies: ["glow","backgrounds","cta"],
        mood: "romantic luxury celebration",
        scene: "luxury wedding floral decor, elegant ceremony prestige styling",
        marketing: "booking CTA, wedding planner hierarchy",
        cinematic: "romantic gold white dreamy atmosphere"
      },
      conference: {
        label: "Conférence",
        styles: ["corporate","noble","premiumsoft","minimaliste","editorial","festive"],
        typoFamily: "finance",
        paletteFamily: "finance",
        assetFamilies: ["cta","backgrounds","social"],
        mood: "executive event authority",
        scene: "business conference hall, stage lighting, speaker podium, professional audience",
        marketing: "registration CTA, event hierarchy, premium seminar invitation",
        cinematic: "professional spotlight conference prestige"
      },
      gala: {
        label: "Gala VIP",
        styles: ["luxe","dark","festive","editorial","premiumsoft","instagrammable"],
        typoFamily: "luxe",
        paletteFamily: "luxe",
        assetFamilies: ["glow","backgrounds","badges"],
        mood: "elite celebration prestige",
        scene: "luxury gala dinner, chandeliers, black gold event elegance",
        marketing: "vip invitation hierarchy, elite guest CTA",
        cinematic: "black gold glamorous celebration"
      },
      anniversaire: {
        label: "Anniversaire Premium",
        styles: ["festive","feminin","premiumsoft","instagrammable","luxe","editorial"],
        typoFamily: "mariage",
        paletteFamily: "mariage",
        assetFamilies: ["backgrounds","glow","cta"],
        mood: "joyful luxury celebration",
        scene: "birthday luxury decor, balloons, cake, elegant lights",
        marketing: "celebration invitation CTA",
        cinematic: "soft festive golden mood"
      },
      seminaire: {
        label: "Séminaire Business",
        styles: ["corporate","minimaliste","premiumsoft","noble","editorial","dark"],
        typoFamily: "finance",
        paletteFamily: "finance",
        assetFamilies: ["cta","social","backgrounds"],
        mood: "business educational authority",
        scene: "training seminar room, projector, executive coaching environment",
        marketing: "book seat CTA, seminar hierarchy",
        cinematic: "professional executive educational mood"
      }
    }
  },

  religion: {
    label: "Religion & Spirituel",
    sectors: {
      islam: {
        label: "Islam",
        styles: ["spirituel","oriental","noble","luxe","premiumsoft","editorial"],
        typoFamily: "islam",
        paletteFamily: "islam",
        assetFamilies: ["glow","badges","backgrounds"],
        mood: "sacred noble peace",
        scene: "elegant islamic architecture, crescent moon, arabesque ornaments, premium spiritual composition",
        marketing: "islamic announcement typography, noble CTA hierarchy",
        cinematic: "divine sacred glowing atmosphere"
      },
      ramadan: {
        label: "Ramadan",
        styles: ["spirituel","oriental","luxe","festive","premiumsoft","instagrammable"],
        typoFamily: "ramadan",
        paletteFamily: "ramadan",
        assetFamilies: ["glow","badges","backgrounds"],
        mood: "warm sacred celebration",
        scene: "ramadan lanterns, crescent moon, warm gold spiritual background",
        marketing: "ramadan kareem offer hierarchy, islamic promotional CTA",
        cinematic: "warm sacred night premium mood"
      },
      conferenceislamique: {
        label: "Conférence Islamique",
        styles: ["spirituel","oriental","noble","premiumsoft","editorial","festive"],
        typoFamily: "islam",
        paletteFamily: "islam",
        assetFamilies: ["backgrounds","glow","cta"],
        mood: "sacred educational gathering",
        scene: "islamic conference hall, scholars stage, noble lantern atmosphere",
        marketing: "participation CTA, spiritual event hierarchy",
        cinematic: "noble sacred conference mood"
      },
      doua: {
        label: "Douaa & Invocation",
        styles: ["spirituel","premiumsoft","oriental","noble","minimaliste","editorial"],
        typoFamily: "ramadan",
        paletteFamily: "ramadan",
        assetFamilies: ["glow","backgrounds"],
        mood: "peaceful prayer atmosphere",
        scene: "hands prayer, crescent moon, calm spiritual golden light",
        marketing: "spiritual reminder hierarchy",
        cinematic: "divine calm sacred night"
      }
    }
  }
};

export const getCategoryOptions = () => {
  return Object.entries(semanticCore).map(([key, value]) => ({
    key,
    label: value.label
  }));
};

export const getSectorOptions = (categoryKey) => {
  if (!categoryKey || !semanticCore[categoryKey]) return [];
  return Object.entries(semanticCore[categoryKey].sectors).map(([key, value]) => ({
    key,
    label: value.label
  }));
};

export const getStyleOptions = (categoryKey, sectorKey) => {
  if (!categoryKey || !sectorKey) return [];
  return semanticCore[categoryKey].sectors[sectorKey].styles;
};

export const getSectorDNA = (categoryKey, sectorKey) => {
  if (!categoryKey || !sectorKey) return null;
  return semanticCore[categoryKey].sectors[sectorKey];
};