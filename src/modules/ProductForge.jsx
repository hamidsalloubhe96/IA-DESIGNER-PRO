import { useProject } from "../context/ProjectContext";
import { productForgeDNA } from "../data/productForgeDNA";
import { dimensionDNA } from "../data/dimensionDNA";

function ProductForge() {
  const { projectDNA, updateDNA } = useProject();

  const activeDimension = projectDNA.productType
    ? dimensionDNA[projectDNA.productType]
    : null;

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-zinc-900 to-black border border-yellow-500/10 rounded-3xl p-10">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">Product Forge</h2>
        <p className="text-zinc-400 leading-8 max-w-4xl">
          Sélectionnez le type exact de création graphique à produire. Le moteur IA ajustera automatiquement dimensions, PromptLab et workflow créatif autour de ce format.
        </p>
      </div>

      {activeDimension && (
        <div className="soft-card glow-hover p-8">
          <h3 className="text-2xl text-yellow-400 mb-5">Produit Actif Sélectionné</h3>
          <div className="grid md:grid-cols-3 gap-6 text-zinc-300">
            <div>
              <p className="text-zinc-500 text-sm mb-2">Produit</p>
              <p>{projectDNA.productType}</p>
            </div>
            <div>
              <p className="text-zinc-500 text-sm mb-2">Dimension recommandée</p>
              <p>{activeDimension.size}</p>
            </div>
            <div>
              <p className="text-zinc-500 text-sm mb-2">Usage</p>
              <p>{activeDimension.usage}</p>
            </div>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-5">
        {productForgeDNA.map((item, i) => {
          const dim = dimensionDNA[item];

          if (!dim) return null;

          return (
            <div
              key={i}
              onClick={() => {
                updateDNA("productType", item);
                updateDNA("visualType", item);
                updateDNA("dimension", dim.size);
              }}
              className={`cursor-pointer rounded-3xl p-6 border transition-all ${
                projectDNA.productType === item
                  ? "bg-yellow-500/15 border-yellow-500/20 text-yellow-400"
                  : "bg-black border-zinc-800 text-zinc-300 hover:border-yellow-500/10"
              }`}
            >
              <h3 className="text-lg font-semibold mb-3">{item}</h3>
              <p className="text-sm text-zinc-500">{dim.size}</p>
              <p className="text-sm text-zinc-500">{dim.ratio}</p>
              <p className="text-xs text-zinc-600 mt-3">{dim.usage}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductForge;