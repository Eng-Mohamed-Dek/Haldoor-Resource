import { useState } from "react";
import Sidebar from "./sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Upload,
  Folder,
  Palette,
  Monitor,
  Code,
  Video,
  Camera,
  Clapperboard
} from "lucide-react";

const menu = [
  { label: "Dashboard", path: "/dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
  { label: "Upload Resources", path: "/upload", icon: <Upload className="w-5 h-5" /> },
  { label: "All Resources", path: "/resources", icon: <Folder className="w-5 h-5" /> },
  { label: "Graphic Design", path: "/graphics", icon: <Palette className="w-5 h-5" /> },
  { label: "Web Design", path: "/web-design", icon: <Monitor className="w-5 h-5" /> },
  { label: "Web Development", path: "/webdevelopment", icon: <Code className="w-5 h-5" /> },
  { label: "Video Editing", path: "/editing", icon: <Video className="w-5 h-5" /> },
  { label: "Photography", path: "/photography", icon: <Camera className="w-5 h-5" /> },
  { label: "Videography", path: "/videography", icon: <Clapperboard className="w-5 h-5" /> },
];

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sticky Sidebar */}
      <div className="sticky top-0 h-screen z-9999999">
        <Sidebar items={menu} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100">
        <Topbar title="Admin Dashboard" onMenuClick={() => setSidebarOpen(true)} />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
