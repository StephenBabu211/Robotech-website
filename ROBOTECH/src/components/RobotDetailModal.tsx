import React, { useState } from 'react';
import { Robot } from '../types';
import { RobotImageVisual } from './RobotImageVisual';
import { 
  X, 
  Cpu, 
  Battery, 
  Ruler, 
  Weight, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  ShoppingCart, 
  Calendar, 
  Sparkles,
  Wifi,
  Thermometer,
  Layers
} from 'lucide-react';

interface RobotDetailModalProps {
  robot: Robot | null;
  onClose: () => void;
  onEnquire: (robotName: string, intent: 'Buy' | 'Rent' | 'Both') => void;
}

export const RobotDetailModal: React.FC<RobotDetailModalProps> = ({ robot, onClose, onEnquire }) => {
  if (!robot) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'applications'>('overview');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl my-8 bg-[#0B1020] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,229,255,0.25)] text-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background Subtle Accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-20 cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Top Header */}
        <div className="flex flex-wrap items-center gap-3 pr-10">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
            {robot.categoryTag} • MODEL {robot.idNumber}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/40">
            {robot.availability === 'BUY_AND_RENT' ? 'Available for Buy & Rent' : 'Available for Purchase'}
          </span>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-6">
          
          {/* Left Visual Preview Column */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-4">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
              <RobotImageVisual
                idNumber={robot.idNumber}
                name={robot.name}
                categoryTag={robot.categoryTag}
                accentColor={robot.accentColor}
                className="h-[280px]"
                interactiveHover={false}
              />
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-center space-y-1 font-mono">
              <div className="text-xs text-slate-400 uppercase font-bold">Pricing</div>
              <div className="text-sm font-black text-cyan-400">{robot.priceText}</div>
              <div className="text-[10px] text-slate-500">Custom enterprise quote available</div>
            </div>
          </div>

          {/* Right Details Column */}
          <div className="md:col-span-7 space-y-6">
            
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">{robot.name}</h2>
              <p className="text-sm text-cyan-400 font-medium mt-0.5">{robot.subtitle}</p>
            </div>

            {/* Modal Internal Navigation Tabs */}
            <div className="flex border-b border-slate-800">
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-3 px-4 font-bold text-sm transition-colors border-b-2 cursor-pointer ${
                  activeTab === 'overview'
                    ? 'border-cyan-400 text-cyan-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                Overview & Features
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`pb-3 px-4 font-bold text-sm transition-colors border-b-2 cursor-pointer ${
                  activeTab === 'specs'
                    ? 'border-cyan-400 text-cyan-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab('applications')}
                className={`pb-3 px-4 font-bold text-sm transition-colors border-b-2 cursor-pointer ${
                  activeTab === 'applications'
                    ? 'border-cyan-400 text-cyan-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                Applications
              </button>
            </div>

            {/* Tab 1: Overview & Features */}
            {activeTab === 'overview' && (
              <div className="space-y-4 animate-fade-in">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {robot.longDescription || robot.description}
                </p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                    Key Features & Capabilities:
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {robot.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Specifications */}
            {activeTab === 'specs' && (
              <div className="grid grid-cols-2 gap-3 text-xs font-mono animate-fade-in">
                <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
                  <div className="text-slate-500 uppercase">Height / Size</div>
                  <div className="text-slate-200 font-bold mt-1 flex items-center gap-1.5">
                    <Ruler className="w-3.5 h-3.5 text-cyan-400" />
                    {robot.specifications.height}
                  </div>
                </div>

                <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
                  <div className="text-slate-500 uppercase">Weight</div>
                  <div className="text-slate-200 font-bold mt-1 flex items-center gap-1.5">
                    <Weight className="w-3.5 h-3.5 text-cyan-400" />
                    {robot.specifications.weight}
                  </div>
                </div>

                <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
                  <div className="text-slate-500 uppercase">Battery Runtime</div>
                  <div className="text-slate-200 font-bold mt-1 flex items-center gap-1.5">
                    <Battery className="w-3.5 h-3.5 text-emerald-400" />
                    {robot.specifications.batteryLife}
                  </div>
                </div>

                <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
                  <div className="text-slate-500 uppercase">AI Processor</div>
                  <div className="text-slate-200 font-bold mt-1 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-purple-400" />
                    {robot.specifications.aiProcessor}
                  </div>
                </div>

                <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl col-span-2">
                  <div className="text-slate-500 uppercase">Sensors Array</div>
                  <div className="text-slate-200 font-bold mt-1">
                    {robot.specifications.sensors}
                  </div>
                </div>

                <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl col-span-2">
                  <div className="text-slate-500 uppercase">Connectivity & Warranty</div>
                  <div className="text-slate-200 font-bold mt-1 flex items-center justify-between">
                    <span>{robot.specifications.connectivity}</span>
                    <span className="text-emerald-400">{robot.specifications.warranty}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Applications */}
            {activeTab === 'applications' && (
              <div className="space-y-3 animate-fade-in">
                <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                  Ideal Industry Deployments:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {robot.applications.map((app, idx) => (
                    <div key={idx} className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl text-xs font-medium text-slate-200 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Bottom Action CTAs */}
            <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  onClose();
                  onEnquire(robot.name, 'Buy');
                }}
                className="py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black text-sm hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Buy This Robot</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onEnquire(robot.name, robot.availability === 'BUY_AND_RENT' ? 'Rent' : 'Buy');
                }}
                className="py-3 px-4 rounded-xl bg-purple-600/30 border border-purple-500 text-purple-200 hover:bg-purple-600 hover:text-white font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Rental / Quote</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
