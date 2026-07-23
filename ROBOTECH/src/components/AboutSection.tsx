import React, { useState } from 'react';
import { Target, Eye, Cpu, Lightbulb, ShieldCheck, Award, Zap, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'innovation' | 'technology'>('mission');

  const tabContents = {
    mission: {
      icon: Target,
      title: 'Our Mission',
      accent: '#00E5FF',
      text: 'To engineer, manufacture, and democratize world-class intelligent robotics that automate repetitive, complex, and high-risk operational tasks across hospitality, healthcare, research, logistics, and corporate environments.',
      points: [
        'Accelerate front-desk, security, and industrial automation',
        'Deliver end-to-end sales, leasing, and operational support',
        'Bridge academic research with commercial AI robotics'
      ]
    },
    vision: {
      icon: Eye,
      title: 'Our Vision',
      accent: '#8B5CF6',
      text: 'To be the global pioneer in human-robot collaboration, creating a world where intelligent service robots seamlessly enhance productivity, elevate customer satisfaction, and drive technological empowerment in every industry.',
      points: [
        'Pioneer autonomous multi-agent robot fleets',
        'Make robotics accessible through zero-capex flexible rentals',
        'Establish India as a hub for advanced AI robotics manufacturing'
      ]
    },
    innovation: {
      icon: Lightbulb,
      title: 'Continuous Innovation',
      accent: '#00FFA3',
      text: 'Our state-of-the-art R&D facilities combine cutting-edge deep reinforcement learning, solid-state LiDAR sensors, spatial computing, and multi-modal generative AI to build robots that learn and adapt in real time.',
      points: [
        'Proprietary 3D spatial mapping and obstacle avoidance',
        'Generative voice AI supporting 20+ regional & global languages',
        'Force-torque sensitive dexterous manipulation'
      ]
    },
    technology: {
      icon: Cpu,
      title: 'Core Technology Stack',
      accent: '#3B82F6',
      text: 'ROBOTECH platforms integrate open-source ROS2 architecture, NVIDIA Orin AGX AI processors, cloud fleet monitoring dashboards, and enterprise API hooks for seamless CRM and PMS integration.',
      points: [
        'NVIDIA Orin & Intel Xeon AI compute engines',
        'End-to-end ROS2 & Python SDK developer pipelines',
        'Military-grade encrypted cloud telemetry & remote diagnostics'
      ]
    }
  };

  const currentTab = tabContents[activeTab];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0B1020]/80 border-t border-slate-800/80">
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            <span>ABOUT ROBOTECH</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Pioneering the Era of{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Autonomous Intelligence
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
            ROBOTECH designs and manufactures intelligent service robots that automate customer interaction, research, logistics, security, education and industrial applications.
          </p>
        </div>

        {/* Tabbed Interactive Pillars (Mission, Vision, Innovation, Technology) */}
        <div className="mt-14 max-w-5xl mx-auto">
          
          {/* Navigation Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 p-2 rounded-2xl bg-slate-900/90 border border-slate-800">
            {(Object.keys(tabContents) as Array<keyof typeof tabContents>).map((key) => {
              const item = tabContents[key];
              const Icon = item.icon;
              const isActive = activeTab === key;

              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-lg border border-cyan-500/40 shadow-cyan-500/10'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  <Icon className="w-4 h-4" style={{ color: isActive ? item.accent : undefined }} />
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="mt-8 bg-slate-900/60 border border-cyan-500/20 rounded-3xl p-8 sm:p-10 backdrop-blur-xl relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-8 space-y-5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center border"
                    style={{ backgroundColor: `${currentTab.accent}15`, borderColor: `${currentTab.accent}40` }}
                  >
                    <currentTab.icon className="w-6 h-6" style={{ color: currentTab.accent }} />
                  </div>
                  <h3 className="text-2xl font-black text-white">{currentTab.title}</h3>
                </div>

                <p className="text-slate-300 text-base leading-relaxed">
                  {currentTab.text}
                </p>

                <div className="space-y-3 pt-2">
                  {currentTab.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: currentTab.accent }} />
                      <span className="text-sm text-slate-200 font-medium">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Graphical Badge Side */}
              <div className="md:col-span-4 flex items-center justify-center">
                <div
                  className="w-48 h-48 rounded-full flex flex-col items-center justify-center p-6 text-center border relative"
                  style={{
                    backgroundColor: `${currentTab.accent}08`,
                    borderColor: `${currentTab.accent}30`,
                    boxShadow: `0 0 40px ${currentTab.accent}20`
                  }}
                >
                  <currentTab.icon className="w-12 h-12 mb-3 animate-pulse" style={{ color: currentTab.accent }} />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-300">
                    ROBOTECH CORE
                  </span>
                  <span className="text-sm font-black text-white mt-1">100% Engineered</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Why Choose Us Highlight Grid */}
        <div className="mt-20">
          <h3 className="text-2xl font-black text-white text-center mb-10">
            Why Leading Organizations Partner with <span className="text-cyan-400">ROBOTECH</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all hover:-translate-y-1">
              <Zap className="w-8 h-8 text-cyan-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">AI Powered</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Integrated with multi-modal LLMs, computer vision, and spatial awareness for natural autonomous operation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 transition-all hover:-translate-y-1">
              <Award className="w-8 h-8 text-purple-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Made in India</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Designed, assembled, and supported locally with world-class engineering standards and indigenous hardware.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all hover:-translate-y-1">
              <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">24x7 Support</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Round-the-clock remote diagnostics, OTA software upgrades, and on-site SLA technician replacement.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all hover:-translate-y-1">
              <Cpu className="w-8 h-8 text-amber-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Custom Development</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tailored software integration with existing hotel PMS, hospital HIS, warehouse ERP, and custom voice scripts.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
