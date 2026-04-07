import { Search } from "lucide-react";

const categories = [
  "All",
  "Graphic Design",
  "Web Design",
  "Web Development",
  "Video Editing",
  "Photography",
  "Videography"
];

export default function TemplatesFilters({
  activeCategory,
  setActiveCategory,
  search,
  setSearch
}) {
  return (
    <div className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-4 bg-gray-100 rounded-full px-4 py-3">
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition
              
              ${
                activeCategory === cat
                  ? "bg-orange text-white"
                  : "bg-white text-gray-600 hover:bg-gray-200"
              }
              
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 w-full lg:w-72 border border-gray-200">
        <Search className="size-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search templates"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none text-sm w-full"
        />
      </div>

    </div>
  );
}