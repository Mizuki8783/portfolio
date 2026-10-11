// Single source of personal info, grouped by section. Keep it plain data (no JSX):
// it is imported by client components and by the chat API route.

export const identity = {
  name: 'Mizuki Nakano',
  firstName: 'Mizuki',
  title: 'Data Engineer',
  birthday: '1997-02-12',
  location: 'Vancouver, BC',
  relocation: 'open to relocate within Canada and US',
  avatar: '/avatar-mizuki.jpg',
  photo: '/profil-mizuki.png',
  website: 'https://mizukinakano.dev',
};

export function getAge(today = new Date()) {
  const [year, month, day] = identity.birthday.split('-').map(Number);
  const hadBirthday =
    today.getMonth() + 1 > month ||
    (today.getMonth() + 1 === month && today.getDate() >= day);
  return today.getFullYear() - year - (hadBirthday ? 0 : 1);
}

export const contact = {
  email: 'nmizuki648@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mizukinakano/',
  githubHandle: 'Mizuki8783',
  github: 'https://github.com/Mizuki8783',
};

export const about = {
  tldr: `I'm a ${identity.title} in ${identity.location} who grew up in Japan and studied in the US. I spent 3+ years in Tokyo building data platforms at Accenture and Panalyt, and now I'm focused on where data engineering meets AI.`,
  intro: `Hey 👋\nI'm ${identity.firstName}, a ${identity.title} based in ${identity.location} with experience in data engineering and analytics. I've worked at Accenture as a Data Architect and Panalyt as a Junior Data Engineer, building scalable data solutions and ETL pipelines. I'm passionate about leveraging data and innovative technology to drive business value.`,
  background: [
    'Grew up in Japan, studied part of high school and entire university in the US',
    'Experienced in data architecture, ETL pipelines, and analytics',
    'Passionate about data governance, data modeling, and building scalable data solutions',
    'Strong background in both technical implementation and strategic data planning',
  ],
  focusAreas: [
    'Data Engineer/Analytics',
    'Data Architecture',
    'ETL',
    'Data Governance',
    'AI/ML',
  ],
  whatIBring:
    "3+ years building data platforms end to end, as a Data Architect at Accenture, a Data Engineer at Panalyt, and a freelance analyst for Booklista. I've built PySpark data marts on AWS EKS, Airflow-driven ETL into BigQuery, and kept 20+ DAGs across 50+ sources running reliably.\nI bring solid data modeling and governance (data catalogs, lineage, quality checks), CI/CD and Terraform habits, and the ability to turn business requirements into technical specs and lead engineers through delivery.",
  passion:
    "I'm hooked on AI: building RAG systems, AI agents, and intelligent data pipelines on top of solid data foundations.\nAway from the keyboard, I'm training in martial arts, especially Muay Thai, or outdoors hiking, cycling, and running.",
};

export const jobSearch = {
  roles: 'Full-time Data Engineer positions',
  focus:
    'Data engineering, data architecture, ETL pipelines, data governance, AI/ML',
};

export const education = [
  "Graduated from University of Oregon in 2020 with a Bachelor's degree in Marketing",
  'Attended Le Wagon Tokyo coding bootcamp to learn Data Science in 2022',
  'Worked a few years in Japan as a Data Engineer',
  'Currently taking a Co-op program at Cornerstone International Community College in Vancouver, BC.',
];

export const experience = [
  {
    role: 'Freelance Data Analyst',
    company: 'Booklista',
    location: 'Tokyo, Japan',
    period: 'January 2025 – April 2025',
    highlights: [
      'Built a statistical model to forecast revenue impact from discontinuing the customer loyalty program, supporting strategic planning and risk assessment.',
      'Conducted what-if analysis to model cost and profit scenarios across marketing budget reallocations, evaluating ROI trade-offs between initiatives.',
      'Analyzed customer purchase behavior across multiple segments to identify patterns associated with high customer lifetime value, supporting data-driven marketing strategies and customer retention initiatives.',
      "Developed interactive dashboards in Metabase by integrating sales, product, and customer data to support the marketing team's promotion strategy.",
    ],
  },
  {
    role: 'Data Architect',
    company: 'Accenture',
    location: 'Tokyo, Japan',
    period: 'October 2023 – January 2025',
    highlights: [
      'Built scalable data marts using PySpark running on AWS EKS, processing large volumes of marketing data to drive data-informed decisions.',
      'Architected data marts and ensured on-time delivery by translating business requirements into technical specs, assigning tasks to engineers, and overseeing execution.',
      'Monitored 20+ DAGs and 50+ data sources, ensuring pipeline reliability and fast incident recovery.',
      'Created a centralized data catalog to improve data governance, lineage tracking, and accelerate incident resolution.',
      'Standardized development workflows by introducing CI/CD pipelines, modular code structure, and code review guidelines across the team.',
      'Represented the data engineering team in a cross-team Databricks PoC, testing performance gains and cost efficiency for ETL workloads compared to existing PySpark on EKS pipelines.',
    ],
  },
  {
    role: 'Junior Data Engineer',
    company: 'Panalyt',
    location: 'Tokyo, Japan',
    period: 'June 2022 – September 2023',
    highlights: [
      'Developed data pipelines using Python and SQL for multi-source data ingestion, transformation, and data modeling into a centralized BigQuery data warehouse, utilizing both in-warehouse SQL and external processing with pandas.',
      'Leveraged Apache Airflow for data orchestration, allowing scheduled and dependency-aware executions of ETL pipelines.',
      'Integrated data validation and quality checks into ETL workflows to support data governance and ensure data integrity.',
      'Built real-time monitoring dashboards using Looker to track pipeline health, detect failures proactively, and ensure SLA compliance.',
      'Maintained CI/CD pipelines using GitHub Actions to support automated deployment and testing.',
      'Utilized Terraform to manage and provision infrastructure following infrastructure-as-code practices.',
    ],
  },
];

