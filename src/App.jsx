import React, { useState, useEffect } from 'react';
import myAvatar from './assets/avatar.png';
import myAvatar2 from './assets/avatar-2.png';
import { 
  Code2, 
  Layers, 
  Globe, 
  X, 
  Send, 
  ArrowUpRight, 
  Plus, 
  Sparkles, 
  Cloud, 
  Palette, 
  ArrowDown, 
  Quote 
} from 'lucide-react';

// --- Shared UI Components ---

const Navbar = ({ isDark, toggleTheme, onHireClick, scrolled }) => (
  <nav className={`fixed left-1/2 -translate-x-1/2 z-[100] backdrop-blur-xl transition-all duration-500 ${scrolled
    ? 'top-0 w-full rounded-none border-b border-black/5 dark:border-white/10 bg-white/80 dark:bg-zinc-950/80 shadow-md'
    : 'top-4 md:top-6 w-[95%] max-w-5xl rounded-full border border-black/5 dark:border-white/10 bg-white/10 dark:bg-zinc-900/80 shadow-2xl'
    }`}>
    <div className={`mx-auto flex items-center justify-between transition-all duration-500 ${scrolled ? 'max-w-7xl px-6 md:px-12 py-3 md:py-4' : 'px-4 md:px-6 py-2.5 md:py-3'
      }`}>
      <div className="flex items-center gap-2 font-black text-lg md:text-xl tracking-tighter italic">
        <span className="text-indigo-500">AHMED</span><span className="text-zinc-900 dark:text-white">MONTASER.</span>
      </div>
      <div className="hidden lg:flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        <a href="#about" className="hover:text-indigo-500 dark:hover:text-white transition-colors">01. About</a>
        <a href="#projects" className="hover:text-indigo-500 dark:hover:text-white transition-colors">02. Work</a>
        <a href="#skills" className="hover:text-indigo-500 dark:hover:text-white transition-colors">03. Stack</a>
        <a href="#reviews" className="hover:text-indigo-500 dark:hover:text-white transition-colors">04. Reviews</a>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <button
          onClick={onHireClick}
          className="bg-zinc-900 dark:bg-indigo-600 text-white px-4 md:px-5 py-2 rounded-full text-[10px] md:text-xs font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-indigo-500/20"
        >
          LET'S TALK
        </button>
      </div>
    </div>
  </nav>
);

