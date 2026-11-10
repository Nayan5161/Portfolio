export const profile = {
  name: "Nayan Gaikwad",
  headline: "Cybersecurity | Software Development | Backend Engineering | Security Research",
  title: "Software Developer | Cybersecurity Enthusiast | Backend Developer",
  intro:
    "I am a Computer Science and Information Technology (Cyber Security) undergraduate at Symbiosis Skills and Professional University, Pune. I have practical experience through cybersecurity internships, backend development, security testing, and technical projects. I enjoy building useful applications, understanding system behaviour, solving technical problems, and exploring the intersection of software engineering and cybersecurity.",
  phone: "+91 9766387971",
  email: "nayangaikwad5161@gmail.com",
  location: "Pune, Maharashtra, India",
  github: "https://github.com/Nayan5161",
  linkedin: "https://www.linkedin.com/in/nayan-gaikwad-link/",
  availability:
    "Open to software development, backend engineering, cybersecurity internships, graduate opportunities, and technical collaborations.",
};

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "achievements", label: "Achievements" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "I am pursuing a B.Tech in Computer Science and Information Technology (Cyber Security) at Symbiosis Skills and Professional University, Pune. So far that has meant three cybersecurity internships and a run of technical projects that sit between software engineering and security.",
    "I like understanding how software systems work, finding where they break, and building the fix. That has taken me through backend work in Python and FastAPI, containerised lab environments, web and API security testing, and forensic tooling.",
  ],
  exposure: [
    "Backend development",
    "Python programming",
    "REST API development",
    "Docker and containerization",
    "Web application security",
    "Vulnerability assessment",
    "Network security",
    "Cybersecurity lab development",
    "Security testing",
    "Digital forensics",
    "Security automation",
    "Threat research",
    "Technical documentation",
  ],
  strengths: [
    "Analytical thinking",
    "Problem solving",
    "Quick learning",
    "Adaptability",
    "Team collaboration",
    "Attention to detail",
    "Technical curiosity",
  ],
};

export const skills: { title: string; note?: string; items: string[] }[] = [
  { title: "Programming & Scripting", items: ["Python", "JavaScript", "SQL", "PowerShell", "Bash", "HTML", "CSS", "JSON", "Regular Expressions"] },
  { title: "Frontend Development", items: ["HTML5", "CSS3", "JavaScript", "React.js"] },
  { title: "Backend & APIs", items: ["Python", "FastAPI", "Flask", "REST APIs", "GraphQL", "API Security", "JSON"] },
  { title: "Infrastructure & Systems", items: ["Docker", "Docker SDK", "Docker Compose", "Linux", "Windows", "Ubuntu", "Kali Linux", "Nginx", "Gunicorn", "Apache Guacamole", "VPS/SSH administration"] },
  { title: "Databases & Dev Tools", items: ["SQLite", "MongoDB", "Git", "GitHub", "GitHub Actions", "SonarQube"] },
  { title: "Networking", note: "Fundamentals and practical exposure.", items: ["TCP/IP", "DNS", "HTTP/HTTPS", "SSH", "Ports and Services", "Client-Server Architecture", "Basic Routing", "Container Networking", "Network Troubleshooting"] },
  { title: "Cybersecurity", items: ["Vulnerability Assessment", "VAPT", "Penetration Testing", "Web Application Security", "API Security", "Network Security", "Reconnaissance", "OWASP Top 10 Awareness", "Security Testing", "CTF Challenge Development", "Digital Forensics", "Threat Intelligence", "Security Automation"] },
  { title: "Security Tools", items: ["Burp Suite", "Nmap", "Wireshark", "Nessus", "OpenVAS", "Nuclei", "Metasploit"] },
  { title: "Security Operations & Analysis", items: ["Log Analysis", "Windows Event Logs", "Sysmon", "Linux System Logs", "SIEM Fundamentals", "Splunk — Training/Lab Exposure", "ELK — Training/Lab Exposure", "MITRE ATT&CK", "Cyber Kill Chain", "Threat Intelligence Fundamentals", "Phishing Analysis", "Network Traffic Analysis", "False-Positive Triage"] },
];

