import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-slate-950 flex items-center" id="about">
      {/* Fondo Minimalista */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Un único resplandor muy suave en el centro-derecha */}
        <div className="absolute right-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.03] blur-[120px]" />
        
        {/* Cuadrícula técnica casi imperceptible */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:py-0">
        <div className="grid w-full gap-16 lg:grid-cols-12 lg:items-center">

          {/* COLUMNA IZQUIERDA (Info) */}
          <div className="flex flex-col justify-center lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 w-fit rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 text-xs font-medium tracking-wider text-slate-400 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              Full Stack .NET Developer
            </div>

            <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl leading-none">
              Iván <span className="text-slate-400">Sandiyú</span>
            </h1>

            <p className="mt-6 max-w-lg text-base md:text-lg leading-relaxed text-slate-400">
              Desarrollo aplicaciones empresariales robustas y escalables utilizando 
              <span className="text-white font-medium"> ASP.NET Core</span>, 
              <span className="text-white font-medium"> React</span> y arquitectura limpia.
            </p>

            {/* Botones de acción rápidos */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="group flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:bg-slate-200"
              >
                Ver proyectos
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a 
                href="/Cv_IvanSandiyu.pdf" 
                download
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/[0.06] hover:border-white/20"
              >
                Descargar CV
                <Download size={16} />
              </a>
            </div>

            {/* Métricas / Estadísticas */}
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/[0.06] pt-10 max-w-md">
              {[
                { value: "+10", label: "Tecnologías" },
                { value: "+5", label: "Proyectos" },
                { value: "+1", label: "Año Experiencia" }

              ].map((stat, idx) => (
                <motion.div key={idx}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.2
                }}
              >   
                  {<p className="text-3xl font-bold tracking-tight text-white">{stat.value}</p>}
                  <p className="mt-1 text-xs text-slate-500 font-medium uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>

          </div>

          {/* COLUMNA DERECHA (Editor de código) */}
          <div className="hidden lg:flex lg:col-span-5 justify-center">
            <div className="w-full max-w-md overflow-hidden rounded-xl border border-white/[0.08] bg-slate-950/40 backdrop-blur-md shadow-2xl">
              
              {/* Barra superior del editor */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-slate-950/80">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-white/10" />
                  <span className="h-3 w-3 rounded-full bg-white/10" />
                  <span className="h-3 w-3 rounded-full bg-white/10" />
                </div>
                <span className="text-[11px] font-mono text-slate-500 tracking-wider">developer.cs</span>
              </div>

              {/* Contenido de código */}
              <div className="p-6 font-mono text-xs md:text-sm leading-relaxed text-slate-400">
                <pre>
                  <code>
                    <span className="text-blue-400">const</span> developer = &#123;{`\n`}
                    {`  name: `}<span className="text-amber-200">"Iván Sandiyú"</span>,{`\n`}
                    {`  role: `}<span className="text-amber-200">".NET Developer"</span>,{`\n`}
                    {`  stack: [`}
                    {`\n    `}<span className="text-emerald-300">"C#"</span>, 
                    {` `}<span className="text-emerald-300">"React"</span>, 
                    {` `}<span className="text-emerald-300">"Angular"</span>, 
                    {` `}<span className="text-emerald-300">"SQL Server"</span>
                    {`\n  ],`}
                    {`\n  architecture: `}<span className="text-amber-200">"Clean architecture"</span>,
                    {`\n  available: `}<span className="text-blue-400">true</span>
                    {`\n`}&#125;;
                  </code>
                </pre>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}