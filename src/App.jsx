import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Techonologies from "./components/Technologies";
import Projects from "./components/Projects";
import Experience from "./components/Expirience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Experience/>
      <Techonologies/>
      <Projects/>
      <Contact/>
    </div>
  );
}