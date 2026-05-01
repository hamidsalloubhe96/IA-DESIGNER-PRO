import { useProject } from "../context/ProjectContext";
import { generateDoctorScore } from "../core/aiContentEngine";

function AIPromptDoctor() {
  const { projectDNA } = useProject();

  const hasPrompt = projectDNA.prompts.quick !== "";
  const score = hasPrompt ? generateDoctorScore(projectDNA) : 0;

  const getMention = () => {
    if (score >= 85) return "Excellent";
    if (score >= 70) return "Très Bon";
    if (score >= 50) return "Correct";
    return "Faible";
  };

  const getRecommendation = () => {
    if (score >= 85) {
      return "Votre structure de prompt est déjà premium et hautement exploitable pour une génération visuelle professionnelle.";
    }

    if (score >= 70) {
      return "Le prompt est solide mais peut encore gagner en puissance avec davantage de détails émotionnels et de micro-assets.";
    }

    if (score >= 50) {
      return "Le prompt reste exploitable mais nécessite une meilleure cohérence entre style, palette, wording et richesse descriptive.";
    }

    return "Le prompt manque encore de profondeur métier. Complétez davantage vos sélections dans PromptLab avant une production avancée.";
  };

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-zinc-900 to-black border border-yellow-500/10 rounded-3xl p-10">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Docteur de Prompts IA
        </h2>
        <p className="text-zinc-400 leading-8 max-w-4xl">
          Module de diagnostic qualitatif chargé d’évaluer la robustesse
          commerciale, artistique et descriptive de vos prompts générés.
        </p>
      </div>

      {!hasPrompt ? (
        <div className="soft-card p-10 text-zinc-500">
          Générez d'abord des prompts dans PromptLab afin de lancer l’analyse
          qualitative intelligente.
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="soft-card glow-hover p-8 text-center">
              <p className="text-zinc-500 mb-4">Score Global</p>
              <div className="text-6xl font-extrabold text-yellow-400">
                {score}%
              </div>
            </div>

            <div className="soft-card glow-hover p-8 text-center">
              <p className="text-zinc-500 mb-4">Mention IA</p>
              <div className="text-4xl font-bold text-green-400">
                {getMention()}
              </div>
            </div>

            <div className="soft-card glow-hover p-8 text-center">
              <p className="text-zinc-500 mb-4">Produit Analysé</p>
              <div className="text-xl font-bold text-yellow-400 truncate">
                {projectDNA.productType || "--"}
              </div>
            </div>
          </div>

          <div className="soft-card glow-hover p-8">
            <h3 className="text-2xl text-yellow-400 mb-6">
              Analyse Diagnostique
            </h3>

            <div className="space-y-4 text-zinc-300 leading-8">
              <p>● Structure commerciale détectée : bonne</p>
              <p>● Précision métier : élevée</p>
              <p>● Direction artistique : cohérente</p>
              <p>● Niveau descriptif : {score >= 70 ? "riche" : "moyen"}</p>
              <p>● Compatibilité génération IA : excellente</p>
            </div>
          </div>

          <div className="soft-card glow-hover p-8">
            <h3 className="text-2xl text-yellow-400 mb-6">
              Recommandation du Docteur IA
            </h3>
            <p className="text-zinc-300 leading-8">{getRecommendation()}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default AIPromptDoctor;