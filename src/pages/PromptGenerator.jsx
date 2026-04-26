import { sectorHierarchy, styleDNA } from "../data/promptDNA";
import { typoDNA } from "../data/typoDNA";
import { paletteDNA } from "../data/paletteDNA";

function PromptGenerator({ smartData, setSmartData }) {
  const getTypoFamily = () => {
    if (smartData.category === "luxe") return typoDNA.luxe;
    if (smartData.category === "corporate") return typoDNA.corporate;
    if (smartData.category === "food") return typoDNA.food;
    if (smartData.category === "digital") return typoDNA.tech;
    if (smartData.category === "sportauto") return typoDNA.sport;
    if (smartData.category === "travel") return typoDNA.luxe;
    if (smartData.category === "religion") return typoDNA.luxe;
    return null;
  };

  const typoPack = getTypoFamily();
  const palettePack = smartData.category ? paletteDNA[smartData.category] || [] : [];
  const subSectors = smartData.category ? sectorHierarchy[smartData.category].items : {};
  const styleOptions =
    smartData.category && smartData.sector
      ? sectorHierarchy[smartData.category].items[smartData.sector].styles
      : [];

  const updateField = (field, value) => {
    setSmartData({ ...smartData, [field]: value });
  };

  const generatePrompt = () => {
    if (
      !smartData.visualType ||
      !smartData.category ||
      !smartData.sector ||
      !smartData.style ||
      !smartData.font ||
      !smartData.palette
    ) {
      alert("Veuillez remplir toutes les sélections obligatoires");
      return;
    }

    const dna = sectorHierarchy[smartData.category].items[smartData.sector];
    const stylePack = styleDNA[smartData.style];
    const optionalText = smartData.promo ? `include ${smartData.promo}, ` : "";

    setSmartData({
      ...smartData,
      quickPrompt: `Create a premium ${smartData.visualType} for ${dna.label}, ${optionalText}use ${smartData.font} typography, ${smartData.palette} color palette, ${stylePack}, clean commercial product focus, social media ready composition.`,

      adPrompt: `Create a high-converting ${smartData.visualType} advertising design, ${dna.scene}, ${dna.marketing}, use elegant ${smartData.font} typography, ${smartData.palette} palette, ${stylePack}, ${optionalText}strong CTA hierarchy, polished premium commercial layout, realistic sales-driven composition.`,

      cinePrompt: `Create an ultra cinematic elite ${smartData.visualType}, ${dna.scene}, ${dna.cinematic}, luxury ${smartData.font} typography integration, ${smartData.palette} premium palette, ${stylePack}, ${optionalText}hyper realistic reflections, dramatic lighting, award-winning art direction, premium 8k visual storytelling rendering.`
    });

    alert("Prompts générés avec succès");
  };

  const resetGenerator = () => {
    setSmartData({
      ...smartData,
      visualType: "",
      category: "",
      sector: "",
      style: "",
      font: "",
      palette: "",
      promo: "",
      quickPrompt: "",
      adPrompt: "",
      cinePrompt: ""
    });
  };

  const saveFavorite = () => {
    if (!smartData.quickPrompt) {
      alert("Aucun prompt à sauvegarder");
      return;
    }

    setSmartData({
      ...smartData,
      favorites: [
        ...smartData.favorites,
        {
          quick: smartData.quickPrompt,
          ad: smartData.adPrompt,
          cine: smartData.cinePrompt
        }
      ]
    });

    alert("Prompts ajoutés aux favoris");
  };

  const copyPrompt = (text) => {
    navigator.clipboard.writeText(text);
    alert("Prompt copié");
  };

  const Box = ({ title, content }) => (
    <div className="bg-black border border-zinc-800 rounded-3xl p-6">
      <h3 className="text-yellow-400 mb-3 text-xl">{title}</h3>
      <p className="text-zinc-300 leading-8">{content}</p>
      {content && (
        <button
          onClick={() => copyPrompt(content)}
          className="mt-4 px-5 py-2 bg-zinc-900 rounded-xl text-sm"
        >
          Copier
        </button>
      )}
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-zinc-900 to-black border border-yellow-500/10 rounded-3xl p-10 shadow-2xl">
      <h2 className="text-4xl font-extrabold text-yellow-400 mb-8">
        Générateur Intelligent de Prompts
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <input
          value={smartData.visualType}
          onChange={(e) => updateField("visualType", e.target.value)}
          className="p-4 rounded-2xl bg-black border border-zinc-800 text-white"
          placeholder="Type de visuel : flyer, story, bannière..."
        />

        <select
          value={smartData.category}
          onChange={(e) =>
            setSmartData({
              ...smartData,
              category: e.target.value,
              sector: "",
              style: "",
              font: "",
              palette: ""
            })
          }
          className="p-4 rounded-2xl bg-black border border-zinc-800 text-white"
        >
          <option value="">Choisir une catégorie</option>
          {Object.entries(sectorHierarchy).map(([key, val]) => (
            <option key={key} value={key}>{val.label}</option>
          ))}
        </select>

        <select
          value={smartData.sector}
          onChange={(e) =>
            setSmartData({
              ...smartData,
              sector: e.target.value,
              style: ""
            })
          }
          className="p-4 rounded-2xl bg-black border border-zinc-800 text-white"
        >
          <option value="">Choisir un sous-secteur</option>
          {Object.entries(subSectors).map(([key, val]) => (
            <option key={key} value={key}>{val.label}</option>
          ))}
        </select>

        {smartData.sector && (
          <select
            value={smartData.style}
            onChange={(e) => updateField("style", e.target.value)}
            className="p-4 rounded-2xl bg-black border border-zinc-800 text-white"
          >
            <option value="">Choisir un style adapté</option>
            {styleOptions.map((st, i) => (
              <option key={i} value={st}>{st}</option>
            ))}
          </select>
        )}

        {typoPack && (
          <select
            value={smartData.font}
            onChange={(e) => updateField("font", e.target.value)}
            className="md:col-span-2 p-4 rounded-2xl bg-black border border-zinc-800 text-white"
          >
            <option value="">Choisir une typographie recommandée</option>
            {[...typoPack.title, ...typoPack.cta].map((font, i) => (
              <option key={i} value={font}>{font}</option>
            ))}
          </select>
        )}

        {palettePack.length > 0 && (
          <select
            value={smartData.palette}
            onChange={(e) => updateField("palette", e.target.value)}
            className="md:col-span-2 p-4 rounded-2xl bg-black border border-zinc-800 text-white"
          >
            <option value="">Choisir une palette couleur recommandée</option>
            {palettePack.map((pal, i) => (
              <option key={i} value={pal}>{pal}</option>
            ))}
          </select>
        )}

        <input
          value={smartData.promo}
          onChange={(e) => updateField("promo", e.target.value)}
          className="md:col-span-2 p-4 rounded-2xl bg-black border border-zinc-800 text-white"
          placeholder="Détails supplémentaires (facultatif)"
        />
      </div>

      <div className="flex gap-4 mt-8 flex-wrap">
        <button
          onClick={generatePrompt}
          className="px-8 py-4 rounded-2xl bg-yellow-500/15 border border-yellow-500/20 text-yellow-400"
        >
          Générer les Prompts
        </button>

        <button
          onClick={saveFavorite}
          className="px-8 py-4 rounded-2xl bg-zinc-900 text-white"
        >
          Ajouter aux Favoris
        </button>

        <button
          onClick={resetGenerator}
          className="px-8 py-4 rounded-2xl bg-zinc-900 text-white"
        >
          Reset
        </button>
      </div>

      <div className="mt-10 space-y-6">
        <Box title="Prompt Rapide" content={smartData.quickPrompt} />
        <Box title="Prompt Publicitaire" content={smartData.adPrompt} />
        <Box title="Prompt Cinématique" content={smartData.cinePrompt} />
      </div>
    </div>
  );
}

export default PromptGenerator;