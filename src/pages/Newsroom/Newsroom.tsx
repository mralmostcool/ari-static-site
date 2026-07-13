export function Newsroom() {
  const articles = [
    {
      title: 'ARI Announces DevSuite CLI v4 Release',
      category: 'Product Updates',
      date: 'July 10, 2026',
      readTime: '3 min read',
      snippet: 'Introducing hot module sandboxing and multi-tenant environment profiles to accelerate local microservice orchestration.',
    },
    {
      title: 'Scaling React Apps for Enterprise Portals',
      category: 'Engineering Blog',
      date: 'June 28, 2026',
      readTime: '8 min read',
      snippet: 'Deep dive into rendering optimizations, state chunking strategies, and strict code boundaries with TS interfaces.',
    },
    {
      title: 'ARI Partners with Apex Corp for Bootcamp Program',
      category: 'Press Releases',
      date: 'June 15, 2026',
      readTime: '4 min read',
      snippet: 'Collaborating on high-level developer training pathways to onboard 150+ software engineers onto cloud-native architectures.',
    },
  ]

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-indigo-700 to-violet-800 text-white py-16 sm:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold sm:text-5xl tracking-tight">
            Newsroom
          </h1>
          <p className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto leading-relaxed">
            The latest announcements, technical deep dives, press releases, and articles from the ARI team.
          </p>
        </div>
      </section>

      {/* Featured News / Banner */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-150 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="p-8 lg:p-12 lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">Featured Story</span>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
                Redefining API Gateway Latency: The Road to ARI Gateway v2.4
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Our engineering team shares the optimization steps, Rust-based compiler plugin architectures, and concurrency designs that shaved 40ms off request overhead under load.
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span>July 12, 2026</span>
                <span>•</span>
                <span>12 min read</span>
              </div>
            </div>
            <div className="bg-indigo-50 lg:col-span-5 flex items-center justify-center p-12 text-center border-t lg:border-t-0 lg:border-l border-gray-100 min-h-[220px]">
              <div>
                <span className="text-5xl font-black text-indigo-600 block mb-2">API</span>
                <span className="text-sm font-semibold tracking-wider uppercase text-indigo-500">Latency Report</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">
            Recent Announcements & Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((art, idx) => (
              <article
                key={idx}
                className="bg-white p-8 rounded-xl border border-gray-150 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-3">
                    {art.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-indigo-600 transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {art.snippet}
                  </p>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-400 border-t border-gray-100 pt-4 mt-auto">
                  <span>{art.date}</span>
                  <span>{art.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
