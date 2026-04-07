import { useEffect, useState } from "react";
import axios from "axios";
import { Download } from "lucide-react";
import Filter from "../components/Filter";

const categoryColors = {
  All: "bg-gray-100 text-gray-800",
  "Graphic Design": "bg-[#253C80] text-white",
  "Web Design": "bg-[#EF5324] text-white",
  "Web Development": "bg-blue-500 text-white",
  "Video Editing": "bg-violet-500 text-white",
  Photography: "bg-purple-500 text-white",
  Photography: "bg-pink-500 text-white",
};

export default function TemplatesSection() {
  const API = import.meta.env.VITE_REACT_BACKEND_API;

  const [templates, setTemplates] = useState([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchTemplates = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API}/templates/client`, {
        params: {
          search,
          category: activeCategory === "All" ? "" : activeCategory,
          page,
          limit: 12,
        },
      });

      setTemplates(res.data.templates);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPage(1); // reset page when search/category changes
  }, [search, activeCategory]);

  useEffect(() => {
    fetchTemplates();
  }, [search, activeCategory, page]);

  return (
    <section className="px-4 md:px-16 lg:px-24">
      <div className='mt-20 mb-5 flex flex-col justify-center'>
        <h3 className='text-[32px] font-semibold'>Premium Templates</h3>
        <p className='mt-3 max-w-xs text-gray-500 md:max-w-lg'>get premium templates from our website for free with 1-click download.</p>
      </div>
      <Filter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        search={search}
        setSearch={setSearch}
      />
      {loading ? (
        <div className="text-center mt-12">Loading...</div>
      ) : templates.length === 0 ? (
        <div className="text-center mt-12">No templates found.</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {templates.map((t) => (
              <div
                key={t._id}
                className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
              >
                <img
                  src={t.avatar}
                  alt={t.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 line-clamp-1">
                    {t.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {t.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${categoryColors[t.category] || "bg-gray-100 text-gray-800"
                        }`}
                    >
                      {t.category}
                    </span>

                    <a
                      href={t.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-orange font-medium text-sm hover:underline"
                    >
                      <Download className="size-4" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex items-center justify-center gap-3 mt-10 text-gray-500 font-medium">
            <button type="button" aria-label="prev" className="rounded-full bg-slate-200/50" disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.499 12.85a.9.9 0 0 1 .57.205l.067.06a.9.9 0 0 1 .06 1.206l-.06.066-5.585 5.586-.028.027.028.027 5.585 5.587a.9.9 0 0 1 .06 1.207l-.06.066a.9.9 0 0 1-1.207.06l-.066-.06-6.25-6.25a1 1 0 0 1-.158-.212l-.038-.08a.9.9 0 0 1-.03-.606l.03-.083a1 1 0 0 1 .137-.226l.06-.066 6.25-6.25a.9.9 0 0 1 .635-.263Z" fill="#475569" stroke="#475569" stroke-width=".078" />
              </svg>
            </button>
            <div className="flex items-center gap-2 text-sm font-medium">
              {[...Array(totalPages)].map((_, i) => (
                <button className={`h-10 w-10 flex items-center justify-center aspect-square border border-[#253C80] rounded-full ${page === i + 1 ? "bg-blue text-white" : ""
                  }`} key={i}
                  onClick={() => setPage(i + 1)}>{i + 1}</button>
              ))}
            </div>
            <button type="button" aria-label="next" className="rounded-full bg-slate-200/50" disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}>
              <svg className="rotate-180" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.499 12.85a.9.9 0 0 1 .57.205l.067.06a.9.9 0 0 1 .06 1.206l-.06.066-5.585 5.586-.028.027.028.027 5.585 5.587a.9.9 0 0 1 .06 1.207l-.06.066a.9.9 0 0 1-1.207.06l-.066-.06-6.25-6.25a1 1 0 0 1-.158-.212l-.038-.08a.9.9 0 0 1-.03-.606l.03-.083a1 1 0 0 1 .137-.226l.06-.066 6.25-6.25a.9.9 0 0 1 .635-.263Z" fill="#475569" stroke="#475569" stroke-width=".078" />
              </svg>
            </button>
          </div>
        </>
      )}
    </section>
  );
}