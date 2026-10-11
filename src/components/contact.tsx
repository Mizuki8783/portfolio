'use client';

import { Badge } from '@/components/ui/badge';
import { about, contact, identity, techHighlights } from '@/data/profile';
import { motion } from 'framer-motion';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';

const links = [
  { label: contact.email, href: `mailto:${contact.email}`, icon: Mail },
  { label: 'LinkedIn', href: contact.linkedin, icon: Linkedin },
  { label: 'GitHub', href: `${contact.github}?tab=repositories`, icon: Github },
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
              src={identity.avatar}
              alt={`${identity.firstName}'s avatar`}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-foreground text-2xl font-semibold">
              {identity.name}
            </h2>
            <p className="text-muted-foreground text-sm">{identity.title}</p>
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
        <p className="text-foreground text-sm">{about.tldr}</p>
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
            {techHighlights.map((skill) => (
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
        <p className="text-foreground text-sm whitespace-pre-line">
          {about.whatIBring}
        </p>
      </div>

      <div className="mt-8">
        <p className="text-foreground mb-2 text-lg font-semibold">
          Passion & Interests
        </p>
        <p className="text-foreground text-sm whitespace-pre-line">
          {about.passion}
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href={`mailto:${contact.email}`}
          className="cursor-pointer rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-zinc-800"
        >
          Contact me
        </a>
      </div>
    </motion.div>
  );
}

export default Contact;
