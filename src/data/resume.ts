export const personalInfo = {
  name: "Carlos Mbasogo",
  title: "Senior Software Engineer",
  subtitle:
    "React & Angular Architect | UI Systems & API Integration",
  email: "Cambasogo831@gmail.com",
  phone: "(972) 646-0656",
  location: "Houston, TX",
  github: "https://github.com/adrewfrenenski",
  linkedin: "https://linkedin.com",
};

export const summary =
  "Senior Software Engineer with 10+ years of experience building scalable React, Next.js, and TypeScript applications for dashboards, reporting platforms, workflow tools, and API-driven user experiences. Strong background in UI architecture, reusable component systems, design systems, performance optimization, accessibility, state management, and REST/GraphQL integration. Proven track record improving page-load performance, reducing UI defects, modernizing legacy interfaces, increasing component reuse, and improving frontend delivery quality across internal and customer-facing applications.";

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
      "Architect React, Next.js, and TypeScript frontend systems for internal analytics dashboards across multiple operational teams.",
      "Reduce initial dashboard load time by 40% via server-side rendering, static generation, code splitting, and optimized rendering paths.",
      "Accelerate real-time dashboard responsiveness by integrating REST and GraphQL data flows, cutting average data-fetch latency by 25%.",
      "Standardize frontend architecture patterns, linting rules, and automated testing workflows, reducing recurring UI defects by 15%.",
      "Improve accessibility and responsive behavior across dashboards, increasing cross-device usability for 5 internal teams.",
      "Drive frontend design reviews for architecture, API integration patterns, TypeScript quality, and reusable component strategy.",
      "Mentor 2 junior engineers on React, Next.js, TypeScript, testing, and production-readiness, improving feature delivery consistency.",
      "Collaborate with backend, design, QA, and product teams to optimize workflows, increase dashboard adoption, and reduce user errors.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "HighRadius",
    location: "Houston, TX",
    period: "May 2021 – Mar 2024",
    highlights: [
      "Led React and Next.js frontend architecture for enterprise dashboards, reporting tools, and workflow applications built with TypeScript.",
      "Modernized legacy UI modules into reusable component patterns, reducing maintenance effort by 25% and lowering defect rates by 18%.",
      "Improved Lighthouse performance score from 65 to 88 by optimizing bundle size, render paths, code splitting, and Core Web Vitals.",
      "Integrated REST and GraphQL APIs for reporting dashboards, reducing data-fetch latency by 25% and improving user-facing responsiveness.",
      "Built reusable component libraries adopted by 5 internal applications, improving UI consistency and reducing duplicate implementation work.",
      "Enhanced form validation and error-handling flows, reducing user submission errors by 15%.",
      "Led frontend architecture discussions and code reviews focused on component reuse, performance, accessibility, and TypeScript quality.",
      "Mentored 3 junior developers on React patterns, Next.js architecture, reusable components, and frontend testing practices.",
    ],
  },
  {
    role: "Software Engineer",
    company: "alliantgroup",
    location: "Houston, TX",
    period: "Sep 2018 – Feb 2021",
    highlights: [
      "Built React, Next.js, and TypeScript dashboards for reporting, analytics, and internal workflow visibility, with Angular support for legacy modules.",
      "Migrated frontend state management from legacy Redux patterns to modern state approaches, reducing bundle size by 12KB and improving render performance.",
      "Developed reusable React components for forms, tables, charts, and dashboard modules, reducing duplicate code by 30%.",
      "Integrated backend APIs for analytics and reporting workflows, reducing average data-fetch time by 20% and improving error handling.",
      "Resolved approximately 15 critical production UI defects per year, improving release stability and reducing recurring frontend regressions.",
      "Increased test coverage to 85% using Jest and React Testing Library across core dashboard and reporting components.",
      "Partnered with design, product, backend, and QA teams to improve UX quality, accessibility behavior, and release readiness.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "EnergyFunders",
    location: "Houston, TX",
    period: "Jun 2016 – Aug 2018",
    highlights: [
      "Supported frontend development for internal dashboards used for reporting, analytics review, and day-to-day business operations.",
      "Built and updated React components for forms, tables, filters, charts, and dashboard pages using JavaScript, TypeScript, HTML, and CSS.",
      "Helped maintain Angular-based legacy modules while gradually improving UI behavior and code readability.",
      "Integrated REST API responses into dashboard views, including loading states, validation messages, and basic error handling.",
      "Fixed UI bugs related to browser compatibility, layout issues, form behavior, and responsive design across desktop and tablet screens.",
      "Worked with senior engineers and product stakeholders to clarify requirements, test frontend changes, and support regular feature releases.",
    ],
  },
];

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    category: "Architecture",
    skills: [
      "UI Architecture",
      "Design Systems",
      "Component Libraries",
      "Micro Frontends",
      "Accessibility",
      "Responsive Design",
    ],
  },
  {
    category: "API & Data",
    skills: [
      "REST APIs",
      "GraphQL",
      "Authentication",
      "State Management",
      "Data Fetching",
      "Error Handling",
    ],
  },
  {
    category: "Performance",
    skills: [
      "SSR",
      "SSG",
      "Code Splitting",
      "Lazy Loading",
      "Bundle Optimization",
      "Lighthouse",
      "Core Web Vitals",
    ],
  },
  {
    category: "Testing & Tools",
    skills: [
      "Jest",
      "React Testing Library",
      "Cypress",
      "Storybook",
      "Webpack",
      "Git",
      "GitHub Actions",
    ],
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "University of Houston – Clear Lake",
  period: "2012 – 2016",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
