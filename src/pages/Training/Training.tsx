export function Training() {
  const courses = [
    {
      title: 'TypeScript Essentials',
      duration: '4 weeks • Self-paced',
      desc: 'Master static typing, generics, utility types, configuration options, and integration with React components.',
      price: '$149',
      features: ['TypeScript compiler deep-dive', 'Interface and Type definitions', 'Generics & conditional typing', 'Hands-on practical exercises'],
    },
    {
      title: 'React & Platform Architecture',
      duration: '6 weeks • Cohort-based',
      desc: 'Build highly scalable frontends using custom React hook state management, custom layouts, and code split optimization.',
      price: '$499',
      features: ['State state architecture patterns', 'Vite configuration and building', 'Responsive design styling', 'Performance profiling workshop'],
      popular: true,
    },
    {
      title: 'Enterprise Architecture Systems',
      duration: '2-Day Intensive',
      desc: 'For system architects. Comprehensive design training mapping out API gateways, microfrontends, OIDC auth, and caching.',
      price: '$899',
      features: ['API Gateway configuration', 'Microfrontends integration', 'Load testing and telemetry', '1-on-1 architecture review'],
    },
  ]

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-indigo-700 to-violet-800 text-white py-16 sm:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold sm:text-5xl tracking-tight">
            Developer Training
          </h1>
          <p className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto leading-relaxed">
            Accelerate your engineering skills with hands-on, expert-led training curriculum covering typescript, react, and platform architecture.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl border flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${
                  course.popular ? 'border-indigo-500 ring-2 ring-indigo-500 ring-opacity-20' : 'border-gray-150'
                }`}
              >
                {/* Upper Box */}
                <div className="p-8 pb-0">
                  {course.popular && (
                    <span className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider block w-max mb-4">
                      Most Popular
                    </span>
                  )}
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">{course.title}</h2>
                  <span className="text-xs font-medium text-indigo-600 block mb-4">{course.duration}</span>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {course.desc}
                  </p>

                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                    Curriculum Highlights
                  </h3>
                  <ul className="space-y-2 mb-8">
                    {course.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer/Pricing Box */}
                <div className="bg-slate-50 px-8 py-6 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-xs text-gray-400 block">Total Tuition</span>
                    <span className="text-lg font-extrabold text-gray-900">{course.price}</span>
                  </div>
                  <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[44px]"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Training Custom FAQ */}
      <section className="bg-white border-t border-gray-200 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
            Need Custom Team Training?
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
            We deliver personalized private bootcamps for teams of 10 or more. We can tailor the topics specifically to your stack and enterprise requirements.
          </p>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm min-h-[44px]"
          >
            Contact Corporate Solutions
          </a>
        </div>
      </section>
    </div>
  )
}
