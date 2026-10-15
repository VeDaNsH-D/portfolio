import type { AchievementItem, Project, SkillCategory } from '../types/portfolio';

export const PROFILE = {
  name: "Vedansh Dubey",
  education: {
    degree: "B.Tech in Electronics & Telecommunication Engineering",
    institution: "Sardar Patel Institute of Technology (S.P.I.T.), Mumbai",
    cgpa: "8.95 / 10.0",
    graduation: "May 2028",
    startYear: "2024",
  },
  primaryIdentity: "Software Engineer | AI/ML Engineer | Backend & Systems Builder",
  heroHeadline: "I BUILD THINGS THAT SHOULD EXIST.",
  heroCopy:
    "I'm Vedansh Dubey, an engineering student at S.P.I.T. Mumbai, passionate about backend engineering, machine learning, and building intelligent software systems. I enjoy turning complex problems into reliable, deployable products—from distributed workflows and real-time collaboration to ML-driven decision engines.",
  aboutCopy: [
    "I'm an Electronics and Telecommunication Engineering student at S.P.I.T., Mumbai, focused on software engineering, artificial intelligence, and backend systems.",
    "I enjoy building beyond the interface—designing APIs, orchestrating asynchronous workflows, creating collaborative applications, and evaluating machine learning systems with reproducible experiments.",
    "My projects span backend architecture, real-time communication, AI-assisted automation, security analysis, and predictive decision engines.",
    "I continuously sharpen my problem-solving skills through competitive programming and learn by building deployable systems that solve meaningful problems."
  ],
  contact: {
    heading: "LET'S BUILD SOMETHING EXTRAORDINARY.",
    subheading:
      "Have an ambitious idea, an interesting engineering problem, or an opportunity to collaborate? Let's turn it into something real.",
    email: "vedanshdubeyd6@gmail.com",
    github: "https://github.com/VeDaNsH-D",
    linkedin: "https://www.linkedin.com/in/vedansh-dubey-d/",
    leetcode: "https://leetcode.com/u/VeDaNsH-D/",
    resumeUrl: "/Vedansh_Dubey_Resume.pdf",
    location: "Mumbai, India",
  },
};

