import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-28 pb-20 bg-indigo-50 dark:bg-gray-900 overflow-hidden relative">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          <div className="lg:w-1/2">
            <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-sm font-medium">
              Precision AI for the Fintech Frontier
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              AI-Powered Solutions for <span className="text-indigo-600 dark:text-indigo-400">Financial Velocity</span>
            </h1>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              At HiveSoft, we build the brains behind the trades. As a specialized AI consulting firm for the fintech industry, we engineer high-performance software that delivers real-time insights, low-latency execution, and scalable automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition shadow-md hover:shadow-lg text-center"
              >
                Book a Consultation
              </Link>
              <Link 
                href="/#solutions" 
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition text-center"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 relative">
            {/* Modern 3D-style illustration */}
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-indigo-400/20 dark:bg-indigo-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -left-8 -bottom-8 w-48 h-48 bg-blue-400/20 dark:bg-blue-500/10 rounded-full filter blur-3xl"></div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {[
                  { icon: "🚀", text: "Low-Latency Trading", bg: "bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-700" },
                  { icon: "📊", text: "Data Analytics", bg: "bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-700" },
                  { icon: "🤖", text: "AI Trading Bots", bg: "bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-700" },
                  { icon: "📄", text: "Document Intelligence", bg: "bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-700" },
                  { icon: "⚡", text: "Real-time Processing", bg: "bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-700" },
                  { icon: "🔐", text: "Enterprise Security", bg: "bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-700" }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center p-4 ${item.bg} rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition`}
                  >
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-700 rounded-md shadow-sm mr-3">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">{item.text}</span>
                  </div>
                ))}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <svg width="40" height="120" viewBox="0 0 40 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 0V120" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" />
                  <circle cx="20" cy="40" r="8" fill="#6366F1" fillOpacity="0.3" />
                  <circle cx="20" cy="80" r="8" fill="#6366F1" fillOpacity="0.3" />
                </svg>
              </div>
              
              <div className="absolute -left-4 top-1/4 transform -translate-y-1/2 hidden lg:block">
                <svg width="20" height="80" viewBox="0 0 20 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0V80" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" />
                  <circle cx="10" cy="25" r="6" fill="#6366F1" fillOpacity="0.3" />
                  <circle cx="10" cy="55" r="6" fill="#6366F1" fillOpacity="0.3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 