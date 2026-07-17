export default function Navbar() {
    return (
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          
          <a
            href="#"
            className="text-lg font-semibold tracking-tight text-white hover:opacity-80 transition-opacity"
          >
            Developer
          </a>
  
          <nav className="hidden gap-8 text-sm font-medium text-slate-400 md:flex">
            {[
              ["Sobre mí", "#about"],
              ["Experiencia", "#experience"],
              ["Tecnologías", "#skills"],
              ["Proyectos", "#projects"],
              ["Contacto", "#contact"],
            ].map(([title, url]) => (
              <a
                key={title}
                href={url}
                className="relative py-1 transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full"
              >
                {title}
              </a>
            ))}
          </nav>
  
        </div>
      </header>
    );
  }