export const skills = [
  { category: 'Programming Languages', items: ['Python', 'SQL'] },
  {
    category: 'Backend & Systems',
    items: ['PostgreSQL', 'Git', 'GitHub', 'Docker', 'Terraform'],
  },
  {
    category: 'Data Engineering & Analytics Tools',
    items: [
      'Pandas',
      'PySpark',
      'Snowpark',
      'Airflow',
      'dbt',
      'Great Expectations',
      'Metabase',
    ],
  },
  {
    category: 'Data & Cloud Platforms',
    items: ['AWS', 'GCP', 'Snowflake', 'Databricks', 'BigQuery'],
  },
  {
    category: 'Soft Skills',
    items: [
      'Data Governance',
      'Data Modeling',
      'Data Warehousing',
      'ETL',
      'Problem-Solving',
      'Clear Communication',
      'Leadership',
      'Adaptability',
    ],
  },
  {
    category: 'AI & LLM',
    items: [
      'LLM Providers (OpenAI, Anthropic, Google)',
      'AI Agent',
      'Prompt Engineering',
      'Vector Database',
      'RAG',
      'Supabase',
      'Cursor',
    ],
  },
];

export const techHighlights = [
  'Python',
  'SQL',
  'dbt',
  'Airflow',
  'PySpark',
  'Snowflake',
  'Databricks',
  'AWS',
  'GCP',
  'RAG',
  'AI Agents',
  'LLMs (OpenAI, Anthropic, Google)',
];

export const personal = {
  qualities: 'analytical, detail-oriented, collaborative',
  interests:
    'Music (90s-20s HIP-HOP and R&B), outdoor activities (hiking, bicycling, running)',
  hotTake:
    "Most people take clean, structured data for granted. They see a polished Excel report or dashboard and assume that's how the data naturally exists. When I explain data engineering to non-technical people, they often don't realize the extensive work required to transform raw, messy data into something usable. Even within tech teams, there's often insufficient consideration for how data flows through systems, leading to inconsistent naming conventions and poorly structured data that becomes increasingly difficult to work with at scale.",
  dreamProject:
    'A project that involves building scalable data infrastructure from the ground up, implementing cutting-edge AI/ML solutions like RAG systems or intelligent data pipelines, or creating innovative analytics platforms that transform how businesses make data-driven decisions.',
};

export const activities = {
  summary:
    "When I'm not working on data engineering projects, I enjoy music and outdoor activities. I'm passionate about 90s-20s HIP-HOP and R&B music, and love spending time outdoors hiking, bicycling, and running. These activities help me stay balanced and inspired.",
  photos: [
    {
      src: '/mnt_fuji_1.jpg',
      alt: 'Top of Mt. Fuji',
      caption: 'First time hiking to the top of Mt. Fuji',
    },
    {
      src: '/mnt_fuji_2.jpg',
      alt: 'Morning sunrise from the top of Mt. Fuji',
      caption: 'Morning sunrise from the top of Mt. Fuji',
    },
    {
      src: '/hiking.jpg',
      alt: 'Hiking in the mountains',
      caption: 'Hiking in the mountains',
    },
    {
      src: '/dj.jpg',
      alt: 'DJing at a bar',
      caption: 'DJing my favorite songs at a bar',
    },
    {
      src: '/bicycle.jpg',
      alt: 'Bicycling on scenic routes',
      caption: 'Pedalpalooza event in Portland, OR',
    },
    {
      src: '/run.jpg',
      alt: 'Running in the mountains',
      caption: 'First time running a full marathon',
    },
  ],
};

export const resume = {
  file: '/resume_mizuki.pdf',
  preview: '/resume_mizuki_preview.png',
  lastUpdated: 'March 2025',
  fileSize: '0.5 MB',
};
