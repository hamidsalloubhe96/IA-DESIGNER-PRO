import { useMemo, useState } from "react";
import { useProject } from "../context/ProjectContext";
import { visualContextAI } from "../core/visualContextAI";
import { sectorMasterDNA } from "../data/sectorMasterDNA";
import { detectVisualIntent } from "../core/detectVisualIntent";
import { autoCreativePreset } from "../core/autoCreativePreset";
import VisualIntentAnalyzer from "../components/VisualIntentAnalyzer";
import VisualOrbLoader from "../components/VisualOrbLoader";
import CreativeRecommendationPanel from "../components/CreativeRecommendationPanel";
import {
  generatePromptVariations,
  improvePrompt,
  generateCreativeAngles,
} from "../core/finalIntelligence";
import { generateBusinessPrompts } from "../core/promptFusion";

function PromptBox({ title, content, copyPrompt }) {
  return (
    <div className="soft-card glow-hover p-6 shadow-xl">
      <h3 className="text-yellow-400 mb-3 text-xl">{title}</h3>
      <p className="text-zinc-300 leading-8 break-words">{content}</p>
      {content && (
        <button
          onClick={() => copyPrompt(content)}
          className="mt-4 px-5 py-2 rounded-2xl bg-yellow-500/15 border border-yellow-500/20 text-yellow-400"
        >
          Copier
        </button>
      )}
    </div>
  );
}

