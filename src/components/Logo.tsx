interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = "", width = 200, height = 60 }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 220 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-300 hover:scale-105"
      >
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="houseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="roofGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>
        </defs>
        
        {/* Background Circle with subtle gradient */}
        <circle cx="32" cy="30" r="28" fill="url(#houseGradient)" opacity="0.08" />
        
        {/* House Icon */}
        <g transform="translate(14, 14)">
          {/* House Shadow */}
          <rect x="6" y="21" width="20" height="15" fill="#000000" opacity="0.1" rx="2" />
          
          {/* House Base */}
          <rect x="5" y="20" width="20" height="15" fill="url(#houseGradient)" rx="2" />
          
          {/* House Roof */}
          <path d="M2 20 L15 6 L28 20 Z" fill="url(#roofGradient)" />
          
          {/* Roof highlight */}
          <path d="M15 6 L28 20 L26 20 L15 8 Z" fill="#ffffff" opacity="0.2" />
          
          {/* Door */}
          <rect x="12" y="26" width="6" height="9" fill="#ffffff" rx="1" />
          <circle cx="16.5" cy="30" r="0.8" fill="#d1d5db" />
          
          {/* Windows with frames */}
          <rect x="7" y="22" width="5" height="5" fill="#ffffff" rx="1" />
          <rect x="18" y="22" width="5" height="5" fill="#ffffff" rx="1" />
          
          {/* Window cross frames */}
          <line x1="9.5" y1="22" x2="9.5" y2="27" stroke="#e5e7eb" strokeWidth="0.5" />
          <line x1="7" y1="24.5" x2="12" y2="24.5" stroke="#e5e7eb" strokeWidth="0.5" />
          <line x1="20.5" y1="22" x2="20.5" y2="27" stroke="#e5e7eb" strokeWidth="0.5" />
          <line x1="18" y1="24.5" x2="23" y2="24.5" stroke="#e5e7eb" strokeWidth="0.5" />
          
          {/* Hammer Tool */}
          <g transform="translate(22, 3)">
            <rect x="0" y="9" width="10" height="3" fill="#f59e0b" rx="1" />
            <rect x="8" y="4" width="3" height="12" fill="#8b4513" rx="1" />
            <circle cx="9.5" cy="4" r="1.5" fill="#d97706" />
          </g>
        </g>
        
        {/* Main Text */}
        <g transform="translate(70, 0)">
          {/* "Fund" */}
          <text x="0" y="25" fill="url(#textGradient)" fontSize="18" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif">
            Fund
          </text>
          
          {/* "Your" - smaller, positioned under Fund */}
          <text x="0" y="42" fill="#6b7280" fontSize="11" fontWeight="500" fontFamily="system-ui, -apple-system, sans-serif">
            Your
          </text>
          
          {/* "Fix" */}
          <text x="50" y="25" fill="#f59e0b" fontSize="18" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif">
            Fix
          </text>
          
          {/* Stylized Ampersand */}
          <text x="82" y="30" fill="#94a3b8" fontSize="16" fontWeight="300" fontFamily="Georgia, serif" style={{fontStyle: 'italic'}}>
            &
          </text>
          
          {/* "Flip" */}
          <text x="100" y="25" fill="#f59e0b" fontSize="18" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif">
            Flip
          </text>
          
          {/* Tagline */}
          <text x="0" y="52" fill="#9ca3af" fontSize="8" fontWeight="400" fontFamily="system-ui, -apple-system, sans-serif">
            Real Estate Investment Funding
          </text>
        </g>
        
        {/* Decorative Elements */}
        {/* Dollar signs */}
        <g transform="translate(195, 5)">
          <text x="0" y="15" fill="#10b981" fontSize="14" fontWeight="bold" opacity="0.7">
            $
          </text>
          <text x="8" y="10" fill="#10b981" fontSize="11" fontWeight="bold" opacity="0.5">
            $
          </text>
          <text x="4" y="25" fill="#10b981" fontSize="9" fontWeight="bold" opacity="0.3">
            $
          </text>
        </g>
        
        {/* Subtle underline accent */}
        <rect x="70" y="48" width="125" height="1.5" fill="#f59e0b" opacity="0.4" rx="0.75" />
      </svg>
    </div>
  );
}

// Alternative compact version for mobile
export function LogoCompact({ className = "", width = 140, height = 40 }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 140 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-300 hover:scale-105"
      >
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="compactHouseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="compactRoofGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>
        
        {/* House Icon - Compact */}
        <g transform="translate(4, 6)">
          {/* House Base */}
          <rect x="3" y="15" width="16" height="12" fill="url(#compactHouseGradient)" rx="1" />
          
          {/* House Roof */}
          <path d="M1 15 L11 4 L21 15 Z" fill="url(#compactRoofGradient)" />
          
          {/* Roof highlight */}
          <path d="M11 4 L21 15 L19 15 L11 6 Z" fill="#ffffff" opacity="0.2" />
          
          {/* Door */}
          <rect x="9" y="20" width="4" height="7" fill="#ffffff" rx="0.5" />
          <circle cx="11.5" cy="23" r="0.5" fill="#d1d5db" />
          
          {/* Windows */}
          <rect x="5" y="17" width="3" height="3" fill="#ffffff" rx="0.5" />
          <rect x="14" y="17" width="3" height="3" fill="#ffffff" rx="0.5" />
          
          {/* Small hammer */}
          <g transform="translate(18, 2)">
            <rect x="0" y="6" width="4" height="1.5" fill="#f59e0b" rx="0.5" />
            <rect x="3" y="3" width="1.5" height="6" fill="#8b4513" rx="0.5" />
          </g>
        </g>
        
        {/* Compact Text */}
        <g transform="translate(32, 0)">
          <text x="0" y="16" fill="#1e3a8a" fontSize="14" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif">
            Fund
          </text>
          <text x="0" y="28" fill="#6b7280" fontSize="8" fontWeight="500" fontFamily="system-ui, -apple-system, sans-serif">
            Your
          </text>
          
          <text x="45" y="16" fill="#f59e0b" fontSize="14" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif">
            Fix&Flip
          </text>
          
          {/* Small dollar accent */}
          <text x="95" y="12" fill="#10b981" fontSize="10" fontWeight="bold" opacity="0.6">
            $
          </text>
        </g>
        
        {/* Compact Underline */}
        <rect x="32" y="32" width="90" height="1" fill="#f59e0b" opacity="0.4" rx="0.5" />
      </svg>
    </div>
  );
}