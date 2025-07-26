import PropertyCalculator from '@/components/PropertyCalculator'

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fix & Flip Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your potential return on investment and see how our financing 
            can help maximize your profits on fix and flip projects.
          </p>
        </div>

        <PropertyCalculator />

        <div className="mt-16 bg-blue-900 text-white rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-200">
              Use our calculator results to apply for funding and turn your investment dreams into reality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2">Fast Approval</h3>
              <p className="text-blue-200">Get approved in 24-48 hours</p>
            </div>
            <div>
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-bold mb-2">Up to 90% LTV</h3>
              <p className="text-blue-200">Maximize your leverage</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-bold mb-2">Expert Support</h3>
              <p className="text-blue-200">Dedicated loan specialists</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}