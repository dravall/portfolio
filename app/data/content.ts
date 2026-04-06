export const getMarkdownContent = (time: string) => `# Devwrat Raval
devwrat.raval • noun • ${time || "00:00:00"} ET

## About

A full-stack developer with expertise in the MERN stack, TypeScript, and cloud technologies. Passionate about building scalable web applications, clean RESTful APIs, and shipping quality software.

Based in Toronto, ON — open to opportunities.

## Experience

### Span-EA
**Software Developer Intern, Toronto, ON**
*May 2025 – Aug. 2025*

- Architected full-stack blog system using MERN stack, serving 2,000+ monthly users with 35% engagement increase
- Engineered responsive React.js components with Tailwind CSS, achieving 100% mobile compatibility across devices
- Optimized MongoDB schemas and indexing strategies, reducing page load times by 40% and improving user retention
- Built RESTful APIs with Node.js/Express.js enabling real-time data sync for content management workflows
- Collaborated in 4-person agile team using Scrum methodology, delivering features 25% faster than sprint baseline
- Implemented testing suite with Jest and React Testing Library, achieving 85% code coverage across the codebase

## Projects

### PixelSpace — Real-Time Multiplayer Virtual World
React 18, TypeScript, WebSocket, PostgreSQL, Prisma, Turborepo

- Built a full-stack multiplayer 2D virtual world with WebSocket-based position sync supporting 50+ concurrent users across isolated spaces with server-side boundary validation to prevent state-manipulation exploits
- Architected Turborepo monorepo with 3 deployable apps (React frontend, Express REST API, WebSocket server) sharing a unified Prisma/PostgreSQL data layer for zero-duplication schema management
- Designed a RoomManager singleton pattern to isolate and broadcast movement events per space, reducing unnecessary network traffic by 70% compared to global broadcast approach
- Developed a Canvas-based React renderer with keyboard-controlled navigation and real-time position updates via JWT-authenticated WebSocket connections with role-based access (Admin/User)

### NexusAI — Unified Multi-Provider LLM API Gateway
Elysia.js, Bun, React 19, PostgreSQL, Prisma, Turborepo

- Engineered a unified LLM gateway routing requests to OpenAI, Anthropic, and Gemini via a single OpenAI-compatible endpoint, reducing multi-provider integration effort for consumers to one API key
- Designed a pluggable provider abstraction layer where adding a new LLM requires only a single adapter file — no changes to routing, billing, or consumer-facing API contracts
- Implemented credit-based billing with real-time token counting, data-driven per-model pricing, and atomic credit deduction ensuring zero revenue leakage at 100+ req/min
- Built React 19 dashboard with shadcn/ui for API key lifecycle management, per-request cost analytics, and full conversation history logging with token breakdowns

### CodeForge — Cloud-Native Browser IDE with Container Isolation
React 18, TypeScript, Kubernetes, Socket.io, Monaco Editor, AWS S3

- Built a browser-based IDE provisioning isolated Kubernetes containers per user with dynamic Deployment, Service, and Ingress creation enabling unique subdomain routing per session
- Integrated Monaco Editor for professional-grade syntax highlighting and XTerm.js with node-pty for full interactive terminal emulation, streaming shell I/O via Socket.io in under 50ms latency
- Engineered a Socket.io-based file system API for real-time directory traversal and file content streaming with client-side tree caching and deduplication to minimize redundant network calls
- Designed AWS S3 template system for multi-language project scaffolding (Node.js, Python, Go) auto-cloned on pod initialization, reducing session setup time to under 3 seconds

## Education

### Humber College
**Information Technology Solutions (Computer Science)**
Jan. 2024 – Aug. 2025 | Toronto, ON

### The Maharaja Sayajirao University of Baroda
**Bachelor of Computer Application (Computer Science)**
Sep. 2020 – May 2023 | Vadodara, India

## Technical Skills

Languages: JavaScript, TypeScript, Python, Java, PHP, SQL
Frontend: React.js, React Native, Next.js, Angular, HTML5, CSS3, Tailwind CSS, shadcn/ui, Canvas API
Backend: Node.js, Express.js, Elysia.js (Bun), MongoDB, MySQL, PostgreSQL, Prisma ORM, REST APIs, GraphQL, WebSocket, Socket.io
Cloud & DevOps: AWS (EC2, S3, Lambda), Docker, Kubernetes, Linux Administration, CI/CD Pipelines, Git, GitHub Actions
AI & ML: OpenAI API, Anthropic SDK, Google Gemini API, Generative AI, Prompt Engineering, LLM Integration

## Certifications

- What Is Generative AI
- Prompt Engineering: How to Talk to the AIs
- Generative AI vs. Traditional AI
- Prompting ChatGPT with Multimodal Techniques
- Pair Programming with AI

## Get in Touch

Connect with me on [LinkedIn](https://linkedin.com/in/devwratraval) or shoot an [email](mailto:devwratraval.dev@gmail.com)

---

**Links:**
- GitHub: [https://github.com/dravall](https://github.com/dravall)
- LinkedIn: [https://linkedin.com/in/devwratraval](https://linkedin.com/in/devwratraval)
- Email: devwratraval.dev@gmail.com
- Phone: +1-437-933-1422
`;
