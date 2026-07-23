import React from 'react';
import { ShoppingCart, CheckCircle2, ArrowRight, ShieldCheck, Truck, Wrench, Settings, FileText, Headphones } from 'lucide-react';

interface BuyProcessProps {
  onRequestBuyQuote: () => void;
}

export const BuyProcess: React.FC<BuyProcessProps> = ({ onRequestBuyQuote }) => {
  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      icon: FileText,
      desc: 'Our robotics application engineers analyze your operational workflow, environment, and specific deployment goals.'
    },
    {
      step: '02',
      title: 'Quotation',
      icon: Settings,
      desc: 'Receive a transparent technical proposal and commercial quotation with hardware, software, and warranty options.'
    },
    {
      step: '03',
      title: 'Customization',
      icon: Settings,
      desc: 'Tailor robot enclosures with your company logo, wrapped branding, custom AI dialogue, and PMS/HIS software hooks.'
    },
    {
      step: '04',
      title: 'Manufacturing',
      icon: Wrench,
      desc: 'Precision assembly and rigorous 72-hour quality testing at our ROBOTECH manufacturing facility.'
    },
    {
      step: '05',
      title: 'Delivery',
      icon: Truck,
      desc: 'Insured transit in shock-proof flight cases directly to your facility or venue.'
    },
    {
      step: '06',
      title: 'Installation',
      icon: Wrench,
      desc: 'On-site deployment, 3D spatial map training, charging dock installation, and staff operation training.'
    },
    {
      step: '07',
      title: '24/7 Support',
      icon: Headphones,
      desc: 'Ongoing SLA tech support, software OTA updates, and 2 to 3-year comprehensive hardware warranty.'
    }
  ];

  return (
    <section id="buy" className="py-24 relative bg-[#0B1020] border-t border-slate-800">
      
      {/* Background Accent Light */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>ROBOT PURCHASE & OWNERSHIP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Seamless Robot Purchasing{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Pipeline
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            From initial site consultation to post-delivery SLA maintenance, we handle every step of your robotics deployment.
          </p>
        </div>

        {/* 7-Step Interactive Pipeline */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-cyan-400/40 group-hover:text-cyan-400 font-mono transition-colors">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-extrabold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}

          {/* Final Call to Action Box */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-purple-600/20 border border-cyan-500/50 flex flex-col justify-between text-center">
            <div className="space-y-2">
              <ShieldCheck className="w-10 h-10 text-cyan-400 mx-auto" />
              <h3 className="text-xl font-black text-white">Ready to Own a Robot?</h3>
              <p className="text-xs text-slate-300">
                Contact our engineering team for an instant commercial quote and site evaluation.
              </p>
            </div>

            <button
              onClick={onRequestBuyQuote}
              className="mt-6 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-black text-xs uppercase tracking-wider hover:scale-[1.02] transition-all cursor-pointer shadow-lg shadow-cyan-500/20"
            >
              Request Commercial Quote
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
