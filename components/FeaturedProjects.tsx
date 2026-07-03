import Reveal from "./Reveal";

type Project = {
  name: string;
  location: string;
  year: string;
  description: string;
  visual: string;
  span: string;
};

const projects: Project[] = [
  {
    name: "Atelier Pavilion",
    location: "Oslo, Norway",
    year: "2024",
    description:
      "A timber-clad research pavilion that dissolves the line between interior and the surrounding boreal forest.",
    visual:
      "linear-gradient(145deg, #3a3a3d 0%, #1f1f21 55%, #0e0e0f 100%)",
    span: "md:col-span-7",
  },
  {
    name: "Meridian Tower",
    location: "Singapore",
    year: "2023",
    description:
      "A slender residential high-rise sculpted by tropical light and cross-ventilation.",
    visual:
      "linear-gradient(160deg, #cfcfcf 0%, #8a8a8a 50%, #4a4a4a 100%)",
    span: "md:col-span-5",
  },
  {
    name: "Strand Museum",
    location: "Lisbon, Portugal",
    year: "2023",
    description:
      "Cast concrete volumes carved into the hillside, framing unbroken views of the Atlantic.",
    visual:
      "linear-gradient(150deg, #6b6b6e 0%, #2a2a2c 60%, #131314 100%)",
    span: "md:col-span-5",
  },
  {
    name: "Kvarts Cultural Center",
    location: "Reykjavík, Iceland",
    year: "2022",
    description:
      "Volcanic basalt and glass form a civic gathering space tuned to the long northern light.",
    visual:
      "linear-gradient(135deg, #2c2c2e 0%, #171718 50%, #353535 100%)",
    span: "md:col-span-7",
  },
  {
    name: "Horizon Library",
    location: "Cape Town, South Africa",
    year: "2022",
    description:
      "A public library lifted on slender columns, its reading room opening toward Table Mountain.",
    visual:
      "linear-gradient(140deg, #9a9a9a 0%, #5e5e5e 55%, #262626 100%)",
    span: "md:col-span-6",
  },
  {
    name: "Mono House",
    location: "Kyoto, Japan",
    year: "2021",
    description:
      "A single-material dwelling where light, shadow and silence define the domestic ritual.",
    visual:
      "linear-gradient(155deg, #4a4a4d 0%, #1d1d1f 60%, #0a0a0b 100%)",
    span: "md:col-span-6",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal
      as="li"
      delay={(index % 2) * 120}
      className={`group relative ${project.span}`}
    >
      <a href="#projects" className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
          <div
            className="absolute inset-0 transition-transform duration-[1.4s] ease-smooth group-hover:scale-[1.05]"
            style={{ background: project.visual }}
          />
          {/* structural grid overlay */}
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-smooth group-hover:opacity-100"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          <div className="absolute left-6 top-6 text-[11px] uppercase tracking-[0.3em] text-white/70">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white opacity-0 transition-all duration-500 ease-smooth group-hover:opacity-100 group-hover:-translate-y-1">
            ↗
          </div>
        </div>

        <div className="mt-5 flex items-baseline justify-between gap-6">
          <h3 className="text-xl font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-stone-500">
            {project.name}
          </h3>
          <span className="shrink-0 text-sm text-stone-400">{project.year}</span>
        </div>
        <p className="mt-1 text-sm uppercase tracking-[0.18em] text-stone-400">
          {project.location}
        </p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-600">
          {project.description}
        </p>
      </a>
    </Reveal>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-white py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal className="mb-14 flex flex-col gap-6 border-t border-stone-200 pt-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-stone-400">
              Selected Work
            </p>
            <h2 className="max-w-2xl text-4xl font-light leading-tight tracking-tight text-ink md:text-6xl">
              Featured Projects
            </h2>
          </div>
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-stone-500 transition-colors duration-300 hover:text-ink"
          >
            All Projects
            <span className="transition-transform duration-500 ease-smooth group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>

        <ul className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
