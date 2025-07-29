import mongoose from 'mongoose'

export interface IQuickApplication {
  fullName: string
  email: string
  phone: string
  loanAmount: string
  status: 'pending' | 'reviewing' | 'approved' | 'rejected'
  createdAt: Date
  updatedAt: Date
}

const QuickApplicationSchema = new mongoose.Schema<IQuickApplication>({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
    maxlength: [100, 'Full name cannot exceed 100 characters']
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
    enum: ['50k-100k', '100k-250k', '250k-500k', '500k+']
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
QuickApplicationSchema.index({ email: 1 })
QuickApplicationSchema.index({ status: 1 })
QuickApplicationSchema.index({ createdAt: -1 })

export default mongoose.models.QuickApplication || mongoose.model<IQuickApplication>('QuickApplication', QuickApplicationSchema)