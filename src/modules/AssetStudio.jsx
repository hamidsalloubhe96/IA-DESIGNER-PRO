import { useMemo, useState, useEffect } from "react";
import { useProject } from "../context/ProjectContext";
import { assetsDNA } from "../data/assetsDNA";
import { getSectorDNA } from "../core/semanticCore";

function AssetStudio({ showNotification }) {
  const { projectDNA, updateDNA } = useProject();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [assets, setAssets] = useState([]);

  const sectorDNA = getSectorDNA(projectDNA.category, projectDNA.sector);

  useEffect(() => {
    if (!sectorDNA || !sectorDNA.assetFamilies) {
      setSelectedCategory("");
      setAssets([]);
      return;
    }

    const first = sectorDNA.assetFamilies[0];
    setSelectedCategory(first);
    setAssets(assetsDNA[first] || []);
  }, [sectorDNA]);

  const loadAssets = (category) => {
    setSelectedCategory(category);
    setAssets(assetsDNA[category] || []);
  };

  const injectAsset = (injectText) => {
    const already = projectDNA.selectedAssets.includes(injectText);

    if (already) {
      updateDNA(
        "selectedAssets",
        projectDNA.selectedAssets.filter((a) => a !== injectText)
      );
      showNotification("info", "Asset retiré");
    } else {
      updateDNA("selectedAssets", [...projectDNA.selectedAssets, injectText]);
      showNotification("success", "Asset synchronisé");
    }
  };

  const copyAssetPrompt = (text) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    showNotification("info", "Prompt asset copié");
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

  const selectedCount = useMemo(
    () => projectDNA.selectedAssets.length,
    [projectDNA.selectedAssets]
  );

  const labelMap = {
    badges: "Badges",
    cta: "CTA",
    glow: "Effets Glow",
    social: "Éléments Sociaux",
    backgrounds: "Arrière-plans",
    png: "Overlays PNG",
  };

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-zinc-900 to-black border border-yellow-500/10 rounded-3xl p-10">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Studio de Ressources Intelligent
        </h2>
        <p className="text-zinc-400 leading-8 max-w-4xl">
          Bibliothèque d’enrichissement visuel synchronisée avec le business
          actuel afin d’ajouter automatiquement badges, CTA, overlays, effets
          lumineux et arrière-plans cohérents.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="soft-card glow-hover p-5">
          <p className="text-zinc-500 text-sm">Secteur synchronisé</p>
          <p className="text-yellow-400 mt-2 truncate">{projectDNA.sector || "--"}</p>
        </div>

        <div className="soft-card glow-hover p-5">
          <p className="text-zinc-500 text-sm">Familles actives</p>
          <p className="text-yellow-400 mt-2">
            {sectorDNA?.assetFamilies?.length || 0}
          </p>
        </div>

        <div className="soft-card glow-hover p-5">
          <p className="text-zinc-500 text-sm">Assets injectés</p>
          <p className="text-yellow-400 mt-2">{selectedCount}</p>
        </div>
      </div>

      {!sectorDNA ? (
        <div className="soft-card p-10 text-zinc-400">
          Veuillez d'abord choisir une catégorie et un sous-secteur dans PromptLab
          afin de synchroniser les ressources intelligentes.
        </div>
      ) : (
        <>
          <div className="flex flex-wrap gap-4">
            {sectorDNA.assetFamilies.map((fam, index) => (
              <div key={index}>
                {categoryButton(fam, labelMap[fam] || fam)}
              </div>
            ))}
          </div>

          {assets.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6">
              {assets.map((asset, index) => (
                <div key={index} className="soft-card glow-hover p-6">
                  <h3 className="text-yellow-400 text-xl mb-3">{asset.title}</h3>

                  <div className="bg-zinc-900 rounded-2xl p-4 mb-4 text-zinc-400 text-sm">
                    {asset.preview}
                  </div>

                  <p className="text-zinc-300 leading-7 text-sm">{asset.prompt}</p>

                  <div className="flex gap-3 mt-5 flex-wrap">
                    <button
                      onClick={() => copyAssetPrompt(asset.prompt)}
                      className="px-5 py-2 rounded-2xl bg-yellow-500/15 border border-yellow-500/20 text-yellow-400"
                    >
                      Copier Prompt
                    </button>

                    <button
                      onClick={() => injectAsset(asset.injectText)}
                      className="px-5 py-2 rounded-2xl bg-yellow-500/15 border border-yellow-500/20 text-yellow-400"
                    >
                      {projectDNA.selectedAssets.includes(asset.injectText)
                        ? "Retirer"
                        : "Ajouter"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default AssetStudio;