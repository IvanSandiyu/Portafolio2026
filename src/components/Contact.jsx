import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/[0.06] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-[-120px] left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-dotnet/15 blur-[140px]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <p className="mb-3 font-mono text-sm text-dotnet-light">
            <span className="text-slate-500">//</span> contacto
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Mi informacion de  <span className="text-gradient">contacto</span>
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-slate-400">
            Estoy disponible para propuestas de desarrollo de software, arquitectura técnica o
            integraciones full-stack.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="mailto:isandiyu@gmail.com"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-dotnet to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-10px_rgba(110,75,255,0.8)] transition-all hover:brightness-110"
            >
              Enviar email
            </a>
            <a
              href="https://www.linkedin.com/in/ivansandiyu/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/25 hover:bg-white/[0.06]"
            >
              <FaLinkedin size={18} className="text-dotnet-light" />
              LinkedIn
            </a>
            <a
              href="https://github.com/IvanSandiyu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/25 hover:bg-white/[0.06]"
            >
              <FaGithub size={18} className="text-dotnet-light" />
              GitHub
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a18]/80 backdrop-blur"
        >
          <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="font-mono text-[11px] text-slate-500">Disponibilidad.cs</span>
          </div>

          <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-7 text-slate-300">
            <code>
              <span className="text-violet-400">public class</span>{" "}
              <span className="text-cyan-300">Disponibilidad</span>
              {"\n"}
              {"{"}
              {"\n"}
              {"  "}
              <span className="text-violet-400">public string</span> Email{" "}
              <span className="text-slate-500">=</span>{" "}
              <a
                href="mailto:isandiyu@gmail.com"
                className="text-amber-200 underline decoration-dotted underline-offset-4 hover:text-amber-100"
              >
                "isandiyu@gmail.com"
              </a>
              ;{"\n"}
              {"  "}
              <span className="text-violet-400">public bool</span> Disponible{" "}
              <span className="text-slate-500">=</span> <span className="text-cyan-300">true</span>;
              {"\n"}
              {/* {"  "}
              <span className="text-violet-400">public string</span> Response{" "}
              <span className="text-slate-500">=</span>{" "}
              <span className="text-amber-200">"¡Hablemos de tu proyecto!"</span>;
              {"\n"} */}
              {"}"}
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
