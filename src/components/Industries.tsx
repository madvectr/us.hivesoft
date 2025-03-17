export default function Industries() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">✔ Finance & FinTech</h3>
            <p className="text-gray-700">Custom AI solutions for financial services and fintech companies.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">✔ Healthcare & Life Sciences</h3>
            <p className="text-gray-700">AI-powered solutions for healthcare providers and life science organizations.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">✔ E-commerce & Retail</h3>
            <p className="text-gray-700">Intelligent automation for online and retail businesses.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">✔ Manufacturing & Supply Chain</h3>
            <p className="text-gray-700">AI solutions for optimizing manufacturing and supply chain operations.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">✔ Legal & Compliance</h3>
            <p className="text-gray-700">AI-assisted solutions for legal services and compliance management.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">✔ Real Estate & Property Tech</h3>
            <p className="text-gray-700">Intelligent solutions for real estate and property technology.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
