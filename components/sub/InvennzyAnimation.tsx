const InvennzyAnimation = () => (
  <svg width="100%" viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>{`
        @keyframes scanLine {
          0%   { transform: translateY(0px); opacity: 1; }
          80%  { transform: translateY(160px); opacity: 0.7; }
          100% { transform: translateY(0px); opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        @keyframes checkPop {
          0%   { opacity: 0; transform: scale(0.5); }
          60%  { opacity: 1; transform: scale(1.15); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes boxBounce {
          0%, 100% { transform: translateY(0); }
          40%      { transform: translateY(-5px); }
        }
        @keyframes slideIn {
          from { transform: translateX(-18px); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
        .inv-scan-beam { animation: scanLine 2.8s ease-in-out infinite; }
        .inv-dot-pulse  { animation: pulse 1.4s ease-in-out infinite; }
        .inv-dot-pulse2 { animation: pulse 1.4s ease-in-out infinite 0.4s; }
        .inv-dot-pulse3 { animation: pulse 1.4s ease-in-out infinite 0.8s; }
        .inv-check1 { animation: checkPop 0.5s ease-out 0.5s both; }
        .inv-check2 { animation: checkPop 0.5s ease-out 1.2s both; }
        .inv-check3 { animation: checkPop 0.5s ease-out 1.9s both; }
        .inv-box1 { animation: boxBounce 2.2s ease-in-out infinite 0s; }
        .inv-box2 { animation: boxBounce 2.2s ease-in-out infinite 0.5s; }
        .inv-box3 { animation: boxBounce 2.2s ease-in-out infinite 1s; }
        .inv-row1 { animation: slideIn 0.6s ease-out 0.6s both; }
        .inv-row2 { animation: slideIn 0.6s ease-out 0.9s both; }
        .inv-row3 { animation: slideIn 0.6s ease-out 1.2s both; }
      `}</style>
      <linearGradient id="inv-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0f0c2e"/>
        <stop offset="100%" stopColor="#1a1445"/>
      </linearGradient>
      <clipPath id="inv-clip">
        <rect x="30" y="40" width="240" height="220"/>
      </clipPath>
    </defs>

    {/* Background */}
    <rect width="460" height="300" fill="url(#inv-bg)" rx="12"/>

    {/* Shelf uprights */}
    <rect x="48" y="45" width="6" height="215" fill="#3d3580" rx="2"/>
    <rect x="108" y="45" width="6" height="215" fill="#3d3580" rx="2"/>
    <rect x="168" y="45" width="6" height="215" fill="#3d3580" rx="2"/>
    <rect x="228" y="45" width="6" height="215" fill="#3d3580" rx="2"/>

    {/* Shelf planks */}
    <rect x="42" y="85"  width="198" height="7" fill="#4a3f9a" rx="2"/>
    <rect x="42" y="145" width="198" height="7" fill="#4a3f9a" rx="2"/>
    <rect x="42" y="205" width="198" height="7" fill="#4a3f9a" rx="2"/>
    <rect x="42" y="255" width="198" height="7" fill="#4a3f9a" rx="2"/>

    {/* Row 1 boxes */}
    <g className="inv-box1">
      <rect x="56"  y="63" width="40" height="22" fill="#378ADD" rx="3"/>
      <rect x="116" y="63" width="40" height="22" fill="#378ADD" rx="3"/>
      <rect x="176" y="67" width="36" height="18" fill="#5DCAA5" rx="3"/>
    </g>

    {/* Row 2 boxes */}
    <g className="inv-box2">
      <rect x="56"  y="122" width="36" height="23" fill="#5DCAA5" rx="3"/>
      <rect x="116" y="125" width="40" height="20" fill="#EF9F27" rx="3"/>
      <rect x="176" y="122" width="36" height="23" fill="#378ADD" rx="3"/>
    </g>

    {/* Row 3 boxes */}
    <g className="inv-box3">
      <rect x="56"  y="183" width="40" height="22" fill="#EF9F27" rx="3"/>
      <rect x="116" y="181" width="36" height="24" fill="#378ADD" rx="3"/>
      <rect x="176" y="183" width="40" height="22" fill="#5DCAA5" rx="3"/>
    </g>

    {/* Scan beam */}
    <g clipPath="url(#inv-clip)" className="inv-scan-beam">
      <rect x="42" y="45" width="198" height="3" fill="#7BB8F5" opacity="0.55" rx="1"/>
      <rect x="42" y="46" width="198" height="16" fill="#4fa8ee" opacity="0.08"/>
    </g>

    {/* Scan label */}
    <rect x="42" y="270" width="198" height="1" fill="#534AB7" opacity="0.5"/>
    <text x="141" y="283" textAnchor="middle" fontSize="10" fill="#9999cc" fontFamily="sans-serif">
      SCANNING INVENTORY
    </text>

    {/* Right panel */}
    <rect x="268" y="45" width="170" height="218" fill="#12103a" rx="8" stroke="#2a2260" strokeWidth="1"/>
    <rect x="268" y="45" width="170" height="30" fill="#1e1a55" rx="8"/>
    <rect x="268" y="63" width="170" height="12" fill="#1e1a55"/>
    <text x="353" y="65" textAnchor="middle" fontSize="11" fill="#aaaaee" fontFamily="sans-serif" fontWeight="500">
      LIVE TRACKER
    </text>

    {/* Status row 1 */}
    <g className="inv-row1">
      <rect x="280" y="88" width="146" height="28" fill="#1a1650" rx="5"/>
      <circle cx="293" cy="102" r="5" fill="#1D9E75" className="inv-dot-pulse"/>
      <text x="304" y="107" fontSize="11" fill="#ccccee" fontFamily="sans-serif">Reagent Cabinet A</text>
      <g className="inv-check1">
        <text x="407" y="107" fontSize="11" fill="#5DCAA5" fontFamily="sans-serif">✓</text>
      </g>
    </g>

    {/* Status row 2 */}
    <g className="inv-row2">
      <rect x="280" y="124" width="146" height="28" fill="#1a1650" rx="5"/>
      <circle cx="293" cy="138" r="5" fill="#EF9F27" className="inv-dot-pulse2"/>
      <text x="304" y="143" fontSize="11" fill="#ccccee" fontFamily="sans-serif">Lab Instruments</text>
      <g className="inv-check2">
        <text x="409" y="143" fontSize="11" fill="#EF9F27" fontFamily="sans-serif">!</text>
      </g>
    </g>

    {/* Status row 3 */}
    <g className="inv-row3">
      <rect x="280" y="160" width="146" height="28" fill="#1a1650" rx="5"/>
      <circle cx="293" cy="174" r="5" fill="#1D9E75" className="inv-dot-pulse3"/>
      <text x="304" y="179" fontSize="11" fill="#ccccee" fontFamily="sans-serif">Maintenance Logs</text>
      <g className="inv-check3">
        <text x="409" y="179" fontSize="11" fill="#5DCAA5" fontFamily="sans-serif">✓</text>
      </g>
    </g>

    {/* Approval badge */}
    <rect x="280" y="200" width="146" height="36" fill="#0f2a1a" rx="6" stroke="#1D9E75" strokeWidth="0.8"/>
    <text x="353" y="215" textAnchor="middle" fontSize="10" fill="#5DCAA5" fontFamily="sans-serif">REPAIR APPROVAL</text>
    <text x="353" y="229" textAnchor="middle" fontSize="11" fill="#9FE1CB" fontFamily="sans-serif" fontWeight="500">
      Auto sign-off ✓
    </text>

    {/* Budget bar */}
    <rect x="280" y="248" width="146" height="8" fill="#1a1650" rx="4"/>
    <rect x="280" y="248" width="98"  height="8" fill="#534AB7" rx="4"/>
    <text x="280" y="267" fontSize="10" fill="#7777aa" fontFamily="sans-serif">Budget used: 67%</text>
  </svg>
);

export default InvennzyAnimation;