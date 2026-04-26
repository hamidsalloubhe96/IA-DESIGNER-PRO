import { useState, useEffect } from "react";
import { assetsDNA } from "../data/assetsDNA";

function AssetsLibrary({ smartData }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [assets, setAssets] = useState([]);

  const smartTitle =
    smartData.sector !== ""
      ? `Ressources recommandées pour ${smartData.sector}`
      : "Bibliothèque de Ressources Design";

  useEffect(() => {
    if (smartData.category === "luxe" || smartData.category === "religion") {
      setSelectedCategory("badges");
      setAssets(assetsDNA.badges);
    }

    if (smartData.category === "corporate") {
      setSelectedCategory("cta");
      setAssets(assetsDNA.cta);
    }

    if (smartData.category === "digital") {
      setSelectedCategory("glow");
      setAssets(assetsDNA.glow);
    }

    if (smartData.category === "food") {
      setSelectedCategory("backgrounds");
      setAssets(assetsDNA.backgrounds);
    }

    if (smartData.category === "travel" || smartData.category === "sportauto") {
      setSelectedCategory("png");
      setAssets(assetsDNA.png);
    }
  }, [smartData]);

  const loadAssets = (category) => {
    setSelectedCategory(category);
    setAssets(assetsDNA[category]);
  };

  const copyAssetPrompt = (text) => {
    navigator.clipboard.writeText(text);
    alert("Prompt de ressource copié");
  };

  const categoryButton = (key, label) => (
    <button
      onClick={() => loadAssets(key)}
      className={`px-5 py-3 rounded-2xl border transition-all ${
        selectedCategory === key
          ? "bg-yellow-500/20 border-yellow-500/30 text-yellow-400"
          : "bg-black border-zinc-800 text-zinc-300"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="bg-gradient-to-br from-zinc-900 to-black border border-yellow-500/10 rounded-3xl p-10 shadow-2xl">
      <h2 className="text-4xl font-extrabold text-yellow-400 mb-3">
        {smartTitle}
      </h2>

      {smartData.sector && (
        <p className="text-zinc-400 mb-8">
          Suggestions automatiques basées sur votre dernière génération :
          {` ${smartData.sector} / ${smartData.style}`}
        </p>
      )}

      <div className="flex flex-wrap gap-4 mb-10">
        {categoryButton("badges", "Badges Promo")}
        {categoryButton("cta", "CTA Buttons")}
        {categoryButton("glow", "Luxury Glow")}
        {categoryButton("social", "Social Icons")}
        {categoryButton("backgrounds", "Backgrounds")}
        {categoryButton("png", "PNG Effects")}
      </div>

      {assets.length > 0 && (
        <div className="grid md:grid-cols-2 gap-6">
          {assets.map((asset, index) => (
            <div
              key={index}
              className="bg-black border border-zinc-800 rounded-3xl p-6"
            >
              <h3 className="text-yellow-400 text-xl mb-3">{asset.title}</h3>

              <div className="bg-zinc-900 rounded-2xl p-4 mb-4 text-zinc-400 text-sm">
                {asset.preview}
              </div>

              <p className="text-zinc-300 leading-7 text-sm">{asset.prompt}</p>

              <button
                onClick={() => copyAssetPrompt(asset.prompt)}
                className="mt-5 px-5 py-2 bg-zinc-900 rounded-xl text-sm text-white"
              >
                Copier le Prompt
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AssetsLibrary;