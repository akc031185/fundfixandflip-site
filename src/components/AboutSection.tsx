export default function AboutSection() {
  const features = [
    {
      icon: "⚡",
      title: "Fast Approval",
      description: "Get approved in as little as 24-48 hours with minimal documentation"
    },
    {
      icon: "💰",
      title: "Competitive Rates",
      description: "Starting at 9.5% APR with flexible terms up to 18 months"
    },
    {
      icon: "🏠",
      title: "All Property Types",
      description: "Single family, multi-family, commercial - we fund them all"
    },
    {
      icon: "📊",
      title: "Up to 90% LTV",
      description: "Maximize your leverage with up to 90% loan-to-value ratios"
    },
    {
      icon: "🔄",
      title: "Rehab Draw System",
      description: "Access funds as you complete renovation milestones"
    },
    {
      icon: "🚀",
      title: "No Prepayment Penalty",
      description: "Pay off early without penalties to maximize your profits"
    }
  ]

  const steps = [
    {
      number: "01",
      title: "Apply Online",
      description: "Complete our simple application in under 5 minutes"
    },
    {
      number: "02", 
      title: "Get Approved",
      description: "Receive approval within 24-48 hours"
    },
    {
      number: "03",
      title: "Close Fast",
      description: "Fund your deal and start your project"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Features Grid */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Fund Fix & Flip?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the fix and flip business. Our financing solutions are designed 
            specifically for real estate investors who need speed, flexibility, and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="bg-blue-900 rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Simple 3-Step Process</h2>
            <p className="text-xl text-blue-200">
              Get funded faster than traditional lenders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-400 text-blue-900 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-blue-200">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}