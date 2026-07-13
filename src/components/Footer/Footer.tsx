export function Footer() {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Clients', href: '#clients' },
    { label: 'Newsroom', href: '#newsroom' },
    { label: 'Training', href: '#training' },
  ]

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand/About Column */}
          <div className="space-y-4 col-span-1 md:col-span-2">
            <a href="#home" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
              <span className="flex items-center justify-center w-8 h-8 font-black text-white bg-indigo-600 rounded-lg">A</span>
              <span>ARI</span>
            </a>
            <p className="text-sm max-w-sm">
              Delivering high-quality services, products, and professional training solutions to help our clients and partners grow.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-200 block py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Info Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-2 text-sm">
              <li>info@ari-example.com</li>
              <li>+1 (555) 019-2834</li>
              <li className="pt-2 text-gray-500">
                123 Enterprise Way, Suite 400<br />
                San Francisco, CA 94107
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} ARI. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
