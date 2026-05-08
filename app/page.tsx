import Image from "next/image";
import ThemeToggle from "@/app/components/ThemeToggle";

const SKILLS = [
  {
    category: "Programming Language",
    items: ["C/C++", "Java", "Python", "JavaScript/TypeScript", "MySQL/PostgresSQL"]
  },
  {
    category: "Systems & Low-Level",
    items: ["Assembly (ARM/x86)", "RTOS", "Embedded Systems", "Kernel Programming"]
  },
  {
    category: "Cloud & Infrastructure",
    items: ["Linux (Ubuntu)", "Docker", "Git (Branching, PRs, Merge Conflict Resolution)", "Firebase", "Network Protocols (TCP/IP)"]
  },
  {
    category: "Full-Stack & Logic",
    items: ["TypeScript", "Next.js", "Python", "React", "RESTful APIs"]
  }
];

const EDUCATION = [
  {
    institution: "Carleton University",
    degree: "Bachelor of Engineering, Computer Systems Engineering",
    period: "2018 — 2026",
    description: "Focused on embedded systems, real-time operating systems, and network architecture. Completed Capstone on Glioma growth visualization.",
    relevantCourses: [
      "Operating Systems",
      "Real-Time Systems",
      "Embedded Systems",
      "Computer Architecture",
      "Computer Networks",
      "Compilers"
    ]
  }
];

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
    link: "https://github.com/digson/portfolio-website",
    linkText: "View Repository →"
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
          <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Skills</a>
          <a href="#education" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Education</a>
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
            Systems Engineer specialized in developing high-performance applications and real-time data visualizations
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

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-50/50 dark:bg-slate-900/20 border-t border-slate-100 dark:border-slate-800 transition-colors">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-slate-800 dark:text-slate-100">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {SKILLS.map((skillGroup, index) => (
              <div key={index}>
                <h3 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-6">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-4">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center text-slate-700 dark:text-slate-300 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 border-t border-slate-100 dark:border-slate-800 transition-colors">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-slate-800 dark:text-slate-100">Education</h2>
          <div className="space-y-12">
            {EDUCATION.map((edu, index) => (
              <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">{edu.institution}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.degree}</p>
                  <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">{edu.description}</p>
                  {edu.relevantCourses && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {edu.relevantCourses.map((course) => (
                        <span key={course} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded">
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="text-slate-500 dark:text-slate-500 font-mono text-sm">
                  {edu.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-slate-50 dark:bg-slate-900/50 py-24 transition-colors">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-slate-800 dark:text-slate-100">Selected Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <a 
                key={project.id} 
                href={project.link} 
                target={project.link.startsWith('http') ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md hover:scale-[1.02] transition-all duration-300 block"
              >
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">{project.description}</p>
                <div className="flex gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-xs font-medium">{tag}</span>
                  ))}
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-slate-100 underline underline-offset-4 decoration-slate-300 group-hover:decoration-blue-600 transition-all">
                  {project.linkText}
                </div>
              </a>
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