import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Code, Database, Folder, Award } from 'lucide-react';
import { modules } from '../data/modules';

export default function Sidebar({ isOpen, closeSidebar }) {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const menuItems = [
    { path: '/', label: 'Beranda', icon: Home },
    { path: '/modules', label: 'Semua Modul', icon: BookOpen },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <nav className="p-4 space-y-2">
          {/* Menu utama */}
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeSidebar}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}

          {/* Divider */}
          <div className="border-t border-gray-200 dark:border-gray-700 my-4" />

          {/* Daftar Modul */}
          <div className="space-y-1">
            <h3 className="px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Modul Pembelajaran
            </h3>
            {modules.map((module) => (
              <Link
                key={module.id}
                to={`/module/${module.slug}`}
                onClick={closeSidebar}
                className={`flex items-start space-x-3 px-4 py-2.5 rounded-lg transition-colors ${
                  isActive(`/module/${module.slug}`)
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                }`}
              >
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 text-xs font-bold">
                  {module.id}
                </span>
                <span className="text-sm font-medium leading-tight">
                  {module.title}
                </span>
              </Link>
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
}
