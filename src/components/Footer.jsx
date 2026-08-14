export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Iván Sandiyú · Full Stack .NET Developer
        </p>
        <p className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-slate-600">
          <span className="text-emerald-400">✓</span>
          dotnet build --configuration Release
          <span className="text-emerald-400"> · Build succeeded</span>
        </p>
      </div>
    </footer>
  );
}
