import { Menu } from "lucide-react";

export default function Topbar({ title, onMenuClick, user }) {
  return (
    <header className="bg-white border-b border-slate-300 px-4 py-5  flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="cursor-pointer md:hidden text-gray-600 hover:text-gray-900"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">
          {title}
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex flex-col items-end -mt-2">
          <span className="text-gray-800 ">{user?.name}</span>
          <span className="text-sm text-gray-600 ">{user?.role}</span>
        </div>
      </div>
    </header>
  );
}
