'use client';

import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';

const EMAIL = 'nmizuki648@gmail.com';

const links = [
  { label: EMAIL, href: `mailto:${EMAIL}`, icon: Mail },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mizukinakano/',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Mizuki8783?tab=repositories',
    icon: Github,
  },
];

const techStack = [
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

export function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-accent mx-auto mt-8 w-full max-w-4xl rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12"
    >
      <div className="mb-6 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-muted h-16 w-16 overflow-hidden rounded-full shadow-md">
            <img
              src="/avatar-mizuki.jpg"
              alt="Mizuki's avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-foreground text-2xl font-semibold">
              Mizuki Nakano
            </h2>
            <p className="text-muted-foreground text-sm">Data Engineer</p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 sm:mt-0">
          <span className="flex items-center gap-1 rounded-full border border-green-500 px-3 py-0.5 text-sm font-medium text-green-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Open to work
          </span>
        </div>
      </div>

      <div>
        <p className="text-foreground mb-2 text-lg font-semibold">TL;DR</p>
        <p className="text-foreground text-sm">
          I&apos;m a Data Engineer in Vancouver, BC who grew up in Japan and
          studied in the US. I spent 3+ years in Tokyo building data platforms
          at Accenture and Panalyt, and now I&apos;m focused on where data
          engineering meets AI.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
        {links.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-blue-500 hover:underline"
          >
            <Icon className="h-4 w-4" />
            {label}
          </a>
        ))}
      </div>

      <div className="mt-8 flex items-start gap-3">
        <Code2 className="mt-1 h-5 w-5 shrink-0 text-purple-500" />
        <div className="w-full">
          <p className="text-foreground mb-2 text-sm font-medium">Tech stack</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((skill) => (
              <Badge key={skill} className="border px-3 py-1.5 font-normal">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-foreground mb-2 text-lg font-semibold">
          What I bring
        </p>
        <p className="text-foreground text-sm">
          3+ years building data platforms end to end, as a Data Architect at
          Accenture, a Data Engineer at Panalyt, and a freelance analyst for
          Booklista. I&apos;ve built PySpark data marts on AWS EKS, Airflow-driven
          ETL into BigQuery, and kept 20+ DAGs across 50+ sources running
          reliably. <br /> I bring solid data modeling and governance (data
          catalogs, lineage, quality checks), CI/CD and Terraform habits, and
          the ability to turn business requirements into technical specs and
          lead engineers through delivery.
        </p>
      </div>

      <div className="mt-8">
        <p className="text-foreground mb-2 text-lg font-semibold">
          Passion & Interests
        </p>
        <p className="text-foreground text-sm">
          I&apos;m hooked on AI: building RAG systems, AI agents, and intelligent
          data pipelines on top of solid data foundations. <br /> Away from the
          keyboard, I&apos;m training in martial arts, especially Muay Thai, or
          outdoors hiking, cycling, and running.
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href={`mailto:${EMAIL}`}
          className="cursor-pointer rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-zinc-800"
        >
          Contact me
        </a>
      </div>
    </motion.div>
  );
}

export default Contact;
