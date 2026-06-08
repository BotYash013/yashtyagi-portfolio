import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Linkedin,
  Github,
  Download,
  Plus,
  Minus,
  Mail,
} from "lucide-react";
import cloudsBg from "@/assets/clouds-bg.jpg";
import projectDarkStore from "@/assets/dark-store-dashboard.png";
import projectFutureProof from "@/assets/future-proof-ai.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yash Tyagi | Data Analyst & BI Developer" },
      {
        name: "description",
        content:
          "Portfolio of Yash Tyagi — fresher Data Analyst & Business Intelligence Developer specialising in Power BI, SQL and Python.",
      },
      { property: "og:title", content: "Yash Tyagi | Data Analyst & BI Developer" },
      {
        property: "og:description",
        content:
          "Turning raw data into decisions — Power BI, SQL and Python projects by Yash Tyagi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "tyagiy64@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/yash-tyagi-91845337a";
const GITHUB = "https://github.com/BotYash013";

const NAV = [
  { label: "Work", count: 2, href: "#projects" },
  { label: "Skills", count: 5, href: "#skills" },
  { label: "Experience", count: 1, href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const SKILLS: { category: string; items: string[] }[] = [
  {
    category: "BI & Visualization",
    items: ["Microsoft Power BI", "MS Excel", "Pivot Tables", "VLOOKUP", "Charts"],
  },
  {
    category: "Database & Querying",
    items: ["SQL", "MySQL", "JOIN", "GROUP BY", "Subqueries", "Aggregates"],
  },
  { category: "Programming", items: ["Python", "pandas", "NumPy", "Data Wrangling"] },
  { category: "Productivity", items: ["MS Office Suite", "Google Sheets", "PowerPoint"] },
  {
    category: "Soft Skills",
    items: ["Analytical Thinking", "Attention to Detail", "Problem Solving", "Communication"],
  },
];

type Project = {
  title: string;
  period: string;
  type: "BI Dashboard" | "Data Analysis" | "AI-Powered BI Dashboard" | "AI – Career Intelligence Platform";
  description: string;
  tags: string[];
  image: string;
  link?: string;
};

const PROJECTS: Project[] = [
  {
    title: "AI-Powered Dark Store Demand Intelligence System",
    period: "Apr 2026 — May 2026",
    type: "AI-Powered BI Dashboard",
    description:
      "Analysed quick-commerce dark store operations using SQL and Power BI to surface demand patterns, stock availability issues and delivery inefficiencies, with AI-generated business recommendations.",
    tags: ["SQL", "MySQL", "Power BI", "Excel", "ChatGPT"],
    image: projectDarkStore,
    link: "https://github.com/BotYash013/AI-Powered-Dark-Store-Demand-Intelligence-System",
  },
  {
    title: "Future Proof AI – Career Intelligence Platform",
    period: "Apr 2026 — May 2026",
    type: "AI – Career Intelligence Platform",
    description:
      "FutureProof AI is a data analytics project that identifies AI-proof careers, automation risks, salary trends and future job opportunities using SQL and Power BI.",
    tags: ["Power BI", "SQL", "Excel", "GitHub"],
    image: projectFutureProof,
    link: "https://github.com/BotYash013/Future-Proof-AI-Career-Intelligence-Platform",
  },
];

const SERVICES = [
  {
    title: "Data Analysis & Reporting",
    body: "Cleaning, analysing and visualising datasets to extract business insights using Python and Excel.",
  },
  {
    title: "Power BI Dashboards",
    body: "Building interactive, end-to-end BI dashboards connected to SQL databases for real-time decision-making.",
  },
  {
    title: "SQL Data Querying",
    body: "Writing optimised queries for data extraction, aggregation, and filtering across relational databases.",
  },
  {
    title: "Presentation & Storytelling",
    body: "Translating analysis into clean, stakeholder-ready reports and presentations.",
  },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background clouds */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-60"
        style={{
          backgroundImage: `url(${cloudsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 20% 0%, rgba(255,255,255,0.6), transparent), linear-gradient(180deg, #f2f2f2 0%, #ebebeb 100%)",
          mixBlendMode: "multiply",
        }}
      />

      <Nav />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* -------------------- NAV -------------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-white/60 border-b border-black/5" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="pill">
          <span className="green-dot" />
          <span>Open to Work</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 rounded-full bg-white/70 border border-black/5 px-2 py-1">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="px-4 py-1.5 text-sm rounded-full hover:bg-black/5 transition-colors flex items-center gap-1.5"
            >
              <span>{n.label}</span>
              {n.count != null && (
                <span className="font-mono text-[11px] text-[color:var(--color-ink-soft)]">
                  [{n.count}]
                </span>
              )}
            </a>
          ))}
        </nav>

        <a href={`mailto:${EMAIL}`} className="pill pill-dark">
          Hire Me <ArrowUpRight className="h-4 w-4" />
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden pill"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm rounded-lg hover:bg-black/5"
              >
                {n.label}{" "}
                {n.count != null && (
                  <span className="font-mono text-xs text-[color:var(--color-ink-soft)]">
                    [{n.count}]
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  return (
    <section id="hero" className="pt-10 pb-20 sm:pt-16">
      <div className="card-soft p-6 sm:p-10 lg:p-14 relative overflow-hidden">
        <div className="relative">
          <h1 className="font-display leading-[0.85] text-center tracking-tight text-[clamp(3.5rem,13vw,11rem)]">
            <span
              style={{
                WebkitTextStroke: "1.5px #0d0d0d",
                color: "transparent",
              }}
            >
              YASH
            </span>
            <span className="ml-3 sm:ml-6">TYAGI</span>
          </h1>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-2">
            <div className="font-heading text-2xl sm:text-3xl font-bold">
              Aspiring Data Analyst
            </div>
            <p className="mt-3 max-w-xl text-[color:var(--color-ink-soft)] text-base sm:text-lg">
              Turning raw data into decisions. Fresher with a passion for insight —
              Power BI, SQL and Python.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="pill pill-dark">
                Let's collaborate <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/Yash_Tyagi_Resume.pdf"
                download
                className="pill"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
            </div>
          </div>

          <div className="flex lg:flex-col gap-3 lg:items-end">
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="pill">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="pill">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href={`mailto:${EMAIL}`} className="pill">
              <Mail className="h-4 w-4" /> Gmail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- ABOUT -------------------- */
function About() {
  return (
    <section id="about" className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="section-label">/ABOUT</div>
        <div className="md:col-span-2 space-y-4 text-lg text-[color:var(--color-ink)]">
          <p>
            I'm a final-year B.Tech student in Electronics & Communication Engineering
            at <strong>ABES Engineering College, Ghaziabad</strong> (CGPA 6.9/10),
            graduating in 2026.
          </p>
          <p className="text-[color:var(--color-ink-soft)]">
            I'm passionate about converting complex datasets into clear, actionable
            business insights using Power BI, SQL and Python — and I'm currently open
            to junior Data Analyst and BI Developer roles.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------- SKILLS -------------------- */
function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="flex items-end justify-between mb-10">
        <h2 className="section-label">/SKILLS</h2>
        <span className="font-mono text-sm text-[color:var(--color-ink-soft)]">
          5 categories
        </span>
      </div>

      <div className="card-soft p-6 sm:p-10 divide-y divide-black/5">
        {SKILLS.map((s) => (
          <div
            key={s.category}
            className="py-5 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-4 gap-4 items-start"
          >
            <div className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-ink-soft)]">
              {s.category}
            </div>
            <div className="md:col-span-3 flex flex-wrap gap-2">
              {s.items.map((i) => (
                <span key={i} className="pill-tag">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- PROJECTS -------------------- */
function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="card-soft p-6 sm:p-10 relative overflow-hidden">
        <div className="relative">
          <span className="ghost-text" style={{ top: "-1rem" }}>
            PORTFOLIO
          </span>
          <h2 className="section-label relative text-center">/SELECTED WORK</h2>
        </div>

        <div className="mt-10 flex justify-end">
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="pill"
          >
            View All Work <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl overflow-hidden bg-white border border-black/5 hover:-translate-y-1 transition-transform"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--color-bg-dark)]">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 pill-tag bg-white/95">
                  {p.type}
                </span>
                <span className="absolute bottom-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-black opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
              <div className="p-5">
                <div className="font-mono text-xs text-[color:var(--color-ink-soft)]">
                  {p.period}
                </div>
                <h3 className="mt-1 text-lg font-semibold font-heading">{p.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-ink-soft)]">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="pill-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- EXPERIENCE -------------------- */
function Experience() {
  return (
    <section id="experience" className="py-16">
      <div
        className="relative overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-14 text-white"
        style={{ background: "var(--color-bg-dark)" }}
      >
        <span className="ghost-text ghost-text-dark" style={{ top: "-0.5rem" }}>
          EXPERIENCE
        </span>
        <div className="relative flex items-end justify-between mb-10">
          <h2 className="section-label">/EXPERIENCE</h2>
          <span className="font-mono text-sm text-white/60">1 year of learning</span>
        </div>

        <div className="relative">
          {[
            {
              org: "Forage — GenAI Powered Data Analytics Job Simulation",
              role: "Data Analytics Analyst (Virtual)",
              period: "2025",
              bullets: [
                "Exploratory data analysis & risk profiling",
                "Predicted delinquency using AI",
                "Business reporting and data storytelling for collections strategy",
                "Implementing an AI-driven collections strategy",
              ],
            },
          ].map((e) => (
            <ExperienceRow key={e.org} entry={e} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceRow({
  entry,
}: {
  entry: { org: string; role: string; period: string; bullets: string[] };
}) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-t border-white/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full py-6 flex items-start justify-between gap-6 text-left"
      >
        <div>
          <div className="text-lg sm:text-xl font-semibold">{entry.org}</div>
          <div className="text-white/60 text-sm mt-1">{entry.role}</div>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <span className="text-white/70 text-sm">{entry.period}</span>
          <span className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center">
            {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </span>
        </div>
      </button>
      {open && (
        <ul className="pb-6 pl-1 space-y-2 text-white/75 text-sm">
          {entry.bullets.map((b) => (
            <li key={b} className="flex gap-3">
              <span className="text-white/40">—</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* -------------------- SERVICES -------------------- */
function Services() {
  const [open, setOpen] = useState(0);
  return (
    <section id="services" className="py-16">
      <div className="flex items-end justify-between mb-10">
        <h2 className="section-label">/SERVICE</h2>
        <span className="font-mono text-sm text-[color:var(--color-ink-soft)]">
          {SERVICES.length} offerings
        </span>
      </div>
      <div className="space-y-3">
        {SERVICES.map((s, i) => {
          const isOpen = open === i;
          return (
            <button
              key={s.title}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className={`w-full text-left rounded-2xl transition-all ${
                isOpen
                  ? "bg-[color:var(--color-bg-dark)] text-white p-6 sm:p-8"
                  : "bg-white/70 border border-black/5 p-5 sm:p-6 hover:bg-white"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div
                  className={`font-heading font-bold ${
                    isOpen ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl uppercase"
                  }`}
                >
                  {s.title}
                </div>
                <span
                  className={`h-9 w-9 rounded-full flex items-center justify-center ${
                    isOpen ? "bg-white/10" : "bg-black/5"
                  }`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              {isOpen && (
                <p className="mt-3 max-w-2xl text-white/70 text-sm sm:text-base">
                  {s.body}
                </p>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}

/* -------------------- CONTACT -------------------- */
function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="card-soft px-6 py-16 sm:py-24 text-center">
        <span className="pill mx-auto">
          <span className="green-dot" /> Available for New Project
        </span>
        <h2 className="mt-6 font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95]">
          HAVE A PROJECT IN MIND?
        </h2>
        <p className="mt-5 mx-auto max-w-xl text-[color:var(--color-ink-soft)]">
          Together, we can turn your data into clarity. Let's collaborate to build
          something impactful.
        </p>
        <a href={`mailto:${EMAIL}`} className="pill pill-dark mt-8">
          <Mail className="h-4 w-4" /> Contact Me <ArrowUpRight className="h-4 w-4" />
        </a>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
          <span className="pill pill-dark">
            <span className="h-6 w-6 rounded-full bg-white text-black flex items-center justify-center text-[11px] font-bold">
              YT
            </span>
            Yash Tyagi
          </span>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="pill">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href={GITHUB} target="_blank" rel="noreferrer" className="pill">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href={`mailto:${EMAIL}`} className="pill">
            <Mail className="h-4 w-4" /> Email
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  return (
    <footer className="border-t border-black/5 py-8 text-center text-sm text-[color:var(--color-ink-soft)]">
      © {new Date().getFullYear()} Yash Tyagi · Data Analyst & BI Developer
    </footer>
  );
}
