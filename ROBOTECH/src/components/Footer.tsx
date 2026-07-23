import React from 'react';
import { Bot, Mail, Phone, MapPin, Send, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavClick: (id: string) => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onOpenAdmin }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070A14] border-t border-slate-800/80 text-slate-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-purple-600 p-[2px]">
                <div className="w-full h-full bg-[#0B1020] rounded-[10px] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="text-xl font-black text-white font-mono tracking-wider">ROBOTECH</span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              ROBOTECH is India’s leading manufacturer and provider of intelligent service, humanoid, and quadruped robots for Sales and Rental across hospitality, healthcare, events, research, and industrial automation.
            </p>

            <div className="pt-2 font-mono text-[11px] text-cyan-400 font-semibold">
              Manufacturing Intelligent Service Robots
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3 font-mono">
            <h4 className="text-white font-bold uppercase text-xs tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavClick('home')} className="hover:text-cyan-400">Home</button></li>
              <li><button onClick={() => onNavClick('robots')} className="hover:text-cyan-400">Robot Catalog</button></li>
              <li><button onClick={() => onNavClick('about')} className="hover:text-cyan-400">About Us</button></li>
              <li><button onClick={() => onNavClick('rental')} className="hover:text-cyan-400">Rental Services</button></li>
              <li><button onClick={() => onNavClick('buy')} className="hover:text-cyan-400">Buy Robots</button></li>
            </ul>
          </div>

          {/* Robots Lineup */}
          <div className="lg:col-span-3 space-y-3 font-mono">
            <h4 className="text-white font-bold uppercase text-xs tracking-wider">Featured Models</h4>
            <ul className="space-y-2 text-slate-400">
              <li>• Nila – Interactive Photo Robot</li>
              <li>• Aurra – AI Event Robot</li>
              <li>• Nexus A1 – Humanoid Reception</li>
              <li>• Nova A1 – Educational Robot</li>
              <li>• Unitree G1 Humanoid Robot</li>
              <li>• Unitree Go2 Pro & Go2 Air</li>
              <li>• Recepto – AI Receptionist</li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold uppercase text-xs tracking-wider font-mono">ROBOTECH Insights</h4>
            <p className="text-xs text-slate-400">Subscribe for commercial robotics case studies, firmware updates, and event rental offers.</p>

            <div className="relative">
              <input
                type="email"
                placeholder="Enter email address..."
                className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
              />
              <button className="absolute right-1 top-1 bottom-1 px-3 bg-cyan-500 text-slate-950 font-bold rounded-lg text-xs hover:bg-cyan-400">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} ROBOTECH Robotics Ltd. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <button onClick={onOpenAdmin} className="text-slate-500 hover:text-purple-400">
              Admin Portal
            </button>
            <button onClick={scrollToTop} className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-cyan-400">
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
