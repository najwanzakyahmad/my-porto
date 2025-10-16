import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Float, Html } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Code, Github, Linkedin, Mail, Send, Sparkles, MousePointerClick } from "lucide-react";

/**
 * React 3D Portfolio — single-file starter
 * - Tailwind CSS ready (uses utility classes)
 * - Framer Motion for entrance/hover animations
 * - @react-three/fiber + drei for lightweight 3D hero
 *
 * How to use in a Vite app:
 *   1) npm i @react-three/fiber @react-three/drei framer-motion lucide-react
 *   2) Ensure Tailwind is set up (or replace classes with your CSS)
 *   3) Replace the placeholder data in DATA below
 *   4) Export as default (already done) and mount in main.jsx
 */

const DATA = {
  name: "Najwan Zaky",
  role: "Fresh Graduate — Informatika",
  tagline:
    "Saya membangun aplikasi web yang cepat, bersih, dan berfokus pada pengalaman pengguna.",
  email: "najwan@example.com",
  socials: {
    github: "https://github.com/najwanzakyahmad",
    linkedin: "https://linkedin.com/in/your-linkedin",
  },
  skills: [
    "React",
    "TypeScript",
    "Vue",
    "Laravel",
    "Tailwind CSS",
    "Node.js",
    "MySQL",
    "REST API",
  ],
  projects: [
    {
      title: "WMS Dashboard",
      desc: "Dashboard admin untuk shuttle/travel: filter gudang, event calendar, dan HPP calculator.",
      tags: ["React", "Laravel", "MySQL", "FullCalendar"],
      link: "#",
    },
    {
      title: "Katana Tech Site",
      desc: "Landing page dan CMS ringan untuk company profile Katana Tech Solutions.",
      tags: ["Next.js", "Tailwind", "Markdown"],
      link: "#",
    },
    {
      title: "Akreditasi Helper",
      desc: "Aplikasi pendukung penyusunan laporan akreditasi: import dari Google Sheets & Drive.",
      tags: ["Vue", "Laravel", "Google API"],
      link: "#",
    },
  ],
  timeline: [
    {
      when: "2025",
      title: "Fresh Graduate — S1 Informatika",
      body: "Fokus pada web development: React/Vue, REST API, dan integrasi peta/Drive.",
    },
    {
      when: "2024",
      title: "Intern — Web Developer",
      body: "Membangun fitur role-based access, dashboard KPI, dan optimasi query.",
    },
  ],
};

function Nav() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full backdrop-blur bg-white/40 dark:bg-zinc-900/40 border-b border-zinc-200/60 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{DATA.name}</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-700 dark:text-zinc-300">
          <a href="#projects" className="hover:text-zinc-900 dark:hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-zinc-900 dark:hover:text-white">Skills</a>
          <a href="#about" className="hover:text-zinc-900 dark:hover:text-white">About</a>
          <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-2xl border border-zinc-300 dark:border-zinc-700 px-3 py-1.5 text-sm hover:shadow-sm"
        >
          <Mail className="w-4 h-4" /> Hire Me
        </a>
      </div>
    </header>
  );
}

function SpinningKnot() {
  const ref = useRef();
  return (
    <Float floatIntensity={1.2} rotationIntensity={0.6} speed={1.2}>
      <mesh ref={ref}>
        <torusKnotGeometry args={[1.1, 0.28, 256, 32]} />
        <meshStandardMaterial metalness={0.6} roughness={0.2} />
      </mesh>
    </Float>
  );
}

function ThreeScene() {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl ring-1 ring-zinc-200 dark:ring-zinc-800">
      <Canvas camera={{ position: [0, 0, 4], fov: 55 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.1} />
        <Stars radius={60} depth={40} count={4000} factor={3} fade />
        <SpinningKnot />
        <OrbitControls enablePan={false} minDistance={3} maxDistance={6} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-zinc-950" />
      <div className="absolute left-0 right-0 -bottom-3 flex justify-center">
        <MousePointerClick className="h-6 w-6 text-zinc-400" />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-28 md:pt-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white"
            >
              {DATA.role}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-zinc-600 dark:text-zinc-300"
            >
              {DATA.tagline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <a
                href={DATA.socials.github}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-700 px-3 py-2 text-sm hover:shadow-sm"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={DATA.socials.linkedin}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-700 px-3 py-2 text-sm hover:shadow-sm"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-3 py-2 text-sm hover:opacity-90"
              >
                <Sparkles className="h-4 w-4" /> Lihat Projects
              </a>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <ThreeScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p }) {
  return (
    <motion.a
      href={p.link}
      whileHover={{ y: -4 }}
      className="group block rounded-3xl border border-zinc-200 dark:border-zinc-800 p-5 hover:shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{p.title}</h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{p.desc}</p>
        </div>
        <Code className="h-5 w-5 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200" />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="text-xs rounded-full border border-zinc-300 dark:border-zinc-700 px-2 py-0.5 text-zinc-600 dark:text-zinc-300">
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white">Featured Projects</h2>
        <a href="#contact" className="text-sm text-zinc-600 dark:text-zinc-300 hover:underline">Butuh proyek serupa?</a>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {DATA.projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white">Skills</h2>
      <p className="mt-2 text-zinc-600 dark:text-zinc-300">Teknologi yang sering saya gunakan.</p>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {DATA.skills.map((s) => (
          <div key={s} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white">About & Timeline</h2>
      <div className="mt-6 space-y-5">
        {DATA.timeline.map((t) => (
          <div key={t.title} className="flex gap-4">
            <div className="mt-1 w-20 shrink-0 text-xs font-medium text-zinc-500">{t.when}</div>
            <div className="flex-1 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4">
              <div className="font-medium text-zinc-900 dark:text-zinc-100">{t.title}</div>
              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{t.body}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white">Contact</h2>
      <p className="mt-2 text-zinc-600 dark:text-zinc-300">Terbuka untuk full-time/contract. Yuk ngobrol!</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="mt-6 grid gap-4"
      >
        <input className="rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/60 px-4 py-3" placeholder="Nama" required />
        <input className="rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/60 px-4 py-3" type="email" placeholder="Email" required />
        <textarea className="min-h-[120px] rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/60 px-4 py-3" placeholder="Pesan" required />
        <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-5 py-3 text-sm">
          <Send className="h-4 w-4" /> Kirim
        </button>
        {sent && (
          <div className="text-sm text-emerald-600 dark:text-emerald-400">Pesan terkirim (dummy). Hubungi langsung: <a className="underline" href={`mailto:${DATA.email}`}>{DATA.email}</a></div>
        )}
      </form>
    </section>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-dvh bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8">
        <div className="mx-auto max-w-6xl px-4 flex flex-col items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-4">
            <a href={DATA.socials.github} className="hover:underline inline-flex items-center gap-2"><Github className="h-4 w-4" /> GitHub</a>
            <a href={DATA.socials.linkedin} className="hover:underline inline-flex items-center gap-2"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a href={`mailto:${DATA.email}`} className="hover:underline inline-flex items-center gap-2"><Mail className="h-4 w-4" /> Email</a>
          </div>
          <div>© {new Date().getFullYear()} {DATA.name}. Dibuat dengan React • R3F • Tailwind.</div>
        </div>
      </footer>
    </div>
  );
}
