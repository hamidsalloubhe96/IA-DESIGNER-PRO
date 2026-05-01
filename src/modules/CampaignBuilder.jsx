import { useProject } from "../context/ProjectContext";
import { generateCampaignSequence } from "../core/aiContentEngine";

function CampaignBuilder() {
  const { projectDNA } = useProject();

  const canGenerate =
    projectDNA.productType && projectDNA.category && projectDNA.sector;

  const campaign = canGenerate ? generateCampaignSequence(projectDNA) : [];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-zinc-900 to-black border border-yellow-500/10 rounded-3xl p-10">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Constructeur de Campagne
        </h2>
        <p className="text-zinc-400 leading-8 max-w-4xl">
          Séquence marketing recommandée par l’intelligence VISUFORGE afin de
          décliner votre produit en plusieurs visuels publicitaires cohérents.
        </p>
      </div>

      {!canGenerate ? (
        <div className="soft-card p-10 text-zinc-500">
          Veuillez d'abord configurer un produit, une catégorie et un secteur
          afin de permettre la construction de campagne.
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

          <div className="space-y-5">
            {campaign.map((step, i) => (
              <div
                key={i}
                className="bg-black border border-zinc-800 rounded-2xl p-6 text-zinc-300"
              >
                <span className="text-yellow-400 font-bold mr-3">
                  Étape {i + 1} :
                </span>
                {step}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CampaignBuilder;