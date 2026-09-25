import type { ComponentType, SVGProps } from "react";
import {
  Server, Database, Cpu, Cloud, Bot, FlaskConical,
  CreditCard, Radio, ShieldCheck, Boxes, Mail, Globe,
  ShoppingCart, ImageIcon, GitBranch, Workflow, KeyRound, LifeBuoy,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "../components/ui/BrandIcons";

export type Icon = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

export const profile = {
  name: "Omar Sherif Elghamry",
  role: "Backend & AI Engineer",
  tagline:
    "I build and ship production backends — payments, e-commerce, event-driven systems, and AI-powered services.",
  location: "Giza, Egypt",
  availability: "Available for freelance backend work",
  about:
    "Software Engineer at Techkhana focused on backend development and AI integration. I work with Node.js/NestJS and Python/FastAPI on real production systems, owning features end-to-end — from architecture and implementation through testing, deployment, and production support.",
  longAbout: [
    "I'm a backend software engineer with hands-on production experience building and integrating systems using Node.js/NestJS and Python/FastAPI. My day-to-day spans REST APIs, payment integrations, e-commerce flows, event-driven architecture, RBAC, image processing, and AI-powered backend services.",
    "I don't just write endpoints — I own features end-to-end: understanding requirements, designing the architecture and database, implementing, testing, deploying, and supporting them in production after launch.",
    "Right now I'm deepening my expertise in distributed systems, system design, advanced PostgreSQL, observability, and performance — building toward senior backend engineering with a specialization in Node.js/NestJS and AI integration.",
  ],
};

export const socials = [
  { label: "GitHub", href: "https://github.com/omaaarsh", icon: GitHubIcon, handle: "@omaaarsh" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/omar-elghamry-3a7256248/", icon: LinkedInIcon, handle: "Omar Elghamry" },
  { label: "Email", href: "mailto:omarsherifelghamry@gmail.com", icon: Mail, handle: "omarsherifelghamry@gmail.com" },
];

export const stats = [
  { value: "3.8", suffix: "/4.0", label: "CS GPA · MUST" },
  { value: "A", suffix: "*", label: "Graduation project" },
  { value: "161", suffix: "", label: "Tests on flagship service" },
  { value: "59", suffix: "", label: "API endpoints shipped" },
];

export type Service = { title: string; desc: string; icon: Icon };
export const services: Service[] = [
  { title: "NestJS / Node.js APIs", desc: "Scalable REST APIs with clean, modular NestJS architecture, DTO validation, guards, and auth.", icon: Server },
  { title: "Payment Integrations", desc: "Integrate providers like Tap and PayFort behind a clean abstraction — charge, save-card, and authorize flows.", icon: CreditCard },
  { title: "Databases & PostgreSQL", desc: "Schema design, TypeORM modeling, migrations, query optimization, transactions, and Redis caching.", icon: Database },
  { title: "Event-Driven Systems", desc: "Kafka / RabbitMQ messaging, CDC synchronization, and reliable backend-to-backend communication.", icon: Radio },
  { title: "AI Backend Integration", desc: "FastAPI AI services with LangChain, LangGraph, RAG, and AWS Bedrock — wired cleanly into your backend.", icon: Bot },
  { title: "Bug Fixing & Refactoring", desc: "Debug production issues, refactor messy backends, add tests, and improve reliability and performance.", icon: FlaskConical },
];

export type SkillGroup = { title: string; icon: Icon; items: string[] };
export const skills: SkillGroup[] = [
  { title: "Backend", icon: Server, items: ["Node.js", "NestJS", "TypeScript", "Python", "FastAPI"] },
  { title: "Data & Caching", icon: Database, items: ["PostgreSQL", "TypeORM", "Redis"] },
  { title: "Messaging & Real-time", icon: Radio, items: ["Apache Kafka", "RabbitMQ", "Socket.IO"] },
  { title: "Infra & Cloud", icon: Cloud, items: ["Docker", "Kubernetes (EKS)", "AWS", "GitHub Actions"] },
  { title: "AI Integration", icon: Bot, items: ["LangChain", "LangGraph", "RAG", "AWS Bedrock", "Claude"] },
  { title: "Testing", icon: FlaskConical, items: ["Jest", "Testcontainers", "Postman"] },
];

/* ---------- Experience (home timeline summary) ---------- */
export type Job = {
  role: string; org: string; orgUrl?: string; period: string; grade?: string;
  summary: string; points: string[]; stack: string[];
};
export const experience: Job[] = [
  {
    role: "Software Engineer",
    org: "Techkhana",
    orgUrl: "https://techkhana.io",
    period: "2026 — Present",
    summary: "Backend engineering on real production systems for a Saudi-market super-app.",
    points: [
      "Payments — provider abstraction (factory); integrated Tap Payments alongside PayFort.",
      "E-commerce checkout, Kafka/CDC event sync, admin RBAC, centralized image processing.",
      "Fahem AI feature (AWS Rekognition); services on Kubernetes (EKS).",
    ],
    stack: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "Kafka", "AWS", "Kubernetes"],
  },
  {
    role: "Backend & AI — Graduation Project",
    org: "StyleHub",
    period: "2025 — 2026",
    grade: "A*",
    summary: "AI-driven fashion platform combining social media, e-commerce, and recommendations.",
    points: [
      "Owned the NestJS Social Media Service — RabbitMQ, Socket.IO, JWT + RBAC, 161 tests.",
      "Built the Python FastAPI AI service — LangChain, LangGraph, RAG, Bedrock (Claude).",
    ],
    stack: ["NestJS", "FastAPI", "RabbitMQ", "Socket.IO", "LangChain", "PostgreSQL"],
  },
];

/* ---------- Techkhana — full experience (detail page) ---------- */
export type WorkArea = { title: string; icon: Icon; points: string[] };
export const companyDetail = {
  company: "Techkhana",
  companyUrl: "https://techkhana.io",
  role: "Software Engineer",
  type: "Full-time",
  period: "2026 — Present",
  location: "Egypt (remote-friendly)",
  product: "Barns — a Saudi-market super-app (e-commerce, ordering, and admin platform)",
  intro:
    "My first full-time engineering role. I work across multiple backend services rather than a single CRUD module — payments, e-commerce, event-driven data, access control, media, AI features, and infrastructure — on systems used by real clients in production.",
  areas: [
    {
      title: "Payment Engineering",
      icon: CreditCard,
      points: [
        "Refactored the payment architecture around a provider-abstraction (PaymentProviderFactory / strategy) design so multiple providers sit behind one interface.",
        "Integrated Tap Payments alongside an existing provider (PayFort) — from API design through backend implementation.",
        "Implemented charge, save-card, and authorize flows, including card tokenization and platform-specific configuration (X-Platform) for mobile vs. web.",
      ],
    },
    {
      title: "E-commerce Checkout",
      icon: ShoppingCart,
      points: [
        "Redesigned a checkout flow where the E-commerce backend retrieves current product data from the Admin backend at checkout time.",
        "Stored a checkout snapshot (price, quantity, product metadata) so orders don't depend on mutable catalog data after creation.",
        "Established a clean Checkout → Order → Payment separation instead of trusting the frontend cart.",
      ],
    },
    {
      title: "Event-Driven Data",
      icon: Workflow,
      points: [
        "Worked with Apache Kafka and Kafka Connect / CDC (Confluent) for change-data-capture style synchronization.",
        "Backend-to-backend communication and coordination between separate services (e.g. app ↔ admin support flow).",
      ],
    },
    {
      title: "Admin RBAC & Auth",
      icon: KeyRound,
      points: [
        "Role-based access control for the administration system — roles, permissions, and guard-based authorization.",
        "Layered request protection: authentication → authorization/roles → throttling.",
      ],
    },
    {
      title: "Image Processing",
      icon: ImageIcon,
      points: [
        "Built a centralized ImageProcessingService instead of duplicating logic per module.",
        "Magic-byte validation, EXIF stripping, WebP conversion, SHA-256 dedup, and immutable caching over S3.",
        "Validates size, type, dimensions, and count; rejects unsupported formats (video, HEIC).",
      ],
    },
    {
      title: "Fahem — AI Feature",
      icon: Bot,
      points: [
        "Backend integration for an AI-powered feature using AWS Rekognition for image analysis.",
        "Feature-flag gating, per-user daily usage limits, image validation, and product matching from results.",
      ],
    },
    {
      title: "Infrastructure & Support",
      icon: Cloud,
      points: [
        "Services running on Kubernetes (Amazon EKS) with Docker and GitHub Actions CI/CD.",
        "Production debugging, deployment, and launch support — seeing features go live and supporting them.",
      ],
    },
  ] as WorkArea[],
  stack: ["Node.js", "NestJS", "TypeScript", "TypeORM", "PostgreSQL", "Redis", "Kafka", "Docker", "Kubernetes", "AWS", "GitHub Actions"],
};

/* ---------- Projects (with detail pages) ---------- */
export type Project = {
  slug: string;
  title: string; tagline: string; desc: string; longDesc: string;
  role: string; period: string;
  features: string[]; highlights: string[];
  tags: string[]; repo?: string; demo?: string; featured?: boolean; icon: Icon;
};
export const projects: Project[] = [
  {
    slug: "social-media-service",
    title: "Social Media Service",
    tagline: "Production-grade NestJS microservice for the StyleHub platform.",
    desc: "NestJS microservice — 59 endpoints across 14 modules, RabbitMQ events, Socket.IO real-time, JWT + RBAC, 161 tests.",
    longDesc:
      "The social media service powering StyleHub — feeds, posts, a full follow graph, direct-message chat, and notifications. Built end-to-end with a modular NestJS architecture (controller → service → repository) and event-driven communication with the rest of the platform. I owned this service from architecture through deployment.",
    role: "Sole backend owner",
    period: "2025 — 2026",
    features: [
      "Auth — registration, login, JWT access + refresh tokens, email verification, password reset",
      "Feed, posts, likes/comments, and a follow/followers graph",
      "Real-time chat and notifications over Socket.IO",
      "RabbitMQ topic-exchange events for cross-service communication",
      "Media uploads streamed to Cloudinary; transactional email via Brevo",
      "Role-based authorization (USER / BRAND / ADMIN) and rate limiting",
    ],
    highlights: [
      "59 REST endpoints across 14 feature modules",
      "12 test suites / 161 tests passing (Jest + Testcontainers)",
      "Dockerized with CI/CD to Heroku via GitHub Actions",
      "Auto-generated Swagger/OpenAPI docs",
    ],
    tags: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "RabbitMQ", "Socket.IO", "Docker"],
    repo: "https://github.com/StyleHub1/Social-Media-Service",
    featured: true,
    icon: Boxes,
  },
  {
    slug: "stylehub-chat-frontend",
    title: "StyleHub Chat Frontend",
    tagline: "Real-time chat & social UI for the StyleHub platform.",
    desc: "React + TypeScript real-time UI — TanStack Query, Zustand, Socket.IO.",
    longDesc:
      "The front-end client for the StyleHub social experience, talking to the Social Media Service over REST and Socket.IO. Built with React + TypeScript + Vite, with server state in TanStack Query and client state in Zustand.",
    role: "Frontend developer",
    period: "2025 — 2026",
    features: [
      "Real-time messaging with live delivery and presence",
      "Social feed and interactions (posts, likes, comments, follow)",
      "Type-safe forms with React Hook Form + Zod",
      "Server state cached and revalidated with TanStack Query",
    ],
    highlights: ["React + TypeScript + Vite", "Socket.IO real-time", "Zustand + TanStack Query"],
    tags: ["React", "TypeScript", "Socket.IO", "Zustand"],
    repo: "https://github.com/omaaarsh/stylehub-chat-frontend",
    icon: Radio,
  },
  {
    slug: "lincs-gene-query-tool",
    title: "LINCS Gene Query Tool",
    tagline: "Bioinformatics explorer for gene → drug reverse-search.",
    desc: "Streamlit app querying the LINCS API to find drugs that up/down-regulate a gene, with charts and CSV export.",
    longDesc:
      "An interactive Streamlit app for exploring the LINCS L1000 reverse-search API. Given a gene, it finds the chemical perturbagens (drugs) that most strongly up- or down-regulate it, ranks them, and visualizes the results — useful for connectivity-map style drug-discovery analysis.",
    role: "Sole developer",
    period: "2025",
    features: [
      "Queries the LINCS reverse-search API by gene and direction",
      "Ranks results by CD Coefficient (effect strength)",
      "Interactive Plotly charts and sortable tables",
      "CSV export for downstream analysis",
    ],
    highlights: ["Python + Streamlit", "pandas + NumPy + Plotly", "Real external API integration"],
    tags: ["Python", "Streamlit", "Plotly", "pandas"],
    repo: "https://github.com/omaaarsh/LINCS-Gene-Query-Tool",
    icon: FlaskConical,
  },
  {
    slug: "deep-neural-network",
    title: "Deep Neural Network",
    tagline: "Binary classifier built from scratch — no frameworks.",
    desc: "A neural network implemented in pure Python/NumPy — forward and backpropagation from first principles.",
    longDesc:
      "A deep neural network for binary classification implemented from scratch in Python and NumPy, with forward propagation and backpropagation written by hand — built to understand the math rather than rely on a framework.",
    role: "Sole developer",
    period: "2025",
    features: [
      "Forward and backward passes implemented manually",
      "Configurable layers and activations",
      "Gradient-based training loop",
    ],
    highlights: ["Pure Python / NumPy", "No ML frameworks", "From-scratch backprop"],
    tags: ["Python", "NumPy"],
    repo: "https://github.com/omaaarsh/Deep-Neural-Network-DNN-for-Binary-Classification-V1",
    icon: Cpu,
  },
  {
    slug: "startup-collab",
    title: "Startup-Collab",
    tagline: "Multi-language startup collaboration platform.",
    desc: "React + Firebase web app with i18next internationalization and protected routes.",
    longDesc:
      "A startup collaboration platform built with React + Vite, backed by Firebase for auth and data, and fully internationalized with i18next (multi-language, RTL-ready). Connects founders, ideas, and collaborators through a responsive UI.",
    role: "Frontend developer",
    period: "2025",
    features: [
      "Firebase authentication and data",
      "Internationalization with i18next + language detection",
      "Protected routes and context-based state",
      "Responsive UI with Swiper carousels",
    ],
    highlights: ["React + Vite", "Firebase", "i18next (multi-language)"],
    tags: ["React", "Firebase", "i18next"],
    repo: "https://github.com/omaaarsh/IT-Project",
    icon: Globe,
  },
  {
    slug: "recipe-manager",
    title: "Recipe Manager",
    tagline: "Clean-architecture console app demonstrating SOLID.",
    desc: "A C#/.NET console application built around SOLID principles and design patterns.",
    longDesc:
      "A recipe management console application in C# built to demonstrate clean, scalable architecture — applying SOLID principles and classic design patterns, with recipes persisted in JSON or text formats.",
    role: "Sole developer",
    period: "2025",
    features: [
      "SOLID principles applied throughout",
      "Design patterns for extensibility",
      "JSON / text persistence",
    ],
    highlights: ["C# / .NET", "SOLID + design patterns", "Clean architecture"],
    tags: ["C#", ".NET", "SOLID"],
    repo: "https://github.com/omaaarsh/Recipe-Manager",
    icon: ShieldCheck,
  },
];

export const education = {
  degree: "B.Sc. Computer Science",
  school: "Misr University for Science and Technology (MUST)",
  period: "Graduating June 2026",
  gpa: "3.8 / 4.0",
  note: "Graduation project graded A*",
};

export const extraIcons = { GitBranch, LifeBuoy, Database };
