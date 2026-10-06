// Single source of truth for the site's content. Update here, not in components.

export const profile = {
  name: 'Tanay Shah',
  role: 'Backend Engineer · Applied AI',
  headline: 'I build AI systems that hold up in production.',
  intro:
    "Backend engineer with 5+ years of experience, focused on applied AI and application security. I take LLM agents out of the demo and into customers' real pipelines: validating vulnerabilities, shipping fixes into IDEs and CI/CD.",
  links: {
    email: 'tanayshah027@gmail.com',
    github: 'https://github.com/Tanay-27',
    linkedin: 'https://www.linkedin.com/in/tanayshah27',
  },
  now: {
    where: 'Appknox · SDE-2',
    text: 'Building LangGraph agents that validate security findings in sandboxes, and an MCP integration that pushes fixes straight into developer IDEs.',
  },
  stats: [
    { value: '5+', label: 'years in backend & full-stack' },
    { value: '3M+', label: 'apps in the threat intelligence pipeline' },
    { value: '~50%', label: 'API response time cut at LTIMindtree' },
  ],
};

export const principles = [
  {
    title: 'Context first',
    text: 'A model is only as good as what it gets to reason over. I spend most of my effort on retrieval, feature engineering and the context an agent is handed.',
  },
  {
    title: 'Verify, then trust',
    text: 'Sandboxes and automated verification loops turn model output into evidence, so findings are validated before a developer ever sees them.',
  },
  {
    title: 'Ship into real workflows',
    text: 'Public REST APIs, async workers, CI/CD hooks and IDE integrations, so the output lands where teams already work.',
  },
];

export const experience = [
  {
    company: 'Appknox',
    role: 'Software Development Engineer (SDE-2)',
    period: 'Apr 2024 – Present',
    stack: ['Python', 'LangGraph', 'Qdrant', 'Docker', 'Kubernetes'],
    highlights: [
      'Engineered and deployed an AI-driven vulnerability validation platform on LangGraph that automates SAST/DAST signal analysis to eliminate false positives for enterprise client workflows.',
      'Built an automated remediation engine that turns complex findings into context-aware code patches and actionable developer guidance.',
      'Designing a Model Context Protocol (MCP) integration to push automated security fixes directly into developer IDEs, closing the loop between detection and remediation.',
      'Developed an AI-assisted pentesting framework on sandboxed, containerized environments so developers can run guided dynamic tests without deep offensive security expertise.',
      'Engineered a mobile threat intelligence pipeline processing 3M+ apps across global app stores, using metadata feature engineering, logo similarity models and vector search.',
      'Designed public-facing REST APIs and async worker architectures so enterprise customers can integrate automated security scans into their CI/CD pipelines.',
    ],
  },
  {
    company: 'LTIMindtree',
    role: 'Senior Software Engineer',
    period: 'Jul 2021 – Apr 2024',
    stack: ['MEAN Stack', 'Python', 'Azure DevOps', 'Jenkins'],
    highlights: [
      'Delivered 15+ product features using reusable component design, improving development efficiency and maintainability.',
      'Optimized APIs and database queries through indexing, query refactoring and caching, reducing response times by ~50%.',
      'Integrated Microsoft Graph API, implemented unit testing and resolved security issues to strengthen application stability.',
      'Mentored junior developers and interns, supporting onboarding and code quality.',
    ],
  },
  {
    company: 'LifeSpark Technologies',
    role: 'Embedded Systems & Machine Learning Intern',
    period: 'Nov 2020 – Jun 2021',
    stack: ['Python', 'EDA', 'Embedded C'],
    highlights: [
      "Contributed to an ML-based assistive prototype for Parkinson's patients using IMU data and embedded system integration.",
    ],
  },
];

export const skills = [
  { group: 'Backend', items: ['Python', 'Django', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Celery', 'REST APIs'] },
  { group: 'Applied AI & Agents', items: ['LangGraph', 'Agent Harnesses', 'RAG Pipelines', 'Qdrant', 'Feature Engineering', 'MCP'] },
  { group: 'Security', items: ['SAST/DAST Tooling', 'Mobile App Security', 'Vulnerability Analysis', 'Security Testing Workflows'] },
  { group: 'Infrastructure', items: ['Docker', 'Kubernetes', 'CI/CD', 'Azure DevOps', 'Jenkins'] },
  { group: 'Frontend (prior)', items: ['Angular', 'React', 'MEAN Stack'] },
];

export const education = [
  { school: 'Vidyalankar Institute of Technology', degree: 'B.E. Electronics & Telecommunication', detail: '9.42 CGPA', period: '2017 – 2021' },
];

export const achievements = [
  { title: 'Project Synergy Award, Appknox', year: '2025', text: 'Versatile contributions and strong collaboration across critical production initiatives.' },
  { title: 'Airflow Fundamentals Certification', year: '2024', text: 'Workflow orchestration and data pipeline concepts.' },
  { title: 'Appreciation Award: Creativity & Innovation', year: '2022', text: 'Recognized for technical contributions and problem-solving.' },
  { title: 'HackerEarth Deep Learning Challenge', year: '2021', text: 'Ranked within the top 100 participants.' },
];

export const projects = [
  {
    name: 'AI-Assisted Mobile App Protection Analysis',
    status: 'Ongoing',
    description:
      'Automated framework that analyzes Android apps for runtime protections such as RASP, anti-tampering and instrumentation detection. Combines APK analysis, a sandboxed run and LLM-guided UI interaction to observe how an app responds.',
    tech: ['Python', 'Frida', 'LLM workflows', 'Docker'],
  },
  {
    name: 'farfetch',
    status: 'Active',
    description:
      'Keyboard-driven TUI REST client in Rust. Git-branch-aware environments, smart cURL import and persistent collections, in under 15 MB of RAM.',
    tech: ['Rust', 'TUI'],
    url: 'https://github.com/Tanay-27/farfetch',
  },
  {
    name: 'anamnesis',
    status: 'Active',
    description:
      'Tiered agent memory for personal health tracking. Daily logs are compressed into an index, then rolled up into long-term memory behind a human review checkpoint.',
    tech: ['Python', 'FastAPI', 'MCP'],
    url: 'https://github.com/Tanay-27/anamnesis',
  },
  {
    name: 'truenorth',
    status: 'Active',
    description:
      'Research and backtesting framework for NSE swing-trading strategies: data import, walk-forward validation, daily screening and paper trading.',
    tech: ['Python', 'Backtesting'],
    url: 'https://github.com/Tanay-27/truenorth',
  },
  {
    name: 'CodeHarbour',
    status: 'Completed',
    description:
      'Interactive web-based code editor with API-based compilation and execution, plus collaboration features for sharing solutions.',
    tech: ['Python', 'React', 'Node.js'],
  },
  {
    name: 'This website',
    status: 'Active',
    description: 'React portfolio with a light/dark theme and a couple of small games. All content lives in one data file.',
    tech: ['React', 'SCSS'],
    url: 'https://github.com/Tanay-27/portfolioWebsite',
  },
];
