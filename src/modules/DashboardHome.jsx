import { useProject } from "../context/ProjectContext";
import { generateDoctorScore } from "../core/aiContentEngine";

function DashboardHome() {
  const { projectDNA } = useProject();

  const score = generateDoctorScore(projectDNA);

  const statCard = (title, value, subtitle) => (
    <div className="soft-card glow-hover p-6 shadow-xl">
      <h3 className="text-zinc-500 text-sm mb-3">{title}</h3>
      <div className="text-2xl font-bold text-yellow-400 truncate whitespace-nowrap">
        {value}
      </div>
      <p className="text-zinc-500 text-sm mt-2">{subtitle}</p>
    </div>
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

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-zinc-900 to-black border border-yellow-500/10 rounded-3xl p-10">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Centre de Commande Créatif IA
        </h2>
        <p className="text-zinc-400 leading-8 max-w-4xl">
          Supervision globale de votre workflow créatif intelligent, des prompts
          générés, des ressources visuelles sélectionnées et des performances
          qualitatives du projet.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-6">
        {statCard(
          "Produit sélectionné",
          projectDNA.productType || "--",
          "Forge active"
        )}
        {statCard(
          "Catégorie active",
          projectDNA.category || "--",
          "Business principal"
        )}
        {statCard(
          "Secteur actif",
          projectDNA.sector || "--",
          "Sous business"
        )}
        {statCard(
          "Style actif",
          projectDNA.style || "--",
          "Direction artistique"
        )}
        {statCard(
          "Assets choisis",
          projectDNA.selectedAssets.length,
          "Ressources injectées"
        )}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {statCard("Favoris", projectDNA.favorites.length, "Prompts archivés")}
        {statCard("Historique", projectDNA.history.length, "Générations tracées")}
        {statCard("Score Prompt", `${score}%`, "Qualité IA estimée")}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="soft-card glow-hover p-8">
          <h3 className="text-2xl text-yellow-400 mb-6">Santé du Projet</h3>
          <div className="space-y-5">
            {progressBar("Précision métier", projectDNA.sector ? 92 : 20)}
            {progressBar(
              "Cohérence visuelle",
              projectDNA.style && projectDNA.palette ? 88 : 25
            )}
            {progressBar("Puissance prompt", score)}
            {progressBar(
              "Richesse assets",
              Math.min(100, projectDNA.selectedAssets.length * 20)
            )}
          </div>
        </div>

        <div className="soft-card glow-hover p-8">
          <h3 className="text-2xl text-yellow-400 mb-6">Activité IA en direct</h3>
          <div className="space-y-4 text-zinc-300">
            <div>● Semantic Core analyse le contexte métier</div>
            <div>● Prompt Fusion prêt pour génération</div>
            <div>● Recommandations Auto Smart actives</div>
            <div>● Assets Brain synchronisé au secteur</div>
            <div>● IA Doctor surveille la qualité prompt</div>
          </div>
        </div>
      </div>

      <div className="soft-card glow-hover p-8">
        <h3 className="text-2xl text-yellow-400 mb-6">Résumé Projet Actuel</h3>

        <div className="grid md:grid-cols-2 gap-6 text-zinc-300 leading-8">
          <div>
            <p>
              <strong>Produit Forge :</strong> {projectDNA.productType || "--"}
            </p>
            <p>
              <strong>Dimension IA :</strong> {projectDNA.dimension || "--"}
            </p>
            <p>
              <strong>Type de visuel :</strong> {projectDNA.visualType || "--"}
            </p>
            <p>
              <strong>Palette :</strong> {projectDNA.palette || "--"}
            </p>
          </div>

          <div>
            <p>
              <strong>Typographie :</strong> {projectDNA.font || "--"}
            </p>
            <p>
              <strong>Détails promo :</strong> {projectDNA.promo || "--"}
            </p>
            <p>
              <strong>Prompts générés :</strong>{" "}
              {projectDNA.prompts.quick ? "Oui" : "Non"}
            </p>
            <p>
              <strong>Assets injectés :</strong> {projectDNA.selectedAssets.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;