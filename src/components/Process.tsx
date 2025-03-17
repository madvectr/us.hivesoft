export default function Process() {
  return (
    <section id="process" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our streamlined process ensures we deliver effective AI solutions tailored to your needs.
          </p>
        </div>
        
        <div className="relative">
          {/* Process timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200"></div>
          
          <div className="space-y-12 relative">
            {[
              {
                title: "Discovery Call",
                description: "We understand your needs and identify AI opportunities."
              },
              {
                title: "Custom AI Strategy",
                description: "We create a roadmap for your AI solution."
              },
              {
                title: "Development & Testing",
                description: "Our experts build, train, and refine your AI model."
              },
              {
                title: "Deployment & Integration",
                description: "We seamlessly integrate AI into your systems."
              },
              {
                title: "Ongoing Support",
                description: "Continuous monitoring, optimization, and improvements."
              }
            ].map((process, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center">
                {/* Left side content */}
                <div className={`flex-1 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pr-0'}`}>
                  {index % 2 === 0 && (
                    <div className="bg-indigo-50 p-6 rounded-lg shadow-sm ml-auto md:ml-0 md:mr-0 text-right">
                      <div className="text-3xl font-bold text-indigo-600 mb-3">{index + 1}</div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{process.title}</h3>
                      <p className="text-gray-700">{process.description}</p>
                    </div>
                  )}
                </div>
                
                {/* Right side content */}
                <div className={`flex-1 w-full md:w-1/2 ${index % 2 === 1 ? 'md:pl-12' : 'md:pl-0'}`}>
                  {index % 2 === 1 && (
                    <div className="bg-indigo-50 p-6 rounded-lg shadow-sm mr-auto md:mr-0 md:ml-0">
                      <div className="text-3xl font-bold text-indigo-600 mb-3">{index + 1}</div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{process.title}</h3>
                      <p className="text-gray-700">{process.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
