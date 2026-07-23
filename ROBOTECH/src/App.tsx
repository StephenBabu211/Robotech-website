import React, { useState, useEffect } from 'react';
import { ROBOTS_DATA } from './data/robotsData';
import { Robot } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { RobotsShowcase } from './components/RobotsShowcase';
import { RobotDetailModal } from './components/RobotDetailModal';
import { CompareModal } from './components/CompareModal';
import { RentalServices } from './components/RentalServices';
import { BuyProcess } from './components/BuyProcess';
import { IndustriesServed } from './components/IndustriesServed';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { AdminDashboard } from './components/AdminDashboard';
import { AiChatWidget } from './components/AiChatWidget';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';
import { MessageSquare, SlidersHorizontal, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Compare List
  const [compareList, setCompareList] = useState<string[]>([]);
  const [compareOpen, setCompareOpen] = useState(false);

  // Selected Detail Modal
  const [selectedRobotDetail, setSelectedRobotDetail] = useState<Robot | null>(null);

  // Quick Search Modal
  const [searchOpen, setSearchOpen] = useState(false);

  // Admin Dashboard
  const [adminOpen, setAdminOpen] = useState(false);

  // Enquiry Preset State
  const [enquiryRobotName, setEnquiryRobotName] = useState('General Enquiry / All Robots');
  const [enquiryIntent, setEnquiryIntent] = useState<'Buy' | 'Rent' | 'Both'>('Buy');

  // Toggle Compare
  const handleToggleCompare = (robotId: string) => {
    setCompareList((prev) => {
      if (prev.includes(robotId)) {
        return prev.filter((id) => id !== robotId);
      } else {
        if (prev.length >= 3) {
          alert('You can compare up to 3 robots at a time.');
          return prev;
        }
        return [...prev, robotId];
      }
    });
  };

  const handleEnquireRobot = (robotName: string, intent: 'Buy' | 'Rent' | 'Both') => {
    setEnquiryRobotName(robotName);
    setEnquiryIntent(intent);
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans selection:bg-cyan-500 selection:text-slate-950 ${
        theme === 'dark' ? 'bg-[#0B1020] text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Sticky Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        compareCount={compareList.length}
        onOpenCompare={() => setCompareOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenAdmin={() => setAdminOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenEnquiryModal={(robotName) => handleEnquireRobot(robotName || 'General Enquiry', 'Buy')}
      />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('robots')}
          onRequestDemoClick={() => handleEnquireRobot('General Demonstration Request', 'Both')}
          theme={theme}
        />

        {/* Robots Showcase Section (The 8 Exact Models from Reference Image) */}
        <RobotsShowcase
          robots={ROBOTS_DATA}
          onSelectRobotDetails={(robot) => setSelectedRobotDetail(robot)}
          onEnquireRobot={handleEnquireRobot}
          compareList={compareList}
          onToggleCompare={handleToggleCompare}
          theme={theme}
        />

        {/* About Us Section */}
        <AboutSection />

        {/* Rental Services Section */}
        <RentalServices
          onEnquirePackage={(pkgName) => handleEnquireRobot(pkgName, 'Rent')}
        />

        {/* Buy Process Section */}
        <BuyProcess
          onRequestBuyQuote={() => handleEnquireRobot('Commercial Robot Purchase Quote', 'Buy')}
        />

        {/* Industries Served */}
        <IndustriesServed
          onSelectIndustryRobots={(ind) => handleEnquireRobot(`Industry Consultation: ${ind}`, 'Both')}
        />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Contact & Enquiry Form */}
        <ContactSection
          initialRobotName={enquiryRobotName}
          initialIntent={enquiryIntent}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavClick={scrollToSection}
        onOpenAdmin={() => setAdminOpen(true)}
      />

      {/* Floating Compare Drawer Trigger (when 1+ items selected) */}
      {compareList.length > 0 && !compareOpen && (
        <div className="fixed bottom-6 left-6 z-40 bg-slate-900/95 border border-cyan-500/50 rounded-2xl p-3 shadow-2xl backdrop-blur-xl flex items-center gap-3 animate-bounce">
          <span className="text-xs font-mono font-bold text-cyan-400">
            {compareList.length} Robot(s) in Compare
          </span>
          <button
            onClick={() => setCompareOpen(true)}
            className="px-3 py-1.5 rounded-xl bg-cyan-500 text-slate-950 font-extrabold text-xs hover:bg-cyan-400 cursor-pointer"
          >
            Compare Now &rarr;
          </button>
        </div>
      )}

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href="https://wa.me/919876543210?text=Hello%20ROBOTECH%2C%20I%20want%20to%20enquire%20about%20your%20robots."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:scale-110 transition-transform"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
      </a>

      {/* Modals & Overlays */}
      {selectedRobotDetail && (
        <RobotDetailModal
          robot={selectedRobotDetail}
          onClose={() => setSelectedRobotDetail(null)}
          onEnquire={handleEnquireRobot}
        />
      )}

      {compareOpen && (
        <CompareModal
          compareIds={compareList}
          allRobots={ROBOTS_DATA}
          onClose={() => setCompareOpen(false)}
          onRemoveFromCompare={(id) => handleToggleCompare(id)}
          onClearCompare={() => setCompareList([])}
          onEnquireRobot={handleEnquireRobot}
        />
      )}

      {searchOpen && (
        <SearchModal
          robots={ROBOTS_DATA}
          onClose={() => setSearchOpen(false)}
          onSelectRobot={(robot) => setSelectedRobotDetail(robot)}
        />
      )}

      {adminOpen && (
        <AdminDashboard onClose={() => setAdminOpen(false)} />
      )}

      {/* Floating Gemini AI Assistant Widget */}
      <AiChatWidget />
    </div>
  );
}
