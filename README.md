# Fund Your Fix & Flip - Real Estate Investment Financing

**Website:** https://fundyourfixandflip.com  
**Repository:** https://github.com/akc031185/fundfixandflip-site

A comprehensive real estate funding platform built with Next.js, designed to help real estate investors secure funding for fix-and-flip projects. The platform provides detailed application forms, property calculators, and streamlined funding request processing.

## Technology Stack

### Frontend
- **Next.js 15.4.4** with App Router
- **React 19.1.0**
- **TypeScript 5.x**
- **Tailwind CSS v4**

### Backend & Database
- **MongoDB 6.18.0** with Mongoose 8.16.5
- **Nodemailer 7.0.5** for email notifications
- Next.js API Routes for serverless functions

### Development Tools
- ESLint with Next.js configuration
- PostCSS for CSS processing

## Features

### 1. Comprehensive Funding Application Form
- **Personal Information:** First name, last name, organization/company
- **Contact Details:** Email, phone with validation
- **Loan Requirements:** Amount needed, property type, timeline
- **Property Details:** Address, purchase price, rehab budget, ARV
- **Experience Tracking:** Previous deals, FICO score, rental properties
- **File Upload:** Property photos support
- **Validation:** Client-side and server-side validation

### 2. Property Investment Calculator
- Purchase price and rehab cost inputs
- ARV (After Repair Value) calculations
- Profit margin analysis
- Interactive results display

### 3. Quick Application Form
- Simplified version for initial inquiries
- Basic contact and project information
- Faster submission process

### 4. Email Integration
- Automated email notifications via Nodemailer
- Application confirmation emails
- Admin notification system

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/akc031185/fundfixandflip-site.git
cd fundfixandflip-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
fundfixandflip-site/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── applications/
│   │   │   │   ├── funding/route.ts      # Main funding application API
│   │   │   │   └── quick/route.ts        # Quick application API
│   │   │   ├── test-email/route.ts       # Email testing endpoint
│   │   │   └── test/route.ts             # General testing endpoint
│   │   ├── calculator/page.tsx           # Property calculator page
│   │   ├── contact/page.tsx              # Contact/funding request page
│   │   ├── globals.css                   # Global styles
│   │   ├── layout.tsx                    # Root layout component
│   │   └── page.tsx                      # Homepage
│   ├── components/
│   │   ├── AboutSection.tsx              # About section component
│   │   ├── ContactCTA.tsx                # Contact call-to-action
│   │   ├── ContactForm.tsx               # Main funding application form
│   │   ├── Header.tsx                    # Site header/navigation
│   │   ├── HeroSection.tsx               # Homepage hero section
│   │   ├── Logo.tsx                      # Company logo component
│   │   ├── PropertyCalculator.tsx        # Investment calculator
│   │   └── QuickApplicationForm.tsx      # Simplified application form
│   ├── lib/
│   │   ├── email.ts                      # Email service configuration
│   │   └── mongodb.ts                    # Database connection
│   └── models/
│       ├── FundingApplication.ts         # Main application data model
│       └── QuickApplication.ts           # Quick application data model
├── public/                               # Static assets
├── next.config.ts                        # Next.js configuration
├── package.json                          # Dependencies and scripts
├── tailwind.config.js                    # Tailwind CSS configuration
└── tsconfig.json                         # TypeScript configuration
```

## Recent Changes & Development History

### December 2024 - Organization Field Integration

**Commit:** `84c3db2` - Add Organization/Company field to funding request form

**Changes Made:**
1. **ContactForm Component Updates:**
   - Added `organization` field to form state
   - Implemented UI field with proper styling between Last Name and Email
   - Added field to form reset functionality
   - Optional field with placeholder "Your company or business name"

2. **MongoDB Model Enhancement:**
   - Updated `FundingApplication.ts` interface to include `organization?: string`
   - Added schema validation with 100 character limit
   - Field properly trimmed and optional

3. **Integration Improvements:**
   - Form now matches breeze-financial.com structure requirements
   - Seamless integration with existing form functionality
   - All existing features preserved

**Technical Details:**
- Build tested successfully with no breaking changes
- Only minor ESLint warning (non-blocking)
- Full backward compatibility maintained

## Environment Setup

### Environment Variables
Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password
EMAIL_HOST=your_smtp_host
EMAIL_PORT=your_smtp_port
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## API Endpoints

### Funding Applications
- `POST /api/applications/funding` - Submit full funding application
- `POST /api/applications/quick` - Submit quick application

### Testing & Utilities
- `POST /api/test-email` - Test email functionality
- `GET /api/test` - General API testing endpoint

## Database Schema

### FundingApplication Model
```typescript
interface IFundingApplication {
  firstName: string              // Required, max 50 chars
  lastName: string               // Required, max 50 chars
  organization?: string          // Optional, max 100 chars (NEW)
  email: string                  // Required, validated
  phone: string                  // Required, max 20 chars
  loanAmount: string             // Required, predefined options
  propertyType?: string          // Optional, predefined options
  propertyAddress?: string       // Optional, max 200 chars
  purchasePrice?: string         // Optional, max 20 chars
  propertyOwned?: 'yes' | 'no'   // Optional
  rehabBudget?: string           // Optional, max 20 chars
  photos?: string[]              // Optional, file paths
  arv?: string                   // Optional, max 20 chars
  ficoScore?: string             // Optional, predefined ranges
  groundUpDeals?: string         // Optional, predefined ranges
  flipDeals?: string             // Optional, predefined ranges
  rentalsOwned?: string          // Optional, predefined ranges
  experience?: string            // Optional, predefined levels
  timeline?: string              // Optional, predefined options
  message?: string               // Optional, max 1000 chars
  status: 'pending' | 'reviewing' | 'approved' | 'rejected'
  createdAt: Date
  updatedAt: Date
}
```

## Deployment

### Current Deployment
This project is deployed on Vercel and accessible at [fundyourfixandflip.com](https://fundyourfixandflip.com).

### Deployment Checklist
1. Set up environment variables in deployment platform
2. Configure MongoDB connection
3. Set up email service
4. Test all form submissions
5. Verify file upload functionality

## Contributing

### Development Workflow
1. Create feature branch from `main`
2. Make changes with descriptive commits
3. Test thoroughly including build process
4. Submit pull request with detailed description

### Code Standards
- Use TypeScript for all new files
- Follow ESLint configurations
- Maintain component modularity
- Add proper error handling
- Document complex functions

## Future Enhancements

### Planned Features
- [ ] Admin dashboard for application management
- [ ] Application status tracking for users
- [ ] Document upload improvements
- [ ] Integration with underwriting systems
- [ ] Real-time chat support

## Contact Information

- **Phone**: (855) FUND-FIX
- **Email**: funding@fundyourfixandflip.com

## License

© 2024 Fund Your Fix & Flip. All rights reserved.

---

**Last Updated:** December 2024  
**Version:** 1.0.0
