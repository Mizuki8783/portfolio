'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, type Variants } from 'framer-motion';
import { skills } from '@/data/profile';
import {
  Brain,
  Cloud,
  Code,
  Cpu,
  Database,
  Users,
  type LucideIcon,
} from 'lucide-react';

const categoryIcons: Record<string, LucideIcon> = {
  'Programming Languages': Code,
  'Backend & Systems': Cpu,
  'Data Engineering & Analytics Tools': Database,
  'Data & Cloud Platforms': Cloud,
  'Soft Skills': Users,
  'AI & LLM': Brain,
};

const Skills = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] },
    },
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="mx-auto w-full max-w-5xl rounded-4xl"
    >
      <Card className="w-full border-none px-0 pb-12 shadow-none">
        <CardHeader className="px-0 pb-1">
          <CardTitle className="text-primary px-0 text-4xl font-bold">
            Skills & Expertise
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0">
          <motion.div
            className="space-y-8 px-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skills.map((section) => {
              const Icon = categoryIcons[section.category] ?? Code;
              return (
                <motion.div
                  key={section.category}
                  className="space-y-3 px-0"
                  variants={itemVariants}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5" />
                    <h3 className="text-accent-foreground text-lg font-semibold">
                      {section.category}
                    </h3>
                  </div>

                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {section.items.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        variants={badgeVariants}
                        whileHover={{
                          scale: 1.04,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <Badge className={`border px-3 py-1.5 font-normal`}>
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Skills;
