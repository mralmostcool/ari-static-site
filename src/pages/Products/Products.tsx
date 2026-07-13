export function Products() {
  const products = [
    {
      name: 'ARI Gateway',
      version: 'v2.4.0',
      desc: 'High-performance, low-latency API gateway engineered for microservices, featuring built-in rate-limiting and authorization plugins.',
      features: ['WebSocket support', 'OIDC integration', 'Metrics export'],
      price: '$99/mo',
    },
    {
      name: 'ARI Analytics Console',
      version: 'v1.1.2',
      desc: 'Real-time telemetry and visualization suite providing direct insights into API traffic, resource utilization, and user actions.',
      features: ['Custom dashboards', 'Alert integrations', 'Anomaly detection'],
      price: '$199/mo',
    },
    {
      name: 'ARI DevSuite CLI',
      version: 'v4.0.1',
      desc: 'Unified command-line client scaffolding tool that simplifies monorepo governance, lint auditing, and deployment workflows.',
      features: ['Local sandboxing', 'Hot module reload', 'Multi-tenant configs'],
      price: 'Free',
    },
  ]

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-indigo-700 to-violet-800 text-white py-16 sm:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold sm:text-5xl tracking-tight">
            Our Products
          </h1>
          <p className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto leading-relaxed">
            Enterprise-ready developer tooling and cloud infrastructure components built for resilience, speed, and clean integrations.
          </p>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((prod, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-150 shadow-sm hover:shadow-md transition-all duration-305 flex flex-col justify-between overflow-hidden"
              >
                {/* Product Header */}
                <div className="p-8 pb-0">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">{prod.name}</h2>
                    <span className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-2.5 py-1 rounded">
                      {prod.version}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {prod.desc}
                  </p>

                  {/* Feature Bullets */}
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                    Key Highlights
                  </h3>
                  <ul className="space-y-2 mb-8">
                    {prod.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Section */}
                <div className="bg-slate-50 px-8 py-6 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-xs text-gray-400 block">Starting at</span>
                    <span className="text-lg font-extrabold text-gray-900">{prod.price}</span>
                  </div>
                  <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[44px]"
                  >
                    Request Access
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product FAQ Alert Banner */}
      <section className="bg-white border-t border-gray-200 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
            Looking for Custom Integrations?
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
            Our products support modular custom plugins and custom metrics exporters. Let's arrange a consultation with our system engineers.
          </p>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm min-h-[44px]"
          >
            Speak to a Solutions Engineer
          </a>
        </div>
      </section>
    </div>
  )
}
