// Single source of personal info, grouped by section. Keep it plain data (no JSX):
// it is imported by client components and by the chat API route.

export const identity = {
  name: 'Mizuki Nakano',
  firstName: 'Mizuki',
  title: 'Senior Data Engineer',
  birthday: '1997-02-12',
  careerStart: '2022-06',
  location: 'Vancouver, BC',
  avatar: '/avatar-mizuki.jpg',
  photo: '/profil-mizuki.png',
  website: 'https://mizukinakano.dev',
};

function yearsSince(date: string, today: Date) {
  const [year, month, day = 1] = date.split('-').map(Number);
  const reached =
    today.getMonth() + 1 > month ||
    (today.getMonth() + 1 === month && today.getDate() >= day);
  return today.getFullYear() - year - (reached ? 0 : 1);
}

export const getAge = (today = new Date()) =>
  yearsSince(identity.birthday, today);

export const getYearsOfExperience = (today = new Date()) =>
  yearsSince(identity.careerStart, today);

const years = getYearsOfExperience();

export const contact = {
  email: 'nmizuki648@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mizukinakano/',
  githubHandle: 'Mizuki8783',
  github: 'https://github.com/Mizuki8783',
};

export const about = {
  tldr: `I'm a ${identity.title} in ${identity.location} who grew up in Japan and studied in the US. I've spent ${years}+ years building data platforms across startups and global enterprises: today at Palm, a San Francisco startup where data is the product, and before that at Accenture and Panalyt in Tokyo.`,
  intro: `Hey 👋\nI'm ${identity.firstName}, a ${identity.title} based in ${identity.location}. I work at Palm, a San Francisco startup where data is the product, building real-time and batch pipelines with Kafka and Spark, plus an AI-assisted system that generates most of them. Before that I was a Data Architect at Accenture and a Data Engineer at Panalyt in Tokyo. I care about data quality as much as the pipelines: once people stop trusting the data, they stop using it.`,
  background: [
    'Grew up in Japan, studied part of high school and entire university in the US',
    `${years}+ years in data engineering across startups and global enterprises`,
    'Experienced in batch and streaming pipelines, data modeling, data governance, and data platforms',
    'Cross-cloud and cross-warehouse: GCP + BigQuery, AWS + S3/Athena, Snowflake, Databricks',
    'Uses AI-assisted, agentic coding workflows to multiply throughput on real production work',
    'Speaks Japanese (native) and English (fluent)',
  ],
  focusAreas: [
    'Data Engineering',
    'Batch & Streaming',
    'Data Modeling',
    'Data Governance',
    'AI-Assisted Engineering',
  ],
  whatIBring: `${years}+ years building data platforms end to end, from seed-stage startups to a global consultancy. At Palm I build real-time and batch ETL with Kafka and Spark, and an AI-assisted system that generates most of our pipelines, onboarding 90+ data sources. At Accenture I ran PySpark ETL on AWS EKS with Airflow, processing millions of records from 50+ sources daily, and directed a team of 4 engineers.\nI treat data quality as a first-class concern (schema registry, drift detection, automated quality monitoring) and bring solid infrastructure habits: Terraform, Kubernetes, and CI/CD.`,
  passion:
    "I'm hooked on AI, especially agentic engineering. I try new AI tools as soon as they ship, and at Palm I turned that into a system that generates most of our data pipelines.\nAway from the keyboard, I'm training in martial arts, especially Muay Thai, or outdoors hiking, cycling, and running.",
};

export const jobSearch = {
  roles: 'Senior Data Engineer, Data Engineer, or Data Architect roles',
  focus:
    'Batch and streaming pipelines, data platforms, data modeling, data quality and governance',
  wants:
    'Challenges that stretch me as a data engineer, cutting-edge tools, and real ownership rather than following detailed instructions',
};

export const education = [
  "Associate's degree in Business, Green River College, Washington (2016–2018)",
  "Bachelor's degree in Marketing, University of Oregon (2018–2020)",
  'Data Science bootcamp, Le Wagon Tokyo (2022)',
  'Data Science Program, Cornerstone International Community College, BC (2025–2026), completed while working full-time at Palm',
];

