const GradyzeAnimation = () => (
  <svg width="100%" viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>{`
        @keyframes fillBar {
          0%   { transform: scaleX(0); opacity: 0; }
          100% { transform: scaleX(1); opacity: 1; }
        }
        @keyframes countUp {
          0%   { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        @keyframes checkPop {
          0%   { opacity: 0; transform: scale(0.4); }
          70%  { opacity: 1; transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ringFill {
          0%   { stroke-dashoffset: 130; }
          100% { stroke-dashoffset: 30; }
        }
        @keyframes rowFade {
          from { opacity: 0; transform: translateX(-10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .gz-bar1 { animation: fillBar 0.6s ease-out 0.3s both; transform-origin: left center; }
        .gz-bar2 { animation: fillBar 0.6s ease-out 0.6s both; transform-origin: left center; }
        .gz-bar3 { animation: fillBar 0.6s ease-out 0.9s both; transform-origin: left center; }
        .gz-bar4 { animation: fillBar 0.6s ease-out 1.2s both; transform-origin: left center; }
        .gz-bar5 { animation: fillBar 0.6s ease-out 1.5s both; transform-origin: left center; }
        .gz-score1 { animation: countUp 0.4s ease-out 0.5s both; }
        .gz-score2 { animation: countUp 0.4s ease-out 0.8s both; }
        .gz-score3 { animation: countUp 0.4s ease-out 1.1s both; }
        .gz-score4 { animation: countUp 0.4s ease-out 1.4s both; }
        .gz-score5 { animation: countUp 0.4s ease-out 1.7s both; }
        .gz-ring { animation: ringFill 1.4s ease-out 0.5s both; }
        .gz-row1 { animation: rowFade 0.5s ease-out 0.4s both; }
        .gz-row2 { animation: rowFade 0.5s ease-out 0.7s both; }
        .gz-row3 { animation: rowFade 0.5s ease-out 1.0s both; }
        .gz-row4 { animation: rowFade 0.5s ease-out 1.3s both; }
        .gz-row5 { animation: rowFade 0.5s ease-out 1.6s both; }
        .gz-check1 { animation: checkPop 0.4s ease-out 0.6s both; }
        .gz-check2 { animation: checkPop 0.4s ease-out 1.0s both; }
        .gz-check3 { animation: checkPop 0.4s ease-out 1.4s both; }
        .gz-dot1 { animation: pulse 1.4s ease-in-out infinite 0s; }
        .gz-dot2 { animation: pulse 1.4s ease-in-out infinite 0.5s; }
        .gz-dot3 { animation: pulse 1.4s ease-in-out infinite 1.0s; }
        .gz-stat1 { animation: slideDown 0.5s ease-out 0.3s both; }
        .gz-stat2 { animation: slideDown 0.5s ease-out 0.6s both; }
        .gz-stat3 { animation: slideDown 0.5s ease-out 0.9s both; }
      `}</style>
      <linearGradient id="gz-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0c0a28"/>
        <stop offset="100%" stopColor="#12103a"/>
      </linearGradient>
      <linearGradient id="gz-bar-a" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#1D9E75"/><stop offset="100%" stopColor="#5DCAA5"/>
      </linearGradient>
      <linearGradient id="gz-bar-b" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#185FA5"/><stop offset="100%" stopColor="#378ADD"/>
      </linearGradient>
      <linearGradient id="gz-bar-c" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#854F0B"/><stop offset="100%" stopColor="#EF9F27"/>
      </linearGradient>
      <linearGradient id="gz-bar-d" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#534AB7"/><stop offset="100%" stopColor="#AFA9EC"/>
      </linearGradient>
      <linearGradient id="gz-bar-e" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#993556"/><stop offset="100%" stopColor="#ED93B1"/>
      </linearGradient>
    </defs>

    {/* Background */}
    <rect width="460" height="300" fill="url(#gz-bg)" rx="12"/>

    {/* ── LEFT: Subject bars — x=10, y=10, full height ── */}
    <rect x="10" y="10" width="200" height="278" fill="#0a0c25" rx="8" stroke="#1e2050" strokeWidth="1"/>
    <rect x="10" y="10" width="200" height="28" fill="#12163a" rx="8"/>
    <rect x="10" y="26" width="200" height="12" fill="#12163a"/>
    <text x="110" y="30" textAnchor="middle" fontSize="11" fill="#8899cc" fontFamily="sans-serif" fontWeight="500">SUBJECT SCORES</text>

    {/* Math */}
    <g className="gz-row1">
      <text x="22" y="58" fontSize="10" fill="#7788bb" fontFamily="sans-serif">Mathematics</text>
      <rect x="22" y="62" width="176" height="14" fill="#0d1030" rx="3"/>
      <g className="gz-bar1"><rect x="22" y="62" width="158" height="14" fill="url(#gz-bar-a)" rx="3"/></g>
      <g className="gz-score1"><text x="196" y="73" textAnchor="end" fontSize="10" fill="#5DCAA5" fontFamily="sans-serif" fontWeight="500">90%</text></g>
    </g>

    {/* Physics */}
    <g className="gz-row2">
      <text x="22" y="98" fontSize="10" fill="#7788bb" fontFamily="sans-serif">Physics</text>
      <rect x="22" y="102" width="176" height="14" fill="#0d1030" rx="3"/>
      <g className="gz-bar2"><rect x="22" y="102" width="141" height="14" fill="url(#gz-bar-b)" rx="3"/></g>
      <g className="gz-score2"><text x="196" y="113" textAnchor="end" fontSize="10" fill="#378ADD" fontFamily="sans-serif" fontWeight="500">80%</text></g>
    </g>

    {/* Chemistry */}
    <g className="gz-row3">
      <text x="22" y="138" fontSize="10" fill="#7788bb" fontFamily="sans-serif">Chemistry</text>
      <rect x="22" y="142" width="176" height="14" fill="#0d1030" rx="3"/>
      <g className="gz-bar3"><rect x="22" y="142" width="123" height="14" fill="url(#gz-bar-c)" rx="3"/></g>
      <g className="gz-score3"><text x="196" y="153" textAnchor="end" fontSize="10" fill="#EF9F27" fontFamily="sans-serif" fontWeight="500">70%</text></g>
    </g>

    {/* CS */}
    <g className="gz-row4">
      <text x="22" y="178" fontSize="10" fill="#7788bb" fontFamily="sans-serif">Computer Sci.</text>
      <rect x="22" y="182" width="176" height="14" fill="#0d1030" rx="3"/>
      <g className="gz-bar4"><rect x="22" y="182" width="167" height="14" fill="url(#gz-bar-d)" rx="3"/></g>
      <g className="gz-score4"><text x="196" y="193" textAnchor="end" fontSize="10" fill="#AFA9EC" fontFamily="sans-serif" fontWeight="500">95%</text></g>
    </g>

    {/* English */}
    <g className="gz-row5">
      <text x="22" y="218" fontSize="10" fill="#7788bb" fontFamily="sans-serif">English</text>
      <rect x="22" y="222" width="176" height="14" fill="#0d1030" rx="3"/>
      <g className="gz-bar5"><rect x="22" y="222" width="132" height="14" fill="url(#gz-bar-e)" rx="3"/></g>
      <g className="gz-score5"><text x="196" y="233" textAnchor="end" fontSize="10" fill="#ED93B1" fontFamily="sans-serif" fontWeight="500">75%</text></g>
    </g>

    {/* Avg footer */}
    <rect x="22" y="254" width="176" height="24" fill="#111540" rx="4"/>
    <text x="110" y="270" textAnchor="middle" fontSize="10" fill="#9999dd" fontFamily="sans-serif">Class Average: 82%</text>

    {/* ── MIDDLE: Ring + roles ── */}
    <rect x="220" y="10" width="120" height="278" fill="#0a0c25" rx="8" stroke="#1e2050" strokeWidth="1"/>
    <rect x="220" y="10" width="120" height="28" fill="#12163a" rx="8"/>
    <rect x="220" y="26" width="120" height="12" fill="#12163a"/>
    <text x="280" y="30" textAnchor="middle" fontSize="11" fill="#8899cc" fontFamily="sans-serif" fontWeight="500">OVERALL</text>

    {/* Ring */}
    <circle cx="280" cy="120" r="42" fill="#0d1030" stroke="#1e2050" strokeWidth="2"/>
    <circle
      cx="280" cy="120" r="33"
      fill="none" stroke="#1D9E75" strokeWidth="8"
      strokeDasharray="130 207"
      strokeDashoffset="30"
      strokeLinecap="round"
      className="gz-ring"
      transform="rotate(-90 280 120)"
    />
    <text x="280" y="116" textAnchor="middle" fontSize="16" fill="#5DCAA5" fontFamily="sans-serif" fontWeight="500">82%</text>
    <text x="280" y="130" textAnchor="middle" fontSize="10" fill="#446655" fontFamily="sans-serif">Grade A</text>

    {/* Roles */}
    <g className="gz-check1">
      <rect x="230" y="176" width="100" height="24" fill="#0f2a1a" rx="4" stroke="#1D9E75" strokeWidth="0.6"/>
      <circle cx="243" cy="188" r="5" fill="#1D9E75" className="gz-dot1"/>
      <text x="252" y="192" fontSize="10" fill="#5DCAA5" fontFamily="sans-serif">Admin</text>
    </g>
    <g className="gz-check2">
      <rect x="230" y="206" width="100" height="24" fill="#0d1535" rx="4" stroke="#185FA5" strokeWidth="0.6"/>
      <circle cx="243" cy="218" r="5" fill="#185FA5" className="gz-dot2"/>
      <text x="252" y="222" fontSize="10" fill="#378ADD" fontFamily="sans-serif">Teacher</text>
    </g>
    <g className="gz-check3">
      <rect x="230" y="236" width="100" height="24" fill="#1a1050" rx="4" stroke="#534AB7" strokeWidth="0.6"/>
      <circle cx="243" cy="248" r="5" fill="#534AB7" className="gz-dot3"/>
      <text x="252" y="252" fontSize="10" fill="#AFA9EC" fontFamily="sans-serif">Student</text>
    </g>

    {/* Auto grade */}
    <rect x="230" y="266" width="100" height="18" fill="#111840" rx="4" stroke="#2a2260" strokeWidth="0.8"/>
    <text x="280" y="278" textAnchor="middle" fontSize="9" fill="#AFA9EC" fontFamily="sans-serif" fontWeight="500">✓ Auto Calculated</text>

    {/* ── RIGHT: Leaderboard ── */}
    <rect x="350" y="10" width="100" height="278" fill="#0a0c25" rx="8" stroke="#1e2050" strokeWidth="1"/>
    <rect x="350" y="10" width="100" height="28" fill="#12163a" rx="8"/>
    <rect x="350" y="26" width="100" height="12" fill="#12163a"/>
    <text x="400" y="30" textAnchor="middle" fontSize="10" fill="#8899cc" fontFamily="sans-serif" fontWeight="500">TOP STUDENTS</text>

    {[
      { rank:"1", name:"Aanya", score:"97", color:"#EF9F27", cls:"gz-stat1" },
      { rank:"2", name:"Rohan", score:"94", color:"#7788bb", cls:"gz-stat2" },
      { rank:"3", name:"Priya", score:"91", color:"#854F0B", cls:"gz-stat3" },
    ].map(({ rank, name, score, color, cls }, i) => (
      <g key={name} className={cls}>
        <rect x="358" y={50 + i * 58} width="84" height="48" fill="#0f1240" rx="5" stroke="#1e2050" strokeWidth="0.5"/>
        <text x="366" y={70 + i * 58} fontSize="12" fill={color} fontFamily="sans-serif" fontWeight="500">#{rank}</text>
        <text x="366" y={86 + i * 58} fontSize="10" fill="#aabbcc" fontFamily="sans-serif">{name}</text>
        <text x="436" y={78 + i * 58} textAnchor="end" fontSize="13" fill={color} fontFamily="sans-serif" fontWeight="500">{score}</text>
      </g>
    ))}

    {/* Pass rate */}
    <g className="gz-stat1">
      <rect x="358" y="228" width="84" height="28" fill="#0f2a1a" rx="4"/>
      <text x="400" y="240" textAnchor="middle" fontSize="9" fill="#446655" fontFamily="sans-serif">Pass Rate</text>
      <text x="400" y="252" textAnchor="middle" fontSize="11" fill="#5DCAA5" fontFamily="sans-serif" fontWeight="500">96.4%</text>
    </g>

    {/* Highest */}
    <g className="gz-stat2">
      <rect x="358" y="260" width="84" height="24" fill="#1a1050" rx="4"/>
      <text x="400" y="272" textAnchor="middle" fontSize="9" fill="#443366" fontFamily="sans-serif">Highest</text>
      <text x="400" y="282" textAnchor="middle" fontSize="10" fill="#AFA9EC" fontFamily="sans-serif" fontWeight="500">97/100</text>
    </g>
  </svg>
);

export default GradyzeAnimation;