import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Sistema Panadería",
    file: "Panaderia.sln",
    tech: ["C#", "Blazor", "SQL Server"],
    description:
      "Sistema de gestión para panaderías que centraliza la administración del negocio: productos, ventas, stock y métricas operativas desde una única aplicación web.",
    link: "https://github.com/IvanSandiyu/SistemaPanaderia",
  },
  {
    title: "API Misión Espacial",
    file: "MissionController.cs",
    tech: ["Java", "Spring Boot", "PostgreSQL"],
    description:
      "API desarrollada en Java como trabajo final en la capacitación de una empresa: servicios RESTful con persistencia y documentación en Postman.",
    link: "https://github.com/IvanSandiyu/MisionEspacial",
  },
  {
    title: "CRUD con Python",
    file: "crud.py",
    tech: ["Python", "React", "JavaScript"],
    description:
      "Estructura limpia para el procesamiento de peticiones locales, manipulación de datos y automatización simple.",
    link: "https://github.com/IvanSandiyu/CRUD",
  },
  {
    title: "Sistema de Pedidos",
    file: "Pedidos.cs",
    tech: ["C#", "WinForms"],
    description:
      "Aplicación de escritorio para crear clientes, productos y pedidos, con gestión de ventas y seguimiento de pedidos.",
    link: "https://github.com/IvanSandiyu/CRUD-CSHARP",
  },
  {
    title: "GitHub / Otros repos",
    file: "ivan@github:*",
    tech: ["Git", "Open Source"],
    description:
      "Explora mi perfil para ver otras utilidades, scripts e integraciones en las que he colaborado.",
    link: "https://github.com/IvanSandiyu",
  },
];

function ProjectCard({ project, idx }) {
  const handleMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMove}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
      className={`spotlight group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] transition-colors duration-300 hover:border-dotnet/40 ${
        idx === projects.length - 1 ? "md:col-span-2 md:mx-auto md:max-w-2xl" : ""
      }`}
    >
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-black/30 px-5 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        </div>
        <span className="font-mono text-[11px] text-slate-500">{project.file}</span>
      </div>

      <div className="relative flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-slate-600">0{idx + 1}</span>
          <ArrowUpRight
            size={18}
            className="text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
          />
        </div>

        <h3 className="mt-2 text-xl font-bold text-white transition-colors group-hover:text-dotnet-light">
          {project.title}
        </h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-md bg-dotnet/10 px-2.5 py-1 font-mono text-[11px] text-dotnet-light">
              {t}
            </span>
          ))}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-400">{project.description}</p>

        <span className="mt-auto flex items-center gap-2 pt-6 font-mono text-xs text-slate-500 transition-colors group-hover:text-white">
          <span className="text-dotnet-light">$</span> git clone --link
        </span>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 font-mono text-sm text-dotnet-light">
            <span className="text-slate-500">//</span> proyectos
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Proyectos <span className="text-gradient">destacados</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
