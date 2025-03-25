import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-indigo-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-indigo-700 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-indigo-700 to-transparent"></div>
      
      {/* Circle decorations */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-500 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-indigo-500 rounded-full opacity-30 blur-3xl"></div>
      
      {/* Diagonal lines */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,100 M100,0 L0,100 M25,0 L75,100 M75,0 L25,100" strokeWidth="0.2" stroke="white" strokeOpacity="0.1" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Let&apos;s Build the Future of Finance, Together
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Whether you&apos;re a hedge fund, fintech startup, or enterprise platform, HiveSoft is your strategic partner in AI transformation.
          </p>
          <div className="sm:flex sm:justify-center space-y-4 sm:space-y-0">
            <Link 
              href="/contact" 
              className="group relative px-8 py-4 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 shadow-lg hover:shadow-xl transition inline-block w-full sm:w-auto overflow-hidden"
            >
              <span className="relative z-10">Book a Consultation</span>
              <div className="absolute inset-0 w-0 bg-gradient-to-r from-indigo-100 to-blue-100 transition-all duration-300 ease-out group-hover:w-full"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 