export const PROJECTS: Project[] = [
  {
    id: "scout",
    name: "Scout",
    dimensionTitle: "Dimension α : Autonomous Orchestration",
    category: "Autonomous AI Workflow Automation & Verifiable Outreach",
    domainFilter: "ai-workflows",
    summary:
      "Full-stack workflow automation and outreach intelligence engine featuring an interactive DAG builder, distributed BullMQ/Redis worker pipelines, predictive ML lead scoring, and Filecoin-anchored immutable audit logs.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "Redis",
      "BullMQ",
      "MongoDB",
      "Socket.IO",
      "Python",
      "Flask",
      "scikit-learn",
      "Filecoin / Lighthouse",
    ],
    githubUrl: "https://github.com/VeDaNsH-D/Scout",
    screenshots: [
      {
        url: "/projects/scout-dashboard.jpg",
        caption: "Real-time campaign analytics, lead scoring distribution, and Filecoin verifiable execution status.",
      },
      {
        url: "/projects/scout-workflow.jpg",
        caption: "Visual DAG flow builder with triggers, ML scoring gates, LLM generation, delays, and dispatchers.",
      },
      {
        url: "/projects/scout-extension.jpg",
        caption: "Manifest V3 Chrome Extension capturing LinkedIn profile intelligence and personalizing outreach paths.",
      },
    ],
    theme: {
      primaryColor: "#8b5cf6",
      secondaryColor: "#3b82f6",
      gradient: "from-violet-600 via-indigo-600 to-blue-600",
      borderGlow: "rgba(139, 92, 246, 0.4)",
      badgeBg: "bg-violet-950/70 border-violet-500/30 text-violet-300",
      badgeText: "text-violet-400",
    },
    caseStudy: {
      problem:
        "Modern growth engineering suffers from fragmented tooling: lead intelligence is collected in isolated scrapers, workflow DAGs run without async queue isolation, LLM generation fails to adapt to recipient context, and execution audit trails are easily altered.",
      solution:
        "Engineered an integrated five-layer platform uniting client-side Chrome ingestion, a React Flow DAG canvas, asynchronous BullMQ/Redis task queues, Python ML inference microservices, and decentralized Filecoin cryptographic anchoring via Lighthouse SDK.",
      architectureFlow: {
        steps: [
          {
            step: "01",
            title: "Ingestion Layer",
            details: "Manifest V3 Chrome Extension and CSV parser capture verified lead attributes into MongoDB.",
          },
          {
            step: "02",
            title: "Workflow DAG Engine",
            details: "Node-based canvas validates graph structure and pushes executable execution units into Redis queues.",
          },
          {
            step: "03",
            title: "Async BullMQ Orchestrator",
            details: "Workers isolate tasks, manage backoff retries, evaluate conditional branches, and emit Socket.IO updates.",
          },
          {
            step: "04",
            title: "ML Scoring & LLM Synthesis",
            details: "Python Flask service applies scikit-learn models for send-time prediction and triggers context-tailored LLM synthesis.",
          },
          {
            step: "05",
            title: "Verifiable Audit Layer",
            details: "Programmatic execution manifests are hashed and committed to Filecoin via Lighthouse for tamper-evident provenance.",
          },
        ],
      },
      coreImplementation: [
        "Architected an infinite-canvas node builder using React Flow with dynamic schema validation for complex branching DAGs.",
        "Constructed a high-throughput job queue with BullMQ and Redis, supporting scheduled delay nodes, concurrency limits, and dead-letter queues.",
        "Integrated dual-phase LLM synthesis (Groq for ultra-low latency drafting + Gemini for structured reasoning) with prompt injection safety guardrails.",
        "Implemented real-time bidirectional status feeds via Socket.IO, streaming node execution states directly to connected clients.",
        "Anchored JSON execution logs onto the decentralized Filecoin network, producing verifiable Content Identifiers (CIDs) per campaign.",
      ],
      mlMethodology: {
        overview: "Predictive Lead Qualification and Optimal Send-Time Classification Microservice.",
        models: ["Random Forest Classifier for Lead Conversion Propensity", "Ridge Regression for Optimal Dispatch Hour Estimation"],
        metrics: ["ROC-AUC: 0.84 on lead qualification dataset", "MAE: 1.2 hours on engagement peak prediction"],
        evaluationDetails:
          "Trained on historical engagement datasets with cross-validation to isolate features such as domain seniority, previous interaction cadence, and industry vertical.",
      },
      challengesAndTradeoffs: [
        "Handling rate limits and socket dropouts during massive burst outreach: Solved with token-bucket rate limiters in BullMQ worker processors.",
        "Ensuring deterministic graph serialization without circular dependency deadlocks: Built topological sorting validation before enqueueing DAG jobs.",
      ],
      verifiedResults: [
        "Successfully orchestrates multi-step DAG workflows across hundreds of concurrent queue jobs.",
        "Filecoin-backed immutable execution records provide end-to-end cryptographic auditability.",
        "Full real-time synchronization between browser extension, web workspace, and background worker queues.",
      ],
      futureImprovements: [
        "Integration of multi-agent collaborative negotiation nodes.",
        "Zero-knowledge proof generation for privacy-preserving verifiable lead compliance.",
      ],
    },
  },
  {
    id: "krypton",
    name: "Krypton AI",
    dimensionTitle: "Dimension β : Multi-Channel Defense",
    category: "AI-Powered Multi-Channel Scam & Threat Defense",
    domainFilter: "security",
    summary:
      "Full-stack cybersecurity platform delivering real-time multi-channel threat detection across web, messaging, email, and live screen streams, combining 7-model AI reasoning with synthesized voice alerts.",
    techStack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "AI Inference APIs",
      "Python ML Services",
      "Twilio Webhooks",
      "Web Speech API",
    ],
    githubUrl: "https://github.com/pallavdeshmukh18/Krypton-Ai",
    demoUrl: "https://india-next-rho.vercel.app/",
    screenshots: [
      {
        url: "/projects/krypton-hero.png",
        caption: "Unified threat analysis console displaying risk score matrix and real-time scanning controls.",
      },
      {
        url: "/projects/krypton-flow.png",
        caption: "Minimalist multi-channel ingestion architecture mapping incoming threat vectors.",
      },
      {
        url: "/projects/krypton-shield.png",
        caption: "Security operations center displaying categorized threat indicators and immediate mitigation steps.",
      },
    ],
    theme: {
      primaryColor: "#f43f5e",
      secondaryColor: "#06b6d4",
      gradient: "from-rose-600 via-red-600 to-cyan-500",
      borderGlow: "rgba(244, 63, 94, 0.4)",
      badgeBg: "bg-rose-950/70 border-rose-500/30 text-rose-300",
      badgeText: "text-rose-400",
    },
    caseStudy: {
      problem:
        "Modern social engineering attacks operate simultaneously across SMS, phishing URLs, malicious prompt injections, audio spoofing, and live screens. Legacy antivirus tools only monitor files and miss multi-modal deception patterns.",
      solution:
        "Built a unified security workspace evaluating suspicious messages, URLs, image attachments, and live screen capture streams via an orchestrated ensemble of 7 specialized AI evaluation models with instant voice warning dispatch.",
      architectureFlow: {
        steps: [
          {
            step: "01",
            title: "Multi-Vector Ingestion",
            details: "Captures messages via WhatsApp/Telegram bots, Chrome Extension, Gmail API, and direct upload.",
          },
          {
            step: "02",
            title: "Live Screen Capture Monitor",
            details: "WebRTC screen stream extracts frame snapshots periodically for visual fraud inspection.",
          },
          {
            step: "03",
            title: "7-Model AI Pipeline",
            details: "Dispatches payload across heuristic filters, URL safety checks, NLP sentiment classifiers, and vision evaluators.",
          },
          {
            step: "04",
            title: "Risk Synthesis Engine",
            details: "Aggregates multi-model outputs into an explainable LOW/MEDIUM/HIGH risk rating with defensive recommendations.",
          },
          {
            step: "05",
            title: "Voice Alert & SOC Dispatch",
            details: "Synthesizes urgent auditory alerts via Web Speech API and logs incidents to searchable MongoDB audit history.",
          },
        ],
      },
      coreImplementation: [
        "Implemented Full-Scan multi-input pipelines that analyze URLs, raw messages, and prompt injections simultaneously in a single coordinated pass.",
        "Engineered live screen stream sampler extracting keyframes without saturating client CPU using HTML5 canvas buffers.",
        "Integrated Web Speech API speech synthesis for proactive auditory voice alerts upon detecting severe fraud attempts.",
        "Constructed webhook listeners for Twilio WhatsApp messaging and Telegram bot APIs for external threat reporting.",
        "Designed clear SecOps UI detailing categorized risk factors, indicator badges, and remediation playbooks.",
      ],
      mlMethodology: {
        overview: "Seven-Model Case Reasoning & Multimodal Fraud Classification.",
        models: ["Domain Heuristic & Homoglyph Matcher", "NLP Phishing Classifier", "Vision-based Rogue Brand Detector", "Prompt Injection Guardrail"],
        metrics: ["Combined Confidence Score (0-100)", "Sub-second triage latency on text payloads"],
        evaluationDetails:
          "Composite weighted voting across rule-based threat signatures and neural inference outputs to eliminate false positives in critical communication channels.",
      },
      challengesAndTradeoffs: [
        "Maintaining low latency during live screen sharing: Optimized by sending throttled compressed frame snapshots only when perceptual difference exceeded a change threshold.",
        "Balancing aggressive scam detection against over-flagging transactional banking SMS: Implemented confidence-weighted scoring with explainable rationale.",
      ],
      verifiedResults: [
        "Live deployed demonstration operating at https://india-next-rho.vercel.app/.",
        "Multi-channel support verified across Gmail, WhatsApp, screen capture, and direct payload submission.",
        "Instant multi-model risk reports featuring explainable indicators and defensive action items.",
      ],
      futureImprovements: [
        "On-device lightweight WebAssembly classifier for zero-network offline screening.",
        "Fine-tuned audio deepfake detection model for live phone call streams.",
      ],
    },
  },
  {
    id: "lattice",
    name: "Lattice",
    dimensionTitle: "Dimension γ : Living Knowledge",
    category: "Collaborative Knowledge Workspace & Living Graph",
    domainFilter: "realtime",
    summary:
      "Real-time collaborative knowledge platform transforming static bookmarking into an active living graph with biological content decay mechanics, Google OAuth, recoverable graveyard, and Redis-scaled WebSockets.",
    techStack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "WebSockets",
      "Redis",
      "WebRTC Signaling",
      "Google OAuth",
    ],
    githubUrl: "https://github.com/VeDaNsH-D/Lattice",
    demoUrl: "https://lattice-cyan.vercel.app/",
    screenshots: [
      {
        url: "/projects/lattice-landing.png",
        caption: "Lattice landing page highlighting the collaborative workspace concept and biological decay philosophy.",
      },
      {
        url: "/projects/lattice-dashboard.png",
        caption: "Personal and team workspace dashboard with link metadata enrichment and health indicators.",
      },
      {
        url: "/projects/lattice-workspace.png",
        caption: "Interactive project canvas showing collaborative bookmarks, role-based controls, and member presence.",
      },
    ],
    theme: {
      primaryColor: "#3b82f6",
      secondaryColor: "#a855f7",
      gradient: "from-blue-600 via-indigo-600 to-purple-600",
      borderGlow: "rgba(59, 130, 246, 0.4)",
      badgeBg: "bg-blue-950/70 border-blue-500/30 text-blue-300",
      badgeText: "text-blue-400",
    },
    caseStudy: {
      problem:
        "Knowledge workers collect hundreds of bookmarks that rot in browser folders. Existing bookmark managers lack collaborative team capabilities, live discussion threads, role governance, and automatic lifecycle management for outdated resources.",
      solution:
        "Architected Lattice: a collaborative workspace that enriches saved links with automated metadata, supports concurrent document collaboration, and introduces biological decay algorithms where unvisited items transition to a recoverable graveyard.",
      architectureFlow: {
        steps: [
          {
            step: "01",
            title: "Ingestion & Scraping",
            details: "Extracts OpenGraph titles, descriptions, and media previews using backend scraping services.",
          },
          {
            step: "02",
            title: "Identity & RBAC",
            details: "Google OAuth & JWT sessions control granular permissions across personal, team, and public lattices.",
          },
          {
            step: "03",
            title: "Real-Time WebSocket Sync",
            details: "Socket.IO backed by Redis Pub/Sub synchronizes cursors, comments, and project node edits across clients.",
          },
          {
            step: "04",
            title: "Decay Engine & Graveyard",
            details: "Calculates relevance decay based on last-visited timestamps, moving stale links into an archive graveyard.",
          },
          {
            step: "05",
            title: "Fork & Discovery Network",
            details: "Allows users to discover public community lattices and fork curated knowledge trees with full attribution.",
          },
        ],
      },
      coreImplementation: [
        "Engineered scalable multi-room collaboration with Socket.IO and the Redis Adapter to enable horizontal backend scaling.",
        "Built WebRTC signaling infrastructure to support real-time audio/video collaboration calls between project members.",
        "Developed an autonomous decay lifecycle worker evaluating timestamp windows: Active -> Decaying -> Dead (Graveyard).",
        "Implemented Google OAuth authentication with session persistence and granular role-based access control (Owner, Editor, Viewer).",
        "Added Chrome extension integration for one-click bookmark capture directly into designated project workspaces.",
      ],
      challengesAndTradeoffs: [
        "WebSocket connection state divergence across node restarts: Resolved by backing transient room state and presence in Redis key-value stores.",
        "Preventing accidental link deletion from decay mechanics: Created a dedicated Graveyard view with one-click reversible restorations.",
      ],
      verifiedResults: [
        "Won Domain Winner in Web Development at SE Hack '26.",
        "Live deployed application serving users at https://lattice-cyan.vercel.app/.",
        "Complete real-time presence, comment threads, and multi-user sync verified under concurrent browser sessions.",
      ],
      futureImprovements: [
        "AI auto-tagging and semantic vector search across bookmarked contents.",
        "CRDT-based text document editing for synchronized rich-text project notes.",
      ],
    },
  },
  {
    id: "voicetrack",
    name: "VoiceTrack",
    dimensionTitle: "Dimension δ : Voice Ledger Engine",
    category: "Multilingual Voice Financial Recording & Mobile Ledger",
    domainFilter: "voice",
    summary:
      "Voice-first mobile and desktop financial bookkeeping engine for vendors, transcribing multilingual speech (Hindi, Hinglish, English) into structured transactional ledgers via a cascading Groq -> Gemini -> OpenAI LLM pipeline.",
    techStack: [
      "React",
      "Vite",
      "Capacitor",
      "Android SDK",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Python",
      "Whisper / STT",
      "FFmpeg",
      "Groq (Llama 3.1 8B)",
      "Gemini 2.5 Flash",
      "Telegram Bot",
    ],
    githubUrl: "https://github.com/VeDaNsH-D/VoiceTrack",
    screenshots: [
      {
        url: "/projects/voicetrack-hero.png",
        caption: "VoiceTrack desktop application interface showing instant voice transcription and transaction parsing.",
      },
      {
        url: "/projects/voicetrack-splash.png",
        caption: "Android Capacitor native mobile client designed for frictionless vendor voice recording.",
      },
    ],
    theme: {
      primaryColor: "#14b8a6",
      secondaryColor: "#94a3b8",
      gradient: "from-teal-500 via-emerald-600 to-slate-400",
      borderGlow: "rgba(20, 184, 166, 0.4)",
      badgeBg: "bg-teal-950/70 border-teal-500/30 text-teal-300",
      badgeText: "text-teal-400",
    },
    caseStudy: {
      problem:
        "Local shopkeepers and micro-merchants struggle with tedious manual bookkeeping. Traditional accounting apps require multiple taps and text entries, creating friction for vernacular speakers who prefer speaking naturally in mixed Hindi/Hinglish.",
      solution:
        "Built VoiceTrack: an app-first mobile (Capacitor Android) and web solution where merchants tap a single mic button to record transactions naturally. Audio is processed via FFmpeg and transcribed, then parsed into structured ledger schemas through a resilient cascading LLM pipeline.",
      architectureFlow: {
        steps: [
          {
            step: "01",
            title: "Voice Capture",
            details: "Capacitor native audio recorder captures speech with local noise filtering on mobile or browser.",
          },
          {
            step: "02",
            title: "Audio Normalization",
            details: "Python service with FFmpeg resamples audio to 16kHz mono WAV for high-accuracy speech-to-text.",
          },
          {
            step: "03",
            title: "Speech-to-Text Ingestion",
            details: "Whisper speech-to-text transcribes conversational Hindi, English, and code-mixed Hinglish phrases.",
          },
          {
            step: "04",
            title: "LLM Extraction Cascade",
            details: "Prioritized model chain: Groq (Llama 3.1 8B Instant @ 560 t/s) -> Gemini 2.5 Flash -> OpenAI fallback.",
          },
          {
            step: "05",
            title: "Ledger State & Alerting",
            details: "Express API writes structured debit/credit records and dispatches transaction receipts via Telegram.",
          },
        ],
      },
      coreImplementation: [
        "Engineered an automated model fallback pipeline (Groq Llama 3.1 -> Gemini 2.5 Flash) preventing outage when API quotas or rate limits occur.",
        "Built a dual-target codebase featuring a native Android mobile build via Capacitor alongside a responsive desktop marketing platform.",
        "Designed strict JSON schema validation for transaction outputs: amount, transaction_type (credit/debit), customer_name, and category.",
        "Implemented FFmpeg automated setup script inside Python microservices for cross-platform audio resampling.",
        "Integrated Telegram bot notification triggers for automated daily ledger summaries to merchants.",
      ],
      challengesAndTradeoffs: [
        "Decommissioning of older cloud LLM models during development: Seamlessly refactored to Llama 3.1 8B Instant achieving ~560 tokens/second processing speeds.",
        "Handling diverse vernacular accents and number phrasing (e.g., 'paanch sau rupaye udhaar'): Constructed few-shot prompting guardrails ensuring reliable numeric extraction.",
      ],
      verifiedResults: [
        "Sub-second voice transaction extraction via ultra-fast Groq inference.",
        "Reliable parsing across Hindi, Hinglish, and English merchant speech samples.",
        "Production-ready Capacitor Android packaging verified in local build workflows.",
      ],
      futureImprovements: [
        "Offline on-device speech transcription using quantized Whisper models.",
        "UPI payment gateway integration for automated debt reconciliation reminders.",
      ],
    },
  },
  {
    id: "relay",
    name: "Relay (RGIT Hack)",
    dimensionTitle: "Dimension ε : Context Handoff Engine",
    category: "Context-Aware Developer Handoff & Real-Time Sync",
    domainFilter: "realtime",
    summary:
      "Enterprise project continuity engine providing structured developer handoffs with completeness validation, multi-channel notifications (Slack, Jira, Notion, WhatsApp), and live Agora RTC/RTM video/chat collaboration.",
    techStack: [
      "React 19",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB Replica Set",
      "Agora RTC & RTM SDK",
      "Selenium",
      "Jira REST API",
      "Notion API",
      "Slack Webhooks",
      "Python AI",
    ],
    githubUrl: "https://github.com/VeDaNsH-D/RGIT_Hack",
    demoUrl: "https://rgit-hack.vercel.app/",
    screenshots: [
      {
        url: "/projects/relay-hero.png",
        caption: "Relay project overview showcasing task continuity, audit tracking, and connected workspace integrations.",
      },
      {
        url: "/projects/relay-dashboard.png",
        caption: "Comprehensive handoff workspace featuring completeness validation and live teammate status indicators.",
      },
    ],
    theme: {
      primaryColor: "#f59e0b",
      secondaryColor: "#6366f1",
      gradient: "from-amber-500 via-orange-600 to-indigo-600",
      borderGlow: "rgba(245, 158, 11, 0.4)",
      badgeBg: "bg-amber-950/70 border-amber-500/30 text-amber-300",
      badgeText: "text-amber-400",
    },
    caseStudy: {
      problem:
        "When engineering ownership transfers between developers, context is lost in fragmented Slack threads, incomplete Jira tickets, and undocumented Notion pages. Critical edge cases go uncommunicated, causing production breakages during handoffs.",
      solution:
        "Engineered Relay: an atomic handoff coordination engine that enforces completeness criteria, synchronizes documents from Jira, Notion, and Slack, alerts stakeholders via WhatsApp Cloud and automated web dispatchers, and hosts live Agora audio/video call suites with real-time transcription.",
      architectureFlow: {
        steps: [
          {
            step: "01",
            title: "Multi-Source Document Ingestion",
            details: "Connectors pull context from Jira Cloud (JQL search), Notion databases, and Slack threads with unified normalization.",
          },
          {
            step: "02",
            title: "Completeness Validation",
            details: "Rule engine verifies prerequisite checklist items (PR links, architectural notes, rollback steps) before submission.",
          },
          {
            step: "03",
            title: "Atomic Ownership Transfer",
            details: "MongoDB replica set transactions execute ownership transitions atomically upon recipient acknowledgement.",
          },
          {
            step: "04",
            title: "Omnichannel Notifications",
            details: "Notification service dispatches across 8 event contracts to WhatsApp Cloud API, Selenium Web automation, and email.",
          },
          {
            step: "05",
            title: "Agora Live Call Suite",
            details: "Integrated Agora RTC video/audio and Agora RTM messaging for real-time live handoff review sessions.",
          },
        ],
      },
      coreImplementation: [
        "Implemented standardized external integration connectors (BaseConnector) and ADF parsers for Jira Cloud, Notion blocks, and Slack messages.",
        "Engineered Agora RTC and RTM collaboration rooms with token TTL generation, microphone state handling, and live transcription streaming.",
        "Built resilient notification dispatchers supporting 8 distinct domain events with bounded retries and exponential backoff.",
        "Implemented WhatsApp Cloud API integration alongside a Selenium-based WhatsApp Web automation adapter for fallback delivery.",
        "Configured atomic transaction boundaries using MongoDB Replica Sets to ensure audit trails cannot become desynchronized.",
      ],
      challengesAndTradeoffs: [
        "Ensuring atomic handoff transitions without distributed deadlocks: Utilized MongoDB multi-document ACID transactions with strict timeout policies.",
        "Maintaining Agora video stream stability with dynamic host token expiration: Engineered background token renewal routines with graceful fallback to RTM text chat.",
      ],
      verifiedResults: [
        "Live deployment operational at https://rgit-hack.vercel.app/.",
        "Complete test suite covering all 8 notification contracts, Jira ADF normalizers, and MongoDB session invitations.",
        "Seamless Agora audio/video handoff rooms with low-latency real-time participant state sync.",
      ],
      futureImprovements: [
        "LLM-generated handoff risk score based on pull request complexity and code churn.",
        "Automated GitHub action hooks to trigger handoffs on PR merge.",
      ],
    },
  },
  {
    id: "recoverai",
    name: "RecoverAI",
    dimensionTitle: "Dimension ζ : Causal Decision Engine",
    category: "ML-Driven Payment Recovery & Causal Decision Engine",
    domainFilter: "decision-ml",
    summary:
      "Autonomous machine learning decision engine for subscription payment failures, evaluating recovery strategies (retry, payment link, reminder, escalation, no-action) through action-specific models with audited net-value optimization.",
    techStack: [
      "Python",
      "FastAPI",
      "scikit-learn",
      "SQLite",
      "Logistic Regression",
      "Gradient Boosting",
      "LLM Integrations",
      "Pytest",
    ],
    githubUrl: "https://github.com/VeDaNsH-D/RecoverAI",
    screenshots: [
      {
        url: "/projects/recoverai-hero.png",
        caption: "RecoverAI landing console showcasing 5-stage causal lifecycle and net-value optimization policy.",
      },
      {
        url: "/projects/recoverai-pipeline.png",
        caption: "Action-specific predictive pipeline evaluating expected recovery rates across merchant accounts.",
      },
      {
        url: "/projects/recoverai-funnel.png",
        caption: "Analytics funnel comparing causal ML uplift against standard rule-based payment retry baselines.",
      },
    ],
    theme: {
      primaryColor: "#10b981",
      secondaryColor: "#eab308",
      gradient: "from-emerald-500 via-teal-600 to-amber-500",
      borderGlow: "rgba(16, 185, 129, 0.4)",
      badgeBg: "bg-emerald-950/70 border-emerald-500/30 text-emerald-300",
      badgeText: "text-emerald-400",
    },
    caseStudy: {
      problem:
        "SaaS payment retries rely on naive, static schedules (e.g. retry every 24 hours). This causes high card scheme decline fees, churns annoyed customers through spam reminders, and fails to optimize the net recovery value when processing costs are factored in.",
      solution:
        "Engineered an autonomous decision engine with action-specific predictive models (retry, payment link, email reminder, human escalation, no-action). Computes Expected Net Recovery Value (ENRV = P(Recovery|Action) * Amount - ActionCost) under deterministic safety guardrails.",
      architectureFlow: {
        steps: [
          {
            step: "01",
            title: "Failure Signal Ingestion",
            details: "FastAPI endpoints ingest failed payment events, customer tenure, card brand, and decline error codes.",
          },
          {
            step: "02",
            title: "Customer-Level Data Separation",
            details: "Strict train/val/test splits partitioned at the customer level to eliminate data leakage across repeated attempts.",
          },
          {
            step: "03",
            title: "Action-Specific Inference",
            details: "Predicts recovery probability independently for each potential remediation channel using Gradient Boosting & Logistic Regression.",
          },
          {
            step: "04",
            title: "Net-Value Optimization & Guardrails",
            details: "Applies cost optimization matrix, maximum retry caps, and cooling-off constraints before issuing a policy decision.",
          },
          {
            step: "05",
            title: "Auditable State Machine",
            details: "Idempotent recovery operations record every state transition and policy decision for forensic financial auditability.",
          },
        ],
      },
      coreImplementation: [
        "Constructed action-specific ML estimators trained on customer-level separated historical dunning records.",
        "Implemented deterministic decision layer factoring card scheme fee matrices, merchant tier, and customer churn risk.",
        "Enforced strict idempotency keys across all recovery execution triggers to eliminate double-charging risks.",
        "Built comprehensive FastAPI service endpoints for real-time decision inference, recovery queue inspection, and backtesting.",
        "Structured automated reproducible test suites with pytest validating mathematical policy constraints and safety boundaries.",
      ],
      mlMethodology: {
        overview: "Causal Action-Specific Expected Net Value Optimization.",
        models: ["Logistic Regression (Interpretable baseline)", "Gradient Boosting Classifier (Champion Policy)"],
        metrics: [
          "+8.93% Net Recovery Uplift over Rule-Based Baseline in reported benchmark results",
          "Brier Score: 0.12 (Calibration accuracy across recovery probabilities)",
          "Customer-level grouped K-fold validation eliminating temporal data leakage",
        ],
        evaluationDetails:
          "Reported benchmark evaluation proved the champion Gradient Boosting policy achieved 8.93% higher net recovery than traditional fixed rule-based dunning schedules by preventing expensive retries on dead accounts.",
      },
      challengesAndTradeoffs: [
        "Preventing optimistic bias when evaluating counterfactual payment recovery actions: Utilized customer-level separation to prevent data leakage.",
        "Balancing aggressive recovery with user retention: Engineered strict cooling-off guardrails preventing over-communication.",
      ],
      verifiedResults: [
        "Reported benchmark result: Champion policy achieved 8.93% higher net recovery than the rule-based baseline.",
        "100% auditable deterministic state transitions for all financial recovery operations.",
        "Comprehensive automated evaluation workflows validating reproducibility.",
      ],
      futureImprovements: [
        "Contextual multi-armed bandit (LinUCB) integration for online adaptive policy exploration.",
        "Real-time webhook integration with Stripe and Razorpay billing pipelines.",
      ],
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming",
    iconName: "Code2",
    description: "Core algorithmic foundations, type safety, and systems programming.",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "C++", highlight: "Competitive Programming & High Performance" },
      { name: "Java", highlight: "OOP & Enterprise Architecture" },
      { name: "Python", highlight: "ML Engines, Data Pipelines & FastAPI" },
      { name: "SQL", highlight: "Relational Modeling & Complex Queries" },
      { name: "JavaScript (ES6+)", highlight: "Asynchronous Node.js & Modern Standards" },
    ],
  },
  {
    category: "Backend & APIs",
    iconName: "Server",
    description: "High-throughput servers, microservices, asynchronous queues, and real-time sockets.",
    color: "from-purple-500 to-indigo-500",
    skills: [
      { name: "Node.js", highlight: "Event-driven asynchronous runtime" },
      { name: "Express", highlight: "RESTful services & middleware pipelines" },
      { name: "FastAPI", highlight: "High-performance Python ASGI APIs" },
      { name: "Flask", highlight: "Microservices for ML inference" },
      { name: "REST APIs", highlight: "Contract design, auth, and pagination" },
      { name: "WebSockets", highlight: "Bidirectional low-latency streaming" },
    ],
  },
  {
    category: "Frontend",
    iconName: "Layout",
    description: "Responsive, stateful, and accessible user interfaces.",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", highlight: "State management, custom hooks, and modern UI" },
    ],
  },
  {
    category: "Data & Infrastructure",
    iconName: "Database",
    description: "Distributed storage, caching layers, containerization, and cloud deployment.",
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "MongoDB", highlight: "Document stores & replica set transactions" },
      { name: "PostgreSQL", highlight: "ACID relations & indexed performance" },
      { name: "Redis", highlight: "Distributed caching, Pub/Sub & BullMQ queues" },
      { name: "Docker", highlight: "Containerization & reproducible environments" },
      { name: "Git", highlight: "Branching workflows, hooks & CI/CD collaboration" },
      { name: "Postman", highlight: "API testing suites & integration contracts" },
      { name: "Vercel", highlight: "Frontend & edge serverless deployments" },
      { name: "Render", highlight: "Backend web services & worker hosting" },
    ],
  },
  {
    category: "AI / ML",
    iconName: "BrainCircuit",
    description: "Predictive decision engines, speech-to-text pipelines, and LLM orchestration.",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "scikit-learn", highlight: "Classification, regression, cross-validation & pipelines" },
      { name: "LLM APIs", highlight: "Groq, Gemini & multi-model orchestration with fallback" },
      { name: "Speech-to-Text", highlight: "Multilingual transcription & audio processing" },
      { name: "Generative AI", highlight: "Structured schema generation & prompt guardrails" },
    ],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "spit-academics",
    title: "Sardar Patel Institute of Technology (S.P.I.T.), Mumbai",
    roleOrResult: "CGPA: 8.95 / 10.0",
    organization: "B.Tech Engineering • Class of 2028",
    date: "June 2024 – May 2028",
    badge: "Academic Distinction",
    description:
      "Maintaining an 8.95/10.0 CGPA with core coursework in Operating Systems, Database Management Systems, Object-Oriented Programming, Data Structures and Algorithms, and Computer Networks.",
    category: "academics",
  },
  {
    id: "team-nodetorious",
    title: "Team Lead & Backend Developer",
    roleOrResult: "Team Lead (Squad of 4)",
    organization: "Team NODEtorious • National & International Hackathons",
    date: "August 2025 – Present",
    badge: "Leadership & Architecture",
    description:
      "Led a cross-functional team of 4 engineers at multiple national and international hackathons, owning end-to-end backend architecture, distributed queues, deployment, and technical coordination under 24–48 hour deadlines.",
    category: "leadership",
  },
  {
    id: "se-hack-winner",
    title: "SE Hack '26",
    roleOrResult: "Domain Winner in Web Development",
    organization: "SE Hackathon 2026",
    date: "April 2026",
    badge: "1st Place Domain Winner",
    description:
      "Won 1st Place in the Web Development domain for building Lattice — an active living knowledge workspace featuring biological link decay mechanics and Redis-scaled real-time collaboration.",
    category: "hackathon",
  },
  {
    id: "coherence-runner-up",
    title: "Coherence '26",
    roleOrResult: "First Runner-Up",
    organization: "Coherence Hackathon 2026",
    date: "2026",
    badge: "1st Runner-Up",
    description:
      "Secured First Runner-Up for architecting high-impact engineering solutions under intense 36-hour sprint conditions with Team NODEtorious.",
    category: "hackathon",
  },
  {
    id: "hack-o-infinity",
    title: "Hack-o-Infinity 2025",
    roleOrResult: "Second Place",
    organization: "Hack-o-Infinity 2025",
    date: "2025",
    badge: "2nd Place Podium",
    description:
      "Awarded 2nd Place nationally for developing robust, scalable prototype systems addressing critical technical problems.",
    category: "hackathon",
  },
  {
    id: "laserhacks-usa",
    title: "LaserHacks USA 2025",
    roleOrResult: "Grand Finalist (Top 6 HealthTech)",
    organization: "LaserHacks International",
    date: "2025",
    badge: "International Grand Finalist",
    description:
      "Selected as one of the Top 6 HealthTech Grand Finalists internationally, representing collegiate engineering innovation on a global stage.",
    category: "hackathon",
  },
  {
    id: "codeforces-pupil",
    title: "Competitive Programming Excellence",
    roleOrResult: "Codeforces Pupil • Rating 1240",
    organization: "Codeforces / LeetCode / CodeChef",
    date: "Ongoing",
    badge: "Rating 1240 (5 Contests)",
    description:
      "Achieved Pupil rank on Codeforces within just 5 contests (Current Rating: 1240). Solved 200+ algorithmic and data structure problems across Codeforces, LeetCode, and CodeChef.",
    category: "competitive-programming",
  },
  {
    id: "ecwoc-mentor",
    title: "Open Source Contributor & Mentor",
    roleOrResult: "Backend Contributor & Student Mentor",
    organization: "Elite Coders Winter of Code (ECWoC '25)",
    date: "Winter 2025",
    badge: "Open Source Leadership",
    description:
      "Contributed to community-driven open source repositories through backend optimization, critical bug fixes, and codebase-level debugging while mentoring aspiring student developers.",
    category: "leadership",
  },
  {
    id: "book-chapter-author",
    title: "Research Publication / Book Chapter",
    roleOrResult: "First Author",
    organization: "Annual International Conference on Industry 5.0",
    date: "Published / Presented",
    badge: "First Author Book Chapter",
    description:
      "First author of the book chapter 'Tech-ESG Nexus in the Banking Sector: Finance, AI and Digital Transformation', presenting research on artificial intelligence governance and digital sustainability in enterprise banking.",
    category: "publication",
  },
];
