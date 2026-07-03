export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink"
    >
      {/* Layered architectural visual */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 70% 18%, #2b2b2e 0%, #161618 42%, #080809 100%)",
          }}
        />
        {/* Light shaft — California golden hour hint */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "linear-gradient(125deg, rgba(255,236,205,0.10) 0%, rgba(255,255,255,0) 38%)",
          }}
        />
        {/* Faint structure lines */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />
        {/* California coast skyline: Pacific ranges + low-slung mid-century forms + palms */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1600 420"
          preserveAspectRatio="xMidYMax slice"
          aria-hidden="true"
        >
          {/* Distant coastal ranges */}
          <polygon
            fill="#000"
            opacity="0.55"
            points="0,300 130,252 250,278 390,222 530,258 670,210 830,250 990,202 1150,240 1310,212 1460,250 1600,232 1600,420 0,420"
          />
          {/* Mid-century low-slung buildings */}
          <g fill="#000" opacity="0.9">
            <rect x="40" y="322" width="210" height="58" />
            <rect x="290" y="300" width="120" height="80" />
            <rect x="470" y="332" width="170" height="48" />
            <rect x="700" y="288" width="150" height="92" />
            <rect x="910" y="314" width="180" height="66" />
            <rect x="1150" y="298" width="130" height="82" />
          </g>
          {/* Pacific waterline */}
          <rect x="0" y="382" width="1600" height="2" fill="#fff" opacity="0.35" />
          {/* Palm silhouettes */}
          <g stroke="#000" strokeWidth="3" fill="none" opacity="0.95">
            <line x1="1362" y1="384" x2="1362" y2="232" />
            <path d="M1362 232 Q1328 220 1300 214" strokeWidth="2" />
            <path d="M1362 232 Q1396 220 1424 214" strokeWidth="2" />
            <path d="M1362 232 Q1344 204 1334 184" strokeWidth="2" />
            <path d="M1362 232 Q1380 204 1390 184" strokeWidth="2" />
            <path d="M1362 232 Q1336 216 1306 228" strokeWidth="2" />
            <path d="M1362 232 Q1388 216 1418 228" strokeWidth="2" />
          </g>
          <g stroke="#000" strokeWidth="2.5" fill="none" opacity="0.9">
            <line x1="1488" y1="384" x2="1488" y2="270" />
            <path d="M1488 270 Q1464 262 1444 258" strokeWidth="1.6" />
            <path d="M1488 270 Q1512 262 1532 258" strokeWidth="1.6" />
            <path d="M1488 270 Q1476 250 1470 236" strokeWidth="1.6" />
            <path d="M1488 270 Q1500 250 1506 236" strokeWidth="1.6" />
            <path d="M1488 270 Q1466 258 1444 266" strokeWidth="1.6" />
            <path d="M1488 270 Q1510 258 1532 266" strokeWidth="1.6" />
          </g>
        </svg>
        {/* Bottom fade for legibility */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 md:px-12 md:pb-24">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/50 animate-fade-up">
            Architecture · Interior · Landscape · California
          </p>
          <h1
            className="font-sans text-5xl font-light leading-[0.95] tracking-tightest text-white animate-fade-up sm:text-6xl md:text-7xl lg:text-[6.5rem]"
            style={{ animationDelay: "120ms" }}
          >
            Regan Construction
          </h1>
          <p
            className="mt-8 max-w-xl text-lg font-light leading-relaxed text-white/70 animate-fade-up md:text-xl"
            style={{ animationDelay: "260ms" }}
          >
            Architecture for a more thoughtful future.
          </p>
          <div
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-3 border border-white/30 bg-white/0 px-8 py-4 text-sm uppercase tracking-[0.18em] text-white transition-all duration-500 ease-smooth hover:bg-white hover:text-ink"
            >
              View Projects
              <span className="transition-transform duration-500 ease-smooth group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#studio"
              className="inline-flex items-center justify-center gap-3 px-6 py-4 text-sm uppercase tracking-[0.18em] text-white/70 transition-colors duration-300 hover:text-white"
            >
              About Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 md:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-white/40" />
      </div>
    </section>
  );
}