export const grc = {
  title: "Basic Academic Knowledge — Semester VI",
  note: "Basic academic knowledge through Semester VI coursework.",
  items: ["GRC Fundamentals", "GDPR", "PCI-DSS", "DPDPA 2023", "NIST CSF 2.0", "ISO/IEC 27001", "ISMS", "Risk Assessment", "Data Privacy"],
};

export const experience = [
  {
    company: "Knight Secured",
    role: "Cybersecurity Intern",
    location: "Pune, Maharashtra, India",
    duration: "June 2026 – July 2026",
    project: "Auto-Lab-Forge",
    points: [
      "Contributed to Auto-Lab-Forge, a browser-accessible cybersecurity laboratory using Python, FastAPI, Docker, Docker SDK, and Apache Guacamole.",
      "Developed and tested GraphQL Introspection Abuse and SSRF via PDF Generator challenges.",
      "Worked on isolated containerized lab environments and browser-based access workflows.",
      "Performed endpoint discovery and API security testing, including authentication and input-validation checks.",
      "Conducted functional testing, debugging, workflow validation, and technical documentation.",
    ],
    tech: ["Python", "FastAPI", "Docker", "Docker SDK", "Apache Guacamole", "Linux", "REST APIs"],
  },
  {
    company: "XIT Softech OPC Pvt. Ltd.",
    role: "Cybersecurity Intern",
    location: "Pune, Maharashtra, India",
    duration: "June 2025 – August 2025",
    points: [
      "Conducted vulnerability assessment and penetration testing on web applications and networks.",
      "Performed reconnaissance, scanning, and service discovery.",
      "Identified exposed services, misconfigurations, and security weaknesses.",
      "Researched financial cyber-fraud techniques, including ATM skimming and card cloning.",
      "Documented security findings and worked with responsible-disclosure-oriented assessment workflows.",
    ],
    tech: ["Burp Suite", "Nmap", "OpenVAS"],
  },
  {
    company: "Y.Hills Edutech Pvt. Ltd.",
    role: "Cyber Analyst Intern (Red Team)",
    location: "Remote",
    duration: "June 2024 – August 2024",
    points: [
      "Conducted reconnaissance and vulnerability scanning across web and network targets.",
      "Performed penetration-testing activities and controlled exploitation simulations.",
      "Analyzed identified weaknesses and documented security findings.",
      "Prepared mitigation recommendations for identified vulnerabilities.",
    ],
    tech: [] as string[],
  },
];

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  categories: string[];
  status: string;
  period?: string;
  summary: string;
  problem: string;
  contribution: string[];
  implementation: string[];
  tech: string[];
  flow?: string[];
  repo: string;
  featured?: boolean;
  topics?: string[];
  fullTitle?: string;
};