function PromptLab({ showNotification }) {
  const {
    projectDNA,
    updateDNA,
    updatePrompts,
    addFavorite,
    resetDNA,
    pushHistory,
  } = useProject();

  const [userIntent, setUserIntent] = useState("");
  const [analysisDone, setAnalysisDone] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [variations, setVariations] = useState([]);
  const [improvedPrompt, setImprovedPrompt] = useState("");
  const [angles, setAngles] = useState([]);

  const contextConfig = visualContextAI[projectDNA.visualType] || null;

  const sectorOptions = contextConfig?.sectors
    ? contextConfig.sectors.map((key) => sectorMasterDNA[key]).filter(Boolean)
    : [];

  const masterSector = projectDNA.sector
    ? sectorMasterDNA[projectDNA.sector] || null
    : null;

  const smartCategory = masterSector ? masterSector.parent : "";

  const styleOptions = masterSector ? masterSector.styles : [];
  const typoPack = masterSector ? masterSector.typos : [];
  const palettePack = masterSector ? masterSector.palettes : [];

  const selectedPaletteObject = useMemo(() => {
    return palettePack.find((p) => p.name === projectDNA.palette);
  }, [projectDNA.palette, palettePack]);

  const runAnalysisAnimation = (callback) => {
    setIsAnalyzing(true);
    setAnalysisDone(false);
    setAnalysisStep(0);

    setTimeout(() => setAnalysisStep(1), 500);
    setTimeout(() => setAnalysisStep(2), 1000);
    setTimeout(() => setAnalysisStep(3), 1600);
    setTimeout(() => setAnalysisStep(4), 2200);

    setTimeout(() => {
      callback();
      setIsAnalyzing(false);
      setAnalysisDone(true);
    }, 2800);
  };

  const handleIntentAnalysis = () => {
    if (!userIntent.trim()) {
      showNotification("error", "Décrivez d'abord le visuel souhaité");
      return;
    }

    const detected = detectVisualIntent(userIntent);

    runAnalysisAnimation(() => {
      updateDNA("visualType", detected.visualType);
      updateDNA("productType", detected.productType);
      updateDNA("dimension", detected.dimension);
      updateDNA("sector", detected.sector);

      const preset = autoCreativePreset(detected.sector, detected.suggestedStyle);

      updateDNA("style", preset.style);
      updateDNA("font", preset.font);
      updateDNA("palette", preset.palette);

      showNotification("success", "Analyse intelligente terminée");
    });
  };

  const handleGenerate = () => {
    if (!projectDNA.visualType || !projectDNA.sector || !projectDNA.style) {
      showNotification("error", "Analysez d'abord votre besoin");
      return;
    }

    const finalDNA = {
      ...projectDNA,
      category: smartCategory,
      promo: userIntent || projectDNA.promo,
    };

    const result = generateBusinessPrompts(finalDNA);

    if (!result) {
      showNotification("error", "Impossible de générer les prompts");
      return;
    }

    setIsGenerating(true);
    setVariations([]);
    setImprovedPrompt("");
    setAngles([]);

    setTimeout(() => {
      updatePrompts(result.quickPrompt, result.adPrompt, result.cinematicPrompt);

      pushHistory({
        product: projectDNA.productType,
        category: smartCategory,
        sector: projectDNA.sector,
        quick: result.quickPrompt,
        ad: result.adPrompt,
        cinematic: result.cinematicPrompt,
        createdAt: new Date().toLocaleString(),
      });

      setIsGenerating(false);
      showNotification("success", "Prompts intelligents générés");
    }, 700);
  };

  const handleVariations = () => {
    if (!projectDNA.prompts.quick) {
      showNotification("error", "Générez d'abord un prompt principal");
      return;
    }
    setVariations(generatePromptVariations(projectDNA.prompts.quick));
    showNotification("success", "Variations IA générées");
  };

  const handleImprove = () => {
    if (!projectDNA.prompts.quick) {
      showNotification("error", "Aucun prompt à améliorer");
      return;
    }
    setImprovedPrompt(improvePrompt(projectDNA.prompts.quick));
    showNotification("success", "Prompt optimisé");
  };

  const handleAngles = () => {
    if (!projectDNA.prompts.quick) {
      showNotification("error", "Aucun prompt généré");
      return;
    }

    setAngles(
      generateCreativeAngles({
        ...projectDNA,
        category: smartCategory,
      })
    );

    showNotification("success", "Angles créatifs générés");
  };

  const handleFullReset = () => {
    resetDNA();
    setUserIntent("");
    setAnalysisDone(false);
    setIsAnalyzing(false);
    setAnalysisStep(0);
    setVariations([]);
    setImprovedPrompt("");
    setAngles([]);
    showNotification("success", "Laboratoire réinitialisé");
  };

  const copyPrompt = (text) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    showNotification("info", "Prompt copié");
  };

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-zinc-900 to-black border border-yellow-500/10 rounded-3xl p-10">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">
          PromptLab IA Intelligent
        </h2>
        <p className="text-zinc-400 leading-8 max-w-4xl">
          Décrivez simplement votre besoin graphique, VISUFORGE construit automatiquement la meilleure configuration créative.
        </p>
      </div>

      <VisualIntentAnalyzer
        userIntent={userIntent}
        setUserIntent={setUserIntent}
        handleIntentAnalysis={handleIntentAnalysis}
        projectDNA={projectDNA}
        masterSector={masterSector}
      />

      {isAnalyzing && <VisualOrbLoader analysisStep={analysisStep} />}

      {analysisDone && !isAnalyzing && (
        <CreativeRecommendationPanel
          projectDNA={projectDNA}
          sectorOptions={sectorOptions}
          styleOptions={styleOptions}
          typoPack={typoPack}
          palettePack={palettePack}
          selectedPaletteObject={selectedPaletteObject}
          updateDNA={updateDNA}
          handleGenerate={handleGenerate}
          handleVariations={handleVariations}
          handleImprove={handleImprove}
          handleAngles={handleAngles}
          addFavorite={addFavorite}
          handleFullReset={handleFullReset}
          isGenerating={isGenerating}
        />
      )}

      <div className="space-y-6">
        <PromptBox title="Prompt Rapide" content={projectDNA.prompts.quick} copyPrompt={copyPrompt} />
        <PromptBox title="Prompt Publicitaire" content={projectDNA.prompts.ad} copyPrompt={copyPrompt} />
        <PromptBox title="Prompt Cinématique" content={projectDNA.prompts.cinematic} copyPrompt={copyPrompt} />
      </div>

      {variations.length > 0 && (
        <div className="soft-card p-6 space-y-4">
          <h3 className="text-yellow-400 text-2xl">Moteur de Variations IA</h3>
          {variations.map((v, i) => (
            <p key={i} className="text-zinc-300 leading-8">{v}</p>
          ))}
        </div>
      )}

      {improvedPrompt && (
        <div className="soft-card p-6">
          <h3 className="text-yellow-400 text-2xl mb-4">Optimisation Intelligente</h3>
          <p className="text-zinc-300 leading-8">{improvedPrompt}</p>
        </div>
      )}

      {angles.length > 0 && (
        <div className="soft-card p-6 space-y-4">
          <h3 className="text-yellow-400 text-2xl">Suggestions d'Angles Créatifs</h3>
          {angles.map((a, i) => (
            <p key={i} className="text-zinc-300">{a}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default PromptLab;