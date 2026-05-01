import { createContext, useContext, useState, useEffect } from "react";

const defaultDNA = {
  visualType: "",
  productType: "",
  dimension: "",
  category: "",
  sector: "",
  style: "",
  font: "",
  palette: "",
  promo: "",
  selectedAssets: [],
  prompts: {
    quick: "",
    ad: "",
    cinematic: ""
  },
  favorites: [],
  history: [],
  analysis: {}
};

const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [projectDNA, setProjectDNA] = useState(() => {
    try {
      const saved = localStorage.getItem("cherif_ia_project");
      try {
      return saved ? JSON.parse(saved) : defaultDNA;
      } catch {
      return defaultDNA;
     }
    } catch {
      return defaultDNA;
    }
  });

  useEffect(() => {
    localStorage.setItem("cherif_ia_project", JSON.stringify(projectDNA));
  }, [projectDNA]);

  const updateDNA = (field, value) => {
    setProjectDNA((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const updatePrompts = (quick, ad, cinematic) => {
    setProjectDNA((prev) => ({
      ...prev,
      prompts: {
        quick,
        ad,
        cinematic
      }
    }));
  };

  const addAsset = (injectText) => {
    setProjectDNA((prev) => {
      const exists = prev.selectedAssets.includes(injectText);

      return {
        ...prev,
        selectedAssets: exists
          ? prev.selectedAssets.filter((a) => a !== injectText)
          : [...prev.selectedAssets, injectText]
      };
    });
  };

  const addFavorite = () => {
    setProjectDNA((prev) => ({
      ...prev,
      favorites: [
        ...prev.favorites,
        {
          quick: prev.prompts.quick,
          ad: prev.prompts.ad,
          cinematic: prev.prompts.cinematic
        }
      ]
    }));
  };

  const pushHistory = (entry) => {
    setProjectDNA((prev) => ({
      ...prev,
      history: [entry, ...prev.history]
    }));
  };

  const resetDNA = () => {
    setProjectDNA(defaultDNA);
    localStorage.removeItem("cherif_ia_project");
  };

  return (
    <ProjectContext.Provider
      value={{
        projectDNA,
        updateDNA,
        updatePrompts,
        addAsset,
        addFavorite,
        pushHistory,
        resetDNA
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export const useProject = () => useContext(ProjectContext);