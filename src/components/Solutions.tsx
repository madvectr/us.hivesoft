export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-70 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What We Do Best
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Our specialized fintech solutions are engineered for performance, security, and scalability.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: "🚀",
              title: "Low-Latency Trading Systems",
              description: "Milliseconds matter. We design and optimize ultra-fast trading platforms that reduce execution time and maximize profit potential. From exchange connectivity to smart order routing, we deliver edge-to-exchange performance.",
              graphic: (
                <svg className="w-full h-32 text-indigo-100 dark:text-indigo-900/30" viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20,100 L60,60 L100,80 L140,30 L180,50 L220,20 L260,40 L300,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500 dark:text-indigo-400" />
                  <circle cx="60" cy="60" r="6" fill="currentColor" className="text-indigo-500 dark:text-indigo-400" />
                  <circle cx="100" cy="80" r="6" fill="currentColor" className="text-indigo-500 dark:text-indigo-400" />
                  <circle cx="140" cy="30" r="6" fill="currentColor" className="text-indigo-500 dark:text-indigo-400" />
                  <circle cx="180" cy="50" r="6" fill="currentColor" className="text-indigo-500 dark:text-indigo-400" />
                  <circle cx="220" cy="20" r="6" fill="currentColor" className="text-indigo-500 dark:text-indigo-400" />
                  <circle cx="260" cy="40" r="6" fill="currentColor" className="text-indigo-500 dark:text-indigo-400" />
                </svg>
              )
            },
            {
              icon: "📊",
              title: "Fintech Data Analytics & Automation",
              description: "From signal detection to predictive modeling, our AI-driven analytics pipelines transform raw market and customer data into actionable intelligence. Automate reports, detect anomalies, and forecast trends with confidence.",
              graphic: (
                <svg className="w-full h-32 text-indigo-100 dark:text-indigo-900/30" viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="40" y="30" width="30" height="70" rx="2" fill="currentColor" className="text-blue-400 dark:text-blue-500/70" />
                  <rect x="80" y="50" width="30" height="50" rx="2" fill="currentColor" className="text-indigo-400 dark:text-indigo-500/70" />
                  <rect x="120" y="20" width="30" height="80" rx="2" fill="currentColor" className="text-blue-400 dark:text-blue-500/70" />
                  <rect x="160" y="40" width="30" height="60" rx="2" fill="currentColor" className="text-indigo-400 dark:text-indigo-500/70" />
                  <rect x="200" y="10" width="30" height="90" rx="2" fill="currentColor" className="text-blue-400 dark:text-blue-500/70" />
                  <rect x="240" y="60" width="30" height="40" rx="2" fill="currentColor" className="text-indigo-400 dark:text-indigo-500/70" />
                </svg>
              )
            },
            {
              icon: "🤖",
              title: "AI Trading Bots",
              description: "We build and fine-tune algorithmic trading bots that operate across asset classes with dynamic strategy adaptation, risk controls, and backtesting frameworks. Customize bots for equities, crypto, derivatives, and more.",
              graphic: (
                <svg className="w-full h-32 text-indigo-100 dark:text-indigo-900/30" viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20,60 C20,60 60,20 100,60 C140,100 180,20 220,60 C260,100 300,60 300,60" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-purple-400 dark:text-purple-500/70" />
                  <path d="M20,60 C20,60 60,100 100,60 C140,20 180,100 220,60 C260,20 300,60 300,60" stroke="currentColor" strokeWidth="2" className="text-indigo-500 dark:text-indigo-400" />
                  <circle cx="20" cy="60" r="5" fill="currentColor" className="text-indigo-500 dark:text-indigo-400" />
                  <circle cx="100" cy="60" r="5" fill="currentColor" className="text-indigo-500 dark:text-indigo-400" />
                  <circle cx="220" cy="60" r="5" fill="currentColor" className="text-indigo-500 dark:text-indigo-400" />
                  <circle cx="300" cy="60" r="5" fill="currentColor" className="text-indigo-500 dark:text-indigo-400" />
                </svg>
              )
            },
            {
              icon: "📄",
              title: "Unstructured-to-Structured Data Conversion",
              description: "Financial statements, earnings calls, PDFs — we turn it all into structured, queryable data. Unlock value across verticals like trading, investment analytics, credit scoring, and lending with our NLP + AI extraction pipelines.",
              graphic: (
                <svg className="w-full h-32 text-indigo-100 dark:text-indigo-900/30" viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="40" y="20" width="80" height="100" rx="4" fill="currentColor" className="text-gray-200 dark:text-gray-700" />
                  <rect x="50" y="30" width="60" height="4" rx="2" fill="currentColor" className="text-gray-300 dark:text-gray-600" />
                  <rect x="50" y="40" width="50" height="4" rx="2" fill="currentColor" className="text-gray-300 dark:text-gray-600" />
                  <rect x="50" y="50" width="55" height="4" rx="2" fill="currentColor" className="text-gray-300 dark:text-gray-600" />
                  <rect x="50" y="60" width="40" height="4" rx="2" fill="currentColor" className="text-gray-300 dark:text-gray-600" />
                  
                  <path d="M140,60 L160,60" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" className="text-indigo-400 dark:text-indigo-500" />
                  <polygon points="165,60 160,55 160,65" fill="currentColor" className="text-indigo-400 dark:text-indigo-500" />
                  
                  <rect x="180" y="20" width="80" height="100" rx="4" fill="currentColor" className="text-indigo-200 dark:text-indigo-800/50" />
                  <rect x="190" y="30" width="60" height="10" rx="2" fill="currentColor" className="text-indigo-300 dark:text-indigo-700" />
                  <rect x="190" y="50" width="60" height="10" rx="2" fill="currentColor" className="text-indigo-300 dark:text-indigo-700" />
                  <rect x="190" y="70" width="60" height="10" rx="2" fill="currentColor" className="text-indigo-300 dark:text-indigo-700" />
                  <rect x="190" y="90" width="60" height="10" rx="2" fill="currentColor" className="text-indigo-300 dark:text-indigo-700" />
                </svg>
              )
            }
          ].map((solution, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-100 dark:border-gray-600 hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 rounded-lg mr-4">
                    <span className="text-2xl">{solution.icon}</span>
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