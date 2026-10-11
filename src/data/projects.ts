export const projects = [
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
      'dbt project that turns raw Airbnb listings, bookings and hosts data in Snowflake into an analytics-ready warehouse using a medallion (bronze → silver → gold) architecture. Incremental bronze and silver models clean and enrich the data, the gold layer builds a Jinja-generated one big table and fact table, and SCD Type 2 snapshots track dimension history.',
    techStack: [
      'Snowflake',
      'dbt Core',
      'SQL',
      'Jinja',
      'Python',
      'uv',
      'Medallion Architecture',
      'SCD Type 2'
    ],
    date: '2026',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Mizuki8783/airbnb-warehouse-pipeline',
      },
    ],
    images: [
      {
        src: '/snowflake-dbt_img1.png',
        alt: 'Snowflake dbt medallion pipeline architecture',
      },
    ],
  },
];
