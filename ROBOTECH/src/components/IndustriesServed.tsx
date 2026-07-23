import React, { useState } from 'react';
import { 
  Building2, 
  Hospital, 
  GraduationCap, 
  Factory, 
  PartyPopper, 
  ShoppingBag, 
  Warehouse, 
  Landmark, 
  Plane, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface IndustriesServedProps {
  onSelectIndustryRobots: (industryName: string) => void;
}

export const IndustriesServed: React.FC<IndustriesServedProps> = ({ onSelectIndustryRobots }) => {
  const industries = [
    {
      id: 'hotels',
      name: 'Hotels & Resorts',
      icon: Building2,
      accent: '#00E5FF',
      desc: 'Front-desk guest greeting, automated check-in, luggage escort, and room service delivery.',
      recommended: ['Nexus A1', 'Recepto', 'Nila']
    },
    {
      id: 'hospitals',
      name: 'Hospitals & Clinics',
      icon: Hospital,
      accent: '#00FFA3',
      desc: 'Patient queue management, lobby guidance, medicine delivery, and contactless check-in.',
      recommended: ['Recepto', 'Nexus A1']
    },
    {
      id: 'education',
      name: 'Schools, Colleges & Universities',
      icon: GraduationCap,
      accent: '#8B5CF6',
      desc: 'STEM robotics development, AI research labs, automated campus tours, and science fairs.',
      recommended: ['Nova A1', 'Unitree G1', 'Go2 Air']
    },
    {
      id: 'factories',
      name: 'Factories & Manufacturing',
      icon: Factory,
      accent: '#3B82F6',
      desc: 'Industrial biped tool operation, dangerous environment inspection, and safety patrols.',
      recommended: ['Unitree G1', 'Unitree Go2 Pro']
    },
    {
      id: 'events',
      name: 'Events, Expos & Exhibitions',
      icon: PartyPopper,
      accent: '#EC4899',
      desc: 'Crowd engagement, live photo printing, product launch hosting, and brand activations.',
      recommended: ['Aurra', 'Nila', 'Go2 Air']
    },
    {
      id: 'retail',
      name: 'Shopping Malls & Retail',
      icon: ShoppingBag,
      accent: '#F59E0B',
      desc: 'Interactive ad display, customer survey collection, pop-up store promotions, and photo booths.',
      recommended: ['Nila', 'Aurra']
    },
    {
      id: 'corporate',
      name: 'Corporate Offices',
      icon: Building2,
      accent: '#00E5FF',
      desc: 'Visitor badge issuance, executive escort, security surveillance, and meeting room orientation.',
      recommended: ['Nexus A1', 'Recepto']
    },
    {
      id: 'warehouses',
      name: 'Warehouses & Logistics',
      icon: Warehouse,
      accent: '#10B981',
      desc: 'Autonomous 4D LiDAR security perimeter patrol, inventory check, and hazard detection.',
      recommended: ['Unitree Go2 Pro', 'Unitree G1']
    },
    {
      id: 'museums',
      name: 'Museums & Experience Centers',
      icon: Landmark,
      accent: '#8B5CF6',
      desc: 'Autonomous exhibit docent tours, multi-lingual audio guidance, and souvenir photo printing.',
      recommended: ['Nila', 'Nexus A1']
    },
    {
      id: 'airports',
      name: 'Airports & Transit Hubs',
      icon: Plane,
      accent: '#00E5FF',
      desc: 'Flight info assistance, terminal wayfinding guidance, queue management, and 24/7 security patrol.',
      recommended: ['Nexus A1', 'Unitree Go2 Pro']
    }
  ];

  return (
    <section id="industries" className="py-24 relative bg-[#0B1020]/90 border-t border-slate-800">
      
      {/* Background Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VERSATILE DEPLOYMENT SECTORS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Industries{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Transformed by ROBOTECH
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Our intelligent robots are purpose-built to solve real-world operational challenges across diverse sectors.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                className="group relative bg-[#141E46]/30 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,229,255,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border"
                      style={{ backgroundColor: `${ind.accent}15`, borderColor: `${ind.accent}40` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: ind.accent }} />
                    </div>
                  </div>

                  <h3 className="text-base font-extrabold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 space-y-2">
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Recommended:</div>
                  <div className="flex flex-wrap gap-1">
                    {ind.recommended.map((r, i) => (
                      <span key={i} className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900 border border-slate-700 text-cyan-300">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
