export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-gray-950 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(56,189,248,0.1),rgba(0,0,0,0))]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 mb-4">
            What We Do Best
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: "🚀",
              title: "Low-Latency Trading Systems",
              description: "Milliseconds matter. We design and optimize ultra-fast trading platforms that reduce execution time and maximize profit potential. From exchange connectivity to smart order routing, we deliver edge-to-exchange performance."
            },
            {
              icon: "📊",
              title: "Fintech Data Analytics & Automation",
              description: "From signal detection to predictive modeling, our AI-driven analytics pipelines transform raw market and customer data into actionable intelligence. Automate reports, detect anomalies, and forecast trends with confidence."
            },
            {
              icon: "🤖",
              title: "AI Trading Bots",
              description: "We build and fine-tune algorithmic trading bots that operate across asset classes with dynamic strategy adaptation, risk controls, and backtesting frameworks. Customize bots for equities, crypto, derivatives, and more."
            },
            {
              icon: "📄",
              title: "Unstructured-to-Structured Data Conversion",
              description: "Financial statements, earnings calls, PDFs — we turn it all into structured, queryable data. Unlock value across verticals like trading, investment analytics, credit scoring, and lending with our NLP + AI extraction pipelines."
            }
          ].map((solution, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-200" />
              <div className="relative p-8 bg-gray-900 rounded-2xl h-full border border-white/10 hover:border-white/20 transition-all duration-200">
                <div className="text-3xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-blue-100">{solution.title}</h3>
                <p className="text-gray-400">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 