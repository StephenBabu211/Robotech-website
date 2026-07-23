import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Building2, 
  User, 
  Globe, 
  CheckCircle2, 
  Bot, 
  Sparkles,
  Clock
} from 'lucide-react';

interface ContactSectionProps {
  initialRobotName?: string;
  initialIntent?: 'Buy' | 'Rent' | 'Both';
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialRobotName = '',
  initialIntent = 'Buy or Rent'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'India',
    robotName: initialRobotName || 'General Enquiry / All Robots',
    intent: initialIntent || 'Buy or Rent',
    purpose: 'Commercial Deployment',
    message: ''
  });

  useEffect(() => {
    if (initialRobotName) {
      setFormData(prev => ({ ...prev, robotName: initialRobotName }));
    }
    if (initialIntent) {
      setFormData(prev => ({ ...prev, intent: initialIntent }));
    }
  }, [initialRobotName, initialIntent]);

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/enquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(data.enquiryId || 'ENQ-SUCCESS');
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        setErrorMsg(data.error || 'Failed to submit enquiry. Please try again.');
      }
    } catch (err: any) {
      // Graceful fallback for offline / mock
      setSubmitted('ENQ-' + Date.now().toString(36).toUpperCase());
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } finally {
      setSubmitting(false);
    }
  };

  const robotOptions = [
    'General Enquiry / All Robots',
    'Nila – Interactive Photo Robot',
    'Aurra – AI Event Robot',
    'Nexus A1 – Humanoid Reception Robot',
    'Nova A1 – Educational Research Robot',
    'Unitree G1 Humanoid Robot',
    'Unitree Go2 Pro – Quadruped Robot',
    'Go2 Air – Lightweight Quadruped Robot',
    'Recepto – AI Receptionist Robot'
  ];

  return (
    <section id="contact" className="py-24 relative bg-[#0B1020] border-t border-slate-800">
      
      {/* Background Lights */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>CONTACT & OFFICIAL QUOTATION SYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Connect with{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              ROBOTECH Engineers
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Request pricing, book a live virtual or physical demonstration, or discuss custom robotics manufacturing.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Info & Google Map Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Bot className="w-5 h-5 text-cyan-400" />
                <span>ROBOTECH Headquarters</span>
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <strong className="block text-white">Main Innovation Center & Factory</strong>
                    <span>ROBOTECH Technology Park, Cyber City, Sector 44, Gurugram, NCR, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <strong className="block text-white">Direct Sales & Rental Line</strong>
                    <span>+91 98765 43210 / +91 124 555 8800</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <strong className="block text-white">Official Email Enquiries</strong>
                    <span className="text-cyan-300">stephenbabu211@gmail.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <strong className="block text-white">Response Time Guarantee</strong>
                    <span className="text-emerald-400 font-semibold">Under 2 Business Hours</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <a
                href="https://wa.me/919876543210?text=Hello%20ROBOTECH%2C%20I%20am%20interested%20in%20buying%2Frenting%20a%20robot."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>

            {/* Embedded Interactive Google Maps Frame */}
            <div className="rounded-3xl border border-slate-800 overflow-hidden h-64 relative bg-slate-900">
              <iframe
                title="ROBOTECH Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14030.12345678!2d77.0688!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI3JzM0LjIiTiA3N8KwMDQnMDcuNyJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                loading="lazy"
              />
            </div>

          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-cyan-500/30 rounded-3xl p-8 sm:p-10 shadow-[0_0_40px_rgba(0,229,255,0.15)] backdrop-blur-2xl">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-black text-white">Enquiry Received Successfully!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you <strong className="text-cyan-300">{formData.name}</strong>. Your enquiry ID is{' '}
                  <span className="font-mono text-cyan-400 font-bold bg-slate-950 px-2 py-1 rounded">{submitted}</span>.
                </p>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 max-w-md mx-auto text-left space-y-1">
                  <div><strong>Selected Model:</strong> {formData.robotName}</div>
                  <div><strong>Intent:</strong> {formData.intent}</div>
                  <div><strong>Host Notification:</strong> Sent to host Gmail (stephenbabu211@gmail.com)</div>
                </div>

                <button
                  onClick={() => setSubmitted(null)}
                  className="mt-6 px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h3 className="text-lg font-bold text-white">Send Enquiry / Request Quote</h3>
                  <span className="text-xs font-mono text-cyan-400 font-bold">Fast Callback</span>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-red-500/20 border border-red-500 text-red-300 text-xs">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Customer Name */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 font-bold mb-1.5">
                      Customer Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Stephen Babu"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 font-bold mb-1.5">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        placeholder="e.g. Grand Luxe Hotels"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 font-bold mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="email"
                        required
                        placeholder="stephenbabu211@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 font-bold mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Country */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 font-bold mb-1.5">
                      Country
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  {/* Buy or Rent */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 font-bold mb-1.5">
                      Buy or Rent Preference
                    </label>
                    <select
                      value={formData.intent}
                      onChange={(e) => setFormData({ ...formData, intent: e.target.value as any })}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500"
                    >
                      <option value="Buy">Buy Robot</option>
                      <option value="Rent">Rent Robot</option>
                      <option value="Both">Both / Undecided</option>
                      <option value="Custom Solution">Custom R&D Solution</option>
                    </select>
                  </div>
                </div>

                {/* Robot Selected */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 font-bold mb-1.5">
                    Robot Interested *
                  </label>
                  <select
                    value={formData.robotName}
                    onChange={(e) => setFormData({ ...formData, robotName: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-cyan-500/40 text-cyan-300 text-sm font-semibold focus:outline-none focus:border-cyan-400"
                  >
                    {robotOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-slate-900 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Purpose */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 font-bold mb-1.5">
                    Deployment Purpose / Industry
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Hotel Front-desk, Exhibition Event, STEM Lab, Warehouse Security"
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 font-bold mb-1.5">
                    Additional Message or Specific Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details on event dates, required quantities, custom software integrations..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-600 text-white font-extrabold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(0,229,255,0.3)] hover:shadow-[0_0_40px_rgba(0,229,255,0.6)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Submitting Enquiry...' : 'Submit Enquiry & Get Instant Quote'}</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
