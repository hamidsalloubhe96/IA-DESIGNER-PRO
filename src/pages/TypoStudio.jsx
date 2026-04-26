import { useState } from "react";
import { typoDNA } from "../data/typoDNA";

function TypoStudio() {
  const [category, setCategory] = useState("");
  const [result, setResult] = useState(null);

  const generateTypo = () => {
    if (!category) {
      alert("Veuillez choisir un univers graphique");
      return;
    }

    setResult(typoDNA[category]);
  };

  const copyFonts = () => {
    const text = `
Titres: ${result.title.join(", ")}
Secondaires: ${result.subtitle.join(", ")}
CTA: ${result.cta.join(", ")}
Conseil: ${result.advice}
    `;
    navigator.clipboard.writeText(text);
    alert("Polices copiées");
  };

  return (
    <div className="bg-gradient-to-br from-zinc-900 to-black border border-yellow-500/10 rounded-3xl p-10 shadow-2xl">
      <h2 className="text-4xl font-extrabold text-yellow-400 mb-8">
        Studio de Polices & Typographie
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-4 rounded-2xl bg-black border border-zinc-800 text-white"
        >
          <option value="">Choisir un univers graphique</option>
          <option value="luxe">Luxe Premium</option>
          <option value="cosmetique">Beauté Cosmétique</option>
          <option value="corporate">Corporate Business</option>
          <option value="food">Food Commercial</option>
          <option value="tech">Tech Futuriste</option>
          <option value="sport">Sport Impact</option>
        </select>

        <button
          onClick={generateTypo}
          className="px-8 py-4 rounded-2xl bg-yellow-500/15 border border-yellow-500/20 text-yellow-400"
        >
          Afficher les Recommandations
        </button>
      </div>

      {result && (
        <div className="mt-10 space-y-6">
          <div className="bg-black border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-yellow-400 mb-3 text-xl">Polices Titres</h3>
            <p className="text-zinc-300">{result.title.join(" • ")}</p>
          </div>

          <div className="bg-black border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-yellow-400 mb-3 text-xl">Polices Secondaires</h3>
            <p className="text-zinc-300">{result.subtitle.join(" • ")}</p>
          </div>

          <div className="bg-black border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-yellow-400 mb-3 text-xl">Polices CTA</h3>
            <p className="text-zinc-300">{result.cta.join(" • ")}</p>
          </div>

          <div className="bg-black border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-yellow-400 mb-3 text-xl">Conseil Typographique</h3>
            <p className="text-zinc-300 leading-8">{result.advice}</p>
          </div>

          <button
            onClick={copyFonts}
            className="px-8 py-4 rounded-2xl bg-zinc-900 text-white"
          >
            Copier les Polices
          </button>
        </div>
      )}
    </div>
  );
}

export default TypoStudio;