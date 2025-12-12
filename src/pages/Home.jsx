import { Link } from 'react-router-dom';
import { BookOpen, Code, Database, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { modules } from '../data/modules';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Belajar Pemrograman Desktop dengan Java
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Platform pembelajaran lengkap untuk mahasiswa Universitas Terbuka.
          Dari zero sampai hero dalam membangun aplikasi desktop profesional menggunakan Java dan NetBeans.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/modules"
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Mulai Belajar
            <ArrowRight className="ml-2" size={20} />
          </Link>
          <Link
            to="/module/pengenalan-setup"
            className="inline-flex items-center justify-center px-8 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg transition-colors"
          >
            Lihat Modul Pertama
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard
          icon={<BookOpen className="text-blue-600 dark:text-blue-400" size={32} />}
          title="11 Modul Lengkap"
          description="Kurikulum terstruktur dari dasar hingga mahir"
        />
        <FeatureCard
          icon={<Code className="text-green-600 dark:text-green-400" size={32} />}
          title="Contoh Code"
          description="Ratusan contoh kode yang bisa langsung dicoba"
        />
        <FeatureCard
          icon={<Database className="text-purple-600 dark:text-purple-400" size={32} />}
          title="Project Real"
          description="Bangun aplikasi CRUD lengkap dengan database"
        />
        <FeatureCard
          icon={<Award className="text-orange-600 dark:text-orange-400" size={32} />}
          title="Zero to Hero"
          description="Cocok untuk pemula, tidak perlu pengalaman"
        />
      </section>

      {/* Learning Path */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Apa yang Akan Kamu Pelajari?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <LearningPathCard
            title="Fundamental Java"
            items={[
              "Sintaks dasar Java dan OOP",
              "Variabel, kondisional, perulangan",
              "Class, Object, Inheritance",
              "Exception handling dan debugging"
            ]}
          />
          <LearningPathCard
            title="GUI Development"
            items={[
              "Java Swing dan NetBeans GUI Builder",
              "Komponen UI (Button, Table, Form)",
              "Event handling dan validasi",
              "Custom styling aplikasi"
            ]}
          />
          <LearningPathCard
            title="Database Integration"
            items={[
              "MySQL dan JDBC",
              "CRUD operations",
              "Koneksi database ke aplikasi",
              "Menampilkan data di JTable"
            ]}
          />
          <LearningPathCard
            title="Deployment"
            items={[
              "Best practices dan design patterns",
              "Membuat file JAR executable",
              "Packaging dengan installer",
              "Project akhir aplikasi lengkap"
            ]}
          />
        </div>
      </section>

      {/* Module Preview */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Mulai dari Modul Ini
          </h2>
          <Link
            to="/modules"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center"
          >
            Lihat Semua
            <ArrowRight className="ml-1" size={18} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.slice(0, 3).map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Siap Memulai Perjalanan Belajarmu?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Bergabunglah dengan ribuan mahasiswa yang sudah belajar pemrograman desktop
        </p>
        <Link
          to="/module/pengenalan-setup"
          className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
        >
          Mulai Modul Pertama
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

function LearningPathCard({ title, items }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={18} />
            <span className="text-gray-700 dark:text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ModuleCard({ module }) {
  const levelColors = {
    'Pemula': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Menengah': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    'Lanjutan': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  };

  return (
    <Link
      to={`/module/${module.slug}`}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all hover:-translate-y-1"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 font-bold">
          {module.id}
        </span>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${levelColors[module.level]}`}>
          {module.level}
        </span>
      </div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
        {module.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
        {module.description}
      </p>
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {module.duration}
      </div>
    </Link>
  );
}
