const analysisMessages = [
  "Lecture de l'intention visuelle...",
  "Identification du secteur commercial...",
  "Synchronisation de l'univers créatif...",
  "Préchargement des recommandations premium...",
  "Calibration de l'intelligence design..."
];

function VisualOrbLoader({ analysisStep }) {
  return (
    <div className="bg-gradient-to-br from-zinc-900 to-black border border-yellow-500/10 rounded-3xl p-10 shadow-2xl text-center space-y-8">

      <div className="relative flex justify-center items-center">
        <div className="w-44 h-44 rounded-full border-4 border-yellow-500/20 animate-ping absolute"></div>
        <div className="w-36 h-36 rounded-full border border-yellow-400 animate-spin absolute"></div>
        <div className="w-24 h-24 rounded-full bg-yellow-500/10 border border-yellow-400 flex items-center justify-center text-5xl text-yellow-400 shadow-[0_0_40px_rgba(255,215,0,0.3)]">
          ✦
        </div>
      </div>

      <h3 className="text-3xl font-bold text-yellow-400">VISUFORGE analyse votre intention...</h3>

      <div className="space-y-3">
        {analysisMessages.map((msg, i) => (
          <p
            key={i}
            className={`transition-all duration-500 ${
              i <= analysisStep ? "text-yellow-300 opacity-100" : "text-zinc-600 opacity-40"
            }`}
          >
            {msg}
          </p>
        ))}
      </div>

      <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden">
        <div
          className="bg-yellow-400 h-3 transition-all duration-700"
          style={{ width: `${(analysisStep + 1) * 20}%` }}
        ></div>
      </div>
    </div>
  );
}

export default VisualOrbLoader;