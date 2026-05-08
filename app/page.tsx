import Image from "next/image";
import ThemeToggle from "@/app/components/ThemeToggle";

const PROJECTS = [
  {
    id: "glioma",
    category: "Systems & AI",
    title: "Glioma Growth Visualization",
    description: "A real-time visualization platform for cancer cell growth. Built with a Python/Flask backend and an interactive frontend.",
    tags: ["Python", "React", "Firebase"],
    link: "https://github.com/patliao/SYSC4907-Glioma-Growth-Visualization",
    linkText: "View Repository →"
  },
  {
    id: "portfolio",
    category: "Full-Stack",
    title: "Professional Portfolio",
    description: "High-performance portfolio built to showcase TypeScript and Next.js 15 capabilities for cloud-infrastructure roles.",
    tags: ["Next.js 15", "TypeScript", "Tailwind"],
    link: "#",
    linkText: "Documentation →"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans transition-colors duration-300">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-5xl mx-auto">
        <div className="font-bold text-xl tracking-tight">CHANWOO OH</div>
        <div className="flex items-center space-x-8 text-sm font-medium text-slate-600 dark:text-slate-400">
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</a>
          <a href="mailto:your-email@example.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 pt-20 pb-32">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-extrabold tracking-tight mb-6">
            Systems Engineer <br />
            <span className="text-blue-600">Building for the Cloud.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
            I’m a Computer Systems Engineering graduate from **Carleton University**. 
            I specialize in bridging the gap between low-level architecture and 
            modern full-stack applications.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition">
              View My Work
            </a>
            <a href="https://github.com/digson" target="_blank" className="border border-slate-200 dark:border-slate-800 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 dark:hover:bg-slate-900 transition">
              GitHub Profile
            </a>
          </div>
        </div>
      </main>

      {/* Projects Section */}
      <section id="projects" className="bg-slate-50 dark:bg-slate-900/50 py-24 transition-colors">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-slate-800 dark:text-slate-100">Selected Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition">
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">{project.description}</p>
                <div className="flex gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-xs font-medium">{tag}</span>
                  ))}
                </div>
                <a href={project.link} target={project.link.startsWith('http') ? "_blank" : undefined} className="text-sm font-bold text-slate-900 underline underline-offset-4">
                  {project.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-12 text-center text-slate-400 text-sm">
        © 2026 Chanwoo Oh. Built with TypeScript and Engineering Logic.
      </footer>
    </div>
  );
}