const HireModal = ({ isOpen, onClose, isDark }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-zinc-950/60 dark:bg-black/80 backdrop-blur-xl" onClick={onClose} />
      <div className="relative w-full max-w-5xl bg-zinc-100 dark:bg-zinc-900/90 backdrop-blur-2xl rounded-[2.5rem] md:rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300 border border-black/10 dark:border-white/10 flex flex-col md:flex-row">

        <button onClick={onClose} className="absolute top-6 right-6 z-50 p-2 bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 rounded-full text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-all backdrop-blur-md">
          <X size={20} />
        </button>

        {/* Left Side: Creative Branding (Hidden on very small screens, visible on md+) */}
        <div className="hidden md:flex md:w-5/12 bg-indigo-600 p-12 flex-col justify-between relative overflow-hidden text-white">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-400/30 blur-[60px] rounded-full"></div>
          <div className="absolute top-10 -right-20 w-40 h-40 bg-purple-500/40 blur-[50px] rounded-full"></div>

          <div className="relative z-10">
            <Sparkles className="w-10 h-10 mb-6 text-indigo-200" />
            <h3 className="text-4xl lg:text-5xl font-black tracking-tighter leading-[1.1] mb-4">
              Let's build <br /><span className="italic text-indigo-200">the future.</span>
            </h3>
            <p className="text-indigo-100/80 font-medium leading-relaxed">Leave your coordinates and project details below. System standing by.</p>
          </div>

          <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest">Available for Work</span>
            </div>
            <p className="text-xs text-indigo-100/70 font-medium">Currently accepting projects for Q3 2026. Secure your slot in the deployment queue.</p>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="w-full md:w-7/12 p-8 sm:p-12 relative flex flex-col justify-center bg-zinc-50 dark:bg-zinc-950/50">
          <div className="md:hidden mb-8 text-center mt-4">
            <h3 className="text-3xl font-black tracking-tighter text-zinc-900 dark:text-white mb-2">Initiate Link.</h3>
            <p className="text-sm text-zinc-500 font-medium">Drop your details and let's create something iconic.</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 ml-2">Name</label>
              <input type="text" className="w-full bg-white dark:bg-black/50 rounded-2xl px-6 py-4 border border-black/5 dark:border-white/5 focus:border-indigo-500 dark:focus:border-indigo-500 outline-none transition-all font-medium text-zinc-900 dark:text-white shadow-sm" placeholder="John Doe" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 ml-2">Email</label>
              <input type="email" className="w-full bg-white dark:bg-black/50 rounded-2xl px-6 py-4 border border-black/5 dark:border-white/5 focus:border-indigo-500 dark:focus:border-indigo-500 outline-none transition-all font-medium text-zinc-900 dark:text-white shadow-sm" placeholder="john@company.com" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 ml-2">Project Brief</label>
              <textarea className="w-full bg-white dark:bg-black/50 rounded-2xl px-6 py-4 border border-black/5 dark:border-white/5 focus:border-indigo-500 dark:focus:border-indigo-500 outline-none transition-all font-medium text-zinc-900 dark:text-white h-32 resize-none shadow-sm" placeholder="Tell me about your vision..." />
            </div>
            <button className="w-full bg-zinc-900 dark:bg-indigo-600 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm md:text-base tracking-tight shadow-xl shadow-indigo-500/20 mt-4 group">
              Deploy Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- Data ---

const PROJECTS = [
  { title: "KRYPTO VEST", cat: "Web3 / Finance", year: "2024", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200" },
  { title: "AURA DESIGN", cat: "Art / Brand", year: "2024", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200" },
  { title: "NEURAL GRID", cat: "AI / Machine Learning", year: "2023", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200" },
  { title: "VOID OS", cat: "System Architecture", year: "2023", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200" },
  { title: "FLUX DASH", cat: "B2B Analytics", year: "2023", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" }
];

const REVIEWS = [
  { quote: "An absolute masterclass in frontend architecture. Delivered our MVP ahead of schedule with zero technical debt.", name: "Sarah Jenkins", role: "CTO, TechNova" },
  { quote: "The attention to detail and fluid animations elevated our brand beyond our wildest expectations. Highly recommended.", name: "Marcus Thorne", role: "Founder, Aura" },
  { quote: "A rare breed of developer who truly understands both deep systems logic and high-end aesthetic design.", name: "Elena Rostova", role: "Design Lead, Void" },
  { quote: "Flawless execution. The system handles our 100k+ daily active users without breaking a single sweat.", name: "David Chen", role: "VP Engineering, Flux" },
  { quote: "Transforms complex requirements into elegant, simple interfaces. A true professional and an incredible asset.", name: "Aisha Patel", role: "Product Manager" },
  { quote: "His code is as beautiful as the UI it powers. Scalable, maintainable, and lightning fast.", name: "James Wilson", role: "Senior Developer" }
];

// --- Main App ---

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [inViewIndex, setInViewIndex] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    // 1. Detect if the user is on a touch device
    const checkDevice = () => {
      const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches || 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(isTouch);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);

    // 2. STABLE Scroll Logic
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const isHoverable = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
      if (isHoverable && window.innerWidth >= 1024) {
        setInViewIndex(null);
        return;
      }

      const rows = document.querySelectorAll('.project-row');
      const centerY = window.innerHeight / 2;
      let activeIndex = null;

      rows.forEach((row) => {
        const rect = row.getBoundingClientRect();
        if (rect.top <= centerY + 50 && rect.bottom >= centerY - 50) {
          activeIndex = Number(row.dataset.index);
        }
      });

      setInViewIndex(activeIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    // 3. Mouse Tracker for Floating Elements & Parallax
    const handleMouseMove = (e) => {
      window.requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 4. Scroll Reveal Observer
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => revealObserver.observe(el));

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className={`${isDark ? 'dark' : ''} transition-colors duration-500`}>
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white font-sans selection:bg-indigo-500 selection:text-white scroll-smooth pb-10 md:pb-20 overflow-x-hidden relative">

        {/* Artistic Grain Overlay */}
        <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] dark:opacity-[0.03] pointer-events-none z-50"></div>

        <Navbar isDark={isDark} toggleTheme={toggleTheme} onHireClick={() => setModalOpen(true)} scrolled={scrolled} />
        <HireModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} isDark={isDark} />

        {/* Floating Mini Preview for Projects (STRICTLY Desktop Only) */}
        <div
          className={`fixed top-0 left-0 pointer-events-none z-[150] will-change-transform hidden ${!isTouchDevice ? 'lg:block' : ''}`}
          style={{
            transform: `translate3d(${mousePos.x + 40}px, ${mousePos.y - 140}px, 0)`,
            opacity: hoveredIndex !== null ? 1 : 0,
            transition: 'opacity 0.4s cubic-bezier(0.23, 1, 0.32, 1), transform 0.1s ease-out'
          }}
        >
          {/* Project Image Container */}
          <div className={`absolute top-0 left-0 w-72 lg:w-[28rem] aspect-[16/10] overflow-hidden rounded-[2rem] shadow-[0_40px_100px_rgba(0,0,0,0.4)] border border-white/20 dark:border-white/10 bg-zinc-900 transition-all duration-300 ${hoveredIndex !== null ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
            {PROJECTS.map((p, i) => (
              <img
                key={i}
                src={p.img}
                className={`absolute inset-0 w-full h-full object-cover rounded-[2rem] transition-all duration-700 ease-out ${hoveredIndex === i ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
                alt={p.title}
              />
            ))}
          </div>
        </div>

        {/* 1. HERO SECTION (NEO-EDITORIAL & KINETIC CANVAS) */}
        <section className="relative min-h-[100svh] flex flex-col items-center justify-center pt-28 md:pt-32 pb-16 overflow-hidden">

          {/* Ambient Cinematic Aurora */}
          <div className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] bg-indigo-500/20 rounded-full blur-[120px] mix-blend-screen animate-[float_10s_ease-in-out_infinite] pointer-events-none z-0"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[60vw] h-[60vw] bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen animate-[float-reverse_12s_ease-in-out_infinite] pointer-events-none z-0"></div>

          {/* High-End Architectural Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] md:bg-[size:100px_100px] [mask-image:linear-gradient(to_bottom,black_30%,transparent_100%)] pointer-events-none z-0"></div>

          {/* Subtle Canvas Crosshairs */}
          <div className="absolute top-[15%] left-[10%] text-zinc-400/50 dark:text-zinc-500/50 pointer-events-none z-0"><Plus size={24} /></div>
          <div className="absolute top-[30%] right-[15%] text-zinc-400/50 dark:text-zinc-500/50 pointer-events-none z-0 hidden md:block"><Plus size={24} /></div>
          <div className="absolute bottom-[20%] left-[20%] text-zinc-400/50 dark:text-zinc-500/50 pointer-events-none z-0 hidden md:block"><Plus size={24} /></div>
          <div className="absolute bottom-[25%] right-[10%] text-zinc-400/50 dark:text-zinc-500/50 pointer-events-none z-0"><Plus size={24} /></div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center reveal-text mt-8 md:mt-0">

            {/* 1. The Core Avatar (Sleek, Geometric Glass Card) */}
            <div className="relative w-[160px] md:w-[220px] lg:w-[260px] aspect-[4/5] mb-8 md:mb-12 group animate-float">

              {/* Offset Frosted Glass Backdrop */}
              <div className="absolute inset-0 bg-white/40 dark:bg-white/5 border border-black/5 dark:border-white/20 backdrop-blur-3xl rounded-[2rem] transform translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-700 shadow-2xl"></div>

              {/* Main Image Container */}
              <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 rounded-[2rem] overflow-hidden border border-black/10 dark:border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] transform transition-transform duration-700 group-hover:-translate-y-2 group-hover:-translate-x-2">
                <img
                  src={myAvatar}
                  alt="Avatar"
                  className="w-full h-full object-cover object-[center_20%] transition-transform duration-1000 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>

              {/* Floating UI Elements Over Avatar */}
              <div className="absolute -top-4 md:-top-5 -right-4 md:-right-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center gap-2 border border-black/5 dark:border-white/10 transform rotate-6 group-hover:rotate-0 transition-transform duration-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-zinc-900 dark:text-white">Active</span>
              </div>

              <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-8 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-3 py-2 md:px-4 md:py-2.5 rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest shadow-2xl flex items-center gap-2 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                <Code2 size={14} className="text-indigo-400 dark:text-indigo-600" /> FRONTEND
              </div>
            </div>

            {/* 2. Massive Centered & Layered Typography */}
            <div className="flex flex-col items-center justify-center w-full relative">

              {/* Background Hollow Overlay Text (Creates incredible depth) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none opacity-100 mix-blend-normal z-0">
                <span className="text-[25vw] md:text-[20vw] lg:text-[18vw] font-black tracking-tighter uppercase outline-text-strong select-none">CREATIVE</span>
              </div>

              <h1 className="text-[14vw] sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[9.5rem] font-black tracking-tighter uppercase text-zinc-900 dark:text-white leading-[0.85] relative z-10 drop-shadow-sm">
                FRONT-END
              </h1>

              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 mt-1 md:mt-2 relative z-10">
                <div className="hidden md:block w-12 lg:w-24 h-1.5 lg:h-2 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
                <h1 className="text-[12vw] sm:text-6xl md:text-7xl lg:text-[7rem] xl:text-[8.5rem] font-black tracking-tighter uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 leading-[0.9] drop-shadow-xl">
                  DEVELOPER.
                </h1>
                <div className="hidden md:block w-12 lg:w-24 h-1.5 lg:h-2 bg-gradient-to-l from-indigo-500 to-cyan-400 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
              </div>
            </div>

            {/* 3. Subtitle & Actions */}
            <p className="mt-8 md:mt-12 text-sm sm:text-base md:text-xl text-zinc-600 dark:text-zinc-400 font-medium max-w-2xl mx-auto px-4 relative z-10 leading-relaxed">
              Engineering <span className="text-zinc-900 dark:text-white font-bold italic">high-fidelity</span> interfaces with a focus on speed, scalable architecture, and visual storytelling.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-6 sm:px-0 relative z-20">
              <button onClick={() => setModalOpen(true)} className="w-full sm:w-auto h-14 md:h-16 px-8 md:px-10 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black uppercase tracking-widest text-[10px] md:text-xs hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.2)] hover:shadow-indigo-500/25 flex items-center justify-center gap-3 group overflow-hidden relative">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 dark:via-black/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                <span className="relative">Start Project</span>
                <div className="relative w-6 h-6 rounded-full bg-white/20 dark:bg-black/10 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </button>
              <a href="#about" className="w-full sm:w-auto h-14 md:h-16 px-8 md:px-10 rounded-full bg-transparent border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-3 group">
                Explore
                <ArrowDown size={16} className="text-zinc-500 group-hover:text-indigo-500 group-hover:translate-y-1 transition-all" />
              </a>
            </div>

          </div>
        </section>

        {/* 2. ABOUT SECTION (ULTRA-MODERN BENTO GRID) */}
        <section id="about" className="py-24 md:py-40 relative max-w-7xl mx-auto px-6">

          {/* Section Header */}
          <div className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-black/5 dark:border-white/5 pb-10 gap-6 reveal-on-scroll">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-500 italic">The Architect</span>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-900 dark:text-white mt-2 italic uppercase">IDENTITY.</h3>
            </div>
            <span className="text-[10px] md:text-xs font-mono text-zinc-400 tracking-[0.2em] uppercase">SYSTEM CORE // BIO</span>
          </div>

          {/* Bento Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6">

            {/* 1. Avatar Block (Tall) */}
            <div className="md:col-span-2 lg:col-span-4 lg:row-span-2 bg-zinc-100 dark:bg-zinc-900/50 rounded-[2rem] md:rounded-[3rem] border border-black/5 dark:border-white/5 shadow-xl group relative overflow-hidden min-h-[400px] lg:min-h-0 reveal-on-scroll">
              <img
                src={myAvatar2}
                alt="John Doe"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                onError={(e) => {
                  e.target.onError = null;
                  e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90"></div>

              {/* Content inside Avatar Block */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="bg-indigo-500/80 backdrop-blur-md w-fit px-3 py-1 rounded-full mb-3 border border-indigo-400/50">
                  <span className="text-[9px] font-black uppercase tracking-widest text-white">ID: 9482-SYS</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-1 italic">Ahmed Montaser</h3>
                <p className="text-sm text-zinc-300 font-medium">Lead Front-end Architect</p>
              </div>
            </div>

            {/* 2. Philosophy Block (Wide) */}
            <div className="md:col-span-2 lg:col-span-5 bg-white dark:bg-zinc-900/50 rounded-[2rem] md:rounded-[3rem] p-8 md:p-10 border border-black/5 dark:border-white/5 shadow-xl group relative overflow-hidden flex flex-col justify-center reveal-on-scroll delay-100">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-[40px] group-hover:scale-150 transition-transform duration-1000"></div>
              <Quote className="text-indigo-500/20 w-12 h-12 mb-4 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
              <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-zinc-900 dark:text-white mb-4 relative z-10 leading-[1.1]">
                Built for the <br /><span className="italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">future.</span>
              </h3>
              <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed relative z-10">
                I merge rigorous logic with striking visual aesthetics. My philosophy is simple: the best engineering is completely invisible to the user—leaving only a seamless, intuitive experience that scales effortlessly.
              </p>
            </div>

            {/* 3. Metrics Block (Square/Tall) */}
            <div className="md:col-span-1 lg:col-span-3 bg-indigo-600 rounded-[2rem] md:rounded-[3rem] p-8 border border-indigo-500 shadow-xl shadow-indigo-600/20 text-white flex flex-col justify-center relative overflow-hidden group reveal-on-scroll delay-200">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/20 rounded-full blur-[40px] group-hover:scale-150 transition-transform duration-1000"></div>

              <div className="mb-8 relative z-10">
                <div className="text-5xl md:text-6xl font-black italic mb-1 group-hover:translate-x-2 transition-transform duration-500">06<span className="text-indigo-300">+</span></div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">Years Active</div>
              </div>
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-black italic mb-1 group-hover:translate-x-2 transition-transform duration-500 delay-75">50<span className="text-indigo-300">+</span></div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">Projects Shipped</div>
              </div>
            </div>

            {/* 4. Globe / Location Block */}
            <div className="md:col-span-1 lg:col-span-4 bg-zinc-950 rounded-[2rem] md:rounded-[3rem] p-8 border border-zinc-800 shadow-xl relative overflow-hidden group flex items-center gap-6 reveal-on-scroll delay-100">
              <Globe className="w-16 h-16 md:w-20 md:h-20 text-indigo-500 group-hover:animate-[spin_10s_linear_infinite] transition-transform" />
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-black text-white italic tracking-tight mb-2">Global Reach</h3>
                <p className="text-xs md:text-sm text-zinc-400 font-medium leading-relaxed">Partnering remotely with teams across Egypt, Europe, & USA.</p>
              </div>
            </div>

            {/* 5. Status / Availability Block */}
            <div className="md:col-span-2 lg:col-span-4 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-[2rem] md:rounded-[3rem] p-8 border border-emerald-500/20 shadow-xl flex items-center justify-between group overflow-hidden relative reveal-on-scroll delay-200">
              {/* Shimmer sweep effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_2s_infinite]"></div>

              <div className="flex flex-col relative z-10">
                <span className="text-emerald-600 dark:text-emerald-400 font-black italic text-2xl md:text-3xl mb-1">Available</span>
                <span className="text-zinc-600 dark:text-zinc-400 text-[10px] uppercase tracking-widest font-bold">Accepting Clients Q3 2026</span>
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-emerald-500/20 flex items-center justify-center relative z-10">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(16,185,129,0.6)]"></div>
              </div>
            </div>

          </div>
        </section>

        {/* 3. PROJECT SECTION (PERFECTED SCROLL & LIST) */}
        <section id="projects" className="max-w-7xl mx-auto px-6 py-20 md:py-24 mt-10">
          <div className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-black/5 dark:border-white/5 pb-10 gap-6">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-500 italic">Case Studies</span>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-900 dark:text-white mt-2 italic uppercase">SELECTED WORK.</h3>
            </div>
            <span className="text-[10px] md:text-xs font-mono text-zinc-400 tracking-[0.2em] uppercase">VOLUME 1.0 — Archive 2026</span>
          </div>

          <div className="divide-y divide-black/5 dark:divide-white/5">
            {PROJECTS.map((project, i) => {
              const isMobileActive = inViewIndex === i;

              return (
                <div
                  key={i}
                  data-index={i}
                  className="project-row group relative overflow-hidden"
                  onMouseEnter={() => !isTouchDevice && setHoveredIndex(i)}
                  onMouseLeave={() => !isTouchDevice && setHoveredIndex(null)}
                >
                  {/* Sweep Animation (Desktop Only) */}
                  {!isTouchDevice && (
                    <div className="absolute inset-0 bg-indigo-600/0 lg:group-hover:bg-indigo-600/[0.04] dark:lg:group-hover:bg-indigo-500/[0.04] transition-all duration-700 -z-10 origin-left scale-x-0 lg:group-hover:scale-x-100 hidden lg:block" />
                  )}

                  <a href="#" className={`flex flex-col lg:flex-row lg:items-center justify-between py-10 md:py-16 lg:py-24 transition-all duration-500 ${!isTouchDevice ? 'lg:group-hover:px-12' : ''}`}>

                    <div className="flex items-center gap-6 md:gap-12 lg:gap-16 project-trigger">
                      <span className={`text-[10px] md:text-xs font-mono transition-colors duration-500 ${isMobileActive ? 'text-indigo-500' : 'text-zinc-300 dark:text-zinc-700'} ${!isTouchDevice ? 'lg:group-hover:text-indigo-500' : ''}`}>0{i + 1}</span>

                      <div className="relative">
                        {/* Fixed Text: Better scaling and adjusted tracking for legibility */}
                        <h3 className={`text-4xl sm:text-5xl md:text-6xl lg:text-[5.5vw] font-black tracking-[-0.02em] leading-tight md:leading-none transition-all duration-700 uppercase italic project-title-outline ${isMobileActive ? 'project-title-mobile-active' : ''}`}>
                          {project.title}
                        </h3>
                        {/* Year Indicator */}
                        <div className={`absolute -top-3 md:-top-5 -right-6 md:-right-12 transition-all duration-500 hidden sm:block ${isMobileActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} ${!isTouchDevice ? 'lg:group-hover:opacity-100 lg:group-hover:translate-y-0' : ''}`}>
                          <span className="text-[8px] md:text-[9px] font-black bg-indigo-600 text-white px-2 py-1 rounded-sm tracking-widest shadow-xl">{project.year}</span>
                        </div>
                      </div>
                    </div>

                    {/* Perfected CSS Grid Expansion - Solves the Layout Jumps */}
                    <div className={`grid transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isMobileActive ? 'grid-rows-[1fr] opacity-100 py-8 md:py-12' : 'grid-rows-[0fr] opacity-0 py-0'} ${isTouchDevice ? 'block' : 'block lg:hidden'}`}>
                      <div className="overflow-hidden w-full">
                        {/* Taller image (aspect-4/5 on mobile, 4/3 on tablet) and wider width */}
                        <div className="w-[95%] md:w-[85%] mx-auto aspect-[4/5] sm:aspect-[4/3] rounded-[2rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl relative transform transition-transform duration-1000 origin-center">
                          <img src={project.img} alt={project.title} className={`w-full h-full object-cover rounded-[2rem] transition-transform duration-1000 ${isMobileActive ? 'scale-100' : 'scale-110'}`} />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between lg:justify-end gap-8 lg:gap-20 mt-4 lg:mt-0">
                      <div className="text-left lg:text-right">
                        <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-1 italic">Discipline</p>
                        <p className={`text-xs md:text-sm font-bold transition-colors ${isMobileActive ? 'text-indigo-500' : 'text-zinc-900 dark:text-white'} ${!isTouchDevice ? 'lg:group-hover:text-indigo-500' : ''}`}>{project.cat}</p>
                      </div>
                      <div className={`relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-500 border border-black/10 dark:border-white/10 ${isMobileActive ? 'bg-zinc-900 dark:bg-white border-transparent scale-110 rotate-45 text-white dark:text-black' : 'text-zinc-900 dark:text-white'} ${!isTouchDevice ? 'lg:group-hover:bg-zinc-900 lg:dark:group-hover:bg-white lg:group-hover:border-transparent lg:group-hover:scale-110 lg:group-hover:rotate-45 lg:group-hover:text-white lg:dark:group-hover:text-black' : ''}`}>
                        <ArrowUpRight size={20} className="transition-colors" />
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. TECH STACK (ABSTRACT EDITORIAL BENTO) */}
        <section id="skills" className="max-w-7xl mx-auto px-6 py-20 md:py-32 my-10 relative">

          {/* Section Header */}
          <div className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-black/5 dark:border-white/5 pb-10 gap-6 reveal-on-scroll">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-500 italic">The Toolkit</span>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-900 dark:text-white mt-2 italic uppercase">ARSENAL.</h3>
            </div>
            <span className="text-[10px] md:text-xs font-mono text-zinc-400 tracking-[0.2em] uppercase">SYSTEMS & ARCHITECTURE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">

            {/* FRONTEND - Abstract Glass Layers */}
            <div className="lg:col-span-7 bg-white dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-700 group relative overflow-hidden min-h-[400px] flex flex-col justify-between reveal-on-scroll">
              {/* Abstract UI Graphic */}
              <div className="absolute -right-10 -bottom-10 w-[70%] h-[120%] pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square bg-indigo-500/10 dark:bg-indigo-500/20 blur-[80px] rounded-full group-hover:scale-110 transition-transform duration-1000"></div>
                {/* Floating Panels */}
                <div className="absolute top-1/4 right-[20%] w-64 h-40 bg-white/40 dark:bg-black/20 backdrop-blur-2xl border border-white/40 dark:border-white/10 rounded-2xl shadow-2xl rotate-12 group-hover:rotate-6 group-hover:-translate-y-4 transition-all duration-700 delay-100"></div>
                <div className="absolute top-1/3 right-[5%] w-72 h-48 bg-white/60 dark:bg-black/40 backdrop-blur-2xl border border-white/50 dark:border-white/10 rounded-2xl shadow-2xl rotate-6 group-hover:rotate-0 group-hover:-translate-y-6 transition-all duration-700"></div>
                <div className="absolute top-1/2 right-[15%] w-56 h-32 bg-indigo-500/10 dark:bg-indigo-500/20 backdrop-blur-2xl border border-indigo-500/20 dark:border-indigo-400/20 rounded-2xl shadow-xl -rotate-6 group-hover:-rotate-12 group-hover:-translate-y-2 transition-all duration-700 delay-200"></div>
              </div>

              <div className="relative z-10 max-w-sm">
                <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Layers className="text-indigo-500 w-5 h-5" />
                </div>
                <h3 className="text-3xl md:text-5xl font-black italic tracking-tighter mb-4 text-zinc-900 dark:text-white">Frontend</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium leading-relaxed mb-10">Crafting hyper-responsive, interactive layers with mathematical precision and fluid motion.</p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2 md:gap-3">
                {['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'WebGL'].map(tech => (
                  <span key={tech} className="px-4 py-2 bg-zinc-100/80 dark:bg-white/5 backdrop-blur-md border border-black/5 dark:border-white/10 rounded-full text-[10px] md:text-xs font-bold text-zinc-700 dark:text-zinc-300 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* BACKEND - Data Flow Matrix */}
            <div className="lg:col-span-5 bg-zinc-950 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 shadow-2xl group relative overflow-hidden flex flex-col justify-between border border-zinc-800 min-h-[400px] reveal-on-scroll delay-100">
              {/* Abstract Data Flow */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
                <div className="absolute top-0 right-10 w-px h-full bg-gradient-to-b from-transparent via-emerald-500 to-transparent translate-y-[-100%] group-hover:animate-[shimmer_2s_infinite]"></div>
                <div className="absolute top-0 right-24 w-px h-full bg-gradient-to-b from-transparent via-emerald-500 to-transparent translate-y-[-100%] group-hover:animate-[shimmer_2.5s_infinite_0.5s]"></div>
                <div className="absolute top-0 right-40 w-px h-full bg-gradient-to-b from-transparent via-emerald-500 to-transparent translate-y-[-100%] group-hover:animate-[shimmer_3s_infinite_0.2s]"></div>

                {/* Fake JSON overlay */}
                <div className="absolute -right-10 top-20 font-mono text-[8px] text-emerald-500/30 leading-relaxed whitespace-pre rotate-[-15deg] group-hover:rotate-0 transition-all duration-700">
                  {`{
  "status": 200,
  "data": {
    "engine": "v8",
    "latency": "12ms",
    "secure": true,
    "nodes": 142
  }
}`}
                </div>
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-emerald-500/20">
                  <Code2 className="text-emerald-500 w-5 h-5" />
                </div>
                <h3 className="text-3xl md:text-5xl font-black italic tracking-tighter mb-4 text-white">Backend</h3>
                <p className="text-zinc-400 text-sm font-medium leading-relaxed mb-10 max-w-[200px]">Robust, scalable logic and high-performance APIs.</p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2">
                {['Node.js', 'Go', 'Python', 'PostgreSQL', 'Redis', 'GraphQL'].map(tech => (
                  <span key={tech} className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] md:text-xs font-bold text-emerald-400 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* INFRASTRUCTURE - Geometric Mesh */}
            <div className="lg:col-span-5 bg-indigo-600 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 shadow-xl shadow-indigo-600/20 text-white group relative overflow-hidden flex flex-col justify-between min-h-[400px] reveal-on-scroll">
              {/* Rotating Topographic/Geometric Mesh */}
              <div className="absolute -right-20 -bottom-20 w-[150%] aspect-square opacity-20 pointer-events-none group-hover:rotate-45 group-hover:scale-110 transition-all duration-1000 ease-in-out origin-center">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-white fill-none" strokeWidth="0.5">
                  <circle cx="100" cy="100" r="20" />
                  <circle cx="100" cy="100" r="40" strokeDasharray="4 4" />
                  <circle cx="100" cy="100" r="60" />
                  <circle cx="100" cy="100" r="80" strokeDasharray="8 8" />
                  <circle cx="100" cy="100" r="100" />
                  <path d="M 0 100 L 200 100 M 100 0 L 100 200 M 29 29 L 171 171 M 29 171 L 171 29" strokeOpacity="0.5" />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/20 backdrop-blur-md">
                  <Cloud className="text-white w-5 h-5" />
                </div>
                <h3 className="text-3xl md:text-5xl font-black italic tracking-tighter mb-4">Systems</h3>
                <p className="text-indigo-200 text-sm font-medium leading-relaxed mb-10 max-w-[200px]">Global architecture and zero-downtime deployment.</p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2">
                {['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'].map(tech => (
                  <span key={tech} className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] md:text-xs font-bold text-white shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* DESIGN - Fluid Gradients */}
            <div className="lg:col-span-7 bg-white dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-700 group relative overflow-hidden flex flex-col justify-between min-h-[400px] reveal-on-scroll delay-100">
              {/* Fluid Gradient Orbs */}
              <div className="absolute right-0 top-0 w-[60%] h-full pointer-events-none opacity-40 dark:opacity-30 group-hover:opacity-60 dark:group-hover:opacity-50 transition-opacity duration-700">
                <div className="absolute top-[-20%] right-[-10%] w-[80%] aspect-square bg-rose-400 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[60px] group-hover:translate-x-10 transition-transform duration-1000"></div>
                <div className="absolute bottom-[-10%] right-[10%] w-[70%] aspect-square bg-cyan-400 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[60px] group-hover:-translate-x-10 transition-transform duration-1000"></div>
                <div className="absolute top-[20%] right-[30%] w-[60%] aspect-square bg-amber-400 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[60px] group-hover:translate-y-10 group-hover:scale-110 transition-transform duration-1000"></div>
              </div>

              <div className="relative z-10 max-w-sm">
                <div className="w-12 h-12 rounded-full bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Palette className="text-rose-500 w-5 h-5" />
                </div>
                <h3 className="text-3xl md:text-5xl font-black italic tracking-tighter mb-4 text-zinc-900 dark:text-white">Design</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium leading-relaxed mb-10">Transforming complex concepts into striking visual identities and intuitive experiences.</p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2 md:gap-3">
                {['Figma', 'Blender', 'Spline 3D', 'Adobe CC', 'Prototyping'].map(tech => (
                  <span key={tech} className="px-4 py-2 bg-white/80 dark:bg-black/20 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-full text-[10px] md:text-xs font-bold text-zinc-800 dark:text-zinc-200 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 5. REVIEWS SECTION (INFINITE MARQUEE) */}
        <section id="reviews" className="py-24 md:py-32 relative border-t border-black/5 dark:border-white/5 overflow-hidden">

          <div className="max-w-7xl mx-auto px-6 mb-16 text-center reveal-on-scroll">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-500 italic">Client Intel</span>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white mt-2 italic uppercase">PEER REVIEWS.</h3>
          </div>

          {/* Marquee Wrapper with edge fade masks */}
          <div className="relative flex flex-col gap-6" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>

            {/* Top Row - Moves Left */}
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 px-4">
              {/* Double array to create seamless infinite scroll */}
              {[...REVIEWS, ...REVIEWS].map((review, i) => (
                <div key={i} className="w-[300px] md:w-[400px] bg-white dark:bg-zinc-900/50 p-8 rounded-[2rem] border border-black/5 dark:border-white/5 shadow-lg shrink-0 flex flex-col justify-between">
                  <Quote className="text-indigo-500/20 w-8 h-8 mb-4" />
                  <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed mb-8">"{review.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-zinc-900 dark:text-white">{review.name}</p>
                      <p className="text-[10px] uppercase tracking-widest text-zinc-400">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row - Moves Right (Reverse) */}
            <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused] gap-6 px-4">
              {[...REVIEWS].reverse().concat([...REVIEWS].reverse()).map((review, i) => (
                <div key={`rev-${i}`} className="w-[300px] md:w-[400px] bg-white dark:bg-zinc-900/50 p-8 rounded-[2rem] border border-black/5 dark:border-white/5 shadow-lg shrink-0 flex flex-col justify-between">
                  <Quote className="text-indigo-500/20 w-8 h-8 mb-4" />
                  <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed mb-8">"{review.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-zinc-900 dark:text-white">{review.name}</p>
                      <p className="text-[10px] uppercase tracking-widest text-zinc-400">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 6. FOOTER */}
        <footer className="max-w-7xl mx-auto px-6 py-20 text-center relative mt-10">
          <h2 className="text-[12vw] font-black tracking-tighter leading-none mb-12 opacity-5 pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 select-none uppercase italic">
            CONNECT
          </h2>
          <div className="relative z-10 flex flex-col items-center">
            <p className="text-zinc-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-8 italic">Ready to redefine possible?</p>
            <button
              onClick={() => setModalOpen(true)}
              className="group relative text-4xl md:text-7xl lg:text-7xl font-black italic tracking-tighter text-zinc-900 dark:text-white hover:text-indigo-500 transition-colors"
            >
              HELLO@PROG.DEV
              <div className="h-1.5 md:h-2 w-0 group-hover:w-full bg-indigo-500 transition-all duration-500 mt-2 rounded-full"></div>
            </button>

            <div className="mt-20 flex flex-wrap justify-center gap-6 md:gap-10">
              <a href="#" className="text-zinc-400 hover:text-indigo-500 transition-colors font-bold uppercase text-[10px] tracking-[0.2em] italic underline decoration-zinc-800 underline-offset-4">LinkedIn</a>
              <a href="#" className="text-zinc-400 hover:text-indigo-500 transition-colors font-bold uppercase text-[10px] tracking-[0.2em] italic underline decoration-zinc-800 underline-offset-4">GitHub</a>
              <a href="#" className="text-zinc-400 hover:text-indigo-500 transition-colors font-bold uppercase text-[10px] tracking-[0.2em] italic underline decoration-zinc-800 underline-offset-4">Twitter</a>
            </div>
            <p className="mt-16 text-[9px] font-mono text-zinc-400 opacity-40 uppercase tracking-[0.3em]">© 2026 Developed with Passion</p>
          </div>
        </footer>

        {/* Custom Styling */}
        <style dangerouslySetInnerHTML={{
          __html: `
          /* Organic Floating Animations */
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(1deg); }
          }
          @keyframes float-reverse {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(12px) rotate(-1deg); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float 6s ease-in-out 3s infinite;
          }
          .animate-float-reverse {
            animation: float-reverse 7s ease-in-out infinite;
          }

          /* Marquee Animations */
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .animate-marquee-reverse {
            animation: marquee-reverse 30s linear infinite;
          }

          /* Shimmer Animation */
          @keyframes shimmer {
            100% {
              transform: translateX(100%);
            }
          }
          
          /* Scroll Reveal Animations */
          .reveal-on-scroll {
            opacity: 0;
            transform: translateY(40px) scale(0.98);
            transition: opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1), transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
            will-change: opacity, transform;
          }
          .reveal-on-scroll.is-revealed {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          .delay-100 { transition-delay: 100ms; }
          .delay-200 { transition-delay: 200ms; }
          .delay-300 { transition-delay: 300ms; }
          
          /* Responsive Outline Text for Projects */
          .project-title-outline {
            color: transparent;
            -webkit-text-stroke: 1px #000000;
            opacity: 0.5;
            transition: -webkit-text-stroke 0.4s ease, opacity 0.4s ease, color 0.4s ease;
          }
          .dark .project-title-outline {
            -webkit-text-stroke: 1px #ffffff;
            opacity: 0.35;
          }
          
          /* Premium Outline Text for Hero Background */
          .outline-text-strong {
            color: transparent;
            -webkit-text-stroke: 1px rgba(0,0,0,0.1);
          }
          .dark .outline-text-strong {
            -webkit-text-stroke: 1px rgba(255,255,255,0.1);
          }
          
          @media (min-width: 768px) {
            .project-title-outline {
              -webkit-text-stroke: 1.5px #000000;
            }
            .dark .project-title-outline {
              -webkit-text-stroke: 1.5px #ffffff;
            }
            
            .outline-text-strong {
                -webkit-text-stroke: 2px rgba(0,0,0,0.08);
            }
            .dark .outline-text-strong {
                -webkit-text-stroke: 2px rgba(255,255,255,0.08);
            }
          }
          
          @media (min-width: 1024px) {
            .group:hover .project-title-outline {
              color: currentColor;
              -webkit-text-stroke: 0px transparent;
              opacity: 1;
            }
          }
          
          .project-title-mobile-active {
            color: currentColor !important;
            -webkit-text-stroke: 0px transparent !important;
            opacity: 1 !important;
          }

          .outline-text {
            -webkit-text-stroke: 1px currentColor;
            color: transparent;
            opacity: 0.25;
          }
          .dark .outline-text {
             -webkit-text-stroke: 1px rgba(255,255,255,0.3);
          }
          @keyframes revealText {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .reveal-text {
            animation: revealText 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
            opacity: 0;
          }
          html { scroll-behavior: smooth; }
        `}} />
      </div>
    </div>
  );
}