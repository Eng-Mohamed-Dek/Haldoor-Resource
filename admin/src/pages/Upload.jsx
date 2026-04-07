import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Upload = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    fileUrl: "",
    avatar: null
  });

  const categories = [
    "Graphic Design",
    "Web Design",
    "Web Development",
    "Video Editing",
    "Photography",
    "Videography"
  ];

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "avatar") {
      setFormData((prev) => ({
        ...prev,
        avatar: files[0]
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("fileUrl", formData.fileUrl);
    data.append("avatar", formData.avatar);

    try {
      setLoading(true);

      const API = import.meta.env.VITE_REACT_BACKEND_API;
      const token = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      await axios.post(`${API}/templates`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
          "x-refresh-token": refreshToken
        }
      });

      toast.success("Template uploaded successfully");

      setFormData({
        title: "",
        description: "",
        category: "",
        fileUrl: "",
        avatar: null
      });

    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-white z-10 w-full max-w-md p-8 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-gray-900 text-2xl font-semibold mb-6 text-center">
        Upload Template
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <input
          type="text"
          name="title"
          placeholder="Template Title"
          className="p-3 rounded-xl bg-gray-100 outline-none"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Template Description"
          className="p-3 rounded-xl bg-gray-100 outline-none"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="p-3 rounded-xl bg-gray-100 outline-none"
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
          type="text"
          name="fileUrl"
          placeholder="Download URL"
          className="p-3 rounded-xl bg-gray-100 outline-none"
          value={formData.fileUrl}
          onChange={handleChange}
          required
        />

        {/* FILE INPUT */}
        <input
          type="file"
          name="avatar"
          accept="image/*"
          className="p-2 bg-gray-100 rounded-xl"
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={loading}
          className="cursor-pointer mt-2 w-full h-11 rounded-full text-white bg-orange hover:bg-indigo-500 transition"
        >
          {loading ? "Uploading..." : "Upload Template"}
        </button>

      </form>
    </div>
  );
};

export default Upload;