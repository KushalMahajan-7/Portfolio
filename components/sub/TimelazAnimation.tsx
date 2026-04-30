const TimelazAnimation = () => (
  <svg width="100%" viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>{`
        @keyframes fillSlot {
          0%   { opacity: 0; transform: scaleX(0); }
          100% { opacity: 1; transform: scaleX(1); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes conflictFlash {
          0%, 100% { fill: #A32D2D; }
          50%       { fill: #F09595; }
        }
        @keyframes checkPop {
          0%   { opacity: 0; transform: scale(0.4); }
          70%  { opacity: 1; transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes scanRow {
          0%   { transform: translateY(0px); opacity: 0.8; }
          100% { transform: translateY(190px); opacity: 0.8; }
        }
        @keyframes aiPulse {
          0%, 100% { r: 24; opacity: 1; }
          50%       { r: 28; opacity: 0.6; }
        }
        .tl-slot1  { animation: fillSlot 0.4s ease-out 0.3s both; transform-origin: left center; }
        .tl-slot2  { animation: fillSlot 0.4s ease-out 0.7s both; transform-origin: left center; }
        .tl-slot3  { animation: fillSlot 0.4s ease-out 1.1s both; transform-origin: left center; }
        .tl-slot4  { animation: fillSlot 0.4s ease-out 1.5s both; transform-origin: left center; }
        .tl-slot5  { animation: fillSlot 0.4s ease-out 1.9s both; transform-origin: left center; }
        .tl-slot6  { animation: fillSlot 0.4s ease-out 2.3s both; transform-origin: left center; }
        .tl-slot7  { animation: fillSlot 0.4s ease-out 2.7s both; transform-origin: left center; }
        .tl-slot8  { animation: fillSlot 0.4s ease-out 3.1s both; transform-origin: left center; }
        .tl-slot9  { animation: fillSlot 0.4s ease-out 3.5s both; transform-origin: left center; }
        .tl-conflict { animation: conflictFlash 0.6s ease-in-out 1.3s 4; }
        .tl-check1 { animation: checkPop 0.4s ease-out 0.6s both; }
        .tl-check2 { animation: checkPop 0.4s ease-out 1.0s both; }
        .tl-check3 { animation: checkPop 0.4s ease-out 1.4s both; }
        .tl-check4 { animation: checkPop 0.4s ease-out 1.8s both; }
        .tl-row3 { animation: slideDown 0.5s ease-out 0.8s both; }
        .tl-row4 { animation: slideDown 0.5s ease-out 1.1s both; }
        .tl-scan { animation: scanRow 2s linear infinite; }
        .tl-ai-ring { animation: aiPulse 1.8s ease-in-out infinite; }
        .tl-dot1 { animation: pulse 1.2s ease-in-out infinite 0s; }
        .tl-dot2 { animation: pulse 1.2s ease-in-out infinite 0.4s; }
        .tl-dot3 { animation: pulse 1.2s ease-in-out infinite 0.8s; }
      `}</style>
      <linearGradient id="tl-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0a0f2e"/>
        <stop offset="100%" stopColor="#111a3a"/>
      </linearGradient>
      <clipPath id="tl-grid-clip">
        <rect x="10" y="10" width="290" height="280"/>
      </clipPath>
    </defs>

    {/* Background — same as Invennzy */}
    <rect width="460" height="300" fill="url(#tl-bg)" rx="12"/>

    {/* ── TIMETABLE GRID — starts at y=10, ends at y=285 ── */}
    <rect x="10" y="10" width="290" height="278" fill="#0d1535" rx="6" stroke="#1e2a5e" strokeWidth="1"/>

    {/* Column headers */}
    <rect x="10" y="10" width="290" height="28" fill="#151f50" rx="6"/>
    <rect x="10" y="26" width="290" height="12" fill="#151f50"/>
    {["Mon","Tue","Wed","Thu","Fri"].map((d, i) => (
      <text key={d} x={62 + i * 54} y="29" textAnchor="middle" fontSize="11" fill="#7788cc" fontFamily="sans-serif" fontWeight="500">{d}</text>
    ))}

    {/* Row labels P1–P4 */}
    {["P1","P2","P3","P4"].map((p, i) => (
      <text key={p} x="24" y={68 + i * 60} fontSize="10" fill="#556699" fontFamily="sans-serif" fontWeight="500">{p}</text>
    ))}

    {/* Grid lines horizontal */}
    {[38, 98, 158, 218, 278].map(y => (
      <line key={y} x1="10" y1={y} x2="300" y2={y} stroke="#1e2a5e" strokeWidth="0.5"/>
    ))}
    {/* Grid lines vertical */}
    {[38, 92, 146, 200, 254, 300].map(x => (
      <line key={x} x1={x} y1="10" x2={x} y2="288" stroke="#1e2a5e" strokeWidth="0.5"/>
    ))}

    {/* Row P1 */}
    <g className="tl-slot1"><rect x="42" y="42" width="46" height="50" fill="#1D9E75" rx="3"/><text x="65" y="71" textAnchor="middle" fontSize="10" fill="#9FE1CB" fontFamily="sans-serif">Math</text></g>
    <g className="tl-slot2"><rect x="96" y="42" width="46" height="50" fill="#185FA5" rx="3"/><text x="119" y="71" textAnchor="middle" fontSize="10" fill="#B5D4F4" fontFamily="sans-serif">Phy</text></g>
    <g className="tl-slot3"><rect x="150" y="42" width="46" height="50" fill="#534AB7" rx="3"/><text x="173" y="71" textAnchor="middle" fontSize="10" fill="#CECBF6" fontFamily="sans-serif">CS</text></g>
    <g className="tl-slot4"><rect x="204" y="42" width="46" height="50" fill="#854F0B" rx="3"/><text x="227" y="71" textAnchor="middle" fontSize="10" fill="#FAC775" fontFamily="sans-serif">Chem</text></g>
    <g className="tl-slot5"><rect x="258" y="42" width="38" height="50" fill="#1D9E75" rx="3"/><text x="277" y="71" textAnchor="middle" fontSize="10" fill="#9FE1CB" fontFamily="sans-serif">Bio</text></g>

    {/* Row P2 */}
    <g className="tl-slot6"><rect x="42" y="102" width="46" height="50" fill="#534AB7" rx="3"/><text x="65" y="131" textAnchor="middle" fontSize="10" fill="#CECBF6" fontFamily="sans-serif">CS</text></g>
    <g className="tl-conflict tl-slot7"><rect x="96" y="102" width="46" height="50" fill="#A32D2D" rx="3"/><text x="119" y="131" textAnchor="middle" fontSize="9" fill="#F7C1C1" fontFamily="sans-serif">Conflict</text></g>
    <g className="tl-slot8"><rect x="150" y="102" width="46" height="50" fill="#185FA5" rx="3"/><text x="173" y="131" textAnchor="middle" fontSize="10" fill="#B5D4F4" fontFamily="sans-serif">Phy</text></g>
    <g className="tl-slot9"><rect x="204" y="102" width="46" height="50" fill="#1D9E75" rx="3"/><text x="227" y="131" textAnchor="middle" fontSize="10" fill="#9FE1CB" fontFamily="sans-serif">Math</text></g>

    {/* Row P3 */}
    <g className="tl-row3">
      <rect x="42"  y="162" width="46" height="50" fill="#854F0B" rx="3"/><text x="65"  y="191" textAnchor="middle" fontSize="10" fill="#FAC775" fontFamily="sans-serif">Chem</text>
      <rect x="96"  y="162" width="46" height="50" fill="#1D9E75" rx="3"/><text x="119" y="191" textAnchor="middle" fontSize="10" fill="#9FE1CB" fontFamily="sans-serif">Bio</text>
      <rect x="150" y="162" width="46" height="50" fill="#534AB7" rx="3"/><text x="173" y="191" textAnchor="middle" fontSize="10" fill="#CECBF6" fontFamily="sans-serif">CS</text>
      <rect x="204" y="162" width="46" height="50" fill="#185FA5" rx="3"/><text x="227" y="191" textAnchor="middle" fontSize="10" fill="#B5D4F4" fontFamily="sans-serif">Phy</text>
      <rect x="258" y="162" width="38" height="50" fill="#854F0B" rx="3"/><text x="277" y="191" textAnchor="middle" fontSize="10" fill="#FAC775" fontFamily="sans-serif">Chem</text>
    </g>

    {/* Row P4 */}
    <g className="tl-row4">
      <rect x="42"  y="222" width="46" height="50" fill="#185FA5" rx="3"/><text x="65"  y="251" textAnchor="middle" fontSize="10" fill="#B5D4F4" fontFamily="sans-serif">Phy</text>
      <rect x="96"  y="222" width="46" height="50" fill="#534AB7" rx="3"/><text x="119" y="251" textAnchor="middle" fontSize="10" fill="#CECBF6" fontFamily="sans-serif">CS</text>
      <rect x="150" y="222" width="46" height="50" fill="#1D9E75" rx="3"/><text x="173" y="251" textAnchor="middle" fontSize="10" fill="#9FE1CB" fontFamily="sans-serif">Math</text>
      <rect x="204" y="222" width="46" height="50" fill="#854F0B" rx="3"/><text x="227" y="251" textAnchor="middle" fontSize="10" fill="#FAC775" fontFamily="sans-serif">Chem</text>
      <rect x="258" y="222" width="38" height="50" fill="#534AB7" rx="3"/><text x="277" y="251" textAnchor="middle" fontSize="10" fill="#CECBF6" fontFamily="sans-serif">CS</text>
    </g>

    {/* Scan line */}
    <g clipPath="url(#tl-grid-clip)" className="tl-scan">
      <rect x="10" y="10" width="290" height="2" fill="#60a5fa" opacity="0.5"/>
      <rect x="10" y="12" width="290" height="14" fill="#60a5fa" opacity="0.06"/>
    </g>

    {/* Footer label */}
    <text x="155" y="296" textAnchor="middle" fontSize="9" fill="#445588" fontFamily="sans-serif">AI TIMETABLE · AUTO-GENERATED</text>

    {/* ── RIGHT PANEL — mirrors Invennzy right panel proportions ── */}
    <rect x="312" y="10" width="138" height="278" fill="#0a0e2a" rx="8" stroke="#1e2a5e" strokeWidth="1"/>
    <rect x="312" y="10" width="138" height="30" fill="#111840" rx="8"/>
    <rect x="312" y="28" width="138" height="12" fill="#111840"/>
    <text x="381" y="31" textAnchor="middle" fontSize="11" fill="#8899dd" fontFamily="sans-serif" fontWeight="500">AI SCHEDULER</text>

    {/* AI circle */}
    <circle cx="381" cy="110" r="38" fill="#0d1535" stroke="#1e2a5e" strokeWidth="1"/>
    <circle cx="381" cy="110" className="tl-ai-ring" r="24" fill="#151f50" stroke="#534AB7" strokeWidth="2"/>
    <text x="381" y="116" textAnchor="middle" fontSize="18" fill="#AFA9EC" fontFamily="sans-serif" fontWeight="500">AI</text>

    {/* Pulsing dots */}
    <circle cx="381" cy="68"  r="4" fill="#534AB7" className="tl-dot1"/>
    <circle cx="414" cy="128" r="4" fill="#1D9E75" className="tl-dot2"/>
    <circle cx="348" cy="128" r="4" fill="#185FA5" className="tl-dot3"/>

    {/* Checklist */}
    <g className="tl-check1">
      <rect x="320" y="158" width="122" height="24" fill="#0d1f0d" rx="4"/>
      <text x="330" y="174" fontSize="10" fill="#5DCAA5" fontFamily="sans-serif">✓ Conflicts resolved</text>
    </g>
    <g className="tl-check2">
      <rect x="320" y="188" width="122" height="24" fill="#0d1535" rx="4"/>
      <text x="330" y="204" fontSize="10" fill="#7BB8F5" fontFamily="sans-serif">✓ Faculty optimized</text>
    </g>
    <g className="tl-check3">
      <rect x="320" y="218" width="122" height="24" fill="#1a0f35" rx="4"/>
      <text x="330" y="234" fontSize="10" fill="#AFA9EC" fontFamily="sans-serif">✓ Rooms allocated</text>
    </g>
    <g className="tl-check4">
      <rect x="320" y="248" width="122" height="24" fill="#1a140a" rx="4"/>
      <text x="330" y="264" fontSize="10" fill="#FAC775" fontFamily="sans-serif">✓ Schedule ready</text>
    </g>
  </svg>
);

export default TimelazAnimation;