export const projects: Project[] = [
  {
    id: "auto-lab",
    title: "Auto Lab",
    subtitle: "Browser-Based Cybersecurity Laboratory / CTF Platform",
    categories: ["Backend Development", "Cybersecurity", "Infrastructure"],
    status: "Contributed during internship",
    summary:
      "A browser-accessible cybersecurity laboratory platform that provides practical lab environments without requiring participants to install and configure virtual machines locally.",
    problem:
      "Hands-on security practice usually needs local virtual machines to be installed and configured first. Auto Lab removes that setup by delivering lab environments through the browser.",
    contribution: [
      "Contributed to backend and laboratory workflows using Python and FastAPI.",
      "Used Docker and Docker SDK for containerized lab environments.",
      "Integrated browser-based lab access using Apache Guacamole.",
      "Developed and tested GraphQL Introspection Abuse and SSRF via PDF Generator security scenarios.",
      "Performed testing, debugging, validation, and documentation.",
    ],
    implementation: [
      "FastAPI backend orchestrating lab lifecycle through the Docker SDK.",
      "Isolated containers per lab environment.",
      "Apache Guacamole as the browser gateway to lab desktops.",
    ],
    tech: ["Python", "FastAPI", "Docker", "Docker SDK", "Apache Guacamole"],
    repo: "Private Repository",
    featured: true,
  },
  {
    id: "jocky",
    title: "JOCKY",
    subtitle: "Computer & Network Forensics | SIH 2026",
    categories: ["Digital Forensics", "Backend Development", "Security Research"],
    status: "In Progress",
    period: "August 2026 – Present",
    summary:
      "A structured computer and network forensic investigation framework that organizes system and network evidence through a dedicated runtime architecture and Linux-based collection modules.",
    problem:
      "Forensic evidence from systems and networks is scattered across many sources and formats. JOCKY aims to express an investigation in a structured language and collect the results as consistent, stored evidence.",
    contribution: [
      "Linux system, process, network, and service collectors",
      "Structured evidence model and runtime dispatcher",
      "FastAPI controller with API endpoints and statistics",
      "SQLite evidence persistence",
      "React dashboard, integration and testing",
    ],
    implementation: [
      "Investigations are written in a dedicated JOCKY source language, compiled through a lexer, parser, AST and semantic validation into a Forensic Intermediate Representation.",
      "A runtime dispatcher routes the IR to OS-specific collectors that return structured evidence.",
      "Evidence is exposed through FastAPI, stored in SQLite and reviewed in a React dashboard.",
    ],
    tech: ["Python", "FastAPI", "SQLite", "React.js", "Linux"],
    flow: ["Investigator", "JOCKY Source", "Lexer", "Parser", "AST", "Semantic Validation", "Forensic IR", "Runtime Dispatcher", "OS-Specific Collectors", "Structured Evidence", "FastAPI Controller", "SQLite", "React Dashboard"],
    repo: "Private Repository",
    featured: true,
  },
  {
    id: "scanner",
    title: "Agent-less Vulnerability Scanner",
    subtitle: "SIH 2024",
    categories: ["Security Automation", "Windows Security"],
    status: "Completed",
    period: "August 2024 – December 2024",
    summary:
      "A Windows-based agentless security scanner that performs automated system and network checks without installing client-side agents.",
    problem:
      "Checking Windows machines normally means deploying agents on each one. This scanner runs its checks remotely and reports the results without client-side installation.",
    contribution: [
      "Built PowerShell-based scanning and automation workflows.",
      "Implemented port checks and service detection.",
      "Added system configuration checks.",
      "Used a JavaScript frontend to present scan results.",
      "Generated structured security reports.",
    ],
    implementation: [
      "PowerShell automation for scanning and checks.",
      "JavaScript frontend for presenting results.",
      "Structured report output.",
    ],
    tech: ["PowerShell", "JavaScript", "Windows"],
    repo: "Private Repository",
    featured: true,
  },
];

