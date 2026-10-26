import ThemeToggle from "@/app/components/ThemeToggle";
import ContactForm from "@/app/components/ContactForm";

const SKILLS = [
  {
    category: "Languages",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    items: ["C/C++", "Python", "Java", "TypeScript/JavaScript", "SQL"]
  },
  {
    category: "Embedded & Real-Time",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    items: ["FreeRTOS", "Arduino Due (ARM Cortex-M3)", "Raspberry Pi", "ADC / PWM / GPIO", "Multithreading & Concurrency"]
  },
  {
    category: "Backend & Data",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    items: ["REST APIs", "Flask", "Firebase", "UDP Sockets", "PyTorch"]
  },
  {
    category: "Tools & Frontend",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 1.1.9 2 2 2h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2zm0 0h16M12 5v14" />
      </svg>
    ),
    items: ["Git", "Linux", "Docker", "JUnit", "Next.js / React"]
  }
];

const EDUCATION = [
  {
    institution: "Carleton University",
    degree: "Bachelor of Engineering, Computer Systems Engineering",
    period: "2018 — 2026",
    description: "Focused on embedded and real-time systems. Capstone: predicting brain-tumour growth from MRI scans with deep learning.",
    relevantCourses: [
      "Real-Time Concurrent Systems",
      "Operating Systems",
      "Computer Systems Architecture",
      "Computer Systems Design Lab",
      "Communication Theory",
      "Web Development",
      "AI in Engineering"
    ]
  }
];

type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  // Leave link out for private course repositories.
  link?: string;
};

const PROJECTS: Project[] = [
  {
    id: "snowplow",
    category: "Embedded",
    title: "Autonomous Snowplow Robot",
    description: "FreeRTOS firmware on an Arduino Due with four prioritized tasks for motor control, line sensing, ultrasonic sensing and a 50 Hz decision state machine. Integrated and filtered 9 sensors and drove 4 motors through a single motor-command queue.",
    tags: ["C++", "FreeRTOS", "ARM Cortex-M3"],
  },
  {
    id: "glioma",
    category: "AI & Data",
    title: "Glioma Growth Prediction (Capstone)",
    description: "Predicted brain-tumour growth from longitudinal MRI scans of 112 patients. Built a 3D U-Net in PyTorch (Dice 0.82) and compared it with ResNet-50, plus a PyQt desktop app to view slices and compare predictions.",
    tags: ["Python", "PyTorch", "PyQt"],
  },
  {
    id: "elevator",
    category: "Concurrency",
    title: "Real-Time Elevator Control System",
    description: "Distributed Java system where a scheduler, floor subsystem and elevator subsystem run as separate processes and talk over UDP. Each elevator runs in its own thread as a state machine, with fault injection and recovery.",
    tags: ["Java", "Multithreading", "UDP"],
  },
  {
    id: "pixelpet",
    category: "IoT",
    title: "Pixel Pet",
    description: "Raspberry Pi virtual-pet device for kids, with a parent iOS app. Wrote the shared Firebase data module used by every device node and the Twilio SMS alerts; full marks on the final demo.",
    tags: ["Python", "Raspberry Pi", "Firebase"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans transition-colors duration-300">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
        <nav className="flex justify-between items-center p-6 max-w-5xl mx-auto">
          <div className="font-bold text-xl tracking-tight">CHANWOO OH</div>
          <div className="flex items-center space-x-8 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Skills</a>
            <a href="#education" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Education</a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main id="about" className="scroll-mt-20 max-w-5xl mx-auto px-6 pt-20 pb-32 transition-colors duration-300">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-extrabold tracking-tight mb-6">
            Embedded &amp; Backend Engineer <br />
            <span className="text-blue-600">From firmware to the cloud.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
            Computer Systems Engineering graduate (Carleton University, 2026). I build real-time firmware in C++ and FreeRTOS, and backend and data systems in Python and Java. Open to roles in Ottawa and the Toronto area.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition">
              View My Work
            </a>
            <a href="https://github.com/digson" target="_blank" rel="noopener noreferrer" className="border border-slate-200 dark:border-slate-800 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 dark:hover:bg-slate-900 transition">
              GitHub Profile
            </a>
          </div>
        </div>
      </main>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-20 py-24 bg-slate-50/50 dark:bg-slate-900/20 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Technical Skills</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-2">What I have used in real projects, from microcontrollers to backend services.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {SKILLS.map((skillGroup, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 mb-6 text-blue-600 dark:text-blue-400">
                  {skillGroup.icon}
                  <h3 className="text-sm font-bold uppercase tracking-widest">{skillGroup.category}</h3>
                </div>
                <ul className="space-y-4">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center text-slate-700 dark:text-slate-300 font-medium group cursor-default">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 mr-3 transition-transform group-hover:scale-150 group-hover:bg-blue-500"></span>
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
      <section id="education" className="scroll-mt-20 py-24 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
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
      <section id="projects" className="scroll-mt-20 bg-slate-50 dark:bg-slate-900/50 py-24 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-slate-800 dark:text-slate-100">Selected Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => {
              const body = (
                <>
                  <div className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                  {project.link ? (
                    <div className="text-sm font-bold text-slate-900 dark:text-slate-100 underline underline-offset-4 decoration-slate-300 group-hover:decoration-blue-600 transition-all">
                      View Repository →
                    </div>
                  ) : (
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      Team course project · code available on request
                    </div>
                  )}
                </>
              );
              const cardClass = "group bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all duration-300 block";
              return project.link ? (
                <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className={`${cardClass} hover:scale-[1.02]`}>
                  {body}
                </a>
              ) : (
                <div key={project.id} className={cardClass}>
                  {body}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20 py-24 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-800 dark:text-slate-100">Let&apos;s Connect</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                I&apos;m open to embedded, firmware and backend roles in Ottawa and the Toronto area,
                and I can start immediately (open work permit). Send a message here or reach me directly:
              </p>
              <div className="space-y-2 text-slate-700 dark:text-slate-300 font-medium">
                <a href="mailto:ochanwoo0615@gmail.com" className="block hover:text-blue-600 dark:hover:text-blue-400 transition">ochanwoo0615@gmail.com</a>
                <a href="https://www.linkedin.com/in/chanwoo-oh-eng/" target="_blank" rel="noopener noreferrer" className="block hover:text-blue-600 dark:hover:text-blue-400 transition">LinkedIn</a>
                <a href="https://github.com/digson" target="_blank" rel="noopener noreferrer" className="block hover:text-blue-600 dark:hover:text-blue-400 transition">GitHub</a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-12 text-center text-slate-400 text-sm">
        © 2026 Chanwoo Oh. Built with Next.js and TypeScript · <a href="https://github.com/digson/portfolio-website" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-blue-600">Source</a>
      </footer>
    </div>
  );
}