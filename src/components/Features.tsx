export default function Features() {
    return (
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose HiveSoft?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver AI solutions that transform how businesses operate, making technology work for you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "✅",
                title: "Tailored AI Solutions",
                description: "We build AI agents that integrate seamlessly into your existing workflows."
              },
              {
                icon: "✅",
                title: "Enterprise-Grade Performance",
                description: "Scalable, secure, and optimized for real-world business challenges."
              },
              {
                icon: "✅",
                title: "Expert Team",
                description: "Our team of former quants, ML engineers, and software architects bring deep technical expertise."
              },
              {
                icon: "✅",
                title: "End-to-End Development",
                description: "From ideation to deployment, we handle everything."
              },
              {
                icon: "✅",
                title: "Seamless Integration",
                description: "AI solutions that work with your current tools and systems."
              },
              {
                icon: "✅",
                title: "Continuous Improvement",
                description: "We constantly refine and enhance your AI solutions as your business evolves."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }