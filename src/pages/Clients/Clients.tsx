export function Clients() {
  const logos = [
    { name: 'Apex Corp', domain: 'apex.io' },
    { name: 'Beta Systems', domain: 'betasys.com' },
    { name: 'Nova Global', domain: 'novaglobal.co' },
    { name: 'Vertex Labs', domain: 'vertexlabs.net' },
    { name: 'Echo Cloud', domain: 'echocloud.org' },
    { name: 'Quantum Inc', domain: 'quantuminc.com' },
  ]

  const testimonials = [
    {
      quote: "ARI completely transformed how our team develops React applications. Their training classes were extremely thorough, and their API Gateway product reduced our latency by 35%.",
      author: "Douglas Finch",
      role: "VP of Engineering, Apex Corp",
      initials: "DF",
    },
    {
      quote: "The consultive approach of ARI was exactly what we needed. They embedded with our team to configure the DevSuite CLI pipelines, boosting our release frequency drastically.",
      author: "Linnea Sjöberg",
      role: "Platform Lead, Vertex Labs",
      initials: "LS",
    },
  ]

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-indigo-700 to-violet-800 text-white py-16 sm:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold sm:text-5xl tracking-tight">
            Our Clients
          </h1>
          <p className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto leading-relaxed">
            Proud to partner with global teams and enterprise companies engineering the future of web applications.
          </p>
        </div>
      </section>

      {/* Grid of Logos / Clients */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-12">
            Trusted By Engineering Teams Worldwide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center shadow-sm hover:bg-slate-100 transition-colors"
              >
                <span className="font-extrabold text-gray-800 text-lg block">{logo.name}</span>
                <span className="text-xs text-indigo-500 mt-1">{logo.domain}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            What Our Partners Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border border-gray-150 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
              >
                <p className="text-gray-500 text-base leading-relaxed italic mb-8">
                  "{test.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">
                    {test.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{test.author}</h3>
                    <p className="text-xs text-gray-400 mt-0.5">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
