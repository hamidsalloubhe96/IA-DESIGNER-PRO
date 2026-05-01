import { useProject } from "../context/ProjectContext";
import { generateDoctorScore, generateAdvisorInsights } from "../core/aiContentEngine";
import { getSectorDNA } from "../core/semanticCore";

function AnalyzerLab() {
  const { projectDNA } = useProject();

  const sectorDNA = getSectorDNA(projectDNA.category, projectDNA.sector);
  const promptScore = generateDoctorScore(projectDNA);
  const insights = sectorDNA ? generateAdvisorInsights(projectDNA, sectorDNA) : null;

  const visualScore =
    projectDNA.style && projectDNA.palette && projectDNA.font ? 90 : 30;

  const assetScore = Math.min(100, projectDNA.selectedAssets.length * 20);

  const businessScore =
    projectDNA.productType && projectDNA.category && projectDNA.sector ? 92 : 20;

  const exportScore =
    projectDNA.prompts.quick && projectDNA.prompts.ad && projectDNA.prompts.cinematic
      ? 95
      : 15;

  const finalAverage = Math.round(
    (promptScore + visualScore + assetScore + businessScore + exportScore) / 5
  );

  const progressBar = (label, value) => (
    <div>
      <div className="flex justify-between text-sm text-zinc-400 mb-2">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-yellow-400 rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );

  const weakPoints = [];
  if (!projectDNA.palette) weakPoints.push("Palette colorimétrique non définie");
  if (!projectDNA.font) weakPoints.push("Typographie non sélectionnée");
  if (!projectDNA.promo) weakPoints.push("Détails promotionnels absents");
  if (projectDNA.selectedAssets.length < 2) weakPoints.push("Très peu d'assets injectés");
  if (!projectDNA.prompts.quick) weakPoints.push("Prompts encore non générés");

  const getVerdict = () => {
    if (finalAverage >= 85) return "Projet premium prêt pour production intensive.";
    if (finalAverage >= 65) return "Projet solide avec quelques optimisations possibles.";
    if (finalAverage >= 45) return "Projet intermédiaire nécessitant enrichissement.";
    return "Projet encore insuffisamment préparé.";
  };

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-zinc-900 to-black border border-yellow-500/10 rounded-3xl p-10">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Laboratoire d'Analyse IA
        </h2>
        <p className="text-zinc-400 leading-8 max-w-4xl">
          Dashboard analytique avancé de maturité créative, marketing et
          technique du projet VISUFORGE AI.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="soft-card glow-hover p-8 text-center">
          <p className="text-zinc-500 mb-4">Indice Global</p>
          <div className="text-5xl font-extrabold text-yellow-400">{finalAverage}%</div>
        </div>

        <div className="soft-card glow-hover p-8 text-center">
          <p className="text-zinc-500 mb-4">Produit</p>
          <div className="text-lg font-bold text-yellow-400 truncate">
            {projectDNA.productType || "--"}
          </div>
        </div>

        <div className="soft-card glow-hover p-8 text-center">
          <p className="text-zinc-500 mb-4">Secteur</p>
          <div className="text-lg font-bold text-yellow-400">
            {projectDNA.sector || "--"}
          </div>
        </div>

        <div className="soft-card glow-hover p-8 text-center">
          <p className="text-zinc-500 mb-4">Verdict</p>
          <div className="text-sm font-bold text-green-400">{getVerdict()}</div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="soft-card glow-hover p-6">
          <p className="text-zinc-500 text-sm">Prompts Générés</p>
          <p className="text-yellow-400 mt-2">{projectDNA.prompts.quick ? "Oui" : "Non"}</p>
        </div>

        <div className="soft-card glow-hover p-6">
          <p className="text-zinc-500 text-sm">Assets Injectés</p>
          <p className="text-yellow-400 mt-2">{projectDNA.selectedAssets.length}</p>
        </div>

        <div className="soft-card glow-hover p-6">
          <p className="text-zinc-500 text-sm">Favoris Archivés</p>
          <p className="text-yellow-400 mt-2">{projectDNA.favorites.length}</p>
        </div>
      </div>

      <div className="soft-card glow-hover p-8">
        <h3 className="text-2xl text-yellow-400 mb-6">Analyse des Piliers</h3>
        <div className="space-y-5">
          {progressBar("Cohérence Business", businessScore)}
          {progressBar("Puissance Prompt", promptScore)}
          {progressBar("Cohérence Visuelle", visualScore)}
          {progressBar("Richesse Assets", assetScore)}
          {progressBar("Préparation Export", exportScore)}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="soft-card glow-hover p-8">
          <h3 className="text-2xl text-yellow-400 mb-6">Points Faibles Détectés</h3>
          {weakPoints.length === 0 ? (
            <p className="text-green-400">Aucune faiblesse critique détectée.</p>
          ) : (
            <div className="space-y-3 text-zinc-300">
              {weakPoints.map((w, i) => (
                <p key={i}>● {w}</p>
              ))}
            </div>
          )}
        </div>

        <div className="soft-card glow-hover p-8">
          <h3 className="text-2xl text-yellow-400 mb-6">Conseil IA Prioritaire</h3>
          <p className="text-zinc-300 leading-8">
            {insights
              ? insights.advice
              : "Commencez par configurer complètement votre ADN métier dans PromptLab."}
          </p>
        </div>
      </div>

      <div className="soft-card glow-hover p-8">
        <h3 className="text-2xl text-yellow-400 mb-6">État Production</h3>
        <div className="space-y-3 text-zinc-300">
          <p>● Midjourney Ready : {finalAverage >= 60 ? "Oui" : "Non"}</p>
          <p>● Leonardo Ready : {finalAverage >= 60 ? "Oui" : "Non"}</p>
          <p>● Publicité Réseaux Sociaux Ready : {finalAverage >= 70 ? "Oui" : "Non"}</p>
          <p>● Export Client Ready : {finalAverage >= 80 ? "Oui" : "Non"}</p>
        </div>
      </div>
    </div>
  );
}

export default AnalyzerLab;