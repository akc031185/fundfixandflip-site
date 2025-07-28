'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-900">
              Fund<span className="text-yellow-500">YourFix&Flip</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Home
            </Link>
            <Link href="/calculator" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Calculator
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Apply Now
            </Link>
            <Link href="tel:+1-855-FUND-FIX" className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
              (855) FUND-FIX
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-900 font-medium">
                Home
              </Link>
              <Link href="/calculator" className="text-gray-700 hover:text-blue-900 font-medium">
                Calculator
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-900 font-medium">
                Apply Now
              </Link>
              <Link href="tel:+1-855-FUND-FIX" className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold text-center">
                (855) FUND-FIX
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}