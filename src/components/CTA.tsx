'use client'
import Link from 'next/link'

export default function CTA() {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-blue-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to Transform Your Fintech Operations?</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-100">
          Whether you&apos;re a hedge fund, fintech startup, or enterprise platform, HiveSoft is your strategic partner in AI transformation.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/#consultation"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 dark:from-indigo-500 dark:to-blue-500 hover:shadow-lg transition-all"
          >
            Start Your Consultation
            <svg className="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
} 