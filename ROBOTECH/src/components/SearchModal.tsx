import React, { useState } from 'react';
import { Robot } from '../types';
import { Search, X, ArrowRight } from 'lucide-react';
import { RobotImageVisual } from './RobotImageVisual';

interface SearchModalProps {
  robots: Robot[];
  onClose: () => void;
  onSelectRobot: (robot: Robot) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ robots, onClose, onSelectRobot }) => {
  const [query, setQuery] = useState('');

  const results = robots.filter(
    (r) =>
      r.name.toLowerCase().includes(query.toLowerCase()) ||
      r.categoryTag.toLowerCase().includes(query.toLowerCase()) ||
      r.description.toLowerCase().includes(query.toLowerCase()) ||
      r.features.some((f) => f.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-xl animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-[#0B1020] border border-cyan-500/40 rounded-3xl p-6 shadow-[0_0_50px_rgba(0,229,255,0.25)] text-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="relative flex-1 mr-4">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
            <input
              type="text"
              autoFocus
              placeholder="Search Nila, G1, Go2 Pro, Reception, Photo Robot..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-white text-base focus:outline-none focus:border-cyan-400"
            />
          </div>

          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-4 max-h-[380px] overflow-y-auto space-y-3">
          {results.length === 0 ? (
            <div className="py-8 text-center text-slate-400 text-sm">
              No robots match your search phrase "{query}".
            </div>
          ) : (
            results.map((robot) => (
              <div
                key={robot.id}
                onClick={() => {
                  onSelectRobot(robot);
                  onClose();
                }}
                className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-xl bg-slate-950 flex items-center justify-center p-1 shrink-0">
                    <RobotImageVisual
                      idNumber={robot.idNumber}
                      name={robot.name}
                      categoryTag={robot.categoryTag}
                      accentColor={robot.accentColor}
                      className="h-[55px] p-1"
                      interactiveHover={false}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{robot.name}</h4>
                    <span className="text-[10px] font-mono text-cyan-400 font-bold">{robot.categoryTag}</span>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{robot.description}</p>
                  </div>
                </div>

                <ArrowRight className="w-5 h-5 text-cyan-400 shrink-0" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
