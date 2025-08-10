import nodemailer from 'nodemailer';

interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

// Zoho email configuration
const emailConfig: EmailConfig = {
  host: process.env.SMTP_HOST || 'smtp.zoho.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  },
};

const transporter = nodemailer.createTransport(emailConfig);

interface FundingApplicationEmail {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  loanAmount: string;
  propertyType?: string;
  propertyAddress?: string;
  purchasePrice?: string;
  propertyOwned?: string;
  rehabBudget?: string;
  arv?: string;
  ficoScore?: string;
  groundUpDeals?: string;
  flipDeals?: string;
  rentalsOwned?: string;
  experience?: string;
  timeline?: string;
  message?: string;
  applicationId: string;
}

interface QuickApplicationEmail {
  fullName: string;
  email: string;
  phone: string;
  loanAmount: number;
  applicationId: string;
}

export async function sendFundingApplicationEmail(applicationData: FundingApplicationEmail) {
  const {
    firstName,
    lastName,
    email,
    phone,
    loanAmount,
    propertyType,
    propertyAddress,
    purchasePrice,
    propertyOwned,
    rehabBudget,
    arv,
    ficoScore,
    groundUpDeals,
    flipDeals,
    rentalsOwned,
    experience,
    timeline,
    message,
    applicationId
  } = applicationData;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: #fff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2c3e50; margin: 0; font-size: 28px;">🏠 New Funding Application</h1>
          <p style="color: #7f8c8d; margin: 10px 0 0 0;">Fund Your Fix & Flip</p>
        </div>
        
        <div style="background-color: #3498db; color: white; padding: 15px; border-radius: 5px; margin-bottom: 25px;">
          <h2 style="margin: 0; font-size: 20px;">Application ID: ${applicationId}</h2>
        </div>

        <div style="margin-bottom: 25px;">
          <h3 style="color: #2c3e50; border-bottom: 2px solid #ecf0f1; padding-bottom: 10px; margin-bottom: 15px;">👤 Applicant Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #ecf0f1;">
              <td style="padding: 8px 0; font-weight: bold; width: 40%;">Name:</td>
              <td style="padding: 8px 0;">${firstName} ${lastName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ecf0f1;">
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #3498db; text-decoration: none;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #ecf0f1;">
              <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #3498db; text-decoration: none;">${phone}</a></td>
            </tr>
          </table>
        </div>

        <div style="margin-bottom: 25px;">
          <h3 style="color: #2c3e50; border-bottom: 2px solid #ecf0f1; padding-bottom: 10px; margin-bottom: 15px;">💰 Loan & Property Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #ecf0f1;">
              <td style="padding: 8px 0; font-weight: bold; width: 40%;">Loan Amount:</td>
              <td style="padding: 8px 0; color: #27ae60; font-weight: bold; font-size: 18px;">${loanAmount}</td>
            </tr>
            ${propertyType ? `
            <tr style="border-bottom: 1px solid #ecf0f1;">
              <td style="padding: 8px 0; font-weight: bold;">Property Type:</td>
              <td style="padding: 8px 0;">${propertyType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</td>
            </tr>` : ''}
            ${propertyAddress ? `
            <tr style="border-bottom: 1px solid #ecf0f1;">
              <td style="padding: 8px 0; font-weight: bold;">Property Address:</td>
              <td style="padding: 8px 0;">${propertyAddress}</td>
            </tr>` : ''}
            ${purchasePrice ? `
            <tr style="border-bottom: 1px solid #ecf0f1;">
              <td style="padding: 8px 0; font-weight: bold;">Purchase Price:</td>
              <td style="padding: 8px 0;">$${purchasePrice}</td>
            </tr>` : ''}
            ${propertyOwned ? `
            <tr style="border-bottom: 1px solid #ecf0f1;">
              <td style="padding: 8px 0; font-weight: bold;">Property Already Owned:</td>
              <td style="padding: 8px 0;">${propertyOwned.toUpperCase()}</td>
            </tr>` : ''}
            ${rehabBudget ? `
            <tr style="border-bottom: 1px solid #ecf0f1;">
              <td style="padding: 8px 0; font-weight: bold;">Rehab Budget:</td>
              <td style="padding: 8px 0;">$${rehabBudget}</td>
            </tr>` : ''}
            ${arv ? `
            <tr style="border-bottom: 1px solid #ecf0f1;">
              <td style="padding: 8px 0; font-weight: bold;">After Repair Value:</td>
              <td style="padding: 8px 0;">$${arv}</td>
            </tr>` : ''}
          </table>
        </div>

        <div style="margin-bottom: 25px;">
          <h3 style="color: #2c3e50; border-bottom: 2px solid #ecf0f1; padding-bottom: 10px; margin-bottom: 15px;">📊 Financial & Experience Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            ${ficoScore ? `
            <tr style="border-bottom: 1px solid #ecf0f1;">
              <td style="padding: 8px 0; font-weight: bold; width: 40%;">FICO Score:</td>
              <td style="padding: 8px 0;">${ficoScore}</td>
            </tr>` : ''}
            ${groundUpDeals ? `
            <tr style="border-bottom: 1px solid #ecf0f1;">
              <td style="padding: 8px 0; font-weight: bold;">Ground Up Deals (4 years):</td>
              <td style="padding: 8px 0;">${groundUpDeals}</td>
            </tr>` : ''}
            ${flipDeals ? `
            <tr style="border-bottom: 1px solid #ecf0f1;">
              <td style="padding: 8px 0; font-weight: bold;">Fix/Flip Deals (3 years):</td>
              <td style="padding: 8px 0;">${flipDeals}</td>
            </tr>` : ''}
            ${rentalsOwned ? `
            <tr style="border-bottom: 1px solid #ecf0f1;">
              <td style="padding: 8px 0; font-weight: bold;">Rentals Owned (1+ years):</td>
              <td style="padding: 8px 0;">${rentalsOwned}</td>
            </tr>` : ''}
            ${experience ? `
            <tr style="border-bottom: 1px solid #ecf0f1;">
              <td style="padding: 8px 0; font-weight: bold;">Overall Experience:</td>
              <td style="padding: 8px 0;">${experience}</td>
            </tr>` : ''}
            ${timeline ? `
            <tr style="border-bottom: 1px solid #ecf0f1;">
              <td style="padding: 8px 0; font-weight: bold;">Timeline:</td>
              <td style="padding: 8px 0;">${timeline}</td>
            </tr>` : ''}
          </table>
        </div>

        ${message ? `
        <div style="margin-bottom: 25px;">
          <h3 style="color: #2c3e50; border-bottom: 2px solid #ecf0f1; padding-bottom: 10px; margin-bottom: 15px;">💬 Message</h3>
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #3498db;">
            <p style="margin: 0; line-height: 1.6;">${message}</p>
          </div>
        </div>` : ''}

        <div style="background-color: #2c3e50; color: white; padding: 20px; border-radius: 5px; text-align: center; margin-top: 30px;">
          <p style="margin: 0; font-size: 14px;">
            <strong>Next Steps:</strong> Please review this application and contact the applicant within 24 hours.
          </p>
          <p style="margin: 10px 0 0 0; font-size: 12px; opacity: 0.8;">
            Submitted on ${new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric', 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </p>
        </div>
      </div>
    </div>
  `;

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: 'funding@fundyourfixandflip.com',
    subject: `🏠 New Funding Application - ${loanAmount} - ${firstName} ${lastName}`,
    html: htmlContent,
  };

  return transporter.sendMail(mailOptions);
}

export async function sendQuickApplicationEmail(applicationData: QuickApplicationEmail) {
  const { fullName, email, phone, loanAmount, applicationId } = applicationData;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: #fff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2c3e50; margin: 0; font-size: 28px;">⚡ New Quick Application</h1>
          <p style="color: #7f8c8d; margin: 10px 0 0 0;">Fund Your Fix & Flip</p>
        </div>
        
        <div style="background-color: #e67e22; color: white; padding: 15px; border-radius: 5px; margin-bottom: 25px;">
          <h2 style="margin: 0; font-size: 20px;">Quick Application ID: ${applicationId}</h2>
        </div>

        <div style="margin-bottom: 25px;">
          <h3 style="color: #2c3e50; border-bottom: 2px solid #ecf0f1; padding-bottom: 10px; margin-bottom: 15px;">👤 Applicant Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #ecf0f1;">
              <td style="padding: 10px 0; font-weight: bold; width: 40%;">Name:</td>
              <td style="padding: 10px 0; font-size: 16px;">${fullName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ecf0f1;">
              <td style="padding: 10px 0; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #3498db; text-decoration: none;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #ecf0f1;">
              <td style="padding: 10px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 10px 0;"><a href="tel:${phone}" style="color: #3498db; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #ecf0f1;">
              <td style="padding: 10px 0; font-weight: bold;">Loan Amount:</td>
              <td style="padding: 10px 0; color: #27ae60; font-weight: bold; font-size: 20px;">$${loanAmount.toLocaleString()}</td>
            </tr>
          </table>
        </div>

        <div style="background-color: #f39c12; color: white; padding: 20px; border-radius: 5px; text-align: center; margin-top: 30px;">
          <p style="margin: 0; font-size: 14px;">
            <strong>Priority:</strong> This is a quick application - contact applicant ASAP for full details!
          </p>
          <p style="margin: 10px 0 0 0; font-size: 12px; opacity: 0.9;">
            Submitted on ${new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric', 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </p>
        </div>
      </div>
    </div>
  `;

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: 'funding@fundyourfixandflip.com',
    subject: `⚡ QUICK APPLICATION - $${loanAmount.toLocaleString()} - ${fullName}`,
    html: htmlContent,
  };

  return transporter.sendMail(mailOptions);
}

// Test email connection
export async function testEmailConnection() {
  try {
    await transporter.verify();
    return { success: true, message: 'Email connection successful' };
  } catch (error) {
    console.error('Email connection failed:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}