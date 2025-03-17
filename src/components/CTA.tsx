import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Build the Future of AI Together</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Transform the way you work with AI-driven automation and intelligence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/contact" className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-md hover:bg-gray-100 text-lg">
            📩 Schedule a Free Consultation Today!
          </Link>
          <Link href="/contact" className="px-8 py-4 border border-white text-white font-semibold rounded-md hover:bg-white hover:bg-opacity-10 text-lg">
            🚀 Ready to Get Started? Contact Us Now!
          </Link>
        </div>
      </div>
    </section>
  )
}