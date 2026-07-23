import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  Search, 
  Layers, 
  SlidersHorizontal, 
  Sun, 
  Moon, 
  ShieldCheck, 
  Menu, 
  X, 
  PhoneCall,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  compareCount: number;
  onOpenCompare: () => void;
  onOpenSearch: () => void;
  onOpenAdmin: () => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  onOpenEnquiryModal: (robotName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  compareCount,
  onOpenCompare,
  onOpenSearch,
  onOpenAdmin,
  theme,
  toggleTheme,
  onOpenEnquiryModal
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'robots', label: 'Robots' },
    { id: 'about', label: 'About Us' },
    { id: 'rental', label: 'Rental Services' },
    { id: 'buy', label: 'Buy Robots' },
    { id: 'industries', label: 'Industries' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === 'dark'
            ? 'bg-[#0B1020]/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_10px_30px_rgba(11,16,32,0.8)]'
            : 'bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-purple-600 p-[2px] shadow-[0_0_20px_rgba(0,229,255,0.4)] group-hover:shadow-[0_0_30px_rgba(0,229,255,0.7)] transition-all">
            <div className="w-full h-full bg-[#0B1020] rounded-[10px] flex items-center justify-center">
              <Bot className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div>
            <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-white via-cyan-300 to-cyan-500 bg-clip-text text-transparent font-mono">
              ROBOTECH
            </span>
            <span className="block text-[9px] tracking-widest text-cyan-400 font-bold uppercase -mt-1">
              INTELLIGENT ROBOTICS
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === link.id
                  ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 font-semibold'
                  : theme === 'dark'
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  : 'text-slate-700 hover:text-cyan-600 hover:bg-slate-100'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-2 lg:gap-3">
          {/* Quick Search Button */}
          <button
            onClick={onOpenSearch}
            className={`p-2.5 rounded-xl border transition-all ${
              theme === 'dark'
                ? 'bg-slate-900/80 border-slate-700/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40'
                : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-cyan-600'
            }`}
            title="Search Robots"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Compare Button */}
          <button
            onClick={onOpenCompare}
            className={`relative p-2.5 rounded-xl border transition-all flex items-center gap-1.5 ${
              theme === 'dark'
                ? 'bg-slate-900/80 border-slate-700/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40'
                : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-cyan-600'
            }`}
            title="Compare Robots"
          >
            <SlidersHorizontal className="w-4 h-4" />
            {compareCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center animate-bounce">
                {compareCount}
              </span>
            )}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-xl border transition-all ${
              theme === 'dark'
                ? 'bg-slate-900/80 border-slate-700/60 text-amber-400 hover:border-amber-400/40'
                : 'bg-slate-100 border-slate-300 text-purple-600 hover:border-purple-400/40'
            }`}
            title="Toggle Light/Dark Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Admin Dashboard */}
          <button
            onClick={onOpenAdmin}
            className={`p-2.5 rounded-xl border transition-all ${
              theme === 'dark'
                ? 'bg-slate-900/80 border-slate-700/60 text-slate-400 hover:text-white'
                : 'bg-slate-100 border-slate-300 text-slate-600'
            }`}
            title="Admin Dashboard"
          >
            <ShieldCheck className="w-4 h-4" />
          </button>

          {/* Request Demo / Quote CTA */}
          <button
            onClick={() => onOpenEnquiryModal()}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-semibold text-sm shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_30px_rgba(0,229,255,0.7)] hover:scale-[1.03] transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-cyan-200" />
            <span>Request Demo</span>
          </button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-slate-700 text-amber-400"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-800 text-slate-200 border border-slate-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B1020]/95 backdrop-blur-2xl border-b border-cyan-500/20 px-4 py-6 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-2.5 rounded-xl text-left text-sm font-medium ${
                  activeTab === link.id
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 font-bold'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full py-2.5 rounded-xl bg-slate-800 text-slate-200 flex items-center justify-center gap-2 text-sm"
            >
              <Search className="w-4 h-4 text-cyan-400" />
              <span>Search Catalog</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCompare();
              }}
              className="w-full py-2.5 rounded-xl bg-slate-800 text-slate-200 flex items-center justify-center gap-2 text-sm"
            >
              <SlidersHorizontal className="w-4 h-4 text-cyan-400" />
              <span>Compare Selected Robots ({compareCount})</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full py-2.5 rounded-xl bg-slate-800/60 text-slate-300 flex items-center justify-center gap-2 text-sm border border-slate-700"
            >
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span>Admin Portal</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiryModal();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-center text-sm shadow-lg shadow-cyan-500/20"
            >
              Request Demonstration & Pricing
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
