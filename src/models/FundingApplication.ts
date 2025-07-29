import mongoose from 'mongoose'

export interface IFundingApplication {
  firstName: string
  lastName: string
  email: string
  phone: string
  loanAmount: string
  propertyAddress?: string
  purchasePrice?: string
  rehabBudget?: string
  arv?: string
  experience?: string
  timeline?: string
  message?: string
  status: 'pending' | 'reviewing' | 'approved' | 'rejected'
  createdAt: Date
  updatedAt: Date
}

const FundingApplicationSchema = new mongoose.Schema<IFundingApplication>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [50, 'First name cannot exceed 50 characters']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    maxlength: [50, 'Last name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    maxlength: [20, 'Phone number cannot exceed 20 characters']
  },
  loanAmount: {
    type: String,
    required: [true, 'Loan amount is required'],
    enum: ['50k-100k', '100k-250k', '250k-500k', '500k-1m', '1m+']
  },
  propertyAddress: {
    type: String,
    trim: true,
    maxlength: [200, 'Property address cannot exceed 200 characters']
  },
  purchasePrice: {
    type: String,
    trim: true,
    maxlength: [20, 'Purchase price cannot exceed 20 characters']
  },
  rehabBudget: {
    type: String,
    trim: true,
    maxlength: [20, 'Rehab budget cannot exceed 20 characters']
  },
  arv: {
    type: String,
    trim: true,
    maxlength: [20, 'ARV cannot exceed 20 characters']
  },
  experience: {
    type: String,
    enum: ['first-time', '1-3-flips', '4-10-flips', '10+-flips', 'professional', '']
  },
  timeline: {
    type: String,
    enum: ['asap', '1-month', '2-3-months', 'flexible', '']
  },
  message: {
    type: String,
    trim: true,
    maxlength: [1000, 'Message cannot exceed 1000 characters']
  },
  status: {
    type: String,
    enum: ['pending', 'reviewing', 'approved', 'rejected'],
    default: 'pending'
  }
}, {
  timestamps: true
})

// Create indexes for better query performance
FundingApplicationSchema.index({ email: 1 })
FundingApplicationSchema.index({ status: 1 })
FundingApplicationSchema.index({ createdAt: -1 })

export default mongoose.models.FundingApplication || mongoose.model<IFundingApplication>('FundingApplication', FundingApplicationSchema)