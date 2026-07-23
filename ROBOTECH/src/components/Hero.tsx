import React, { useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Play, Cpu, Zap, Building, Award } from 'lucide-react';
import { RobotImageVisual } from './RobotImageVisual';

interface HeroProps {
  onExploreClick: () => void;
  onRequestDemoClick: () => void;
  theme: 'dark' | 'light';
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onRequestDemoClick, theme }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Create particles
    const particleCount = 65;
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;
    }> = [];

    const colors = ['#00E5FF', '#8B5CF6', '#00FFA3', '#FFFFFF'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        alpha: Math.random() * 0.7 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particle connections
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 229, 255, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden min-h-[92vh] flex items-center justify-center">
      {/* Animated Futuristic Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Futuristic Background Lights & Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/10 to-purple-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-cyan-500/40 text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(0,229,255,0.25)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>ROBOTECH NEXT-GEN ROBOTICS & SERVICE PLATFORM</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.1]">
              Building the Future with{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,229,255,0.5)]">
                Intelligent Robotics
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Buy or Rent AI-powered robots designed for businesses, industries, education, healthcare and events.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-600 text-white font-bold text-base shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:shadow-[0_0_45px_rgba(0,229,255,0.7)] hover:scale-[1.03] transition-all flex items-center justify-center gap-3 group"
              >
                <span>Explore Robots</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onRequestDemoClick}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-cyan-500/10 font-bold text-base backdrop-blur-xl transition-all flex items-center justify-center gap-3"
              >
                <Play className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                <span>Request Demo</span>
              </button>
            </div>

            {/* Quick Metrics Counter Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">500+</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Robots Deployed</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <div className="text-2xl sm:text-3xl font-black text-purple-400 font-mono">99.8%</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Fleet Uptime</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">15+</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Industries Served</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">24/7</div>
                <div className="text-xs text-slate-400 font-medium mt-1">AI Tech Support</div>
              </div>
            </div>

          </div>

          {/* Right Featured Robot Stage Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glowing Stage Ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-600/30 rounded-3xl blur-2xl transform rotate-3" />

              {/* Showcase Card */}
              <div className="relative bg-[#0B1020]/90 backdrop-blur-2xl border border-cyan-500/40 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                
                {/* Floating Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                    FEATURED INNOVATION
                  </span>
                  <span className="text-xs text-slate-400 font-mono">MODEL 01 • Bipedal AI</span>
                </div>

                {/* 3D Visual Renderer */}
                <RobotImageVisual 
                  idNumber="01" 
                  name="Unitree G1 Humanoid Robot" 
                  categoryTag="HUMANOID" 
                  accentColor="#00E5FF"
                  className="h-[300px]"
                />

                {/* Title & Desc */}
                <div className="mt-5 space-y-2">
                  <h3 className="text-xl font-bold text-white">Unitree G1 Humanoid Robot</h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    One of the most advanced AI-powered humanoid robots in India. Engineered for human-like mobility, precision manipulation, and 3D LiDAR perception.
                  </p>
                </div>

                {/* Bottom Quick Specs Bar */}
                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    Available for Buy & Rent
                  </span>
                  <button
                    onClick={onExploreClick}
                    className="text-cyan-400 hover:text-cyan-300 font-bold underline cursor-pointer"
                  >
                    View Spec Sheet &rarr;
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
