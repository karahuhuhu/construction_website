import Reveal from "./Reveal";

const offices = [
  { city: "Los Angeles", address: "9200 Sunset Blvd, Suite 300, West Hollywood, CA 90069" },
  { city: "San Francisco", address: "535 Mission Street, Suite 1400, San Francisco, CA 94105" },
  { city: "San Diego", address: "4705 Viewridge Ave, Suite 200, San Diego, CA 92123" },
];

const social = ["Instagram", "LinkedIn", "Behance", "Vimeo"];

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white">
      <Reveal className="mx-auto max-w-[1600px] px-6 py-20 md:px-12 md:py-28">
        {/* CTA line */}
        <div className="flex flex-col gap-8 border-b border-white/10 pb-16 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
            Have a project in mind?
          </h2>
          <a
            href="mailto:studio@reganconstruction.com"
            className="group inline-flex items-center gap-4 self-start border border-white/30 px-8 py-4 text-sm uppercase tracking-[0.18em] transition-all duration-500 ease-smooth hover:bg-white hover:text-ink md:self-auto"
          >
            studio@reganconstruction.com
            <span className="transition-transform duration-500 ease-smooth group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 gap-10 py-16 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <a
              href="#top"
              className="text-lg font-medium tracking-tight text-white"
            >
              Regan<span className="font-light"> Construction</span>
            </a>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/50">
              A California-based architecture studio designing for a more
              thoughtful future.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              Studios
            </p>
            <ul className="mt-6 space-y-6">
              {offices.map((o) => (
                <li key={o.city}>
                  <p className="text-sm font-medium text-white">{o.city}</p>
                  <p className="mt-1 max-w-[14rem] text-sm leading-relaxed text-white/50">
                    {o.address}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              Contact
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/60">
              <li>
                <a
                  href="mailto:studio@reganconstruction.com"
                  className="transition-colors duration-300 hover:text-white"
                >
                  studio@reganconstruction.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+13105550100"
                  className="transition-colors duration-300 hover:text-white"
                >
                  +1 (310) 555-0100
                </a>
              </li>
              <li>Press: press@reganconstruction.com</li>
              <li>Careers: careers@reganconstruction.com</li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              Follow
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/60">
              {social.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-white"
                  >
                    {s}
                    <span className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.15em] text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Regan Construction. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="transition-colors hover:text-white/80">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-white/80">
              Imprint
            </a>
            <a href="#" className="transition-colors hover:text-white/80">
              Cookies
            </a>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
