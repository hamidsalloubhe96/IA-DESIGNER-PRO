import { menuItems } from "../data/menuData";

function Sidebar({ activePage, setActivePage }) {
  return (
    <div className="w-[380px] bg-black border-r border-yellow-500/10 min-h-screen p-8">
      <h1 className="text-4xl font-extrabold text-yellow-400 leading-tight">
        CHERIF IA
        <br />
        DESIGNER PRO
      </h1>

      <p className="text-zinc-500 mt-4 mb-12">Station de travail graphique IA</p>

      <div className="space-y-5">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center gap-4 px-5 py-6 rounded-2xl text-left transition ${
                activePage === item.id
                  ? "bg-yellow-500/15 text-yellow-400"
                  : "text-white hover:bg-zinc-900"
              }`}
            >
              <Icon size={22} />
              <span className="text-lg">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;