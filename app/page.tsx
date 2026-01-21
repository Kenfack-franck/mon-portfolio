export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-black text-white">
      {/* Header */}
      <header className="p-6 border-b border-gray-700">
        <h1 className="text-4xl font-bold">Franck Kenfack</h1>
        <p className="text-gray-400">Développeur Web Full Stack</p>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-5xl font-bold mb-4">Bienvenue sur mon Portfolio</h2>
        <p className="text-xl text-gray-300 mb-8">
          Je crée des applications web modernes et performantes
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold">
          Voir mes projets
        </button>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <h3 className="text-3xl font-bold mb-10">Mes Projets</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3]. map((item) => (
            <div key={item} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition">
              <h4 className="text-xl font-bold mb-2">Projet {item}</h4>
              <p className="text-gray-400">Description du projet</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center border-t border-gray-700">
        <p className="text-gray-400">© 2026 Franck Kenfack.  Tous droits réservés. </p>
      </footer>
    </div>
  );
}