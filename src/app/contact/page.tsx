import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Apply for Funding
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to fund your next fix and flip project? Complete our application below 
            and get approved in as little as 24-48 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-green-500 text-xl">✓</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Fast Approval</h3>
                    <p className="text-gray-600">Get approved in 24-48 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-500 text-xl">✓</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Up to 90% LTV</h3>
                    <p className="text-gray-600">Maximize your leverage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-500 text-xl">✓</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Competitive Rates</h3>
                    <p className="text-gray-600">Starting at 9.5% APR</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-500 text-xl">✓</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">No Prepayment Penalty</h3>
                    <p className="text-gray-600">Pay off early without fees</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-900 text-white rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Our Experts</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-400">📞</span>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <a href="tel:+1-855-FUND-FIX" className="text-yellow-400 hover:text-yellow-300">
                      (855) FUND-FIX
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-400">📧</span>
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:funding@fundyourfixandflip.com" className="text-yellow-400 hover:text-yellow-300">
                      funding@fundyourfixandflip.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-400">🕒</span>
                  <div>
                    <div className="font-semibold">Business Hours</div>
                    <div className="text-blue-200">Mon-Fri: 8 AM - 7 PM EST</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}