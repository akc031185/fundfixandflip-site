'use client'

import { useState } from 'react'

export default function QuickApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    loanAmount: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/applications/quick', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          loanAmount: ''
        })
      } else {
        console.error('Error submitting quick application:', result.error)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Network error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <div className="text-center">
          <div className="text-4xl mb-4">✅</div>
          <h3 className="text-2xl font-bold mb-4 text-white">Application Received!</h3>
          <p className="text-white/90 mb-4">
            Thank you for your interest. We&apos;ll contact you within 24 hours to discuss your funding needs.
          </p>
          <button 
            onClick={() => setSubmitStatus('idle')}
            className="text-yellow-400 hover:text-yellow-300 underline"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
      <h3 className="text-2xl font-bold mb-6">Quick Application</h3>
      
      {submitStatus === 'error' && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p className="text-sm">There was an error submitting your application. Please try again.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          name="fullName"
          placeholder="Full Name" 
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-yellow-400"
        />
        <input 
          type="email" 
          name="email"
          placeholder="Email Address" 
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-yellow-400"
        />
        <input 
          type="tel" 
          name="phone"
          placeholder="Phone Number" 
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-yellow-400"
        />
        <select 
          name="loanAmount"
          value={formData.loanAmount}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-yellow-400"
        >
          <option value="">Loan Amount Needed</option>
          <option value="50k-100k">$50K - $100K</option>
          <option value="100k-250k">$100K - $250K</option>
          <option value="250k-500k">$250K - $500K</option>
          <option value="500k+">$500K+</option>
        </select>
        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full py-3 rounded-lg font-semibold transition-colors ${
            isSubmitting 
              ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
              : 'bg-yellow-400 text-blue-900 hover:bg-yellow-300'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Get Pre-Approved'}
        </button>
      </form>
    </div>
  )
}