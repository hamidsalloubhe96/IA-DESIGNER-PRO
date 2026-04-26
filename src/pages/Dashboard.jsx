import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <div>
      <div className="mb-10 bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/10 rounded-3xl p-8">
        <h2 className="text-5xl font-extrabold text-yellow-400 mb-3">
          CHERIF IA DESIGNER PRO
        </h2>
        <p className="text-zinc-400 text-lg">
          Plateforme premium de génération graphique, retouche IA et analyse visuelle marketing.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-white mb-6">Dashboard Analytics</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Projects Generated" value="024" />
        <StatCard title="Retouch Requests" value="013" />
        <StatCard title="Saved Templates" value="041" />
        <StatCard title="Favorite Fonts" value="017" />
        <StatCard title="Assets Downloaded" value="032" />
        <StatCard title="AI Analyses" value="009" />
      </div>
    </div>
  );
}

export default Dashboard;