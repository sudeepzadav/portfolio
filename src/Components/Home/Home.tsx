import { Logo } from "../../Constants/image";

const Home = () => {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          0%   { opacity: 0; transform: translateY(60px) skewY(2deg) scale(0.95); }
          100% { opacity: 1; transform: translateY(0)   skewY(0deg) scale(1);    }
        }
        @keyframes scaleIn {
          0%   { opacity: 0; transform: scale(0.6) rotate(-6deg); }
          100% { opacity: 1; transform: scale(1)   rotate(0deg);  }
        }
        @keyframes slideRight {
          0%   { opacity: 0; transform: translateX(-60px); }
          100% { opacity: 1; transform: translateX(0);     }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; transform: scale(1);    }
          50%       { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes countUp {
          0%   { opacity: 0; transform: translateY(20px) scale(0.8); }
          100% { opacity: 1; transform: translateY(0)    scale(1);   }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg);   }
          to   { transform: rotate(360deg); }
        }
        @keyframes spinReverse {
          from { transform: rotate(0deg);    }
          to   { transform: rotate(-360deg); }
        }
        @keyframes shimmer {
          0%   { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%)  skewX(-12deg); }
        }
        @keyframes gradientShift {
          0%   { background-position: 0%   50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0%   50%; }
        }
        @keyframes ringPulse {
          0%, 100% { opacity: 0.3; transform: scale(1);    }
          50%       { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes orbPulse {
          0%, 100% { opacity: 0.15; transform: scale(1);    }
          50%       { opacity: 0.45; transform: scale(1.15); }
        }
        @keyframes starTwinkle {
          0%, 100% { opacity: 0;    transform: scale(0.5) rotate(0deg);   }
          50%       { opacity: 1;    transform: scale(1)   rotate(180deg); }
        }
        @keyframes starDrift {
          0%   { opacity: 0;   transform: translateY(0px)   scale(0.8); }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { opacity: 0;   transform: translateY(-40px) scale(0.4); }
        }
        @keyframes starPop {
          0%   { opacity: 0; transform: scale(0) rotate(0deg);   }
          40%  { opacity: 1; transform: scale(1.3) rotate(90deg); }
          70%  { opacity: 1; transform: scale(0.9) rotate(150deg); }
          100% { opacity: 0; transform: scale(0) rotate(180deg); }
        }

        .anim-fade-up     { animation: fadeUp     0.9s cubic-bezier(0.16,1,0.3,1) forwards; }
        .anim-scale-in    { animation: scaleIn    1.0s cubic-bezier(0.16,1,0.3,1) forwards; }
        .anim-slide-right { animation: slideRight 0.8s cubic-bezier(0.16,1,0.3,1) forwards; }
        .anim-pulse-glow  { animation: pulseGlow  2.5s ease-in-out infinite;                 }
        .anim-count-up    { animation: countUp    0.8s cubic-bezier(0.16,1,0.3,1) forwards; }
        .anim-spin-slow   { animation: spinSlow   20s  linear infinite;                      }
        .anim-spin-rev    { animation: spinReverse 30s linear infinite;                      }
        .anim-ring-pulse  { animation: ringPulse  2s   ease-in-out infinite;                 }
        .anim-orb-pulse   { animation: orbPulse   3s   ease-in-out infinite;                 }

        .btn-shimmer { position: relative; overflow: hidden; }
        .btn-shimmer::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.25);
          transform: translateX(-100%) skewX(-12deg);
        }
        .btn-shimmer:hover::after {
          animation: shimmer 0.55s ease forwards;
        }

        .animated-gradient {
          background: linear-gradient(270deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4);
          background-size: 300% 300%;
          animation: gradientShift 4s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-item { transition: transform 0.25s ease; cursor: default; }
        .stat-item:hover { transform: scale(1.15) translateY(-4px); }

        .image-wrapper {
          width: 340px;
          height: 340px;
          border-radius: 9999px;
          overflow: hidden;
          flex-shrink: 0;
          position: relative;
          z-index: 3;
        }
        @media (min-width: 640px) {
          .image-wrapper { width: 380px; height: 380px; }
        }

        /* 4-point star shape */
        .star-4 {
          position: absolute;
          background: transparent;
          pointer-events: none;
        }
        .star-4::before,
        .star-4::after {
          content: '';
          position: absolute;
          background: currentColor;
          border-radius: 50%;
        }
        .star-4::before {
          width: 100%;
          height: 30%;
          top: 35%;
          left: 0;
        }
        .star-4::after {
          width: 30%;
          height: 100%;
          left: 35%;
          top: 0;
        }

        /* Dot star */
        .star-dot {
          position: absolute;
          border-radius: 9999px;
          pointer-events: none;
        }

        /* Cross star */
        .star-cross {
          position: absolute;
          pointer-events: none;
        }
        .star-cross::before,
        .star-cross::after {
          content: '';
          position: absolute;
          background: currentColor;
          border-radius: 2px;
        }
        .star-cross::before {
          width: 2px;
          height: 100%;
          left: 50%;
          transform: translateX(-50%);
        }
        .star-cross::after {
          width: 100%;
          height: 2px;
          top: 50%;
          transform: translateY(-50%);
        }
      `}</style>

      <section className="relative overflow-hidden px-4 md:px-10 py-6 bg-linear-to-br from-slate-100 via-white to-cyan-50 dark:from-[#0f172a] dark:via-[#111827] dark:to-black transition-colors duration-500 min-h-[calc(100vh-64px)] flex items-center">

        {/* Background orbs */}
        <div className="absolute -top-20 -left-20 w-125 h-125 bg-cyan-400/25 dark:bg-cyan-500/15 blur-3xl rounded-full anim-orb-pulse" />
        <div className="absolute -bottom-20 -right-20 w-125 h-125 bg-violet-400/25 dark:bg-violet-500/15 blur-3xl rounded-full anim-orb-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400/15 blur-3xl rounded-full anim-orb-pulse" style={{ animationDelay: "0.75s" }} />

        

        <div className="relative w-full grid grid-cols-1 lg:grid-cols-5 items-center rounded-3xl overflow-hidden border border-white/40 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-[0_10px_60px_rgba(0,0,0,0.12)] dark:shadow-[0_10px_60px_rgba(0,0,0,0.55)]">

          {/* Text Section */}
          <div className="lg:col-span-3 p-8 md:p-14 order-2 lg:order-1 flex flex-col justify-center relative">

            {/* ── STARS BEHIND TEXT ── */}

            {/* 4-point stars */}
            <div className="star-4 text-cyan-400/50   dark:text-cyan-300/40"  style={{ width: "14px", height: "14px", top: "8%",  left: "6%",  animation: "starTwinkle 2.4s ease-in-out infinite",        animationDelay: "0s"    }} />
            <div className="star-4 text-violet-400/50 dark:text-violet-300/40" style={{ width: "10px", height: "10px", top: "18%", left: "55%", animation: "starTwinkle 3.1s ease-in-out infinite",        animationDelay: "0.8s"  }} />
            <div className="star-4 text-pink-400/50   dark:text-pink-300/40"   style={{ width: "16px", height: "16px", top: "35%", left: "3%",  animation: "starTwinkle 2.7s ease-in-out infinite",        animationDelay: "1.4s"  }} />
            <div className="star-4 text-blue-400/40   dark:text-blue-300/30"   style={{ width: "8px",  height: "8px",  top: "55%", left: "48%", animation: "starTwinkle 3.5s ease-in-out infinite",        animationDelay: "0.4s"  }} />
            <div className="star-4 text-cyan-300/50   dark:text-cyan-200/35"   style={{ width: "12px", height: "12px", top: "72%", left: "8%",  animation: "starTwinkle 2.2s ease-in-out infinite",        animationDelay: "1.9s"  }} />
            <div className="star-4 text-violet-300/45 dark:text-violet-200/35" style={{ width: "18px", height: "18px", top: "82%", left: "60%", animation: "starTwinkle 3.8s ease-in-out infinite",        animationDelay: "0.6s"  }} />
            <div className="star-4 text-pink-300/40   dark:text-pink-200/30"   style={{ width: "9px",  height: "9px",  top: "92%", left: "30%", animation: "starTwinkle 2.9s ease-in-out infinite",        animationDelay: "2.2s"  }} />
            <div className="star-4 text-cyan-400/35   dark:text-cyan-300/25"   style={{ width: "11px", height: "11px", top: "25%", left: "80%", animation: "starTwinkle 3.3s ease-in-out infinite",        animationDelay: "1.1s"  }} />

            {/* Drifting dot stars */}
            <div className="star-dot bg-cyan-400/60   dark:bg-cyan-300/50"   style={{ width: "3px", height: "3px", top: "12%", left: "20%", animation: "starDrift 4s ease-in-out infinite",  animationDelay: "0s"   }} />
            <div className="star-dot bg-violet-400/60 dark:bg-violet-300/50" style={{ width: "2px", height: "2px", top: "40%", left: "70%", animation: "starDrift 5s ease-in-out infinite",  animationDelay: "1.2s" }} />
            <div className="star-dot bg-pink-400/60   dark:bg-pink-300/50"   style={{ width: "3px", height: "3px", top: "60%", left: "15%", animation: "starDrift 3.5s ease-in-out infinite", animationDelay: "0.7s" }} />
            <div className="star-dot bg-blue-400/50   dark:bg-blue-300/40"   style={{ width: "2px", height: "2px", top: "78%", left: "45%", animation: "starDrift 4.5s ease-in-out infinite", animationDelay: "2s"   }} />
            <div className="star-dot bg-cyan-300/50   dark:bg-cyan-200/40"   style={{ width: "2px", height: "2px", top: "90%", left: "75%", animation: "starDrift 3.8s ease-in-out infinite", animationDelay: "1.5s" }} />
            <div className="star-dot bg-violet-300/50 dark:bg-violet-200/40" style={{ width: "3px", height: "3px", top: "5%",  left: "40%", animation: "starDrift 5.2s ease-in-out infinite", animationDelay: "0.3s" }} />

            {/* Cross / plus stars */}
            <div className="star-cross text-cyan-400/50   dark:text-cyan-300/40"  style={{ width: "12px", height: "12px", top: "15%", left: "35%", animation: "starPop 3.5s ease-in-out infinite",  animationDelay: "1s"   }} />
            <div className="star-cross text-violet-400/45 dark:text-violet-300/35" style={{ width: "10px", height: "10px", top: "45%", left: "25%", animation: "starPop 4.2s ease-in-out infinite",  animationDelay: "0.5s" }} />
            <div className="star-cross text-pink-400/45   dark:text-pink-300/35"   style={{ width: "14px", height: "14px", top: "65%", left: "65%", animation: "starPop 3s ease-in-out infinite",    animationDelay: "2s"   }} />
            <div className="star-cross text-blue-400/40   dark:text-blue-300/30"   style={{ width: "8px",  height: "8px",  top: "85%", left: "10%", animation: "starPop 4.8s ease-in-out infinite",  animationDelay: "1.7s" }} />
            <div className="star-cross text-cyan-300/40   dark:text-cyan-200/30"   style={{ width: "16px", height: "16px", top: "30%", left: "88%", animation: "starPop 3.8s ease-in-out infinite",  animationDelay: "0.9s" }} />

            {/* Badge */}
            <div className="opacity-0 anim-slide-right" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-cyan-100 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/20 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
                Welcome to My Portfolio
              </span>
            </div>

            {/* Heading line 1 */}
            <div className="opacity-0 anim-fade-up" style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="animated-gradient">Discover My Amazing</span>
              </h1>
            </div>

            {/* Heading line 2 */}
            <div className="opacity-0 anim-fade-up mb-6" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-800 dark:text-slate-100">
                Art Space
              </h1>
            </div>

            {/* Description */}
            <p
              className="max-w-xl text-base md:text-lg leading-relaxed mb-8 text-slate-600 dark:text-slate-300 opacity-0 anim-fade-up"
              style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
            >
              I create modern, responsive, and interactive web experiences using
              React, Tailwind CSS, and creative UI designs.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 opacity-0 anim-fade-up" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
              <button className="btn-shimmer px-7 py-3 rounded-xl font-semibold text-white bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 dark:from-cyan-400 dark:to-violet-500 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
                Explore Now
              </button>
              <button
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                className="px-7 py-3 rounded-xl font-semibold bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-cyan-400 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                View Projects
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 mt-12">
              {[
                { value: "2+",   label: "Years Experience",   color: "text-cyan-500 dark:text-cyan-400",    delay: "0.85s" },
                { value: "10+",  label: "Completed Projects",  color: "text-violet-500 dark:text-violet-400", delay: "1.0s"  },
                { value: "100%", label: "Client Satisfaction", color: "text-pink-500 dark:text-pink-400",    delay: "1.15s" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="opacity-0 anim-count-up stat-item"
                  style={{ animationDelay: stat.delay, animationFillMode: "forwards" }}
                >
                  <h2 className={`text-3xl font-bold ${stat.color}`}>{stat.value}</h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div
            className="lg:col-span-2 flex justify-center items-center p-8 order-1 lg:order-2 opacity-0 anim-scale-in"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <div className="relative flex justify-center items-center">

              {/* Outer spinning ring */}
              <div
                className="absolute rounded-full border-2 border-dashed border-cyan-400/40 dark:border-cyan-500/30 anim-spin-slow anim-ring-pulse"
                style={{ width: "420px", height: "420px" }}
              />
              {/* Inner spinning ring reverse */}
              <div
                className="absolute rounded-full border border-dashed border-violet-400/30 dark:border-violet-500/20 anim-spin-rev"
                style={{ width: "460px", height: "460px" }}
              />

              {/* Conic glow around image edges */}
              <div
                className="absolute rounded-full anim-pulse-glow"
                style={{
                  width: "360px",
                  height: "360px",
                  background: "conic-gradient(from 0deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899, #06b6d4)",
                  filter: "blur(14px)",
                  opacity: 0.65,
                  zIndex: 2,
                }}
              />

              {/* Image */}
              <div className="image-wrapper border-2 border-white/30 shadow-2xl hover:scale-105 transition-transform duration-500">
                <img
                  src={Logo}
                  alt="Profile"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Badge top-right */}
              <div
                className="absolute top-2 right-0 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl px-3 py-2 shadow-xl border border-slate-100 dark:border-slate-700 opacity-0 anim-fade-up"
                style={{ animationDelay: "1.0s", animationFillMode: "forwards", zIndex: 4 }}
              >
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">⚡ Available for work</p>
              </div>

              {/* Badge bottom-left */}
              <div
                className="absolute bottom-2 left-0 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl px-3 py-2 shadow-xl border border-slate-100 dark:border-slate-700 opacity-0 anim-fade-up"
                style={{ animationDelay: "1.15s", animationFillMode: "forwards", zIndex: 4 }}
              >
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">🎨 React · Tailwind</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;