import React from 'react';

interface RobotImageVisualProps {
  idNumber: string;
  name: string;
  categoryTag: string;
  accentColor?: string;
  className?: string;
  interactiveHover?: boolean;
}

export const RobotImageVisual: React.FC<RobotImageVisualProps> = ({
  idNumber,
  name,
  categoryTag,
  accentColor = '#00E5FF',
  className = '',
  interactiveHover = true
}) => {
  // Render specific SVG art matching the exact robot from the user reference image
  const renderRobotGraphic = () => {
    switch (idNumber) {
      case '07': // Nila – Interactive Photo Robot
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_10px_25px_rgba(0,229,255,0.25)]">
            <defs>
              <radialGradient id="nilaGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="nilaBody" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#E2E8F0" />
                <stop offset="100%" stopColor="#CBD5E1" />
              </linearGradient>
              <linearGradient id="screenUI" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0F172A" />
                <stop offset="100%" stopColor="#1E293B" />
              </linearGradient>
            </defs>
            {/* Background Glow */}
            <circle cx="200" cy="220" r="140" fill="url(#nilaGlow)" />
            
            {/* Base Pedestal Ring */}
            <ellipse cx="200" cy="350" rx="90" ry="20" fill="#00E5FF" opacity="0.3" className="animate-pulse" />
            <ellipse cx="200" cy="345" rx="80" ry="16" fill="url(#nilaBody)" stroke="#00E5FF" strokeWidth="2" />

            {/* Column Body */}
            <path d="M150 340 L165 180 L235 180 L250 340 Z" fill="url(#nilaBody)" stroke="#94A3B8" strokeWidth="1" />
            <path d="M170 330 L180 200 L220 200 L230 330 Z" fill="#F8FAFC" />

            {/* Upper Torso / Camera Housing */}
            <path d="M160 180 C160 140 240 140 240 180 Z" fill="url(#nilaBody)" />
            <rect x="150" y="160" width="100" height="45" rx="12" fill="#FFFFFF" stroke="#00E5FF" strokeWidth="1.5" />

            {/* Glowing Red DSLR Camera Lens */}
            <circle cx="200" cy="120" r="28" fill="#1E293B" stroke="#00E5FF" strokeWidth="2" />
            <circle cx="200" cy="120" r="20" fill="#090D16" />
            <circle cx="200" cy="120" r="14" fill="#EF4444" className="animate-pulse" />
            <circle cx="196" cy="116" r="4" fill="#FFFFFF" opacity="0.8" />

            {/* Touch Screen Interface */}
            <rect x="165" y="210" width="70" height="90" rx="8" fill="url(#screenUI)" stroke="#00E5FF" strokeWidth="1.5" />
            <rect x="172" y="220" width="56" height="40" rx="4" fill="#00E5FF" opacity="0.2" />
            <circle cx="200" cy="240" r="10" fill="#00E5FF" />
            <text x="200" y="275" textAnchor="middle" fill="#00E5FF" fontSize="8" fontFamily="sans-serif" fontWeight="bold">PHOTO PRINT</text>
            <rect x="175" y="285" width="50" height="4" rx="2" fill="#00FFA3" />

            {/* Flash Ring */}
            <circle cx="200" cy="120" r="34" fill="none" stroke="#00E5FF" strokeWidth="2" strokeDasharray="4 4" />
          </svg>
        );

      case '04': // Aurra – AI Event Robot
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_10px_25px_rgba(139,92,246,0.3)]">
            <defs>
              <radialGradient id="aurraGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="aurraBody" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#CBD5E1" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="130" fill="url(#aurraGlow)" />

            {/* Floating Halo */}
            <ellipse cx="200" cy="65" rx="50" ry="12" fill="none" stroke="#8B5CF6" strokeWidth="3" className="animate-pulse" />

            {/* Cute Head */}
            <rect x="140" y="80" width="120" height="95" rx="40" fill="url(#aurraBody)" stroke="#8B5CF6" strokeWidth="2" />
            {/* Visor Display */}
            <rect x="155" y="95" width="90" height="60" rx="25" fill="#0F172A" />
            {/* Expressive Eyes */}
            <ellipse cx="180" cy="125" rx="12" ry="16" fill="#00E5FF" />
            <ellipse cx="220" cy="125" rx="12" ry="16" fill="#00E5FF" />
            <ellipse cx="182" cy="122" rx="4" ry="6" fill="#FFFFFF" />
            <ellipse cx="222" cy="122" rx="4" ry="6" fill="#FFFFFF" />

            {/* Ear Pods */}
            <circle cx="132" cy="127" r="12" fill="#8B5CF6" />
            <circle cx="268" cy="127" r="12" fill="#8B5CF6" />

            {/* Neck */}
            <rect x="185" y="175" width="30" height="15" rx="4" fill="#334155" />

            {/* Torso */}
            <path d="M150 190 C150 185, 250 185, 250 190 L240 290 C240 300, 160 300, 160 290 Z" fill="url(#aurraBody)" stroke="#8B5CF6" strokeWidth="1.5" />
            
            {/* Chest Screen */}
            <rect x="170" y="210" width="60" height="60" rx="8" fill="#1E1B4B" stroke="#8B5CF6" strokeWidth="2" />
            <path d="M185 240 L195 250 L215 230" fill="none" stroke="#00FFA3" strokeWidth="3" strokeLinecap="round" />

            {/* Pointing Arm (Right arm raised welcoming/pointing) */}
            <path d="M245 200 Q280 170 270 140" fill="none" stroke="url(#aurraBody)" strokeWidth="16" strokeLinecap="round" />
            <circle cx="270" cy="135" r="10" fill="#8B5CF6" />

            {/* Left Arm */}
            <path d="M155 200 Q125 240 135 270" fill="none" stroke="url(#aurraBody)" strokeWidth="16" strokeLinecap="round" />

            {/* Base Stand */}
            <ellipse cx="200" cy="330" rx="60" ry="15" fill="#8B5CF6" opacity="0.4" />
          </svg>
        );

      case '05': // Nexus A1 – Humanoid Reception Robot
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_10px_25px_rgba(0,229,255,0.3)]">
            <defs>
              <linearGradient id="nexusWhite" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#CBD5E1" />
              </linearGradient>
              <linearGradient id="nexusDark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="100%" stopColor="#0F172A" />
              </linearGradient>
            </defs>
            {/* Background Halo */}
            <circle cx="200" cy="180" r="130" fill="#00E5FF" opacity="0.1" />

            {/* Head Helmet */}
            <path d="M160 80 C160 40 240 40 240 80 L235 120 C235 130 165 130 165 120 Z" fill="url(#nexusWhite)" stroke="#00E5FF" strokeWidth="1.5" />
            {/* Dark Visor Face */}
            <path d="M170 70 Q200 65 230 70 L225 105 Q200 115 175 105 Z" fill="url(#nexusDark)" />
            {/* Glowing Blue Eyes Strip */}
            <path d="M180 85 H220" stroke="#00E5FF" strokeWidth="4" strokeLinecap="round" className="animate-pulse" />

            {/* Neck & Shoulders */}
            <rect x="188" y="125" width="24" height="20" rx="4" fill="#334155" />
            
            {/* Broad Armor Torso */}
            <path d="M130 145 C130 135 270 135 270 145 L250 280 L150 280 Z" fill="url(#nexusWhite)" stroke="#00E5FF" strokeWidth="1.5" />
            {/* Dark Side Armor panels */}
            <path d="M130 145 L155 155 L160 260 L150 280 Z" fill="url(#nexusDark)" />
            <path d="M270 145 L245 155 L240 260 L250 280 Z" fill="url(#nexusDark)" />

            {/* Chest Tablet Device */}
            <rect x="165" y="170" width="70" height="70" rx="6" fill="#0F172A" stroke="#00E5FF" strokeWidth="2" />
            <rect x="172" y="178" width="56" height="42" fill="#1E293B" />
            <circle cx="200" cy="195" r="10" fill="#00E5FF" opacity="0.8" />
            <text x="200" y="230" textAnchor="middle" fill="#00E5FF" fontSize="7" fontWeight="bold">WELCOME GUEST</text>

            {/* Arms */}
            <path d="M125 150 Q100 200 115 260" fill="none" stroke="url(#nexusWhite)" strokeWidth="18" strokeLinecap="round" />
            <path d="M275 150 Q300 200 285 260" fill="none" stroke="url(#nexusWhite)" strokeWidth="18" strokeLinecap="round" />

            {/* Base Pedestal */}
            <ellipse cx="200" cy="340" rx="75" ry="18" fill="#00E5FF" opacity="0.3" />
          </svg>
        );

      case '10': // Nova A1 – Educational Research Robot
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_10px_25px_rgba(0,255,163,0.3)]">
            <defs>
              <linearGradient id="novaWhite" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#E2E8F0" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="120" fill="#00FFA3" opacity="0.1" />

            {/* Compact Head */}
            <rect x="155" y="70" width="90" height="75" rx="20" fill="url(#novaWhite)" stroke="#00FFA3" strokeWidth="2" />
            <rect x="165" y="82" width="70" height="45" rx="10" fill="#0F172A" />
            <circle cx="185" cy="105" r="8" fill="#00FFA3" />
            <circle cx="215" cy="105" r="8" fill="#00FFA3" />

            {/* Exposed Joint Nodes */}
            <circle cx="150" cy="160" r="12" fill="#00FFA3" />
            <circle cx="250" cy="160" r="12" fill="#00FFA3" />

            {/* Torso */}
            <rect x="160" y="145" width="80" height="110" rx="12" fill="url(#novaWhite)" stroke="#00FFA3" strokeWidth="1.5" />
            {/* Tablet Interface */}
            <rect x="170" y="165" width="60" height="70" rx="4" fill="#1E293B" stroke="#00FFA3" strokeWidth="1" />
            <path d="M175 180 L190 200 L210 185 L225 210" fill="none" stroke="#00FFA3" strokeWidth="2" />
            <text x="200" y="225" textAnchor="middle" fill="#00FFA3" fontSize="7" fontWeight="bold">ROS2 LAB</text>

            {/* Legs */}
            <rect x="170" y="260" width="22" height="80" rx="6" fill="url(#novaWhite)" stroke="#475569" strokeWidth="1" />
            <rect x="208" y="260" width="22" height="80" rx="6" fill="url(#novaWhite)" stroke="#475569" strokeWidth="1" />
            
            {/* Feet */}
            <rect x="160" y="335" width="35" height="12" rx="4" fill="#0F172A" />
            <rect x="205" y="335" width="35" height="12" rx="4" fill="#0F172A" />
          </svg>
        );

      case '01': // Unitree G1 Humanoid Robot
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_10px_25px_rgba(0,229,255,0.35)]">
            <defs>
              <linearGradient id="g1Metal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#475569" />
                <stop offset="50%" stopColor="#1E293B" />
                <stop offset="100%" stopColor="#0F172A" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="135" fill="#00E5FF" opacity="0.1" />

            {/* Helmet Head with Ring Visor */}
            <rect x="150" y="60" width="100" height="70" rx="30" fill="url(#g1Metal)" stroke="#00E5FF" strokeWidth="2" />
            <ellipse cx="200" cy="95" rx="35" ry="16" fill="#090D16" stroke="#00E5FF" strokeWidth="3" />
            <circle cx="200" cy="95" r="6" fill="#00E5FF" className="animate-ping" />

            {/* Industrial Biped Shoulders */}
            <rect x="120" y="130" width="160" height="40" rx="10" fill="url(#g1Metal)" stroke="#64748B" strokeWidth="1.5" />
            
            {/* Chest Unitree Badge */}
            <rect x="165" y="140" width="70" height="20" rx="4" fill="#0F172A" border="1px solid #00E5FF" />
            <text x="200" y="154" textAnchor="middle" fill="#00E5FF" fontSize="9" fontWeight="900" letterSpacing="2">UNITREE G1</text>

            {/* Core Torso */}
            <path d="M145 170 L255 170 L240 260 L160 260 Z" fill="url(#g1Metal)" stroke="#00E5FF" strokeWidth="1" />
            
            {/* Articulated Biped Legs */}
            <path d="M165 260 L155 340" stroke="#334155" strokeWidth="20" strokeLinecap="round" />
            <path d="M235 260 L245 340" stroke="#334155" strokeWidth="20" strokeLinecap="round" />

            {/* Metallic Knees */}
            <circle cx="160" cy="300" r="10" fill="#00E5FF" />
            <circle cx="240" cy="300" r="10" fill="#00E5FF" />

            {/* Feet */}
            <path d="M140 340 L175 340 L180 355 L135 355 Z" fill="#0F172A" />
            <path d="M225 340 L260 340 L265 355 L220 355 Z" fill="#0F172A" />
          </svg>
        );

      case '02': // Unitree Go2 Pro – Quadruped Robot
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_10px_25px_rgba(0,255,163,0.35)]">
            <defs>
              <linearGradient id="go2Silver" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#94A3B8" />
                <stop offset="50%" stopColor="#475569" />
                <stop offset="100%" stopColor="#1E293B" />
              </linearGradient>
            </defs>
            {/* Scan Waves */}
            <path d="M70 180 Q200 120 330 180" fill="none" stroke="#00FFA3" strokeWidth="2" strokeDasharray="6 6" className="animate-pulse" />

            {/* Main Quadruped Body Chassis */}
            <rect x="110" y="170" width="180" height="75" rx="25" fill="url(#go2Silver)" stroke="#00FFA3" strokeWidth="2" />

            {/* Front Head & 4D LiDAR Dome */}
            <ellipse cx="120" cy="190" rx="30" ry="25" fill="#0F172A" stroke="#00FFA3" strokeWidth="2" />
            <circle cx="120" cy="180" r="12" fill="#00FFA3" opacity="0.9" />
            <circle cx="120" cy="180" r="6" fill="#FFFFFF" />

            {/* Side Branding */}
            <text x="200" y="212" textAnchor="middle" fill="#00FFA3" fontSize="12" fontWeight="900" letterSpacing="1">Go2 PRO 4D LiDAR</text>

            {/* Mechanical Legs */}
            {/* Front Left */}
            <path d="M130 235 L100 290 L110 340" fill="none" stroke="#334155" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
            {/* Front Right */}
            <path d="M150 235 L125 290 L135 340" fill="none" stroke="#64748B" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
            {/* Rear Left */}
            <path d="M250 235 L275 290 L265 340" fill="none" stroke="#334155" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
            {/* Rear Right */}
            <path d="M270 235 L295 290 L285 340" fill="none" stroke="#64748B" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />

            {/* Paws */}
            <circle cx="110" cy="342" r="7" fill="#00FFA3" />
            <circle cx="135" cy="342" r="6" fill="#00FFA3" />
            <circle cx="265" cy="342" r="7" fill="#00FFA3" />
            <circle cx="285" cy="342" r="6" fill="#00FFA3" />
          </svg>
        );

      case '03': // Go2 Air – Lightweight Quadruped Robot
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_10px_25px_rgba(139,92,246,0.3)]">
            <defs>
              <linearGradient id="go2AirWhite" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#CBD5E1" />
              </linearGradient>
            </defs>
            {/* Lightweight Frame */}
            <rect x="120" y="175" width="160" height="65" rx="20" fill="url(#go2AirWhite)" stroke="#8B5CF6" strokeWidth="2" />
            <ellipse cx="130" cy="195" rx="22" ry="18" fill="#1E1B4B" />
            <circle cx="130" cy="195" r="8" fill="#8B5CF6" />

            <text x="200" y="213" textAnchor="middle" fill="#8B5CF6" fontSize="11" fontWeight="800">Go2 AIR</text>

            {/* Agile Legs */}
            <path d="M140 230 L115 285 L125 335" fill="none" stroke="#475569" strokeWidth="12" strokeLinecap="round" />
            <path d="M260 230 L285 285 L275 335" fill="none" stroke="#475569" strokeWidth="12" strokeLinecap="round" />

            <circle cx="125" cy="336" r="6" fill="#8B5CF6" />
            <circle cx="275" cy="336" r="6" fill="#8B5CF6" />
          </svg>
        );

      case '06': // Recepto – AI Receptionist Robot
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_10px_25px_rgba(0,229,255,0.3)]">
            <defs>
              <linearGradient id="receptoConsole" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#E2E8F0" />
              </linearGradient>
            </defs>
            {/* Tabletop Console Base */}
            <path d="M80 300 L320 300 L300 350 L100 350 Z" fill="#0F172A" stroke="#00E5FF" strokeWidth="2" />

            {/* Lower Large Touch Screen Display */}
            <rect x="100" y="200" width="200" height="110" rx="12" fill="url(#receptoConsole)" stroke="#00E5FF" strokeWidth="2" />
            <rect x="110" y="210" width="180" height="90" rx="8" fill="#0F172A" />

            {/* UI Tiles on lower screen */}
            <rect x="120" y="220" width="50" height="32" rx="4" fill="#00E5FF" opacity="0.3" />
            <rect x="175" y="220" width="50" height="32" rx="4" fill="#8B5CF6" opacity="0.3" />
            <rect x="230" y="220" width="50" height="32" rx="4" fill="#00FFA3" opacity="0.3" />
            <text x="200" y="280" textAnchor="middle" fill="#00E5FF" fontSize="10" fontWeight="bold">RECEPTO AI CHECK-IN</text>

            {/* Upper Face Unit Unit */}
            <rect x="145" y="100" width="110" height="85" rx="20" fill="url(#receptoConsole)" stroke="#00E5FF" strokeWidth="2" />
            <rect x="155" y="110" width="90" height="65" rx="14" fill="#090D16" />

            {/* Big Expressive AI Eyes */}
            <circle cx="180" cy="142" r="14" fill="#00E5FF" />
            <circle cx="220" cy="142" r="14" fill="#00E5FF" />
            <circle cx="184" cy="138" r="5" fill="#FFFFFF" />
            <circle cx="224" cy="138" r="5" fill="#FFFFFF" />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#141E46]/60 via-[#0B1020]/80 to-[#0B1020] border border-cyan-500/20 p-6 transition-all duration-300 ${
        interactiveHover ? 'hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)]' : ''
      } ${className}`}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#00E5FF_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

      {/* Number Badge (01-10) matching top-right of original cards */}
      <div className="absolute top-4 right-4 text-3xl font-black tracking-widest text-white/20 select-none font-mono">
        {idNumber}
      </div>

      {/* Category Tag matching top-left of original cards */}
      <div
        className="absolute top-4 left-4 px-2.5 py-1 rounded text-[10px] font-bold tracking-wider uppercase border bg-black/40 backdrop-blur-md"
        style={{ color: accentColor, borderColor: `${accentColor}40` }}
      >
        {categoryTag}
      </div>

      {/* Main Graphic Container */}
      <div className="w-full max-w-[280px] h-[240px] flex items-center justify-center my-2">
        {renderRobotGraphic()}
      </div>

      {/* Subtle Bottom Glow Line */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] blur-[1px]"
        style={{ backgroundColor: accentColor }}
      />
    </div>
  );
};
