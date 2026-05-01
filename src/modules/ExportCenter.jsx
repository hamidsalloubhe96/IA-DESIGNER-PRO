import { useProject } from "../context/ProjectContext";

function ExportCenter({ showNotification }) {
  const { projectDNA } = useProject();

  const buildExportText = () => {
    return `
================ VISUFORGE AI EXPORT =================

PRODUIT : ${projectDNA.productType || "--"}
DIMENSION : ${projectDNA.dimension || "--"}
CATEGORIE : ${projectDNA.category || "--"}
SECTEUR : ${projectDNA.sector || "--"}
STYLE : ${projectDNA.style || "--"}
TYPOGRAPHIE : ${projectDNA.font || "--"}
PALETTE : ${projectDNA.palette || "--"}
DETAILS PROMO : ${projectDNA.promo || "--"}

---------------- PROMPT RAPIDE ----------------
${projectDNA.prompts.quick || "--"}

---------------- PROMPT PUBLICITAIRE ----------------
${projectDNA.prompts.ad || "--"}

---------------- PROMPT CINEMATIQUE ----------------
${projectDNA.prompts.cinematic || "--"}

---------------- ASSETS SELECTIONNES ----------------
${projectDNA.selectedAssets.length > 0 ? projectDNA.selectedAssets.join(", ") : "--"}
`;
  };

  const copyAll = () => {
    navigator.clipboard.writeText(buildExportText());
    showNotification("success", "Export complet copié");
  };

  const downloadTXT = () => {
    const blob = new Blob([buildExportText()], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "visuforge-ai-export.txt";
    link.click();
    showNotification("success", "Fichier TXT exporté");
  };

  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(projectDNA, null, 2)], {
      type: "application/json",
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "visuforge-ai-project.json";
    link.click();

    showNotification("success", "Projet JSON exporté");
  };

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-zinc-900 to-black border border-yellow-500/10 rounded-3xl p-10">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Centre d'Exportation
        </h2>
        <p className="text-zinc-400 leading-8 max-w-4xl">
          Centre d’export complet du projet créatif : prompts générés, données
          de configuration, assets injectés et sauvegarde intégrale de session.
        </p>
      </div>

      <div className="bg-black border border-zinc-800 rounded-3xl p-8">
        <div className="grid md:grid-cols-3 gap-5">
          <button
            onClick={copyAll}
            className="px-8 py-5 rounded-2xl bg-yellow-500/15 border border-yellow-500/20 text-yellow-400"
          >
            Copier Export Complet
          </button>

          <button
            onClick={downloadTXT}
            className="px-8 py-5 rounded-2xl bg-yellow-500/15 border border-yellow-500/20 text-yellow-400"
          >
            Télécharger TXT
          </button>

          <button
            onClick={downloadJSON}
            className="px-8 py-5 rounded-2xl bg-yellow-500/15 border border-yellow-500/20 text-yellow-400"
          >
            Télécharger JSON Projet
          </button>
        </div>
      </div>

      <div className="bg-black border border-zinc-800 rounded-3xl p-8">
        <h3 className="text-2xl text-yellow-400 mb-5">Aperçu de l’Export</h3>

        <pre className="text-zinc-400 whitespace-pre-wrap text-sm leading-7 overflow-auto">
          {buildExportText()}
        </pre>
      </div>
    </div>
  );
}

export default ExportCenter;