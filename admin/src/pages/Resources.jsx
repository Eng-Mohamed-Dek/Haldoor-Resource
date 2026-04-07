import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import DataTable from "../components/DataTable";
import ConfirmDialog from "../components/ConfirmDialog";
import SearchInput from "../components/Search";
import Pagination from "../components/Pagination";
import { Download, Edit, Trash2 } from "lucide-react";

export default function Resources() {

  const API = import.meta.env.VITE_REACT_BACKEND_API;

  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  const [templates, setTemplates] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalTemplates, setTotalTemplates] = useState(0);
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const [saving, setSaving] = useState(false);


  
  const categories = [
    "Graphic Design",
    "Web Design",
    "Web Development",
    "Video Editing",
    "Photography",
    "Videography"
  ];
  

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    fileUrl: "",
    avatar: null
  });


  // ---------------- FETCH ----------------
  const fetchTemplates = async () => {
    try {
      const res = await axios.get(`${API}/templates`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "x-refresh-token": refreshToken
        },
        params: { page, limit, search }
      });

      setTemplates(res.data.templates);
      setTotalTemplates(res.data.total);

    } catch (err) {
      toast.error("Error fetching templates");
    }
  };

  useEffect(() => {
    fetchTemplates();
  }, [page, search]);

  // ---------------- HANDLE CHANGE ----------------
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "avatar") {
      setForm({ ...form, avatar: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // ---------------- ADD ----------------
  const openAddModal = () => {
    setEditingTemplate(null);
    setForm({
      title: "",
      description: "",
      category: "",
      fileUrl: "",
      avatar: null
    });
    setShowModal(true);
  };

  // ---------------- EDIT ----------------
  const openEditModal = (template) => {
    setEditingTemplate(template);

    setForm({
      title: template.title,
      description: template.description,
      category: template.category,
      fileUrl: template.fileUrl,
      avatar: null
    });

    setShowModal(true);
  };

  // ---------------- SUBMIT ----------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {

      const formData = new FormData();

      Object.keys(form).forEach((key) => {
        if (key === "avatar") {
          if (form.avatar) formData.append("avatar", form.avatar);
        } else {
          formData.append(key, form[key]);
        }
      });

      if (editingTemplate) {
        await axios.put(`${API}/templates/${editingTemplate._id}`, form, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
            "x-refresh-token": refreshToken
          }
        });

        toast.success("Template updated");

      } else {

        await axios.post(`${API}/templates`, form, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
            "x-refresh-token": refreshToken
          }
        });

        toast.success("Template created");
      }

      fetchTemplates();
      setShowModal(false);

    } catch (err) {
      toast.error(err.response?.data?.message || "Error saving template");
    } finally {
      setSaving(false);
    }
  };

  // ---------------- DELETE ----------------
  const handleDelete = async () => {
    try {

      await axios.delete(`${API}/templates/${deleteTarget._id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "x-refresh-token": refreshToken
        }
      });

      toast.success("Template deleted");

      fetchTemplates();

    } catch (err) {
      toast.error("Delete failed");
    } finally {
      setDeleteTarget(null);
    }
  };

  return (
    <div>
      <div className="flex gap-3 mb-4">
        <SearchInput
          placeholder="Search templates..."
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
        />
        <button
          onClick={openAddModal}
          className="px-5 text-white cursor-pointer py-3 bg-orange rounded-md"
        >
          + Add Template
        </button>

      </div>

      <DataTable
        columns={["Image", "Title", "Category", "Download Url", "Actions"]}
        data={templates?.map((t) => ({

          image: (
            <img
              src={t.avatar}
              className="w-12 h-12 rounded object-cover"
            />
          ),
          title: (
            <div className="flex flex-col gap-3">
              <p className="font-semibold">{t.title}</p>
              <p>{t.description}</p>
            </div>
          ),
          category: t.category,
          download: (
            <a
              href={t.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Download
            </a>
          ),
          actions: (
            <div className="flex gap-3">
              <Edit
                className="w-5 h-5 cursor-pointer text-blue-500"
                onClick={() => openEditModal(t)}
              />
              <Trash2
                className="w-5 h-5 cursor-pointer text-red-500"
                onClick={() => setDeleteTarget(t)}
              />
            </div>
          )

        }))}
      />

      <Pagination
        currentPage={page}
        totalPages={Math.ceil(totalTemplates / limit)}
        onPageChange={(p) => setPage(p)}
      />

      {/* DELETE DIALOG */}
      <ConfirmDialog
        open={!!deleteTarget}
        title="Delete Template"
        message={`Delete ${deleteTarget?.title}?`}
        onCancel={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
      />

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

          <div className="bg-white p-6 rounded-xl w-[500px]">

            <h2 className="text-xl font-bold mb-4">
              {editingTemplate ? "Edit Template" : "Add Template"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">

              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Title"
                className="w-full border border-slate-400 p-2 rounded"
              />

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full border border-slate-400 p-2 rounded"
              />

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-100 outline-none"
                required
              >
                <option value="">Select Category</option>

                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              <input
                name="fileUrl"
                value={form.fileUrl}
                onChange={handleChange}
                placeholder="Download URL"
                className="w-full border border-slate-400 p-2 rounded"
              />

              <input
                type="file"
                name="avatar"
                onChange={handleChange}
              />

              <div className="flex justify-end gap-3">

                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="border border-slate-400 cursor-pointer px-4 py-2 rounded"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-blue text-white cursor-pointer px-4 py-2 rounded"
                >
                  {saving ? "Saving..." : "Save"}
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

    </div>
  );
}