import { useProject } from "../context/ProjectContext";
import { getSectorDNA } from "../core/semanticCore";
import { generateAdvisorInsights } from "../core/aiContentEngine";

function AIAdvisor() {
  const { projectDNA } = useProject();

  const sectorDNA = getSectorDNA(projectDNA.category, projectDNA.sector);
  const insights = sectorDNA ? generateAdvisorInsights(projectDNA, sectorDNA) : null;

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-zinc-900 to-black border border-yellow-500/10 rounded-3xl p-10">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Conseiller IA
        </h2>
        <p className="text-zinc-400 leading-8 max-w-4xl">
          Assistant stratégique chargé d’interpréter votre ADN métier afin de
          proposer une direction créative, émotionnelle et visuelle cohérente.
        </p>
      </div>

      {!sectorDNA ? (
        <div className="soft-card p-10 text-zinc-500">
          Sélectionnez d'abord une catégorie et un sous-secteur dans PromptLab
          afin de recevoir des recommandations intelligentes.
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="soft-card glow-hover p-6">
              <p className="text-zinc-500 text-sm mb-3">Mood Business Détecté</p>
              <p className="text-yellow-400 text-xl">{insights.mood}</p>
            </div>

            <div className="soft-card glow-hover p-6">
              <p className="text-zinc-500 text-sm mb-3">Styles Cohérents</p>
              <p className="text-yellow-400 text-xl">{insights.styles}</p>
            </div>
          </div>

          <div className="soft-card glow-hover p-8">
            <h3 className="text-2xl text-yellow-400 mb-5">
              Conseil Stratégique IA
            </h3>
            <p className="text-zinc-300 leading-8">{insights.advice}</p>
          </div>

          <div className="soft-card glow-hover p-8">
            <h3 className="text-2xl text-yellow-400 mb-5">
              Base de Scène Recommandée
            </h3>
            <p className="text-zinc-300 leading-8">{insights.scene}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default AIAdvisor;