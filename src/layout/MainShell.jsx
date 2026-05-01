import { useState } from "react";
import { useProject } from "../context/ProjectContext";

import DashboardHome from "../modules/DashboardHome";
import ProductForge from "../modules/ProductForge";
import PromptLab from "../modules/PromptLab";
import AnalyzerLab from "../modules/AnalyzerLab";
import AssetStudio from "../modules/AssetStudio";
import PaletteStudio from "../modules/PaletteStudio";
import AIPromptDoctor from "../modules/AIPromptDoctor";
import OfferBooster from "../modules/OfferBooster";
import CampaignBuilder from "../modules/CampaignBuilder";
import TypoStudio from "../modules/TypoStudio";
import AIAdvisor from "../modules/AIAdvisor";
import HistoryVault from "../modules/HistoryVault";
import ExportCenter from "../modules/ExportCenter";

function MainShell({ showNotification }) {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { projectDNA } = useProject();

  const menuButton = (key, label, icon) => (
    <button
      onClick={() => setActiveTab(key)}
      className={`w-full flex items-center justify-between px-4 py-4 rounded-2xl transition-all border overflow-hidden ${
        activeTab === key
          ? "bg-yellow-500/15 border-yellow-500/20 text-yellow-400 shadow-lg"
          : "bg-black/50 border-zinc-800 text-zinc-300 hover:border-yellow-500/10 hover:bg-zinc-900"
      }`}
    >
      <div className="flex items-center gap-3 overflow-hidden">
        <span className="text-lg shrink-0">{icon}</span>
        <span className="truncate whitespace-nowrap text-sm font-medium">{label}</span>
      </div>

      {activeTab === key && <span className="text-xs shrink-0">●</span>}
    </button>
  );

  const getTitle = () => {
    if (activeTab === "dashboard") return "Centre de Commande Créatif IA";
    if (activeTab === "forge") return "Forge Produits";
    if (activeTab === "prompt") return "Laboratoire de Prompts IA";
    if (activeTab === "analyzer") return "Laboratoire d'Analyse IA";
    if (activeTab === "assets") return "Studio de Ressources";
    if (activeTab === "palette") return "Studio de Palettes";
    if (activeTab === "doctor") return "Docteur de Prompts";
    if (activeTab === "offer") return "Booster Commercial";
    if (activeTab === "campaign") return "Constructeur de Campagne";
    if (activeTab === "typo") return "Studio Typographique";
    if (activeTab === "advisor") return "Conseiller IA";
    if (activeTab === "history") return "Historique Intelligent";
    if (activeTab === "export") return "Centre d'Export";
    return "VISUFORGE AI";
  };

  const getSubtitle = () => {
    if (activeTab === "dashboard") return "Vue stratégique complète de votre production créative";
    if (activeTab === "forge") return "Choisissez le support visuel idéal à concevoir";
    if (activeTab === "prompt") return "Génération automatique de prompts ultra cohérents";
    if (activeTab === "analyzer") return "Analyse profonde de maturité créative et marketing";
    if (activeTab === "assets") return "Ressources graphiques recommandées selon l'ADN du projet";
    if (activeTab === "palette") return "Palettes chromatiques professionnelles compatibles";
    if (activeTab === "doctor") return "Analyse qualitative et optimisation des prompts";
    if (activeTab === "offer") return "Création de hooks marketing et appels à l'action";
    if (activeTab === "campaign") return "Construction d'une mini campagne multi-visuels";
    if (activeTab === "typo") return "Sélection intelligente des typographies";
    if (activeTab === "advisor") return "Recommandations créatives pilotées par IA";
    if (activeTab === "history") return "Accès aux favoris et aux générations sauvegardées";
    if (activeTab === "export") return "Export rapide vers vos outils de production";
    return "";
  };

  const renderModule = () => {
    if (activeTab === "dashboard") return <DashboardHome />;
    if (activeTab === "forge") return <ProductForge />;
    if (activeTab === "prompt") return <PromptLab showNotification={showNotification} />;
    if (activeTab === "analyzer") return <AnalyzerLab />;
    if (activeTab === "assets") return <AssetStudio showNotification={showNotification} />;
    if (activeTab === "palette") return <PaletteStudio />;
    if (activeTab === "doctor") return <AIPromptDoctor />;
    if (activeTab === "offer") return <OfferBooster showNotification={showNotification} />;
    if (activeTab === "campaign") return <CampaignBuilder />;
    if (activeTab === "typo") return <TypoStudio />;
    if (activeTab === "advisor") return <AIAdvisor />;
    if (activeTab === "history") return <HistoryVault showNotification={showNotification} />;
    if (activeTab === "export") return <ExportCenter showNotification={showNotification} />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black text-white flex">
      <aside className="w-[330px] border-r border-yellow-500/10 bg-black/80 backdrop-blur-2xl p-6 flex flex-col shadow-2xl">
        <div className="overflow-hidden">
          <h1 className="text-2xl font-extrabold text-yellow-400 tracking-wide whitespace-nowrap truncate">
            VISUFORGE AI
          </h1>
          <p className="text-zinc-500 text-sm mt-2">Creative Intelligence Platform</p>
        </div>

        <div className="mt-8 p-5 rounded-3xl bg-zinc-950 border border-yellow-500/10">
          <p className="text-zinc-500 text-sm">Projet actif</p>
          <p className="text-yellow-400 mt-2 truncate whitespace-nowrap">
            {projectDNA.productType || "Aucun produit sélectionné"}
          </p>
          <p className="text-zinc-400 text-sm mt-1 truncate">
            {projectDNA.category || "--"} / {projectDNA.sector || "--"}
          </p>
        </div>

        <div className="mt-8 space-y-3 overflow-auto pr-1">
          {menuButton("dashboard", "Tableau de bord", "🏠")}
          {menuButton("forge", "Forge Produits", "⚡")}
          {menuButton("prompt", "Laboratoire Prompts", "🧠")}
          {menuButton("analyzer", "Analyse IA", "📊")}
          {menuButton("assets", "Studio Ressources", "🎨")}
          {menuButton("palette", "Studio Palettes", "🌈")}
          {menuButton("typo", "Studio Typo", "🔠")}
          {menuButton("doctor", "Docteur Prompts", "🩺")}
          {menuButton("offer", "Booster Commercial", "📣")}
          {menuButton("campaign", "Campagne IA", "📦")}
          {menuButton("advisor", "Conseiller IA", "🤖")}
          {menuButton("history", "Historique", "📚")}
          {menuButton("export", "Exportation", "🚀")}
        </div>

        <div className="mt-auto p-5 rounded-3xl bg-zinc-950 border border-yellow-500/10">
          <p className="text-zinc-500 text-sm live-pulse">État du moteur IA</p>
          <p className="text-green-400 text-sm live-pulse">● Session sauvegardée</p>
          <p className="text-green-400 mt-2 live-pulse">● Noyau sémantique actif</p>
          <p className="text-green-400 text-sm live-pulse">● Fusion prompts active</p>
          <p className="text-green-400 text-sm live-pulse">● Smart Mode activé</p>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-[95px] border-b border-yellow-500/10 px-10 flex items-center justify-between bg-black/50 backdrop-blur-2xl shadow-xl">
          <div className="overflow-hidden">
            <h2 className="text-3xl font-extrabold text-yellow-400 truncate whitespace-nowrap">
              {getTitle()}
            </h2>
            <p className="text-zinc-500 text-sm mt-1 truncate">{getSubtitle()}</p>
          </div>

          <div className="flex gap-4 shrink-0">
            <div className="px-5 py-3 rounded-2xl bg-yellow-500/10 border border-yellow-500/10 text-yellow-400 shadow-lg text-sm">
              Favoris : {projectDNA.favorites.length}
            </div>

            <div className="px-5 py-3 rounded-2xl bg-yellow-500/10 border border-yellow-500/10 text-yellow-400 shadow-lg text-sm">
              Historique : {projectDNA.history.length}
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-10 animate-fadeIn bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.03),transparent_30%)]">
          {renderModule()}
        </main>
      </div>
    </div>
  );
}

export default MainShell;