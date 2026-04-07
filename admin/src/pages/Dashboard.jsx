// src/components/Dashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Package, PackageCheck, Box, FileText } from "lucide-react"; // icons

const Dashboard = () => {
  const [templates, setTemplates] = useState([]);
  const API = import.meta.env.VITE_REACT_BACKEND_API;

  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const res = await axios.get(`${API}/templates`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "x-refresh-token": refreshToken
          },
          params: { page: 1, limit: 0 } 
        });
        console.log("API Response:", res.data);
        setTemplates(res.data.templates || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTemplates();
  }, []);

  // stats
  const totalTemplates = templates.length;
  const categoriesCount = templates.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + 1;
    return acc;
  }, {});
  console.log(templates, categoriesCount)

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Templates Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Total Templates */}
        <div className="bg-white p-6 rounded-lg shadow flex items-center space-x-4">
          <FileText className="w-12 h-12 text-blue-500" />
          <div>
            <h2 className="text-gray-500">Total Templates</h2>
            <p className="text-2xl font-bold">{totalTemplates}</p>
          </div>
        </div>

        {/* Templates per category */}
        {Object.entries(categoriesCount).map(([cat, count], idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow flex items-center space-x-4">
            <Package className="w-12 h-12 text-green-500" />
            <div>
              <h2 className="text-gray-500">{cat}</h2>
              <p className="text-2xl font-bold">{count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;