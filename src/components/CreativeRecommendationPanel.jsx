function CreativeRecommendationPanel({
  projectDNA,
  sectorOptions,
  styleOptions,
  typoPack,
  palettePack,
  selectedPaletteObject,
  updateDNA,
  handleGenerate,
  handleVariations,
  handleImprove,
  handleAngles,
  addFavorite,
  handleFullReset,
  isGenerating
}) {
  return (
    <div className="bg-gradient-to-br from-zinc-900 to-black border border-yellow-500/10 rounded-3xl p-10 shadow-2xl space-y-8">

      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold text-yellow-400">
          Configuration créative recommandée
        </h3>
        <p className="text-zinc-500">
          VISUFORGE a construit automatiquement la meilleure combinaison design.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <select
          value={projectDNA.sector}
          onChange={(e) => updateDNA("sector", e.target.value)}
          className="p-4 rounded-2xl bg-black border border-zinc-800 text-white"
        >
          {sectorOptions.map((sec) => (
            <option key={sec.key} value={sec.key}>
              {sec.label}
            </option>
          ))}
        </select>

        <select
          value={projectDNA.style}
          onChange={(e) => updateDNA("style", e.target.value)}
          className="p-4 rounded-2xl bg-black border border-zinc-800 text-white"
        >
          {styleOptions.map((st, i) => (
            <option key={i} value={st}>
              {st}
            </option>
          ))}
        </select>

        <select
          value={projectDNA.font}
          onChange={(e) => updateDNA("font", e.target.value)}
          className="p-4 rounded-2xl bg-black border border-zinc-800 text-white"
        >
          {typoPack.map((font, i) => (
            <option key={i} value={font}>
              {font}
            </option>
          ))}
        </select>

        <select
          value={projectDNA.palette}
          onChange={(e) => updateDNA("palette", e.target.value)}
          className="p-4 rounded-2xl bg-black border border-zinc-800 text-white"
        >
          {palettePack.map((pal, i) => (
            <option key={i} value={pal.name}>
              {pal.name}
            </option>
          ))}
        </select>
      </div>

      {selectedPaletteObject && (
        <div className="soft-card p-6 flex justify-center gap-4 rounded-3xl">
          {selectedPaletteObject.colors.map((clr, i) => (
            <div
              key={i}
              className="w-14 h-14 rounded-full border border-zinc-700 shadow-xl"
              style={{ backgroundColor: clr }}
            ></div>
          ))}
        </div>
      )}

      <div className="flex gap-4 flex-wrap justify-center">
        <button onClick={handleGenerate} className="px-8 py-4 gold-btn">
          {isGenerating ? "Génération IA..." : "Générer Prompts"}
        </button>
        <button onClick={handleVariations} className="px-8 py-4 gold-btn">Variations IA</button>
        <button onClick={handleImprove} className="px-8 py-4 gold-btn">Optimiser Prompt</button>
        <button onClick={handleAngles} className="px-8 py-4 gold-btn">Angles Créatifs</button>
        <button onClick={addFavorite} className="px-8 py-4 gold-btn">Favori</button>
        <button onClick={handleFullReset} className="px-8 py-4 gold-btn">Réinitialiser</button>
      </div>
    </div>
  );
}

export default CreativeRecommendationPanel;