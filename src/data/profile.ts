import type { ComponentType, SVGProps } from "react";
import {
  Server, Database, Cloud, Bot, FlaskConical,
  CreditCard, Radio, Mail,
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

export const education = {
  degree: "B.Sc. Computer Science",
  school: "Misr University for Science and Technology (MUST)",
  period: "Graduating June 2026",
  gpa: "3.8 / 4.0",
  note: "Graduation project graded A*",
};

export const extraIcons = { GitBranch, LifeBuoy, Database };
