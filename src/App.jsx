import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import PromptGenerator from "./pages/PromptGenerator";
import ImageRetouchStudio from "./pages/ImageRetouchStudio";
import AssetsLibrary from "./pages/AssetsLibrary";
import Placeholder from "./pages/Placeholder";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  const [smartData, setSmartData] = useState({
    visualType: "",
    category: "",
    sector: "",
    style: "",
    font: "",
    palette: "",
    promo: "",
    quickPrompt: "",
    adPrompt: "",
    cinePrompt: "",
    favorites: []
  });

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;

      case "generator":
        return (
          <PromptGenerator
            smartData={smartData}
            setSmartData={setSmartData}
          />
        );

      case "retouch":
        return <ImageRetouchStudio />;

      case "typo":
        return <Placeholder title="Module en construction..." />;

      case "assets":
        return <AssetsLibrary smartData={smartData} />;

      case "analyzer":
        return <Placeholder title="Module en construction..." />;

      case "vault":
        return <Placeholder title="Module en construction..." />;

      case "history":
        return <Placeholder title="Module en construction..." />;

      case "export":
        return <Placeholder title="Module en construction..." />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex bg-black min-h-screen text-white">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 p-8">{renderPage()}</div>
    </div>
  );
}

export default App;