export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 mb-4">
            Why HiveSoft?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
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
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-200"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-100">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 