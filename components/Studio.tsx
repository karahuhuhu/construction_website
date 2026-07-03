import Reveal from "./Reveal";

const stats = [
  { value: "1998", label: "Founded" },
  { value: "120+", label: "Architects & designers" },
  { value: "30", label: "Countries" },
  { value: "200+", label: "Built projects" },
];

const process = [
  {
    step: "Context",
    text: "We study site, climate, history and community before drawing a single line.",
  },
  {
    step: "Concept",
    text: "A clear idea is distilled — one spatial proposition that everything else obeys.",
  },
  {
    step: "Craft",
    text: "Models, prototypes and full-scale mock-ups test material and detail by hand.",
  },
  {
    step: "Delivery",
    text: "We follow the work through construction, staying responsible until the last fixture.",
  },
];

export default function Studio() {
  return (
    <section id="studio" className="bg-white py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal className="grid grid-cols-1 gap-12 border-t border-stone-200 pt-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-stone-400">
              Studio
            </p>
            <h2 className="text-4xl font-light leading-tight tracking-tight text-ink md:text-6xl">
              A practice built on listening and making.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-4">
            <p className="text-lg font-light leading-relaxed text-stone-600">
              Test Company is an international studio of architects, landscape
              architects and designers. We work across scales — from a single
              room to an entire district — held together by one method: design
              slowly, build precisely, and let each place speak through the
              work.
            </p>
            <p className="mt-6 text-base font-light leading-relaxed text-stone-500">
              Our teams are small, multidisciplinary and embedded in every
              project. We keep authorship close to the craft, and the craft
              close to the site.
            </p>
          </div>
        </Reveal>

        {/* Studio visual + stats */}
        <Reveal
          delay={120}
          className="mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-12"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-ink md:col-span-8">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(110% 80% at 30% 30%, #2e2e31 0%, #161618 55%, #080809 100%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                backgroundSize: "80px 80px",
              }}
            />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                Main Studio
              </p>
              <p className="mt-2 text-xl font-light">Oslo · Lisbon · Singapore</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden border border-stone-200 bg-stone-200 md:col-span-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col justify-center bg-white p-6 md:p-8"
              >
                <span className="text-3xl font-light tracking-tight text-ink md:text-4xl">
                  {s.value}
                </span>
                <span className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-400">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Process */}
        <Reveal className="mt-20 md:mt-28">
          <p className="mb-10 text-xs uppercase tracking-[0.35em] text-stone-400">
            Design Process
          </p>
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div key={p.step} className="bg-white p-8 md:p-10">
                <span className="text-sm text-stone-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-2xl font-medium tracking-tight text-ink">
                  {p.step}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-stone-600">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
