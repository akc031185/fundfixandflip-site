import Link from 'next/link'
import QuickApplicationForm from './QuickApplicationForm'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Fund Your <span className="text-yellow-400">Fix & Flip</span> Dreams
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Fast, flexible financing for real estate investors. From $50K to $5M+ deals, 
              we provide the capital you need to maximize your profits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/contact" className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors">
                Get Funded Now
              </Link>
              <Link href="/calculator" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors">
                Calculate ROI
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-400">$500M+</div>
                <div className="text-blue-200">Funded to Date</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">2,500+</div>
                <div className="text-blue-200">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">48hr</div>
                <div className="text-blue-200">Approval Time</div>
              </div>
            </div>
          </div>

          <div className="lg:text-right">
            <QuickApplicationForm />
          </div>
        </div>
      </div>
    </section>
  )
}