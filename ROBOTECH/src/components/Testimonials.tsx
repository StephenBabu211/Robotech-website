import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/robotsData';
import { Star, ChevronLeft, ChevronRight, Quote, Building } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative bg-[#0B1020] border-t border-slate-800">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Quote className="w-3.5 h-3.5" />
            <span>CLIENT REVIEWS & CASE STUDIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Trusted by Industry{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Leaders
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Hear how our intelligent robots have transformed guest experiences, research labs, and automated facilities.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="mt-14 max-w-4xl mx-auto relative">
          
          <div className="bg-slate-900/80 border border-cyan-500/30 rounded-3xl p-8 sm:p-12 shadow-[0_0_50px_rgba(0,0,0,0.6)] backdrop-blur-xl relative overflow-hidden">
            <Quote className="absolute top-6 right-8 w-20 h-20 text-cyan-500/10 pointer-events-none" />

            <div className="space-y-6">
              
              {/* Rating Stars */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-lg sm:text-xl text-slate-200 font-medium italic leading-relaxed">
                "{current.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400/50"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-base font-extrabold text-white">{current.author}</h4>
                    <p className="text-xs text-slate-400">{current.designation} • <span className="text-cyan-400 font-semibold">{current.company}</span></p>
                  </div>
                </div>

                <div className="hidden sm:block text-right font-mono">
                  <span className="text-[10px] uppercase text-slate-500 block">Deployed Robot:</span>
                  <span className="text-xs font-bold text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/30">
                    {current.robotModel}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === idx ? 'w-8 bg-cyan-400' : 'w-2.5 bg-slate-800'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
