import Reveal from "./Reveal";

const pillars = [
  {
    no: "01",
    title: "Space",
    text: "We begin with the void — the quality of air, light and silence. Architecture is the measured shaping of nothing into meaning.",
  },
  {
    no: "02",
    title: "Environment",
    text: "Every building is a climate. From coast to high desert, we design with sun, wind, water and ground — letting the California site set the terms of the answer.",
  },
  {
    no: "03",
    title: "Material",
    text: "Materials age and tell the truth of time. Rammed earth, board-formed concrete, reclaimed redwood — chosen for weight, warmth and how they hold the western light.",
  },
  {
    no: "04",
    title: "Human",
    text: "Buildings are lived in. We measure success in the everyday — how a doorway, a bench, a view changes a person's hour.",
  },
];

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden bg-stone-50 py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-stone-400">
              Philosophy
            </p>
            <h2 className="text-4xl font-light leading-[1.05] tracking-tight text-ink md:text-6xl">
              The relation between space, environment, material and people.
            </h2>
          </Reveal>

          <Reveal
            delay={150}
            className="md:col-span-6 md:col-start-7 md:pt-4"
          >
            <p className="text-lg font-light leading-relaxed text-stone-600">
              We believe architecture is an act of care. It begins by listening
              to a place and ends only when a building has been quietly absorbed
              into the lives of those who use it. Across California — its
              coastline, valleys and deserts — our work searches for the calm,
              the durable and the humane, erasing the line between indoor and
              outdoor. Forms that feel inevitable rather than imposed.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal
              key={p.no}
              delay={i * 100}
              className="group bg-stone-50 p-8 transition-colors duration-500 hover:bg-white md:p-10"
            >
              <span className="block text-sm text-stone-400">{p.no}</span>
              <h3 className="mt-8 text-2xl font-medium tracking-tight text-ink">
                {p.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">
                {p.text}
              </p>
              <span className="mt-8 block h-px w-10 bg-ink transition-all duration-500 ease-smooth group-hover:w-20" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
