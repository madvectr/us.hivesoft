export default function Features() {
  return (
    <section id="features" className="py-20 bg-indigo-50 dark:bg-gray-900 relative">
      {/* Background effects */}
      <div className="absolute w-full h-full inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-1/4 w-1/3 h-1/3 bg-gradient-to-br from-indigo-100 to-transparent dark:from-indigo-900/20 dark:to-transparent rounded-full mix-blend-multiply dark:mix-blend-lighten opacity-70 blur-3xl animate-pulse"></div>
        <div className="absolute right-1/4 bottom-1/4 w-1/4 h-1/4 bg-gradient-to-br from-blue-100 to-transparent dark:from-blue-900/20 dark:to-transparent rounded-full mix-blend-multiply dark:mix-blend-lighten opacity-70 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why HiveSoft?
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            We combine deep financial expertise with cutting-edge AI capabilities to deliver results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "💡",
              title: "Fintech-Focused AI Expertise",
              description: "Specialized in building high-performance AI solutions for the financial sector."
            },
            {
              icon: "⚙️",
              title: "Custom Solutions",
              description: "Tailored approaches for your specific trading strategies and business requirements."
            },
            {
              icon: "⚡",
              title: "Performance-First Engineering",
              description: "Optimized for ultra-low latency and high-throughput financial operations."
            },
            {
              icon: "🔐",
              title: "Enterprise-Grade Security",
              description: "Bank-level security protocols and regulatory compliance built into every solution."
            },
            {
              icon: "🌎",
              title: "Global Clientele, Chicago-Based",
              description: "Serving financial institutions worldwide from the heart of the derivatives trading capital."
            },
            {
              icon: "🤝",
              title: "Strategic Partnership",
              description: "We're not just vendors – we're your long-term partners in fintech innovation."
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="flex p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 dark:border-gray-700"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/40 dark:to-blue-900/40 text-indigo-600 dark:text-indigo-300 mr-4 shadow-sm">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Decorative element */}
        <div className="flex justify-center mt-16">
          <svg className="h-8 text-indigo-300 dark:text-indigo-700" viewBox="0 0 400 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,12 C100,24 150,0 200,12 C250,24 300,0 400,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="200" cy="12" r="4" fill="currentColor" />
          </svg>
        </div>
      </div>
    </section>
  )
} 