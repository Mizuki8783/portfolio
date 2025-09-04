import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'AWS Data Pipelines',
    description:
      'End-to-end AWS data engineering project implementing both streaming and batch pipelines. Real-time flow: client → API Gateway → Lambda → Kinesis, with consumers writing to DynamoDB, S3, and Redshift via Firehose. Batch flow: AWS Glue jobs move S3 raw data into Redshift using the Glue Data Catalog.',
    techStack: [
      'Python',
      'AWS API Gateway',
      'AWS Lambda',
      'Amazon Kinesis Data Streams',
      'Amazon Kinesis Data Firehose',
      'AWS Glue',
      'AWS Glue Data Catalog',
      'Amazon S3',
      'Amazon DynamoDB',
      'Amazon Redshift Serverless',
      'IAM',
      'VPC'
    ],
    date: '2025',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Mizuki8783/aws-project',
      },
    ],
    images: [
      {
        src: '/aws-project_img1.png',
        alt: 'AWS data engineering pipelines architecture',
      },
    ],
  },
  {
    title: 'Self-Hosted Streaming Pipeline',
    description:
      'Building a robust real-time data streaming pipeline using Docker containers for scalable data processing. This project will demonstrate containerized microservices architecture for handling high-throughput streaming data with fault tolerance and horizontal scaling capabilities.',
    techStack: [
      'Docker',
      'Kafka',
      'Python',
      'Apache Spark',
      'Redis',
      'PostgreSQL',
      'Prometheus',
      'Grafana'
    ],
    date: 'Coming Soon',
    isClickable: false,
    images: [
      { src: '/upcoming.png', alt: 'Self-hosted streaming pipeline architecture' },
    ],
  },
  {
    title: 'Self-Hosted RAG System',
    description:
      'Developing a complete Retrieval-Augmented Generation system with vector databases and LLM integration. This project will showcase building production-ready RAG pipelines with custom embeddings, semantic search, and context-aware response generation.',
    techStack: [
      'Python',
      'LangChain',
      'ChromaDB',
      'OpenAI API',
      'FastAPI',
      'Docker',
      'PostgreSQL',
      'Vector Embeddings'
    ],
    date: 'Coming Soon',
    isClickable: false,
    images: [
      { src: '/upcoming.png', alt: 'Self-hosted RAG system architecture' },
    ],
  },
  {
    title: 'Snowflake Data Pipeline with DBT',
    description:
      'Creating an enterprise-grade data transformation pipeline using Snowflake and DBT for modern data warehousing. This project will demonstrate advanced data modeling, testing, and documentation practices for scalable analytics infrastructure.',
    techStack: [
      'Snowflake',
      'DBT',
      'SQL',
      'Python',
      'Git',
      'Data Lineage',
      'Data Quality',
      'Analytics Engineering'
    ],
    date: 'Coming Soon',
    isClickable: false,
    images: [
      { src: '/upcoming.png', alt: 'Snowflake DBT pipeline architecture' },
    ],
  },
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
  isClickable?: boolean;
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
                <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
                >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'Data Engineering',
    title: 'AWS Data Pipelines',
    src: '/aws-project_img2.png',
    content: <ProjectContent project={{ title: 'AWS Data Pipelines' }} />,
    isClickable: true,
  },
  {
    category: 'Coming Soon',
    title: 'Self-Hosted Streaming Pipeline',
    src: '/upcoming.png',
    content: <ProjectContent project={{ title: 'Self-Hosted Streaming Pipeline', isClickable: false }} />,
    isClickable: false,
  },
  {
    category: 'Coming Soon',
    title: 'Self-Hosted RAG System',
    src: '/upcoming.png',
    content: <ProjectContent project={{ title: 'Self-Hosted RAG System', isClickable: false }} />,
    isClickable: false,
  },
  {
    category: 'Coming Soon',
    title: 'Snowflake Data Pipeline with DBT',
    src: '/upcoming.png',
    content: <ProjectContent project={{ title: 'Snowflake Data Pipeline with DBT', isClickable: false }} />,
    isClickable: false,
  },
];
