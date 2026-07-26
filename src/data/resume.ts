export const personalInfo = {
  name: "Carlos Mbasogo",
  title: "Senior Software Engineer | Full-Stack Engineering",
  subtitle: "AI/ML · Full Stack · Data Engineering",
  email: "cambasogo831@gmail.com",
  phone: "(972) 646-0656",
  location: "Houston, TX",
  github: "https://github.com/CarlosX",
  linkedin: "https://www.linkedin.com/in/carlos-mbasogo-80260836",
};

export const summary =
  "Senior Software Engineer with 10+ years of experience across Full Stack, AI/ML, and Data Engineering—building scalable enterprise applications, analytics platforms, and intelligent automation systems for technology, SaaS, financial automation, and energy domains. Delivers end-to-end full-stack solutions spanning services, APIs, and production workflows, with a strong focus on performance, scalability, and maintainability. Integrates AI/ML capabilities including model-driven insights, LLM applications, and intelligent automation into business platforms. Designs data pipelines, analytics layers, and data-driven systems that turn operational data into reliable reporting and decision support. Proven ability to lead technical initiatives, mentor engineers, and partner with cross-functional teams to ship high-quality software.";

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Meta",
    location: "Remote",
    period: "Apr 2024 – Present",
    highlights: [
      "Own full-stack delivery of analytics platforms, operational dashboards, and workflow systems from API design through production release.",
      "Collaborate with AI/ML teams to embed intelligent automation, model outputs, and LLM-powered features into internal products.",
      "Build and operate data pipelines that feed analytics platforms with reliable, timely datasets for reporting and decision support.",
      "Design scalable service and data architectures that improve performance, caching, and end-to-end system reliability.",
      "Partner across product and engineering to turn raw operational data into actionable insights for multiple internal teams.",
      "Set standards for full-stack quality, data integrity, testing, and production readiness across platform initiatives.",
      "Mentor engineers on full-stack delivery, AI/ML integration patterns, and data engineering practices.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "HighRadius",
    location: "Houston, TX",
    period: "Aug 2021 – Mar 2024",
    highlights: [
      "Led full-stack engineering for enterprise financial automation platforms spanning services, APIs, and customer-facing workflows.",
      "Integrated AI/ML and intelligent automation into financial processes to reduce manual work and speed decision cycles.",
      "Built data engineering pipelines and analytics reporting layers that supported finance operations and executive insights.",
      "Designed API-driven microservices and integrations connecting enterprise systems, automation engines, and reporting platforms.",
      "Modernized legacy platforms into scalable full-stack architectures with clearer service and data boundaries.",
      "Improved reliability of data flows and application delivery through CI/CD, automated testing, and engineering standards.",
      "Guided cross-functional delivery of automation and analytics solutions across financial business domains.",
    ],
  },
  {
    role: "Software Engineer",
    company: "alliantgroup",
    location: "Houston, TX",
    period: "Nov 2018 – Jul 2021",
    highlights: [
      "Delivered full-stack enterprise applications supporting business operations, workflows, and internal tooling.",
      "Built data engineering foundations for reporting systems—modeling, transforming, and serving operational datasets.",
      "Developed APIs, authentication, and third-party integrations enabling secure data exchange across platforms.",
      "Created analytics and reporting experiences that converted business data into actionable operational insights.",
      "Modernized legacy systems into maintainable full-stack architectures with stronger API and data contracts.",
      "Improved application and data reliability through performance tuning, automated testing, and production support.",
      "Collaborated with engineering, product, QA, and business teams to ship scalable, data-informed solutions.",
    ],
  },
  {
    role: "Software Engineer",
    company: "EnergyFunders",
    location: "Houston, TX",
    period: "Jun 2016 – Oct 2018",
    highlights: [
      "Built full-stack applications for energy investment platforms covering financial workflows and operational processes.",
      "Developed data-backed services and APIs that powered investment analysis, reporting, and day-to-day operations.",
      "Designed data models and reporting modules to support investment decisions and business visibility.",
      "Implemented end-to-end workflow features connecting user experiences to backend services and structured data stores.",
      "Optimized data access and application performance for investment and reporting workloads.",
      "Partnered with engineering, product, and business stakeholders to deliver reliable, data-centric software.",
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
  period: "2016",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
