import { Braces, Database } from "lucide-react";
import {
  SiAngular,
  SiDotnet,
  SiGit,
  SiJavascript,
  SiNuget,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiReact,
} from "react-icons/si";

const rows = [
  [
    { name: "ASP.NET Core", icon: SiDotnet, color: "#8b5cf6" },
    { name: "C#", icon: Braces, color: "#9d8bff" },
    { name: "React", icon: SiReact, color: "#61dafb" },
    { name: "SQL Server", icon: Database, color: "#cc2927" },
    { name: "Entity Framework", icon: SiDotnet, color: "#8b5cf6" },
    { name: "Git", icon: SiGit, color: "#f05032" },
  ],
  [
    { name: "Angular", icon: SiAngular, color: "#dd0031" },
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
    { name: "Python", icon: SiPython, color: "#3776ab" },
    { name: "Java", icon: SiOpenjdk, color: "#e76f00" },
    { name: "NuGet", icon: SiNuget, color: "#004880" },
  ],
];

function Chip({ tech }) {
  const Icon = tech.icon;

  return (
    <div className="group flex shrink-0 cursor-default items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-6 py-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]">
      <Icon
        size={22}
        style={{ color: tech.color }}
        className="transition-transform duration-300 group-hover:scale-110"
      />
      <span className="whitespace-nowrap text-sm font-medium text-slate-300">{tech.name}</span>
    </div>
  );
}

export default function Technologies() {
  return (
    <section id="skills" className="relative overflow-hidden border-y border-white/[0.06] py-20">
      <div className="mx-auto mb-14 max-w-7xl px-6 text-center">
        <p className="mb-3 font-mono text-sm text-dotnet-light">
          <span className="text-slate-500">//</span> stack
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Herramientas y frameworks
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-400">
          El ecosistema que domino para llevar proyectos de la idea al deploy.
        </p>
      </div>

      <div className="relative space-y-6">
        {rows.map((row, r) => (
          <div key={r} className="mask-fade-x overflow-hidden">
            <div
              className={`marquee flex w-max items-center gap-4 px-4 ${r === 1 ? "marquee-reverse" : ""}`}
              style={{ "--marquee-duration": r === 0 ? "32s" : "38s" }}
            >
              {[...row, ...row].map((tech, i) => (
                <Chip key={`${tech.name}-${i}`} tech={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
