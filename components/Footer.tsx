import Reveal from "./Reveal";

const offices = [
  { city: "Oslo", address: "Dronningens gate 12, 0152 Oslo, Norway" },
  { city: "Lisbon", address: "Rua da Boavista 84, 1200-068 Lisboa, Portugal" },
  { city: "Singapore", address: "8 Marina Boulevard, #42-01, Singapore 018981" },
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
            href="mailto:studio@testcompany.com"
            className="group inline-flex items-center gap-4 self-start border border-white/30 px-8 py-4 text-sm uppercase tracking-[0.18em] transition-all duration-500 ease-smooth hover:bg-white hover:text-ink md:self-auto"
          >
            studio@testcompany.com
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
              Test<span className="font-light"> Company</span>
            </a>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/50">
              An international architecture studio designing for a more
              thoughtful future.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              Offices
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
                  href="mailto:studio@testcompany.com"
                  className="transition-colors duration-300 hover:text-white"
                >
                  studio@testcompany.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+4722000000"
                  className="transition-colors duration-300 hover:text-white"
                >
                  +47 22 00 00 00
                </a>
              </li>
              <li>Press: press@testcompany.com</li>
              <li>Careers: careers@testcompany.com</li>
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
          <p>© {new Date().getFullYear()} Test Company. All rights reserved.</p>
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
