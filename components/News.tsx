import Reveal from "./Reveal";

type Article = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
  visual: string;
};

const articles: Article[] = [
  {
    category: "Essay",
    title: "Building with less: the discipline of restraint",
    excerpt:
      "On why the most radical act in California architecture today is to remove rather than add — restraint as a form of generosity.",
    date: "May 2024",
    read: "6 min",
    visual:
      "linear-gradient(150deg, #4a4a4d 0%, #202021 55%, #0c0c0d 100%)",
  },
  {
    category: "News",
    title: "High Desert Retreat honored for fire-resilient design",
    excerpt:
      "Our Joshua Tree retreat has been recognised for its defensible-space strategy and rammed-earth thermal mass.",
    date: "Apr 2024",
    read: "3 min",
    visual:
      "linear-gradient(150deg, #9a9a9a 0%, #5a5a5a 55%, #2a2a2a 100%)",
  },
  {
    category: "Research",
    title: "Designing for drought: the dry garden in practice",
    excerpt:
      "A study on native plant palettes, greywater and how California's dry seasons reshape the way we draw the ground.",
    date: "Mar 2024",
    read: "8 min",
    visual:
      "linear-gradient(150deg, #6b6b6e 0%, #2c2c2e 60%, #111112 100%)",
  },
];

export default function News() {
  return (
    <section id="news" className="bg-stone-50 py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal className="mb-14 flex flex-col gap-6 border-t border-stone-200 pt-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-stone-400">
              News & Insights
            </p>
            <h2 className="text-4xl font-light leading-tight tracking-tight text-ink md:text-6xl">
              Thinking, made public.
            </h2>
          </div>
          <a
            href="#news"
            className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-stone-500 transition-colors duration-300 hover:text-ink"
          >
            All Articles
            <span className="transition-transform duration-500 ease-smooth group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {articles.map((article, i) => (
            <Reveal
              key={article.title}
              delay={i * 120}
              as="article"
              className="group flex flex-col"
            >
              <a href="#news" className="flex flex-1 flex-col">
                <div className="relative aspect-[5/4] overflow-hidden bg-stone-100">
                  <div
                    className="absolute inset-0 transition-transform duration-[1.4s] ease-smooth group-hover:scale-[1.05]"
                    style={{ background: article.visual }}
                  />
                  <div className="absolute left-5 top-5 bg-white/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink">
                    {article.category}
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-stone-400">
                  <span>{article.date}</span>
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>{article.read}</span>
                </div>
                <h3 className="mt-4 text-xl font-medium leading-snug tracking-tight text-ink transition-colors duration-300 group-hover:text-stone-500 md:text-2xl">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  {article.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-ink">
                  Read
                  <span className="transition-transform duration-500 ease-smooth group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
