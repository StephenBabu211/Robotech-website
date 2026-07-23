import React, { useState, useMemo } from 'react';
import { Robot, RobotCategory } from '../types';
import { RobotImageVisual } from './RobotImageVisual';
import { 
  Search, 
  SlidersHorizontal, 
  Eye, 
  ShoppingCart, 
  Calendar, 
  Send, 
  Plus, 
  Check, 
  Sparkles, 
  Tag, 
  Info
} from 'lucide-react';

interface RobotsShowcaseProps {
  robots: Robot[];
  onSelectRobotDetails: (robot: Robot) => void;
  onEnquireRobot: (robotName: string, intent: 'Buy' | 'Rent' | 'Both') => void;
  compareList: string[];
  onToggleCompare: (robotId: string) => void;
  theme: 'dark' | 'light';
}

export const RobotsShowcase: React.FC<RobotsShowcaseProps> = ({
  robots,
  onSelectRobotDetails,
  onEnquireRobot,
  compareList,
  onToggleCompare,
  theme
}) => {
  const [selectedCategory, setSelectedCategory] = useState<RobotCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState<'ALL' | 'BUY_AND_RENT' | 'BUY_ONLY'>('ALL');

  const categories: RobotCategory[] = [
    'All',
    'Interactive',
    'Humanoid',
    'Reception',
    'Quadruped',
    'Educational',
    'Research',
    'Industrial'
  ];

  const filteredRobots = useMemo(() => {
    return robots.filter((robot) => {
      // Category match
      const categoryMatch = 
        selectedCategory === 'All' || 
        robot.category === selectedCategory ||
        robot.categoryTag.toLowerCase().includes(selectedCategory.toLowerCase());

      // Search query match
      const query = searchQuery.toLowerCase().trim();
      const searchMatch = 
        !query ||
        robot.name.toLowerCase().includes(query) ||
        robot.description.toLowerCase().includes(query) ||
        robot.categoryTag.toLowerCase().includes(query) ||
        robot.features.some(f => f.toLowerCase().includes(query));

      // Availability match
      const availMatch = 
        availabilityFilter === 'ALL' || 
        robot.availability === availabilityFilter;

      return categoryMatch && searchMatch && availMatch;
    });
  }, [robots, selectedCategory, searchQuery, availabilityFilter]);

  return (
    <section id="robots" className="py-24 relative bg-[#0B1020] min-h-screen">
      
      {/* Background Neon Lights */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OFFICIAL ROBOTECH CATALOG</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Advanced Robotics for{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Sales & Rental
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Explore our line-up of intelligent humanoid, reception, quadruped, educational, and interactive service robots.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-12 space-y-6">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none justify-start lg:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400 shadow-[0_0_20px_rgba(0,229,255,0.3)]'
                    : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Availability Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search robot name or feature..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Availability Radio Pills */}
            <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
              <span className="text-xs font-mono text-slate-400 uppercase mr-1">Offer:</span>
              <button
                onClick={() => setAvailabilityFilter('ALL')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  availabilityFilter === 'ALL'
                    ? 'bg-slate-800 text-cyan-400 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setAvailabilityFilter('BUY_AND_RENT')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  availabilityFilter === 'BUY_AND_RENT'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Buy & Rent
              </button>
              <button
                onClick={() => setAvailabilityFilter('BUY_ONLY')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  availabilityFilter === 'BUY_ONLY'
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Buy Only
              </button>
            </div>

          </div>

        </div>

        {/* Robot Cards Grid (Matching reference layout!) */}
        {filteredRobots.length === 0 ? (
          <div className="mt-16 text-center py-16 bg-slate-900/40 border border-slate-800 rounded-3xl">
            <Info className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white">No robots match your filter</h3>
            <p className="text-slate-400 text-sm mt-1">Try searching another category or keyword.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setAvailabilityFilter('ALL');
              }}
              className="mt-4 px-5 py-2 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-bold text-sm hover:bg-cyan-500/30"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRobots.map((robot) => {
              const isCompared = compareList.includes(robot.id);

              return (
                <div
                  key={robot.id}
                  className="group relative bg-[#141E46]/30 border border-slate-800 hover:border-cyan-500/50 rounded-3xl p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,229,255,0.15)] hover:-translate-y-1.5"
                >
                  {/* Top Header Card Info */}
                  <div>
                    {/* Visual Stage Container */}
                    <RobotImageVisual
                      idNumber={robot.idNumber}
                      name={robot.name}
                      categoryTag={robot.categoryTag}
                      accentColor={robot.accentColor}
                      className="h-[220px]"
                    />

                    {/* Robot Title & Subtitle */}
                    <div className="mt-4 space-y-1.5">
                      <h3 className="text-lg font-extrabold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                        {robot.name}
                      </h3>
                      <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                        {robot.description}
                      </p>
                    </div>

                    {/* Features Pills */}
                    <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5">
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold">
                        Key Applications:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {robot.applications.slice(0, 2).map((app, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-900 border border-slate-700/80 text-slate-300"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price / Offer Indicator */}
                    <div className="mt-4 flex items-center justify-between text-[11px] font-mono border-t border-slate-800/80 pt-3">
                      <span className="text-slate-400 font-bold uppercase tracking-wider">
                        {robot.priceText}
                      </span>
                    </div>
                  </div>

                  {/* Card Action Buttons (Matching user request!) */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2">
                    
                    {/* Primary Buy / Rent Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onEnquireRobot(robot.name, 'Buy')}
                        className="w-full py-2 px-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Buy Now</span>
                      </button>

                      {robot.availability === 'BUY_AND_RENT' ? (
                        <button
                          onClick={() => onEnquireRobot(robot.name, 'Rent')}
                          className="w-full py-2 px-2.5 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-300 hover:bg-purple-600 hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Rent Now</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => onEnquireRobot(robot.name, 'Buy')}
                          className="w-full py-2 px-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-400 font-bold text-xs cursor-default flex items-center justify-center gap-1"
                        >
                          <Tag className="w-3.5 h-3.5" />
                          <span>Sale Only</span>
                        </button>
                      )}
                    </div>

                    {/* Secondary Actions: View Details & Compare */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onSelectRobotDetails(robot)}
                        className="w-full py-2 px-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40 font-semibold text-xs transition-all flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-cyan-400" />
                        <span>View Details</span>
                      </button>

                      <button
                        onClick={() => onToggleCompare(robot.id)}
                        className={`w-full py-2 px-2.5 rounded-xl border text-xs font-semibold transition-all flex items-center justify-center gap-1 cursor-pointer ${
                          isCompared
                            ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                            : 'bg-slate-900 border-slate-700/80 text-slate-300 hover:text-white'
                        }`}
                      >
                        {isCompared ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Compared</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Compare</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
