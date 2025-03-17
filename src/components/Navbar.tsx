'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-600">HiveSoft</span>
            </Link>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link href="/#features" className="px-3 py-2 text-gray-700 hover:text-indigo-600">
              Why Choose Us
            </Link>
            <Link href="/#solutions" className="px-3 py-2 text-gray-700 hover:text-indigo-600">
              Solutions
            </Link>
            <Link href="/#industries" className="px-3 py-2 text-gray-700 hover:text-indigo-600">
              Industries
            </Link>
            <Link href="/#process" className="px-3 py-2 text-gray-700 hover:text-indigo-600">
              How It Works
            </Link>
            <Link href="/contact" className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Contact Us
            </Link>
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/#features" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">
              Why Choose Us
            </Link>
            <Link href="/#solutions" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">
              Solutions
            </Link>
            <Link href="/#industries" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">
              Industries
            </Link>
            <Link href="/#process" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">
              How It Works
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-indigo-600 font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}