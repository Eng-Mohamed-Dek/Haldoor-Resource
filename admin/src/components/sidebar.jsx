import { NavLink } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function Sidebar({ items, open, onClose }) {
  const [collapsed, setCollapsed] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState({}); // track which submenu is open

  const toggleSubmenu = (label) => {
    setOpenSubmenu(prev => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <>
      {open && <div onClick={onClose} className="fixed inset-0 bg-black/40 z-40 md:hidden" />}

      <aside
        className={`
          fixed md:static z-50 top-0 left-0 h-screen bg-white border-r border-slate-300
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
          flex flex-col ${collapsed ? "w-20" : "w-64"}
        `}
      >
        {/* Logo */}
        <div className={`flex flex-col md:flex-row justify-center items-center ${collapsed ? "items-center" : "items-start"} sticky top-0 bg-white z-10`}>
          <img src="/logo.png" alt="Logo" className={`${collapsed ? "w-0" : "h-25"} cursor-pointer pt-2`} />
          <div className="hidden md:flex justify-end pt-10">
            <button onClick={() => setCollapsed(!collapsed)} className="cursor-pointer text-gray-600 hover:bg-gray-100 rounded transition">
              {collapsed ? <ChevronRight size={25} /> : <ChevronLeft size={25} />}
            </button>
          </div>
          <div className="md:hidden flex justify-end absolute right-5">
            <button onClick={onClose}><X className="cursor-pointer w-6 h-6 text-gray-600" /></button>
          </div>
        </div>

        {/* Navigation */}
        <div className={`flex-1 flex flex-col overflow-y-auto transition-all duration-300 ${collapsed ? "px-2" : "px-3"}`}>
          <nav className="flex flex-col space-y-2 mt-4">
            {items.map(item => (
              <div key={item.label}>
                {!item.submenu ? (
                  <NavLink
                    to={item.path}
                    end
                    onClick={onClose}
                    className={({ isActive }) => `
                      flex items-center gap-3 rounded-md transition-colors duration-200
                      ${isActive ? "bg-blue-100 text-blue-600 font-medium" : "text-gray-700 hover:bg-gray-100"}
                      ${collapsed ? "p-2 justify-center" : "px-4 py-2.5"}
                    `}
                    title={collapsed ? item.label : undefined}
                  >
                    {item.icon && <span className="w-5 h-5 flex justify-center">{item.icon}</span>}
                    {!collapsed && <span className="text-sm">{item.label}</span>}
                  </NavLink>
                ) : (
                  // Submenu
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className={`flex items-center justify-between w-full rounded-md transition-colors duration-200
                        text-gray-700 hover:bg-gray-100 ${collapsed ? "p-2 justify-center" : "px-4 py-2.5"}`}
                    >
                      <div className="flex items-center gap-3 cursor-pointer">
                        {item.icon && <span className="w-5 h-5 flex justify-center">{item.icon}</span>}
                        {!collapsed && <span className="text-sm cursor-pointer">{item.label}</span>}
                      </div>
                      {!collapsed && (openSubmenu[item.label] ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
                    </button>
                    {!collapsed && openSubmenu[item.label] && (
                      <div className="ml-8 mt-1 flex flex-col space-y-1">
                        {item.submenu.map(sub => (
                          <NavLink
                            key={sub.path}
                            to={sub.path}
                            onClick={onClose}
                            className={({ isActive }) => `
                              flex items-center gap-3 rounded-md transition-colors duration-200
                              ${isActive ? "bg-blue-100 text-blue-600 font-medium" : "text-gray-600 hover:bg-gray-50"}
                              px-4 py-3
                            `}
                          >
                            <span className="text-sm">{sub.label}</span>
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Logout */}
            <button
              onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                window.location.href = "/admin-login";
              }}
              className={`mt-4 cursor-pointer border border-red-200 text-center text-red-600 hover:bg-red-100 rounded-md transition text-sm ${collapsed ? "py-2 px-1" : "py-2.5 px-4"}`}
              title={collapsed ? "Logout" : undefined}
            >
              {!collapsed ? "Logout Account" : <X className="mx-auto" />}
            </button>
          </nav>
        </div>
      </aside>
    </>
  );
}