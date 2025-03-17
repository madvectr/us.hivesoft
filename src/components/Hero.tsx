import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              AI-Powered Solutions for Enterprise SMBs
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              Transforming Business Operations with Intelligent AI Agents
            </h2>
            <p className="text-xl mb-8">
              Unlock the Power of AI for Your Business
            </p>
            <p className="text-lg mb-8">
              At HiveSoft, we specialize in building custom AI agents that enhance productivity, 
              automate workflows, and drive intelligent decision-making. Whether you're looking to 
              streamline operations, personalize customer interactions, or optimize your data insights, 
              our AI-powered solutions are designed to fit your unique business needs.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact" className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md hover:bg-gray-100 text-center">
                Schedule a Free Consultation
              </Link>
              <Link href="/#solutions" className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:bg-opacity-10 text-center">
                Explore Solutions
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "💼", text: "Custom AI Solutions" },
                  { icon: "🔒", text: "Enterprise Security" },
                  { icon: "📊", text: "Data Analytics" },
                  { icon: "🤖", text: "Process Automation" },
                  { icon: "💬", text: "AI Chatbots" },
                  { icon: "📈", text: "Predictive Analytics" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-3 bg-white bg-opacity-20 rounded-md hover:bg-opacity-25 transition-all">
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <span className="font-medium text-black">{item.text}</span>
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