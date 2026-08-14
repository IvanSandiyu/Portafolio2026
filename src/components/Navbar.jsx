import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { title: "Inicio", url: "#about" },
  { title: "Experiencia", url: "#experience" },
  { title: "Stack", url: "#skills" },
  { title: "Proyectos", url: "#projects" },
  { title: "Contacto", url: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = ["about", "experience", "skills", "projects", "contact"];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#05060d]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#about" className="group flex items-center gap-1.5 font-mono text-lg">
          <span className="text-dotnet-light transition-transform group-hover:-translate-x-0.5">&lt;</span>
          <span className="font-semibold tracking-tight text-white">Sandiyú</span>
          <span className="text-dotnet-light transition-transform group-hover:translate-x-0.5">/&gt;</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map(({ title, url }) => (
            <a
              key={url}
              href={url}
              className={`relative px-3 py-1.5 text-sm transition-colors ${
                active === url ? "text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              {active === url && (
                <motion.span
                  layoutId="nav-underline"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-x-2 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-dotnet to-dotnet-light"
                />
              )}
              {title}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 lg:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs text-slate-400">Disponible</span>
          </div>

          <button
            className="rounded-lg border border-white/10 p-2 text-slate-300 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/[0.06] bg-[#05060d]/95 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map(({ title, url }) => (
                <a
                  key={url}
                  href={url}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    active === url ? "bg-white/[0.06] text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {title}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
