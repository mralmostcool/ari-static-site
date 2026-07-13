import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => {
  return (
    <nav className="border-b border-zinc-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Name on the Left */}
        <NavLink to="/" className="font-bold text-lg text-zinc-900">
          AriSite
        </NavLink>

        {/* 3 Buttons on the Right */}
        <div className="flex items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive ? 'text-purple-600' : 'text-zinc-600 hover:text-zinc-900'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive ? 'text-purple-600' : 'text-zinc-600 hover:text-zinc-900'
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive ? 'text-purple-600' : 'text-zinc-600 hover:text-zinc-900'
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
