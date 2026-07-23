import React from 'react';
import { Robot } from '../types';
import { X, Check, ShoppingCart, Calendar, Trash2 } from 'lucide-react';
import { RobotImageVisual } from './RobotImageVisual';

interface CompareModalProps {
  compareIds: string[];
  allRobots: Robot[];
  onClose: () => void;
  onRemoveFromCompare: (id: string) => void;
  onClearCompare: () => void;
  onEnquireRobot: (robotName: string, intent: 'Buy' | 'Rent' | 'Both') => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({
  compareIds,
  allRobots,
  onClose,
  onRemoveFromCompare,
  onClearCompare,
  onEnquireRobot
}) => {
  const comparedRobots = allRobots.filter((r) => compareIds.includes(r.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-5xl my-8 bg-[#0B1020] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,229,255,0.2)] text-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800">
          <div>
            <h2 className="text-2xl font-black text-white">Robot Comparison Matrix</h2>
            <p className="text-xs text-slate-400">Comparing {comparedRobots.length} selected model(s)</p>
          </div>

          <div className="flex items-center gap-3">
            {comparedRobots.length > 0 && (
              <button
                onClick={onClearCompare}
                className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-red-400 text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        {comparedRobots.length === 0 ? (
          <div className="py-16 text-center text-slate-400 space-y-3">
            <p className="text-base font-medium">No robots selected for comparison.</p>
            <p className="text-xs text-slate-500">Click the "+ Compare" button on any robot card to compare specs side by side!</p>
          </div>
        ) : (
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr>
                  <th className="p-3 bg-slate-900/90 text-slate-400 font-mono uppercase w-40">Specification</th>
                  {comparedRobots.map((robot) => (
                    <th key={robot.id} className="p-3 bg-slate-900/60 border-l border-slate-800 min-w-[220px]">
                      <div className="relative space-y-2">
                        <button
                          onClick={() => onRemoveFromCompare(robot.id)}
                          className="absolute -top-1 -right-1 p-1 rounded-full bg-slate-800 text-slate-400 hover:text-red-400"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                        <RobotImageVisual
                          idNumber={robot.idNumber}
                          name={robot.name}
                          categoryTag={robot.categoryTag}
                          accentColor={robot.accentColor}
                          className="h-[140px]"
                          interactiveHover={false}
                        />
                        <div className="font-extrabold text-sm text-white">{robot.name}</div>
                        <div className="text-[10px] text-cyan-400 font-mono">{robot.categoryTag}</div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 font-mono">
                <tr>
                  <td className="p-3 text-slate-400 font-bold bg-slate-900/40">Availability</td>
                  {comparedRobots.map((r) => (
                    <td key={r.id} className="p-3 border-l border-slate-800 text-slate-200">
                      {r.availability === 'BUY_AND_RENT' ? 'Buy & Rent' : 'Buy Only'}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 text-slate-400 font-bold bg-slate-900/40">Height</td>
                  {comparedRobots.map((r) => (
                    <td key={r.id} className="p-3 border-l border-slate-800 text-slate-200">
                      {r.specifications.height}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 text-slate-400 font-bold bg-slate-900/40">Weight</td>
                  {comparedRobots.map((r) => (
                    <td key={r.id} className="p-3 border-l border-slate-800 text-slate-200">
                      {r.specifications.weight}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 text-slate-400 font-bold bg-slate-900/40">Battery Runtime</td>
                  {comparedRobots.map((r) => (
                    <td key={r.id} className="p-3 border-l border-slate-800 text-emerald-400">
                      {r.specifications.batteryLife}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 text-slate-400 font-bold bg-slate-900/40">AI Processor</td>
                  {comparedRobots.map((r) => (
                    <td key={r.id} className="p-3 border-l border-slate-800 text-purple-300">
                      {r.specifications.aiProcessor}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 text-slate-400 font-bold bg-slate-900/40">Sensors</td>
                  {comparedRobots.map((r) => (
                    <td key={r.id} className="p-3 border-l border-slate-800 text-slate-300">
                      {r.specifications.sensors}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 text-slate-400 font-bold bg-slate-900/40">Warranty</td>
                  {comparedRobots.map((r) => (
                    <td key={r.id} className="p-3 border-l border-slate-800 text-slate-200">
                      {r.specifications.warranty}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 text-slate-400 font-bold bg-slate-900/40">Action</td>
                  {comparedRobots.map((r) => (
                    <td key={r.id} className="p-3 border-l border-slate-800">
                      <button
                        onClick={() => {
                          onClose();
                          onEnquireRobot(r.name, 'Buy');
                        }}
                        className="w-full py-2 px-3 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400"
                      >
                        Enquire Now
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
};
