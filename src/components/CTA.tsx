import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(56,189,248,0.1),rgba(0,0,0,0))]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 mb-6">
            Let&apos;s Build the Future of Finance, Together
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Whether you&apos;re a hedge fund, fintech startup, or enterprise platform, HiveSoft is your strategic partner in AI transformation. We turn ideas into intelligent infrastructure — fast, reliable, and secure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-violet-600 transition-all duration-200 group"
            >
              Book a Consultation
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 