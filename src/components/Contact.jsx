import { FaLinkedin, FaGithub } from "react-icons/fa";
import { LuFileSpreadsheet } from "react-icons/lu";
import { CiMail } from "react-icons/ci";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/[0.06] bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">Contacto</h2>
        <p className="mt-2 text-3xl font-bold text-white tracking-tight">Mi información de contacto</p>
        <p className="mx-auto mt-4 max-w-md text-slate-400 text-sm md:text-base leading-relaxed">
          Estoy disponible para propuestas de desarrollo de software, arquitectura técnica o integraciones full-stack.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a 
            href="https://www.linkedin.com/in/ivansandiyu/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/[0.06] hover:border-white/20"
          >
            <FaLinkedin size={24} />
            LinkedIn
          </a>

          <a 
            href="https://github.com/IvanSandiyu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/[0.06] hover:border-white/20"
          >
            <FaGithub size={24} />
            GitHub
          </a>

          <a 
            href="/Cv_IvanSandiyu.pdf" 
            download="Cv_IvanSandiyu.pdf"
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/[0.06] hover:border-white/20"
          >
            <LuFileSpreadsheet size={24} />
            Descargar CV
          </a>
          <a 
          href="mailto:isandiyu@gmail.com"
          className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/[0.06] hover:border-white/20"
          >
            <CiMail size={24} />
            isandiyu@gmail.com
</a>
        </div>

      </div>
    </section>
  );
}