import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 overflow-hidden relative">
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
            <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-900/40 dark:to-blue-900/40 text-indigo-600 dark:text-indigo-300 text-sm font-medium">
              Precision AI for the Fintech Frontier
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              AI-Powered Solutions for <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400">Financial Velocity</span>
            </h1>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              At HiveSoft, we build the brains behind the trades. As a specialized AI consulting firm for the fintech industry, we engineer high-performance software that delivers real-time insights, low-latency execution, and scalable automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-blue-700 transition shadow-md hover:shadow-lg text-center"
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
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 dark:from-indigo-500/10 dark:to-blue-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -left-8 -bottom-8 w-48 h-48 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-full filter blur-3xl"></div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {[
                  { 
                    icon: (
                      <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 22V19M22 12H19M12 2V5M2 12H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    ), 
                    text: "Low-Latency Trading", 
                    bg: "bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-700" 
                  },
                  { 
                    icon: (
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 12H5M5 12V20M5 12L9 8M22 12H19M19 12V20M19 12L15 8M12 2V5M12 5V20M12 5L16 9M12 5L8 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ), 
                    text: "Data Analytics", 
                    bg: "bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-700" 
                  },
                  { 
                    icon: (
                      <svg className="w-6 h-6 text-violet-600 dark:text-violet-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M12 16V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M16 20L12 16L8 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 10L20 11L19 10L20 9L21 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 10L4 11L3 10L4 9L5 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 14H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M5 14H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M12 4V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    ), 
                    text: "AI Trading Bots", 
                    bg: "bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-700" 
                  },
                  { 
                    icon: (
                      <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 16V20M19 20H15M19 20L13 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 8V4M5 4H9M5 4L11 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 12C7 9.23858 9.23858 7 12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M17 12C17 14.7614 14.7614 17 12 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    ), 
                    text: "Document Intelligence", 
                    bg: "bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-700" 
                  },
                  { 
                    icon: (
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 4L13 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 4L17 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 4L21 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 6V18L3 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ), 
                    text: "Real-time Processing", 
                    bg: "bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-700" 
                  },
                  { 
                    icon: (
                      <svg className="w-6 h-6 text-violet-600 dark:text-violet-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 12H17.4C17.7314 12 18 12.2686 18 12.6V19.4C18 19.7314 17.7314 20 17.4 20H6.6C6.26863 20 6 19.7314 6 19.4V12.6C6 12.2686 6.26863 12 6.6 12H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M12 10V8.5C12 7.67157 12.6716 7 13.5 7H16.5C17.3284 7 18 6.32843 18 5.5C18 4.67157 17.3284 4 16.5 4H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    ), 
                    text: "Enterprise Security", 
                    bg: "bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-700" 
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center p-4 ${item.bg} rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition`}
                  >
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-md shadow-sm mr-3">
                      {item.icon}
                    </div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">{item.text}</span>
                  </div>
                ))}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <svg width="40" height="120" viewBox="0 0 40 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 0V120" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" />
                  <circle cx="20" cy="40" r="8" fill="url(#heroGradient1)" />
                  <circle cx="20" cy="80" r="8" fill="url(#heroGradient2)" />
                  <defs>
                    <linearGradient id="heroGradient1" x1="12" y1="32" x2="28" y2="48" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#6366F1" />
                      <stop offset="1" stopColor="#3B82F6" />
                    </linearGradient>
                    <linearGradient id="heroGradient2" x1="12" y1="72" x2="28" y2="88" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3B82F6" />
                      <stop offset="1" stopColor="#6366F1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              <div className="absolute -left-4 top-1/4 transform -translate-y-1/2 hidden lg:block">
                <svg width="20" height="80" viewBox="0 0 20 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0V80" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" />
                  <circle cx="10" cy="25" r="6" fill="url(#heroGradient3)" />
                  <circle cx="10" cy="55" r="6" fill="url(#heroGradient4)" />
                  <defs>
                    <linearGradient id="heroGradient3" x1="4" y1="19" x2="16" y2="31" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#6366F1" />
                      <stop offset="1" stopColor="#3B82F6" />
                    </linearGradient>
                    <linearGradient id="heroGradient4" x1="4" y1="49" x2="16" y2="61" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3B82F6" />
                      <stop offset="1" stopColor="#6366F1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 