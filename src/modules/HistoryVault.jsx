import { useProject } from "../context/ProjectContext";

function HistoryVault({ showNotification }) {
  const { projectDNA } = useProject();

  const copyText = (text) => {
    if (!text) return;
    navigator.clipboard.writeText(text);

    if (showNotification) {
      showNotification("info", "Contenu copié");
    }
  };

  return (
    <div className="space-y-10">
      <div className="bg-gradient-to-r from-zinc-900 to-black border border-yellow-500/10 rounded-3xl p-10">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Historique Intelligent
        </h2>
        <p className="text-zinc-400 leading-8 max-w-4xl">
          Retrouvez toutes vos générations précédentes ainsi que vos prompts
          favoris sauvegardés dans le coffre VISUFORGE AI.
        </p>
      </div>

      <div className="bg-gradient-to-br from-zinc-900 to-black border border-yellow-500/10 rounded-3xl p-10 shadow-2xl">
        <h3 className="text-2xl text-yellow-400 mb-8">Historique des Générations</h3>

        {projectDNA.history.length === 0 ? (
          <div className="text-zinc-500">
            Aucun historique disponible pour le moment.
          </div>
        ) : (
          <div className="space-y-6">
            {projectDNA.history.map((item, index) => (
              <div
                key={index}
                className="bg-black border border-zinc-800 rounded-3xl p-6"
              >
                <div className="grid md:grid-cols-2 gap-4 text-sm text-zinc-400 mb-5">
                  <div>Produit : {item.product || "--"}</div>
                  <div>Catégorie : {item.category || "--"}</div>
                  <div>Secteur : {item.sector || "--"}</div>
                  <div>Date : {item.createdAt || "--"}</div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-yellow-400 mb-2">Prompt Rapide</p>
                    <p className="text-zinc-300 leading-7">{item.quick}</p>
                  </div>

                  <div>
                    <p className="text-yellow-400 mb-2">Prompt Publicitaire</p>
                    <p className="text-zinc-300 leading-7">{item.ad}</p>
                  </div>

                  <div>
                    <p className="text-yellow-400 mb-2">Prompt Cinématique</p>
                    <p className="text-zinc-300 leading-7">{item.cinematic}</p>
                  </div>
                </div>

                <button
                  onClick={() => copyText(item.quick)}
                  className="mt-5 px-5 py-2 rounded-2xl bg-yellow-500/15 border border-yellow-500/20 text-yellow-400"
                >
                  Copier Prompt Rapide
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-gradient-to-br from-zinc-900 to-black border border-yellow-500/10 rounded-3xl p-10 shadow-2xl">
        <h3 className="text-2xl text-yellow-400 mb-8">Prompts Favoris</h3>

        {projectDNA.favorites.length === 0 ? (
          <div className="text-zinc-500">Aucun favori sauvegardé.</div>
        ) : (
          <div className="space-y-6">
            {projectDNA.favorites.map((fav, index) => (
              <div
                key={index}
                className="bg-black border border-zinc-800 rounded-3xl p-6"
              >
                <div className="space-y-4">
                  <div>
                    <p className="text-yellow-400 mb-2">Prompt Rapide Favori</p>
                    <p className="text-zinc-300 leading-7">{fav.quick}</p>
                  </div>

                  <div>
                    <p className="text-yellow-400 mb-2">Prompt Publicitaire Favori</p>
                    <p className="text-zinc-300 leading-7">{fav.ad}</p>
                  </div>

                  <div>
                    <p className="text-yellow-400 mb-2">Prompt Cinématique Favori</p>
                    <p className="text-zinc-300 leading-7">{fav.cinematic}</p>
                  </div>
                </div>

                <button
                  onClick={() => copyText(fav.quick)}
                  className="mt-5 px-5 py-2 rounded-2xl bg-yellow-500/15 border border-yellow-500/20 text-yellow-400"
                >
                  Copier Favori
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HistoryVault;