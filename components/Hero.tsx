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
        {/* Light shaft */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "linear-gradient(125deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 38%)",
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
        {/* Silhouette of a building form */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1600 420"
          preserveAspectRatio="xMidYMax slice"
          aria-hidden="true"
        >
          <g fill="#000" opacity="0.85">
            <rect x="0" y="240" width="180" height="180" />
            <rect x="180" y="180" width="120" height="240" />
            <rect x="300" y="280" width="90" height="140" />
            <rect x="430" y="150" width="150" height="270" />
            <rect x="580" y="220" width="70" height="200" />
            <rect x="680" y="120" width="200" height="300" />
            <rect x="900" y="200" width="80" height="220" />
            <rect x="1040" y="90" width="130" height="330" />
            <rect x="1170" y="170" width="110" height="250" />
            <rect x="1320" y="250" width="100" height="170" />
            <rect x="1450" y="140" width="150" height="280" />
          </g>
          <g fill="#fff" opacity="0.05">
            {Array.from({ length: 40 }).map((_, i) => (
              <rect
                key={i}
                x={20 + (i % 10) * 14}
                y={260 + Math.floor(i / 10) * 18}
                width="5"
                height="8"
              />
            ))}
          </g>
        </svg>
        {/* Bottom fade for legibility */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 md:px-12 md:pb-24">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/50 animate-fade-up">
            Architecture · Interior · Landscape
          </p>
          <h1
            className="font-sans text-5xl font-light leading-[0.95] tracking-tightest text-white animate-fade-up sm:text-7xl md:text-8xl lg:text-[8.5rem]"
            style={{ animationDelay: "120ms" }}
          >
            Test Company
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