export const experience = [
  {
    role: 'Senior Data Engineer',
    company: 'Palm',
    summary:
      'San Francisco startup (~15 people) building a platform for unified digital business identity, used by banks, fintechs, and small businesses. Data is the product.',
    location: 'San Francisco, CA (Remote)',
    period: 'September 2025 – Present',
    highlights: [
      'Built real-time and batch ETL pipelines with Apache Kafka and Apache Spark in Scala and SQL, onboarding 90+ data sources by leveraging agentic coding workflows.',
      'Owned data modeling, ETL development, and Airflow orchestration end to end to launch 2 new data product categories, unlocking new partner opportunities.',
      'Optimized SQL queries and PostgreSQL, achieving up to 20x faster data pipeline processing.',
      'Built probabilistic entity resolution linking records across sources with no common key, matching over half of records (~55%) by tuning the matching algorithm.',
      'Built an analytics platform on an AWS S3 Parquet datalake with Athena and Metabase, decoupling analytical workloads and enabling self-serve BI.',
      'Strengthened data governance with a schema registry, schema drift detection, and automated data quality monitoring.',
      'Cut AWS S3 storage costs by 70% with lifecycle policies moving old data to Glacier.',
      'Centralized logging into Elastic Observability with Terraform and Argo CD, and designed CI/CD with keyless image publishing to AWS ECR via GitHub OIDC.',
      'Built Spark and SQL transformations ingesting SEC EDGAR filings, linking regulatory records to business data via CIK identifiers.',
      'Built an internal suite of 7 AI coding skills orchestrating multi-repo work, shipping ~270 PRs between September 2025 and May 2026.',
    ],
  },
  {
    role: 'Data Analyst (Contract)',
    company: 'Booklista',
    summary: 'Japanese ebook platform.',
    location: 'Tokyo, Japan',
    period: 'January 2025 – April 2025',
    highlights: [
      'Built data models and transformation pipelines in Snowflake with Snowpark and Python, powering a revenue-forecasting model that quantified a 4% annual revenue decline from discontinuing the loyalty program.',
      'Engineered SQL transformations in Snowflake to model 8 marketing scenarios across an $800K budget, surfacing a 5% ROI improvement from spend reallocation.',
      'Developed customer-segmentation models isolating a high-CLV segment driving 58% of revenue from 22% of users.',
      'Built Metabase dashboards on Snowflake integrating sales, product, and customer data for 15+ stakeholders.',
    ],
  },
  {
    role: 'Data Architect',
    company: 'Accenture',
    summary:
      'Global consultancy. My client was KDDI, one of the largest telecom companies in Japan, on a program to make its marketing more data-driven.',
    location: 'Tokyo, Japan',
    period: 'October 2023 – January 2025',
    highlights: [
      'Built ETL pipelines end to end with PySpark on AWS EKS orchestrated by Apache Airflow, processing millions of records from 50+ data sources daily.',
      "Architected enterprise-scale data marts for KDDI's marketing analytics, leading 4 engineers from technical design through on-time delivery.",
      'Implemented a data catalog on AWS Glue Data Catalog, improving lineage tracking and speeding up incident resolution.',
      'Established CI/CD pipelines, modular code architecture, and automated testing across the team, improving code quality and deployment reliability.',
      'Represented the data engineering team in a Databricks PoC, benchmarking performance and cost against the existing pipelines to guide a platform migration decision.',
    ],
  },
  {
    role: 'Junior Data Engineer',
    company: 'Panalyt',
    summary: 'Seed-stage HR and people analytics SaaS (~15 people).',
    location: 'Tokyo, Japan (Remote)',
    period: 'June 2022 – September 2023',
    highlights: [
      "Owned client pipelines end to end, building a custom pipeline tailored to each customer's data.",
      'Developed data pipelines in Python and SQL centralizing data into a BigQuery data warehouse, combining in-warehouse SQL transformations with Pandas processing.',
      'Orchestrated pipelines with Apache Airflow and maintained CI/CD with GitHub Actions.',
      'Implemented data validation with Great Expectations, catching data quality issues at ingestion.',
      'Built Looker Studio dashboards to track pipeline health, detect data anomalies, and ensure SLA compliance.',
      'Improved infrastructure with Terraform on GCP, standardizing deployments across 10+ clients.',
    ],
  },
];

export const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'SQL', 'Scala', 'TypeScript'],
  },
  {
    category: 'Backend & Systems',
    items: [
      'PostgreSQL',
      'Elasticsearch',
      'NestJS',
      'Kubernetes',
      'Docker',
      'Terraform',
      'Argo CD',
      'GitHub Actions',
      'Git',
    ],
  },
  {
    category: 'Data Engineering & Analytics Tools',
    items: [
      'Spark',
      'PySpark',
      'Kafka',
      'Airflow',
      'Argo',
      'dbt',
      'Pandas',
      'Snowpark',
      'Great Expectations',
      'Metabase',
      'Looker',
      'Grafana',
    ],
  },
  {
    category: 'Data & Cloud Platforms',
    items: [
      'AWS (S3, EKS, Athena, Glue)',
      'GCP',
      'BigQuery',
      'Snowflake',
      'Databricks',
    ],
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
      'Claude Code',
      'Agentic Coding Workflows',
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
  'Scala',
  'Spark',
  'Kafka',
  'Airflow',
  'dbt',
  'PostgreSQL',
  'AWS',
  'GCP',
  'Snowflake',
  'Kubernetes',
  'Terraform',
  'Agentic Coding (Claude Code)',
];

export const personal = {
  qualities: 'analytical, detail-oriented, collaborative',
  interests:
    'Martial arts (Muay Thai), music (90s-20s hip-hop and R&B), outdoor activities (hiking, cycling, running), and trying new AI tools as soon as they ship',
  hotTake:
    "Most people take clean, structured data for granted. They see a polished Excel report or dashboard and assume that's how the data naturally exists. When I explain data engineering to non-technical people, they often don't realize the extensive work required to transform raw, messy data into something usable. Even within tech teams, there's often insufficient consideration for how data flows through systems, leading to inconsistent naming conventions and poorly structured data that becomes increasingly difficult to work with at scale.",
  dreamProject:
    "Hard data problems I haven't solved before, like building a platform where data is the product, or making messy data with no common keys trustworthy at scale. I want to use current tools, including AI-assisted engineering, and own the work end to end instead of following a detailed spec.",
};

export const activities = {
  summary:
    "When I'm not building data pipelines, I'm training Muay Thai, listening to 90s-20s hip-hop and R&B, or outdoors hiking, cycling, and running. These activities help me stay balanced and inspired.",
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
  lastUpdated: 'October 2026',
  fileSize: '102 KB',
};
