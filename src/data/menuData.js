import {
  LayoutDashboard,
  Wand2,
  ImagePlus,
  Type,
  Boxes,
  ScanSearch,
  Archive,
  History,
  Download,
} from "lucide-react";

export const menuItems = [
  { id: "dashboard", label: "Tableau de bord", icon: LayoutDashboard },
  { id: "generator", label: "Générateur rapide", icon: Wand2 },
  { id: "retouch", label: "Studio de retouche d'images", icon: ImagePlus },
  { id: "typo", label: "Studio de polices et typographie", icon: Type },
  { id: "assets", label: "Bibliothèque de ressources", icon: Boxes },
  { id: "analyzer", label: "IA d'analyse de conception", icon: ScanSearch },
  { id: "vault", label: "Coffre-fort de modèles d'invites", icon: Archive },
  { id: "history", label: "Historique et favoris", icon: History },
  { id: "export", label: "Centre d'exportation", icon: Download },
];