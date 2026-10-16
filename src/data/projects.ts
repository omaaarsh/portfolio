import stylehubPoster from "../assets/projects/stylehub-poster.webp";
import stylehubScreens from "../assets/projects/stylehub-screens.webp";
import paymentsPoster from "../assets/projects/payments-poster.webp";
import aiPoster from "../assets/projects/ai-poster.webp";
import patternsPoster from "../assets/projects/patterns-poster.webp";
import redisPoster from "../assets/projects/redis-poster.webp";
import wearlyPoster from "../assets/projects/wearly-poster.webp";

/* Content mirrors Omar_Elghamry_Project_Portfolio.pdf. Text wrapped in `backticks` renders as inline code. */

export type Metric = { value: string; label: string };
export type Bullet = { lead?: string; text: string };
export type Table = { head: string[]; rows: string[][] };
export type Section = { title: string; body?: string; bullets?: Bullet[]; table?: Table };
export type CodeLink = { label: string; href?: string };
export type Poster = { src: string; alt: string; caption: string; width: number; height: number };

export type Project = {
  slug: string;
  num: string;
  title: string;
  /** Short label used in the contents list, e.g. "graduation project". */
  kind: string;
  /** Eyebrow above the title on the detail page. */
  eyebrow: string;
  /** One-line summary for the home list. */
  summary: string;
  /** Lead paragraph under the title (poster subtitle). */
  lede: string;
  /** Mono stack line on the right of the contents list. */
  stackLine: string[];
  tags: string[];
  meta: { label: string; value: string }[];
  code: CodeLink[];
  codeNote?: string;
  metrics?: Metric[];
  overview: string;
  sections: Section[];
  posters: Poster[];
};

const POSTER = { width: 1488, height: 1836 };

