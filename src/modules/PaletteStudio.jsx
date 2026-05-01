import { useProject } from "../context/ProjectContext";
import { getSectorDNA } from "../core/semanticCore";
import { paletteDNA } from "../data/paletteDNA";

function PaletteStudio() {
  const { projectDNA, updateDNA } = useProject();

  const sectorDNA = getSectorDNA(projectDNA.category, projectDNA.sector);
  const palettes = sectorDNA ? paletteDNA[sectorDNA.paletteFamily] || [] : [];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-zinc-900 to-black border border-yellow-500/10 rounded-3xl p-10">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Studio de Palettes
        </h2>
        <p className="text-zinc-400 leading-8 max-w-4xl">
          Sélection intelligente de palettes chromatiques recommandées selon le
          secteur métier actuellement synchronisé.
        </p>
      </div>

      {palettes.length === 0 ? (
        <div className="soft-card p-10 text-zinc-500">
          Choisissez un business dans PromptLab pour voir les palettes IA
          recommandées.
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="soft-card glow-hover p-5">
              <p className="text-zinc-500 text-sm">Secteur Actif</p>
              <p className="text-yellow-400 mt-2">{projectDNA.sector || "--"}</p>
            </div>

            <div className="soft-card glow-hover p-5">
              <p className="text-zinc-500 text-sm">Famille Palette</p>
              <p className="text-yellow-400 mt-2">{sectorDNA.paletteFamily}</p>
            </div>

            <div className="soft-card glow-hover p-5">
              <p className="text-zinc-500 text-sm">Palette Sélectionnée</p>
              <p className="text-yellow-400 mt-2">{projectDNA.palette || "--"}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {palettes.map((pal, i) => (
              <div
                key={i}
                onClick={() => updateDNA("palette", pal.name)}
                className={`rounded-3xl p-6 cursor-pointer transition-all ${
                  projectDNA.palette === pal.name
                    ? "bg-yellow-500/10 border border-yellow-500/30"
                    : "bg-black border border-zinc-800 hover:border-yellow-500/20"
                }`}
              >
                <h3 className="text-yellow-400 text-xl mb-4">{pal.name}</h3>

                <div className="flex gap-3 flex-wrap">
                  {pal.colors.map((clr, x) => (
                    <div
                      key={x}
                      className="w-14 h-14 rounded-full border border-zinc-700"
                      style={{ backgroundColor: clr }}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default PaletteStudio;