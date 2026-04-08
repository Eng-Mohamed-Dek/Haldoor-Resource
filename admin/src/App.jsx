import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import Dashboard from "./pages/Dashboard";
import Resources from "./pages/Resources";
import Category from "./pages/Category";
import Upload from "./pages/Upload";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>

        {/* login route */}
        <Route path="/admin-login" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        {/* protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<NotFound />} />
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="resources" element={<Resources />} />
            <Route path="upload" element={<Upload />} />
            <Route path=":category" element={<Category />} />
          </Route>
        </Route>

      </Routes>
    </>
  );
};

export default App;