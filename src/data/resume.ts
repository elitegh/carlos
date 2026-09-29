export const personalInfo = {
  name: "Carlos Mbasogo",
  title: "Senior Software Engineer | Full-Stack Engineering",
  subtitle: "AI/ML · Full Stack · Data Engineering",
  email: "cambasogo831@gmail.com",
  phone: "(972) 646-0656",
  location: "Houston, TX",
  github: "https://github.com/CarlosX",
  linkedin: "",
};

export const summary =
  "Senior Software Engineer with 10+ years of experience across Full Stack, AI/ML, and Data Engineering—building scalable enterprise applications, analytics platforms, and intelligent automation systems for social technology, accelerated computing, financial services, and energy domains. Delivers end-to-end full-stack solutions spanning services, APIs, and production workflows, with a strong focus on performance, scalability, and maintainability. Integrates AI/ML capabilities including model-driven insights, LLM applications, and intelligent automation into business platforms. Designs data pipelines, analytics layers, and data-driven systems that turn operational data into reliable reporting and decision support. Proven ability to lead technical initiatives, mentor engineers, and partner with cross-functional teams to ship high-quality software.";

export interface Experience {
  role: string;
  company: string;
  url?: string;
  location: string;
  period: string;
  industryFocus?: string;
  employmentType?: string;
  locationalType?: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Meta",
    url: "https://www.meta.com/",
    location: "Remote",
    period: "Apr 2024 – Present",
    industryFocus: "Social technology, artificial intelligence, and digital platforms",
    employmentType: "Full-time",
    locationalType: "Remote",
    highlights: [
      "Design and develop scalable, reliable software systems and services powering social technology and digital platforms.",
      "Solve complex technical challenges across projects and production systems with a focus on performance and reliability.",
      "Lead technical design and architecture reviews to maintain engineering quality and long-term maintainability.",
      "Mentor engineers and provide technical guidance on system design, code quality, and delivery practices.",
      "Own end-to-end delivery of services and features from design through production release and operational readiness.",
      "Collaborate with AI/ML and product partners to embed intelligent capabilities into platform experiences.",
      "Improve system reliability through thoughtful service boundaries, monitoring, and production hardening.",
      "Drive code reviews and engineering standards that raise quality across cross-functional teams.",
      "Partner with stakeholders to translate product requirements into robust, scalable technical solutions.",
      "Contribute to technical roadmaps and initiatives that strengthen platform scalability and developer velocity.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "NVIDIA",
    url: "https://www.nvidia.com/",
    location: "Remote",
    period: "Aug 2022 – Mar 2024",
    industryFocus: "Accelerated computing, artificial intelligence, and computing platforms",
    employmentType: "Full-time",
    locationalType: "Remote",
    highlights: [
      "Design and develop high-performance, scalable software systems for accelerated computing and AI platforms.",
      "Solve complex engineering challenges involving performance, throughput, and production reliability.",
      "Lead technical design and code reviews to improve software quality and consistency across teams.",
      "Collaborate across engineering teams and mentor developers on performance-focused engineering practices.",
      "Build and optimize services that support AI workloads, platform tooling, and developer-facing workflows.",
      "Improve system efficiency through profiling, caching strategies, and scalable service design.",
      "Partner with cross-functional teams to deliver reliable software for computing platform initiatives.",
      "Establish engineering standards for testing, code quality, and production readiness.",
      "Drive technical decisions that balance performance goals with maintainability and operational clarity.",
      "Support onboarding and mentorship to strengthen team capability on complex platform systems.",
    ],
  },
  {
    role: "Software Engineer",
    company: "alliantgroup",
    location: "Houston, TX",
    period: "Nov 2019 – Jul 2022",
    industryFocus: "Tax consulting, financial services, and business technology",
    employmentType: "Full-time",
    locationalType: "On-site",
    highlights: [
      "Delivered full-stack applications supporting tax consulting workflows, financial services, and business operations.",
      "Built APIs, integrations, and internal tooling that improved data exchange across business technology platforms.",
      "Developed reporting and analytics experiences that turned operational data into actionable business insights.",
      "Modernized legacy systems into maintainable architectures with clearer service and data contracts.",
      "Partnered with engineering, product, and business teams to ship reliable, production-ready software.",
    ],
  },
  {
    role: "Software Engineer",
    company: "EnergyFunders",
    location: "Houston, TX",
    period: "Jun 2016 – Oct 2019",
    industryFocus: "Energy investment, financial technology, and digital investment platforms",
    employmentType: "Full-time",
    locationalType: "On-site",
    highlights: [
      "Built full-stack applications for energy investment platforms covering financial workflows and digital investment operations.",
      "Developed services and APIs that powered investment analysis, reporting, and day-to-day platform processes.",
      "Designed data models and reporting modules to support investment decisions and business visibility.",
      "Partnered with engineering and business stakeholders to deliver reliable, data-centric investment software.",
    ],
  },
];

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "AI / ML",
    skills: [
      "AI/ML Integration",
      "LLM Applications",
      "Intelligent Automation",
      "Data-Driven Systems",
      "Analytics Platforms",
      "Python",
    ],
  },
  {
    category: "Full Stack",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "Vue.js",
      "TypeScript",
      "Node.js",
      "PHP/Laravel",
      "REST APIs",
      "GraphQL",
      "Microservices",
    ],
  },
  {
    category: "Data Engineering",
    skills: [
      "ETL Pipelines",
      "Data Processing",
      "Data Modeling",
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "MongoDB",
      "Redis",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "GitHub Actions",
      "Jenkins",
      "Cloud Architecture",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "JavaScript",
      "SSR",
      "Code Splitting",
    ],
  },
  {
    category: "Testing & Tools",
    skills: [
      "Jest",
      "React Testing Library",
      "Cypress",
      "PHPUnit",
      "Storybook",
      "Webpack",
      "Git",
      "Agile/Scrum",
    ],
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "University of Houston – Clear Lake",
  url: "https://www.uhcl.edu/",
  period: "2012 – 2016",
  location: "Houston, TX",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
