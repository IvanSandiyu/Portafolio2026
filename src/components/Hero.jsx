import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const terminalLines = [
  { type: "cmd", text: "dotnet new webapi -n Sandiyu.Api" },
  { type: "out", text: "// El proyecto se creó correctamente." },
  { type: "cmd", text: "dotnet add package Microsoft.EntityFrameworkCore" },
  { type: "out", text: "// PackageReference añadido al proyecto." },
  { type: "cmd", text: "dotnet run --project Sandiyu.Api" },
  { type: "out", text: "info: Now listening on: http://localhost:5000" },
  { type: "out", text: "Application started. Press Ctrl+C to shut down." },
];

const roles = ["Full Stack .NET", "Backend Developer", "Clean Architecture", "APIs Restful"];

function useTypewriter(lines, speed = 26, pause = 2200) {
  const [count, setCount] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (count >= lines.length) {
      const t = setTimeout(() => {
        setCount(0);
        setChars(0);
      }, pause);
      return () => clearTimeout(t);
    }

    if (chars < lines[count].text.length) {
      const t = setTimeout(() => setChars((c) => c + 1), speed);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setCount((c) => c + 1);
      setChars(0);
    }, 240);
    return () => clearTimeout(t);
  }, [count, chars, lines, speed, pause]);

  return { count, chars };
}

function Terminal() {
  const { count, chars } = useTypewriter(terminalLines);

  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a18]/80 shadow-[0_0_80px_-20px_rgba(110,75,255,0.5)] backdrop-blur-md">
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-[11px] tracking-wider text-slate-500">bash — ivan@dev</span>
        <span className="h-3 w-3" />
      </div>

      <div className="min-h-[230px] p-5 font-mono text-[13px] leading-7">
        {terminalLines.slice(0, count).map((line, i) => (
          <div key={i} className={line.type === "cmd" ? "text-slate-100" : "text-slate-500"}>
            {line.type === "cmd" && <span className="mr-2 select-none text-dotnet-light">$</span>}
            {line.text}
          </div>
        ))}

        {count < terminalLines.length && (
          <div className={terminalLines[count].type === "cmd" ? "text-slate-100" : "text-slate-500"}>
            {terminalLines[count].type === "cmd" && (
              <span className="mr-2 select-none text-dotnet-light">$</span>
            )}
            {terminalLines[count].text.slice(0, chars)}
            <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-dotnet-light cursor-blink" />
          </div>
        )}
      </div>
    </div>
  );
}

function FloatingChip({ label, className }) {
  return (
    <div
      className={`pointer-events-none rounded-xl border border-dotnet/30 bg-[#0a0a18]/80 px-4 py-2 font-mono text-xs text-dotnet-light shadow-[0_0_30px_-10px_rgba(110,75,255,0.6)] backdrop-blur ${className}`}
    >
      {label}
    </div>
  );
}

function Counter({ end, suffix = "", duration = 1.8 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

function Stat({ end, suffix, label, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <p className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        <Counter end={end} suffix={suffix} />
      </p>
      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">{label}</p>
    </motion.div>
  );
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="about" className="relative flex min-h-[calc(100vh-64px)] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="animate-pulse-soft absolute -top-32 left-[15%] h-[520px] w-[520px] rounded-full bg-dotnet/25 blur-[150px]" />
        <div className="animate-pulse-soft-delay absolute right-[-80px] top-1/3 h-[460px] w-[460px] rounded-full bg-cyan-400/10 blur-[140px]" />
        <div className="absolute bottom-[-120px] left-[-80px] h-[420px] w-[420px] rounded-full bg-violet-500/15 blur-[140px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:py-0">
        <div className="grid w-full gap-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            {/* <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-dotnet-light opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-dotnet-light" />
              </span>
              <span className="font-mono text-xs tracking-wider text-slate-300">
                Full Stack .NET Developer
              </span>
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-7 text-5xl font-bold leading-[1.02] tracking-tight text-white md:text-7xl lg:text-8xl"
            >
              Iván
              <br />
              <span className="text-gradient">Sandiyú</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-5 flex items-center gap-3 font-mono text-lg text-slate-300 md:text-xl"
            >
              <span className="text-dotnet-light">$</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIdx]}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  {roles[roleIdx]}
                </motion.span>
              </AnimatePresence>
              <span className="cursor-blink text-dotnet-light">_</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-slate-400 md:text-lg"
            >
              Construyo aplicaciones empresariales robustas y escalables con
              <span className="font-medium text-white"> ASP.NET Core</span>,
              <span className="font-medium text-white"> C#</span>
              {/* <span className="font-medium text-white"> React,Angular,Boostrap</span>*/}, aplicando Clean Architecture y 
              buenas prácticas. 
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-dotnet to-violet-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_-10px_rgba(110,75,255,0.8)] transition-all hover:brightness-110 hover:shadow-[0_0_40px_-8px_rgba(110,75,255,0.9)]"
              >
                Ver proyectos
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/Cv_IvanSandiyu.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/25 hover:bg-white/[0.06]"
              >
                <Download size={16} />
                Descargar CV
              </a>
            </motion.div>

            <div className="mt-14 grid max-w-md grid-cols-3 gap-8 border-t border-white/[0.06] pt-8">
              <Stat end={10} suffix="+" label="Tecnologías" delay={0.5} />
              <Stat end={5} suffix="+" label="Proyectos" delay={0.6} />
              <Stat end={1} label="Año de experiencia" delay={0.7} />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex justify-center lg:col-span-5"
          >
            <Terminal />
            <FloatingChip label="C#" className="absolute -left-10 top-8 hidden animate-float lg:block" />
            <FloatingChip
              label=".NET 8"
              className="absolute -right-6 top-1/3 hidden animate-float-slow lg:block"
            />
            <FloatingChip label="EF Core" className="absolute bottom-4 left-4 hidden animate-float lg:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
