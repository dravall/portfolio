"use client";

import Image from "next/image";
import { Github, Linkedin, Bot, User, QrCode, X, Mail } from "lucide-react";
import { ExperienceItem } from "./components/ExperienceItem";
import { TechStack } from "./components/TechStack";
import { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import { ThemeToggle } from "./components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

import { getMarkdownContent } from "./data/content";

export default function Home() {
  const [time, setTime] = useState<string>("");
  const [showQR, setShowQR] = useState(false);
  const [mode, setMode] = useState<"human" | "agent">("human");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-CA", {
          timeZone: "America/Toronto",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const markdownContent = getMarkdownContent(time);

  return (
    <div className={`relative flex min-h-screen flex-col items-center bg-white dark:bg-black px-3 pt-16 text-black dark:text-white selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black pb-32 sm:px-4 sm:pt-24 sm:pb-40 overflow-x-hidden transition-colors duration-300`}>

      {/* Theme Toggle in Top Right */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <AnimatePresence mode="wait">
        {mode === "agent" ? (
          /* Agent Mode - Markdown View */
          <motion.main
            key="agent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex w-full max-w-2xl flex-col items-start text-left px-4 sm:px-0"
          >
            <pre
              className="w-full whitespace-pre-wrap font-mono text-sm leading-relaxed text-black dark:text-gray-300 selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black antialiased"
              style={{ fontFamily: '"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Console", monospace' }}
            >
              {markdownContent}
            </pre>
          </motion.main>
        ) : (
          /* Human Mode - Original View */
          <motion.main
            key="human"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex w-full max-w-2xl flex-col items-center text-center"
          >
            {/* Profile Image */}
            <div className="relative mb-2 h-40 w-40 sm:h-56 sm:w-56 overflow-hidden">
              <Image
                src="/heroimage2.png"
                alt="Profile"
                fill
                className="object-cover object-top grayscale"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-black dark:via-black/60 backdrop-blur-[1px]" />
            </div>

            {/* Hero Text */}
            <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl">
              Devwrat Raval
            </h1>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-400 dark:text-gray-500 sm:text-sm">
              <span>Toronto, ON</span>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <div className="flex items-center gap-1.5">
                <span className="tabular-nums text-xs sm:text-sm">{time || "00:00:00"}</span>
                <span className="text-[10px] uppercase tracking-wider sm:text-xs">ET</span>
              </div>
            </div>

            <div className="w-full space-y-4 text-left text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg md:text-xl">
              <p>
                a full-stack developer and <a href="https://en.wikipedia.org/wiki/Product_design" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-black dark:hover:text-white transition-colors">product builder</a> with deep experience across engineering, product strategy, and user-centric design.
              </p>
              <p>
                a <a href="https://en.wikipedia.org/wiki/Polymath" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-black dark:hover:text-white transition-colors">polymath</a> who bridges technical architecture with business outcomes to create impactful, scalable solutions.
              </p>
            </div>

            {/* Experience Section */}
            <div className="mt-6 mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Experience
              </h2>
              <div className="space-y-12">
                <ExperienceItem
                  title="Span-EA"
                  role="Software Developer Intern · Toronto, ON · May–Aug 2025"
                  collapsible={true}
                >
                  <ul className="list-disc list-inside space-y-1.5 pl-1">
                    <li>Architected full-stack blog system using MERN stack, serving 2,000+ monthly users with 35% engagement increase</li>
                    <li>Engineered responsive React.js components with Tailwind CSS, achieving 100% mobile compatibility across devices</li>
                    <li>Optimized MongoDB schemas and indexing strategies, reducing page load times by 40% and improving user retention</li>
                    <li>Built RESTful APIs with Node.js/Express.js enabling real-time data sync for content management workflows</li>
                    <li>Collaborated in 4-person agile team using Scrum methodology, delivering features 25% faster than sprint baseline</li>
                    <li>Implemented testing suite with Jest and React Testing Library, achieving 85% code coverage across the codebase</li>
                  </ul>
                </ExperienceItem>
              </div>
            </div>

            {/* Projects Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Projects
              </h2>
              <div className="space-y-12">
                <ExperienceItem
                  title="PixelSpace — Real-Time Multiplayer Virtual World"
                  role="React 18, TypeScript, WebSocket, PostgreSQL, Prisma"
                  collapsible={true}
                >
                  <ul className="list-disc list-inside space-y-1.5 pl-1">
                    <li>Built a full-stack multiplayer 2D virtual world with WebSocket-based position sync supporting 50+ concurrent users across isolated spaces with server-side boundary validation to prevent state-manipulation exploits</li>
                    <li>Architected Turborepo monorepo with 3 deployable apps (React frontend, Express REST API, WebSocket server) sharing a unified Prisma/PostgreSQL data layer for zero-duplication schema management</li>
                    <li>Designed a RoomManager singleton pattern to isolate and broadcast movement events per space, reducing unnecessary network traffic by 70% compared to global broadcast approach</li>
                    <li>Developed a Canvas-based React renderer with keyboard-controlled navigation and real-time position updates via JWT-authenticated WebSocket connections with role-based access (Admin/User)</li>
                  </ul>
                </ExperienceItem>

                <ExperienceItem
                  title="NexusAI — Unified Multi-Provider LLM API Gateway"
                  role="Elysia.js, Bun, React 19, PostgreSQL, Prisma"
                  collapsible={true}
                >
                  <ul className="list-disc list-inside space-y-1.5 pl-1">
                    <li>Engineered a unified LLM gateway routing requests to OpenAI, Anthropic, and Gemini via a single OpenAI-compatible endpoint, reducing multi-provider integration effort for consumers to one API key</li>
                    <li>Designed a pluggable provider abstraction layer where adding a new LLM requires only a single adapter file — no changes to routing, billing, or consumer-facing API contracts</li>
                    <li>Implemented credit-based billing with real-time token counting, data-driven per-model pricing, and atomic credit deduction ensuring zero revenue leakage at 100+ req/min</li>
                    <li>Built React 19 dashboard with shadcn/ui for API key lifecycle management, per-request cost analytics, and full conversation history logging with token breakdowns</li>
                  </ul>
                </ExperienceItem>

                <ExperienceItem
                  title="CodeForge — Cloud-Native Browser IDE"
                  role="React 18, TypeScript, Kubernetes, Socket.io, AWS S3"
                  collapsible={true}
                >
                  <ul className="list-disc list-inside space-y-1.5 pl-1">
                    <li>Built a browser-based IDE provisioning isolated Kubernetes containers per user with dynamic Deployment, Service, and Ingress creation enabling unique subdomain routing per session</li>
                    <li>Integrated Monaco Editor for professional-grade syntax highlighting and XTerm.js with node-pty for full interactive terminal emulation, streaming shell I/O via Socket.io in under 50ms latency</li>
                    <li>Engineered a Socket.io-based file system API for real-time directory traversal and file content streaming with client-side tree caching and deduplication to minimize redundant network calls</li>
                    <li>Designed AWS S3 template system for multi-language project scaffolding (Node.js, Python, Go) auto-cloned on pod initialization, reducing session setup time to under 3 seconds</li>
                  </ul>
                </ExperienceItem>
              </div>
            </div>

            {/* Education Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Education
              </h2>
              <div className="space-y-12">
                <ExperienceItem
                  title="Humber College"
                  role="Jan 2024 – Aug 2025"
                >
                  <p>Information Technology Solutions (Computer Science)</p>
                  <p className="text-gray-400 dark:text-gray-500">Toronto, ON</p>
                </ExperienceItem>
                <ExperienceItem
                  title="The Maharaja Sayajirao University of Baroda"
                  role="Sep 2020 – May 2023"
                >
                  <p>Bachelor of Computer Application (Computer Science)</p>
                  <p className="text-gray-400 dark:text-gray-500">Vadodara, India</p>
                </ExperienceItem>
              </div>
            </div>

            {/* Tech Stack Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Tech Stack
              </h2>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                a generalist who can build with anything, but here&apos;s the core stack i&apos;ve spent the most time with:
              </p>
              <TechStack />
            </div>

            {/* Certifications Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Certifications
              </h2>
              <div className="space-y-3">
                {[
                  "What Is Generative AI",
                  "Prompt Engineering: How to Talk to the AIs",
                  "Generative AI vs. Traditional AI",
                  "Prompting ChatGPT with Multimodal Techniques",
                  "Pair Programming with AI",
                ].map((cert) => (
                  <div key={cert} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-600 shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why I Build Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Why I Build
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                <p>
                  a lot of my best thinking happens away from the screen.
                  whether i&apos;m walking, observing how people use everyday apps, or just reflecting, i start noticing what works and what doesn&apos;t.
                  that curiosity sticks with me and shapes how i approach problems.
                  it helps me come back with clearer, more thoughtful solutions.
                </p>
                <p>
                  when i build, i focus on more than just making things work.
                  i try to understand why something matters and who it&apos;s for.
                  i believe great products come from combining technical depth with real-world perspective.
                  that&apos;s what i aim to bring into everything i create.
                </p>
              </div>
            </div>

            {/* Get in Touch Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400">
                Get in Touch
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  connect with me on{" "}
                  <a
                    href="https://linkedin.com/in/devwratraval"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    linkedin
                  </a>{" "}
                  or shoot an{" "}
                  <a
                    href="mailto:devwratraval.dev@gmail.com"
                    className="text-black dark:text-white underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    email
                  </a>
                </p>
              </div>
            </div>

          </motion.main>
        )}
      </AnimatePresence>

      {/* Glass Island Navbar */}
      <nav className="fixed bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-gray-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/80 px-4 py-3 shadow-sm backdrop-blur-md transition-all hover:bg-white/90 dark:hover:bg-zinc-900 sm:gap-6 sm:px-6">
        {/* Mode Toggle Switch */}
        <div className="flex items-center">
          <button
            onClick={() => setMode(mode === "human" ? "agent" : "human")}
            className="group relative flex h-7 w-12 cursor-pointer rounded-full bg-gray-200 dark:bg-zinc-700 p-1 transition-colors duration-200 ease-in-out hover:bg-gray-300 dark:hover:bg-zinc-600 focus:outline-none"
            role="switch"
            aria-checked={mode === "agent"}
            title={`Switch to ${mode === "human" ? "agent" : "human"} mode`}
          >
            <div
              className={`flex h-5 w-5 transform items-center justify-center rounded-full bg-white dark:bg-white shadow-sm transition duration-200 ease-in-out ${mode === "agent" ? "translate-x-5" : "translate-x-0"
                }`}
            >
              {mode === "human" ? (
                <User className="h-3 w-3 text-black" />
              ) : (
                <Bot className="h-3 w-3 text-black" />
              )}
            </div>
          </button>
        </div>
        <button
          onClick={() => setShowQR(true)}
          className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
          aria-label="Show QR Code"
        >
          <QrCode className="h-5 w-5" />
        </button>
        <div className="h-6 w-px bg-gray-200 dark:bg-zinc-700" />
        <a
          href="https://github.com/dravall"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://linkedin.com/in/devwratraval"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="mailto:devwratraval.dev@gmail.com"
          className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
        >
          <Mail className="h-5 w-5" />
        </a>
      </nav>

      {/* QR Code Modal */}
      {showQR && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/20 dark:bg-white/5 backdrop-blur-sm"
          onClick={() => setShowQR(false)}
        >
          <div
            className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQR(false)}
              className="absolute -right-3 -top-3 rounded-full bg-black dark:bg-white p-2 text-white dark:text-black transition-transform hover:scale-110"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="rounded-lg bg-white p-2">
              <QRCodeSVG
                value="https://linkedin.com/in/devwratraval"
                size={200}
                level="H"
                includeMargin={false}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
