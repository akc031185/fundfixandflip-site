'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function PropertyCalculator() {
  const [values, setValues] = useState({
    purchasePrice: '',
    rehabCost: '',
    arv: '',
    loanAmount: '',
    interestRate: '10.5',
    loanTerm: '12',
    holdingTime: '6',
    sellingCosts: '8',
    downPayment: '20'
  })

  const [results, setResults] = useState({
    totalInvestment: 0,
    totalCosts: 0,
    netProfit: 0,
    roi: 0,
    annualizedROI: 0,
    monthlyPayment: 0,
    interestCost: 0
  })

  const calculateResults = () => {
    const purchasePrice = parseFloat(values.purchasePrice) || 0
    const rehabCost = parseFloat(values.rehabCost) || 0
    const arv = parseFloat(values.arv) || 0
    const loanAmount = parseFloat(values.loanAmount) || 0
    const interestRate = parseFloat(values.interestRate) / 100
    const holdingTime = parseFloat(values.holdingTime)
    const sellingCosts = parseFloat(values.sellingCosts) / 100
    const downPayment = parseFloat(values.downPayment) / 100

    // Calculate costs
    const totalProject = purchasePrice + rehabCost
    const downPaymentAmount = totalProject * downPayment
    const actualLoanAmount = loanAmount || (totalProject - downPaymentAmount)
    const monthlyRate = interestRate / 12
    const monthlyPayment = actualLoanAmount * monthlyRate
    const interestCost = monthlyPayment * holdingTime
    const sellingCostAmount = arv * sellingCosts
    
    // Calculate totals
    const totalInvestment = downPaymentAmount
    const totalCosts = totalProject + interestCost + sellingCostAmount
    const grossProfit = arv - totalCosts
    const netProfit = grossProfit
    const roi = totalInvestment > 0 ? (netProfit / totalInvestment) * 100 : 0
    const annualizedROI = holdingTime > 0 ? (roi / holdingTime) * 12 : 0

    setResults({
      totalInvestment,
      totalCosts,
      netProfit,
      roi,
      annualizedROI,
      monthlyPayment,
      interestCost
    })
  }

  useEffect(() => {
    calculateResults()
  }, [values])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  const formatPercentage = (percent: number) => {
    return `${percent.toFixed(1)}%`
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Details</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Purchase Price
              </label>
              <input
                type="number"
                name="purchasePrice"
                value={values.purchasePrice}
                onChange={handleChange}
                placeholder="150000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rehab/Renovation Cost
              </label>
              <input
                type="number"
                name="rehabCost"
                value={values.rehabCost}
                onChange={handleChange}
                placeholder="50000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                After Repair Value (ARV)
              </label>
              <input
                type="number"
                name="arv"
                value={values.arv}
                onChange={handleChange}
                placeholder="280000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interest Rate (%)
                </label>
                <input
                  type="number"
                  name="interestRate"
                  value={values.interestRate}
                  onChange={handleChange}
                  step="0.1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Holding Time (months)
                </label>
                <input
                  type="number"
                  name="holdingTime"
                  value={values.holdingTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Down Payment (%)
                </label>
                <input
                  type="number"
                  name="downPayment"
                  value={values.downPayment}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Selling Costs (%)
                </label>
                <input
                  type="number"
                  name="sellingCosts"
                  value={values.sellingCosts}
                  onChange={handleChange}
                  step="0.1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Investment Analysis</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">Total Investment Required</span>
                <span className="font-semibold text-lg">{formatCurrency(results.totalInvestment)}</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">Monthly Interest Payment</span>
                <span className="font-semibold text-lg">{formatCurrency(results.monthlyPayment)}</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">Total Interest Cost</span>
                <span className="font-semibold text-lg">{formatCurrency(results.interestCost)}</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">Net Profit</span>
                <span className={`font-bold text-xl ${results.netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatCurrency(results.netProfit)}
                </span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">Return on Investment</span>
                <span className={`font-bold text-xl ${results.roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatPercentage(results.roi)}
                </span>
              </div>
              
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-600">Annualized ROI</span>
                <span className={`font-bold text-xl ${results.annualizedROI >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatPercentage(results.annualizedROI)}
                </span>
              </div>
            </div>
          </div>

          <div className={`rounded-xl p-6 ${results.netProfit >= 30000 ? 'bg-green-100 border-2 border-green-300' : 
                                          results.netProfit >= 15000 ? 'bg-yellow-100 border-2 border-yellow-300' : 
                                          'bg-red-100 border-2 border-red-300'}`}>
            <div className="text-center">
              <div className="text-3xl mb-2">
                {results.netProfit >= 30000 ? '🎉' : results.netProfit >= 15000 ? '👍' : '⚠️'}
              </div>
              <h3 className="text-lg font-bold mb-2">
                {results.netProfit >= 30000 ? 'Excellent Deal!' : 
                 results.netProfit >= 15000 ? 'Good Deal' : 
                 'Review Numbers'}
              </h3>
              <p className="text-sm text-gray-700">
                {results.netProfit >= 30000 ? 'This project shows strong profit potential.' : 
                 results.netProfit >= 15000 ? 'This project shows reasonable profit potential.' : 
                 'Consider adjusting purchase price or rehab budget.'}
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact" className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors inline-block">
              Apply for Funding
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}