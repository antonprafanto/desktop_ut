import { Link } from 'react-router-dom';
import { Clock, BookOpen, ChevronRight } from 'lucide-react';
import { modules } from '../data/modules';

export default function Modules() {
  const levelColors = {
    'Pemula': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Menengah': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    'Lanjutan': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Semua Modul Pembelajaran
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          11 modul terstruktur untuk membawa Anda dari pemula hingga mahir dalam pemrograman desktop Java
        </p>
      </div>

      <div className="grid gap-6">
        {modules.map((module, index) => (
          <Link
            key={module.id}
            to={`/module/${module.slug}`}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 font-bold text-lg">
                    {module.id}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {module.title}
                      </h2>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${levelColors[module.level]}`}>
                        {module.level}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {module.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Clock size={16} className="mr-1" />
                      {module.duration}
                      <span className="mx-3">•</span>
                      <BookOpen size={16} className="mr-1" />
                      {module.topics.length} topik
                    </div>
                  </div>
                </div>
                <ChevronRight className="text-gray-400 flex-shrink-0 ml-4" size={24} />
              </div>

              {/* Topics Preview */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Yang akan dipelajari:
                </h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {module.topics.slice(0, 4).map((topic, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-2" />
                      {topic}
                    </div>
                  ))}
                  {module.topics.length > 4 && (
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      +{module.topics.length - 4} topik lainnya
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Total Pembelajaran
        </h3>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{modules.length}</p>
            <p className="text-gray-600 dark:text-gray-400">Modul</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {modules.reduce((acc, m) => acc + m.topics.length, 0)}
            </p>
            <p className="text-gray-600 dark:text-gray-400">Topik</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">40+</p>
            <p className="text-gray-600 dark:text-gray-400">Jam Belajar</p>
          </div>
        </div>
      </div>
    </div>
  );
}
