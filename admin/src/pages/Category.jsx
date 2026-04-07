import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const categoryTitles = {
  graphics: "Graphic Design",
  "web-design": "Web Design",
  webdevelopment: "Web Development",
  editing: "Video Editing",
  photography: "Photography",
  videography: "Videography",
};

const Category = () => {
  const { category } = useParams();

  const [templates, setTemplates] = useState([]);

  const title = categoryTitles[category] || "Category";

  const API = import.meta.env.VITE_REACT_BACKEND_API;

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const res = await axios.get(
          `${API}/templates/category/${title}`
        );
        setTemplates(res.data.templates);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTemplates();
  }, [category]);

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">{title}</h1>

      {templates.length === 0 ? (
        <p>No resources found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {templates.map((template) => (
            <div
              key={template._id}
              className="border border-slate-500 rounded-md p-4 shadow-sm hover:shadow-md transition"
            >

              <img
                src={template.avatar}
                alt={template.title}
                className="w-full h-62 object-cover rounded-md mb-3"
              />

              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{template.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {template.description}
                  </p>
                </div>

                <div>
                  <a
                    href={template.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Download
                  </a>
                </div>
              </div>


            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default Category;