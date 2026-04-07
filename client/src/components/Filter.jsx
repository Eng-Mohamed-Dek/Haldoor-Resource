import { Palette, Monitor, Code, Video, Camera, Clapperboard } from "lucide-react";
import { Search } from "lucide-react";

const categories = [
  { name: "Graphic Design", icon: Palette, description: "Graphic templates AI, PS, ID and so." },
  { name: "Web Design", icon: Monitor, description: "Premium WordPress templates." },
  { name: "Web Development", icon: Code, description: "HTML, CSS, React to Next.js templates." },
  { name: "Video Editing", icon: Video, description: "Video templates, LUTs and more." },
  { name: "Photography", icon: Camera, description: "LUTs, presets for photo editing." },
  { name: "Videography", icon: Clapperboard, description: "Tools for videography to shoot better." },
];

export default function TemplatesSidebar({ activeCategory, setActiveCategory, search, setSearch }) {
  return (
    <>
      <div className="flex items-center max-w-md gap-2 bg-gray-100 rounded-md px-4 py-2 mb-6">
        <Search className="w-4 h-8 text-gray-400" />
        <input
          type="text"
          placeholder="Search templates"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none text-sm w-full bg-transparent"
        />
      </div>
      <aside className="w-full flex flex-col lg:flex-row gap- items-center flex-shrink-0 bg-white rounded-xl">

        {/* CATEGORY PILL CARDS */}
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`group flex items-center gap-3 p-3 rounded-xl shadow transition hover:bg-gray-50 bg-white border border-gray-400 ${activeCategory === cat.name ? "border-orange bg-orange/10" : "border-0"
                }`}
            >
              <div className="p-2 rounded-full bg-orange text-white group-hover:scale-110 transition-transform">
                <cat.icon className="w-3 h-3" />
              </div>
              <div>
                <p className="font-medium text-gray-800 text-left">{cat.name}</p>
                <p className="text-gray-400 text-sm">{cat.description}</p>
              </div>
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}