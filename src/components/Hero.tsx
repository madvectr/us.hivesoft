import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-blue-950 via-indigo-900 to-violet-900 text-white relative overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(0,0,0,0))]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="inline-block px-4 py-1 bg-blue-500/10 rounded-full mb-6 border border-blue-400/20">
              <span className="text-blue-300 font-medium">Precision AI for the Fintech Frontier</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-violet-200">
              AI-Powered Solutions for Financial Velocity
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              At HiveSoft, we build the brains behind the trades. As a specialized AI consulting firm for the fintech industry, we engineer high-performance software that delivers real-time insights, low-latency execution, and scalable automation — all tuned for the speed of modern finance.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-violet-600 transition-all duration-200 text-center group"
              >
                Book a Consultation
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link 
                href="/#solutions" 
                className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 text-center backdrop-blur-sm"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🚀", text: "Low-Latency Trading" },
                  { icon: "📊", text: "Data Analytics" },
                  { icon: "🤖", text: "AI Trading Bots" },
                  { icon: "📄", text: "Document Intelligence" },
                  { icon: "⚡", text: "Real-time Processing" },
                  { icon: "🔐", text: "Enterprise Security" }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-4 bg-gradient-to-br from-white/5 to-white/10 rounded-lg hover:from-white/10 hover:to-white/15 transition-all duration-200 backdrop-blur-sm"
                  >
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <span className="font-medium text-blue-100">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 