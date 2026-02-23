export interface Experience {
  company: string;
  role: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  mode: string;
  description: string[];
  tags: string[];
}

export interface Project {
  name: string;
  tagline: string;
  description: string[];
  stack: string[];
  tags: string[];
  github?: string;
  url?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const profile = {
  name: "Alex Kang",
  headline: "Building AI agents infrastructure",
  email: "spockwoz@gmail.com",
  linkedin: "https://www.linkedin.com/in/alex-k-kang",

  about: [
    "As Co-Founder and CTO of SelaNet AI, I lead the development of infrastructure that enables AI agents to operate seamlessly on real websites through distributed browser nodes, semantic data extraction, and orchestration systems. My work focuses on creating solutions for AI challenges like login walls, CAPTCHAs, and complex website interactions while supporting our product strategy, roadmap, and go-to-market efforts.",
    "With over two decades of experience in search platforms, cryptocurrency exchanges, and trading systems, I bring extensive expertise in AI agents, distributed systems, and concurrent engineering. My background in building high-performance, reliable systems shapes my approach to designing AI infrastructure that scales effectively and operates with precision.",
  ],

  experience: [
    {
      company: "SelaNet AI",
      role: "Co-Founder & CTO / Project Lead",
      type: "Full-time",
      period: "2025 - Present",
      duration: "1 yr",
      location: "Seoul, South Korea",
      mode: "On-site",
      description: [
        "Leading technical vision for SelaNet AI \u2014 infrastructure for AI agents to use real websites through real browser environments.",
        "Distributed browser nodes with P2P networking and NAT traversal",
        "Semantic layer that extracts structured data from arbitrary web pages",
        "Orchestration system for multi-step, long-running agent tasks",
        "Product strategy, roadmap, and go-to-market execution",
      ],
      tags: ["AI Agents", "Distributed Systems", "P2P Networking", "Semantic Web", "Product Strategy"],
    },
    {
      company: "BcLabs",
      role: "CTO / CPO | Coinvestor",
      type: "Full-time",
      period: "2024 - 2025",
      duration: "1 yr",
      location: "Seoul, South Korea",
      mode: "On-site",
      description: [
        "Built and operated a cryptocurrency fund investment platform enabling users to access managed crypto strategies.",
        "Led a major UI/UX system overhaul with mobile-first, user-friendly experience",
        "Architected secure wallet and trading integrations with Binance",
        "Designed systems for user asset permissions, execution limits, and risk controls",
        "Built backend services for portfolio tracking, performance reporting, and fund operations",
      ],
      tags: ["Trading Systems", "Crypto", "Binance API", "Risk Controls"],
    },
    {
      company: "Passiver",
      role: "Founder & CTO | PassiverAI",
      type: "Self-employed",
      period: "2023 - 2024",
      duration: "1 yr",
      location: "Seoul, South Korea",
      mode: "On-site",
      description: [
        "Built an AI agent system that writes and publishes long-form blog content autonomously.",
        "LLM-based content generation with SEO optimization (keyword clustering, internal linking)",
        "Automated publishing pipeline across multiple blogging platforms",
        "Long-running agent architecture: scheduling, retries, incremental updates",
        "50 paid users in month one. Content ranked well enough to generate ad revenue by month two.",
      ],
      tags: ["AI Agents", "SEO", "LLM", "Content Automation"],
    },
    {
      company: "Guardian Holdings Inc.",
      role: "CTO | Oasis Crypto Exchange",
      type: "Contract",
      period: "2022 - 2024",
      duration: "2 yrs",
      location: "Seoul, South Korea",
      mode: "Hybrid",
      description: [
        "Served as CTO for a centralized cryptocurrency exchange, owning architecture, scalability, and operational reliability",
        "Forked the Solana blockchain to build a blockchain-based exchange infrastructure",
        "Designed a hybrid model where blockchain nodes, execution engines, and centralized services operate as a coordinated distributed system",
        "Built low-latency trading infrastructure supporting concurrent order processing, matching, and settlement at scale",
        "Led engineering teams on distributed architecture, security, compliance, and system evolution",
      ],
      tags: ["Distributed Systems", "Rust", "Blockchain", "Trading Systems"],
    },
    {
      company: "Alpine Research Inc.",
      role: "Founder & CTO",
      type: "Full-time",
      period: "2017 - 2022",
      duration: "5 yrs",
      location: "Seoul, South Korea",
      mode: "On-site",
      description: [
        "Founded and operated a Web3-focused development company delivering production systems to global clients.",
        "Built cryptocurrency wallets, crypto lending platforms, and trading systems",
        "Designed automated trading platforms with ML-based strategy optimization",
        "Applied ML models to analyze historical market data and optimize trading parameters",
        "Built large-scale data acquisition systems including Google News pipelines and e-commerce scraping",
      ],
      tags: ["Machine Learning", "Web3", "Trading Systems", "Data Engineering", "Browser Automation"],
    },
    {
      company: "Traport Inc.",
      role: "Co-Founder & Technical Lead | TravelHow",
      type: "Full-time",
      period: "2009 - 2017",
      duration: "8 yrs",
      location: "Seoul, South Korea",
      mode: "On-site",
      description: [
        "Co-founded and built a large-scale travel metasearch & booking engine covering flights, hotels, car rentals, and rail.",
        "Korea-localized alternative to Kayak / Skyscanner, from both technical and product perspectives",
        "Achieved sub-3-second flight search latency \u2014 one of the fastest in the world market",
        "Built parallel processing and async request pipelines for search throughput optimization",
        "Scaled to 1M users within 3 months of launch",
      ],
      tags: ["Search Engines", "Concurrent Engineering", "Semantic Web", "High Performance", "Startup"],
    },
    {
      company: "CoolJag Inc.",
      role: "Full Stack Engineer",
      type: "Contract",
      period: "2007 - 2009",
      duration: "2 yrs",
      location: "Taipei, Taiwan",
      mode: "Remote",
      description: [
        "Developed operator-facing admin tools to manage complex business logic and workflows.",
        "Translated non-technical business requirements into reliable backend systems",
      ],
      tags: ["Web Technologies", "C#", "Full Stack"],
    },
    {
      company: "Realtime Travel Solution Inc.",
      role: "Full Stack Engineer | RTS",
      type: "Full-time",
      period: "2005 - 2007",
      duration: "2 yrs",
      location: "Seoul, South Korea",
      mode: "On-site",
      description: [
        "Designed and built a real-time multi-supplier booking & pricing aggregation platform.",
        "Integrated airline GDS, hotel inventory, car rental, rail systems via heterogeneous APIs",
        "Implemented search \u2192 quote \u2192 availability check \u2192 reservation \u2192 settlement pipelines",
        "Supported 100+ B2B clients with white-label deployments",
      ],
      tags: ["Web Technologies", "Semantic HTML", "Real-time Systems", "B2B"],
    },
  ] as Experience[],

  projects: [
    {
      name: "Velros.AI",
      tagline: "AI workforce platform for solo founders",
      description: [
        "AI workforce platform that leverages Claude Code CLI to execute business tasks autonomously while building tradeable AI Playbooks.",
        "Single-session autonomous execution protocol \u2014 Claude self-validates work via native TaskCreate/TaskUpdate without external orchestration",
        "Cross-domain memory system (project, user, marketing, sales) on SurrealDB with graph + document + vector search",
        "7-crate Rust workspace with Tokio async runtime for high-concurrency task execution",
        "Dual-currency token economy: VP (in-app) + $VELROS (BASE blockchain) with burn mechanics and gas abstraction",
        "Playbook grade system (F1 \u2192 SSS, 24 levels) \u2014 knowledge accumulates, improves, and becomes tradeable on marketplace",
      ],
      stack: ["Rust", "Tokio", "SurrealDB", "Redis", "Next.js 16", "React 19", "Supabase", "Telegram Bot", "BASE Blockchain", "Docker"],
      tags: ["AI Agents", "Autonomous Execution", "Token Economy", "Knowledge Graph", "Rust Backend"],
      github: "https://github.com/spock-mark1/velros-ai",
    },
  ] as Project[],

  skills: [
    {
      title: "Core",
      skills: [
        "AI Agents",
        "Distributed Systems",
        "System Architecture",
        "Concurrent Engineering",
        "Search Engines",
        "Trading Systems",
        "Machine Learning",
        "Browser Automation",
      ],
    },
    {
      title: "Languages & Tools",
      skills: [
        "TypeScript",
        "Rust",
        "Python",
        "C#",
        "Go",
        "Node.js",
        "React",
        "Astro",
        "PostgreSQL",
        "Redis",
        "Docker",
        "AWS",
      ],
    },
    {
      title: "Domains",
      skills: [
        "AI Infrastructure",
        "Crypto Exchanges",
        "Web3 / Blockchain",
        "Travel Tech",
        "SEO & Content",
        "Data Engineering",
        "P2P Networking",
        "Product Strategy",
      ],
    },
  ] as SkillCategory[],
};
