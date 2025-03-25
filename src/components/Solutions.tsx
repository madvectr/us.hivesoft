export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-white via-gray-50 to-indigo-50 dark:from-gray-800 dark:via-gray-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full opacity-70 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 mb-4">
            What We Do Best
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Our specialized fintech solutions are engineered for performance, security, and scalability.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: (
                <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22V19M22 12H19M12 2V5M2 12H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
              title: "Low-Latency Trading Systems",
              description: "Milliseconds matter. We design and optimize ultra-fast trading platforms that reduce execution time and maximize profit potential. From exchange connectivity to smart order routing, we deliver edge-to-exchange performance.",
              graphic: (
                <svg className="w-full h-32 text-indigo-100 dark:text-indigo-900/30" viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="lineChart" x1="20" y1="100" x2="300" y2="10" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#6366F1" />
                      <stop offset="1" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                  <path d="M20,100 L60,60 L100,80 L140,30 L180,50 L220,20 L260,40 L300,10" stroke="url(#lineChart)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="60" cy="60" r="6" fill="url(#lineChart)" />
                  <circle cx="100" cy="80" r="6" fill="url(#lineChart)" />
                  <circle cx="140" cy="30" r="6" fill="url(#lineChart)" />
                  <circle cx="180" cy="50" r="6" fill="url(#lineChart)" />
                  <circle cx="220" cy="20" r="6" fill="url(#lineChart)" />
                  <circle cx="260" cy="40" r="6" fill="url(#lineChart)" />
                </svg>
              )
            },
            {
              icon: (
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12H5M5 12V20M5 12L9 8M22 12H19M19 12V20M19 12L15 8M12 2V5M12 5V20M12 5L16 9M12 5L8 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: "Fintech Data Analytics & Automation",
              description: "From signal detection to predictive modeling, our AI-driven analytics pipelines transform raw market and customer data into actionable intelligence. Automate reports, detect anomalies, and forecast trends with confidence.",
              graphic: (
                <svg className="w-full h-32 text-indigo-100 dark:text-indigo-900/30" viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="barChart1" x1="40" y1="100" x2="70" y2="30" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3B82F6" />
                      <stop offset="1" stopColor="#6366F1" />
                    </linearGradient>
                    <linearGradient id="barChart2" x1="80" y1="100" x2="110" y2="50" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#6366F1" />
                      <stop offset="1" stopColor="#3B82F6" />
                    </linearGradient>
                    <linearGradient id="barChart3" x1="120" y1="100" x2="150" y2="20" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3B82F6" />
                      <stop offset="1" stopColor="#6366F1" />
                    </linearGradient>
                  </defs>
                  <rect x="40" y="30" width="30" height="70" rx="2" fill="url(#barChart1)" />
                  <rect x="80" y="50" width="30" height="50" rx="2" fill="url(#barChart2)" />
                  <rect x="120" y="20" width="30" height="80" rx="2" fill="url(#barChart3)" />
                  <rect x="160" y="40" width="30" height="60" rx="2" fill="url(#barChart1)" />
                  <rect x="200" y="10" width="30" height="90" rx="2" fill="url(#barChart2)" />
                  <rect x="240" y="60" width="30" height="40" rx="2" fill="url(#barChart3)" />
                </svg>
              )
            },
            {
              icon: (
                <svg className="w-8 h-8 text-violet-600 dark:text-violet-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              title: "AI Trading Bots",
              description: "We build and fine-tune algorithmic trading bots that operate across asset classes with dynamic strategy adaptation, risk controls, and backtesting frameworks. Customize bots for equities, crypto, derivatives, and more.",
              graphic: (
                <svg className="w-full h-32 text-indigo-100 dark:text-indigo-900/30" viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="waveChart1" x1="20" y1="60" x2="300" y2="60" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#A78BFA" />
                      <stop offset="1" stopColor="#6366F1" />
                    </linearGradient>
                    <linearGradient id="waveChart2" x1="20" y1="60" x2="300" y2="60" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#6366F1" />
                      <stop offset="1" stopColor="#A78BFA" />
                    </linearGradient>
                  </defs>
                  <path d="M20,60 C20,60 60,20 100,60 C140,100 180,20 220,60 C260,100 300,60 300,60" stroke="url(#waveChart1)" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M20,60 C20,60 60,100 100,60 C140,20 180,100 220,60 C260,20 300,60 300,60" stroke="url(#waveChart2)" strokeWidth="2" />
                  <circle cx="20" cy="60" r="5" fill="url(#waveChart2)" />
                  <circle cx="100" cy="60" r="5" fill="url(#waveChart2)" />
                  <circle cx="220" cy="60" r="5" fill="url(#waveChart2)" />
                  <circle cx="300" cy="60" r="5" fill="url(#waveChart2)" />
                </svg>
              )
            },
            {
              icon: (
                <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 16V20M19 20H15M19 20L13 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 8V4M5 4H9M5 4L11 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 12C7 9.23858 9.23858 7 12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M17 12C17 14.7614 14.7614 17 12 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
              title: "Unstructured-to-Structured Data Conversion",
              description: "Financial statements, earnings calls, PDFs — we turn it all into structured, queryable data. Unlock value across verticals like trading, investment analytics, credit scoring, and lending with our NLP + AI extraction pipelines.",
              graphic: (
                <svg className="w-full h-32 text-indigo-100 dark:text-indigo-900/30" viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="docGradient1" x1="40" y1="20" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#E0E7FF" />
                      <stop offset="1" stopColor="#C7D2FE" />
                    </linearGradient>
                    <linearGradient id="docGradient2" x1="180" y1="20" x2="260" y2="120" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#A5B4FC" />
                      <stop offset="1" stopColor="#6366F1" />
                    </linearGradient>
                    <linearGradient id="arrowGradient" x1="140" y1="60" x2="165" y2="60" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#6366F1" />
                      <stop offset="1" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                  <rect x="40" y="20" width="80" height="100" rx="4" fill="url(#docGradient1)" className="dark:opacity-30" />
                  <rect x="50" y="30" width="60" height="4" rx="2" fill="#6B7280" className="dark:opacity-30" />
                  <rect x="50" y="40" width="50" height="4" rx="2" fill="#6B7280" className="dark:opacity-30" />
                  <rect x="50" y="50" width="55" height="4" rx="2" fill="#6B7280" className="dark:opacity-30" />
                  <rect x="50" y="60" width="40" height="4" rx="2" fill="#6B7280" className="dark:opacity-30" />
                  
                  <path d="M140,60 L160,60" stroke="url(#arrowGradient)" strokeWidth="2" strokeDasharray="4 2" />
                  <polygon points="165,60 160,55 160,65" fill="url(#arrowGradient)" />
                  
                  <rect x="180" y="20" width="80" height="100" rx="4" fill="url(#docGradient2)" className="dark:opacity-70" />
                  <rect x="190" y="30" width="60" height="10" rx="2" fill="#F9FAFB" className="dark:opacity-30" />
                  <rect x="190" y="50" width="60" height="10" rx="2" fill="#F9FAFB" className="dark:opacity-30" />
                  <rect x="190" y="70" width="60" height="10" rx="2" fill="#F9FAFB" className="dark:opacity-30" />
                  <rect x="190" y="90" width="60" height="10" rx="2" fill="#F9FAFB" className="dark:opacity-30" />
                </svg>
              )
            }
          ].map((solution, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30 text-indigo-600 dark:text-indigo-300 rounded-lg mr-4 shadow-sm">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{solution.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{solution.description}</p>
                <div className="mt-2">
                  {solution.graphic}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 