function VisualIntentAnalyzer({
  userIntent,
  setUserIntent,
  handleIntentAnalysis,
  projectDNA,
  masterSector
}) {
  return (
    <>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="soft-card glow-hover p-5">
          <p className="text-zinc-500 text-sm">Produit détecté</p>
          <p className="text-yellow-400 mt-2 truncate">{projectDNA.productType || "--"}</p>
        </div>

        <div className="soft-card glow-hover p-5">
          <p className="text-zinc-500 text-sm">Dimension auto</p>
          <p className="text-yellow-400 mt-2 truncate">{projectDNA.dimension || "--"}</p>
        </div>

        <div className="soft-card glow-hover p-5">
          <p className="text-zinc-500 text-sm">Secteur IA</p>
          <p className="text-green-400 mt-2">{masterSector?.label || "--"}</p>
        </div>

        <div className="soft-card glow-hover p-5">
          <p className="text-zinc-500 text-sm">Analyse IA</p>
          <p className="text-cyan-400 mt-2">{projectDNA.visualType ? "Complète" : "En attente"}</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-zinc-900 to-black border border-yellow-500/10 rounded-3xl p-10 shadow-2xl">
        <input
          value={userIntent}
          onChange={(e) => setUserIntent(e.target.value)}
          className="w-full p-5 rounded-2xl bg-black border border-yellow-500/20 text-white"
          placeholder="Décrivez le visuel que vous voulez créer... ex: flyer promo parfum luxe"
        />

        <button
          onClick={handleIntentAnalysis}
          className="w-full mt-6 px-8 py-4 gold-btn"
        >
          Analyser automatiquement
        </button>
      </div>
    </>
  );
}

export default VisualIntentAnalyzer;