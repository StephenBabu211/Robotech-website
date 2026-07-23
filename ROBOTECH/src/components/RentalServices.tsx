import React, { useState } from 'react';
import { RENTAL_PACKAGES } from '../data/robotsData';
import { Calendar, Clock, Sparkles, CheckCircle2, ArrowRight, DollarSign, Calculator } from 'lucide-react';

interface RentalServicesProps {
  onEnquirePackage: (packageName: string) => void;
}

export const RentalServices: React.FC<RentalServicesProps> = ({ onEnquirePackage }) => {
  const [selectedRobot, setSelectedRobot] = useState('Nila – Interactive Photo Robot');
  const [duration, setDuration] = useState<number>(3); // days
  const [quantity, setQuantity] = useState<number>(1);

  // Estimator calculation
  const calculateEstimatedTier = () => {
    let baseDailyRate = 25000; // INR baseline reference
    if (selectedRobot.includes('G1') || selectedRobot.includes('Nexus')) {
      baseDailyRate = 45000;
    } else if (selectedRobot.includes('Go2 Pro')) {
      baseDailyRate = 35000;
    }

    let total = baseDailyRate * duration * quantity;
    
    // Duration discounts
    if (duration >= 30) {
      total = total * 0.55; // 45% discount for monthly+
    } else if (duration >= 7) {
      total = total * 0.75; // 25% discount for weekly+
    }

    return {
      formatted: `₹${Math.round(total).toLocaleString('en-IN')}`,
      perDay: `₹${Math.round(total / duration / quantity).toLocaleString('en-IN')}/day`,
      discountNotice: duration >= 30 ? '45% Monthly Discount Applied!' : duration >= 7 ? '25% Weekly Discount Applied!' : 'Standard Daily Rate'
    };
  };

  const estimate = calculateEstimatedTier();

  return (
    <section id="rental" className="py-24 relative bg-[#0B1020]/95 border-t border-slate-800">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>FLEXIBLE LEASING & RENTAL SERVICES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Robotics as a Service{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              (RaaS)
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Deploy state-of-the-art robots for events, exhibitions, corporate lobbies, and short-term activations with zero upfront capital expenditure.
          </p>
        </div>

        {/* Rental Packages Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RENTAL_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-[#141E46]/40 border rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                pkg.popular
                  ? 'border-purple-500 shadow-[0_0_30px_rgba(139,92,246,0.25)] bg-slate-900/90'
                  : 'border-slate-800 hover:border-purple-500/40'
              }`}
            >
              {pkg.discountBadge && (
                <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-mono font-bold text-[10px] uppercase shadow-lg">
                  {pkg.discountBadge}
                </div>
              )}

              <div>
                <div className="space-y-1 mt-2">
                  <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                  <div className="text-xs font-mono text-purple-300 font-bold">{pkg.duration}</div>
                </div>

                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="mt-5 space-y-2 pt-4 border-t border-slate-800">
                  <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">Package Inclusions:</div>
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 space-y-3">
                <div className="text-xs font-mono text-slate-400">
                  Best For: <span className="text-white font-sans">{pkg.recommendedFor}</span>
                </div>

                <button
                  onClick={() => onEnquirePackage(pkg.name)}
                  className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-purple-600/20"
                >
                  <span>Select {pkg.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Interactive Rental Budget Estimator Tool */}
        <div className="mt-16 bg-slate-900/90 border border-purple-500/30 rounded-3xl p-8 sm:p-10 backdrop-blur-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Instant Rental Budget Estimator</h3>
              <p className="text-xs text-slate-400">Calculate budget estimate for your event or deployment duration</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              
              {/* Select Robot Model */}
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase font-bold mb-2">
                  Select Robot Model:
                </label>
                <select
                  value={selectedRobot}
                  onChange={(e) => setSelectedRobot(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-purple-500"
                >
                  <option value="Nila – Interactive Photo Robot">Nila – Interactive Photo Robot</option>
                  <option value="Aurra – AI Event Robot">Aurra – AI Event Robot</option>
                  <option value="Nexus A1 – Humanoid Reception Robot">Nexus A1 – Humanoid Reception Robot</option>
                  <option value="Unitree G1 Humanoid Robot">Unitree G1 Humanoid Robot</option>
                  <option value="Unitree Go2 Pro – Quadruped Robot">Unitree Go2 Pro – Quadruped Robot</option>
                  <option value="Go2 Air – Lightweight Quadruped Robot">Go2 Air – Lightweight Quadruped Robot</option>
                  <option value="Recepto – AI Receptionist Robot">Recepto – AI Receptionist Robot</option>
                </select>
              </div>

              {/* Duration Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono text-slate-300 uppercase font-bold">
                    Rental Duration (Days):
                  </label>
                  <span className="text-sm font-bold text-purple-400 font-mono">{duration} Days</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="60"
                  value={duration}
                  onChange={(e) => setDuration(parseInt(e.target.value, 10))}
                  className="w-full accent-purple-500 cursor-pointer"
                />
              </div>

              {/* Quantity Selector */}
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase font-bold mb-2">
                  Number of Units:
                </label>
                <div className="flex items-center gap-3">
                  {[1, 2, 3, 5, 10].map((num) => (
                    <button
                      key={num}
                      onClick={() => setQuantity(num)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold border ${
                        quantity === num
                          ? 'bg-purple-600 text-white border-purple-400'
                          : 'bg-slate-950 text-slate-400 border-slate-800'
                      }`}
                    >
                      {num} {num === 1 ? 'Unit' : 'Units'}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Estimated Output Panel */}
            <div className="lg:col-span-5 bg-slate-950 border border-purple-500/40 rounded-2xl p-6 text-center space-y-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-purple-500/20 text-purple-300">
                {estimate.discountNotice}
              </span>

              <div className="space-y-1">
                <div className="text-xs text-slate-400 font-mono">Estimated Rental Total:</div>
                <div className="text-3xl font-black text-cyan-400 font-mono">{estimate.formatted}</div>
                <div className="text-xs text-slate-500 font-mono">{estimate.perDay}</div>
              </div>

              <p className="text-[11px] text-slate-400 leading-tight">
                *Includes on-site operator support, transport, custom branding setup, and full technical warranty.
              </p>

              <button
                onClick={() => onEnquirePackage(`Custom Rental Request for ${quantity}x ${selectedRobot} (${duration} Days)`)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-sm shadow-lg hover:scale-[1.02] transition-all"
              >
                Book This Rental
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
