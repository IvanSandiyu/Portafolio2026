import { motion } from "framer-motion";

const jobs = [
  {
    year: "2025",
    title: "Desarrollador Backend",
    company: "COYA SOFTWARE",
    description: [
      "Migración de sistemas legados de Visual Basic a .NET moderno, mejorando la mantenibilidad y escalabilidad del software de laboratorio.",
      "Diseño y construcción de APIs RESTful robustas utilizando C# y Entity Framework Core bajo patrones de Clean Architecture.",
      "Implementación de principios SOLID para asegurar la separación de capas (Datos, Negocio y Presentación).",
    ],
  },
  {
    year: "2024 — 2025",
    title: "Pasante Desarrollador Full Stack",
    company: "Grandi y Asociados",
    description: [
      "Desarrollo integral de funcionalidades CRUD (ABMs) y módulos de gestión utilizando C# .NET, JavaScript y Angular.",
      "Gestión y optimización de bases de datos SQL Server.",
      "Colaboración en el diseño de arquitectura MVC para aplicaciones empresariales.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16 text-center">
        <p className="mb-3 font-mono text-sm text-dotnet-light">
          <span className="text-slate-500">//</span> experiencia
        </p>
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Mi <span className="text-gradient">recorrido</span> profesional
        </h2>
      </div>

      <div className="mx-auto max-w-3xl space-y-10">
        {jobs.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="relative grid grid-cols-[24px_1fr] gap-6"
          >
            <div className="flex flex-col items-center">
              <span className="mt-2 h-3 w-3 rounded-full bg-dotnet shadow-[0_0_14px_rgba(110,75,255,0.9)] ring-4 ring-dotnet/20" />
              {i !== jobs.length - 1 && (
                <span className="mt-3 w-px flex-1 bg-gradient-to-b from-dotnet/50 via-white/10 to-transparent" />
              )}
            </div>

            <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-300 hover:border-dotnet/40 hover:bg-white/[0.03] md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white md:text-2xl">{job.title}</h3>
                  <p className="mt-1 font-medium text-dotnet-light">{job.company}</p>
                </div>
                <span className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-slate-400">
                  {job.year}
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-400 md:text-base">
                {job.description.map((item, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="mt-0.5 select-none font-mono text-dotnet-light">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
