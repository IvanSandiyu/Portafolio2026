export default function Footer() {
    return (
      <footer className="border-t border-white/[0.06] bg-slate-950 py-8 text-center text-xs text-slate-500">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Iván Sandiyú. Todos los derechos reservados.</p>
          <p className="font-mono text-slate-600 tracking-widest text-[10px]">CLEAN CODE &bull; SOLID DESIGN</p>
        </div>
      </footer>
    );
  }