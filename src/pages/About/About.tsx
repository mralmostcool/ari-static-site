export function About() {
  const values = [
    { title: 'Innovation First', desc: 'Constantly exploring new methodologies and tools to provide bleeding-edge answers.' },
    { title: 'Quality Obsession', desc: 'Rigorous software and material curation ensuring world-class execution standards.' },
    { title: 'Client Collaboration', desc: 'Partnering intimately with organizations to build long-term shared success.' },
    { title: 'Empowering Education', desc: 'Distilling high-level expertise into comprehensive, digestible developer training.' },
  ]

  const team = [
    { name: 'Sarah Jenkins', role: 'Chief Executive Officer', initials: 'SJ' },
    { name: 'Marcus Chen', role: 'Head of Engineering', initials: 'MC' },
    { name: 'Aaliyah Jackson', role: 'Lead Education Architect', initials: 'AJ' },
  ]

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-indigo-700 to-violet-800 text-white py-16 sm:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold sm:text-5xl tracking-tight">
            About Us
          </h1>
          <p className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto leading-relaxed">
            Our mission is to enable technological growth and engineering excellence by bridging the gap between design and mastery.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
            Our Story & Journey
          </h2>
          <div className="space-y-6 text-gray-500 text-base leading-relaxed max-w-3xl mx-auto">
            <p>
              Founded in 2020, ARI started as a niche software consulting collective focused on performance optimization and scalable client architectures. Over the years, we discovered that building premium products is only half the battle; transferring that knowledge to help client engineering teams scale internally is what truly drives long-term success.
            </p>
            <p>
              Today, ARI is a multi-disciplinary solutions hub. We build robust React/TypeScript architectures, consult for Fortune 500 enterprises, and host intensive developer Bootcamps. We pride ourselves on clean design patterns, thorough responsive layouts, and strict SEO compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <span className="text-3xl font-extrabold text-indigo-600 mb-4">0{idx + 1}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{val.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Meet Our Leadership
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-8 rounded-xl border border-gray-200 flex flex-col items-center text-center hover:bg-slate-100/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xl mb-4 shadow-inner">
                  {member.initials}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-indigo-600 mt-1">{member.role}</p>
                <p className="text-xs text-gray-400 mt-4 leading-relaxed max-w-xs">
                  Passionate industry expert with over a decade of hands-on software development and execution leadership.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
