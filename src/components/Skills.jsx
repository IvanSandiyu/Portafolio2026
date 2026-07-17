export default function Skills() {
    const technologies = [
      { name: "ASP.NET Core", category: "Backend" },
      { name: "C#", category: "Language" },
      { name: "Java", category: "Language" },
      { name: "JavaScript", category: "Frontend" },
      { name: "SQL Server", category: "Database" },
      { name: "Python", category: "Language" },
      { name: "Git", category: "Tool" },
      { name: "PostgreSQL", category: "Database" },
      { name: "React", category: "Frontend" }
    ];
  
    return (
      <section id="skills" className="border-t border-white/[0.06] bg-slate-950/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          
          <div className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">Tecnologías</h2>
            <p className="mt-2 text-3xl font-bold text-white tracking-tight">Mi Stack Técnico</p>
          </div>
  
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {technologies.map((tech) => (
              <div 
                key={tech.name} 
                className="flex flex-col justify-between rounded-xl border border-white/[0.05] bg-white/[0.01] p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.03]"
              >
                <span className="text-sm font-semibold text-white">{tech.name}</span>
                <span className="mt-2 text-[10px] uppercase tracking-wider text-slate-500 font-mono">{tech.category}</span>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }