import { useProject } from "../context/ProjectContext";
import { generateOfferHooks } from "../core/aiContentEngine";

function OfferBooster({ showNotification }) {
  const { projectDNA } = useProject();

  const canGenerate =
    projectDNA.category && projectDNA.sector && projectDNA.productType;

  const generatedOffers = canGenerate ? generateOfferHooks(projectDNA) : [];

  const generatedOfferText =
    generatedOffers.length > 0 ? generatedOffers.join("\n") : "";

  const copyOffer = () => {
    if (!generatedOfferText) return;

    navigator.clipboard.writeText(generatedOfferText);
    showNotification("success", "Hooks promotionnels copiés");
  };

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-zinc-900 to-black border border-yellow-500/10 rounded-3xl p-10">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Booster Commercial
        </h2>
        <p className="text-zinc-400 leading-8 max-w-4xl">
          Générateur intelligent de hooks promotionnels, slogans de vente et
          appels à l’action destinés à renforcer l’impact marketing de vos
          créations visuelles.
        </p>
      </div>

      {!canGenerate ? (
        <div className="soft-card p-10 text-zinc-500">
          Veuillez d'abord sélectionner un produit, une catégorie et un secteur
          dans PromptLab pour permettre la génération commerciale.
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="soft-card glow-hover p-5">
              <p className="text-zinc-500 text-sm">Produit</p>
              <p className="text-yellow-400 mt-2 truncate">
                {projectDNA.productType}
              </p>
            </div>

            <div className="soft-card glow-hover p-5">
              <p className="text-zinc-500 text-sm">Catégorie</p>
              <p className="text-yellow-400 mt-2">{projectDNA.category}</p>
            </div>

            <div className="soft-card glow-hover p-5">
              <p className="text-zinc-500 text-sm">Secteur</p>
              <p className="text-yellow-400 mt-2">{projectDNA.sector}</p>
            </div>
          </div>

          <div className="bg-black border border-zinc-800 rounded-3xl p-8 text-zinc-300 leading-8 whitespace-pre-line">
            {generatedOfferText}
          </div>

          <button
            onClick={copyOffer}
            className="px-8 py-4 rounded-2xl bg-yellow-500/15 border border-yellow-500/20 text-yellow-400"
          >
            Copier Hooks Promotionnels
          </button>
        </>
      )}
    </div>
  );
}

export default OfferBooster;