export const research: Project[] = [
  {
    id: "mcp",
    title: "MCP Security Scanner",
    subtitle: "Explainable Security Assessment Framework",
    fullTitle:
      "MCP Security Scanner: An Explainable Security Assessment Framework for Detecting Tool Poisoning and Capability-Purpose Mismatch in MCP-Based AI Agents",
    categories: ["AI Security", "Security Research"],
    status: "Research in Progress",
    period: "August 2026 – Present",
    summary:
      "Researching an explainable pre-execution assessment framework that analyzes MCP tool descriptions, capabilities, and suspicious instructions to identify possible tool-poisoning and capability-purpose mismatch risks.",
    problem:
      "AI agents trust the metadata of the tools they are given. Hidden instructions or capabilities that do not match a tool's stated purpose can be abused, and should be assessed before the tool is executed.",
    contribution: [],
    implementation: [],
    topics: [
      "Model Context Protocol (MCP) security",
      "Tool poisoning",
      "Suspicious instructions in tool metadata and descriptions",
      "Capability analysis",
      "Capability-purpose mismatch",
      "Rule-based security analysis",
      "Semantic analysis",
      "Explainable risk scoring",
      "Pre-execution security assessment",
      "SAFE / REVIEW / BLOCK decision concept",
    ],
    tech: [],
    repo: "Not public",
  },
  {
    id: "nexedge",
    title: "NexEdge Vault",
    subtitle: "Passwordless, Post-Quantum Zero-Knowledge Private Cloud",
    fullTitle:
      "NexEdge Vault: A Passwordless, Post-Quantum, Zero-Knowledge Private Cloud with Offline OTP-Based Persistent Vault Unlock",
    categories: ["Cryptography", "Privacy Engineering", "Security Research"],
    status: "Research in Progress",
    period: "August 2026 – Present",
    summary:
      "Researching a privacy-focused cloud vault architecture combining passwordless authentication, post-quantum cryptographic concepts, and offline OTP-based key derivation. This is research and design work, not a finished product.",
    problem:
      "Private cloud storage usually depends on passwords and classical cryptography. This work explores a vault design that removes passwords and considers post-quantum threats.",
    contribution: [],
    implementation: [],
    topics: [
      "Passwordless authentication",
      "WebAuthn",
      "Passkeys",
      "Post-quantum cryptography",
      "Hybrid cryptographic design",
      "AES-GCM",
      "ML-KEM",
      "ML-DSA",
      "Offline OTP-based key derivation",
      "Secure/private data storage",
      "Zero-knowledge/private-cloud architecture",
    ],
    tech: [],
    repo: "Not public",
  },
];

export const archive = [
  { title: "Node Ghost — Portable Hardware Security Tool", tech: ["ESP32"], text: "Built a portable hardware-based wireless reconnaissance and network-discovery device that captured Wi-Fi signals and analyzed access-point security configurations." },
  { title: "Quantum Email Encrypted Messaging System", tech: [] as string[], text: "Developed an encrypted email communication platform and explored cryptographic mechanisms to protect message confidentiality and integrity." },
  { title: "Infrastructure and Database Security Auditing", tech: ["Nmap", "Nessus", "Virtual Machines"], text: "Performed penetration testing on virtual machines and simulated SQL injection attacks to analyze database security posture." },
  { title: "Sentinel SOC — Security Operations Dashboard", tech: ["Python", "Flask", "MongoDB", "APIs", "JavaScript", "SSE"], text: "A security operations dashboard project exploring event ingestion, validation and normalization, deterministic detection logic, incident correlation and live Server-Sent Events updates. It was built against a test/synthetic event source; real endpoint telemetry was a later goal and is not claimed." },
];

export const achievements = [
  "Best Paper Award — Internal College Mini Conference, Cloud Computing and Enterprise Technologies, SSPU.",
  "2nd Runner-up — Flag Hunter Cyber Hackathon 2025, DYP DPU.",
  "4th Place — CREST CTF 2026, PCU.",
  "Participated in 15+ hackathons, including SIH 2024–2026.",
  "Participated in 5+ university-level hackathons and CTFs.",
];

export const certification = "Certified Threat Intelligence and Governance Analyst (CTIGA)";
export const training = [
  "CCNA Training Course — iMedita (2026)",
  "TryHackMe — SOC Level 1",
  "TryHackMe — Cyber Security 101",
  "TryHackMe — Pre-Security",
  "TryHackMe — Hacker Holidays",
  "Learn to Hack — Introduction to Bug Bounty",
  "Y.Hills Edutech — Cybersecurity Internship",
];

export const education = {
  degree: "Bachelor of Technology (B.Tech)",
  field: "Computer Science and Information Technology (Cyber Security)",
  school: "Symbiosis Skills and Professional University (SSPU)",
  place: "Kiwale, Pune, Maharashtra, India",
  graduation: "July 2027 (Expected)",
  cgpa: "8.9+",
};
