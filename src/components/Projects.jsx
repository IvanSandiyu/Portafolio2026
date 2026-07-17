import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Sistema Panaderia",
      tech: "C# / .NET | Blazor | SQL Server",
      description: "Sistema de gestión para panaderías,  El objetivo del proyecto es centralizar la administración del negocio permitiendo gestionar productos, ventas, stock y métricas operativas desde una única aplicación web.",
      link: "https://github.com/IvanSandiyu/SistemaPanaderia"
    },
    {
      title: "Mision Espacial",
      tech: "Java Spring boot | PostgreSQL | Postman",
      description: "API desarrollada en Java para presentar como 'trabajo final' en la capacitación de una empresa",
      link: "https://github.com/IvanSandiyu/MisionEspacial"
    },
    {
      title: "CRUD con Python",
      tech: "Python | JS | React",
      description: "Estructura limpia para el procesamiento de peticiones locales, manipulación de datos y automatización simple.",
      link: "https://github.com/IvanSandiyu/CRUD"
    },
    {
      title: "Sistema de pedidos",
      tech: "C# | WinForms",
      description: "Sistema que se encarga de crear clientes, productos y pedidos, permitiendo la gestión de ventas y el seguimiento de pedidos en una interfaz de escritorio.",
      link: "https://github.com/IvanSandiyu/CRUD-CSHARP"
    },
    {
      title: "Otros Repositorios",
      tech: "Git / GitHub",
      description: "Explora mi perfil de GitHub para ver otras utilidades, scripts e integraciones en las que he colaborado.",
      link: "https://github.com/IvanSandiyu"
    }
  ];

  return (
    <section id="projects" className="border-t border-white/[0.06] bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">Portafolio</h2>
          <p className="mt-2 text-3xl font-bold text-white tracking-tight">Proyectos Destacados</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
           <a
           key={idx}
           href={project.link}
           target="_blank"
           rel="noopener noreferrer"
           className={`
             group relative block overflow-hidden rounded-2xl
             border border-white/[0.06] bg-white/[0.02] p-8
             hover:border-white/20 transition-all duration-300
             ${idx === projects.length - 1 ? "md:col-span-2 md:max-w-xl md:mx-auto w-full" : ""}
           `}
         >
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-400">
                  {project.tech}
                </span>
                <ExternalLink size={16} className="text-slate-500 group-hover:text-white transition-colors" />
              </div>

              <h3 className="mt-4 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                {project.description}
              </p>
            </a>
            
          ))}
        </div>
      </div>
    </section>
  );
}
