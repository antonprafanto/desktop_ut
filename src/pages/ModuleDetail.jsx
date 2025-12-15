import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, BookOpen } from 'lucide-react';
import { modules } from '../data/modules';
import { module1Content } from '../data/module1';
import { module2Content } from '../data/module2';
import { module3Content } from '../data/module3';
import { module4Content } from '../data/module4';
import { module5Content } from '../data/module5';
import { module6Content } from '../data/module6';
import { module7Content } from '../data/module7';
import { module8Content } from '../data/module8';
import { module9Content } from '../data/module9';
import { module10Content } from '../data/module10';
import { module11Content } from '../data/module11';
import CodeBlock from '../components/CodeBlock';

const moduleContents = {
  'pengenalan-setup': module1Content,
  'dasar-java': module2Content,
  'method-function': module3Content,
  'oop': module4Content,
  'gui-dasar': module5Content,
  'gui-lanjutan': module6Content,
  'database': module7Content,
  'file-handling': module8Content,
  'exception-debugging': module9Content,
  'best-practices': module10Content,
  'project-akhir': module11Content,
};

export default function ModuleDetail() {
  const { slug } = useParams();
  const module = modules.find((m) => m.slug === slug);
  const content = moduleContents[slug];

  if (!module) {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Modul tidak ditemukan
        </h1>
        <Link to="/modules" className="text-blue-600 hover:underline">
          Kembali ke daftar modul
        </Link>
      </div>
    );
  }

  // Find prev and next modules
  const currentIndex = modules.findIndex((m) => m.slug === slug);
  const prevModule = currentIndex > 0 ? modules[currentIndex - 1] : null;
  const nextModule = currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null;

  const levelColors = {
    'Pemula': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Menengah': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    'Lanjutan': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">
          Beranda
        </Link>
        <span>/</span>
        <Link to="/modules" className="hover:text-blue-600 dark:hover:text-blue-400">
          Modul
        </Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-white">Modul {module.id}</span>
      </nav>

      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 font-bold text-lg">
            {module.id}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${levelColors[module.level]}`}>
            {module.level}
          </span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {module.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          {module.description}
        </p>

        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <Clock size={18} className="mr-2" />
            {module.duration}
          </div>
          <div className="flex items-center">
            <BookOpen size={18} className="mr-2" />
            {module.topics.length} topik
          </div>
        </div>
      </div>

      {/* Content */}
      {content ? (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 mb-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {content.sections.map((section, index) => (
              <div key={section.id} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">
                    {index + 1}.
                  </span>
                  {section.title}
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>

                {section.code && (
                  <CodeBlock
                    code={section.code.content || section.code.code}
                    language={section.code.language}
                    filename={section.code.filename}
                  />
                )}

                {(section.afterCode || section.additionalContent) && (
                  <div
                    className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4"
                    dangerouslySetInnerHTML={{ __html: section.afterCode || section.additionalContent }}
                  />
                )}

                {(section.code2 || section.additionalCode) && (
                  <CodeBlock
                    code={(section.code2?.content || section.code2?.code) || (section.additionalCode?.content || section.additionalCode?.code)}
                    language={(section.code2?.language) || (section.additionalCode?.language)}
                    filename={(section.code2?.filename) || (section.additionalCode?.filename)}
                  />
                )}

                {(section.afterCode2 || section.additionalContent2) && (
                  <div
                    className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4"
                    dangerouslySetInnerHTML={{ __html: section.afterCode2 || section.additionalContent2 }}
                  />
                )}

                {section.additionalCode2 && (
                  <CodeBlock
                    code={section.additionalCode2.content || section.additionalCode2.code}
                    language={section.additionalCode2.language}
                    filename={section.additionalCode2.filename}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-8 mb-8">
          <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-200 mb-2">
            Konten Dalam Pengembangan
          </h3>
          <p className="text-yellow-800 dark:text-yellow-300">
            Materi untuk modul ini sedang dalam proses pembuatan. Silakan cek modul lain atau kembali lagi nanti!
          </p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center gap-4">
        {prevModule ? (
          <Link
            to={`/module/${prevModule.slug}`}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg transition-colors flex-1"
          >
            <ArrowLeft size={20} />
            <div className="text-left">
              <div className="text-xs text-gray-600 dark:text-gray-400">Sebelumnya</div>
              <div className="font-semibold text-gray-900 dark:text-white">
                {prevModule.title}
              </div>
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {nextModule ? (
          <Link
            to={`/module/${nextModule.slug}`}
            className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex-1 text-right"
          >
            <div className="text-right flex-1">
              <div className="text-xs opacity-90">Selanjutnya</div>
              <div className="font-semibold">{nextModule.title}</div>
            </div>
            <ArrowRight size={20} />
          </Link>
        ) : (
          <Link
            to="/modules"
            className="flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            <span className="font-semibold">Selesai! Lihat Semua Modul</span>
            <ArrowRight size={20} />
          </Link>
        )}
      </div>
    </div>
  );
}
