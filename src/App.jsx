import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Modules from './pages/Modules';
import ModuleDetail from './pages/ModuleDetail';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
        <Sidebar isOpen={sidebarOpen} closeSidebar={closeSidebar} />

        <main className="lg:ml-64 pt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/modules" element={<Modules />} />
              <Route path="/module/:slug" element={<ModuleDetail />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer className="lg:ml-64 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p className="mb-2">
                © 2024 Pembelajaran Pemrograman Desktop - Universitas Terbuka
              </p>
              <p className="text-sm">
                Dibuat dengan ❤️ untuk mahasiswa UT
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
