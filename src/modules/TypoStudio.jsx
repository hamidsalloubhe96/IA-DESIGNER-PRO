import { useProject } from "../context/ProjectContext";
import { getSectorDNA } from "../core/semanticCore";
import { typoDNA } from "../data/typoDNA";

function TypoStudio() {
  const { projectDNA, updateDNA } = useProject();

  const sectorDNA = getSectorDNA(projectDNA.category, projectDNA.sector);
  const typoPack = sectorDNA ? typoDNA[sectorDNA.typoFamily] || null : null;

  const allFonts = typoPack ? [...typoPack.title, ...typoPack.cta] : [];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-zinc-900 to-black border border-yellow-500/10 rounded-3xl p-10">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Studio Typographique
        </h2>
        <p className="text-zinc-400 leading-8 max-w-4xl">
          Sélection intelligente des typographies les plus cohérentes selon le
          secteur métier actuellement actif.
        </p>
      </div>

      {!typoPack ? (
        <div className="soft-card p-10 text-zinc-500">
          Choisissez un business dans PromptLab pour voir les typographies
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
              <p className="text-zinc-500 text-sm">Famille Typographique</p>
              <p className="text-yellow-400 mt-2">{sectorDNA.typoFamily}</p>
            </div>

            <div className="soft-card glow-hover p-5">
              <p className="text-zinc-500 text-sm">Police Sélectionnée</p>
              <p className="text-yellow-400 mt-2 truncate">{projectDNA.font || "--"}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {allFonts.map((font, i) => (
              <div
                key={i}
                onClick={() => updateDNA("font", font)}
                className={`rounded-3xl p-6 cursor-pointer transition-all ${
                  projectDNA.font === font
                    ? "bg-yellow-500/10 border border-yellow-500/30"
                    : "bg-black border border-zinc-800 hover:border-yellow-500/20"
                }`}
              >
                <h3 className="text-yellow-400 text-xl mb-3">{font}</h3>

                <p
                  className="text-zinc-300 text-2xl"
                  style={{ fontFamily: font }}
                >
                  Exemple Créatif Premium
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default TypoStudio;