export const projects: Project[] = [
  {
    slug: "social-media-service",
    num: "01",
    title: "StyleHub Social Service",
    kind: "graduation project",
    eyebrow: "Graduation project · Grade A*",
    summary: "The social layer of a fashion platform: posts, follows, feed, real-time chat and notifications, with every change published over RabbitMQ.",
    lede: "The social layer of a fashion platform that mixes e-commerce, social media and AI recommendations. Users and brands post, follow, react, chat in real time and get notified, while every change is published to the other StyleHub services.",
    stackLine: ["NestJS", "RabbitMQ", "Socket.IO"],
    tags: ["NestJS 11", "TypeScript", "PostgreSQL · TypeORM", "RabbitMQ", "Socket.IO", "JWT + RBAC", "Docker", "GitHub Actions", "Heroku", "Flutter"],
    meta: [
      { label: "Role", value: "Sole backend engineer of the social service; also built the Flutter mobile app and a React chat web client" },
      { label: "Context", value: "StyleHub graduation project, Misr University for Science and Technology" },
      { label: "Timeline", value: "February – September 2026" },
    ],
    code: [
      { label: "github.com/StyleHub1/Social-Media-Service", href: "https://github.com/StyleHub1/Social-Media-Service" },
      { label: "github.com/omaaarsh/stylehub-chat-frontend", href: "https://github.com/omaaarsh/stylehub-chat-frontend" },
    ],
    metrics: [
      { value: "59", label: "REST endpoints" },
      { value: "14", label: "feature modules" },
      { value: "13", label: "TypeORM migrations" },
      { value: "96 / 96", label: "commits by me" },
    ],
    overview:
      "StyleHub is a microservices platform for local fashion businesses that combines e-commerce, social media and AI-driven recommendations. The Social-Media-Service is its social layer: users and brands create posts with photos and videos, follow each other, like and comment, get a personal feed, search for accounts, chat in real time and receive notifications. Every profile and post change is also published to the rest of the StyleHub platform over RabbitMQ, so the e-commerce and AI services stay in sync without calling this service directly.",
    sections: [
      {
        title: "How the system works",
        bullets: [
          { lead: "One NestJS service, 14 modules:", text: "auth, user, brand, posts, feed, follow, interactions, chat, messaging, notifications, realtime, search, cloudinary and common. Each module is layered controller → service → repository → entity, with DTOs." },
          { lead: "Request path:", text: "client → HTTP (CORS allow-list) → global validation pipe that strips unknown fields → global guards for the JWT access token, roles and rate limiting (60 requests / 60 s) → controller → service → TypeORM → PostgreSQL." },
          { lead: "Auth:", text: "JWT access and refresh tokens, with refresh tokens stored in their own table; email verification and password reset tokens; bcrypt hashing; role checks on the posts, interactions and chat controllers. Environment config is validated with Joi at boot." },
          { lead: "Internal events:", text: "services emit domain events such as `post.created`, `follow.followed` and `auth.user.registered`. Listeners in the feed, auth and notifications modules react asynchronously, for example fanning a new post out to followers' feeds or sending verification emails." },
          { lead: "Cross-service events:", text: "an event bridge maps internal events to RabbitMQ routing keys (`social.user.*`, `social.brand.*`, `social.post.*`) on a durable topic exchange. If the broker is down, messages are buffered in memory and flushed on reconnect." },
          { lead: "Real-time:", text: "a Socket.IO gateway authenticates every socket with the JWT and joins it to a per-user room. It handles `chat:send`, `chat:typing` and `chat:seen`, and messages move through SENT → DELIVERED → SEEN." },
          { lead: "Background job:", text: "a nightly cron (03:00 UTC) removes feed items older than 30 days." },
          { lead: "Integrations:", text: "Cloudinary for streamed media uploads and Brevo for transactional email." },
        ],
      },
      {
        title: "Quality and delivery",
        bullets: [
          { text: "13 TypeORM migrations for safe schema changes over time." },
          { text: "Jest unit tests plus 12 end-to-end suites that run against a real PostgreSQL through Testcontainers; CI runs them on every push and pull request." },
          { text: "Multi-stage Docker image; GitHub Actions builds it, pushes it to the Heroku Container Registry and releases it. Docker Compose runs PostgreSQL and RabbitMQ locally with health checks." },
          { text: "Swagger / OpenAPI docs with a script that syncs the spec to Postman." },
        ],
      },
      {
        title: "Clients I built on top of it",
        bullets: [
          { lead: "Flutter mobile app:", text: "the end-to-end mobile client for the platform." },
          { lead: "stylehub-chat-frontend:", text: "a React 19 + TypeScript web client for chat, using TanStack Query and Zustand. It refreshes expired tokens silently with one shared refresh call and a queue for waiting requests, sends messages optimistically with a REST fallback when the socket drops, and loads history with cursor pagination." },
        ],
      },
      {
        title: "Platform AI",
        body: "The StyleHub recommendation engine reached an AUC-ROC of 0.93 and 92.87% accuracy. I also built a Python FastAPI AI service for the platform with LangChain, LangGraph and RAG over AWS Bedrock.",
      },
    ],
    posters: [
      { src: stylehubPoster, alt: "StyleHub Social Service poster: chat screen, system flow and key numbers", caption: "Poster · StyleHub Social Service", ...POSTER },
      { src: stylehubScreens, alt: "Six illustrative StyleHub app screens: feed, post, profile, notifications, messages and search", caption: "App screens · illustrative designs", width: 1488, height: 1926 },
    ],
  },
  {
    slug: "multi-provider-payments",
    num: "02",
    title: "Multi-provider Payment Integration",
    kind: "Techkhana",
    eyebrow: "Techkhana · Production",
    summary: "Payments refactored behind one provider interface, so Tap Payments runs next to PayFort without checkout or orders knowing which one is used.",
    lede: "The app needed more than one payment provider. I refactored payments around one provider interface, so Tap Payments now runs next to the existing PayFort integration and the rest of the code never knows which one is used.",
    stackLine: ["NestJS", "Tap", "PayFort"],
    tags: ["NestJS", "TypeScript", "PostgreSQL", "Tap Payments", "PayFort (Amazon Payment Services)"],
    meta: [
      { label: "Role", value: "Backend engineer" },
      { label: "Context", value: "Payment architecture for a live Saudi-market super-app at Techkhana" },
      { label: "Timeline", value: "2026" },
    ],
    code: [],
    codeNote: "Private (company code). The same design is shown publicly in project 04, the Payment Patterns Lab.",
    overview:
      "The super-app took payments through PayFort (Amazon Payment Services) and needed to support more than one payment provider. Adding a second provider directly would have spread provider-specific checks through checkout and order code. I refactored payments so every provider sits behind one interface and then integrated Tap Payments next to PayFort.",
    sections: [
      {
        title: "The problem",
        body: "Each provider has its own API, request format, statuses and error codes. Without an abstraction, every new provider means touching checkout, orders and payment code, and every flow (charge, save card, authorize) has to be written once per provider and per platform.",
      },
      {
        title: "What I built",
        bullets: [
          { lead: "Provider abstraction:", text: "payments refactored around a factory + strategy design, so the payment service depends on one provider interface and the factory supplies the right implementation." },
          { lead: "Tap Payments integration", text: "alongside the existing PayFort integration." },
          { lead: "Payment flows:", text: "charge, save-card and authorize, using card tokenization." },
          { lead: "Platform-specific configuration", text: "for mobile and web clients." },
          { lead: "Clean separation of Checkout → Order → Payment:", text: "checkout stores a price snapshot, so the order keeps the price the customer saw even if catalog prices change later." },
        ],
      },
      {
        title: "How a payment flows",
        table: {
          head: ["#", "Step", "What happens"],
          rows: [
            ["1", "Client", "The mobile or web app starts checkout with its platform-specific configuration."],
            ["2", "Checkout", "Prices are captured as a snapshot."],
            ["3", "Order", "The order is created from the checkout, separate from payment."],
            ["4", "Payment service", "Calls the provider interface: charge, save card or authorize."],
            ["5", "Provider factory", "Supplies the Tap or PayFort implementation."],
            ["6", "Provider", "Tap Payments or PayFort processes the tokenized card."],
          ],
        },
      },
      {
        title: "Result",
        body: "Two payment providers run in production behind one interface. A new provider is a new implementation of the interface, not a change to checkout or orders.",
      },
    ],
    posters: [
      { src: paymentsPoster, alt: "Multi-provider Payments poster: checkout screen and payment flow", caption: "Poster · Multi-provider Payments", ...POSTER },
    ],
  },
  {
    slug: "agentic-ai-microservice",
    num: "03",
    title: "Agentic AI Microservice",
    kind: "Techkhana",
    eyebrow: "Techkhana · Production",
    summary: "A FastAPI service built from scratch that hands each request to LangGraph agents, grounded with RAG and answered by OpenAI or AWS Bedrock models.",
    lede: "An AI service built from scratch that serves real clients. A FastAPI backend hands each request to a team of LangGraph agents that retrieve the right context with RAG and call OpenAI or AWS Bedrock models to answer.",
    stackLine: ["FastAPI", "LangGraph", "Bedrock"],
    tags: ["Python", "FastAPI", "LangGraph", "LangChain", "RAG", "AWS Bedrock", "OpenAI API", "PostgreSQL", "Docker", "AWS"],
    meta: [
      { label: "Role", value: "Primary backend & AI engineer" },
      { label: "Context", value: "Production AI microservice at Techkhana, serving real clients" },
      { label: "Timeline", value: "2026" },
    ],
    code: [],
    codeNote: "Private (company code)",
    overview:
      "I built Techkhana's agentic AI microservice from scratch as its primary engineer. A FastAPI service receives requests and hands them to multi-agent pipelines built with LangGraph. The agents retrieve relevant context with a LangChain RAG system and call large language models through the OpenAI API and AWS Bedrock. Data is kept in PostgreSQL and the service is deployed on AWS.",
    sections: [
      {
        title: "How the system works",
        bullets: [
          { lead: "API layer:", text: "FastAPI exposes the service to client applications." },
          { lead: "Orchestration:", text: "LangGraph runs multi-agent pipelines, splitting the work into separate agent nodes that can be tested and improved on their own." },
          { lead: "Retrieval:", text: "a RAG system built with LangChain grounds answers in the relevant data." },
          { lead: "Models:", text: "both the OpenAI API and AWS Bedrock are integrated for LLM capabilities." },
          { lead: "Persistence and deployment:", text: "PostgreSQL for data, Docker, and AWS infrastructure." },
        ],
      },
      {
        title: "What I did",
        bullets: [
          { text: "Designed the full service architecture." },
          { text: "Integrated OpenAI and AWS Bedrock." },
          { text: "Built the multi-agent orchestration pipelines with LangGraph." },
          { text: "Implemented RAG with LangChain." },
          { text: "Managed data persistence with PostgreSQL and deployed on AWS." },
          { text: "Resolved real production problems, including performance bottlenecks and model inconsistencies." },
        ],
      },
      {
        title: "Also at Techkhana",
        body: "Built RESTful APIs for a construction management platform using Node.js and PostgreSQL, and integrated AWS Rekognition with feature flags and usage limits. This work is backed by an official internship experience letter from Techkhana's CTO.",
      },
    ],
    posters: [
      { src: aiPoster, alt: "Agentic AI Microservice poster: assistant screen and agent pipeline", caption: "Poster · Agentic AI Microservice", ...POSTER },
    ],
  },
  {
    slug: "nestjs-payment-patterns-lab",
    num: "04",
    title: "NestJS Payment Patterns Lab",
    kind: "open source",
    eyebrow: "Open source · Educational lab",
    summary: "Strategy, Factory, Adapter and Dependency Injection as four roles in one payment request, with simulated PayFort and Tap gateways.",
    lede: "Four design patterns, one payment request. PayFort and Tap speak very different APIs; the app talks to neither directly. Switch providers with one environment variable and the service code doesn't change.",
    stackLine: ["NestJS 12", "PostgreSQL"],
    tags: ["NestJS 12", "TypeScript 6 strict", "PostgreSQL 17", "TypeORM", "Swagger", "Docker Compose", "oxlint"],
    meta: [
      { label: "Role", value: "Sole author" },
      { label: "Published", value: "October 2026 · MIT license" },
    ],
    code: [{ label: "github.com/omaaarsh/nestjs-payment-patterns-lab", href: "https://github.com/omaaarsh/nestjs-payment-patterns-lab" }],
    overview:
      "A small, runnable NestJS project that shows how Strategy, Factory, Adapter and Dependency Injection work together in one payment flow: not as four separate examples, but as four roles in the same request. Two simulated providers, PayFort and Tap, speak deliberately different APIs. The application talks to neither directly. It is an educational lab with in-memory mock gateways, no network calls and no real money.",
    sections: [
      {
        title: "The four patterns",
        table: {
          head: ["Pattern", "Responsibility"],
          rows: [
            ["Strategy", "`IPaymentProvider` is the contract; both adapters implement it; `PaymentsService` holds one and delegates. There is no provider branching in the service."],
            ["Factory", "One function maps `PAYMENT_PROVIDER` to an adapter. An unsupported value stops the app at startup, with no silent fallback."],
            ["Adapter", "Each adapter translates the internal request into its gateway's format, and the gateway's responses, statuses and errors back into one normalized result."],
            ["Dependency Injection", "NestJS binds the factory's result to a token and passes it into `PaymentsService` through its constructor."],
          ],
        },
      },
      {
        title: "What the adapters translate",
        table: {
          head: ["", "PayFort (mock)", "Tap (mock)", "The app sees"],
          rows: [
            ["Amount", "minor units `\"12550\"`", "decimal `\"125.50\"`", "`\"125.50\"`"],
            ["Transaction id", "`fort_id`", "`chg_…` / `auth_…`", "`providerTransactionId`"],
            ["Success", "status `\"14\"` / `\"02\"`", "`CAPTURED` / `AUTHORIZED`", "`CAPTURED` / `AUTHORIZED`"],
            ["Decline", "status `\"13\"` / `\"03\"`", "`DECLINED`", "`FAILED` + `DECLINED`"],
            ["Outage", "503 error", "503 error", "503, stored as `PROVIDER_UNAVAILABLE`"],
          ],
        },
      },
      {
        title: "Request flow",
        bullets: [
          { text: "The controller validates the body: amount is a positive decimal string and currency is an ISO 4217 code." },
          { text: "The service saves a `PENDING` payment, calls `provider.charge()` on the injected adapter, and stores the normalized result." },
          { text: "If the provider fails, the payment is marked `FAILED` with a reason before the 502 / 503 reaches the client. A decline is a business result (201 + `FAILED`), not an error." },
          { text: "Money stays a string end to end (`numeric(12,2)`) to avoid floating-point errors. The schema comes from explicit migrations." },
        ],
      },
      {
        title: "Documented trade-offs",
        body: "The README is honest about limits: no signatures, 3-D Secure, webhooks or idempotency keys; one provider per process; no capture, void or refund; and a possible stuck `PENDING` payment between two writes, which a real system would reconcile with the provider.",
      },
    ],
    posters: [
      { src: patternsPoster, alt: "Payment Patterns Lab poster: Swagger example and pattern flow", caption: "Poster · Payment Patterns Lab", ...POSTER },
    ],
  },
  {
    slug: "redis-cache-lab",
    num: "05",
    title: "Redis Cache Lab",
    kind: "open source",
    eyebrow: "Open source · Measured lab",
    summary: "A slow PostgreSQL read path made fast with Redis: cache-aside, event-driven invalidation and single-flight stampede protection, with measured results.",
    lede: "A slow PostgreSQL read path made fast with Redis, without serving stale data and without flooding the database when a cold key gets many requests at the same moment.",
    stackLine: ["NestJS", "Redis", "PostgreSQL"],
    tags: ["NestJS 11", "TypeScript", "Redis 7", "ioredis", "Keyv", "cache-manager", "PostgreSQL 16", "Docker Compose"],
    meta: [
      { label: "Role", value: "Sole author" },
      { label: "Published", value: "September 2026" },
    ],
    code: [{ label: "github.com/omaaarsh/redis-cache-lab", href: "https://github.com/omaaarsh/redis-cache-lab" }],
    metrics: [
      { value: "466 ms → 1.7 ms", label: "repeated GET /products, Postgres vs Redis" },
      { value: "50 → 1", label: "database queries for 50 concurrent cold reads" },
    ],
    overview:
      "A hands-on lab that puts a Redis cache in front of a slow PostgreSQL read path in NestJS. It solves the two classic caching problems: serving stale data after writes, and a cache stampede when many requests hit the same cold key at once. The slow query is simulated with a 400 ms delay so the effect of the cache is easy to measure.",
    sections: [
      {
        title: "How the system works",
        bullets: [
          { lead: "Read path (cache-aside):", text: "`GET /products` → service → Redis. On a hit, the result returns at once; on a miss, the service reads PostgreSQL, writes the result to Redis with a TTL, and returns it. Keys are `products` for the list and `product:{id}` for single items." },
          { lead: "Write path (event-driven invalidation):", text: "`POST`, `PUT` and `DELETE` save to PostgreSQL and emit `cache.updated`; the cache service listens and deletes the affected list and item keys." },
          { lead: "Stampede protection (single-flight):", text: "the service keeps the in-flight promise for a cold read, so concurrent callers wait on the same promise and only one database query runs." },
          { lead: "Cache layer wiring:", text: "ioredis client → Keyv store adapter → cache-manager module → cache service, instead of the default one-line setup." },
          { lead: "Graceful degradation:", text: "if Redis is unreachable, the client is null and the app falls back to an in-memory cache and keeps serving." },
        ],
      },
      {
        title: "What it demonstrates",
        body: "Caching that is fast, correct after writes, safe under concurrent load, and resilient when the cache itself is down, with the gains measured instead of assumed.",
      },
    ],
    posters: [
      { src: redisPoster, alt: "Redis Cache Lab poster: measured latency, read and write paths", caption: "Poster · Redis Cache Lab", ...POSTER },
    ],
  },
  {
    slug: "wearly-ecommerce-api",
    num: "06",
    title: "Wearly E-Commerce API",
    kind: "open source",
    eyebrow: "Open source · Sole author",
    summary: "The server side of a clothing store: accounts, a catalog for men, women and kids, a cart and checkout, built as a layered REST API.",
    lede: "The server side of a clothing store: customer accounts, a catalog for men, women and kids, a shopping cart and checkout, built as a clean layered REST API for a separate web front-end.",
    stackLine: ["ASP.NET Core", "EF Core"],
    tags: ["C#", "ASP.NET Core (.NET 9)", "Entity Framework Core", "SQL Server", "BCrypt", "Swagger", "Docker"],
    meta: [
      { label: "Role", value: "Sole author" },
      { label: "Timeline", value: "April – May 2025" },
    ],
    code: [{ label: "github.com/omaaarsh/Wearly-Clothing-ECommerce-back-end-", href: "https://github.com/omaaarsh/Wearly-Clothing-ECommerce-back-end-" }],
    overview:
      "Wearly is a clothing store. This repository is its backend: a REST API that powers customer accounts, catalog browsing for men, women and kids, a shopping cart and checkout for a separate web front-end.",
    sections: [
      {
        title: "Layered architecture",
        table: {
          head: ["Layer", "Purpose"],
          rows: [
            ["Controllers", "Handle HTTP requests under `/api/v1`, call services, return responses."],
            ["Services", "Business rules and validation; coordinate repository calls."],
            ["Repositories", "Data access with EF Core over SQL Server."],
            ["Models", "Customer, Product, Category, Cart, CartItem, Order and OrderItem, plus DTOs."],
          ],
        },
        body: "All services and repositories are registered through interfaces with dependency injection, which keeps the layers loosely coupled and easy to test.",
      },
      {
        title: "Key flows",
        bullets: [
          { lead: "Accounts:", text: "register, login, logout and auth status. Passwords are hashed with BCrypt; login issues an HttpOnly, SameSite=Lax session cookie with a 30-day sliding expiry. Unauthenticated calls get a JSON 401 instead of a redirect." },
          { lead: "Catalog:", text: "products, product details, categories and gender-filtered lists." },
          { lead: "Cart:", text: "authenticated view, add, update, remove and clear." },
          { lead: "Placing an order:", text: "read the cart → check every product exists and has stock → snapshot the unit price into each order item → compute the total → decrement stock → save the order → clear the cart. Order history is available per customer." },
          { lead: "API quality:", text: "custom validation attributes (password complexity, phone format), a global exception handler with one JSON error shape, and Swagger UI in development." },
        ],
      },
    ],
    posters: [
      { src: wearlyPoster, alt: "Wearly E-Commerce API poster: store screen and layered architecture", caption: "Poster · Wearly E-Commerce API", ...POSTER },
    ],
  },
];
