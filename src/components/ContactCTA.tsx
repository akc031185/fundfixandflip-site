import Link from 'next/link'

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Fund Your Next Deal?
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-blue-200 max-w-3xl mx-auto">
          Join thousands of successful investors who trust us to finance their fix and flip projects. 
          Get pre-approved today and never miss another opportunity.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/contact" className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors">
            Apply for Funding
          </Link>
          <Link href="/calculator" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors">
            Calculate Your ROI
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Contact Our Experts</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-3">
                <span className="text-yellow-400">📞</span>
                <a href="tel:+1-855-FUND-FIX" className="text-xl hover:text-yellow-400 transition-colors">
                  (855) FUND-FIX
                </a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-yellow-400">📧</span>
                <a href="mailto:funding@fundyourfixandflip.com" className="text-xl hover:text-yellow-400 transition-colors">
                  funding@fundyourfixandflip.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="text-yellow-400">8 AM - 7 PM EST</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-yellow-400">9 AM - 5 PM EST</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-yellow-400">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}