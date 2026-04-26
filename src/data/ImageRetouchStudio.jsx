import { useState } from "react";
import { retouchDNA } from "../data/retouchDNA";

function ImageRetouchStudio() {
  const [retouchType, setRetouchType] = useState("");
  const [intensity, setIntensity] = useState("");
  const [details, setDetails] = useState("");
  const [retouchPrompt, setRetouchPrompt] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (e) => {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const generateRetouch = () => {
    if (!fileName || !retouchType || !intensity || !details) {
      alert("Veuillez remplir tous les champs et importer une image");
      return;
    }

    const dna = retouchDNA[retouchType];

    const finalPrompt = `Retouch this uploaded visual by ${dna}, with ${intensity} intensity. Additional request: ${details}. Preserve the original layout while making the modification highly professional and realistic.`;

    setRetouchPrompt(finalPrompt);
  };

  const copyPrompt = () => {
    navigator.clipboard.writeText(retouchPrompt);
    alert("Prompt copié");
  };

  return (
    <div className="bg-gradient-to-br from-zinc-900 to-black border border-yellow-500/10 rounded-3xl p-10 shadow-2xl">
      <h2 className="text-4xl font-extrabold text-yellow-400 mb-8">
        Studio de Retouche IA
      </h2>

      <div className="border-2 border-dashed border-zinc-700 rounded-3xl p-10 text-center text-zinc-500 mb-8">
        <label className="cursor-pointer px-6 py-3 bg-yellow-500/15 border border-yellow-500/20 rounded-2xl text-yellow-400">
          Télécharger une image
          <input type="file" className="hidden" onChange={handleFileUpload} />
        </label>

        {fileName && (
          <p className="mt-4 text-green-400">Image sélectionnée : {fileName}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <select
          value={retouchType}
          onChange={(e) => setRetouchType(e.target.value)}
          className="p-4 rounded-2xl bg-black border border-zinc-800 text-white"
        >
          <option value="">Choisir une retouche</option>
          <option value="luxe">Rendre plus luxueux</option>
          <option value="texte">Modifier texte / prix</option>
          <option value="produit">Améliorer produit principal</option>
          <option value="fond">Nettoyer arrière-plan</option>
          <option value="premium">Ajouter éléments premium</option>
          <option value="upscale">Upscale HD</option>
        </select>

        <select
          value={intensity}
          onChange={(e) => setIntensity(e.target.value)}
          className="p-4 rounded-2xl bg-black border border-zinc-800 text-white"
        >
          <option value="">Choisir intensité</option>
          <option value="light">Légère</option>
          <option value="medium">Moyenne</option>
          <option value="strong">Forte</option>
        </select>

        <input
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="md:col-span-2 p-4 rounded-2xl bg-black border border-zinc-800 text-white"
          placeholder="Détail personnalisé de la retouche..."
        />
      </div>

      <button
        onClick={generateRetouch}
        className="mt-8 px-8 py-4 rounded-2xl bg-yellow-500/15 border border-yellow-500/20 text-yellow-400"
      >
        Générer le Prompt de Retouche
      </button>

      <div className="mt-10 bg-black border border-zinc-800 rounded-3xl p-6">
        <h3 className="text-yellow-400 mb-3 text-xl">Prompt de Retouche IA</h3>
        <p className="text-zinc-300 leading-8">{retouchPrompt}</p>

        {retouchPrompt && (
          <button
            onClick={copyPrompt}
            className="mt-4 px-5 py-2 bg-zinc-900 rounded-xl text-sm"
          >
            Copier
          </button>
        )}
      </div>
    </div>
  );
}

export default ImageRetouchStudio;