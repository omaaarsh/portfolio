import type { ComponentType, SVGProps } from "react";
import {
  Server, Database, Cpu, Cloud, Bot, FlaskConical,
  CreditCard, Radio, ShieldCheck, Boxes, Mail, Globe,
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
    "Software Engineer at Techkhana focused on backend development and AI integration. I work with Node.js/NestJS and Python/FastAPI on real production systems, owning features end-to-end — from architecture and implementation through testing, deployment, and production support. I'm currently going deeper on distributed systems, system design, observability, and performance.",
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
  { title: "NestJS / Node.js APIs", desc: "Design and build scalable REST APIs with clean, modular NestJS architecture, DTO validation, guards, and auth.", icon: Server },
  { title: "Payment Integrations", desc: "Integrate providers like Tap and PayFort behind a clean abstraction — charge, save-card, and authorize flows.", icon: CreditCard },
  { title: "Databases & PostgreSQL", desc: "Schema design, TypeORM modeling, migrations, query optimization, transactions, and caching with Redis.", icon: Database },
  { title: "Event-Driven Systems", desc: "Kafka / RabbitMQ messaging, CDC synchronization, and reliable backend-to-backend communication.", icon: Radio },
  { title: "AI Backend Integration", desc: "FastAPI AI services with LangChain, LangGraph, RAG, and AWS Bedrock — wired cleanly into your backend.", icon: Bot },
  { title: "Bug Fixing & Refactoring", desc: "Debug production issues, refactor messy backends, add tests, and improve reliability and performance.", icon: FlaskConical },
];

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
      "Payments — provider-abstraction (factory) design; integrated Tap Payments alongside PayFort with charge / save-card / authorize flows.",
      "E-commerce checkout — catalog snapshot at checkout with backend-to-backend order coordination.",
      "Event-driven data — Apache Kafka + Kafka Connect (CDC) synchronization.",
      "Admin RBAC — roles, permissions, and guard-based authorization.",
      "Centralized image processing — magic-byte validation, WebP conversion, SHA-256 dedup over S3.",
      "Fahem (AI) — AWS Rekognition integration with feature flags and usage limits.",
      "Infra — services on Kubernetes (Amazon EKS), Docker, and GitHub Actions.",
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
      "Owned the NestJS Social Media Service — feeds, posts, follow graph, chat, and notifications.",
      "RabbitMQ event infrastructure and Socket.IO real-time; JWT + role-based authorization; 161 tests passing.",
      "Built the Python FastAPI AI service — LangChain, LangGraph, RAG, and multi-agent orchestration over OpenAI and AWS Bedrock (Claude).",
    ],
    stack: ["NestJS", "FastAPI", "RabbitMQ", "Socket.IO", "LangChain", "PostgreSQL"],
  },
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

export type Project = {
  title: string; desc: string; tags: string[]; repo?: string; demo?: string; featured?: boolean; icon: Icon;
};
export const projects: Project[] = [
  {
    title: "Social Media Service",
    desc: "Production-grade NestJS microservice — 59 endpoints across 14 modules, RabbitMQ events, Socket.IO real-time, JWT + RBAC, and 161 passing tests.",
    tags: ["NestJS", "PostgreSQL", "RabbitMQ", "Socket.IO", "Docker"],
    repo: "https://github.com/StyleHub1/Social-Media-Service",
    featured: true,
    icon: Boxes,
  },
  {
    title: "StyleHub Chat Frontend",
    desc: "Real-time chat and social UI for the StyleHub platform — TanStack Query, Zustand, and Socket.IO.",
    tags: ["React", "TypeScript", "Socket.IO"],
    repo: "https://github.com/omaaarsh/stylehub-chat-frontend",
    icon: Radio,
  },
  {
    title: "LINCS Gene Query Tool",
    desc: "Streamlit app that queries the LINCS reverse-search API to find drugs that up/down-regulate a gene, with Plotly charts and CSV export.",
    tags: ["Python", "Streamlit", "Plotly"],
    repo: "https://github.com/omaaarsh/LINCS-Gene-Query-Tool",
    icon: FlaskConical,
  },
  {
    title: "Deep Neural Network",
    desc: "Binary classifier implemented from scratch in Python/NumPy — forward and backpropagation, no frameworks.",
    tags: ["Python", "NumPy"],
    repo: "https://github.com/omaaarsh/Deep-Neural-Network-DNN-for-Binary-Classification-V1",
    icon: Cpu,
  },
  {
    title: "Startup-Collab",
    desc: "Multi-language startup collaboration platform with Firebase auth/data and i18next internationalization.",
    tags: ["React", "Firebase", "i18next"],
    repo: "https://github.com/omaaarsh/IT-Project",
    icon: Globe,
  },
  {
    title: "Recipe Manager",
    desc: "Clean-architecture console application demonstrating SOLID principles and design patterns.",
    tags: ["C#", ".NET", "SOLID"],
    repo: "https://github.com/omaaarsh/Recipe-Manager",
    icon: ShieldCheck,
  },
];

